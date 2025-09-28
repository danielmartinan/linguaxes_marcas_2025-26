# Estructura de un documento HTML

La estructura de una página HTML debe seguir la misma que la de cualquier documento XML. Por ello, tendrá:

- Un prólogo.  
- Un ejemplar.

Un ejemplo completo de un documento HTML5 es el siguiente:

```html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8" />
   <title>Título del documento</title>
 </head>
 <body>
   <p>LMSXI</p>
 </body>
</html>
```

La primera línea se corresponde con el **prólogo**. El resto del código se corresponde con el **ejemplar**.

## Prólogo

Todo documento HTML ha de tener una declaración del tipo de documento para su correcta interpretación por el navegador web. En esa declaración se indica:

- El tipo de documento.  
- En veresiones antiguas de HTML, la versión de HTML utilizada para la codificación del mismo.

En el caso de **HTML5**, la declaración se define de la siguiente forma:

```html
<!DOCTYPE html>
```

:::info[**Soporte de navegadores**]  
En la gran mayoría de navegadores, aunque no se indique el `DOCTYPE`, la web se muestra igualmente.

## **HTML 4.0**

:::warning[**Versión en desuso**]

Aunque en la actualidad no se utiliza HTML 4.0, es posible que veamos algún documento HTML en una versión anterior a la 5 si la web es antigua.

:::

Para la versión HTML 4.0, existen **tres prólogos distintos** que definen tres tipos de documentos HTML:

- HTML 4.0 Strict  
- HTML 4.0 Transitional  
- HTML 4.0 Frameset

### HTML 4.0 Strict

Es la DTD (Document Type Definition) utilizada **por defecto** con HTML 4.0. En estos documentos, no se permite el uso de los elementos declarados *deprecated* en otras versiones o recomendaciones HTML.

La declaración del tipo de documento correspondiente es:

*`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`*

:::info[**Deprecated**]

El término [*deprecated*](https://en.wikipedia.org/wiki/Deprecation) hace referencia al desaconsejo del uso de terminología, características, diseños o prácticas. Si algún elemento está declarado como *deprecated* es que se tiene prevista su eliminación en próximas versiones y se desaconseja su uso por incompatibilidades con futuras versiones.

### HTML 4.0 Transitional

Permite el uso de todos los elementos que permite el HTML 4.0 Strict, además de los elementos *deprecated*.

La declaración del tipo de documento correspondiente es:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

### **HTML 4.0 Frameset**

Es una variante de HTML 4.0 Transitional para documentos que usan [frames](https://en.wikipedia.org/wiki/Frame_\(World_Wide_Web\)). En estos documentos el elemento `body` hay que reemplazarlo por un elemento `frameset`.

La declaración del tipo de documento correspondiente es:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

## Ejemplar

El ejemplar está delimitado por el elemento [`<html>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/html), el cual define el inicio y el final de un **documento HTML**.

Las etiquetas de apertura y cierre son las siguientes:

`<html></html>`

Un documento HTML puede dividirse, a su vez, en dos partes:

- Cabecera: Define la información general del documento, como su título y la codificación de caracteres. 
- Cuerpo: Contiene el contenido principal del documento, como texto, imágenes y otros elementos multimedia.

```html
<!DOCTYPE html>
<html>
 <head> 
   <meta charset="utf-8" />
   <title>Título del documento</title>
 </head>
 <body>
   <p>LMSXI</p>
 </body>
</html>
```

Los elementos que definen la **estructura básica** de un documento son:

- `<html>`  
- `<head>`  
- `<body>`

### Cabecera

El elemento [`<head>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/head) define la **cabecera** de un documento HTML.

Las etiquetas de apertura y cierre son las siguientes:

```html
 <head></head>
```

Contiene la información sobre el **título** de la página, el **autor**, palabras clave, etc. La información de la cabecera **no se presentará en la ventana del navegador**, salvo el título, que aparecerá en la barra de título de la parte superior. El resto de cabeceras, habitualmente se utilizan para dar información a buscadores, redes sociales, etc.

Dentro de esta sección es **obligatorio** definir el **título del documento**. Para ello se usan las etiquetas `<title></title>`.

Es muy común, también, incluir el *charset* utilizado para la codificación. Generalmente, se utiliza `utf-8`.

:::info[**Ejemplo de cabecera**]

Ejemplo de una cabecera HTML con varios elementos:

```html
<head>
  <meta charset="utf-8">
  <title>HTML document</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">  
  
  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content=""> 
  
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="icon.png"> 
  
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">  
  <link rel="manifest" href="site.webmanifest">
  <meta name="theme-color" content="#fafafa">

</head>
```

Los elementos que pueden ir dentro del elemento `<head>` se clasifican en dos tipos:

- Elementos contenedores: contienen texto y/u otras etiquetas.  
- Elementos no contenedores: son etiquetas vacías, sin contenido.

#### Elementos contenedores

| Elemento | Descripción |
| :---- | :---- |
| [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) | Título del documento. Elemento **obligatorio**. |
| [`script`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Script incrustado. Su contenido ha de ir situado entre las marcas de comentarios ya que no ha de ser interpretado. |
| [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) | Estilo aplicado al documento utilizando CSS. Su contenido ha de ir situado entre las marcas de comentarios ya que no ha de ser interpretado. |

#### Elementos no contenedores

| Elemento | Descripción |
| :---- | :---- |
| [`base`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) | URI base del documento. |
| [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) | Enlaces a documentos externos de librerías (JavaScript). Este elemento también puede ir dentro del `<body>`. |
| [`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) | Metadatos sobre la página, como la codificación de caracteres, descripción o autores. |

#### Ejemplo

A continuación, un ejemplo completo que muestra el uso de todos los elementos mencionados:

```html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8" />
   <title>El título es obligatorio</title>
   <base href="https://codesandbox.io/" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" />
   <style>
     .rojo {
       color: red;
     }
   </style>
   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
 </head>
 <body>
   <div class="rojo">Texto de color rojo</div>
 </body>
</html>
```

:::warning[**Acentos y caracteres especiales**]

Para la correcta visualiazación de acentos y caracteres especiales como la `ñ`, debemos añadir la siguiente línea para utilizar la **codificación de caracteres UTF-8**:

```html
<meta charset="utf-8" />
```

:::
