# Elementos HTML

Un elemento HTML está formado por:

* Una etiqueta de apertura.  
* Cero o más atributos.  
* Opcionalmente, un texto, encerrado entre las etiquetas de apertura y cierre. No todas las etiquetas pueden encerrar texto.  
* Una etiqueta de cierre. Para algunos elementos no hay etiqueta de cierre o es opcional.

Según el modo en que ocupan el espacio disponible en la página, los elementos pueden ser de dos tipos:

* Elementos en línea (*inline*) o lineales. Solo ocupan el espacio necesario para mostrar sus contenidos. Su contenido puede ser texto u otros elementos *inline*.  
* Elementos de bloque (*block*). Los elementos de bloque siempre empiezan en una nueva línea y ocupan todo el espacio disponible hasta el final de la línea, aunque sus contenidos no ocupen todo el ancho. Su contenido puede ser texto, elementos *inline* u otros elementos de bloque.

## **Ejemplo[​](https://mp0373-lmsxi.vercel.app/docs/unidades/02/contenidos/html/elementos/introduccion#ejemplo)**

El siguiente ejemplo muestra la diferencia entre ambos comportamientos:  

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>
      Ejemplo de la diferencia entre los elementos inline y los elementos block
    </title>
  </head>
  <body>
    <h1>Los encabezados son elementos block.</h1>
    <p>Y los párrafos también.</p>
    <a href="#">Los enlaces son elementos inline</a>
    <p>
      Incluso si esta definido dentro de un párrafo,
      <strong>un texto resaltado</strong> sigue siendo un elemento inline.
    </p>
  </body>
</html>
```

Un navegador web lo mostraría así:

![ejemplo](/static/img/linguaxes-marcas/ud2/img/ejemplo_html.png)

Prúebalo en el navegador pulsando [aquí](pathname:///img/linguaxes-marcas/ud2/htmls/ud2_4_1.html)

## Secciones

### Elemento `<div>`

El elemento [`<div>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/div) se usa para marcar divisiones y agrupar otros elementos en secciones, tanto para organizar el contenido como para posicionarlo mediante hojas de estilo CSS.  

```html
<div>  
 <div>Sección 1</div>  
 <div>Sección 2</div>  
<div>
```

### Etiquetas semánticas

En HTML5 aparecieron varias [etiquetas semánticas](https://es.wikipedia.org/wiki/HTML_sem%C3%A1ntico) para estructurar el contenido de la página y, por tanto, solo se debería usar `<div>` cuando **no haya una etiqueta más apropiada**.

Un ejemplo utilizando etiquetas semánticas:  

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5</title>
  </head>
  <body>
    <header>
      <nav></nav>
    </header>
    <main>
      <section>
        <article></article>
      </section>
      <aside></aside>
    </main>
    <footer></footer>
  </body>
</html>
```

La siguiente imagen muestra una disposición posible para estos elementos. Pero ojo, porque para obtenerla, hay que usar CSS.

![estructura_html5](/img/linguaxes-marcas/ud2/img/estructura_html5.png)

### Elemento `<header>`

El elemento [`<header>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/header) contiene la cabecera con contenido introductorio para la sección de la página en que aparece.

Representa un grupo de ayudas introductorias o de navegación. Puede contener algunos elementos de encabezado, así como también un logo, un formulario de búsqueda, un nombre de autor y otros componentes.

Es habitual que contenga los elementos de encabezado (`<h1>` ... `<h6>`).

### Elemento `<aside>`

El elemento [`<aside>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/aside) se utiliza para contenido parcialmente relacionado con el contenido principal.

Estas secciones son a menudo representadas como **barras laterales** o como inserciones y contienen una explicación al margen como una definición de glosario, elementos relacionados indirectamente, como publicidad, la biografía del autor, o en aplicaciones web, la información de perfil o enlaces a blogs relacionados.

**No tiene por qué mostrarse en un lateral.**

### Elemento `<footer>`

El elemento [`<footer>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/footer) representa un pie de página para el contenido de sección más cercano o el elemento raíz de sección.

Un pie de página típicamente contiene información acerca del autor de la sección, datos de derechos de autor o enlaces a documentos relacionados.

**No tiene por qué mostrarse al final.**

### Elemento `<section>`

El elemento de HTML [`<section>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/section) representa una sección genérica de un documento. Sirve para determinar qué contenido corresponde a qué parte de un esquema.

Pensemos en el esquema como en el índice de contenido de un libro: un tema común y subsecciones relacionadas. No se debe usar el elemento `<section>` como un mero contenedor genérico. Para esto, ya existe `<div>`, especialmente si el objetivo solamente es aplicar un estilo CSS a la sección.

### Elemento `<article>`

El Elemento article de HTML [`<article>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/article) representa una composición autocontenida en un documento, página, una aplicación o en el sitio, que se destina a distribuir de forma independiente o reutilizable, por ejemplo, en la indicación.

Podría ser un mensaje en un foro, un artículo de una revista o un periódico, una entrada de blog, un comentario de un usuario, un widget interactivo o gadget, o cualquier otro elemento independiente del contenido.

### Elemento `<nav>`

El elemento [`<nav>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/nav) representa una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otros documentos.

Ejemplos comunes de secciones de navegación son: menús, tablas de contenido e índices.

## Elementos tipo texto

### Encabezados y párrafos

Para agrupar el texto en párrafos se usa el elemento [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p). Es un elemento de bloque (*block*).  

```html
<p>Texto del párrafo</p>
```

Para los [encabezados](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), en HTML se definen 6 elementos (6 niveles):  
\<h1\>Encabezado de nivel 1\</h1\>  
\<h2\>Encabezado de nivel 2\</h2\>  
\<h3\>Encabezado de nivel 3\</h3\>  
\<h4\>Encabezado de nivel 4\</h4\>  
\<h5\>Encabezado de nivel 5\</h5\>  
\<h6\>Encabezado de nivel 6\</h6\>

Cuanto menor es el número, mayor es la importancia del encabezado. Es decir, el `<h1>` es el de mayor relevancia. El texto marcado debe servir como encabezado a la sección en la que aparece.

Los encabezados se pueden utilizar para organizar jerárquicamente el contenido de la página.

Un ejemplo en el cual se muestra el uso de los encabezados y párrafos:

```html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8">
   <title>Párrafos y encabezados</title>
 </head>
 <body>
   <h1>Ciclos formativos de la familia de IFC</h1>

   <h2>Ciclos medios (CM)</h2>

   <h3>SMR</h3>
   <p>Sistemas Microinformáticos y Redes es un ciclo formativo de grado medio.</p>
   <p>Incluye módulos como: Hardware, Software, Redes, etc.</p>

   <h2>Ciclos superiores (CS)</h2>

   <h3>ASIR</h3>
   <p>Administración de Sistemas Informáticos en Red es un ciclo formativo de grado superior.</p>

   <h3>DAM</h3>
   <p>Desarrollo de Aplicaciones Multiplataforma es un ciclo formativo de grado superior.</p>

   <h3>DAW</h3>
   <p>Desarrollo de Aplicaciones Web es un ciclo formativo de grado superior.</p>
 </body>
</html>
```

El navegador lo muestra de la siguiente manera:

![elementos tipo texto](/img/linguaxes-marcas/ud2/img/text_elements.png)

Pruébalo en el navegador pulsando [aquí](pathname:///img/linguaxes-marcas/ud2/htmls/ud2_4_2.html)

