# Cuestionario T2 (UD3 + UD4)

- Total: 25 preguntas
- Valor por pregunta: 0.4 puntos
- Penalización por error: -0.1333 puntos

## UD3 - JavaScript y DOM

### UD3-01
¿Dónde se ejecuta principalmente JavaScript en el contexto de scripting de cliente?

- ✅ En el navegador web del usuario
- ❌ En el servidor de base de datos
- ❌ En el compilador de C++
- ❌ Solo en editores de texto

### UD3-02
Tienes el siguiente HTML:

```html
<div class="caja">A</div><div class="caja">B</div>
```

Si ejecutas:

```javascript
document.querySelector(".caja").textContent
```

¿Qué obtienes?

- ❌ "AB"
- ✅ "A"
- ❌ "B"
- ❌ Devuelve un error porque hay múltiples elementos

### UD3-03
¿Cuál es la forma correcta de asociar una función `fn` a un clic de botón en JavaScript moderno?

- ❌ `button.onClick(fn)`
- ✅ `button.addEventListener("click", fn)`
- ❌ `button.listen("click", fn)`
- ❌ `button.click = fn()`

### UD3-04
¿Qué hace `preventDefault()` dentro de un manejador de eventos?

- ❌ Detiene la propagación del evento a elementos padre
- ✅ Evita la acción por defecto del navegador para ese evento
- ❌ Elimina el evento del elemento
- ❌ Recarga automáticamente la página

### UD3-05
Si tienes:

```html
<p id="texto">Hola <b>mundo</b></p>
```

Y ejecutas:

```javascript
document.getElementById("texto").textContent
```

¿Qué valor obtienes?

- ❌ "Hola <b>mundo</b>"
- ✅ "Hola mundo"
- ❌ "Hola"
- ❌ Solo "mundo"

### UD3-06
Si quieres añadir dinámicamente un nuevo elemento `<li>` a una lista `<ul>`, ¿cuál es el orden correcto de operaciones?

- ❌ Crear elemento, añadir a `<ul>`, asignar texto
- ✅ Crear elemento, asignar texto, añadir a `<ul>`
- ❌ Asignar texto, crear elemento, añadir a `<ul>`
- ❌ Añadir a `<ul>`, crear elemento, asignar texto

### UD3-07
¿Cuál es la diferencia principal entre `==` y `===` en JavaScript?

- ❌ No hay diferencia
- ❌ `===` compara solo textos
- ✅ `===` compara valor y tipo, mientras `==` permite coerción
- ❌ `==` es más estricto que `===`

### UD3-08
Para depurar código JavaScript en el navegador, la herramienta más directa es:

- ❌ El validador de XML
- ✅ La consola de las herramientas de desarrollo (F12)
- ❌ El panel de impresión del navegador
- ❌ El bloc de notas del sistema

### UD3-09
Observa el código:

```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

¿Qué se mostrará en consola?

- ✅ 0, 1, 2
- ❌ 1, 2, 3
- ❌ 0, 1, 2, 3
- ❌ Bucle infinito

### UD3-10
Dado el array:

```javascript
[10, 25, 8, 30]
```

¿Qué devuelve?

```javascript
filter(num => num > 15)
```

- ❌ `[10, 8]`
- ✅ `[25, 30]`
- ❌ `[10, 25, 8, 30]`
- ❌ `true`

### UD3-11
¿Qué devuelve `querySelectorAll()`?

- ❌ Un único elemento
- ❌ Un array normal de JavaScript
- ✅ Una colección de nodos (`NodeList`)
- ❌ Un valor booleano

## UD4 - XML Schema (XSD)

### UD4-01
¿Cuál es el objetivo principal de un esquema XSD?

- ❌ Transformar XML a HTML
- ✅ Definir y validar la estructura y restricciones de un documento XML
- ❌ Comprimir archivos XML
- ❌ Cifrar documentos XML

### UD4-02
Si necesitas que un elemento aparezca entre 1 y 5 veces en un documento XML validado con XSD, ¿qué configuración usarías?

- ✅ `minOccurs="1" maxOccurs="5"`
- ❌ `minOccurs="0" maxOccurs="5"`
- ❌ `minOccurs="1" maxOccurs="unbounded"`
- ❌ `occurs="1-5"`

### UD4-03
Tienes un XML con elemento raíz `<catalogo>`. En el XSD, ¿dónde debes declararlo para que sea válido?

- ✅ Como hijo directo de `<xs:schema>` con `<xs:element name="catalogo">`
- ❌ Dentro de `<xs:complexType>`
- ❌ Como atributo de `<xs:schema>`
- ❌ No es necesario declararlo si está en el XML

### UD4-04
Si en tu XSD declaras el namespace:

```xml
xmlns:xs="http://www.w3.org/2001/XMLSchema"
```

¿Qué prefijo debes usar para los elementos XSD?

- ❌ No es necesario prefijo
- ✅ `xs:` (como en `<xs:element>`)
- ❌ `xsd:`
- ❌ `xml:`

### UD4-05
Un documento XML referencia su esquema con `xsi:noNamespaceSchemaLocation="libro.xsd"`. ¿Qué implica esto?

- ❌ El esquema debe estar en un servidor remoto
- ✅ El documento XML no utiliza namespace propio (solo namespace de instancia)
- ❌ El archivo XSD no puede tener prefijo `xs`
- ❌ Es obligatorio declarar un DTD adicional

### UD4-06
¿Qué describe mejor `minOccurs` y `maxOccurs` en XSD?

- ❌ La longitud mínima y máxima de texto
- ❌ Los tamaños mínimo y máximo de archivo
- ✅ El número mínimo y máximo de veces que puede aparecer un elemento
- ❌ El número de atributos permitidos en todo el documento

### UD4-07
Si defines:

```xml
<xs:element name="telefono" minOccurs="0" maxOccurs="unbounded"/>
```

¿Qué significa?

- ❌ Debe aparecer al menos una vez
- ✅ Puede aparecer cero o más veces (es opcional y repetible)
- ❌ Debe aparecer exactamente una vez
- ❌ Solo puede aparecer si otro elemento está presente

### UD4-08
¿Qué elemento de XSD se usa para definir una restricción de tipo con valores concretos permitidos?

- ❌ `<xs:sequence>`
- ❌ `<xs:choice>`
- ✅ `<xs:restriction>`
- ❌ `<xs:include>`

### UD4-09
Observa este fragmento XSD:

```xml
<xs:element name="edad" type="xs:integer"/>
```

¿Cuál de los siguientes XML sería válido?

- ❌ `<edad>25.5</edad>`
- ✅ `<edad>25</edad>`
- ❌ `<edad>veinticinco</edad>`
- ❌ `<edad type="integer">25</edad>`

### UD4-10
¿Qué afirmación es correcta sobre XML bien formado y XML válido?

- ❌ Si es válido, puede no ser bien formado
- ✅ Todo XML válido debe estar bien formado
- ❌ Son exactamente lo mismo
- ❌ La validez solo depende de tener comentarios

### UD4-11
Si necesitas restringir un campo "nota" para que solo acepte valores entre 0 y 10, ¿qué tipo de dato sería más apropiado?

- ❌ `xs:string` con `pattern`
- ✅ `xs:integer` con `restriction` (`minInclusive` y `maxInclusive`)
- ❌ `xs:decimal` sin restricciones
- ❌ `xs:boolean`

### UD4-12
En un XSD defines:

```xml
<xs:sequence>
  <xs:element name="nombre"/>
  <xs:element name="apellido"/>
</xs:sequence>
```

¿Qué XML es válido?

- ✅ `<nombre>Ana</nombre><apellido>García</apellido>`
- ❌ `<apellido>García</apellido><nombre>Ana</nombre>`
- ❌ Solo `<nombre>Ana</nombre>`
- ❌ Ambos elementos pueden aparecer en cualquier orden
