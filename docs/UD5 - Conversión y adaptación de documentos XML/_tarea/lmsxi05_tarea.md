# Tarea LMSXI05 - Conversión y adaptación de documentos XML

En esta tarea se plantearán 3 ejercicios relacionados con la conversión y adaptación de documentos XML. En cada ejercicio se proporcionará la información e instrucciones necesarias para llevar a cabo la tarea. Se recomienda seguir las indicaciones y utilizar las herramientas adecuadas para cada ejercicio.

## Ejercicio 1

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<productos>
  <producto categoria="ropa">
    <nombre>Camiseta</nombre>
    <precio divisa="USD">15.00</precio>
    <descripcion>Camiseta de algodón de alta calidad</descripcion>
    <tallas>
      <talla>S</talla>
      <talla>M</talla>
      <talla>L</talla>
      <talla>XL</talla>
    </tallas>
  </producto>
  <producto categoria="ropa">
    <nombre>Pantalón</nombre>
    <precio divisa="EUR">24.95</precio>
    <descripcion>Pantalón de mezclilla resistente</descripcion>
    <tallas>
      <talla>28</talla>
      <talla>30</talla>
      <talla>32</talla>
      <talla>34</talla>
    </tallas>
  </producto>
  <producto categoria="calzado">
    <nombre>Zapatos</nombre>
    <precio divisa="USD">40.00</precio>
    <descripcion>Zapatos de cuero cómodos</descripcion>
    <tallas>
      <talla>38</talla>
      <talla>39</talla>
      <talla>40</talla>
      <talla>41</talla>
      <talla>42</talla>
      <talla>43</talla>
      <talla>44</talla>
    </tallas>
  </producto>
  <producto categoria="accesorios">
    <nombre>Gorra</nombre>
    <precio divisa="USD">10.99</precio>
    <descripcion>Gorra deportiva de alta calidad</descripcion>
    <tallas>
      <talla>Única</talla>
    </tallas>
  </producto>
</productos>
```

**Construye las expresiones XPath que permitan obtener los siguientes datos**:

1. Extraer todos los elementos `<producto>`.
2. Extraer todos los elementos `<talla>` del producto con nombre Camiseta.
3. Precio del producto con nombre `Zapatos`.
4. Todos los elementos `<nombre>` de los productos cuyo precio es mayor o igual a 15.
5. Todos los elementos `<talla>` de todos los productos.
6. El nombre del producto con el precio más alto.
7. El precio promedio de todos los productos.
8. Todos los nombres de los productos cuyo nombre comienza por `P`.
9. Todos los elementos `<nombre>` de los productos cuya descripción contiene la palabra deportiva.
10. Todos los elementos `<talla>` de los productos con precio menor a 20.
11. Todos los elementos `<producto>` que tengan el atributo categoría igual a ropa.
12. El precio del producto con nombre `Gorra` en dólares (USD).
13. El nombre de los productos cuyo precio esté en euros (EUR).
14. Todas las tallas de los productos con precio mayor a 20 dólares (USD).
15. El nombre y la descripción de los productos con precio en dólares (USD).

### Formato de entrega

Las expresiones XPath se deben incluir en un **fichero de texto** que tenga el siguiente formato:

- Cada línea debe se debe corresponder con una **expresión XPath**.
- **El fichero debe tener 15 líneas exactas**. No se pueden intercalar líneas en blanco ni introducir líneas con comentarios entre expresiones XPath.
- Cada línea del fichero se corresponde con un apartado: la línea 1 debe contener la expresión XPath del apartado 1 y la línea 15, la expresión XPath del apartado 15.
- Una línea solo debe contener una expresión XPath. **No se debe incluir texto adicional** como, por ejemplo, notas o comentarios.

El fichero de texto resultante debe tener un aspecto como el siguiente:

```plaintext
/expresion-apartado-1
/expresion-apartado-2
/expresion-apartado-3
/expresion-apartado-4
/expresion-apartado-5
/expresion-apartado-6
/expresion-apartado-7
/expresion-apartado-8
/expresion-apartado-9
/expresion-apartado-10
/expresion-apartado-11
/expresion-apartado-12
/expresion-apartado-13
/expresion-apartado-14
/expresion-apartado-15
```

El nombre del fichero debe ser `lmsxi05_1.txt`.

### Evaluación

Para la valoración de este ejercicio, se tendrá en cuenta **únicamente la funcionalidad de las expresiones XPath**.

## Ejercicio 2

Escribe una hoja XSL que permita realizar una transformación XSLT.

A partir de un fichero XML con datos de productos y ventas, se debe generar otro documento XML con la misma información, pero organizados de una forma diferente.

**El documento XML inicial** tiene las siguientes características:

- El elemento raíz del documento es `productos`.
- Dentro del elemento `produtos` hay uno o más elementos `producto` seguidos de un elemento ventas.
- Un elemento `producto` contiene un `nombre`, `categoria`, `descripcion` y `precio`. Además, contiene un `id` único en forma de **atributo** y, **opcionalmente**, un atributo `descuento` si el `producto` es tiene un descuento aplicado.
- Un elemento `ventas` contiene elementos `venta`.
- Un elemento `venta` contiene un elemento `fecha` y un elemento `productos`. Además, contiene un `id` único en forma de **atributo**.
- El elemento `productos` dentro de venta contiene un elemento `producto` por cada `producto` vendido en esa venta. Cada `producto` tiene un atributo `id` que hace referencia al identificador del producto vendido.
- Todos los elementos son obligatorios.
- Todos los atributos son obligatorios, excepto `descuento`.

Un ejemplo de documento XML inicial podría ser el siguiente:

```xml
<productos>
  <producto id="p001">
    <nombre>Smartphone Samsung Galaxy S21</nombre>
    <categoria>Electrónica</categoria>
    <descripcion>Smartphone Samsung Galaxy S21 con pantalla AMOLED de 6.2 pulgadas, cámara principal de 64 MP y batería de 4000 mAh.</descripcion>
    <precio>899.99</precio>
  </producto>
  <producto id="p002" descuento="10">
    <nombre>Portátil HP Pavilion 15-cs3002ns</nombre>
    <categoria>Informática</categoria>
    <descripcion>Portátil HP Pavilion 15-cs3002ns con procesador Intel Core i5, pantalla de 15.6 pulgadas, 8 GB de RAM y 512 GB de almacenamiento SSD.</descripcion>
    <precio>799.99</precio>
  </producto>
  <producto id="p003">
    <nombre>Bicicleta de montaña Scott Scale 980</nombre>
    <categoria>Deporte</categoria>
    <descripcion>Bicicleta de montaña Scott Scale 980 con cuadro de aluminio, horquilla RockShox y transmisión Shimano Deore de 12 velocidades.</descripcion>
    <precio>1399.99</precio>
  </producto>
  <producto id="p004" descuento="20">
    <nombre>Smart TV LG OLED55CX6LA</nombre>
    <categoria>Electrónica</categoria>
    <descripcion>Smart TV LG OLED55CX6LA con pantalla OLED de 55 pulgadas, resolución 4K, sonido Dolby Atmos y sistema operativo webOS 5.0.</descripcion>
    <precio>1499.99</precio>
  </producto>
  <producto id="p005">
    <nombre>Auriculares inalámbricos Sony WF-1000XM4</nombre>
    <categoria>Electrónica</categoria>
    <descripcion>Auriculares inalámbricos Sony WF-1000XM4 con cancelación de ruido, control táctil, Bluetooth 5.2 y hasta 8 horas de autonomía.</descripcion>
    <precio>279.99</precio>
  </producto>
  <producto id="p006">
    <nombre>Libro "El nombre del viento" de Patrick Rothfuss</nombre>
    <categoria>Libros</categoria>
    <descripcion>Libro "El nombre del viento" de Patrick Rothfuss, primera parte de la saga "Crónica del Asesino de Reyes".</descripcion>
    <precio>21.99</precio>
  </producto>
  <producto id="p007">
    <nombre>Juego de mesa Catan</nombre>
    <categoria>Juegos</categoria>
    <descripcion>Juego de mesa Catan, en el que los jugadores compiten por colonizar una isla y acumular recursos para desarrollarse.</descripcion>
    <precio>34.99</precio>
  </producto>
  <producto id="p008" descuento="30">
    <nombre>Zapatillas deportivas Nike Air Zoom Pegasus 38</nombre>
    <categoria>Deporte</categoria>
    <descripcion>Zapatillas deportivas Nike Air Zoom Pegasus 38, con amortiguación Zoom Air y malla transpirable en la parte superior.</descripcion>
    <precio>109.99</precio>
  </producto>
  <producto id="p009">
    <nombre>Cámara réflex Canon EOS 90D</nombre>
    <categoria>Fotografía</categoria>
    <descripcion>Cámara réflex Canon EOS 90D con sensor APS-C de 32.5 MP, grabación de video en 4K y pantalla táctil abatible.</descripcion>
    <precio>1399.99</precio>
  </producto>
  <producto id="p010">
    <nombre>Robot de cocina Moulinex Cookeo</nombre>
    <categoria>Hogar</categoria>
    <descripcion>Robot de cocina Moulinex Cookeo con capacidad de 6 litros, 100 recetas preprogramadas y pantalla LCD.</descripcion>
    <precio>199.99</precio>
  </producto>
  <ventas>
    <venta id="v001">
      <fecha>2022-01-01</fecha>
      <productos>
        <producto id="p001"/>
        <producto id="p002"/>
        <producto id="p006"/>
      </productos>
    </venta>
    <venta id="v002">
      <fecha>2022-02-14</fecha>
      <productos>
        <producto id="p005"/>
        <producto id="p007"/>
      </productos>
    </venta>
    <venta id="v003">
      <fecha>2022-03-25</fecha>
      <productos>
        <producto id="p003"/>
        <producto id="p008"/>
      </productos>
    </venta>
    <venta id="v004">
      <fecha>2022-05-02</fecha>
      <productos>
        <producto id="p004"/>
        <producto id="p009"/>
      </productos>
    </venta>
    <venta id="v005">
      <fecha>2022-06-15</fecha>
      <productos>
        <producto id="p010"/>
      </productos>
    </venta>
    <venta id="v006">
      <fecha>2022-08-01</fecha>
      <productos>
        <producto id="p005"/>
        <producto id="p008"/>
        <producto id="p009"/>
      </productos>
    </venta>
    <venta id="v007">
      <fecha>2022-10-10</fecha>
      <productos>
        <producto id="p003"/>
        <producto id="p006"/>
        <producto id="p007"/>
        <producto id="p010"/>
      </productos>
    </venta>
  </ventas>
</productos>
```

Al aplicar la transformación, el resultado debe ser un **documento XML** con las siguientes características:

- Los elementos deben estar indentados.
- El elemento raíz del documento es `tienda`.
- Dentro del elemento `tienda` hay los siguientes elementos: `productos`, `ofertas` y `ventas`.
- El elemento `productos` contiene varios elementos `producto`. Debe contener todos los `productos`.
- Un elemento `producto` contiene el nombre del `producto` y tiene los atributos `id` y `precio`.
- El elemento `ofertas` contiene los elementos `producto` que tienen el atributo `descuento`.
- El elemento `ventas` contiene elementos `venta`.
- Un elemento `venta` contiene varios elementos `producto`. Además, tiene tres atributos: `fecha`, `id` y `cantidad`. El último atributo debe indicar la cantidad de productos de esa venta.
- Un elemento `producto` dentro de `venta` debe contener el nombre del `producto` y debe tener dos atributos: `precio` y `categoria`. Esos datos se obtienen a partir del atributo `id` del elemento del documento XML original, el cual es una referencia al producto vendido.

Un ejemplo de documento XML resultante podría ser el siguiente:

```xml
<tienda>
  <productos>
    <producto id="p001" precio="899.99">Smartphone Samsung Galaxy S21</producto>
    <producto id="p002" precio="799.99">Portátil HP Pavilion 15-cs3002ns</producto>
    <producto id="p003" precio="1399.99">Bicicleta de montaña Scott Scale 980</producto>
    <producto id="p004" precio="1499.99">Smart TV LG OLED55CX6LA</producto>
    <producto id="p005" precio="279.99">Auriculares inalámbricos Sony WF-1000XM4</producto>
    <producto id="p006" precio="21.99">Libro "El nombre del viento" de Patrick Rothfuss</producto>
    <producto id="p007" precio="34.99">Juego de mesa Catan</producto>
    <producto id="p008" precio="109.99">Zapatillas deportivas Nike Air Zoom Pegasus 38</producto>
    <producto id="p009" precio="1399.99">Cámara réflex Canon EOS 90D</producto>
    <producto id="p010" precio="199.99">Robot de cocina Moulinex Cookeo</producto>
  </productos>
  <ofertas>
    <producto id="p002" precio="799.99">Portátil HP Pavilion 15-cs3002ns</producto>
    <producto id="p004" precio="1499.99">Smart TV LG OLED55CX6LA</producto>
    <producto id="p008" precio="109.99">Zapatillas deportivas Nike Air Zoom Pegasus 38</producto>
  </ofertas>
  <ventas>
    <venta fecha="2022-01-01" id="v001" cantidad="3">
      <producto precio="899.99" categoria="Electrónica">Smartphone Samsung Galaxy S21</producto>
      <producto precio="799.99" categoria="Informática">Portátil HP Pavilion 15-cs3002ns</producto>
      <producto precio="21.99" categoria="Libros">Libro "El nombre del viento" de Patrick Rothfuss</producto>
    </venta>
    <venta fecha="2022-02-14" id="v002" cantidad="2">
      <producto precio="279.99" categoria="Electrónica">Auriculares inalámbricos Sony WF-1000XM4</producto>
      <producto precio="34.99" categoria="Juegos">Juego de mesa Catan</producto>
    </venta>
    <venta fecha="2022-03-25" id="v003" cantidad="2">
      <producto precio="1399.99" categoria="Deporte">Bicicleta de montaña Scott Scale 980</producto>
      <producto precio="109.99" categoria="Deporte">Zapatillas deportivas Nike Air Zoom Pegasus 38</producto>
    </venta>
    <venta fecha="2022-05-02" id="v004" cantidad="2">
      <producto precio="1499.99" categoria="Electrónica">Smart TV LG OLED55CX6LA</producto>
      <producto precio="1399.99" categoria="Fotografía">Cámara réflex Canon EOS 90D</producto>
    </venta>
    <venta fecha="2022-06-15" id="v005" cantidad="1">
      <producto precio="199.99" categoria="Hogar">Robot de cocina Moulinex Cookeo</producto>
    </venta>
    <venta fecha="2022-08-01" id="v006" cantidad="3">
      <producto precio="279.99" categoria="Electrónica">Auriculares inalámbricos Sony WF-1000XM4</producto>
      <producto precio="109.99" categoria="Deporte">Zapatillas deportivas Nike Air Zoom Pegasus 38</producto>
      <producto precio="1399.99" categoria="Fotografía">Cámara réflex Canon EOS 90D</producto>
    </venta>
    <venta fecha="2022-10-10" id="v007" cantidad="4">
      <producto precio="1399.99" categoria="Deporte">Bicicleta de montaña Scott Scale 980</producto>
      <producto precio="21.99" categoria="Libros">Libro "El nombre del viento" de Patrick Rothfuss</producto>
      <producto precio="34.99" categoria="Juegos">Juego de mesa Catan</producto>
      <producto precio="199.99" categoria="Hogar">Robot de cocina Moulinex Cookeo</producto>
    </venta>
  </ventas>
</tienda>
```

### Formato de entrega

La entrega será una hoja XSL que contenga las instrucciones necesarias para realizar la transformación XSLT planteada.
El nombre del fichero debe ser `lmsxi05_2.xsl`.

### Evaluación

Para la valoración de este ejercicio, se tendrán en cuenta los siguientes aspectos:

- **Funcionalidad**. La hoja XSL debe permitir realizar correctamente la transformación XLST planteada en el enunciado.
- **Documentación**. Se deben añadir comentarios breves explicando el código.

## Ejercicio 3

Escribe una hoja XSL que permita realizar una transformación XSLT.

A partir de un fichero XML con datos de artistas, se debe generar un documento HTML con una tabla con los datos de los artistas.

El documento XML inicial tiene las siguientes características:

- El elemento raíz del documento es `artistas`.
- Dentro del elemento `artistas` hay uno o más elementos `artista`.
- Un elemento `artista` contiene los siguientes elementos (y en el siguiente orden): `nombre`, `nacimiento`, `fallecimiento` y `pais`.
- Además, un elemento artista tiene un atributo `id` que contiene un identificador único para todo el documento, y un atributo `wikipedia`.
- Todos los elementos son obligatorios, salvo el elemento fallecimiento.
- Todos los atributos son obligatorios.

Ejemplo de documento XML que cumple los requisitos:

```xml
<artistas>
  <artista id="a101" wikipedia="https://es.wikipedia.org/wiki/Diego_Vel%C3%A1zquez">
    <nombre>Diego Velázquez</nombre>
    <nacimiento>1599</nacimiento>
    <fallecimiento>1660</fallecimiento>
    <pais>España</pais>
  </artista>
  <artista id="a102" wikipedia="https://es.wikipedia.org/wiki/Caravaggio">
    <nombre>Michelangelo Caravaggio</nombre>
    <nacimiento>1571</nacimiento>
    <pais>Italia</pais>
  </artista>
  <artista id="a103" wikipedia="https://es.wikipedia.org/wiki/Herrada_de_Landsberg">
    <nombre>Herrada de Landsberg</nombre>
    <nacimiento>1125</nacimiento>
    <fallecimiento>1195</fallecimiento>
    <pais>Alsacia</pais>
  </artista>
  <artista id="a104" wikipedia="https://es.wikipedia.org/wiki/Francisco_de_Goya">
    <nombre>Francisco de Goya</nombre>
    <nacimiento>1746</nacimiento>
    <fallecimiento>1828</fallecimiento>
    <pais>España</pais>
  </artista>
</artistas>
```

Al aplicar la transformación, el resultado debe ser un **documento HTML** con las siguientes características:

- Debe tener un `html`, un `head` y un `body`.
- Además, debe tener un `title` que indique `Artistas XSLT`.
- Se debe utilizar la codificación `UTF-8`.
- La tabla tendrá una fila por cada artista.
- Solo se mostrarán los artistas nacidos después de 1500.
- Los artistas se mostrarán ordenados por año de nacimiento creciente.
- La primera fila de la tabla será la cabecera. Contendrá los siguientes títulos: `Código`, `Nombre`, `Año de nacimiento`, `Año de fallecimiento`, `País` y `Wikipedia`.
- Cuando el año de fallecimiento no está disponible, se mostrará el texto `Desconocido`.
- El valor de la última columna se obtiene del atributo Wikipedia. Debe mostrarse un texto `Saber más` que abra una nueva pestaña en la URL almacenada en el atributo.

Ejemplo de documento HTML que cumple los requisitos:

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Artistas XSLT</title>
  </head>
  <body>
    <table>
      <tbody>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Año de nacimiento</th>
          <th>Año de fallecimiento</th>
          <th>País</th>
          <th>Wikipedia</th>
        </tr>
        <tr>
          <td>a102</td>
          <td>Michelangelo Caravaggio</td>
          <td>1571</td>
          <td>Desconocido</td>
          <td>Italia</td>
          <td>
            <a target="_blank" href="https://es.wikipedia.org/wiki/Caravaggio">
              Saber más
            </a>
          </td>
        </tr>
        <tr>
          <td>a101</td>
          <td>Diego Velázquez</td>
          <td>1599</td>
          <td>1660</td>
          <td>España</td>
          <td>
            <a target="_blank" href="https://es.wikipedia.org/wiki/Diego_Vel%C3%A1zquez">
              Saber más
            </a>
          </td>
        </tr>
        <tr>
          <td>a104</td>
          <td>Francisco de Goya</td>
          <td>1746</td>
          <td>1828</td>
          <td>España</td>
          <td>
            <a target="_blank" href="https://es.wikipedia.org/wiki/Francisco_de_Goya">
              Saber más
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

### Formato de entrega

La entrega será una hoja XSL que contenga las instrucciones necesarias para realizar la transformación XSLT planteada.
El nombre del fichero debe ser `lmsxi05_3.xsl`.

### Evaluación

Para la valoración de este ejercicio, se tendrán en cuenta los siguientes aspectos:

- **Funcionalidad**. La hoja XSL debe permitir realizar correctamente la transformación XLST planteada en el enunciado.
- **Documentación**. Se deben añadir comentarios breves explicando el código.

## Entrega de la tarea

Una vez se hayan completado los ejercicios, se deben añadir los archivos generados a un único archivo comprimido, con el nombre `lmsxi05_tarea.zip`.

```plaintext
lmsxi05_tarea.zip
├── lmsxi05_1.txt
├── lmsxi05_2.xsl
└── lmsxi05_3.xsl
```
