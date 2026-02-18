# XSLT

**XSLT** (Extensible Stylesheet Language Transformations) es un **lenguaje** estandarizado por el W3C y utilizado para **transformar documentos XML a otros formatos**, como HTML, PDF, CSV, entre otros.

El estándar XSLT cuenta con múltiples versiones, siendo la versión **2.0 la última publicada**, en el año 2021.

Los documentos XML son documentos de texto con etiquetas, que contienen exclusivamente información, sin entrar en detalles de formato. Si queremos usar directamente los datos (para leer, imprimir, etc.), es necesario transformar previamente el documento XML.

Para realizar las transformaciones, se utilizan unas reglas definidas previamente que especifican cómo se deben **extraer**, **procesar** y **organizar** los datos del documento XML (**origen**) en el nuevo documento (**destino**).

## Transformación de documentos

El proceso de transformación XSLT consiste en la conversión de un documento XML a otro formato diferente. Esta conversión es llevada a cabo por un procesador XSLT.

![alt text](/img/linguaxes-marcas/ud5/xslt_process.png)

Algunas tecnologías de la familia de XML que entran en juego en el proceso de transformación de documentos son:

- **XSLT** (Extensible Stylesheet Language Transformations): permite definir el modo de transformar un documento XML en otro.
- **XPath** (XML Path Language): permite acceder a los diversos componentes de un documento XML, es decir, nos permite recorrer el árbol DOM (Document Object Model) de un fichero XML.
- **XSL-FO** (XSL Formatting Object): se trata de un vocabulario XML que permite transformar un documento XML en otro documento que tenga un formato legible e imprimible. Por ejemplo, en un documento PDF.

## Hojas de Estilo XSLT

Los documentos que recogen las reglas de transformación XSLT se denominan **hojas XSL**. Al igual que ocurre con los documentos XML, DTD o XSD, las hojas XSL son **ficheros de texto plano**, es decir, se pueden crear y modificar con cualquier editor de texto. Deben tener la extensión .xsl.

XSLT es uno de los lenguajes derivados de XML, por tanto las hojas **XSL también son documentos XML** (al igual que sucede con RSS, Atom o XSD).

### Vincular una hoja XSL

Para realizar una transformación, es necesario **vincular una hoja XSLT a un documento XML**. Para ello, es necesario incluir una línea como la que sigue:

```xml
<?xml-stylesheet type="text/xsl" href="hoja.xsl"?>
```

Esta línea debe ir incluida en el documento XML, **después del prólogo**.

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE agenda SYSTEM "agenda.dtd">
<?xml-stylesheet type="text/xsl" href="agenda.xsl"?>
<agenda>
  <persona id="p01">
    <identificadores>
      <nombre>Inés</nombre>
      <apellidos>López Pérez</apellidos>
    </identificadores>
    <direccion>
      <calle>El Ranchito 24, 6B</calle>
      <localidad>Santander</localidad>
      <cp>39006</cp>
    </direccion>
    <telefonos>
      <movil>970123123</movil>
    </telefonos>
  </persona>
</agenda>
```
