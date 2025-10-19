# Sintaxis de CSS

## Introducción

Cada uno de los estilos que componen una hoja de estilos CSS se denomina **regla**.

Cada regla se forma por:

- **Selector**: indica el elemento o elementos HTML a los que se aplica la regla CSS. Se pueden indicar varios separados por comas (`,`).
- **Llave de apertura**: `{`
- **Declaración**: especifica los estilos que se aplican a los elementos. Una declaración está formada por una propiedad y un valor separados por dos puntos (`:`) y debe finalizar en punto y coma (`;`).
  - **Propiedad**: permite modificar el aspecto de un atributo del elemento.
  - **Valor**: indica el nuevo valor del atributo modificado en el elemento.
- **Llave de cierre**: `}`

### Ejemplo

```css
p { 
    color: blue;
}
```

En este caso:

- El selector es `p` (párrafo)
- La declaración es `color: blue;`, donde:
  - La propiedad es `color`
  - El valor es `blue`

## Múltiples selectores y declaraciones

Un **archivo** CSS puede contener **infinitas reglas CSS**. Además:

- Cada declaración puede estar formada por diferentes declaraciones.
- Cada regla puede contener varios selectores.

Por ejemplo:

```css
html, body { 
    background-color: red;
    color: blue;
}
```

En este caso:

- Existen dos selectores: `html` y `body`.
- Existen dos declaraciones: `background-color: red;` y `color: blue;`

### Espacios en blanco

En las definiciones de ficheros CSS, los espacios en blanco y saltos de línea entre reglas y declaraciones no se tienen en cuenta.

Por ejemplo, los bloques de código mostrados a continuación serían equivalentes:

```css
p{color:red;}
```

```css
p { color: red; }
```

```css
p {
    color: red;
}
```

```css
p 
{
    color:     red;
}
```

En cualquier caso, la sintaxis recomendada es la que incluye espacios y saltos de línea para mejorar la legibilidad del código:

```css
p {
    color: red;
}
```

### Comentarios

Al igual que ocurría con los documentos HTML, en los ficheros CSS también existe la posibilidad de introducir comentarios:

```css
/* comentario */
```

También pueden ser mulitlínea:

```css
/* comentario
de
varias
líneas */
```

Los comentarios no son procesados por los navegadores. Solo sirven para documentar el código.

## Herencia de estilos

Las hojas de estilo permiten la **herencia de propiedades**, es decir, que elementos hijo hereden los estilos de elementos padre. Si tenemos varios elementos HTML anidados, los elementos más internos heredan los estilos de los externos en los que están anidados, siempre y cuando ellos no los tengan definidos.

Supongamos el siguiente ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS</title>
    <style type="text/css">
      div {
        color: red;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Título en rojo</h1>
      <p>Texto en color rojo.</p>
    </div>
    <h2>Título en color predeterminado</h2>
  </body>
</html>
```

El código CSS indica que el texto contenido en `<div>` debe ser de color rojo. A pesar de definirlo solo para `<div>`, el texto contenido en `<h1>` y `<p>` también será de color rojo, ya que hereda los estilos de `<div>` (los elementos `<h1>` y `<p>` son hijos de `<div>`). Sin embargo, el texto del elemento `<h2>` será de color negro (el color predeterminado para el texto), ya que no es hijo de `<div>`.

### Conflictos

En ocasiones y dependiendo de cómo se haya hecho la definición de estilos, es posible que el navegador se encuentre **estilos contradictorios**. Ante esta situación, el navegador aplicará la siguiente precedencia:

- Declaración en línea.
- Declaración interna.
- Declaración externa.
- Propiedades por defecto del navegador.

Supongamos el siguiente ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="estilos.css" />
    <title>CSS</title>
    <style type="text/css">
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1 style="color: blue;">Título</h1>
  </body>
</html>
```

El contenido del fichero `estilos.css` es el siguiente:

```css
h1 {
  color: green;
}
```

Podemos observar que se está definiendo el color de `<h1>` en tres lugares y, en los tres lugares, se está definiendo un estilo diferente. Es decir, los estilos definidos entran en conflicto. En este caso, se aplica una prioridad:

- En el que acaba prevaleciendo es el que está definido en el atrbituo `style` del propio elemento HTML. Es decir, **el título se verá en azul**.
- Si no hubiese el atributo `style`, el que se tendría en cuenta sería el que está definido en la etiqueta `<style>`. Es decir, el título se vería en rojo.
- Si ninguno de los dos anteriores estuviesen definidos, se tendría en cuenta los estilos del fichero `estilos.css` definido en el elemento `<link>`. Es decir, el título se vería en verde.
- Si no se aplican estilos de ningún tipo, el texto se vería de color negro, ya que éste sería el color por defecto para el texto de títulos.
