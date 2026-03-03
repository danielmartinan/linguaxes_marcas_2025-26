# XQuery

## Introducción

XQuery es un **lenguaje declarativo** para consultar y transformar datos XML. Comparte modelo de datos con XPath y cumple un papel similar al de SQL en el mundo relacional.

**Usos principales:**

- Recuperación de información en colecciones XML.
- Transformación de estructuras XML.
- Generación de salidas (XML, HTML, texto, etc.).

**Requisitos técnicos importantes:**

- Independencia del origen de datos (archivo local, web o BD).
- Soporte de namespaces.
- Capacidad de trabajar con y sin esquemas.
- Operaciones sobre secuencias, jerarquías y tipos atómicos/complejos.

## Modelo de datos

XQuery trabaja con **secuencias** de ítems (nodos y valores atómicos). El **orden de documento** es significativo.

Ejemplo de estructura XML para explicar orden y jerarquía:

```xml
<root>
  <a>
    <b/>
    <b/>
  </a>
  <b/>
  <b>
    <b/>
  </b>
</root>
```

## Sintaxis

**Aspectos básicos:**

- Las expresiones evaluables dentro de XML generado se delimitan con `{ ... }`.
- Los comentarios se escriben como `(: comentario :)`.
- Admite condicionales `if ... then ... else`.
- Las consultas complejas suelen usar cláusulas **FLWOR**.

**Ejemplo:**

```xquery
(: Selecciona títulos de libros de O'Reilly :)
<ul>{
  for $x in doc("libros.xml")/biblioteca/libros/libro
  where $x/editorial = "O'Reilly"
  order by $x/titulo
  return <li>{data($x/titulo)}</li>
}</ul>
```

## Cláusulas FLWOR

FLWOR significa: `for`, `let`, `where`, `order by`, `return`.

**Orden de aparición:**

1. `for` (o `let`, al menos una de ambas)
2. `let`
3. `where`
4. `order by`
5. `return`

### `for`

Asocia variables a cada elemento de una **secuencia**.

```xquery
for $p in /libros/libro
return $p/titulo
```

### `let`

Asigna un valor a una variable (**inmutable**).

```xquery
let $a := 5
let $b := 10
return $a + $b
```

Con **agregación**:

```xquery
let $nombres := /empleados/empleado[edad >= 18]/nombre
return count($nombres)
```

### `where`

Filtra resultados de `for`/`let`.

```xquery
for $libro in //libro
where $libro/precio > 50
return $libro/titulo
```

### `order by`

Ordena resultados (*ascendente* por defecto, `descending` para descendente).

```xquery
for $estudiante in //estudiante
let $promedio := avg($estudiante/calificaciones/calificacion)
order by $promedio descending
return $estudiante/nombre
```

### `return`

Define el **resultado final** de la consulta.

```xquery
for $estudiante in //estudiante[nombre = 'Juan']
let $promedio := avg($estudiante/calificaciones/calificacion)
return $promedio
```

## Funciones

XQuery incluye **funciones integradas** y permite declarar funciones propias.

### Funciones frecuentes

#### Numéricas

| Función | Descripción |
|---|---|
| `floor()` | Redondea hacia abajo. |
| `ceiling()` | Redondea hacia arriba. |
| `round()` | Redondea al valor más próximo. |
| `count()` | Cuenta ítems de una secuencia. |
| `min()` / `max()` | Obtiene mínimo o máximo. |
| `avg()` | Calcula media. |
| `sum()` | Suma total. |

#### Cadenas

| Función | Descripción |
|---|---|
| `concat()` | Concatena cadenas. |
| `string-length()` | Longitud de cadena. |
| `starts-with()` | Comprueba prefijo. |
| `ends-with()` | Comprueba sufijo. |
| `upper-case()` | Convierte a mayúsculas. |
| `lower-case()` | Convierte a minúsculas. |

#### Generales

| Función | Descripción |
|---|---|
| `empty()` | `true` si la secuencia está vacía. |
| `exists()` | `true` si la secuencia tiene elementos. |
| `distinct-values()` | Elimina duplicados de valores atómicos. |
| `data()` | Extrae valor atómico de nodos. |

#### Cuantificadores

| Expresión | Descripción |
|---|---|
| `some ... satisfies ...` | Existencial: al menos un elemento cumple. |
| `every ... satisfies ...` | Universal: todos cumplen. |

### Definición de funciones

**Sintaxis:**

```xquery
declare function local:nombre-funcion(
  $param1 as xs:decimal?,
  $param2 as xs:decimal?
) as xs:decimal? {
  let $disc := ($param1 * $param2) div 100
  return ($param1 - $disc)
};
```

**Uso:**

```xquery
local:nombre-funcion(100, 20)
```

## Operadores

### Comparación de valores

| Operador | Significado |
|---|---|
| `eq` | Igual |
| `ne` | Distinto |
| `lt` | Menor |
| `le` | Menor o igual |
| `gt` | Mayor |
| `ge` | Mayor o igual |

### Comparación general (secuencias)

| Operador | Significado |
|---|---|
| `=` / `!=` | Igual / distinto |
| `>` / `>=` | Mayor / mayor o igual |
| `<` / `<=` | Menor / menor o igual |

### Nodos y orden

| Operador | Significado |
|---|---|
| `is` | Mismo nodo |
| `<<` | El nodo izquierdo aparece antes en el documento |
| `>>` | El nodo izquierdo aparece después en el documento |

### Lógicos y conjuntos

| Operador | Significado |
|---|---|
| `and` / `or` | Combinación lógica |
| `union` | Unión de nodos |
| `intersect` | Intersección de nodos |
| `except` | Diferencia de nodos |

### Aritméticos

| Operador | Significado |
|---|---|
| `+` / `-` / `*` | Suma, resta, producto |
| `div` | División |
| `mod` | Resto |

## Consultas XQuery en ficheros

Las consultas pueden escribirse en archivos con extensiones como:

- `.xq`
- `.xqm`
- `.xqy`
- `.xquery`

**Ejemplo de archivo de consulta:**

```xquery
for $libro in /biblioteca/libros/libro
return $libro/titulo
```

## Herramientas

### BaseX

BaseX es una **base de datos XML nativa** y motor XPath/XQuery/XSLT.

Para mejorar la **legibilidad** del resultado:

```xquery
declare option output:indent "yes";
```

### Saxon

Saxon es un procesador XSLT/XQuery con ediciones *open source* y comerciales.

**Ejemplo de ejecución por línea de comandos:**

```bash
java -cp saxon-ee-12.1.jar net.sf.saxon.Query -s:doc.xml -q:query.xq -o:out.xml
```

**Parámetros:**

- `-s:doc.xml`: documento XML de entrada.
- `-q:query.xq`: consulta XQuery.
- `-o:out.xml`: salida generada.

**Estructura típica del paquete:**

```text
SaxonEE12-1J/
├─ saxon-ee-12.1.jar
├─ saxon-ee-test-12.1.jar
├─ saxon-sql-12.1.jar
├─ doc/
├─ lib/
└─ notices/
```

### Fonto (online)

Herramienta web para ejecutar XQuery 3.1 sobre XML.

**Pasos básicos:**

1. Cargar o pegar el XML en el panel de entrada.
2. Seleccionar modo **XQuery 3.1**.
3. Escribir la expresión en el editor.
4. Revisar el resultado en el panel de salida.

### XPath/XQuery Online Tester

También existen testers online para validar expresiones XPath 3.1 y XQuery 3.1 de forma rápida.
