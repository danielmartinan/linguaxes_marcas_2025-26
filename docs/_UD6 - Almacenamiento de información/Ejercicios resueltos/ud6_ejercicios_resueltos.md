# Ejercicios UD6 - Almacenamiento de información

## Ejercicio 601

Consideremos un documento XML con las siguientes características:

- El elemento raíz es `biblioteca`. Contiene un elemento `libros`.
- El elemento `libros` contiene varios elementos `libro`.
- Un elemento `libro` tiene los siguientes elementos:
  - `titulo`
  - `autor`: puede haber más de uno. Contiene los elementos `nombre` y `apellidos`.
  - `editorial`
  - `paginas`
  - `edicionElectronica`: elemento opcional para indicar si hay edición electrónica.
- Además, contiene los atributos `publicacion` y `edicion` (opcional).

### Tareas

1. Título y editorial de todos los libros.
   - Los datos de cada libro deben estar dentro de un elemento `<libro>`.
   - El título y la editorial de cada libro deben estar separados por un guión medio (`-`).
2. El título de todos los libros de menos de 400 páginas.
   - Se debe obtener únicamente los datos, sin etiquetas.
3. La cantidad de libros de más de 400 páginas.
4. Una lista HTML con el título de los libros de la editorial O'Reilly Media ordenados por título.
5. Título y editorial de los libros de 2018 y 2019.
   - Los datos de cada libro deben estar dentro de un elemento `<libro>`.
   - El título y la editorial deben ir dentro de los elementos `<titulo>` y `<editorial>` respectivamente.
6. Título y editorial de los libros con más de un autor.
   - Los datos de cada libro deben estar dentro de un elemento `<libro>`.
   - El título y la editorial deben ir dentro de los elementos `<titulo>` y `<editorial>` respectivamente.
7. Título y año de publicación de los libros que tienen versión electrónica.
   - Los datos de cada libro deben estar dentro de un elemento `<libro>`.
   - El título y el año de publicación deben ir dentro de los elementos `<titulo>` y `<fecha-publicacion>` respectivamente.
8. Título de los libros que no tienen versión electrónica.
   - Se debe obtener únicamente los datos, sin etiquetas.

<details>
<summary>Solución</summary>

**1. Título y editorial de todos los libros.**

```xquery
for $x in /biblioteca/libros/libro
return <libro>{$x/titulo/text()} - {$x/editorial/text()}</libro>
```

Igual que ocurre en XPath, se pueden obtener los mismos datos de diferentes formas. A continuación, se muestra una alternativa utilizando la función `concat()`:

```xquery
for $x in /biblioteca/libros/libro
return <libro>{ concat($x/titulo/text(), ' - ', $x/editorial/text()) }</libro>
```

La función `concat()` permite concatenar varias cadenas de texto. La concatenación consiste en la unión secuencial (una detrás de otra) de múltiples cadenas de texto.

El resultado de la consulta anterior aplicado al documento XML de ejemplo es el siguiente:

```xml
<libro>XML en acción - Manning Publications</libro>
<libro>XSLT Cookbook - O'Reilly Media</libro>
<libro>XML 1.1 Bible - Wiley</libro>
<libro>Introducción a XML y XML Schema - Manning Publications</libro>
<libro>XML: Visual QuickStart Guide - Peachpit Press</libro>
<libro>XML and InDesign: Stylish Structure: Publishing XML with Adobe InDesign - Adobe Press</libro>
<libro>XML Schema: The W3C's Object-Oriented Descriptions for XML - O'Reilly Media</libro>
<libro>Beginning XML - Wrox</libro>
<libro>XQuery: Search Across a Variety of XML Data - O'Reilly Media</libro>
<libro>XML Pocket Reference - O'Reilly Media</libro>
```

**2. El título de todos los libros de menos de 400 páginas.**

Para hacer comparaciones con números, lo mejor es convertir los datos con la función `number()` para evitar problemas de tipo de dato o que los compare como cadenas de texto (string).

Además, utilizamos la función `data()` para obtener únicamente el contenido. Si no utilizamos `data()`, se devuelven los elementos con sus etiquetas.

```xquery
for $x in /biblioteca/libros/libro
where number($x/paginas) < 400
return data($x/titulo)
```

El resultado de la consulta es el siguiente:

```
XML and InDesign: Stylish Structure: Publishing XML with Adobe InDesign
XML Pocket Reference
```

**3. La cantidad de libros de más de 400 páginas.**

Para realizar un recuento, se debe utilizar la función `count()`.

```xquery
let $libros := /biblioteca/libros/libro[number(paginas) > 400]
return count($libros)
```

Una alternativa sin utilizar `let` es la siguiente:

```xquery
count(
  for $libro in /biblioteca/libros/libro
  where number($libro/paginas) > 400
  return $libro
)
```

En esta última consulta, obtenemos los libros mediante `for` y realizamos el filtrado utilizando `where`. Una vez obtenemos la secuencia de elementos filtrada, realizamos el recuento con `count()`. Para ello, la estructura `for-where-return` debe ir como parámetro de la función.

El resultado de ambas consultas es el siguiente:

```
7
```

**4. Una lista HTML con el título de los libros de la editorial O'Reilly Media ordenados por título.**

Podemos mezclar etiquetas HTML y XQuery y obtener HTML como resultado de una consulta.

```xquery
<ul>
  {
    for $libro in /biblioteca/libros/libro
    where $libro/editorial = "O'Reilly Media"
    order by $libro/titulo
    return <li>{data($libro/titulo)}</li>
  }
</ul>
```

El resultado de la consulta es el siguiente:

```xml
<ul>
  <li>XML Pocket Reference</li>
  <li>XML Schema: The W3C's Object-Oriented Descriptions for XML</li>
  <li>XQuery: Search Across a Variety of XML Data</li>
  <li>XSLT Cookbook</li>
</ul>
```

**5. Título y editorial de los libros de 2018 y 2019.**

```xquery
for $libro in /biblioteca/libros/libro
where $libro[@publicacion=2018 or @publicacion=2019]
return <libro>{$libro/titulo, $libro/editorial}</libro>
```

Una consulta alternativa con la sintaxis ligeramente diferente es la siguiente:

```xquery
for $libro in /biblioteca/libros/libro
where $libro[@publicacion=2018] or $libro[@publicacion=2019]
return <libro>{$libro/titulo} {$libro/editorial}</libro>
```

El resultado de la consulta es el siguiente:

```xml
<libro>
  <titulo>XQuery: Search Across a Variety of XML Data</titulo>
  <editorial>O'Reilly Media</editorial>
</libro>
<libro>
  <titulo>XML Pocket Reference</titulo>
  <editorial>O'Reilly Media</editorial>
</libro>
```

**6. Título y editorial de los libros con más de un autor.**

```xquery
for $libro in /biblioteca/libros/libro
where count($libro/autor) > 1
return <libro>{$libro/titulo, $libro/editorial}</libro>
```

El resultado de la consulta es el siguiente:

```xml
<libro>
  <titulo>XML 1.1 Bible</titulo>
  <editorial>Wiley</editorial>
</libro>
```

**7. Título y año de publicación de los libros que tienen versión electrónica.**

```xquery
for
  $libro in /biblioteca/libros/libro
where
  $libro/edicionElectronica
return
  <libro>
    {$libro/titulo}
    <fecha-publicacion>{data($libro/@publicacion)}</fecha-publicacion>
  </libro>
```

El resultado de la consulta es el siguiente:

```xml
<libro>
  <titulo>XML en acción</titulo>
  <fecha-publicacion>2008</fecha-publicacion>
</libro>
<libro>
  <titulo>XML and InDesign: Stylish Structure: Publishing XML with Adobe InDesign</titulo>
  <fecha-publicacion>2011</fecha-publicacion>
</libro>
<libro>
  <titulo>Beginning XML</titulo>
  <fecha-publicacion>2013</fecha-publicacion>
</libro>
<libro>
  <titulo>XQuery: Search Across a Variety of XML Data</titulo>
  <fecha-publicacion>2018</fecha-publicacion>
</libro>
```

**8. Título de los libros que no tienen versión electrónica.**

Se utiliza la función `not()` para verificar la no existencia de un elemento.

```xquery
for $libro in /biblioteca/libros/libro
where not($libro/edicionElectronica)
return $libro/titulo/text()
```

El resultado de la consulta es el siguiente:

```plaintext
XSLT Cookbook
XML 1.1 Bible
Introducción a XML y XML Schema
XML: Visual QuickStart Guide
XML Schema: The W3C's Object-Oriented Descriptions for XML
XML Pocket Reference
```

</details>

---

## Ejercicio 602

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bailes>
  <baile id="1">
    <nombre>Tango</nombre>
    <precio cuota="mensual" moneda="euro">27</precio>
    <plazas>20</plazas>
    <comienzo>1/1/2011</comienzo>
    <fin>1/12/2011</fin>
    <profesor>Roberto Garcia</profesor>
    <sala>1</sala>
  </baile>
  <baile id="2">
    <nombre>Cha-cha-cha</nombre>
    <precio cuota="trimestral" moneda="euro">80</precio>
    <plazas>18</plazas>
    <comienzo>1/2/2011</comienzo>
    <fin>31/7/2011</fin>
    <profesor>Miriam Gutierrez</profesor>
    <sala>1</sala>
  </baile>
  <baile id="3">
    <nombre>Rock</nombre>
    <precio cuota="mensual" moneda="euro">30</precio>
    <plazas>15</plazas>
    <comienzo>1/3/2011</comienzo>
    <fin>1/12/2011</fin>
    <profesor>Laura Mendiola</profesor>
    <sala>1</sala>
  </baile>
  <baile id="4">
    <nombre>Merengue</nombre>
    <precio cuota="trimestral" moneda="dolares">75</precio>
    <plazas>12</plazas>
    <comienzo>1/1/2011</comienzo>
    <fin>1/12/2011</fin>
    <profesor>Jesus Lozano</profesor>
    <sala>2</sala>
  </baile>
  <baile id="5">
    <nombre>Salsa</nombre>
    <precio cuota="mensual" moneda="euro">32</precio>
    <plazas>10</plazas>
    <comienzo>1/5/2011</comienzo>
    <fin>1/12/2011</fin>
    <profesor>Jesus Lozano</profesor>
    <sala>2</sala>
  </baile>
  <baile id="6">
    <nombre>Pasodoble</nombre>
    <precio cuota="anual" moneda="euro">320</precio>
    <plazas>8</plazas>
    <comienzo>1/1/2011</comienzo>
    <fin>31/12/2011</fin>
    <profesor>Miriam Gutierrez</profesor>
    <sala>1</sala>
  </baile>
</bailes>
```

### Tareas

1. Cada uno de los nombres de los bailes con la etiqueta `<losbailes>`.
2. Los nombres de los bailes seguidos con el número de plazas entre paréntesis, ambos dentro de la misma etiqueta `<losbailes>`.
3. Los nombres de los bailes cuyo precio sea mayor de 30.
4. Los nombres de los bailes cuyo precio sea mayor de 30 y la moneda euro.
5. Los nombres y la fecha de comienzo de los bailes que comiencen el mes de enero (utiliza para buscarlo la cadena de texto `/1/`).
6. Los nombres de los profesores y la sala en la que dan clase, ordenados por sala.
7. Los nombres de los profesores, eliminando los repetidos y acompañando cada nombre con todas las salas en la que da clase. Ordenar por nombre.
8. La media de los precios de todos los bailes.
9. La suma de los precios de los bailes de la sala 1.
10. La cantidad de plazas ofertadas por el profesor Jesus Lozano.
11. El dinero que ganaría la profesora Laura Mendiola si se completaran todas las plazas de su baile, sabiendo que solo tiene un baile.
12. El dinero que ganaría el profesor Jesus Lozano si se completaran todas las plazas de su baile, pero mostrando el beneficio de cada baile por separado.
13. Mostrar el dinero que ganaría la profesora Laura (no conocemos su apellido) si se completaran todas las plazas de su baile.
14. El nombre del baile, su precio y el precio con un descuento del 15% para familias numerosas. Ordenar por el nombre del baile.
15. Todos los datos de cada baile excepto la fecha de comienzo y de fin.
16. En una tabla de HTML, los nombres de los bailes y su profesor, cada uno en una fila.

<details>
<summary>Solución</summary>

**1. Cada uno de los nombres de los bailes con la etiqueta `<losbailes>`.**

```xquery
for $baile in /bailes/baile
return <losbailes>{$baile/nombre/text()}</losbailes>
```

```xquery
for $baile in /bailes/baile/nombre
return <losbailes>{$baile/text()}</losbailes>
```

**2. Los nombres de los bailes seguidos con el número de plazas entre paréntesis.**

```xquery
for $baile in /bailes/baile
return <losbailes>{$baile/nombre/text()} ({$baile/plazas/text()})</losbailes>
```

**3. Los nombres de los bailes cuyo precio sea mayor de 30.**

```xquery
for $baile in /bailes/baile
where $baile/precio > 30
return $baile/nombre/text()
```

**4. Los nombres de los bailes cuyo precio sea mayor de 30 y la moneda euro.**

```xquery
for $baile in /bailes/baile
where $baile/precio > 30 and $baile/precio/@moneda = "euro"
return $baile/nombre/text()
```

**5. Los nombres y la fecha de comienzo de los bailes que comiencen en enero.**

```xquery
for $baile in /bailes/baile
where contains($baile/comienzo, "/1/")
return
  <baile>
    {$baile/profesor}
    {$baile/comienzo}
  </baile>
```

```xquery
for $baile in /bailes/baile
where contains($baile/comienzo, "/1/")
return concat($baile/profesor/text(), ' ', $baile/comienzo/text())
```

**6. Los nombres de los profesores y la sala en la que dan clase, ordenados por sala.**

```xquery
for $baile in /bailes/baile
order by $baile/sala
return
  <baile>
    {$baile/profesor}
    {$baile/sala}
  </baile>
```

**7. Los nombres de los profesores, eliminando repetidos, con todas sus salas. Ordenar por nombre.**

```xquery
for $profesor in distinct-values(/bailes/baile/profesor)
let $salas := /bailes/baile[profesor=$profesor]/sala
order by $profesor
return
  <profesores>
    <nombre>{$profesor}</nombre>
    {$salas}
  </profesores>
```

**8. La media de los precios de todos los bailes.**

```xquery
let $baile := /bailes/baile
return <media>{avg($baile/precio)}</media>
```

```xquery
let $precios := /bailes/baile/precio
return avg($precios)
```

```xquery
avg(
  for $precio in /bailes/baile/precio
  return $precio
)
```

**9. La suma de los precios de los bailes de la sala 1.**

```xquery
sum(
  for $baile in /bailes/baile
  where $baile/sala="1"
  return $baile/precio
)
```

**10. La cantidad de plazas ofertadas por el profesor Jesus Lozano.**

```xquery
<plazas>
  {
    sum(
      for $baile in /bailes/baile
      where $baile/profesor="Jesus Lozano"
      return $baile/plazas
    )
  }
</plazas>
```

**11. El dinero que ganaría la profesora Laura Mendiola si se completaran todas las plazas.**

```xquery
for $baile in /bailes/baile
where $baile/profesor="Laura Mendiola"
return $baile/plazas * $baile/precio
```

**12. El dinero que ganaría el profesor Jesus Lozano, mostrando el beneficio de cada baile por separado.**

```xquery
for $baile in /bailes/baile
where $baile/profesor = "Jesus Lozano"
return <beneficio>{$baile/plazas * $baile/precio}</beneficio>
```

**13. El dinero que ganaría la profesora Laura (apellido desconocido).**

```xquery
for $baile in /bailes/baile
where starts-with($baile/profesor, "Laura")
return <beneficio>{$baile/plazas * $baile/precio}</beneficio>
```

**14. Nombre del baile, precio y precio con descuento del 15% para familias numerosas. Ordenar por nombre.**

```xquery
for $baile in /bailes/baile
order by $baile/nombre
return
  <baile>
    {$baile/nombre}
    <precio>{$baile/precio/text()}</precio>
    <fam_numerosa>{$baile/precio * 0.85}</fam_numerosa>
  </baile>
```

**15. Todos los datos de cada baile excepto la fecha de comienzo y de fin.**

```xquery
for $baile in /bailes/baile
return
  <baile>
    {
      $baile/*
      except $baile/comienzo
      except $baile/fin
    }
  </baile>
```

**16. En una tabla de HTML, los nombres de los bailes y su profesor, cada uno en una fila.**

```xquery
<table>
  {
    for $baile in /bailes/baile
    return
      <tr>
        <td>{$baile/nombre/text()}</td>
        <td>{$baile/profesor/text()}</td>
      </tr>
  }
</table>
```

</details>

---

## Ejercicio 603

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<libreria>
  <libro categoria="COCINA">
    <titulo idioma="es">Everyday Italian</titulo>
    <autor>Giada De Laurentiis</autor>
    <año>2005</año>
    <precio>30.00</precio>
  </libro>
  <libro categoria="NIÑOS">
    <titulo idioma="es">Harry Potter</titulo>
    <autor>J K. Rowling</autor>
    <año>2005</año>
    <precio>29.99</precio>
  </libro>
  <libro categoria="WEB">
    <titulo idioma="es">XQuery Kick Start</titulo>
    <autor>James McGovern</autor>
    <autor>Per Bothner</autor>
    <autor>Kurt Cagle</autor>
    <autor>James Linn</autor>
    <autor>Vaidyanathan Nagarajan</autor>
    <año>2003</año>
    <precio>49.99</precio>
  </libro>
  <libro categoria="WEB">
    <titulo idioma="es">Learning XML</titulo>
    <autor>Erik T. Ray</autor>
    <año>2003</año>
    <precio>39.95</precio>
  </libro>
</libreria>
```

### Tareas

1. Los títulos de los libros con la etiqueta `<titulo>`.
2. Los libros cuyo precio sea menor o igual a 30.
3. Solo el título de los libros cuyo precio sea menor o igual a 30.
4. Solo el título sin atributos de los libros cuyo precio sea menor o igual a 30.
5. El título y el autor de los libros del año 2005, y etiquetar cada uno de ellos con la etiqueta `<lib2005>`.
6. Los años de publicación, primero con `for` y luego con `let` para comprobar la diferencia entre ellos. Etiquetar la salida con `<publicacion>`.
7. Los libros ordenados primero por el atributo `categoria` y luego por `titulo` en una sola consulta.
8. La cantidad de libros. Se debe etiquetar con `<total>`.
9. Los títulos de los libros y, al final, una etiqueta con el número total de libros.
10. El precio mínimo y máximo de los libros.
11. El título del libro, su precio y su precio con el IVA incluido, cada uno con su propia etiqueta. Ordenarlos por precio con IVA.
12. La suma total de los precios de los libros. Se debe etiquetar con `<total>`.
13. Cada uno de los precios de los libros y, al final, una nueva etiqueta con la suma de los precios.
14. El título y el número de autores que tiene cada título en etiquetas diferentes.
15. En la misma etiqueta, el título y, entre paréntesis, el número de autores que tiene ese título.
16. Los libros escritos en años que terminen en `"3"`.
17. Los libros cuya categoría empiece por `"C"`.
18. Los libros que tengan una `"X"` mayúscula o minúscula en el título ordenados de manera descendente.
19. El título y el número de caracteres que tiene cada título, cada uno con su propia etiqueta.
20. Todos los años en los que se ha publicado un libro eliminando los repetidos. Se deben etiquetar con `<año>`.
21. Todos los autores eliminando los que se repiten y ordenados por el número de caracteres que tiene cada autor.
22. Los títulos en una tabla de HTML.

<details>
<summary>Solución</summary>

**1. Los títulos de los libros con la etiqueta `<titulo>`.**

```xquery
for $titulo in /libreria/libro/titulo/text()
return <titulo>{$titulo}</titulo>
```

**2. Los libros cuyo precio sea menor o igual a 30.**

```xquery
for $libro in /libreria/libro
where $libro/precio <= 30
return $libro
```

**3. Solo el título de los libros cuyo precio sea menor o igual a 30.**

```xquery
for $libro in /libreria/libro
where $libro/precio <= 30
return $libro/titulo
```

**4. Solo el título sin atributos de los libros cuyo precio sea menor o igual a 30.**

```xquery
for $libro in /libreria/libro
where $libro/precio <= 30
return data($libro/titulo)
```

**5. El título y el autor de los libros del año 2005, etiquetados con `<lib2005>`.**

```xquery
for $libro in /libreria/libro
where $libro/año=2005
return <lib2005>{$libro/titulo,$libro/autor}</lib2005>
```

**6. Los años de publicación con `for` y con `let`.**

Con `for`:

```xquery
for $libro in /libreria/libro
return <publicacion>{data($libro/año)}</publicacion>
```

Con `let`:

```xquery
let $libros := /libreria/libro
return $libros/año
```

**7. Los libros ordenados por `categoria` y luego por `titulo`.**

```xquery
for $libro in /libreria/libro
order by $libro/@categoria, $libro/titulo
return $libro
```

**8. La cantidad de libros etiquetada con `<total>`.**

```xquery
<total>{ count(for $libro in /libreria/libro return $libro) }</total>
```

**9. Los títulos de los libros y, al final, el número total de libros.**

```xquery
let $total := count(/libreria/libro),
    $titulos := (
      for $libro in /libreria/libro/titulo
      return <titulo>{$libro/text()}</titulo>
    )
return
  <resultado>
    {$titulos}
    <total_libros>{$total}</total_libros>
  </resultado>
```

**10. El precio mínimo y máximo de los libros.**

```xquery
let $max := max(/libreria/libro/precio),
    $min := min(/libreria/libro/precio)
return
  <resultado>
    <max>{$max}</max>
    <min>{$min}</min>
  </resultado>
```

**11. Título, precio y precio con IVA de cada libro. Ordenar por precio con IVA.**

```xquery
for $libro in /libreria/libro
let $precio_iva := ($libro/precio * 1.21)
order by $precio_iva
return
  <libro>
    <titulo>{$libro/titulo/text()}</titulo>
    <precio>{$libro/precio/text()} €</precio>
    <precio_iva>{$precio_iva} €</precio_iva>
  </libro>
```

**12. La suma total de los precios etiquetada con `<total>`.**

```xquery
let $libros := /libreria/libro
return <total>{sum($libros/precio)}</total>
```

**13. Cada precio de los libros y, al final, la suma total.**

```xquery
let $libros := /libreria/libro
return
  <precios>
    {$libros/precio}
    <total>{sum($libros/precio)}</total>
  </precios>
```

**14. El título y el número de autores de cada libro en etiquetas diferentes.**

```xquery
for $libro in /libreria/libro
return
  <libro>
    {$libro/titulo}
    <autores>{count($libro/autor)}</autores>
  </libro>
```

**15. En la misma etiqueta, el título y entre paréntesis el número de autores.**

```xquery
for $libro in /libreria/libro
return <libro>{$libro/titulo/text()} ({count($libro/autor)})</libro>
```

**16. Los libros escritos en años que terminen en `"3"`.**

```xquery
for $libro in /libreria/libro
where ends-with($libro/año, "3")
return $libro
```

**17. Los libros cuya categoría empiece por `"C"`.**

```xquery
for $libro in /libreria/libro
where starts-with($libro/@categoria, "C")
return $libro
```

**18. Los libros con `"X"` mayúscula o minúscula en el título, ordenados de manera descendente.**

```xquery
for $libro in /libreria/libro
where contains($libro/titulo, "x") or contains($libro/titulo, "X")
order by $libro/titulo descending
return $libro
```

**19. El título y el número de caracteres de cada título.**

```xquery
for $libro in /libreria/libro
return
  <libro>
    {$libro/titulo}
    <caracteres>{string-length($libro/titulo)}</caracteres>
  </libro>
```

**20. Todos los años de publicación eliminando los repetidos.**

```xquery
for $año in distinct-values(/libreria/libro/año)
return <año>{$año}</año>
```

**21. Todos los autores sin repeticiones, ordenados por número de caracteres.**

```xquery
for $autor in distinct-values(/libreria/libro/autor)
order by string-length($autor)
return <autor>{$autor}</autor>
```

**22. Los títulos en una tabla de HTML.**

```xquery
<table>
  {
    for $libro in /libreria/libro
    return
      <tr>
        <td>{$libro/titulo/text()}</td>
      </tr>
  }
</table>
```

</details>

---

## Ejercicio 604

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bib>
  <libro ano="1994">
    <titulo>TCP/IP Illustrated</titulo>
    <autor>
      <apellido>Stevens</apellido>
      <nombre>W.</nombre>
    </autor>
    <editorial>Addison-Wesley</editorial>
    <precio>65.95</precio>
  </libro>
  <libro ano="1992">
    <titulo>Advanced Programming for Unix environment</titulo>
    <autor>
      <apellido>Stevens</apellido>
      <nombre>W.</nombre>
    </autor>
    <editorial>Addison-Wesley</editorial>
    <precio>65.95</precio>
  </libro>
  <libro ano="2000">
    <titulo>Data on the Web</titulo>
    <autor>
      <apellido>Abiteboul</apellido>
      <nombre>Serge</nombre>
    </autor>
    <autor>
      <apellido>Buneman</apellido>
      <nombre>Peter</nombre>
    </autor>
    <autor>
      <apellido>Suciu</apellido>
      <nombre>Dan</nombre>
    </autor>
    <editorial>Morgan Kaufmann editorials</editorial>
    <precio>39.95</precio>
  </libro>
  <libro ano="1999">
    <titulo>Economics of Technology for Digital TV</titulo>
    <editor>
      <apellido>Gerbarg</apellido>
      <nombre>Darcy</nombre>
      <afiliacion>CITI</afiliacion>
    </editor>
    <editorial>Kluwer Academic editorials</editorial>
    <precio>129.95</precio>
  </libro>
</bib>
```

### Tareas

1. Listar el título de todos los libros.
2. Listar año y título de todos los libros, ordenados por el año.
3. Listar los libros cuyo precio sea 65.95.
4. Listar los libros publicados antes del año 2000.
5. Listar año y título de los libros publicados por Addison-Wesley después del año 1992.
6. Listar año y título de los libros que tienen más de un autor.
7. Listar año y título de los libros que no tienen autor.
8. Mostrar los apellidos de los autores que aparecen en el documento, sin repeticiones, ordenados alfabéticamente.
9. Por cada libro, listar agrupado en un elemento `<result>` su título y autores.
10. Por cada libro, obtener su título y el número de autores, agrupados en un elemento `<libro>`.
11. Generar un documento HTML con un encabezado de primer nivel que diga «Listado de libros» seguido de una tabla de 3 columnas (título, editorial y precio de cada libro). La tabla deberá tener bordes y la primera fila será la cabecera con los nombres de las columnas. El texto de las columnas título y editorial irán alineadas a la izquierda; y el de precio, a la derecha.
12. Generar un documento HTML con un encabezado de primer nivel que diga «Libros de Stevens» seguido de una tabla de 2 columnas (título y precio de cada libro del autor Stevens). La última fila contiene la suma del precio de todos los libros (se debe utilizar una consulta con una cláusula `let`).

<details>
<summary>Solución</summary>

**1. Listar el título de todos los libros.**

```xquery
for $libros in /bib/libro/titulo
return $libros
```

**2. Listar año y título de todos los libros, ordenados por el año.**

```xquery
for $a in /bib/libro
order by $a/@ano
return
  <libro>
    <ano>{data($a/@ano)}</ano>
    {$a/titulo}
  </libro>
```

**3. Listar los libros cuyo precio sea 65.95.**

```xquery
for $a in /bib/libro
where $a/precio = '65.95'
return $a
```

**4. Listar los libros publicados antes del año 2000.**

```xquery
for $a in /bib/libro
where $a/@ano < 2000
return $a
```

**5. Listar año y título de los libros publicados por Addison-Wesley después del año 1992.**

```xquery
for $a in /bib/libro
where $a/editorial = "Addison-Wesley" and $a/@ano > 1992
return
  <libro ano="{$a/@ano}">
    {$a/titulo}
  </libro>
```

**6. Listar año y título de los libros que tienen más de un autor.**

```xquery
for $a in /bib/libro
where count($a/autor) > 1
return <libro ano="{$a/@ano}">{$a/titulo}</libro>
```

Alternativa con `if-then-else`:

```xquery
for $a in /bib/libro
return
  if (count($a/autor) > 1)
  then <libro ano="{$a/@ano}">{$a/titulo}</libro>
  else ()
```

**7. Listar año y título de los libros que no tienen autor.**

```xquery
for $a in /bib/libro
where empty($a/autor)
return <libro ano="{$a/@ano}">{$a/titulo}</libro>
```

```xquery
for $a in /bib/libro
where not(exists($a/autor))
return <libro ano="{$a/@ano}">{$a/titulo}</libro>
```

**8. Apellidos de los autores sin repeticiones, ordenados alfabéticamente.**

```xquery
for $a in distinct-values(/bib/libro/autor/apellido)
order by $a
return $a
```

**9. Por cada libro, su título y autores agrupados en un elemento `<result>`.**

```xquery
for $b in /bib/libro
return
  <result>
    {$b/titulo}
    <autores>
      {
        for $a in $b/autor
        return <autor>{string($a)}</autor>
      }
    </autores>
  </result>
```

**10. Por cada libro, su título y número de autores agrupados en un elemento `<libro>`.**

```xquery
for $b in /bib/libro
return
  <libro>
    {$b/titulo}
    <numeroAutores>{count($b/autor)}</numeroAutores>
  </libro>
```

**11. Documento HTML con tabla de libros (título, editorial y precio).**

```xquery
<html>
  <head>
    <title>Listado de libros</title>
  </head>
  <body>
    <h1>Listado de libros</h1>
    <table border="1">
      <tr>
        <th>Titulo</th>
        <th>Editorial</th>
        <th>Precio</th>
      </tr>
      {
        for $a in /bib/libro
        return
          <tr>
            <td style="text-align:left">{string($a/titulo)}</td>
            <td style="text-align:left">{string($a/editorial)}</td>
            <td style="text-align:right">{string($a/precio)}</td>
          </tr>
      }
    </table>
  </body>
</html>
```

**12. Documento HTML con tabla de libros de Stevens y suma total de precios.**

```xquery
<html>
  <head>
    <title>Libros de Stevens</title>
  </head>
  <body>
    <h1>Libros de Stevens</h1>
    <table border="1">
      <tr>
        <th>Titulo</th>
        <th>Precio</th>
      </tr>
      {
        for $a in /bib/libro
        where $a/autor/apellido="Stevens"
        return
          <tr>
            <td>{$a/titulo}</td>
            <td>{$a/precio}</td>
          </tr>
      }
      <tr>
        <td colspan="2">
          {
            let $a := /bib/libro[autor/apellido="Stevens"]
            return sum($a/precio)
          }
        </td>
      </tr>
    </table>
  </body>
</html>
```

</details>

---

## Ejercicio 605

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<tutoriales>
  <tutorial anio="2007">
    <titulo>XMLBeans, una forma de mapear un XML en objetos Java</titulo>
    <autor>
      <nombre>Alejandro</nombre>
      <apellidos>Pérez García</apellidos>
    </autor>
    <categoria>XML</categoria>
    <visitas>25827</visitas>
  </tutorial>
  <tutorial anio="2013">
    <titulo>Spring Security: haciendo uso de un servidor LDAP embebido</titulo>
    <autor>
      <nombre>José Manuel</nombre>
      <apellidos>Sánchez Suárez</apellidos>
    </autor>
    <categoria>Spring</categoria>
    <visitas>1996</visitas>
  </tutorial>
  <tutorial anio="2011">
    <titulo>Mybatis con Maven y Spring</titulo>
    <autor>
      <nombre>Rubén</nombre>
      <apellidos>Aguilera Díaz-Heredero</apellidos>
    </autor>
    <categoria>Mybatis</categoria>
    <visitas>6998</visitas>
  </tutorial>
  <tutorial anio="2011">
    <titulo>Trabajar con XML sabiendo lo mínimo</titulo>
    <autor>
      <nombre>Roberto</nombre>
      <apellidos>Canales Mora</apellidos>
    </autor>
    <categoria>XML</categoria>
    <visitas>34842</visitas>
  </tutorial>
  <tutorial anio="2013">
    <titulo>Introducción a Spring Batch</titulo>
    <autor>
      <nombre>Miguel</nombre>
      <apellidos>Arlandy Rodríguez</apellidos>
    </autor>
    <categoria>Spring</categoria>
    <visitas>1273</visitas>
  </tutorial>
</tutoriales>
```

### Tareas

1. Cada uno de los nombres de las categorías con la etiqueta `<categoria>`.
2. Los títulos de los tutoriales con el número de visitas entre paréntesis, ambos dentro de la misma etiqueta `<lostutoriales>`.
3. Los nombres de los tutoriales con menos de 2000 visitas.
4. Los nombres de los tutoriales de XML con más de 30.000 visitas.
5. El número total de visitas.
6. Los nombres de las categorías distintas, cada una en una etiqueta `<categoriasdistintas>`.
7. Nombres y apellidos de los autores eliminando los repetidos y acompañados cada nombre por todos sus tutoriales, ordenados alfabéticamente por nombre de autor. Cada autor en una etiqueta `<autor>` que contendrá una etiqueta `<nombreyapellidos>` y una etiqueta `<titulo>`.
8. La media de vistas de los tutoriales, dentro de una etiqueta `<media>`.
9. Número total de tutoriales de XML etiquetados dentro de una etiqueta `<totaltutoriales>`.
10. El nombre del tutorial y su categoría, ordenado por el nombre de cada categoría.
11. Todos los datos de cada tutorial excepto las visitas.
12. En una tabla de HTML de dos columnas, el título de los tutoriales y los nombres de los autores.

<details>
<summary>Solución</summary>

**1. Cada uno de los nombres de las categorías con la etiqueta `<categoria>`.**

```xquery
for $tutorial in /tutoriales/tutorial
return $tutorial/categoria/text()
```

**2. Los títulos de los tutoriales con el número de visitas entre paréntesis.**

```xquery
for $tutorial in /tutoriales/tutorial
return
  <lostutoriales>
    {$tutorial/titulo/text()} ({$tutorial/visitas/text()})
  </lostutoriales>
```

**3. Los nombres de los tutoriales con menos de 2000 visitas.**

```xquery
for $tutorial in /tutoriales/tutorial
where $tutorial/visitas < 2000
return $tutorial/titulo/text()
```

**4. Los nombres de los tutoriales de XML con más de 30.000 visitas.**

```xquery
for $tutorial in /tutoriales/tutorial
where $tutorial/categoria = "XML" and $tutorial/visitas > 30000
return $tutorial/titulo/text()
```

**5. El número total de visitas.**

```xquery
sum(
  for $tutorial in /tutoriales/tutorial
  return $tutorial/visitas
)
```

**6. Los nombres de las categorías distintas etiquetadas con `<categoriasdistintas>`.**

```xquery
for $categoria in distinct-values(/tutoriales/tutorial/categoria)
return <categoriasdistintas>{$categoria}</categoriasdistintas>
```

**7. Autores sin repetidos, con todos sus tutoriales. Ordenar alfabéticamente por nombre.**

```xquery
for $autor in distinct-values(/tutoriales/tutorial/autor/nombre)
let $tutoriales := /tutoriales/tutorial[autor/nombre=$autor]
order by $autor ascending
return
  <autor>
    <nombreyapellidos>{$autor}</nombreyapellidos>
    {
      for $t in $tutoriales
      return <titulo>{data($t/titulo)}</titulo>
    }
  </autor>
```

**8. La media de vistas de los tutoriales etiquetada con `<media>`.**

```xquery
<media>
  {avg(/tutoriales/tutorial/visitas)}
</media>
```

**9. Número total de tutoriales de XML etiquetados con `<totaltutoriales>`.**

```xquery
<totaltutoriales>
  {
    count(
      for $tutorial in /tutoriales/tutorial
      where $tutorial/categoria = "XML"
      return $tutorial
    )
  }
</totaltutoriales>
```

**10. El nombre del tutorial y su categoría, ordenado por categoría.**

```xquery
for $tutorial in /tutoriales/tutorial
order by $tutorial/categoria ascending
return
  <tutorial>
    {$tutorial/categoria}
    {$tutorial/titulo}
  </tutorial>
```

**11. Todos los datos de cada tutorial excepto las visitas.**

```xquery
for $tutorial in /tutoriales/tutorial
return
  <tutorial>
    {$tutorial/titulo}
    <autor>
      {$tutorial/autor/nombre}
      {$tutorial/autor/apellidos}
    </autor>
    {$tutorial/categoria}
  </tutorial>
```

**12. En una tabla de HTML de dos columnas, el título y el nombre del autor.**

```xquery
<table>
  {
    for $tutorial in /tutoriales/tutorial
    return
      <tr>
        <td>{$tutorial/titulo/text()}</td>
        <td>{$tutorial/autor/nombre/text()}</td>
      </tr>
  }
</table>
```

</details>

---

## Ejercicio 606

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<recetas>
  <receta>
    <titulo>Ternera a la parmesana con pasta cabello de ángel con ajo</titulo>
    <ingrediente nombre="filete de ternera en cubos" cantidad="1,5" unidad="libra"/>
    <ingrediente nombre="cebolla, cortada en aros finos" cantidad="1"/>
    <ingrediente nombre="pimiento morrón verde, cortado en aros" cantidad="1"/>
    <ingrediente nombre="pan rallado italiano" cantidad="1" unidad="taza"/>
    <ingrediente nombre="queso parmesano rallado" cantidad="0.5" unidad="taza"/>
    <ingrediente nombre="aceite de oliva" cantidad="2" unidad="cucharada"/>
    <ingrediente nombre="salsa de espagueti" cantidad="1" unidad="frasco"/>
    <ingrediente nombre="queso mozzarella rallado" cantidad="0.5" unidad="taza"/>
    <ingrediente nombre="pasta cabello de ángel" cantidad="12" unidad="onza"/>
    <ingrediente nombre="ajo picado" cantidad="2" unidad="cucharadita"/>
    <ingrediente nombre="mantequilla" cantidad="0.25" unidad="taza"/>
    <preparación>
      <paso>Precaliente el horno a 350 grados F (175 grados C).</paso>
      <paso>Corte el bistec en cubos en trozos del tamaño de una porción. Cubra la carne con las migas de pan y el queso parmesano. Caliente el aceite de oliva en una sartén grande y saltee 1 cucharadita de ajo durante 3 minutos. Freír rápidamente (dorar rápidamente por ambos lados) la carne. Coloque la carne en una cacerola para hornear, superponiendo ligeramente los bordes. Coloque los aros de cebolla y los pimientos encima de la carne y vierta la salsa marinara sobre todo.</paso>
      <paso>Hornee a 350 grados F (175 grados C) durante 30 a 45 minutos, dependiendo del grosor de la carne. Espolvorea mozzarella sobre la carne y deja en el horno hasta que burbujee.</paso>
      <paso>Hervir la pasta al dente. Escurra y mezcle la mantequilla y 1 cucharadita de ajo. Para un sabor a ajo más fuerte, sazone con ajo en polvo. Cubra con parmesano rallado y perejil para darle color. ¡Sirva la carne y la salsa encima de una montaña de pasta!</paso>
    </preparación>
    <comentario>Prepare la carne con anticipación y refrigere durante la noche, el ácido en la salsa de tomate ablandará la carne aún más. Si haces esto, guarda la mozzarella para el último minuto.</comentario>
    <nutricion caloria="1167" grasa="23" carbohidratos="45" proteína="32"/>
  </receta>
  <receta>
    <titulo>Pastel de ricota</titulo>
    <ingrediente nombre="relleno">
      <ingrediente nombre="queso ricotta" cantidad="3" unidad="libra"/>
      <ingrediente nombre="huevos" cantidad="12"/>
      <ingrediente nombre="azúcar blanca" cantidad="2" unidad="taza"/>
      <ingrediente nombre="extracto de vainilla" cantidad="2" unidad="cucharadita"/>
      <ingrediente nombre="chispas de chocolate semidulce" cantidad="0.25" unidad="taza"/>
      <preparación>
        <paso>Bate los 12 huevos, 2 tazas de azúcar y el extracto de vainilla juntos. Agregue el queso ricotta y las chispas de chocolate. Dejar de lado.</paso>
      </preparación>
    </ingrediente>
    <ingrediente nombre="masa">
      <ingrediente nombre="harina" cantidad="4" unidad="taza"/>
      <ingrediente nombre="polvo de hornear" cantidad="5" unidad="cucharadita"/>
      <ingrediente nombre="azúcar blanca" cantidad="1" unidad="taza"/>
      <ingrediente nombre="manteca vegetal" cantidad="0.5" unidad="taza"/>
      <ingrediente nombre="huevos, ligeramente batidos" cantidad="4"/>
      <ingrediente nombre="extracto de vainilla" cantidad="1" unidad="cucharadita"/>
      <preparación>
        <paso>Combine la harina, el polvo de hornear y 1 taza de azúcar. Corte la manteca y mezcle hasta que la mezcla parezca migas gruesas. Mezcle 4 de los huevos y 1 cucharadita de vainilla. Divida la masa en 4 bolas y enfríe (si es necesario).</paso>
      </preparación>
    </ingrediente>
    <ingrediente nombre="leche" cantidad="*"/>
    <preparación>
      <paso>Precaliente el horno a 325 grados F (165 grados C). Engrasar dos platos hondos para pastel.</paso>
      <paso>Extienda 2 de las bolas para que encajen en los moldes para pastel. No haga la corteza demasiado gruesa, ya que se expandirá durante la cocción y se volverá demasiado gruesa. No acanalar los bordes de la masa. Extienda las otras 2 bolas de masa y córtelas en 8 tiras estrechas para la parte superior de la masa.</paso>
      <paso>Vierta el relleno uniformemente en las masas de pastel. Cubra cada pastel con 8 tiras angostas de masa o recortes de galletas. Cepille la parte superior del pastel con leche para que brille. Coloque papel aluminio en el borde de la corteza.</paso>
      <paso>Hornee a 325 grados F (165 grados C) durante 20 a 30 minutos y luego retire el papel aluminio. Continúe horneando por otros 25 o 30 minutos o hasta que un cuchillo insertado en el centro salga limpio.</paso>
    </preparación>
    <nutricion caloria="349" grasa="18" carbohidratos="64" proteína="18"/>
  </receta>
  <receta>
    <titulo>Linguine alla Pescatora</titulo>
    <ingrediente nombre="pasta linguini" cantidad="16" unidad="onza"/>
    <ingrediente nombre="salsa">
      <ingrediente nombre="aceite de oliva" cantidad="2" unidad="cucharada"/>
      <ingrediente nombre="dientes de ajo picados" cantidad="2"/>
      <ingrediente nombre="condimento italiano" cantidad="0.5" unidad="cucharadita"/>
      <ingrediente nombre="tomillo seco" cantidad="0.25" unidad="cucharadita"/>
      <ingrediente nombre="hojuelas de pimiento rojo triturado" cantidad="0.25" unidad="cucharadita"/>
      <ingrediente nombre="tomates triturados" cantidad="1" unidad="lata"/>
      <ingrediente nombre="aceitunas negras, escurridas" cantidad="6" unidad="onza"/>
      <ingrediente nombre="almejas enteras" cantidad="10" unidad="onza"/>
      <ingrediente nombre="almejas picadas, con jugo" cantidad="6.5" unidad="onza"/>
      <ingrediente nombre="pequeña ensalada de camarones" cantidad="0.25" unidad="libra"/>
      <ingrediente nombre="vieiras" cantidad="0.25" unidad="libra"/>
      <ingrediente nombre="ralladura de limón" cantidad="2.5" unidad="cucharadita"/>
      <ingrediente nombre="sal" cantidad="*"/>
      <ingrediente nombre="pimienta negra molida" cantidad="*"/>
      <preparación>
        <paso>En una cacerola pesada a fuego medio saltee el ajo en aceite de oliva hasta que el ajo se ablande.</paso>
        <paso>Agregue el condimento italiano, el tomillo, las hojuelas de pimiento rojo triturado, los tomates triturados, las aceitunas negras y el jugo de ambas latas de almejas. Cocine a fuego lento durante 15 minutos.</paso>
        <paso>Mezcle las almejas enlatadas, los camarones, las vieiras, la ralladura de limón y sal y pimienta al gusto.</paso>
        <paso>Cocine a fuego lento durante 15 minutos más o hasta que los camarones y las almejas estén cocidos.</paso>
      </preparación>
    </ingrediente>
    <preparación>
      <paso>En una olla grande con agua hirviendo con sal, cocine los linguini hasta que estén al dente. Drenar.</paso>
      <paso>Mezcle la pasta linguini cocida y escurrida sobre la salsa de mariscos. Servir tibio.</paso>
    </preparación>
    <nutricion caloria="532" grasa="12" carbohidratos="59" proteína="29"/>
  </receta>
  <receta>
    <titulo>Zuppa Inglés</titulo>
    <ingrediente nombre="yemas de huevo" cantidad="4"/>
    <ingrediente nombre="leche" cantidad="2.5" unidad="taza"/>
    <ingrediente nombre="Galletas Savoiardi" cantidad="21"/>
    <ingrediente nombre="cantidad de azúcar" cantidad="0.75" unidad="taza"/>
    <ingrediente nombre="Alchermes licor" cantidad="1" unidad="taza"/>
    <ingrediente nombre="ralladura de limón" cantidad="*"/>
    <ingrediente nombre="harina" cantidad="0.5" unidad="taza"/>
    <ingrediente nombre="crema batida fresca" cantidad="*"/>
    <preparación>
      <paso>Caliente la leche en una cacerola antiadherente.</paso>
      <paso>En un tazón grande bata las yemas de huevo con el azúcar, agregue la harina y combine los ingredientes hasta que estén bien mezclados.</paso>
      <paso>Agregue la leche, un poco a la vez a la mezcla de huevo, mezclando bien.</paso>
      <paso>Ponga la mezcla en la cacerola y cocínela en la estufa a fuego medio-bajo. Mezclar la nata continuamente con una cuchara de madera. Cuando empiece a espesar, retíralo del fuego y viértelo en un plato grande para que se enfríe.</paso>
      <paso>Revuelva la crema de vez en cuando para que la parte superior no se endurezca.</paso>
      <paso>Sumerja rápidamente ambos lados de los dedos de dama en el licor. Póngalos en capas uno a la vez en un recipiente de vidrio lo suficientemente grande como para contener 7 galletas.</paso>
      <paso>Extienda 1/3 de la crema y repita la capa con los dedos de las manos. Terminar con la crema.</paso>
    </preparación>
    <comentario>Refrigere durante al menos 4 horas, mejor aún durante la noche. Antes de servir decora la zuppa inglese con nata montada.</comentario>
    <nutricion caloria="612" grasa="49" carbohidratos="45" proteína="4" alcohol="2"/>
  </receta>
  <receta>
    <titulo>Cailles en sarcófagos</titulo>
    <ingrediente nombre="pastel">
      <ingrediente nombre="mantequilla refrigerada sin sal" cantidad="15" unidad="onza"/>
      <ingrediente nombre="harina" cantidad="3" unidad="taza"/>
      <ingrediente nombre="sal" cantidad="1.5" unidad="cucharadita"/>
      <ingrediente nombre="agua helada" cantidad="0.75" unidad="taza"/>
      <preparación>
        <paso>En un tazón grande, corte 6 cucharadas de mantequilla en la harina con una batidora de repostería hasta que la mantequilla esté más o menos incorporada.</paso>
        <paso>Disuelva la sal en el agua helada. Rocíe lentamente el agua con sal en la mezcla de harina mientras revuelve suavemente con un tenedor.</paso>
        <paso>Vacíe la masa en un pedazo grande de envoltura de plástico. Doblando los cuatro lados de la envoltura y presionando, forme un rectángulo de masa.</paso>
        <paso>Vuelva a estirar la masa y repita el plegado, espolvoreando ligeramente con harina entre cada capa.</paso>
        <paso>La masa se volverá progresivamente más suave a medida que trabaje en ella. Después de 6 o 10 repeticiones de doblar y enrollar, corta la masa en 18 partes iguales. Envuelva cada pocillo en film transparente y déjelo reposar en el frigorífico durante al menos 2 horas.</paso>
      </preparación>
    </ingrediente>
    <ingrediente nombre="relleno">
      <ingrediente nombre="pollos pequeños, cortados" cantidad="3"/>
      <ingrediente nombre="Hierbas de Provenza" cantidad="*"/>
      <ingrediente nombre="vino blanco seco" cantidad="1.5" unidad="taza"/>
      <ingrediente nombre="jugo de naranja" cantidad="0.5" unidad="taza"/>
      <ingrediente nombre="ajo picado" cantidad="4" unidad="cucharadita"/>
      <ingrediente nombre="aceite de trufa" cantidad="*"/>
      <preparación>
        <paso>Coloque las piernas y los muslos de pollo en una fuente para hornear, las pechugas de pollo en otra. Frote herbes de Provence debajo de la piel de estas partes de pollo.</paso>
        <paso>Combine el vino con el jugo de naranja, el ajo y un poco de aceite de trufa. Picar la mitad de la cebolla y agregarla.</paso>
        <paso>Vierta sobre las piezas de pollo, cubra y refrigere durante la noche.</paso>
      </preparación>
    </ingrediente>
    <ingrediente nombre="stock">
      <ingrediente nombre="alitas de pollo, menudencias y riñón" cantidad="*"/>
      <ingrediente nombre="cebollas, peladas" cantidad="1.5"/>
      <ingrediente nombre="zanahorias, peladas y cortadas a lo largo" cantidad="5"/>
      <ingrediente nombre="apio, cortado a lo largo" cantidad="2" unidad="costillas"/>
      <ingrediente nombre="hoja de laurel" cantidad="1"/>
      <ingrediente nombre="pequeño manojo de perejil" cantidad="1"/>
      <ingrediente nombre="granos de pimienta enteros" cantidad="0.5" unidad="cucharadita"/>
      <ingrediente nombre="sal" cantidad="*"/>
      <preparación>
        <paso>Coloque las piezas de pollo en una olla grande, cubra con agua fría y hierva. Retirar la espuma que sube hasta arriba.</paso>
        <paso>Cuando el líquido esté relativamente claro, agregue las zanahorias, el apio, la cebolla entera, la hoja de laurel, el perejil, los granos de pimienta y la sal. Reduzca el fuego, cubra y deje hervir a fuego lento durante al menos 2 horas para hacer un caldo sustancioso.</paso>
        <paso>Cuele, deseche los sólidos y refrigere el caldo.</paso>
      </preparación>
    </ingrediente>
    <preparación>
      <paso>Precaliente el horno a 350 grados. Retire la grasa del caldo y vierta suficiente sobre el pollo marinado para cubrir. Hornee el pollo hasta que esté tierno y los jugos salgan claros, aproximadamente 25 minutos para las pechugas, un poco más para las piernas y los muslos.</paso>
      <paso>Reserve los jugos de uno de los platos para hornear, quitando la grasa de la parte superior. Pelar, deshuesar y enfriar el pollo.</paso>
    </preparación>
    <nutricion caloria="1892" grasa="33" carbohidratos="28" proteína="39"/>
  </receta>
</recetas>
```

### Tareas

1. Una lista que contiene, para cada receta, el elemento `<titulo>` de la receta y un elemento `<calorias>` que contenga el número de calorías.
2. Una lista similar a la primera, ordenada según las calorías.
3. Una lista similar a la primera, ordenada alfabéticamente según el título.
4. Una lista similar a la primera, ordenada según el contenido de grasa.
5. Una lista similar a la primera, con el título como atributo y las calorías como contenido.
6. Una lista que contenga para cada receta, el título como atributo y cada uno de los ingredientes de nivel superior (sin añadir los ingredientes que están dentro de otros ingredientes).
7. Una lista con cada una de las recetas que contengan el ingrediente `harina`. Poner el título de la receta como atributo del elemento `receta`.
8. Una lista de todas aquellas recetas que tengan un ingrediente llamado `relleno` y este contenga en su interior más de 5 elementos `ingrediente`. La lista resultante estará formada por elementos `receta` que contienen un atributo `titulo` con el valor del elemento `titulo` de la receta. Además, dentro de cada elemento `receta` habrá elementos `ingrediente` con el nombre de cada uno de los ingredientes.

<details>
<summary>Solución</summary>

**1. Lista con `<titulo>` y `<calorias>` para cada receta.**

```xquery
<recetas>
  {
    for $r in /recetas/receta
    return
      <receta>
        {$r/titulo}
        <calorias>{number($r/nutricion/@caloria)}</calorias>
      </receta>
  }
</recetas>
```

**2. Lista ordenada según las calorías.**

```xquery
<recetas>
  {
    for $r in /recetas/receta
    order by number($r/nutricion/@caloria)
    return
      <receta>
        {$r/titulo}
        <calorias>{number($r/nutricion/@caloria)}</calorias>
      </receta>
  }
</recetas>
```

**3. Lista ordenada alfabéticamente según el título.**

```xquery
<recetas>
  {
    for $r in /recetas/receta
    order by string($r/titulo)
    return
      <receta>
        {$r/titulo}
        <calorias>{number($r/nutricion/@caloria)}</calorias>
      </receta>
  }
</recetas>
```

**4. Lista ordenada según el contenido de grasa.**

El atributo puede llamarse `grasa` o `grasas` según la receta, por lo que se usa `||` para concatenar ambos valores posibles antes de convertirlos a número:

```xquery
<recetas>
  {
    for $r in /recetas/receta
    let $grasa := number($r/nutricion/@grasa || $r/nutricion/@grasas)
    order by $grasa
    return
      <receta>
        {$r/titulo}
        <calorias>{number($r/nutricion/@caloria)}</calorias>
      </receta>
  }
</recetas>
```

**5. Lista con el título como atributo y las calorías como contenido.**

```xquery
<recetas>
  {
    for $r in /recetas/receta
    return
      <receta titulo="{$r/titulo}">
        <calorias>{number($r/nutricion/@caloria)}</calorias>
      </receta>
  }
</recetas>
```

**6. Lista con el título como atributo e ingredientes de nivel superior.**

```xquery
<recetas>
  {
    for $r in /recetas/receta
    return
      <receta titulo="{$r/titulo}">
        {
          for $i in $r/ingrediente
          return <ingrediente>{string($i/@nombre)}</ingrediente>
        }
      </receta>
  }
</recetas>
```

**7. Lista de recetas que contienen el ingrediente `harina`.**

```xquery
<recetas>
  {
    for $r in /recetas/receta
    where $r//ingrediente/@nombre="harina"
    return <receta titulo="{$r/titulo}"/>
  }
</recetas>
```

**8. Recetas con `relleno` que tenga más de 5 ingredientes interiores.**

```xquery
<recetas>
  {
    for $r in /recetas/receta
    for $i in $r/ingrediente
    where $i/@nombre="relleno" and count($i/ingrediente) > 5
    return
      <receta titulo="{$r/titulo}">
        {
          for $f in $i/ingrediente
          return <ingrediente>{data($f/@nombre)}</ingrediente>
        }
      </receta>
  }
</recetas>
```

Consulta alternativa con filtrado directo en el eje:

```xquery
for $receta in /recetas/receta
where
  $receta/ingrediente/@nombre='relleno' and
  count($receta/ingrediente[@nombre='relleno']/ingrediente) > 5
return
  <receta titulo="{$receta/titulo}">
    {
      for $ingrediente in $receta/ingrediente[@nombre='relleno']/ingrediente
      return <ingrediente>{data($ingrediente/@nombre)}</ingrediente>
    }
  </receta>
```

</details>
