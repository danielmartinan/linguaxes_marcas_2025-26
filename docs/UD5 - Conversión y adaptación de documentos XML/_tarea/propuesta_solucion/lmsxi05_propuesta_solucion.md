# Propuesta de solución LMSXI05

Esta propuesta incluye una solución de referencia para los tres ejercicios de la tarea y está alineada con la rúbrica de evaluación definida en este directorio.

## Archivos generados

- `lmsxi05_1.txt`: 15 expresiones XPath (una por línea, sin texto adicional).
- `lmsxi05_2.xsl`: transformación XSLT de XML a XML según la estructura pedida.
- `lmsxi05_3.xsl`: transformación XSLT de XML a HTML con tabla de artistas.

## Criterios de corrección cubiertos

### Ejercicio 1 (3,00 puntos)

La solución `lmsxi05_1.txt` cumple los criterios funcionales y de formato:

- 15 consultas XPath funcionales.
- 15 líneas exactas.
- Una única expresión por línea.
- Nombre de fichero correcto.

Notas de diseño:

- Se usa XPath 1.0 para maximizar compatibilidad.
- El promedio se calcula como `sum(...) div count(...)`.
- El producto con precio máximo se obtiene con una condición de no-existencia de precio superior.

### Ejercicio 2 (3,00 puntos)

La solución `lmsxi05_2.xsl` cubre todos los bloques exigidos:

- Genera raíz `tienda`.
- Construye `productos` con `id` y `precio`.
- Construye `ofertas` filtrando productos con `@descuento`.
- Construye `ventas` con `id`, `fecha` y `cantidad`.
- Resuelve referencias de productos vendidos por `id` usando `xsl:key`.
- Configura salida XML en UTF-8 con indentación.

### Ejercicio 3 (3,00 puntos)

La solución `lmsxi05_3.xsl` cumple los requisitos de salida HTML:

- Estructura `html`, `head` y `body`.
- `title` con el texto `Artistas XSLT`.
- Codificación UTF-8.
- Tabla con cabecera exacta.
- Filtra artistas nacidos después de 1500.
- Ordena por nacimiento ascendente.
- Muestra `Desconocido` cuando no existe `fallecimiento`.
- Enlace `Saber más` con `target="_blank"` desde `@wikipedia`.

### Documentación en XSL (1,00 punto)

Las hojas `lmsxi05_2.xsl` y `lmsxi05_3.xsl` incorporan comentarios breves y útiles, tal como exige la rúbrica.

## Resultado esperado de la propuesta

Si se valida esta propuesta con la rúbrica, la solución de referencia debería obtener la puntuación máxima (**10,00 puntos**), al cumplir funcionalidad, formato y documentación.
