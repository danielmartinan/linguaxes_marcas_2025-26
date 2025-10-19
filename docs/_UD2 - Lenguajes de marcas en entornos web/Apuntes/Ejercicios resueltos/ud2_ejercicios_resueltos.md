# Ejercicios resueltos sobre HTML

## Ejercicio 1

Dado el siguiente documento HTML:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>201</title>
	</head>
	<body>
		HTML son las siglas de HyperText Markup Language, que puede traducirse como lenguaje de marcas o marcado de hipertexto.
		El lenguaje HTML se emplea para crear las páginas web. Es muy fácil ver el código HTML de una página web, la opción exacta cambia de un navegador a otro y también puede cambiar de una versión a otra de un mismo navegador, pero suelen tener un nombre similar.
		HTML se compone de etiquetas que se escriben entre los símbolos menor que y mayor que.
		Los inicios del lenguaje HTML se remontan al año 1990, cuando Tim Berners-Lee creó la primera página web.
		Tim Berners-Lee definió la primera versión de HTML en el año 1991. En la actualidad, la última versión de HTML es HTML5.
	</body>
</html>
```

Modifica el código para cumplir con los siguientes requisitos:

- Las siglas HTML deben aparecer como texto destacado en toda la página.
- `Tim Berners-Lee` debe aparecer como texto enfatizado en toda la página.
- Cada párrafo se debe marcar como tal.
- Se debe añadir un encabezado de nivel 1 con el texto `HTML` antes de `HTML son las siglas de...`
- Se debe añadir un encabezado de nivel 2 con el texto `Historia de HTML` antes de `Los inicios del lenguaje HTML...`
- Se debe añadir un encabezado de nivel 2 con el texto `Versiones de HTML` antes de `Tim Berners-Lee definió...`.

El resultado final debe ser una página web que tenga el mismo aspecto que la siguiente imagen:

![alt text](/img/linguaxes-marcas/ud2/img/ejer1.png)

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejercicio 1</title>
  </head>
  <body>
    <h1>HTML</h1>

    <p>
      <strong>HTML</strong> son las siglas de <em>HyperText Markup Language</em>, que puede traducirse como lenguaje de marcas o marcado de hipertexto.
    </p>

    <p>
      El lenguaje <strong>HTML</strong> se emplea para crear las páginas web. Es muy fácil ver el código <strong>HTML</strong> de una página web, la opción exacta cambia de un navegador a otro y también puede cambiar de una versión a otra de un mismo navegador, pero suelen tener un nombre similar.
    </p>

    <p>
      <strong>HTML</strong> se compone de etiquetas que se escriben entre los símbolos menor que y mayor que.
    </p>

    <h2>Historia de HTML</h2>

    <p>
      Los inicios del lenguaje <strong>HTML</strong> se remontan al año 1990, cuando <em>Tim Berners-Lee</em> creó la primera página web.
    </p>

    <h2>Versiones de HTML</h2>

    <p>
      <em>Tim Berners-Lee</em> definió la primera versión de <strong>HTML</strong> en el año 1991.
    </p>

    <p>
      En la actualidad, la última versión de <strong>HTML</strong> es HTML5.
    </p>
  </body>
</html>
```

</details>

## Ejercicio 2

A partir del texto proporcionado, crea una página web que tenga el mismo aspecto que la siguiente imagen:

![alt text](/img/linguaxes-marcas/ud2/img/ejer2.png)

Requisitos:

- El título de la página (el que aparece en la pestaña del navegador) debe ser `Tim Berners-Lee`.
- El texto `Tim Berners-Lee` como encabezado de nivel 1.
- El texto `Biografía` como encabezado de nivel 2.
- Todas las siglas (como HTTP, W3C o MIT) deben aparecer como texto destacado y, al poner el ratón encima, debe mostrar el significado de las siglas.
- Los nombres de las instituciones o empresas, como Consorcio de la World Wide Web o Universidad de Oxford, deben aparecer como texto enfatizado.

El texto base es el siguiente:

```plaintext
Tim Berners-Lee
Sir Timothy "Tim" John Berners-Lee (Londres, Reino Unido, 8 de junio de 1955) es un científico de la computación británico, conocido por ser el padre de la Web. Estableció la primera comunicación entre un cliente y un servidor usando el protocolo HTTP en noviembre de 1989. En octubre de 1994 fundó el Consorcio de la World Wide Web (W3C) con sede en el MIT, para supervisar y estandarizar el desarrollo de las tecnologías sobre las que se fundamenta la Web y que permiten el funcionamiento de Internet.
Biografía
Nació en el sudoeste de Londres en 1955. Sus padres eran matemáticos y formaron parte del equipo que construyó el Manchester Mark I (una de las primeras computadoras).
Durante el tiempo que estuvo en la universidad, construyó una computadora con una soldadora, circuitos TTL, un procesador Motorola 68000 y un televisor viejo. Se graduó en física en 1976 en el Queen's College de la Universidad de Oxford. Conoció a su primera esposa en este periodo. En 1978, trabajó en D.G. Nash Limited (también en Poole) y escribió un sistema operativo.
Desarrollo de su carrera
Berners-Lee trabajó en el CERN desde junio hasta diciembre de 1980. Durante ese tiempo, propuso un proyecto basado en el hipertexto para facilitar la forma de compartir y la puesta al día de la información entre investigadores. En este periodo también construyó un programa llamado Enquire que no llegó a ver la luz.
Después de dejar el CERN, en 1980, se fue a trabajar a la empresa de John Poole Image Computer Systems Ltd., pero regresó al CERN otra vez en 1984.
En 1989, el CERN era el nodo de Internet más grande de Europa y Berners-Lee vio la oportunidad de unir Internet y el hipertexto (HTTP y HTML), de lo que surgiría la World Wide Web. Desarrolló su primera propuesta de la Web en marzo de 1989, pero no tuvo mucho eco, por lo que en 1990 y con la ayuda de Robert Cailliau, hicieron una revisión que fue aceptada por su gerente, Mike Sendall. Usó ideas similares a las que había usado en el sistema Enquire para crear la World Wide Web, para esto diseñó y construyó el primer navegador (llamado WorldWideWeb y desarrollado con NextStep) y el primer servidor web al que llamó httpd (HyperText Transfer Protocol daemon).
Fuente: Wikipedia
```

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML</title>
  </head>
  <body>
    <h1>Tim Berners-Lee</h1>

    <p>
      Sir Timothy "Tim" John Berners-Lee (Londres, Reino Unido, 8 de junio de 1955) es un científico de la computación británico, conocido por ser el padre de la Web. Estableció la primera comunicación entre un cliente y un
      servidor usando el protocolo <strong><abbr title="Hypertext Transfer Protocol">HTTP</abbr></strong> en noviembre de 1989. En octubre de 1994 fundó el <em>Consorcio de la World Wide Web</em> (<strong><abbr title="World Wide Web Consortium">W3C</abbr></strong>) con sede en el <strong><abbr title="Massachusetts Institute of Technology">MIT</abbr></strong>, para supervisar y estandarizar el desarrollo de las tecnologías sobre las que se fundamenta la Web y que permiten el funcionamiento de Internet.
    </p>

    <h2>Biografía</h2>

    <p>
      Nació en el sudoeste de Londres en 1955. Sus padres eran matemáticos y formaron parte del equipo que construyó el Manchester Mark I (una de las primeras computadoras). Durante el tiempo que estuvo en la universidad, construyó una computadora con una soldadora, circuitos <strong>TTL</strong>, un procesador Motorola 68000 y un televisor viejo. Se graduó en física en 1976 en el <em>Queen's College</em> de la <em>Universidad de Oxford</em>. Conoció a su primera esposa en este periodo. En 1978, trabajó en <em>D.G. Nash Limited</em> (también en <em>Poole</em>) escribió un sistema operativo.
    </p>

    <h2>Desarrollo de su carrera</h2>

    <p>
      Berners-Lee trabajó en el <strong>CERN</strong> desde junio hasta diciembre de 1980. Durante ese tiempo, propuso un proyecto basado en el hipertexto para facilitar la forma de compartir y la puesta al día de la información entre investigadores. En este periodo también construyó un programa llamado Enquire que no llegó a ver la luz.
    </p>

    <p>
      Después de dejar el <strong>CERN</strong>, en 1980, se fue a trabajar a la empresa de <em>John Poole Image Computer Systems Ltd.</em>, pero regresó al <strong>CERN</strong> otra vez en 1984.
    </p>

    <p>
      En 1989, el <strong>CERN</strong> era el nodo de Internet más grande de Europa y Berners-Lee vio la oportunidad de unir Internet y el hipertexto (<strong><abbr title="Hypertext Transfer Protocol">HTTP</abbr></strong> y <strong><abbr title="HyperText Markup Language">HTML</abbr></strong >), de lo que surgiría la World Wide Web. Desarrolló su primera propuesta de la Web en marzo de 1989, pero no tuvo mucho eco, por lo que en 1990 y con la ayuda de Robert Cailliau, hicieron una revisión que fue aceptada por su gerente, Mike Sendall. Usó ideas similares a las que había usado en el sistema Enquire para crear la World Wide Web, para esto diseñó y construyó el primer navegador (llamado WorldWideWeb y desarrollado con NextStep) y el primer servidor web al que llamó httpd (HyperText Transfer Protocol daemon).
    </p>

    <p>Fuente: <em>Wikipedia</em></p>
  </body>
</html>
```

</details>

## Ejercicio 3

Corrige los errores que presenta el siguiente documento HTML:

```html
<html lang=es>
<head>
<title>World Wide Web</title>
</head>
<body>

<h1>World Wide Web</h1>

<p>
En informática, la <strong><em>World Wide Web</strong></em> (WWW) o Red informática mundial comúnmente conocida como la web, es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.

<h2>Historia</h2>

<p>
La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992.
</p>

<p>
Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica.
</p>

<p>Fuente: <em>Wikipedia</p></em>

</html>
```

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<!-- El DOCTYPE no es obligatorio, pero sí recomendable -->
<!-- Los valores de los atributos tienen que llevar siempre comillas -->
<html lang="es">
  <head>
    <title>World Wide Web</title>
    <!-- Es necesario indicar la codificación de caracteres UTF-8 para mostrar
         correctamente las tildes. -->
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>World Wide Web</h1>

    <p>
      <!-- Los documentos tienen que estar bien formados -->
      En informática, la <strong><em>World Wide Web</em></strong> (WWW) o Red informática mundial comúnmente conocida como la web, es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.
      <!-- Las etiquetas siempre se tienen que cerrar -->
    </p>

    <h2>Historia</h2>

    <p>
      La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992.
    </p>

    <p>
      Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica.
    </p>

    <p>
      <!-- Los documentos tienen que estar bien formados -->
      Fuente: <em>Wikipedia</em>
    </p>

    <!-- Las etiquetas siempre se tienen que cerrar -->
  </body>
</html>
```

</details>

## Ejercicio 4

Corrige los errores que presenta el siguiente documento HTML. También pueden
existir ciertas cosas que no están mal, pero que sería recomendable hacer mejor.

```html
<html>
<head>
<title>World Wide Web</title>
</head>
<body>

<h1>World Wide Web</h1>

<p>
En inform&aacute;tica, la <strong><em>World Wide Web</em></strong> (WWW) o Red inform&aacute;tica mundial com&uacute;nmente conocida como la web, es un sistema de distribuci&oacute;n de documentos de hipertexto o hipermedios interconectados y accesibles v&iacute;a Internet. Con un navegador web, un usuario visualiza sitios web compuestos de p&aacute;ginas web que pueden contener texto, im&aacute;genes, v&iacute;deos u otros contenidos multimedia, y navega a trav&eacute;s de esas p&aacute;ginas usando hiperenlaces.
</p>

<h3>Historia</h3>

<p>
La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992.
</p>

<p>
Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica.
</p>

<p>
Una frase famosa de Tim Berners-Lee es:
</p>

<blockquote>
<p>
There is only one web.
</p>
</blockquote>

<p>Fuente: <em>Wikipedia</em></p>

</html>
```

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<!-- El DOCTYPE no es obligatorio, pero sí muy necesario -->
<!-- No es obligatorio, pero es importante indicar el idioma principal de una página web -->
<html lang="es">
  <head>
    <!-- Conviene indicar el juego de caracteres empleado -->
    <meta charset="utf-8" />
    <title>World Wide Web</title>
  </head>
  <body>
    <h1>World Wide Web</h1>

    <p>
      <!-- Si se emplea correctamente el juego de caracteres, no es necesario 
           emplear las entidades HTML como &aacute; -->
      En informática, la <strong><em>World Wide Web</em></strong> (WWW) o Red informática mundial comúnmente conocida como la web, es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.
    </p>

    <!-- Conviene seguir una secuencia lógica en los encabezados y no omitir niveles -->
    <h2>Historia</h2>

    <p>
      La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992.
    </p>

    <p>
      Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica.
    </p>

    <p>
      Una frase famosa de Tim Berners-Lee es:
    </p>

    <blockquote>
      <!-- No es obligatorio, pero conviene indicar los cambios de idioma en el texto -->
      <p lang="en">
        There is only one web.
      </p>
    </blockquote>

    <p>Fuente: <em>Wikipedia</em></p>

    <!-- Las etiquetas siempre se tienen que cerrar -->
  </body>
</html>
```

</details>

## Ejercicio 5

A partir del texto proporcionado, crea una página web que tenga el mismo aspecto que la siguiente imagen:

![alt text](/img/linguaxes-marcas/ud2/img/ejer5.png)

Además, tienes que tener en cuenta los siguientes requisitos:

- El título de la página debe ser `Curriculum Vitae de Bruce Wayne`.
- El resto de la estructura de la página debes deducirlo a partir de la imagen proporcionada.

El texto base es el siguiente:

```
Curriculum Vitae de Bruce Wayne
Datos personales
Nombre completo:  Bruce Wayne
Fecha de nacimiento: 1/5/1939
Lugar de nacimiento:  Gotham City
Formación académica
1956-1961: Universidad del Espantapájaros
1952-1956: Instituto de Dos Caras
1944-1952:  Escuela Primaria del Joker
...
Experiencia laboral
1975-1985: En el paro
1965-1975: Cazavillanos y demás chusma
1962-1965: Aprendiz de superhéroe
```

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Curriculum Vitae de Bruce Wayne</title>
  </head>
  <body>
    <h1>Curriculum Vitae de Bruce Wayne</h1>

    <h2>Datos personales</h2>
    <ul>
      <li>Nombre completo: <strong>Bruce Wayne</strong></li>
      <li>Fecha de nacimiento: <strong>1/5/1939</strong></li>
      <li>Lugar de nacimiento: <strong>Gotham City</strong></li>
    </ul>

    <h2>Formación académica</h2>
    <ul>
      <li>1956-1961: <strong>Universidad del Espantapájaros</strong></li>
      <li>1952-1956: <strong>Instituto de Dos Caras</strong></li>
      <li>1944-1952: <strong>Escuela Primaria del Joker</strong></li>
    </ul>

    <h2>Experiencia laboral</h2>
    <ul>
      <li>1975-1985: <strong>En el paro</strong></li>
      <li>1965-1975: <strong>Cazavillanos y demás chusma</strong></li>
      <li>1962-1965: <strong>Aprendiz de superhéroe</strong></li>
    </ul>
  </body>
</html>
```

</details>

## Ejercicio 6

A partir del texto proporcionado, crea una página web que tenga el mismo aspecto que la siguiente imagen:

![alt text](/img/linguaxes-marcas/ud2/img/ejer6.png)

Además, tienes que tener en cuenta los siguientes requisitos:

- El **título** de la página debe ser `Los tres pilares de la Web`.
- Los **enlaces** que aparecen en la página deben tener los siguientes destinos:
    - Tim Berners-Lee → http://es.wikipedia.org/wiki/Tim_Berners-Lee
    - Web → http://es.wikipedia.org/wiki/World_Wide_Web
    - HTML → enlace intradocumental al epígrafe HTML
    - HTTP → enlace intradocumental al epígrafe HTTP
    - URL → enlace intradocumental al epígrafe URL
    - Fuente: HTML → http://es.wikipedia.org/wiki/HTML
    - Fuente: HTTP → http://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol
    - Fuente: URL → http://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme

:::tip[CONSEJO]
Los enlaces intradocumentales nos permiten movernos a través del propio documento. Si el documento es lo suficientemente corto como para que no haya que hacer scroll, el efecto de los enlaces intradocumentales no surte efecto. Es decir, si la altura del documento HTML es más pequeña que el de la pantalla, no vamos a ver cómo un enlace nos lleva a la sección definida.

Para poder comprobar que funcionan correctamente y ver su efecto, tenemos que tener la posibilidad de hacer scroll entre secciones. Tenemos dos maneras de conseguirlo:

- Hacer zoom a la página con CTRL + +. De esta manera, al ampliar el tamaño de la fuente, tenemos que desplazarnos entre secciones.
- Reducir el tamaño de la ventana del navegador.

Si optamos por reducir el tamaño de ventana del navegador, nos quedaría así:

![Image](https://mp0373-lmsxi.vercel.app/assets/images/206-scroll-148470cbac0bbef5462d0358fc08bf0a.webp)

Podemos observar que, de esta forma, aparece la barra de desplazamiento vertical, lo que nos permite comprobar el funcionamiento de los enlaces intradocumentales.
:::

El texto base es el siguiente:

```plaintext
Los tres pilares de la Web

Tim Berners-Lee es considerado el padre de la Web porque desarrolló los tres elementos básicos para el funcionamiento de la Web: HTML, HTTP, URL.

HTML, siglas de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia para la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, entre otros. Es un estándar a cargo de la W3C, organización dedicada a la estandarización de casi todas las tecnologías ligadas a la web, sobre todo en lo referente a su escritura e interpretación.

HTTP (Hypertext Transfer Protocol) es el protocolo usado en cada transacción de la World Wide Web. HTTP fue desarrollado por el World Wide Web Consortium y la Internet Engineering Task Force, colaboración que culminó en 1999 con la publicación de una serie de RFC, el más importante de ellos es el RFC 2616 que especifica la versión 1.1.

URL (Uniform Resource Locator) es un identificador de recursos uniforme (URI) cuyos recursos referidos pueden cambiar, esto es, la dirección puede apuntar a recursos variables en el tiempo. Están formados por una secuencia de caracteres, de acuerdo a un formato modélico y estándar, que designa recursos en una red, como Internet.
```

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Los tres pilares de la Web</title>
  </head>
  <body>
    <h1>Los tres pilares de la Web</h1>

    <p>
      <a href="http://es.wikipedia.org/wiki/Tim_Berners-Lee">Tim Berners-Lee</a>
      es considerado el padre de la Web porque desarrolló los tres elementos
      básicos para el funcionamiento de la
      <a href="http://es.wikipedia.org/wiki/World_Wide_Web">Web</a>:
    </p>

    <ul>
      <li><a href="#html">HTML</a></li>
      <li><a href="#http">HTTP</a></li>
      <li><a href="#url">URL</a></li>
    </ul>

    <h2 id="html">HTML</h2>

    <p>
      HTML, siglas de <strong>HyperText Markup Language</strong>, hace
      referencia al lenguaje de marcado para la elaboración de páginas web. Es
      un estándar que sirve de referencia para la elaboración de páginas web en
      sus diferentes versiones, define una estructura básica y un código
      (denominado código HTML) para la definición de contenido de una página
      web, como texto, imágenes, entre otros. Es un estándar a cargo de la W3C,
      organización dedicada a la estandarización de casi todas las tecnologías
      ligadas a la web, sobre todo en lo referente a su escritura e
      interpretación. Es el lenguaje con el que se definen las páginas web.
    </p>

    <p>
      Fuente: <a href="http://es.wikipedia.org/wiki/HTML">HTML</a>, Wikipedia
    </p>

    <h2 id="http">HTTP</h2>

    <p>
      <strong>Hypertext Transfer Protocol</strong> o HTTP (en español protocolo de transferencia de hipertexto) es el protocolo usado en cada transacción de la World Wide Web. HTTP fue desarrollado por el World Wide Web Consortium y la Internet Engineering Task Force, colaboración que culminó en 1999 con la publicación de una serie de RFC, el más importante de ellos es el RFC 2616 que especifica la versión 1.1.
    </p>

    <p>
      Fuente:
      <a href="http://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol">HTTP</a>, Wikipedia
    </p>

    <h2 id="url">URL</h2>

    <p>
      Un <strong>localizador de recursos uniforme</strong> o URL —siglas en inglés de <em>Uniform Resource Locator</em>— es un identificador de recursos uniforme (URI) cuyos recursos referidos pueden cambiar, esto es, la dirección puede apuntar a recursos variables en el tiempo. Están formados por una secuencia de caracteres, de acuerdo a un formato modélico y estándar, que designa recursos en una red, como Internet.
    </p>

    <p>
      Fuente:
      <a href="http://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme">URL</a>, Wikipedia
    </p>
  </body>
</html>
```

</details>

## Ejercicio 7

Crea una página web que tenga el mismo aspecto que la siguiente imagen:

![alt text](/img/linguaxes-marcas/ud2/img/ejer7.png)

El formulario debe contener los siguientes **campos**:

- El nombre: con un control de tipo texto.
- Los apellidos: con un control de tipo texto.
- El género: con tres opciones excluyentes (masculino, femenino, no binario).
- La fecha de nacimiento: tres campos desplegables. Para el desplegable de los años, indica 10 opciones cualquiera.
- Los módulos de ASIR: se pueden seleccionar varios.
- Los estudios previos: área de texto.
- Un botón de envío.
- Un botón de reinicio de todo el formulario.

Además, tienes que tener en cuenta los siguientes **requisitos**:

- El **título** de la página debe ser `Matrícula ASIR`.
- El texto `Matrícula ASIR` como **encabezado** de nivel 1.
- El **método de envío** del formulario debe ser `POST`.
- El destino del envío del formulario debe ser `registro.php`.
- Cada campo debe tener una etiqueta (*label*) asociada para mejorar la usabilidad y accesibilidad.

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Matrícula ASIR</title>
  </head>

  <body>
    <h1>Matrícula ASIR</h1>

    <form action="matricula.php" method="POST">
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" />
      </div>
      <br />

      <div>
        <label for="apellidos">Apellidos</label>
        <input type="text" id="apellidos" name="apellidos" />
      </div>
      <br />

      <fieldset>
        <legend>Género</legend>
        <input type="radio" name="genero" id="masculino" value="masculino" />
        <label for="masculino">Masculino</label>

        <input type="radio" name="genero" id="femenino" value="femenino" />
        <label for="femenino">Femenino</label>

        <input type="radio" name="genero" id="no-binario" value="no-binario" />
        <label for="no-binario">No binario</label>
      </fieldset>
      <br />

      <fieldset>
        <legend>Fecha de nacimiento</legend>

        <label for="dia">Día</label>
        <select id="dia" name="dia">
          <option disabled selected>Día</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <label for="mes">Mes</label>
        <select id="mes" name="mes">
          <option disabled selected>Mes</option>
          <option value="1">Enero</option>
          <option value="2">Febrero</option>
          <option value="3">Marzo</option>
          <option value="4">Abril</option>
          <option value="5">Mayo</option>
          <option value="6">Junio</option>
          <option value="7">Julio</option>
          <option value="8">Agosto</option>
          <option value="9">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>
        <label for="ano">Año</label>
        <select id="ano" name="ano">
          <option disabled selected>Año</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
        </select>
      </fieldset>
      <br />

      <fieldset>
        <legend>Escoge los módulos en los que te matriculas</legend>

        <input type="checkbox" name="modulos[]" value="fh" id="m_fh" />
        <label for="m_fh">Fundamentos de hardware</label><br />

        <input type="checkbox" name="modulos[]" value="sri" id="m_sri" />
        <label for="m_sri">Servicios de red e internet</label><br />

        <input type="checkbox" name="modulos[]" value="gbd" id="m_gbd" />
        <label for="m_gbd">Gestión de bases de datos</label><br />

        <input type="checkbox" name="modulos[]" value="aso" id="m_aso" />
        <label for="m_aso">Administración de sistemas operativos</label><br />

        <input type="checkbox" name="modulos[]" value="iso" id="m_iso" />
        <label for="m_iso">Implantación de sistemas operativos</label><br />

        <input type="checkbox" name="modulos[]" value="iaw" id="m_iaw" />
        <label for="m_iaw">Implantación de aplicaciones web</label><br />

        <input type="checkbox" name="modulos[]" value="par" id="m_par" />
        <label for="m_par">Planificación y administración de redes</label><br />

        <input type="checkbox" name="modulos[]" value="asgbd" id="m_asgbd" />
        <label for="m_asgbd">Administración de sistemas gestores de bases de datos</label><br />

        <input type="checkbox" name="modulos[]" value="lmsgi" id="m_lmsgi" />
        <label for="m_lmsgi">Lenguajes de marcas y sistemas de gestión de información</label><br />

        <input type="checkbox" name="modulos[]" value="sad" id="m_sad" />
        <label for="m_sad">Seguridad y alta disponibilidad</label><br />

        <input type="checkbox" name="modulos[]" value="fol" id="m_fol" />
        <label for="m_fol">Formación y orientación laboral</label><br />

        <input type="checkbox" name="modulos[]" value="eie" id="m_eie" />
        <label for="m_eie">Empresa e iniciativa emprendedora</label><br />

        <input type="checkbox" name="modulos[]" value="proy" id="m_proy" />
        <label for="m_proy">Proyecto de Administración de Sistemas Informáticos en Red</label><br />

        <input type="checkbox" name="modulos[]" value="fct" id="m_fct" />
        <label for="m_fct">Formación en centros de trabajo</label>
      </fieldset>
      <br />

      <label for="estudios">Estudios previos:</label><br />
      <textarea rows="5" cols="50" id="estudios" name="estudios"></textarea>
      <br /><br />

      <input type="submit" value="Enviar" />
      <input type="reset" name="Reset" />
    </form>
    <p>
      <b>Pulsa el botón de "enviar" para formalizar la matrícula o el boton de
        "restablecer" para limpiar el formulario.</b>
    </p>
  </body>
</html>
```

</details>