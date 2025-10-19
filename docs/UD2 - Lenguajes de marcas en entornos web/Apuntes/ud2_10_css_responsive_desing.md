# CSS Responsive Design (Diseño Responsivo)

## Introducción al Diseño Responsivo

El diseño web responsive o adaptativo es una técnica de diseño web que busca la correcta visualización de una misma página en distintos dispositivos, desde ordenadores de escritorio a tablets y móviles.

![Responsive Design](/img/linguaxes-marcas/ud2/img/responsive-design.png)
../../../static/img/linguaxes-marcas/ud2/img/responsive-design.png
El diseño responsive trata de redimensionar y colocar los elementos de un documento HTML de forma que se adapten al ancho de cada dispositivo, permitiendo una correcta visualización y una mejor experiencia de usuario.

Se caracteriza porque los layouts (contenidos) e imágenes son fluidos y se usa la característica [media-queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) de CSS3.

## Viewport

El [viewport](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design#the_viewport_meta_tag) permite configurar los navegadores correctamente para el empleo de media queries.

En la cabecera del documento HTML, se debe añadir la siguiente línea:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Responsive design</title>
  </head>
  <body>
    <h1>Responsive design</h1>
  </body>
</html>
```

Esta etiqueta existe porque, cuando se lanzó el iPhone original y las personas comenzaron a ver sitios web en una pequeña pantalla de teléfono, la mayoría de los sitios no estaban optimizados para dispositivos móviles. Por lo tanto, el navegador móvil establecería el ancho de la ventana gráfica en 980 píxeles. Al tener esta configuración, la página se renderizaría con ese ancho y mostraría el resultado como una versión alejada del diseño del escritorio.

Otros navegadores móviles hicieron lo mismo. Los usuarios podían acercar y desplazarse por el sitio web para ver las partes que les interesaban, pero se veía mal. Esto se puede todavía ver si tenemos la desgracia de encontrarnos con un sitio que no tiene un diseño adaptativo.

## Media Queries

### Introducción

CSS Media Query ofrece una forma de aplicar CSS solo cuando el navegador y el entorno del dispositivo coinciden con una regla que se especifica.

**Por ejemplo:**

```css
/* Aplica el estilo a pantallas más anchas que 480 píxeles */
@media screen and (min-width: 480px) {
  div {
    color: red;
  }
}
```

Las media queries son una parte clave del diseño web responsivo, ya que le permiten crear diferentes diseños según el tamaño de la pantalla, pero también se pueden usar para detectar otras cosas sobre el entorno en el que se ejecuta su sitio como, por ejemplo, si el el usuario está usando una pantalla táctil en lugar de un ratón.

### Tipos de medios

Antes de introducirse con media queries, debemos ver los tipos de medios (media types) que soporta esta característica de CSS.

Cuando hablamos de medio, nos estamos refiriendo al soporte donde mostramos nuestro diseño.

Es posible aplicar estilos a un medio determinado utilizando `@media`. Por ejemplo:

```css
@media screen {
  div {
    width: 100%;
  }
}
```

Los posibles medios que se pueden especificar son los siguientes:

- `screen`: monitores y pantallas.
- `print`: medio impreso (papel o PDF).
- `all`: monitores y medios impresos.

**Por ejemplo**, si solo queremos aplicar un estilo al medio impreso:

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

El valor `all` es equivalente a no utilizar nada. Es decir, los dos bloques siguientes son equivalentes:

```css
@media all {
  body {
    font-size: 12pt;
  }
}

body {
  font-size: 12pt;
}
```

### Ancho (Width)

Es de las opciones más utilizadas. Para crear diseños que se adapten a las diferentes pantallas, debemos crear estilos diferentes para cada tamaño de pantalla. Como es muy laborioso crear un estilo para cada ancho concreto, se trabaja con rangos. Es decir, por ejemplo, se aplica un estilo determinado para pantallas de hasta 480 píxeles, otro diferente para pantallas desde 481 hasta 768 píxeles, etc. A estos tamaños concretos donde cambiamos de un estilo a otro se denominan puntos de rotura (breakpoints).

:::note[TERMINOLOGÍA]
En responsive design, cuando hablamos de **«tamaño de pantalla»** realmente estamos hablando del **tamaño del navegador**, ya que un navegador web en un ordenador se puede redimensionar y no tiene por qué coincidir con el tamaño del monitor.
:::

![Media Queries Sizes](/img/linguaxes-marcas/ud2/img/media-querie-sizes.png)

Es por ello, que se va a trabajar con tres opciones:

- `width`
- `min-width`
- `max-width`

**Por ejemplo**, si queremos aplicar un estilo para pantallas de hasta 480 píxeles y otro diferente para pantallas mayores a 480 píxeles:

```css
@media screen and (max-width: 480px) {
  body {
    color: blue;
  }
}

@media screen and (min-width: 481px) {
  body {
    color: blue;
  }
}
```

Las reglas anteriores tienen el siguiente comportamiento:

- `max-width`: se aplican las reglas cuando el tamaño es igual o menor que el indicado.
- `min-width`: se aplican las reglas cuando el tamaño es igual o mayor que el indicado.
- `width`: se aplican las reglas cuando el tamaño es igual que el indicado. Muy poco usado porque los estilos se aplican solo para el tamaño fijado.

**Por ejemplo:**

```css
@media screen and (width: 600px) {
  body {
    color: blue;
  }
}
```

El estilo anterior se aplicaría solo cuando la ventana del navegador tiene un ancho de 600 píxeles. Esto, traducido a la práctica, es que prácticamente nunca se va a utilizar esa regla, ya que es muy raro que el navegador tenga justo 600 píxeles de ancho.

### Orientación

Podemos aplicar estilos diferentes cuando el dispositivo está orientado de una forma u otra con el atributo [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation). Esto es aplicable a dispositivos móviles, los cuales se pueden tener en orientación vertical u horizontal.

Por lo tanto, tenemos dos posibles valores:

- `portrait`: el alto es mayor o igual que el ancho.
- `landscape`: el ancho es mayor que el alto.

**Por ejemplo**, si queremos aplicar un estilo cuando el dispositivo está en horizontal, utilizaríamos el siguiente código:

```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```