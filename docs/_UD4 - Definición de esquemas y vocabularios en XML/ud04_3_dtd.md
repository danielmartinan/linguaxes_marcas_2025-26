# DTD

Un DTD (Document Type Definition) es un conjunto de reglas y especificaciones que define la estructura y el contenido de un documento XML. Se utiliza para validar un documento XML, es decir, para verificar que cumple con un esquema específico.

Al igual que ocurre con los documentos XML, los documentos DTD son **ficheros de texto plano**. Deben tener la extensión `.dtd` y se pueden crear y modificar con cualquier editor de texto.

El uso de DTD es **opcional**, pero es **recomendable** para garantizar la interoperabilidad de los documentos XML entre diferentes sistemas y aplicaciones, ya que proporciona una forma estandarizada de describir la estructura de un documento XML.

Un documento DTD tiene el siguiente aspecto:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!ELEMENT email (date, to, from)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT date (#PCDATA)>
```

## Características

Un DTD especifica la estructura y la organización de un documento XML, incluyendo:

- La **jerarquía** de los elementos.
- El **orden** de los elementos.
- El **tipo** de contenido permitido para los elementos.
- Los **atributos** asociados a cada elemento.
- **Integridad referencial**.

Se trata de una especie de plano o esquema que describe cómo tiene que ser un documento XML para ser considerado válido y estar correctamente estructurado.

## Limitaciones

DTD es un lenguaje sencillo y fácil de usar, pero con ciertas limitaciones. Las principales son:

- Su sintaxis no es XML.
- No soportan espacios de nombres.
- No definen tipos para los datos.
- No permite las secuencias no ordenadas.
- No es posible formar claves a partir de varios atributos o elementos.
- Una vez que se define un DTD, no es posible añadir nuevos vocabularios.

A pesar de estas limitaciones, DTD sigue siendo una herramienta útil para definir la estructura de documentos XML en muchos casos. Sin embargo, para aplicaciones más complejas, se recomienda utilizar XML Schema (XSD), que ofrece una mayor flexibilidad y capacidad para definir esquemas XML. Es por ello que no profundizaremos más en DTD en esta unidad.