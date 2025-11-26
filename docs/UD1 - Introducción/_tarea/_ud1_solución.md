# Solución Tarea UD1 - Introducción a los lenguajes de marcas

## Ejercicio 1

**a)**

Incorrecto: No hay un elemento raíz único.  
Correcto:

```xml
<elementos>
  <elemento>Elemento 1</elemento>
  <elemento>Elemento 2</elemento>
</elementos>
```

**b)**

Incorrecto: Las etiquetas de apertura y cierre no coinciden en mayúsculas/minúsculas. Hay que recordar que las etiquetas XML son **case-sensitive**, o sensibles a mayúsculas y minúsculas.

Correcto:

```xml
<elemento>Coche</elemento>
```

**c)**  

Incorrecto: El orden de cierre de las etiquetas es incorrecto (no están bien anidadas). Las etiquetas deben cerrarse en el orden inverso al que se abren, o dicho de otra forma, cada etiqueta debe cerrar a la última que se abrió.

Correcto:

```xml
<negrita><italica>Texto XML</italica></negrita>
```

**d)**

Incorrecto: Los caracteres `<`, `>`, `&` deben escaparse.  
Correcto:

```xml
<rango>1 &lt; 5 &amp; 11 &gt; 7</rango>
```

**e)**  

Incorrecto: El nombre de la etiqueta no debe empezar por "XML" (reservado).

Correcto:

```xml
<ficheroXML>Marcas.xml</ficheroXML>
```

**f)**

Incorrecto: El contenido CDATA está mal formado (no puede contener `]]>` dentro).  
Correcto:

```xml
<![CDATA[ <[[aa]]> ]]>
```

**g)**

Incorrecto: El nombre de la etiqueta contiene caracteres no permitidos (`@`).  
Correcto:

```xml
<user_uo>Pedro@Empleados</user_uo>
```

**h)**  

Incorrecto: Falta la barra de cierre en la segunda etiqueta `<subrayado>`.  
Correcto:

```xml
<texto>El titular de hoy se basa en esta <subrayado>noticia</subrayado></texto>
```

## Ejercicio 2

Lo primero que hacemos es crear un elemento raíz que englobe toda la información de la agenda, por ejemplo `<agenda>`. Dentro de este elemento, creamos un elemento `<persona>` para cada persona en la agenda. Cada `<persona>` contendrá subelementos para el nombre, dirección, teléfonos y correo electrónico. Dentro de teléfonos, definimos varios subelementos para los diferentes tipos de teléfono (casa, móvil, trabajo). Lo mismo ocurre con el nombre y apellidos, que los agrupamos en un elemento `identificadores` o similar.

Si una persona no tiene alguno de los datos (por ejemplo, un segundo apellido, teléfono fijo, etc), podemos dejar la etiqueta vacía, utilizando `<casa/>` o similar.

También podemos permitir múltiples correos electrónicos para una misma persona, simplemente repitiendo el elemento `<email>`.

```xml
<!-- ud1_tarea_ejercicio2.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<agenda>
  <persona>
    <identificadores>
      <nombre>Ana</nombre>
      <apellido1>García</apellido1>
      <apellido2>López</apellido2>
    </identificadores>
    <direccion>Calle Mayor 12, 28013 Madrid</direccion>
    <telefonos>
      <casa/>
      <movil>600123456</movil>
      <trabajo>913456789</trabajo>
    </telefonos>
    <email>ana.lopez@email.com</email>
  </persona>
  <persona>
    <identificadores>
      <nombre>John</nombre>
      <apellido1>Smith</apellido1>
      <apellido2/>
    </identificadores>
    <direccion>Avenida del Sol 45, 29010 Málaga</direccion>
    <telefonos>
      <casa>952123456</casa>
      <movil>622334455</movil>
      <trabajo>951987654</trabajo>
    </telefonos>
    <email>john.smith@email.com</email>
    <email>john.profesional@email.com</email>
  </persona>
  <persona>
    <identificadores>
      <nombre>Lucía</nombre>
      <apellido1>Fernández</apellido1>
      <apellido2>Soto</apellido2>
    </identificadores>
    <direccion>Rúa Nova 8, 15705 Santiago</direccion>
    <telefonos>
      <casa>981123456</casa>
      <movil>688112233</movil>
      <trabajo>981654321</trabajo>
    </telefonos>
    <email>lucia.fernandez@email.com</email>
  </persona>
</agenda>
```

---

## Ejercicio 3

Definimos nuestro elemento raíz `<recetas>`, que contendrá varios elementos `<receta>`. Cada receta tendrá un nombre, número de comensales, una lista de ingredientes (cada uno con su cantidad y unidad) y los pasos para la elaboración.

Cada ingrediente tiene un atributo para la cantidad y otro para la unidad de medida, lo que facilita las búsquedas por estos criterios.

El elemento `<elaboracion>` contiene varios pasos, cada uno en un elemento `<paso>`. Los elementos `paso` están ordenados para reflejar el proceso de elaboración.

```xml
<!-- ud1_tarea_ejercicio3.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<recetas>
  <receta>
    <nombre>Croquetas de jamón</nombre>
    <comensales>4</comensales>
    <ingredientes>
      <ingrediente cantidad="200" unidad="g">jamón serrano</ingrediente>
      <ingrediente cantidad="100" unidad="g">queso rallado</ingrediente>
      <ingrediente cantidad="2" unidad="unidades">huevos</ingrediente>
      <ingrediente cantidad="100" unidad="g">pan rallado</ingrediente>
      <ingrediente cantidad="1" unidad="litro">leche</ingrediente>
      <ingrediente cantidad="30" unidad="g">mantequilla</ingrediente>
      <ingrediente cantidad="20" unidad="g">harina</ingrediente>
      <ingrediente>sal</ingrediente>
      <ingrediente>pimienta</ingrediente>
      <ingrediente>nuez moscada</ingrediente>
    </ingredientes>
    <elaboracion>
      <paso>Picar el jamón serrano en trozos muy pequeños.</paso>
      <paso>En una sartén, derretir la mantequilla y añadir la harina, removiendo constantemente para hacer un roux.</paso>
      <paso>Incorporar la leche poco a poco, sin dejar de remover, hasta obtener una bechamel espesa.</paso>
      <paso>Añadir los huevos batidos, el jamón picado, el queso rallado, sal, pimienta y nuez moscada al gusto. Mezclar bien.</paso>
      <paso>Formar las croquetas con la masa y pasarlas por el pan rallado.</paso>
      <paso>Freír en aceite caliente hasta que estén doradas.</paso>
    </elaboracion>
  </receta>
</recetas>
```

---

## Ejercicio 4

Definimos la etiqueta `<modulo>` como raíz del documento. Dentro de esta etiqueta, definimos los atributos del módulo (nombre, horas semanales, carácter, fecha de inicio y fecha de fin). Al hacerlo como atributo, nos aseguramos de que esta información es única para el módulo (no tenemos dos subelementos nombre dentro de módulo, por ejemplo).

Con respecto a los alumnos, podríamos definir el nombre igual que en el ejercicio 2, aquí lo estamos simplificando. También podríamos definir dni como atributo del alumno, sabiendo que cada alumno tiene un dni único.

Si tuvieramos que registrar faltas de asistencia de algún alumno, podríamos definir subelementos `<falta>` dentro de `<faltas>`, cada uno con la fecha y motivo como atributos. En este caso, dejamos el elemento `<faltas>` vacío para indicar que no hay faltas registradas.

```xml
<!-- ud1_tarea_ejercicio4.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<modulo nombre="Lenguajes de Marcas y Sistemas de Gestión de Información" horas_semanales="5" caracter="Obligatorio" fecha_inicio="2022-09-12" fecha_fin="2023-06-21" ciclo_formativo="DAM">
  <alumnos>
    <alumno>
      <nombre>Ana Fernández Gutiérrez</nombre>
      <dni>16965696L</dni>
      <telefono>678201232</telefono>
      <email>anafg@outlook.com</email>
      <direccion>
        <calle>Avenida Rosalía de Castro 22</calle>
        <cp>15701</cp>
        <ciudad>Santiago de Compostela</ciudad>
        <provincia>A Coruña</provincia>
        <comunidad>Galicia</comunidad>
      </direccion>
      <faltas/>
      <nota/>
    </alumno>
    <alumno>
      <nombre>Pepe Martínez González</nombre>
      <dni>98765432H</dni>
      <telefono>691122334</telefono>
      <email>pmg@gmail.com</email>
      <direccion>
        <calle>Rúa de Barcelona 55</calle>
        <cp>36203</cp>
        <ciudad>Vigo</ciudad>
        <provincia>Pontevedra</provincia>
        <comunidad>Galicia</comunidad>
      </direccion>
      <faltas/>
      <nota>APTO</nota>
    </alumno>
  </alumnos>
</modulo>
```