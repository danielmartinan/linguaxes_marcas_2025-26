# Tarea UD6 - XQuery

En esta tarea se plantean diferentes ejercicios para la práctica de las expresiones XQuery. Para todos los ejercicios se solicitarán diferentes archivos con la extensión .xq, cada uno de ellos con una consulta XQuery diferente.

**Además de crear los archivos, es OBLIGATORIO probarlo utilizando la herramienta BaseX, para asegurarnos de que las consultas devuelven los resultados esperados. Para ello, puedes utilizar los ficheros XML de ejemplo proporcionados. No se evaluarán aquellas entregas que no incluyan las capturas de pantalla requeridas.**

Deberás añadir capturas de pantalla de cada consulta XQuery ejecutada en BaseX, mostrando el resultado obtenido. Estas capturas de pantalla se deben incluir en un documento de texto (puede ser un documento Word, PDF, etc.) que se entregará junto con los archivos .xq (ver instrucciones de entrega al final del enunciado).

Puedes revisar estos videos del canal [DiscoDuroDeRoer](https://www.youtube.com/watch?v=LNtsKx8zm-4&list=PLaxZkGlLWHGV7_2FWz_mk7ias1p_ZG3YV)  para revisar cómo utilizar BaseX y [estos](https://www.youtube.com/watch?v=lnVLbrTrXpo&list=PLaxZkGlLWHGUubA2xwqNHQljbJkxUlJKZ) sobre cómo ejecutar consultas XQuery.

> ⚠️ IMPORTANTE
> En todas las consultas XQuery se debe utilizar la estructura FLWOR para el filtrado de la información. No está permitido el uso de XPath para filtrar la información en la clásula for.
>
> Por ejemplo, la siguiente consulta sería correcta:
>
> ```xquery
> for $x in elementos/elemento
> where $x/@att = "item"
> return $x/nombre
> ```
>
> Sin embargo, la siguiente consulta sería incorrecta:
>
> ```xquery
> for $x in elementos/elemento[@att="item"]
> return $x/nombre
> ```
>

## Ejercicio 1

Un documento XML almacena la información de usuarios/as y tiene las siguientes características:

- El elemento raíz del documento es usuarios.
- Dentro del elemento usuarios hay varios elementos usuario.
- Un elemento usuario contiene los elementos id, nombre, apellido, email, edad, ip y pais.

En [este enlace](https://linguaxes-marcas-2025-26.vercel.app/assets/files/ud6_ejer1_example.xml) puedes encontrar un ejemplo de fichero XML con la estructura descrita anteriormente. Para realizar esta actividad, puedes utilizar el fichero XML de ejemplo o crear uno nuevo con la misma estructura, pero con datos diferentes.

Escribe las consultas XQuery que devuelvan:

- Los usuarios (**elementos** `<usuario>`) con identificador igual o inferior a 20.
- Los usuarios (**elementos** `<usuario>`) que tienen una edad entre 20 y 30 (incluidos).
- Los usuarios (**elementos** `<usuario>`) de España (ES) e Italia (IT).
- Los usuarios (**elementos** `<usuario>`) que tiene un email con extensión .com.
- Los usuarios (**elementos** `<usuario>`) que tienen un nombre de 5 caracteres o menos.
- El nombre y apellidos (separados por un espacio en blanco) de los usuarios de francia (FR).
- La lista completa de los países (códigos de 2 letras mayúsculas) de los usuarios almacenados en el documento XML. Los países no deben aparecer repetidos.
- Los usuarios (**elementos** `<usuario>`) con identificador superior a 50 y con edad igual o inferior a 80 años.
- La media de edad de los usuarios.
- La cantidad de usuarios guardados en el documento XML.

> Las consultas que deben devolver un elemento o varios elementos están resaltadas. El resto, deben devolver valores (cadenas de texto, números, etc.).

Cada consulta XQuery debe guardarse en un fichero llamado `ejer1_N.xq`, donde N es el número del apartado. Es decir, al terminar de realizar la actividad, debemos tener los siguientes archivos:

- `ejer1_1.xq`
- `ejer1_2.xq`
- `ejer1_3.xq`
- `ejer1_4.xq`
- `ejer1_5.xq`
- `ejer1_6.xq`
- `ejer1_7.xq`
- `ejer1_8.xq`
- `ejer1_9.xq`
- `ejer1_10.xq`

## Ejercicio 2

Un documento XML almacena la información de impresoras y tiene las siguientes características:

- El elemento raíz del documento es `impresoras`.
- Dentro del elemento `impresoras` hay varios elementos `impresora`.
- Un elemento `impresora` contiene los elementos `marca`, `modelo`, `peso`, `tamano`, `cartucho` y `enred`.
- El elemento `enred` es opcional.
- Los elementos `tamano` y `cartucho` pueden aparecer una o más veces.
- Además, un elemento `impresora` tiene los atributos `numSerie`, `tipo` y `compra`.
- El atributo `numSerie` contiene un identificador único en todo el documento.
Documento XML

En [este enlace](https://linguaxes-marcas-2025-26.vercel.app/assets/files/ud6_ejer2_example.xml) puedes encontrar un ejemplo de fichero XML con la estructura descrita anteriormente. Para realizar esta actividad, puedes utilizar el fichero XML de ejemplo o crear uno nuevo con la misma estructura, pero con datos diferentes.

Escribe las consultas XQuery que devuelvan:

- El modelo de las impresoras de tipo `láser`.
- La marca y modelo (separados por un espacio en blanco) de las impresoras con más de un tamaño.
- La marca y modelo (separados por un espacio en blanco) de las impresoras con tamaño `A3` (pueden tener otros).
- La marca y modelo (separados por un espacio en blanco) de las impresoras con tamaño `A3` como único tamaño.
- El modelo de las impresoras en red.
- La cantidad de impresoras guardadas en el fichero XML.
- Las impresoras (**elementos** `<impresora>`) compradas en 2018 o después. Los resultados se deben ordenar por año de compra (orden ascendente).
- Las impresoras (**elementos** `<impresora>`) con un peso igual o superior a 5 kg.
- Las impresoras (**elementos** `<impresora>`) que tienen cartucho con código C-456P.
- La impresora (**elemento** `<impresora>`) más pesada.

> Las consultas que deben devolver un elemento o varios elementos están resaltadas. El resto, deben devolver valores (cadenas de texto, números, etc.).

Cada consulta XQuery debe guardarse en un fichero llamado `ejer2_N.xq`, donde N es el número del apartado. Es decir, al terminar de realizar la actividad, debemos tener los siguientes archivos:

- `ejer2_1.xq`
- `ejer2_2.xq`
- `ejer2_3.xq`
- `ejer2_4.xq`
- `ejer2_5.xq`
- `ejer2_6.xq`
- `ejer2_7.xq`
- `ejer2_8.xq`
- `ejer2_9.xq`
- `ejer2_10.xq`

## Ejercicio 3

Un documento XML almacena la información de artistas y tiene las siguientes características:

- El elemento raíz del documento es `artistas`.
- Dentro del elemento `artistas` hay varios elementos `artista`.
- Un elemento `artista` contiene los elementos `nombre`, `nacimiento`, `fallecimiento` y `pais`.
- El elemento `fallecimiento` es opcional.
- Además, cada artista tiene dos atributos: `id` y `wikipedia`.
- El atributo `id` contiene un identificador único en todo el documento.

En [este enlace](https://linguaxes-marcas-2025-26.vercel.app/assets/files/ud6_ejer3_example.xml) puedes encontrar un ejemplo de fichero XML con la estructura descrita anteriormente. Para realizar esta actividad, puedes utilizar el fichero XML de ejemplo o crear uno nuevo con la misma estructura, pero con datos diferentes.

Teniendo en cuenta las características descritas, escribe las consultas XQuery que devuelvan:

- Nombre y país (separados por un espacio en blanco) de todos los artistas.
- El nombre de los artistas que nacieron antes de `1500`.
- Nombre de los artistas que no han fallecido ordenados por orden alfabético. Los artistas vivos son aquellos que no tienen el elemento `<fallecimiento>`.
- Nombre y año de fallecimiento (separados por un espacio en blanco) de los artistas que han fallecido. Los artistas fallecidos son aquellos que tienen el elemento `<fallecimiento>`.
- Una **lista HTML no ordenada** con el nombre de los artistas nacidos en España.
- Nombre e identificador (separados por un espacio en blanco) de los artistas italianos.
- La cantidad de artistas nacidos antes de `1600`.
- Los nombres de los artistas cuyo nombre empieza por `P`.
- El último artista (elemento `<artista>`) fallecido.
- El nombre de todos los artistas que tienen una longitud de nombre de más de 15 caracteres.

> Las consultas que deben devolver un elemento o varios elementos están resaltadas. El resto, deben devolver valores (cadenas de texto, números, etc.).

Cada consulta XQuery debe guardarse en un fichero llamado `ejer3_N.xq`, donde N es el número del apartado. Es decir, al terminar de realizar la actividad, debemos tener los siguientes archivos:

- `ejer3_1.xq`
- `ejer3_2.xq`
- `ejer3_3.xq`
- `ejer3_4.xq`
- `ejer3_5.xq`
- `ejer3_6.xq`
- `ejer3_7.xq`
- `ejer3_8.xq`
- `ejer3_9.xq`
- `ejer3_10.xq`

## Instrucciones de entrega

Ddeberás entregar un archivo comprimido (.zip, .tar o .7z) que contenga:

- Archivo PDF con las capturas de pantalla de cada consulta XQuery ejecutada en BaseX, mostrando el resultado obtenido.
- Los archivos .xq con las consultas XQuery realizadas para cada ejercicio.

Estructura del archivo comprimido:

```plaintext
ud6_nombre_apellido.zip
├── ud6_apellidos_nombre.pdf
├── /ejer1
│   ├── ejer1_1.xq
│   ├── ejer1_2.xq 
│   ├── ...
│   └── ejer1_10.xq
├── /ejer2
│   ├── ejer2_1.xq
│   ├── ejer2_2.xq
│   ├── ...
│   └── ejer2_N.xq
└── /ejer3
    ├── ejer3_1.xq
    ├── ejer3_2.xq
    ├── ...
    └── ejer3_N.xq
```
