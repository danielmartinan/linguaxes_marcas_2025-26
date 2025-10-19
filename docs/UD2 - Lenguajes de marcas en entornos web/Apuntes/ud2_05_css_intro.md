# Introducción a CSS

## Introducción

[**CSS**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS) (Cascading Style Sheets) permite a los desarrolladores web **maquetar una web**, es decir, controlar el estilo y el formato.

Las hojas de estilos aparecieron poco después que el lenguaje de etiquetas SGML, alrededor del año 1970. Desde la creación de SGML, se observó la necesidad de definir un mecanismo que permitiera aplicar estilos a los documentos electrónicos. La guerra de navegadores y la falta de un estándar para la definición de los estilos dificultaban la creación de documentos que tuvieran igual apariencia en distintos navegadores.

Antes del uso de CSS, los diseñadores de páginas web debían definir el aspecto de cada elemento dentro de las etiquetas HTML de la página. El principal problema de esta forma de definir el aspecto de los elementos es que hay que definir el formato de cada uno de los elementos que formen la página, lo cual hace que sea muy difícil de actualizar.

CSS permite **separar** los **contenidos** de la página y su **aspecto**. Para ello, se define en una zona reservada el formato de cada uno de los elementos de la web. Cualquier cambio en el estilo marcado para un elemento en la hoja de estilos CSS afectará a todas las páginas vinculadas a ella en las que aparezca ese elemento. Las hojas de estilo están compuestas por una o más reglas de estilo aplicadas a un documento HTML o XML.

Al crear una página web, se utiliza en primer lugar el lenguaje HTML/XHTML para marcar los contenidos, es decir, para designar la función de cada elemento dentro de la página: párrafo, cabecera, texto destacado, etc. Una vez creados los contenidos, se utiliza el lenguaje CSS para definir el formato de cada elemento.

Entre las ventajas de CSS están:

- Obliga a crear documentos semánticos HTML/XHTML.
- Mejora la accesibilidad del documento
- Reduce la complejidad de su mantenimiento
- Permite visualizar el mismo documento en infinidad de dispositivos diferentes.

## Versiones

En 1995, el W3C añadió a su grupo de trabajo de HTML el desarrollo y estandarización de CSS.

- CSS 1: Se publicó en 1996, es la primera recomendación oficial.
- CSS 2: Publicada en 1998, es la segunda recomendación oficial.
- CSS 3: Empezó a desarrollarse en 1998, sus primeros borradores se publicaron en junio de 1999. A diferencia de las versiones anteriores, la **especificación** se divide en varios documentos separados llamados módulos. Esto permite que diferentes módulos se encuentren en diferentes estados de desarrollo y no todos pasen a ser recomendaciones oficiales del W3C. Un módulo debe primero pasar por la fase de «recomendación candidata» (Candidate Recommendation) antes de ser aprobado.
- CSS 4: Última versión sobre la que no existe una especificación integrada, ya que al igual que CSS 3 se encuentra dividido en diferentes módulos. A partir de la división en módulos que se hizo en CSS 3, la evolución de cada uno de ellos es independiente lo que provoca que actualmente la mayoría de módulos estén es especificación de nivel 3, mientras que otros (por ejemplo, selectores) se encuentre en nivel 4.

La web del W3C recoge el [soporte](https://www.w3schools.com/cssref/css3_browsersupport.php) que cada uno de los navegadores tienen sobre las etiquetas CSS.

![soporte css](/img/linguaxes-marcas/ud2/img/soporte_css.png)

## Cómo aplicar estilos CSS

Existen tres formas de incluir CSS en un documento HTML/XHTML:

- Declaración en línea: se declara el estilo en la misma línea en que se va a aplicar. Esta opción está desaconsejada.
- Declaración interna: se declaran los estilos a emplear en la página, en el encabezado de dicha página, mediante la etiqueta `<style>`.
- Declaración externa: se declara la hoja de estilo que se va a emplear en la página mediante la etiqueta `<link>`. Esta etiqueta se declara dentro de `<head>`. Es la opción más recomendada.

### Declaración en línea

Dentro de la propia etiqueta HTML mediante el atributo `style`.

Este modo **debe evitarse** para preservar el principio de separación de contenidos y formato.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS</title>
  </head>
  <body>
    <p style="color: red;">Texto en color rojo.</p>
  </body>
</html>
```

### Declaración interna

En el encabezado del documento dentro del elemento `<style>` incluido en `<head>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS</title>
    <style type="text/css">
      p {
        color: green;
      }
    </style>
  </head>
  <body>
    <p>Texto en color verde</p>
  </body>
</html>
```

Dentro de la etiqueta `<style>` se declarará el código CSS.

En el ejemplo, el texto de los elementos `<p>` se mostrará en verde.

### Declaración en archivo externo

En el encabezado, mediante la etiqueta `<link>` dentro del elemento `<head>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="estilos.css" />
    <title>CSS</title>
  </head>
  <body>
    <h1>Título en azul</h1>
  </body>
</html>
```

El atributo `href` apuntará a la ruta del fichero CSS, el cual tendrá extensión `.css`.

El contenido del fichero CSS **será únicamente código CSS** y no tendrá ningunha etiqueta HTML. Por ejemplo, el contenido de un archivo CSS puede ser el siguiente:

```css
h1 {
    color: blue;
}
```

Otra forma de usar hojas de estilo externas es mediante la etiqueta @import. **Es una directiva CSS**, no HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS</title>
    <style type="text/css">
      @import url("formato.css");
    </style>
  </head>
  <body>
    <p>Texto en verde.</p>
  </body>
</html>
```

Supongamos que el contenido del fichero formato.css es el siguiente:

```css
p {
    color: green;
}
```

De esta manera, el texto de los elementos `<p>` se mostrará en verde.

:::warning[**RUTAS DE LOS FICHEROS**]
Si el fichero está en el mismo directorio que el documento HTML, solo habrá que indica el nombre del fichero CSS:

```css
@import url("formato.css");
```

Si está dentro de un directorio, debemos indicar la ruta relativa. Por ejemplo:

```css
@import url("./directorio/formato.css");
```

:::

### Elemento `<span>`

Este elemento se utiliza habitualmente para dar estilo a texto no marcado.

```html
<p>Parte de este párrafo <span style="color:red">está en rojo</span></p>
```
