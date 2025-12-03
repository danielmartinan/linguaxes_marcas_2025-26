#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar justificantes de asistencia a examen
a partir de una plantilla markdown y un CSV con los datos de los alumnos.
"""

import csv
import os
from pathlib import Path


def generar_justificantes(csv_file, plantilla_file, output_dir=None, 
                         dia_examen='11 de diciembre de 2025', 
                         hora_inicio='18:45', 
                         hora_fin='21:45', 
                         aula='S02',
                         profesor='Daniel Martiñán Otero'):
    """
    Genera justificantes individuales para cada alumno del CSV.
    
    Args:
        csv_file: Ruta al archivo CSV con los datos de los alumnos
        plantilla_file: Ruta al archivo de plantilla markdown
        output_dir: Directorio donde guardar los justificantes (opcional)
        dia_examen: Fecha del examen (por defecto: '11 de diciembre de 2025')
        hora_inicio: Hora de inicio del examen (por defecto: '19:30')
        hora_fin: Hora de finalización del examen (por defecto: '22:15')
        aula: Aula donde se realiza el examen (por defecto: 'S02')
        profesor: Nombre del profesor (por defecto: 'Daniel Martiñán Otero')
    """
    # Si no se especifica directorio de salida, usar el mismo del CSV
    if output_dir is None:
        output_dir = os.path.dirname(csv_file)
    
    # Leer la plantilla
    with open(plantilla_file, 'r', encoding='utf-8') as f:
        plantilla = f.read()
    
    # Leer el CSV y generar justificantes
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        count = 0
        
        for alumno in reader:
            nombre = alumno['Nome completo']
            dni = alumno['DNI'].upper()
            id_alumno = alumno['id']
            
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


if __name__ == '__main__':
    # Configuración de rutas (ajustar según necesidad)
    script_dir = Path(__file__).parent
    csv_file = script_dir / 'asistentes_t1 - daw.csv'
    plantilla_file = script_dir / 'plantilla_justificante.md'
    
    # Configuración del examen (modificar según necesidad)
    DIA_EXAMEN = '11 de diciembre de 2025'
    HORA_INICIO = '19:30'
    HORA_FIN = '22:15'
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
                         profesor=PROFESOR)
