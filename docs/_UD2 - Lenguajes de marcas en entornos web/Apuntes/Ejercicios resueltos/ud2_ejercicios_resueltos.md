# UD2. Ejercicios resueltos sobre HTML

## Ejercicio 201

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

![Solución 201](https://mp0373-lmsxi.vercel.app/assets/images/201-34526bfbd3680b6c3f5704ca691b1f84.webp)

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>201</title>
	</head>
	<body>
		<h1><strong>HTML</strong></h1>
		<p><strong>HTML</strong> son las siglas de HyperText Markup Language, que puede traducirse como lenguaje de marcas o marcado de hipertexto.</p>
		<p>El lenguaje <strong>HTML</strong> se emplea para crear las páginas web. Es muy fácil ver el código <strong>HTML</strong> de una página web, la opción exacta cambia de un navegador a otro y también puede cambiar de una versión a otra de un mismo navegador, pero suelen tener un nombre similar.</p>
		<p><strong>HTML</strong> se compone de etiquetas que se escriben entre los símbolos menor que y mayor que.</p>
		<h2>Historia de HTML</h2>
		<p>Los inicios del lenguaje <strong>HTML</strong> se remontan al año 1990, cuando <em>Tim Berners-Lee</em> creó la primera página web.</p>
		<h2>Versiones de HTML</h2>
		<p><em>Tim Berners-Lee</em> definió la primera versión de <strong>HTML</strong> en el año 1991. En la actualidad, la última versión de <strong>HTML</strong> es HTML5.</p>
	</body>
</html>
```

</details>

## Ejercicio 202

A partir del texto proporcionado, crea una página web que tenga el mismo aspecto que la siguiente imagen:

![Solución 202](https://mp0373-lmsxi.vercel.app/assets/images/202-5d6acb18d2a4338d5e3ef5b8ec23a153.webp)

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
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<title>Tim Berners-Lee</title>
	</head>
	<body>
		<h1>Tim Berners-Lee</h1>
		<h2>Biografía</h2>
		<p>Sir Timothy "Tim" John Berners-Lee (Londres, Reino Unido, 8 de junio de 1955) es un científico de la computación británico, conocido por ser el padre de la Web. Estableció la primera comunicación entre un cliente y un servidor usando el protocolo <abbr title="Hypertext Transfer Protocol">HTTP</abbr> en noviembre de 1989. En octubre de 1994 fundó el <em>Consorcio de la World Wide Web</em> (<abbr title="World Wide Web Consortium">W3C</abbr>) con sede en el <em>MIT</em> (<abbr title="Massachusetts Institute of Technology">MIT</abbr>), para supervisar y estandarizar el desarrollo de las tecnologías sobre las que se fundamenta la Web y que permiten el funcionamiento de Internet.</p>
		<h2>Desarrollo de su carrera</h2>
		<p>Nació en el sudoeste de Londres en 1955. Sus padres eran matemáticos y formaron parte del equipo que construyó el Manchester Mark I (una de las primeras computadoras).</p>
		<p>Durante el tiempo que estuvo en la universidad, construyó una computadora con una soldadora, circuitos TTL, un procesador Motorola 68000 y un televisor viejo. Se graduó en física en 1976 en el Queen's College de la <em>Universidad de Oxford</em>. Conoció a su primera esposa en este periodo. En 1978, trabajó en D.G. Nash Limited (también en Poole) y escribió un sistema operativo.</p>
		<h2>Desarrollo de su carrera</h2>
		<p>Berners-Lee trabajó en el CERN desde junio hasta diciembre de 1980. Durante ese tiempo, propuso un proyecto basado en el hipertexto para facilitar la forma de compartir y la puesta al día de la información entre investigadores. En este periodo también construyó un programa llamado Enquire que no llegó a ver la luz.</p>
		<p>Después de dejar el CERN, en 1980, se fue a trabajar a la empresa de John Poole Image Computer Systems Ltd., pero regresó al CERN otra vez en 1984.</p>
	</body>
</html>
```

</details>

## Ejercicio 203

Corrige los errores que presenta el siguiente documento HTML:

```html
<html lang=es>
<head>
<title>World Wide Web</title>
</head>
<body>

<h1>World Wide Web</h1>

<p>
En informática, la <strong><em>World Wide Web</strong></em> (WWW) o Red informática 
mundial comúnmente conocida como la web, es un sistema de distribución de documentos 
de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un 
navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden 
contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de 
esas páginas usando hiperenlaces.

<h2>Historia</h2>
		## Ejercicio 206

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>

		## Ejercicio 207

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
<p>
		## Ejercicio 208

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee 
		## Ejercicio 209

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, 
		## Ejercicio 210

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
Suiza, y publicado en 1992.
		## Ejercicio 211

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
</p>
		## Ejercicio 212

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>

		## Ejercicio 213

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
<p>
		## Ejercicio 214

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares 
		## Ejercicio 215

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos 
		## Ejercicio 216

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
años ha abogado por su visión de una web semántica.
		## Ejercicio 217

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
</p>
		## Ejercicio 218

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>

		## Ejercicio 219

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
<p>Fuente: <em>Wikipedia</p></em>
		## Ejercicio 220

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>

		## Ejercicio 221

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
</html>
		## Ejercicio 222

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
```
		## Ejercicio 223

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>

		## Ejercicio 224

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
<details>
		## Ejercicio 225

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
<summary>Ver solución</summary>
		## Ejercicio 226

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>

		## Ejercicio 227

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
Errores encontrados:
		## Ejercicio 228

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>

		## Ejercicio 229

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
- Falta la declaración del tipo de documento `<!DOCTYPE html>`. Aunque no es obligatorio, es recomendable añadir el atributo `lang="es"` en la etiqueta `<html>`.
		## Ejercicio 230

		Enunciado pendiente de importar.

		<details>
		<summary>Ver solución</summary>

		```html

		```

		</details>
- Falta la declaración del conjunto de caracteres `<meta charset="UTF-8" />` dentro de la etiqueta `<head>`.
- Algunas etiquetas no están correctamente cerradas o están mal anidadas, como en el caso de `<strong><em>World Wide Web</strong></em>`.

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<title>World Wide Web</title>
	</head>
	<body>
		<h1>World Wide Web</h1>
		<p>En informática, la <strong><em>World Wide Web</em></strong> (WWW) o Red informática mundial comúnmente conocida como la web, es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.</p>
		<h2>Historia</h2>
		<p>La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992.</p>
		<p>Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica.</p>
		<p><strong>Fuente:</strong> <em>Wikipedia</em></p>
	</body>
</html>
```

</details>

## Ejercicio 204

Corrige los errores que presenta el siguiente documento HTML. También pueden existir ciertas cosas que no están mal, pero que sería recomendable hacer mejor.

```html
<html>
<head>
<title>World Wide Web</title>
</head>
<body>

<h1>World Wide Web</h1>

<p>
En inform&aacute;tica, la <strong><em>World Wide Web</em></strong> (WWW) o 
Red inform&aacute;tica mundial com&uacute;nmente conocida como la web, es 
un sistema de distribuci&oacute;n de documentos de hipertexto o hipermedios 
interconectados y accesibles v&iacute;a Internet. Con un navegador web, un 
usuario visualiza sitios web compuestos de p&aacute;ginas web que pueden 
contener texto, im&aacute;genes, v&iacute;deos u otros contenidos multimedia, 
y navega a trav&eacute;s de esas p&aacute;ginas usando hiperenlaces.
</p>

<h3>Historia</h3>

<p>
La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés 
Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban 
en el CERN en Ginebra, Suiza, y publicado en 1992.
</p>

<p>
Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo 
de estándares web (como los lenguajes de marcado con los que se crean las 
páginas web), y en los últimos años ha abogado por su visión de una web 
semántica.
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
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<title>World Wide Web</title>
	</head>
	<body>
		<h1>World Wide Web</h1>
		<p>En informática, la <strong><em>World Wide Web</em></strong> (WWW) o Red informática mundial comúnmente conocida como la web, es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.</p>
		<h3>Historia</h3>
		<p>La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992.</p>
		<p>Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica.</p>
		<p>Una frase famosa de Tim Berners-Lee es:</p>
		<blockquote><p>There is only one web.</p></blockquote>
		<p><strong>Fuente:</strong> <em>Wikipedia</em></p>
	</body>
</html>
```

</details>

## Ejercicio 205

A partir del texto proporcionado, crea una página web que tenga el mismo aspecto que la siguiente imagen:

![Solución 205](https://mp0373-lmsxi.vercel.app/assets/images/205-3f05d0559657eb990700312aae163f59.webp)

Requisitos:

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
Experiencia laboral
1975-1985: En el paro
1965-1975: Cazavillanos y demás chusma
1962-1965: Aprendiz de superhéroe
```

<details>
<summary>Ver solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<title>Curriculum Vitae de Bruce Wayne</title>
	</head>
	<body>
		<h1>Curriculum Vitae de Bruce Wayne</h1>
		<h2>Datos personales</h2>
		<ul>
			<li><strong>Nombre completo:</strong> Bruce Wayne</li>
			<li><strong>Fecha de nacimiento:</strong> 1/5/1939</li>
			<li><strong>Lugar de nacimiento:</strong> Gotham City</li>
		</ul>
		<h2>Formación académica</h2>
		<ul>
			<li>1956-1961: Universidad del Espantapájaros</li>
			<li>1952-1956: Instituto de Dos Caras</li>
			<li>1944-1952: Escuela Primaria del Joker</li>
		</ul>
		<h2>Experiencia laboral</h2>
		<ul>
			<li>1975-1985: En el paro</li>
			<li>1965-1975: Cazavillanos y demás chusma</li>
			<li>1962-1965: Aprendiz de superhéroe</li>
		</ul>
	</body>
</html>
```

</details>
