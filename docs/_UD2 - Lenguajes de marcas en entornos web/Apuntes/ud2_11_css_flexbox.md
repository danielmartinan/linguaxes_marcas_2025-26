# CSS Flexbox

## Introducción

CSS Flexbox (Flexible Box Layout) es un sistema de diseño unidimensional que nos permite distribuir el espacio entre los elementos de una interfaz y mejorar las capacidades de alineación. Es especialmente útil cuando no conocemos el tamaño de nuestros elementos o cuando este es dinámico.

### Conceptos Básicos

Flexbox está formado por dos tipos de elementos:

- **Contenedor padre (flex container)**: El elemento que contiene los elementos flexibles
- **Elementos hijo (flex items)**: Los elementos que están dentro del contenedor flexible

#### Estructura HTML Típica

```html
<div class="contenedor">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.contenedor {
  display: flex;
}
```

### Características Principales

- **Sistema unidimensional**: Trabaja en una sola dimensión a la vez (horizontal o vertical)
- **Distribución del espacio**: Permite distribuir eficientemente el espacio disponible
- **Alineación avanzada**: Ofrece múltiples opciones de alineación
- **Flexibilidad**: Los elementos pueden crecer, encogerse o mantener su tamaño

## Display

La propiedad `display` es fundamental para activar Flexbox en un contenedor:

### `display: flex`

Convierte el elemento en un contenedor flexible de tipo bloque:

```css
.contenedor {
  display: flex;
}
```

**Características:**
- El contenedor ocupa todo el ancho disponible
- Se comporta como un elemento de bloque
- Los elementos hijos se convierten automáticamente en flex items

### `display: inline-flex`

Convierte el elemento en un contenedor flexible de tipo inline:

```css
.contenedor {
  display: inline-flex;
}
```

**Características:**
- El contenedor solo ocupa el espacio necesario para sus hijos
- Se comporta como un elemento inline
- Permite que otros elementos se coloquen a su lado
- Los elementos hijos también se convierten en flex items

### Diferencias Visuales

```html
<div class="flex-block">Contenedor flex (bloque)</div>
<div class="flex-inline">Contenedor inline-flex</div>
<span>Texto después</span>
```

```css
.flex-block {
  display: flex;
  background-color: lightblue;
}

.flex-inline {
  display: inline-flex;
  background-color: lightgreen;
}
```

## Wrap

Cuando creamos un contenedor y le añadimos ítems, nos podemos encontrar que no tengamos espacio suficiente para todos. Para estas situaciones, tenemos que decidir qué comportamiento seguir.

Con flexbox, podemos utilizar la siguiente propiedad:

```css
flex-wrap: wrap;
```

### Valores de flex-wrap

La propiedad acepta los siguientes valores:

#### `nowrap` (valor por defecto)
```css
.contenedor {
  display: flex;
  flex-wrap: nowrap;
}
```
- Indica al navegador que no cree nuevas filas
- El contenido se puede salir del contenedor
- Los elementos se comprimen para caber en una sola línea

#### `wrap`
```css
.contenedor {
  display: flex;
  flex-wrap: wrap;
}
```
- Si no entran los elementos, el contenedor va creando nuevas filas
- Los elementos mantienen su tamaño natural
- Las nuevas filas se crean hacia abajo

#### `wrap-reverse`
```css
.contenedor {
  display: flex;
  flex-wrap: wrap-reverse;
}
```
- Igual que `wrap`, pero invierte el orden de las filas
- En lugar de crearse filas abajo, los elementos wrapeados van arriba
- El orden visual se invierte

### Ejemplo Práctico

```html
<div class="contenedor-wrap">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
</div>
```

```css
.contenedor-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
}

.item {
  width: 100px;
  height: 50px;
  background-color: #f0f0f0;
  margin: 5px;
}
```

## Dirección (flex-direction)

*Nota: Esta sección no pudo ser extraída del sitio web debido a un enlace roto.*

La propiedad `flex-direction` establece la dirección principal del contenedor flexible:

```css
.contenedor {
  display: flex;
  flex-direction: row; /* valor por defecto */
}
```

### Valores disponibles:
- `row`: Los elementos se colocan en fila (horizontal, de izquierda a derecha)
- `row-reverse`: Los elementos se colocan en fila pero en orden inverso
- `column`: Los elementos se colocan en columna (vertical, de arriba a abajo)
- `column-reverse`: Los elementos se colocan en columna pero en orden inverso

## Justificación (justify-content)

*Nota: Esta sección no pudo ser extraída del sitio web debido a un enlace roto.*

La propiedad `justify-content` controla la alineación de los elementos a lo largo del eje principal:

```css
.contenedor {
  display: flex;
  justify-content: flex-start; /* valor por defecto */
}
```

### Valores disponibles:
- `flex-start`: Alinea los elementos al inicio del contenedor
- `flex-end`: Alinea los elementos al final del contenedor
- `center`: Centra los elementos
- `space-between`: Distribuye el espacio entre los elementos
- `space-around`: Distribuye el espacio alrededor de los elementos
- `space-evenly`: Distribuye el espacio uniformemente

## Alineación (align-items y align-self)

*Nota: Esta sección no pudo ser extraída del sitio web debido a un enlace roto.*

### align-items
Controla la alineación de los elementos en el eje secundario:

```css
.contenedor {
  display: flex;
  align-items: stretch; /* valor por defecto */
}
```

### align-self
Permite que un elemento individual sobrescriba la alineación del contenedor:

```css
.item-especial {
  align-self: center;
}
```

## Orden

*Nota: Esta sección no pudo ser extraída del sitio web debido a un enlace roto.*

La propiedad `order` permite cambiar el orden visual de los elementos sin modificar el HTML:

```css
.item {
  order: 0; /* valor por defecto */
}

.item-primero {
  order: -1; /* Se mostrará primero */
}
```

## Crecimiento (flex-grow, flex-shrink, flex-basis)

*Nota: Esta sección no pudo ser extraída del sitio web debido a un enlace roto.*

### flex-grow
Controla cómo crecen los elementos cuando hay espacio extra:

```css
.item {
  flex-grow: 0; /* valor por defecto - no crece */
}

.item-flexible {
  flex-grow: 1; /* Puede crecer */
}
```

### flex-shrink
Controla cómo se encogen los elementos cuando falta espacio:

```css
.item {
  flex-shrink: 1; /* valor por defecto - puede encogerse */
}
```

### flex-basis
Establece el tamaño inicial del elemento antes de que se distribuya el espacio libre:

```css
.item {
  flex-basis: auto; /* valor por defecto */
}
```

### Propiedad Abreviada flex
```css
.item {
  flex: 1 1 auto; /* flex-grow flex-shrink flex-basis */
}
```