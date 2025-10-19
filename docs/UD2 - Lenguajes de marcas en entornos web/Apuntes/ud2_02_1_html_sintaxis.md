# Sintaxis de HTML

## Etiquetas y atributos

Un documento HTML está formado por **etiquetas** y **atributos**.

### Etiquetas

Las **etiquetas** permiten estructurar el contenido en un documento HTML.

:::note[Elementos o etiquetas]

Una etiqueta (*tag*) es el identificador de un elemento (*element*).

Suponiendo el siguiente código HTML:

```html
<div class="center">Texto</div>
```

El elemento sería `<div class="center">Texto</div>` y la etiqueta `<div>`.

:::

Al igual que en XML, las etiquetas pueden ser:

- De apertura: `<etiqueta>`  
- De cierre: `</etiqueta>`

También existen elementos vacíos:

`<input />`

Una de las diferencias con XML es que la **cantidad de etiquetas** de HTML está **limitada** a aquellas que están definidas por el lenguaje.

### Atributos

Aunque HTML define una gran cantidad de etiquetas, éstas no son suficientes para crear páginas complejas, ya que la definición completa de ciertos elementos, como las imágenes y los enlaces, requiere información adicional. Como no es posible crear una etiqueta por cada elemento diferente, se añade la información adicional a las etiquetas mediante los **atributos**.

Para cada uno de los **atributos** hay definido un **conjunto de valores** que se le puede asignar. Si el valor de un atributo no es válido, el navegador lo ignora.

Cada una de las etiquetas HTML define los atributos que puede utilizar, aunque algunos de ellos son comunes a muchas etiquetas.

## Tipos de atributos

A continuación, se presenta una clasificación de los atributos comunes **según su funcionalidad**.

### Atributos básicos o globales

Se pueden usar en casi todas las etiquetas HTML.

#### `name`

Permite asignar un nombre a un objeto HTML.

```html
<input name="password" />
```

#### `title`

Asigna un título a un elemento HTML, mejorando así la accesibilidad. Dicho título es mostrado por los navegadores cuando el usuario pasa el ratón por encima del elemento. Es especialmente útil con los elementos `a`, `link`, `img`, `object`, `abbr` y `acronym`.

```html
<a title="Título de etiqueta"></a>
<img title="Imagen de ejemplo" />
```

#### `id`

Permite identificar al elemento HTML sobre el que se aplica de **forma única** mediante un identificador único. Sólo es **útil cuando se trabaja con CSS y con JavaScript**.

```html
<div id="principal"></div>
```

Los identificadores:

- Pueden empezar por números.  
- Solo puede contener letras, números, guiones medios (`-`) y/o guiones bajos (`_`).

#### `style`

Permite aplicar a un elemento HTML un **estilo CSS** directamente.

```html
<span style="color: red;"></span>
```

#### `class`

Permite aplicar a un elemento HTML los estilos de un clase definida en una hoja de estilos CSS. Se pueden aplicar varias clases a un mismo elemento, separándolas por espacios.

```html
<div class="rojo grande"></div>
```

```html
<div class="rojo"></div>
```

```css
.rojo {
   color: red;
}

.grande {
   font-size: 20px;
}
```

Los nombres de las clases:

- Pueden empezar por números.  
- Solo puede contener letras, números, guiones medios (`-`) y/o guiones bajos (`_`).

### Atributos para internacionalización

Estos atributos se utilizan en las páginas que muestran sus contenidos en varios idiomas, o aquellas que quieren indicar de forma explícita el idioma de sus contenidos.

#### `dir`

Indica la dirección de escritura del texto. Solo puede tomar dos valores:

- `ltr` (*left to right*): de izquierda a derecha. Es el valor **por defecto**.  
- `rtl` (*right to left*): de derecha a izquierda.

### `lang`

Especifica el idioma del elemento mediante un código predefinido. Los posibles valores de este atributo se definen en el [RFC 1766](https://datatracker.ietf.org/doc/rfc1766/), el cual hace referencia a la norma [ISO 639](https://es.wikipedia.org/wiki/ISO_639-1).

```
<html lang="es"></html>
```

Algunos ejemplos de valores posibles son:

| Código | Idioma |
| :---- | :---- |
| `en` | Inglés |
| `es` | Español |
| `ja` | Japonés |
| `fr` | Francés |

### `xml:lang`

Al igual que el atributo `lang`, especifica el idioma del elemento mediante un código definido según el [RFC 1766](https://datatracker.ietf.org/doc/rfc1766/).

`<html xml:lang="it"></html>`

En las páginas XHTML, el atributo [`xml:lang`](https://www.w3.org/International/questions/qa-when-xmllang) tiene más prioridad que `lang` y es **obligatorio** incluirlo siempre que se incluya el atributo `lang`.

### Atributos para obtener el foco

Llamamos foco al hecho de que un elemento HTML está seleccionado para recibir la entrada del usuario. Solo ciertos elementos pueden recibir el foco, como los campos de formulario, los botones y los enlaces.

De esta forma, los atributos para obtener el foco se utilizan para definir el foco en elementos como formularios.

#### `autofocus`

Pone el foco de forma automática en el elemento que lo tenga definido.

```html
<input autofocus />
```

### Atributos de eventos

Se entiende por evento, aquello que ocurre cuando un usuario interactúa con la página web. Por ejemplo, hacer clic, hacer doble clic, pasar el ratón por encima de un elemento, etc.

Estos atributos solo se utilizan en las páginas web dinámicas, para las cuales se utiliza el lenguaje de programación JavaScript. Como no es objetivo de la materia, no se va a contemplar.

## XHTML

El lenguaje XHTML (*eXtensible HyperText Markup Language*) es muy similar al lenguaje HTML. De hecho, no es más que una **adaptación de HTML al lenguaje XML**.

El estándar XHTML 1.0 solo añade pequeñas mejoras y modificaciones menores al estándar HTML 4.01, por lo que este último está prácticamente incluido en el primero. Pasar del HTML 4.01 Strict a XHTML no requiere casi ningún cambio.

El lenguaje **HTML** tiene una **sintaxis muy permisiva**, por lo que es posible escribir sus etiquetas y atributos de muchas formas diferentes. Las etiquetas, por ejemplo, pueden escribirse en mayúsculas, minúsculas e incluso combinando mayúsculas y minúsculas. El valor de los atributos de las etiquetas se pueden indicar con o sin comillas. Además, el orden en el que se abrían y cerraban las etiquetas no era importante.

La flexibilidad de HTML da lugar a páginas con un código desordenado, difícil de mantener y muy poco profesional.

**XHTML** soluciona estos problemas añadiendo ciertas **normas** en la forma de escribir las etiquetas y atributos. Las normas son las mismas que para un documento XML común bien formado. De esta forma, se consigue:

- Sencillez a la hora de editar y mantener el código.  
- Al ser más regular, es más fácil escribir código que lo procese.  
- Como es XML, se pueden utilizar fácilmente herramientas creadas para procesar documentos XML genéricos (editores, XSLT, etc.).  

## XHTML vs HTML

Existen unas [diferencias entre HTML y XHTML](https://html.spec.whatwg.org/multipage/introduction.html#html-vs-xhtml) a nivel sintáctico y estructural. En general, los diseñadores web suelen trabajar con HTML. El XHTML es más apreciado por los desarrolladores, que valoran la regularidad adicional. De cualquier manera, los tres primeros puntos de la anterior lista se consideran una buena práctica y se suelen cumplir siempre.

Para que que el código HTML se pueda considerar XML bien formado, y por tanto, XHTML, tiene que cumplir:

- Toda la página debe estar contenida en un **elemento raíz** `<html>`.  
- Los nombres de las etiquetas y atributos siempre se escriben en **minúsculas**.  
- El **valor de los atributos**, incluso los numéricos, siempre se encierra entre comillas.  
- En los **atributos** en los que el nombre coincide con su valor, no puede darse el valor por entendido, es decir, **no se pueden comprimir**. Este tipo de atributos no son muy habituales. Por ejemplo, `<div value="value"></div>` no es posible ponerlo como `<div value></div>`.  
- Todas las etiquetas deben cerrarse siempre. XHTML permite que, en lugar de abrir y cerrar de forma consecutiva la etiqueta (`<br><br/>`), se puede utilizar la sintaxis `<br />` para indicar que es una etiqueta vacía que se abre y se cierra en ese mismo punto.

Por otro lado, hay que tener en cuenta que los navegadores no **procesan** HTML y XHTML exactamente igual:

- Si un documento **HTML** contiene errores, el navegador **intentará mostrar el mayor contenido posible**.  
- Si un documento **XHTML** contiene algún error, el navegador **no mostrará el documento**.

:::info[MIME type]

Un navegador web sabe si el documento que se está sirviendo es un HTML o un XHTML por el [MIME](https://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions) (*Multipurpose Internet Mail Extensions*). MIME es una cabecera del protocolo HTTP que indica al navegador qué tipo de documento se está enviando.

El MIME para un **documento HTML** es el siguiente:

`text/html`

El MIME para un **documento XHTML** es alguno de los dos siguientes:

`application/xhtml+xml`  
`application/xml`

:::
