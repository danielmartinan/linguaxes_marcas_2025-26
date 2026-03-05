#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar justificantes de asistencia a examen
a partir de una plantilla markdown y un CSV con los datos de los alumnos.
"""

import csv
import argparse
import os
from pathlib import Path


def obtener_campo(fila, opciones, obligatorio=True):
    """Devuelve el primer campo disponible de una lista de nombres posibles."""
    for nombre in opciones:
        if nombre in fila and str(fila[nombre]).strip():
            return str(fila[nombre]).strip()
    if obligatorio:
        raise KeyError(f'No se encontró ninguna de estas columnas: {", ".join(opciones)}')
    return ''


def valor_xusti_es_si(valor):
    """Interpreta valores tipo '1', '1 : Si' o similares como afirmativo."""
    if valor is None:
        return False
    texto = str(valor).strip().lower()
    if not texto:
        return False
    return texto == '1' or texto.startswith('1 ' ) or texto.startswith('1:') or texto.startswith('1 :')


def generar_listado_tabla(alumnos, output_dir, nombre_archivo='listado_firmas.md'):
    """Genera un listado en tabla HTML para asegurar ancho completo en Markdown PDF."""
    ruta_salida = os.path.join(output_dir, nombre_archivo)
    lineas = [
        '![](encabezado.png)',
        '',
        '#### LISTADO PRESENTADOS AO EXAME PARCIAL PRESENCIAL DE LINGUAXES DE MARCAS E SISTEMAS DE XESTIÓN DA INFORMACIÓN (ASIR) (2º TRIMESTRE)',
        '',
        '<style>',
        '  table.listado-firmas { width: 100%; table-layout: fixed; border-collapse: collapse; }',
        '  table.listado-firmas th, table.listado-firmas td { border: 1px solid #444; padding: 8px; text-align: left; }',
        '  table.listado-firmas th:nth-child(1), table.listado-firmas td:nth-child(1) { width: 42%; }',
        '  table.listado-firmas th:nth-child(2), table.listado-firmas td:nth-child(2) { width: 18%; }',
        '  table.listado-firmas th:nth-child(3), table.listado-firmas td:nth-child(3) { width: 15%; }',
        '  table.listado-firmas th:nth-child(4), table.listado-firmas td:nth-child(4) { width: 25%; }',
        '</style>',
        '',
        '<table class="listado-firmas">',
        '  <thead>',
        '    <tr><th>Nome completo</th><th>DNI</th><th>Mesa</th><th>Firma</th></tr>',
        '  </thead>',
        '  <tbody>',
    ]

    for alumno in alumnos:
        nombre_completo = obtener_campo(alumno, ['Nome completo', 'Nombre completo', 'nome completo'], obligatorio=False)
        if not nombre_completo:
            nombre = obtener_campo(alumno, ['Q00_nome', 'Nombre', 'nome'], obligatorio=False)
            ap1 = obtener_campo(alumno, ['Q00_ap1', 'Apellido', 'apelido'], obligatorio=False)
            ap2 = obtener_campo(alumno, ['Q00_ap2', 'Apellido2', 'apelido2'], obligatorio=False)
            nombre_completo = f'{nombre} {ap1} {ap2}'.strip()
        dni = obtener_campo(alumno, ['DNI', 'dni', 'Q00_dni'])
        mesa = obtener_campo(alumno, ['Mesa', 'mesa'], obligatorio=False)

        # Escapado basico para contenido HTML de tabla.
        nombre_completo = nombre_completo.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        dni = dni.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').upper()
        mesa = mesa.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;') if mesa else '&nbsp;'

        # &nbsp; evita que la celda vacia colapse en algunos motores de PDF.
        lineas.append(f'    <tr><td>{nombre_completo}</td><td>{dni}</td><td>{mesa}</td><td>&nbsp;</td></tr>')

    lineas.extend([
        '  </tbody>',
        '</table>',
        '<div style="height: 20px;"></div>',
        'Daniel Martiñán Otero, responsable do módulo Linguaxes de Marcas e sistemas de Xestión da Información, que se imparte no IES Armando Cotarelo Valledor no 1º curso do Ciclo Superior de Desenvolvemento de Aplicacións Web na modalidade de distancia no curso 2025-2026.', 
        '',
        'O resumo desta proba son ______ participantes, presentados ____ '
        '<div style="height: 20px;"></div>',
        'Vilagarcía de Arousa, a 19 de maio de 2025 '
    ])

    with open(ruta_salida, 'w', encoding='utf-8') as f_out:
        f_out.write('\n'.join(lineas) + '\n')

    print(f'📝 Listado generado: {Path(ruta_salida).name}')


def generar_justificantes(csv_file, plantilla_file, output_dir=None, 
                         dia_examen='09 de marzo de 2026', 
                         hora_inicio='18:45', 
                         hora_fin='21:45', 
                         aula='S02',
                         profesor='Daniel Martiñán Otero',
                         listado_salida='listado_firmas.md'):
    """
    Genera justificantes individuales para cada alumno del CSV.
    
    Args:
        csv_file: Ruta al archivo CSV con los datos de los alumnos
        plantilla_file: Ruta al archivo de plantilla markdown
        output_dir: Directorio donde guardar los justificantes (opcional)
        dia_examen: Fecha del examen (por defecto: '09 de marzo de 2026')
        hora_inicio: Hora de inicio del examen (por defecto: '18:45')
        hora_fin: Hora de finalización del examen (por defecto: '21:45')
        aula: Aula donde se realiza el examen (por defecto: 'S02')
        profesor: Nombre del profesor (por defecto: 'Daniel Martiñán Otero')
        listado_salida: Nombre del archivo de listado (por defecto: 'listado_firmas.md')
    """
    # Si no se especifica directorio de salida, usar el mismo del CSV
    if output_dir is None:
        output_dir = os.path.dirname(csv_file)
    
    # Leer la plantilla
    with open(plantilla_file, 'r', encoding='utf-8') as f:
        plantilla = f.read()
    
    # Leer el CSV una vez para reutilizar los datos
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        alumnos = list(reader)

    # Generar listado de firma con todos los alumnos del CSV
    generar_listado_tabla(alumnos, output_dir, listado_salida)

    # Generar justificantes solo para quien tenga Q00_xusti=1
    count = 0
    omitidos = 0

    for alumno in alumnos:
        xusti = obtener_campo(alumno, ['Q00_xusti', 'xusti', 'XUSTI'], obligatorio=False)
        if not valor_xusti_es_si(xusti):
            omitidos += 1
            continue

        nombre = obtener_campo(alumno, ['Nome completo', 'Nombre completo', 'nome completo'])
        dni = obtener_campo(alumno, ['DNI', 'dni', 'Q00_dni']).upper()
        id_alumno = obtener_campo(alumno, ['id', 'ID'])
        
        # Reemplazar los marcadores en la plantilla
        contenido = plantilla.replace('El/la alumno/a xxx', f'El/la alumno/a {nombre}')
        contenido = contenido.replace('con DNI XXXXX', f'con DNI {dni}')
        contenido = contenido.replace('Daniel Martiñán Otero', profesor)
        contenido = contenido.replace('19:30', hora_inicio)
        contenido = contenido.replace('22:15', hora_fin)
        contenido = contenido.replace('aula S02', f'aula {aula}')
        contenido = contenido.replace('11 de diciembre de 2025', dia_examen)
        
        # Generar nombre de archivo (sanitizando el nombre del alumno)
        nombre_archivo = f'justificante_{id_alumno}_{nombre.replace(" ", "_")}.md'
        ruta_completa = os.path.join(output_dir, nombre_archivo)
        
        # Guardar el justificante
        with open(ruta_completa, 'w', encoding='utf-8') as f_out:
            f_out.write(contenido)
        
        count += 1
        print(f'✓ Generado: {nombre_archivo}')

    print(f'\n✅ Total: {count} justificantes generados en {output_dir}')
    print(f'ℹ️  Omitidos por Q00_xusti distinto de 1: {omitidos}')


if __name__ == '__main__':
    # Configuración de rutas (ajustar según necesidad)
    script_dir = Path(__file__).parent

    parser = argparse.ArgumentParser(
        description='Genera justificantes a partir de un CSV y una plantilla markdown.'
    )
    parser.add_argument(
        '--csv',
        dest='csv_file',
        help='Ruta al CSV. Si no se indica, se usa el único .csv del directorio del script.'
    )
    parser.add_argument(
        '--listado-salida',
        dest='listado_salida',
        default='listado_firmas.md',
        help='Nombre de archivo para el listado de firmas (por defecto: listado_firmas.md).'
    )
    parser.add_argument(
        '--dia-examen',
        dest='dia_examen',
        default='09 de marzo de 2026',
        help='Fecha del examen que se insertará en los justificantes.'
    )
    args = parser.parse_args()

    if args.csv_file:
        csv_file = Path(args.csv_file)
    else:
        csv_files = sorted(script_dir.glob('*.csv'))
        if len(csv_files) == 0:
            print(f'❌ Error: No se encontró ningún CSV en: {script_dir}')
            exit(1)
        if len(csv_files) > 1:
            print('❌ Error: Hay varios CSV en el directorio. Indica cuál usar con --csv')
            for f in csv_files:
                print(f' - {f.name}')
            exit(1)
        csv_file = csv_files[0]

    plantilla_file = script_dir / 'plantilla_justificante.md'
    
    # Configuración del examen (modificar según necesidad)
    DIA_EXAMEN = args.dia_examen
    HORA_INICIO = '18:45'
    HORA_FIN = '21:45'
    AULA = 'S02'
    PROFESOR = 'Daniel Martiñán Otero'
    
    # Verificar que existen los archivos
    if not csv_file.exists():
        print(f'❌ Error: No se encuentra el archivo CSV: {csv_file}')
        exit(1)
    
    if not plantilla_file.exists():
        print(f'❌ Error: No se encuentra el archivo de plantilla: {plantilla_file}')
        exit(1)
    
    # Generar justificantes
    print('🚀 Generando justificantes...\n')
    generar_justificantes(str(csv_file), str(plantilla_file), 
                         dia_examen=DIA_EXAMEN,
                         hora_inicio=HORA_INICIO,
                         hora_fin=HORA_FIN,
                         aula=AULA,
                         profesor=PROFESOR,
                         listado_salida=args.listado_salida)
