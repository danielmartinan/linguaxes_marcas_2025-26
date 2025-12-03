#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar justificantes de asistencia a examen
a partir de una plantilla markdown y un CSV con los datos de los alumnos.
Incluye opción para generar PDFs usando el script Node.js existente.
"""

import csv
import os
import subprocess
from pathlib import Path


def generar_justificantes(csv_file, plantilla_file, output_dir=None, generar_pdf=False,
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
        generar_pdf: Si es True, genera también PDFs de los justificantes (por defecto: False)
        dia_examen: Fecha del examen (por defecto: '11 de diciembre de 2025')
        hora_inicio: Hora de inicio del examen (por defecto: '18:45')
        hora_fin: Hora de finalización del examen (por defecto: '21:45')
        aula: Aula donde se realiza el examen (por defecto: 'S02')
        profesor: Nombre del profesor (por defecto: 'Daniel Martiñán Otero')
    """
    # Si no se especifica directorio de salida, usar el mismo del CSV
    if output_dir is None:
        output_dir = os.path.dirname(csv_file)
    
    # Leer la plantilla
    with open(plantilla_file, 'r', encoding='utf-8') as f:
        plantilla = f.read()
    
    # Leer el CSV y generar justificantes markdown
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        count = 0
        archivos_generados = []
        
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
            
            archivos_generados.append(nombre_archivo)
            count += 1
            print(f'✓ Generado: {nombre_archivo}')
    
    print(f'\n✅ Total: {count} justificantes markdown generados en {output_dir}')
    
    # Generar PDFs si se solicita
    if generar_pdf:
        generar_pdfs_justificantes(output_dir, archivos_generados)


def generar_pdfs_justificantes(output_dir, archivos_md):
    """
    Genera PDFs de los justificantes usando el script Node.js export-single-doc.js
    
    Args:
        output_dir: Directorio donde están los archivos markdown
        archivos_md: Lista de nombres de archivos markdown a convertir
    """
    print('\n📄 Generando PDFs...\n')
    
    # Verificar que Node.js esté disponible
    try:
        subprocess.run(['node', '--version'], check=True, capture_output=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print('❌ Error: Node.js no está instalado o no está en el PATH')
        return
    
    # Ruta al script de exportación
    script_dir = Path(__file__).parent.parent.parent.parent / 'scripts'
    export_script = script_dir / 'export-single-doc.js'
    
    if not export_script.exists():
        print(f'❌ Error: No se encuentra el script {export_script}')
        return
    
    # Verificar que el servidor Docusaurus esté corriendo
    print('⚠️  IMPORTANTE: Asegúrate de que el servidor Docusaurus esté corriendo')
    print('   Ejecuta: npm start (en otra terminal)')
    input('\nPresiona ENTER cuando el servidor esté listo...')
    
    # Generar PDFs
    pdf_count = 0
    for archivo_md in archivos_md:
        # Construir la ruta relativa desde docs/
        ruta_relativa = f'_examenes/examen_T1/listados/{archivo_md[:-3]}'  # quitar .md
        
        try:
            result = subprocess.run(
                ['node', str(export_script), ruta_relativa],
                check=True,
                capture_output=True,
                text=True,
                cwd=str(script_dir)
            )
            print(f'✓ PDF generado: {archivo_md[:-3]}.pdf')
            pdf_count += 1
        except subprocess.CalledProcessError as e:
            print(f'❌ Error al generar PDF para {archivo_md}: {e.stderr}')
    
    print(f'\n✅ Total: {pdf_count} PDFs generados en static/pdfs/_examenes/examen_T1/listados/')


if __name__ == '__main__':
    # Configuración de rutas (ajustar según necesidad)
    script_dir = Path(__file__).parent
    csv_file = script_dir / 'asistentes_t1 - daw.csv'
    plantilla_file = script_dir / 'plantilla_justificante.md'
    
    # Configuración del examen (modificar según necesidad)
    DIA_EXAMEN = '11 de diciembre de 2025'
    HORA_INICIO = '18:45'
    HORA_FIN = '21:45'
    AULA = 'S02'
    PROFESOR = 'Daniel Martiñán Otero'
    GENERAR_PDF = True  # Cambiar a False si solo quieres los archivos markdown
    
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
                         generar_pdf=GENERAR_PDF,
                         dia_examen=DIA_EXAMEN,
                         hora_inicio=HORA_INICIO,
                         hora_fin=HORA_FIN,
                         aula=AULA,
                         profesor=PROFESOR)
