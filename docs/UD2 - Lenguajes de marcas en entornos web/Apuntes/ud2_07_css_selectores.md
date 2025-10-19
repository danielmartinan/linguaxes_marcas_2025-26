# Selectores CSS

A la hora de aplicar estilos a nuestros elementos HTML necesitamos un mecanismo que permita identificar sobre cuál o cuáles de estos elementos queremos actuar. Para ello se utilizan los selectores, estos permiten identificar a qué elementos de nuestro código HTML vamos a aplicar el estilo definido. Existe diferentes selectores, a continuación veremos los más importantes.

## Selector universal

El selector universal (*) sirve para seleccionar todos los elementos de la página. Se aplican los estilos a todos los elementos.

```css  
* {
    margin: 10px;
    padding: 5px;
}
```

## Selectores de etiqueta

En este caso, los estilos se aplican solo a la etiqueta.

Por ejemplo, si queremos aplicar estilos a los párrafos (etiqueta `<p>`):

```css
p { 
    text-align: center;
}
```

En este ejemplo, los párrafos serán alineados al centro.

Si queremos ajustar los mismos estilos a dos etiquetas diferentes podemos ponerlos **separados por comas**.

```css
p, h1, h2 { 
    text-align: center;
}
```

En este ejemplo, tanto los párrafos como los encabezados de tipo 1 y 2 serán alineados al centro.

## Selectores de clase

En ocasiones, no vamos a querer aplicar el mismo formato en todas las etiquetas del mismo tipo. Para ello, podemos asignar a las etiquetas a una **clase** determinada. Esto requiere que identifiquemos las etiquetas afectadas mediante el atributo `class` de la siguiente manera:

```html
<p class="parrafoCentrado"></p>
```

El nombre de la clase es el que nosotros escojamos.

El selector se especificaría:

```css
p.parrafoCentrado {
    text-align: center;
}
```

De manera que este estilo se aplicaría a todas las etiquetas `<p>` que tengan el atributo class a valor `parrafoCentrado`.

Sin embargo, también podemos omitir el identificador de etiqueta (eliminar `<p>`):

```css
.parrafoCentrado { 
    text-align: center; 
}
```

De esta forma, se aplicaría a todas las etiquetas que perteneciesen a la clase `parrafoCentrado` sean del tipo que sean. Por ejemplo a una que fuese:

```html
<h1 class="parrafoCentrado">encabezado 1 centrado</h1>
```

Veamos a continuación un código de ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo CSS</title>
    <style type="text/css">
      .clase_azul {
        color: blue;
      }
      p.clase_roja {
        color: #ff0000;
        font-style: italic;
        font-weight: bolder;
        font-family: courier;
      }
    </style>
  </head>
  <body>
    <h3 class="clase_azul">Ejemplo del uso de clases en hojas de estilo</h3>
    <p>
      Cualquier elemento sobre el que apliquemos la clase clase_azul tendrá el
      texto azul.
    </p>
    <p class="clase_azul">Incluso el párrafo.</p>
    <p class="clase_roja">
      Sobre el párrafo podemos aplicar la clase clase_roja y el texto será rojo,
      en negrita cursiva y la familia del texto courier.
    </p>
    <h3 class="clase_roja">
      Pero este texto no aparecerá formateado ya que regla de la clase
      clase_roja solo actúa sobre párrafos.
    </h3>
  </body>
</html>
```

El resultado en el navegador sería:

![css selectores](/img/linguaxes-marcas/ud2/img/css_selectores.png)

## Selectores de ID

Permite seleccionar un elemento de la página por medio de su atributo `id`. El uso de este selector se suele asociar a elementos de estilo que se van a aplicar de manera `excepcional una única vez`. Por ello, `el valor del atributo id no debe repetirse` en dos elementos diferentes de la misma página.

Por ejemplo:

```html
<p id="unico"></p>
```

Se referencia mediante una de las siguientes posibilidades:

```css
#unico { 
    color: blue;
}
```

O bien:

```css
p#unico {
    color: blue;
} 
```

Es decir, se debe utilizar un **`#`** para hacer referencia a elementos que tengan definido un id.

## Selectores descendentes

Permite seleccionar **elementos que se encuentran dentro de otros elementos**. Por ejemplo:

```css
p h1 {
    color: red;
}
```

El estilo anterior se aplicará a todas las etiquetas `<h1>` que estén dentro de bloques `<p>`. Hay que tener en cuenta que el elemento `<h1>` no tiene por qué ser descendiente directo del elemento `<p>`. Es decir, puede estar anidado dentro de otros elementos que a su vez estén dentro del `<p>`. Por ejemplo:

```html
<p>
    <div>
        <h1>Título en rojo</h1>
    </div>
</p>
```

El nivel de anidación puede tener varios niveles. Por ejemplo:

```css
p a b i {
    text-decoration: underline;
}
```

Para que se aplique el estilo anterior se deben cumplir las siguientes situaciones:

- Debe haber un elemento `<i>` dentro de un `<b>`.
- Además, el elemento `<b>` debe estar dentro de un `<a>`.
- Y, para terminar, el elemento `<a>` debe estar dentro de un `<p>`.
- Dicho de otro modo, el estilo se aplica a los elementos `<i>`, dentro de etiquetas `<b>`, anidados dentro de `<a>` que se encuentren en `<p>`.

:::warning[**SELECTOR DESCENDENTE Y MÚLTIPLES ETIQUETAS**]

Es importante tener en cuenta que, si no tenemos cuidado, podemos confundir el selector descendente con la aplicación de un mismo estilo a distintas etiquetas.

Los dos bloques de código que se muestran a continuación, **no son equivalentes**:

```css
p a b i { color: blue; } 
```

```css
p,a,b,i { color: blue; }
```

El segundo bloque de código aplica el color azul a las etiquetas `<p>`, `<a>`, `<b>` e `<i>`, independientemente de su anidación.

:::

También **podemos combinar el selector universal con selectores descendentes**. Por ejemplo:

```css
p * b {
    color: #0000FF;
}
```

Este bloque aplica a todas las etiquetas de tipo `<b>` que estén anidadas en cualquier otra etiqueta que a su vez esté dentro de una etiqueta de tipo `<p>`.

Sin embargo, no se aplicará a las etiquetas de tipo `<b>` que estén dentro de una etiqueta de tipo `<p>` directamente. **Es necesario que haya otro elemento dentre `<p>` y `<b>`.**

## Selector hijo

El selector hijo (`>`) es similar al selector descentende con la diferencia de que el selector hijo solo afecta al **primer nivel de anidamiento**. Es decir, debe ser **descendiente directo**. Ejemplo:

```css
section > p { 
    color: red;
}
```

Supongamos el siguiente ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Selector hijo</title>
    <style>
      section > p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Párrafo incicial</p>
    <section>
      <p>Párrafo hijo de sección</p>
      <article>
        <p>Párrafo nieto de sección</p>
      </article>
    </section>
  </body>
</html>
```

El resultado sería el siguiente:

![selector hijo](/img/linguaxes-marcas/ud2/img/selector_hijo.png)

Vemos que solo se muestra en rojo aquel párrafo que está justo dentro de `<section>`. No aplica al `<p>` que está dentro de `<article>` porque no es descendiente directo de `<section>`.
