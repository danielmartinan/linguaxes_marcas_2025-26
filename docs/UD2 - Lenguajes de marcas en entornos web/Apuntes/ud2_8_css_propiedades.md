# Propiedades CSS

En esta sección se van a describir algunas de las propiedades CSS más comunes. La lista no es exhaustiva, ya que existen muchas más propiedades que se pueden utilizar para dar formato a los documentos HTML. Se recomienda consultar la documentación oficial de CSS en [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/CSS/Reference) para obtener una lista completa de las propiedades y sus descripciones.

Vamos a agrupar las propiedades según su funcionalidad:

- Propiedades de texto
- Propiedades de color y fondo
- Propiedades de fuente
- Propiedades de lista
- Propiedades *display* y *position*
- Propiedades de caja (*box model*)

## Propiedades de color y fondo

En este apartado se revisarán las [propiedades de color](https://www.w3schools.com/colors/default.asp) y fondo.

### `color`

La propiedad [color](https://developer.mozilla.org/es/docs/Web/CSS/color) define el color del texto. Lo admiten casi todas las etiquetas de HTML.

El valor de este atributo es:

- El nombre de un color.
- El valor RGB (hexadecimal) de un color.

```css
h1 {
    color: blue;
}

h1 {
    color: #2d98da;
}
```

:::note[VALOR RGB]
Las herramientas de diseño, por lo general, incluyen una utilidad de selección de color, de donde se puede extraer el código hexadecimal correspondiente a un color. Este tipo de utilidad se denomina [color picker](https://colorpicker.me/).
:::

![Color picker](/img/linguaxes-marcas/ud2/img/color-picker.png)

### `background-color`

Indica el color de fondo del elemento. El valor de este atributo es un color.

El valor de este atributo es:

- El nombre de un color.
- El valor RGB (hexadecimal) de un color.

```css
div {
    color: blue;
}

div {
    background-color: #2d98da;
}
```

### `background-image`

Permite colocar una imagen de fondo del elemento.

El valor que toma es el nombre de la imagen con su ruta relativa o absoluta.

### `background-repeat`

Indica si ha de repetirse la imagen de fondo y, en ese caso, si debe ser horizontal o verticalmente.

Los valores que puede tomar son:

- `repeat-x`
- `repeat-y`  
- `no-repeat`

### `background-attachment`

Especifica si la imagen ha de permanecer fija o realizar un scroll.

Los valores que pueden tomar son:

- `scroll`
- `fixed`

### `background-position`

Es una medida, porcentaje o el posicionamiento (vertical u horizontal) con los valores establecidos que sirve para posicionar una imagen.

Los valores que puede tomar son:

- Un porcentaje.
- Un tamaño.
- Los valores:
    - `top`, `center`, `bottom`
    - `left`, `center`, `right`

```css
div {
    background-position: top right;
}
```

### `background`

Establece (en un solo paso) cualquiera de las propiedades de background anteriores.

Los valores que puede tomar son:

- `background-color`
- `background-image`
- `background-repeat`
- `background-attachment`
- `background-position`

Dado que no todos los nombres de colores son admitidos en el estándar, es aconsejable utilizar el valor RGB.

Un ejemplo de un documento XHTML en el que se utiliza este método para incluir formatos es:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo de atributos CSS de color y fondo</title>
    <style type="text/css">
      body {
        background-color: black;
        color: yellow;
      }
      p {
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <h3>Ejemplo del uso de atributos de color y fondo</h3>
    <p>
      El texto de cualquier elemento, salvo el del párrafo que es blanco, es
      amarillo y el fondo negro.
    </p>
  </body>
</html>
```

En el navegador se visualiza del siguiente modo:

![Ejemplo color y fondo](/img/linguaxes-marcas/ud2/img/ejemplo-color-fondo.webp)

:::note[PROBAR EN EL NAVEGADOR]
[Documento HTML](https://codesandbox.io/s/confident-volhard-v49inr?file=/index.html)
:::

## Propiedades de fuente

En este apartado vamos a ver las distintas propiedades que podemos utilizar referentes a las fuentes tipográficas de nuestro documento.

### `font-size`

Indica el tamaño de la fuente.

Puede ser un tamaño absoluto, relativo o en porcentaje.

Toma valores de unidades de CSS.

```css
p {
    font-size: 16px;
}
```

### `font-family`

Establece la familia a la que pertenece la fuente.

Si el nombre de una fuente contiene espacios, se deben utilizar comillas para encerrar su nombre.

El valor es el nombre de la familia fuente.

### `font-weight`

Define el grosor de los caracteres.

Los valores que puede tomar son: `normal`, `bold`, `bolder`, `lighter`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800` o `900`.

```css
p {
    font-weight: bold;
}
```

### `font-style`

Determina si la fuente es normal o cursiva.

Los valores posibles son:

- `normal`
- `italic`
- `oblique`

El estilo `oblique` es similar al cursiva.

```css
p {
    font-style: italic;
}
```

### `font-variant`

Determina si la fuente es normal o mayúsculas pequeñas.

Los valores que puede tomar son:

- `normal`
- `small-caps`

### `line-height`

El alto de una línea y por tanto, el espaciado entre líneas.

Es una de esas características que no se podían modificar utilizando HTML.

### `font`

Permite establecer todas las propiedades anteriores en el orden que se indica a continuación:

- `font-style`
- `font-variant`
- `font-weight`
- `font-size`
- `line-height`
- `font family`

Los valores han de estar separados por espacios. No es obligatorio el uso de todos los valores.

```css
p {
    font: italic normal bold 20px 1em Verdana;
}
```

Un ejemplo de un documento XHTML en el que se utiliza este método para incluir formatos es:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo de atributos CSS de fuente</title>
    <style type="text/css">
      body {
        background-color: black;
        color: yellow;
        font-family: courier;
      }
      p {
        color: #ffffff;
        font: italic 900 12px Verdana;
      }
    </style>
  </head>
  <body>
    <h3>Ejemplo del uso de atributos de fuente</h3>
    <p>
      El texto de cualquier elemento es de la familia Courier y amarillo, salvo
      el del párrafo que es Verdana, blanco y de tamaño 12 px.
    </p>
  </body>
</html>
```

En el navegador se visualiza del siguiente modo:

![Ejemplo fuente](/img/linguaxes-marcas/ud2/img/ejemplo-fuente.webp)

:::note[PROBAR EN EL NAVEGADOR]
[Documento HTML](https://codesandbox.io/s/agitated-dream-nwsfyz?file=/index.html)
:::

## Propiedades de texto

En este apartado se centra en las propiedades relacionadas con el texto.

:::warning[TEXTO Y FUENTE TIPOGRÁFICA]
No confundir la fuente tipográfica con el texto: un mismo texto puede mostrarse utilizando diferentes fuentes tipográficas, pero el texto sigue siendo el mismo en cualquier de los casos.
:::

### `text-decoration`

Establece si el texto está subrayado, sobrerayado o tachado.

Los valores que puede tomar son:

- `none`
- `underline`
- `overline`
- `line-through`

### `text-align`

Indica la alineación del texto. Aunque las hojas de estilo permiten el justificado de texto, no funciona en todos los sistemas.

Los valores que puede tomar son:

- `left`
- `right`
- `center`
- `justify`

### `text-indent`

Determina la tabulación del texto.

Los valores que puede tomar son:

- Una longitud (en unidades CSS).
- Un porcentaje.

### `text-transform`

Nos permite transformar el texto, haciendo que tenga la primera letra en mayúsculas de todas las palabras, todo en mayúsculas o minúsculas.

Los valores que puede tomar son:

- `capitalize`
- `uppercase`
- `lowercase`
- `none`

### `word-spacing`

Determina el espaciado entre las palabras.

Los valores que puede tomar es un tamaño.

### `letter-spacing`

Determina el espaciado entre letras. Los valores que puede tomar es un tamaño.

### `vertical-align`

Establece la alineación vertical del texto. Sus valores posibles son:

- `baseline`
- `sub`
- `super`
- `top`
- `text-top`
- `middle`
- `bottom`
- `text-bottom`
- Un porcentaje

### `line-height` (texto)

Altura de la línea.

Puede establecerse mediante un tamaño o un porcentaje

Un ejemplo de un documento XHTML en el que se utiliza este método para incluir formatos es:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo de atributos CSS de texto</title>
    <style type="text/css">
      h3 {
        text-decoration: underline;
        text-align: center;
        text-transform: capitalize;
      }
      p {
        text-indent: 50%;
      }
    </style>
  </head>
  <body>
    <h3>Ejemplo del uso de atributos de texto</h3>
    <p>
      El texto de del encabezado de tercer nivel está subrayado,
      centrado y la primera letra de cada palabra es mayúscula.
    </p>
    <p>El párrafo está tabulado</p>
  </body>
</html>
```

El aspecto en el navegador es el siguiente:

![Ejemplo texto](/img/linguaxes-marcas/ud2/img/ejemplo-texto.webp)

:::note[PROBAR EN EL NAVEGADOR]
[Documento HTML](https://codesandbox.io/s/bitter-voice-0mz5i1?file=/index.html)
:::

## Propiedades de lista

Hay cuatro propiedades de estilo para listas.

### `list-style-type`

Indica cual es el símbolo que se utiliza como marcador en las listas.

Valores que puede tomar son:

- `disc`
- `circle`
- `square`
- `decimal`
- `lower-roman`
- `upper-roman`
- `lower-alpha`
- `upper-alpha`
- `none`

### `list-style-image`

Permite utilizar el uso de una imagen como marcador en una lista.

El valor que toma es la ruta (relativa, absoluta o URL) del fichero imagen.

### `list-style-position`

Determinan la posición del marcador en una lista.

Puede tomar los valores:

- `outside`
- `inside`.

### `list-style`

Permite establecer de una única vez todas las características de una lista. Hay que seguir el orden siguiente:

- `list-style-type`
- `list-style-position`
- `list-style-image`

A continuación, se muestra un ejemplo completo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Estilo para listas</title>
    <style>
      #flecha {
        list-style-image: url("flecha.png");
      }
      .circ {
        list-style-type: circle;
      }
      #armenio {
        list-style-type: armenian;
      }
    </style>
  </head>
  <body>
    <p>Lista con imagen</p>
    <ul id="flecha">
      <li>Patatas</li>
      <li>Peras</li>
    </ul>
    <p>Lista con círculo</p>
    <ul class="circ">
      <li>Patatas</li>
      <li>Peras</li>
    </ul>
    <p>Alfabeto armenio</p>
    <ol id="armenio" reversed>
      <li>Peras</li>
      <li>Manzanas</li>
    </ol>
  </body>
</html>
```

En el navegador se visualiza del siguiente modo:

![Ejemplo listas](/img/linguaxes-marcas/ud2/img/ejemplo-listas.webp)

:::note[PROBAR EN EL NAVEGADOR]
[Documento HTML](https://codesandbox.io/s/priceless-pond-hsiymg?file=/index.html)
:::

## Propiedades *display* y *position*

### Propiedad `display`

La propiedad [`display`](https://developer.mozilla.org/es/docs/Web/CSS/display) se puede usar para:

- Hacer que un elemento sea de bloque (block) o de línea (inline).
- Ocultarlo o hacerlo visible. Esta característica se utiliza habitualmente a través de JavaScript con webs interactiva.

Por ejemplo, hay varios vínculos, que son elementos de línea. Pero hay una regla CSS que hace que los que tienen clase "especial" sean de bloque.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo de atributos CSS de fuente</title>
    <style>
      .especial {
        display: block;
      }
      .oculto {
        display: none;
      }
    </style>
  </head>
  <body>
    <a href="#">Primer vínculo (normal)</a>
    <a href="#">Segundo vínculo (normal)</a>
    <a href="#" class="especial">Tercer vínculo (especial)</a>
    <a href="#" class="especial">Cuarto vínculo (especial)</a>
    <a href="#" class="oculto">Quinto vínculo (oculto)</a>
  </body>
</html>
```

En el navegador se mostraría de la siguiente manera:

![Ejemplo display](/img/linguaxes-marcas/ud2/img/ejemplo-display.webp)

:::note[PROBAR EN EL NAVEGADOR]
[Documento HTML](https://codesandbox.io/s/jolly-feather-33f5ek?file=/index.html)
:::

### Propiedad `position`

La propiedad [`position`](https://developer.mozilla.org/es/docs/Web/CSS/position) permite posicionar un elemento en la página web.

Los valores que puede tomar son:

- `static`: es el valor por defecto. El elemento se posiciona según el flujo normal del documento.
- `relative`: el elemento se posiciona en relación a su posición original. Se pueden usar las propiedades `top`, `right`, `bottom` y `left` para ajustar su posición.
- `absolute`: el elemento se posiciona en relación a su contenedor más cercano que no tenga `position: static`. Si no hay ningún contenedor con `position` distinto de `static`, se posiciona en relación al elemento `<html>`.
- `fixed`: el elemento se posiciona en relación a la ventana del navegador y no se mueve al hacer scroll.
- `sticky`: el elemento se posiciona según el flujo normal del documento, pero se "pega" a una posición específica cuando se desplaza la página.

Un ejemplo de uso de la propiedad `position` es el siguiente:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Ejemplo de atributos CSS de posición</title>
        <style>
        #caja1 {
            position: relative;
            top: 20px;
            left: 30px;
            width: 100px;
            height: 100px;
            background-color: lightblue;
        }
        #caja2 {
            position: absolute;
            top: 50px;
            left: 150px;
            width: 100px;
            height: 100px;
            background-color: lightgreen;
        }
        #caja3 {
            position: fixed;
            top: 10px;
            right: 10px;
            width: 100px;
            height: 100px;
            background-color: lightcoral;
        }
        </style>
    </head>
    <body>
        <div id="caja1">Caja Relativa</div>
        <div id="caja2">Caja Absoluta</div>
        <div id="caja3">Caja Fija</div>
        <p>Desplázate hacia abajo para ver el efecto de la caja fija.</p>
        <div style="height: 2000px;"></div>
    </body>
</html>
```

En el navegador se visualizaría de la siguiente manera:

![Ejemplo position](/img/linguaxes-marcas/ud2/img/ejemplo-position.webp)

Si hacemos scroll, la caja fija permanece en su posición:

![Ejemplo position](/img/linguaxes-marcas/ud2/img/ejemplo-position_2.webp)

### Propiedad `overflow`

La propiedad [overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) permite decidir al diseñador qué hacer con el contenido que se sale por fuera de los límites de un elemento.

Supongamos que tenemos una caja de 300 píxeles de ancho y 100 píxeles alto y que, al introducir un texto, nos queda de la siguiente forma:

![Overflow ejemplo](/img/linguaxes-marcas/ud2/img/overflow.webp)

Podemos observar que el texto se sale por fuera de la caja. Esto lo podemos resolver con la propiedad `overflow`.

Algunos posibles valores posibles son:

- `visible`: es el valor predeterminado. El contenido no se corta.
- `hidden`: oculta el contenido que se sale por fuera de los límites.
- `scroll`: cuando el contenido se excede de los límites, añade una barra de scroll para navegar a través del contenido.
