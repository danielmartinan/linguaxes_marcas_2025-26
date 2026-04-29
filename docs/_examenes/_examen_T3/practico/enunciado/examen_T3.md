# Examen Práctico T3 - Lenguajes de Marcas

**Módulo:** Lenguajes de Marcas y Sistemas de Gestión de Información  
**Unidades evaluadas:** UD5 (XPath y XSLT), UD6 (XQuery)  
**Duración:** 2 horas y 15 minutos  
**Puntuación total:** 10 puntos

**Herramienta obligatoria:** Este examen debe realizarse y comprobarse con **BaseX**.

## Instrucciones generales

- Lee detenidamente cada ejercicio antes de comenzar.
- Entrega todos los archivos en una carpeta comprimida ZIP con el nombre: `examen_T3_nombre_apellidos.zip`.
- Respeta los nombres de archivo y la estructura de carpetas indicada.
- Se valorará la corrección sintáctica, la funcionalidad y la claridad de la solución.
- El uso de asistentes automáticos de código (por ejemplo, Copilot) está prohibido durante la prueba.

## Antes de comenzar

Descarga y descomprime `recursos_examen_T3.zip`. Ese paquete incluye los recursos base del examen.

En esta primera versión también tienes los XML listos en la carpeta local `../recursos/`:

- `expediciones.xml`
- `misiones.xml`
- `archivo_cientificos.xml`
- `ejer2_base.xsl` (plantilla base para el ejercicio 2)
- `ejer2_ejemplo_resultado.xml` (ejemplo de resultado esperado para el ejercicio 2)

Los tres ejercicios comparten temática (expediciones científicas), pero son **independientes** entre sí: puedes resolverlos en cualquier orden.

Dispones de BaseX en tu equipo para probar tus soluciones. Asegúrate de cargar los XML en BaseX para validar tus consultas y transformaciones.

## Recursos proporcionados

En la carpeta `../recursos/` se proporcionan los siguientes archivos:

- `expediciones.xml` (datos del ejercicio 1)
- `misiones.xml` (datos del ejercicio 2)
- `archivo_cientificos.xml` (datos del ejercicio 3)
- `ejer2_base.xsl` (plantilla parcial para el ejercicio 2)
- `ejer2_ejemplo_resultado.xml` (ejemplo de salida para el ejercicio 2)

## Comprobación con BaseX (paso a paso)

1. Abre BaseX y crea una consulta nueva.
2. Para comprobar una expresión XPath del ejercicio 1, ejecuta una consulta de este tipo:

```xquery
doc('C:/RUTA/AL/PROYECTO/recursos/expediciones.xml')/expediciones/expedicion
```

3. Para comprobar el ejercicio 2 (XSLT), ejecuta esta consulta XQuery en BaseX:

```xquery
import module namespace xslt = "http://basex.org/modules/xslt";
xslt:transform(
    doc("C:/RUTA/AL/PROYECTO/recursos/misiones.xml"),
    "C:/RUTA/AL/PROYECTO/recursos/ejer2_transformacion.xsl"
)
```

4. Guarda el resultado anterior como `ejer2_resultado.xml`.
5. Para comprobar cada consulta del ejercicio 3, abre cada fichero `.xq`, ejecútalo en BaseX y verifica el resultado.
6. Genera las capturas requeridas y guárdalas en `ejer1_capturas.pdf`, `ejer2_capturas.pdf` y `ejer3_capturas.pdf`.

> Nota: Sustituye `C:/RUTA/AL/PROYECTO` por la ruta real de tu equipo.

## Evidencias de ejecución en BaseX (capturas)

Debes guardar las capturas en PDF dentro de cada carpeta del ejercicio:

- `ejer1/ejer1_capturas.pdf`
- `ejer2/ejer2_capturas.pdf`
- `ejer3/ejer3_capturas.pdf`

En cada captura debe verse claramente:

1. Editor de consultas: consulta XPath/XQuery o llamada a `xslt:transform(...)`.
2. Acción de ejecución: botón de ejecutar (`Run`) o ejecución equivalente.
3. Panel de resultados: salida obtenida.
4. Panel de información/mensajes: confirmación de ejecución sin errores.
5. Navegador de base de datos/proyecto: archivo de entrada correspondiente al ejercicio.

<div style="height: 750px;"></div>

## Ejercicio 1: XPath (2,5 puntos)

Dispones de un documento XML llamado `expediciones.xml` con esta estructura general:

- Raíz: `expediciones`.
- Cada `expedicion` tiene atributo `id` y atributo `region`.
- Cada `expedicion` incluye los elementos `nombre`, `fechaInicio`, `fechaFin`, `presupuesto`, `tripulacion` y `ruta`.
- Cada `integrante` contiene el nombre como texto y tiene atributos como `rol` y `pais`.

### Requisitos

Escribe expresiones XPath que devuelvan:

1. **EJEMPLO**: Los nombres de todas las expediciones. (0 puntos).

    ```xpath
    /expediciones/expedicion/nombre
    ```

2. Las expediciones iniciadas a partir de 1850. (0,3 puntos).
3. Los nombres de integrantes con rol `cartógrafo`. (0,4 puntos).
4. Las expediciones con más de 5 integrantes en tripulación. (0,4 puntos).
5. La expedición con mayor presupuesto. (0,4 puntos).
6. Los valores de latitud de las rutas de la expedición `E002`. (0,5 puntos).

Deberás ejecutar cada expresión en BaseX para comprobar su funcionamiento y guardar las capturas correspondientes (0.5 puntos).

### Consideraciones

- Se permite XPath 1.0 o 2.0.
- Debes priorizar expresiones correctas y funcionales frente a expresiones largas.
- No se evaluará formato visual ni comentarios en este ejercicio.

### Entrega

- Guarda las 5 expresiones en el archivo `ejer1_xpath.txt`.
- El archivo debe tener **5 líneas exactas**, una expresión por línea.
- No incluyas comentarios ni líneas en blanco.

### Criterios de evaluación

- Funcionalidad y precisión de las expresiones XPath: **2,50 puntos**. Se indica el valor de cada apartado en la descripción de los requisitos.
- Evidencias de ejecución en BaseX (capturas): **0,50 puntos**. Se evaluará que las expresiones se han ejecutado correctamente y que el resultado es el esperado.

<div style="height: 100px;"></div>

## Ejercicio 2: XSLT (4 puntos)

Dispones de un documento XML llamado `misiones.xml` con esta estructura general:

- Raíz: `misiones`.
- Cada `mision` tiene atributos `id`, `estado` y `prioridad`.
- Cada `mision` incluye `nombre`, `zona`, `fechaInicio`, `fechaFin` (opcional), `equipo` y `resultados`.

(puedes ver en detalle la estructura del XML en `/recursos/misiones.xml`)

Debes generar un nuevo XML llamado `informe_misiones.xml` con la estructura destino:

- Raíz: `centro-control`.
- Secciones hijas: `misiones-activas`, `misiones-cerradas` y `resumen`.
- En `misiones-activas` y `misiones-cerradas` deben aparecer elementos `mision` con:
    - Atributos `id`, `prioridad` y `duracionDias`.
    - Contenido de texto con el nombre de la misión.
- En `resumen` deben incluirse:
    - `totalMisiones`
    - `totalActivas`
    - `totalCerradas`
    - `zonasUnicas` (cantidad de zonas diferentes)

Se adjunta un ejemplo de resultado esperado en `../recursos/ejer2_ejemplo_resultado.xml`.

Para simplificar la parte técnica del examen, se proporciona un fichero inicial `../recursos/ejer2_base.xsl`.
Ese fichero ya incluye:

- La salida XML indentada.
- El cálculo de `duracionDias`.
- El cálculo de `zonasUnicas`.

Debes completar el resto de la transformación (selección de nodos, estructura final, ordenaciones y atributos requeridos).

### Requisitos

- Implementar la transformación en una hoja XSLT.
- Partir del fichero `ejer2_base.xsl` y completarlo.
- Calcular `duracionDias`:
    - Si hay `fechaFin`, diferencia entre `fechaInicio` y `fechaFin`.
    - Si no hay `fechaFin`, usar la fecha fija `1912-12-31` como referencia.
- Ordenar las misiones activas por `prioridad` descendente y, a igualdad, por `fechaInicio` ascendente.
- Ordenar las misiones cerradas por `fechaFin` ascendente.

### Consideraciones

- Debes usar XSLT 1.0 para asegurar compatibilidad con BaseX en este examen.
- La salida debe estar indentada.
- Añade comentarios breves en la hoja XSL para explicar las partes clave.

### Entrega

- Archivo de transformación: `ejer2_transformacion.xsl`.
- Archivo resultado generado con tu XSLT: `ejer2_resultado.xml`.
- Capturas de prueba en BaseX: `ejer2_capturas.pdf`.

### Criterios de evaluación

- Transformación correcta según el enunciado: **3,00 puntos**.
- Ordenaciones, cálculos y estructura final: **0,50 puntos**.
- Claridad y comentarios mínimos en la XSL: **0,25 puntos**.
- Captura de la ejecución en BaseX mostrando la consulta y el resultado: **0,25 puntos**.

<div style="height: 780px;"></div>

## Ejercicio 3: XQuery (3,5 puntos)

Dispones de un documento XML llamado `archivo_cientificos.xml` con información de personal científico vinculado a expediciones.

Cada elemento `cientifico` contiene `id`, `nombre`, `especialidad`, `pais`, `nacimiento`, `expediciones` y `publicaciones`.

### Requisitos

Escribe consultas XQuery que devuelvan:

1. Los científicos (elementos `<cientifico>`) con más de 3 expediciones (0,5 puntos).
2. Nombre y especialidad de científicos de `ES`, `FR` y `UK`. (0,5 puntos).
3. La cantidad total de científicos por especialidad. (0,5 puntos).
4. El nombre de quienes participaron en la expedición `E002`. (0,5 puntos).
5. El científico con mayor número de publicaciones. (0,5 puntos).
6. Los científicos (elementos `<cientifico>`) ordenados por número de expediciones descendente. (0,5 puntos).

Deberás ejecutar cada consulta en BaseX para comprobar su funcionamiento y guardar las capturas correspondientes (0.5 puntos).

### Consideraciones

- No se permite filtrar directamente en la cláusula `for` con predicados tipo `for $x in ...[...]`.
- Cada consulta debe ser independiente.

### Entrega

- Guarda cada consulta en archivos separados:
    - `ejer3_1.xq`, `ejer3_2.xq`, ..., `ejer3_6.xq`.
- Incluye un PDF llamado `ejer3_capturas.pdf` con capturas de la ejecución en BaseX (consulta + resultado).

### Criterios de evaluación

- Funcionalidad y precisión de las consultas XQuery: **3,00 puntos**. Se indica el valor de cada apartado en la descripción de los requisitos.
- Evidencias de ejecución en BaseX (capturas): **0,50 puntos**. Se evaluará que las consultas se han ejecutado correctamente y que el resultado es el esperado.

<div style="height: 270px;"></div>

## Entrega final

Comprime las 3 carpetas (`ejer1`, `ejer2`, `ejer3`) en un único archivo ZIP llamado `examen_T3_nombre_apellidos.zip`, con esta estructura:

```plaintext
examen_T3_nombre_apellidos.zip
├── ejer1/
│   ├── ejer1_xpath.txt
│   └── ejer1_capturas.pdf
├── ejer2/
│   ├── ejer2_transformacion.xsl
│   ├── ejer2_resultado.xml
│   └── ejer2_capturas.pdf
└── ejer3/
    ├── ejer3_1.xq
    ├── ...
    ├── ejer3_6.xq
    └── ejer3_capturas.pdf
```

## Criterios generales de calificación

- La solución debe ser funcional y ajustarse al formato de entrega.
- Errores sintácticos graves o archivos mal nombrados pueden penalizarse.
- Si un ejercicio no se puede evaluar por formato incorrecto, se calificará con 0 en ese apartado.

**¡Mucha suerte!**
