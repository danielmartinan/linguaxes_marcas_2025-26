# Rúbrica LMSXI05 para Moodle

## Compatibilidad con Moodle

En Moodle estándar, la rúbrica de calificación avanzada se puede **crear manualmente**, **reutilizar como plantilla** o **copiar al restaurar una actividad o un curso**, pero no suele disponer de una opción nativa para **importarla directamente desde un fichero CSV, TXT o XML** desde la interfaz de la tarea.

Por tanto, este directorio incluye un fichero CSV **auxiliar** que sirve como fuente para copiar y pegar los criterios y niveles al editor de rúbricas de Moodle.

## Distribución de puntuación propuesta

- Ejercicio 1: 3,00 puntos
- Ejercicio 2: 3,00 puntos
- Ejercicio 3: 3,00 puntos
- Documentación de las hojas XSL: 1,00 punto

## Procedimiento recomendado en Moodle

1. En la tarea de Moodle, selecciona el método de calificación avanzada `Rúbrica`.
2. Crea la rúbrica manualmente usando como referencia el fichero `lmsxi05_rubrica_moodle.csv`.
3. Guarda la rúbrica y déjala `Lista para usar`.
4. Si vas a reutilizarla en otras tareas, usa la opción `Crear nueva definición de calificación a partir de una plantilla`.

## Alternativas si necesitas importación automática real

- Restaurar una actividad o curso que ya contenga la rúbrica.
- Publicar la rúbrica como plantilla compartida y reutilizarla.
- Desarrollar un script o integración específica contra Moodle para crear la definición de la rúbrica de forma programática.

La última opción requiere acceso técnico al servidor o a servicios web de Moodle y no forma parte de la funcionalidad habitual del aula virtual.
