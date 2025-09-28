# Introducción a los lenguajes de marcas

## Introducción

Un [**lenguaje de marcas**](https://es.wikipedia.org/wiki/Lenguaje_de_marcado) (o **lenguaje de marcado**) es un sistema para codificar documentos que combina texto con etiquetas, marcas o anotaciones que aportan información adicional sobre la estructura, el significado o el formato del contenido. Estas marcas permiten hacer explícita la composición lógica y semántica de un documento, facilitando su interpretación, visualización, almacenamiento o intercambio entre sistemas diversos. 

A diferencia de los **lenguajes de programación**, que están orientados a expresar algoritmos y lógica de ejecución para resolver problemas computacionales, los lenguajes de marcas están dirigidos principalmente a la **organización y descripción de la información**. Mientras que un lenguaje de programación define instrucciones para que una máquina realice operaciones y cálculos, un lenguaje de marcas define cómo está estructurado un documento o un conjunto de datos, sin especificar algoritmos ni procesos de control.

### Diferencias con los lenguajes de programación

Las principales diferencias entre los lenguajes de marcas y los lenguajes de programación son:

- **Propósito**: Los lenguajes de marcas están diseñados para describir y estructurar contenidos, mientras que los lenguajes de programación se usan para definir comportamientos y lógica operativa.
- **Sintaxis y semántica**: Los lenguajes de marcas utilizan etiquetas y atributos para identificar partes del contenido y sus propiedades, pero carecen de lógica de control, loops o funciones. En cambio, los lenguajes de programación tienen una sintaxis orientada a operaciones, variables, funciones, condiciones y bucles.
- **Interpretación**: Los documentos en lenguajes de marcas son procesados para mostrar, almacenar o transmitir la información, mientras que los programas en lenguajes de programación son ejecutados para realizar cálculos y tareas específicas.

## Ámbitos de aplicación

Los lenguajes de marcas tienen una amplia variedad de aplicaciones, entre las que destacan:

- **Documentación electrónica**: Como Markdown, LaTeX o DocBook, para redactar textos, informes, libros o artículos donde la estructura del documento es clave.
- **Tecnologías web**: HTML, XHTML y XML permiten la creación, estructuración e intercambio de páginas web y datos entre servidores y navegadores.
- **Multimedia**: Lenguajes como SVG para gráficos vectoriales, MusicXML para partituras musicales, o VoiceXML para interacción por voz.
- **Configuración y serialización de datos**: Formatos como JSON, YAML o TOML, aunque no son lenguajes de marcas per se, están relacionados por su función de estructurar información para ser compartida entre aplicaciones.

## Estructura de un lenguaje de marcas

Todo lenguaje de marcas está definido en un documento denominado [**DTD**](https://es.wikipedia.org/wiki/Definici%C3%B3n_de_tipo_de_documento) (*Document Type Definition*). En él se establecen:

- Marcas: los elementos utilizados por dicho lenguaje  
- Etiquetas y atributos  
- Sintaxis  
- Normas de uso

:::note[Ejemplo]

Supongamos que tenemos la siguinete información:

```plaintext
22/11/2006
Estimado cliente:
bla bla bla bla ...
Don José Gutiérrez González
```

El aspecto de un documento realizado en un lenguaje de marcas es el siguiente:

```xml
<carta>
  <fecha>22/11/2006</fecha>
  <presentacion>Estimado cliente:</presentacion>
  <contenido>bla bla bla bla ...</contenido>
  <firma>Don José Gutiérrez González</firma>
</carta>
```

:::

## Tipos de lenguajes de marcas

En la práctica, en un mismo documento pueden combinarse varios tipos diferentes de lenguajes de marcas.

Los lenguajes de marcas se pueden clasificar como sigue:

- **De presentación**: define el formato del texto.  
- **De procedimientos**: orientado también a la presentación pero, en este caso, el programa que representa el documento debe interpretar el código en el mismo orden en que aparece.  
- **Descriptivo** o **semántico**: describen las diferentes partes en las que se estructura el documento pero sin especificar cómo deben representarse.

## Ámbitos de aplicación

A continuación, se muestran algunos ejemplos de lenguajes de marcado agrupados por su ámbito de utilización.

### Documentación electrónica

- [**Markdown**](https://es.wikipedia.org/wiki/Markdown): creado en 2004, es un lenguaje de marcado ligero ampliamente en la actualidad, especialmente en el ámbito de desarrollo de software.  
- [**RTF**](https://es.wikipedia.org/wiki/Rich_Text_Format) (*Rich Text Format*) o *Formato de Texto Enriquecido*: fue desarrollado por Microsoft en 1987\. Permite el intercambio de documentos de texto entre distintos procesadores de texto.  
- [**TeX**](https://es.wikipedia.org/wiki/TeX) (*Text EXecutive processor*): su objetivo es la creación de ecuaciones matemáticas complejas.  
- [**Wikitexto**](https://es.wikipedia.org/wiki/Wikitexto): permite la creación de páginas wiki en servidores preparados para soportar este lenguaje.  
- [**DocBook**](https://es.wikipedia.org/wiki/DocBook): permite generar documentos separando la estructura lógica del documento de su formato. De este modo, dichos documentos, pueden publicarse en diferentes formatos sin necesidad de realizar modificaciones en el documento original.

### Tecnologías de Internet

- [**HTML**](https://es.wikipedia.org/wiki/HTML) (*Hypertext Markup Language*): uno de los más populares con diferencia. Su objetivo es la creación de páginas web.  
- [**XHTML**](https://es.wikipedia.org/wiki/XHTML) (*eXtensible Hypertext Markup Language*): es idéntico a HTML, pero expresado de otra forma (representado como XML válido).  
- [**RSS**](https://es.wikipedia.org/wiki/RSS) (*Really Simple Syndication*): permite la difusión de contenidos web. Utilizado por agregadores de noticias para extraer la información de diferentes medios de comunicación, blogs, portales de información, etc.

### Multimedia

- [**SVG**](https://es.wikipedia.org/wiki/Gr%C3%A1ficos_vectoriales_escalables) (*Scalable Vector Graphics*): permite definir gráficos vectoriales de dos dimensiones y soporta animación.  
- [**VoiceXML**](https://en.wikipedia.org/wiki/VoiceXML) (*Voice Extended Markup Language*): tiene como objetivo el intercambio de información entre un usuario y una aplicación con capacidad de reconocimiento de habla.  
- [**MusicXML**](https://es.wikipedia.org/wiki/Musicxml) (*Music Extended Markup Language*): permite el intercambio de partituras entre distintos editores de partituras.

### Otras aplicaciones

- [**MathML**](https://es.wikipedia.org/wiki/MathML) (*Mathematical Markup Language*): su objetivo es expresar el formalismo matemático de tal modo que pueda ser entendido por distintos sistemas y aplicaciones.  
