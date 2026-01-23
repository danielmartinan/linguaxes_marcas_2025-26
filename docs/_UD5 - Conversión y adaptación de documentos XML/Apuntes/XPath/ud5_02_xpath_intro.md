# XPath

## Introducción

[XPath](https://www.w3.org/TR/xpath/) es un estándar (diferente de XML) aprobado por el W3C, que permite **navegar** entre los **elementos** y **atributos** de un documento XML. Para hacerlo, se basa en las **relaciones de parentesco** entre los nodos del documento.

Inicialmente se creó para ser utilizado con XLST, pero en la actualidad se utiliza también con las siguientes tecnologías (entre otras):

- XML Schema
- XQuery
- XLink
- XPointer
- XForms

## Versiones

Existen un total de cuatro versiones del estándar de XPath:

| Versión del estándar | Año de publicación |
|---------------------|--------------------|
| XPath 1.0           | 1999               |
| XPath 2.0           | 2010               |
| XPath 3.0           | 2014               |
| XPath 3.1           | 2017               |

## Expresiones de camino

XPath se usa definiendo **expresiones de camino** (paths) para **seleccionar nodos o conjuntos de nodos** en un documento XML.

Esas expresiones se parecen mucho a las expresiones que se suelen usar para indicar rutas en los sistemas de ficheros. Estas expresiones se aplican a un documento XML, asumiendo que su estructura interna es la de un árbol. Al aplicar una expresión, se obtiene un conjunto de nodos (que puede ser vacío).

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<matriculas>
  <alumno>
    <nombre>Pedro</nombre>
    <apellidos>
      <apellido>López</apellido>
      <apellido>Ortega</apellido>
    </apellidos>
    <dni pais="es">11112222A</dni>
  </alumno>
  <alumno>
    <nombre>Ana</nombre>
    <apellidos>
      <apellido>García</apellido>
      <apellido>Martínez</apellido>
    </apellidos>
    <dni>33334444B</dni>
  </alumno>
</matriculas>
```

Una expresión de camino podría ser la siguiente:

```xml
/matriculas/alumno/nombre
```

Al evaluar la expresión anterior, obtendríamos como resultado los siguientes elementos:

```xml
<nombre>Pedro</nombre>
<nombre>Ana</nombre>
```

Consideremos, ahora, la siguiente expresión:

```xml
/matriculas/alumno/dni[@pais]
```

En este caso, tras su evaluación, obtendríamos como resultado el siguiente elemento:

```xml
<dni pais="es">11112222A</dni>
```

En los siguientes apartados se describen con más detalle las expresiones de camino y su sintaxis.

## Aplicación de XPath

XPath es una herramienta fundamental en el procesamiento de documentos XML. No es un lenguaje completo de programación, sino un **lenguaje de consulta** (*query language*) que permite localizar información específica dentro de estructuras XML de forma precisa y eficiente. Veamos para qué se utiliza y en qué contextos es especialmente útil.

### ¿Para qué sirve XPath?

XPath resuelve un problema fundamental en el procesamiento de XML: **¿Cómo accedo a un elemento o grupo de elementos específicos dentro de un documento XML sin tener que analizar todo el documento?**

Sin XPath, si necesitaras acceder al título del segundo libro de una biblioteca XML, tendrías que:

1. Cargar todo el documento XML en memoria
2. Iterar manualmente por todos los elementos
3. Contar hasta el segundo `<libro>`
4. Acceder a su elemento `<titulo>`

Con XPath, simplemente escribes una expresión que especifica exactamente lo que quieres:

```xpath
/biblioteca/libro[2]/titulo
```

Este es el propósito principal de XPath: **simplificar y estandarizar la forma de navegar y seleccionar datos en documentos XML**.

### Contextos de uso de XPath

#### 1. Transformaciones XSLT

Este es el **uso original y principal** de XPath. XSLT (eXtensible Stylesheet Language Transformations) utiliza XPath para:

- Seleccionar qué elementos transformar
- Navegar entre elementos relacionados
- Aplicar condiciones y filtros

**Ejemplo:**

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <!-- Usa XPath para seleccionar todos los libros con precio < 20 -->
        <xsl:for-each select="//libro[precio &lt; 20]">
          <p>
            <xsl:value-of select="titulo"/>: 
            <xsl:value-of select="precio"/>€
          </p>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

En este ejemplo, `//libro[precio < 20]` es una expresión XPath que selecciona solo los libros que cumplen la condición.

#### 2. Validación con XML Schema (XSD)

XML Schema utiliza XPath para definir restricciones complejas en documentos XML. Por ejemplo, puede especificar que ciertos valores sean únicos o que existan referencias entre elementos.

**Contexto de uso:**

```xml
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <!-- Asegurar que los IDs de estudiante sean únicos -->
  <xs:key name="idEstudiante">
    <xs:selector xpath=".//estudiante"/>
    <xs:field xpath="@id"/>
  </xs:key>
  
  <!-- Asegurar que las referencias de estudiante sean válidas -->
  <xs:keyref name="refEstudiante" refer="idEstudiante">
    <xs:selector xpath=".//inscripcion"/>
    <xs:field xpath="@idEstudiante"/>
  </xs:keyref>
</xs:schema>
```

#### 3. Consultas XQuery

XQuery es un lenguaje de consulta para XML, similar a SQL para bases de datos relacionales. XPath forma parte fundamental de XQuery.

**Ejemplo de consulta XQuery:**

```xquery
(: Encontrar todos los libros de un autor específico publicados después de 2015 :)
let $autor := "García Márquez"
for $libro in //libro
where $libro/autor = $autor and xs:integer($libro/año) > 2015
return <resultado>{$libro/titulo/text()}</resultado>
```

#### 4. Programación (APIs de XML)

Muchos lenguajes de programación proporcionan APIs que utilizan XPath para acceder a datos XML de forma programática.

**Ejemplo en Python:**

```python
from lxml import etree

# Cargar documento XML
doc = etree.parse('biblioteca.xml')

# Usar XPath para encontrar todos los títulos de libros caros
titulos = doc.xpath('//libro[precio > 30]/titulo/text()')
for titulo in titulos:
    print(titulo)
```

**Ejemplo en JavaScript:**

```javascript
// Cargar documento XML
const xmlDoc = new XMLHttpRequest();
xmlDoc.open("GET", "biblioteca.xml", false);
xmlDoc.send();
const doc = xmlDoc.responseXML;

// Usar XPath para encontrar libros de un año específico
const resultado = doc.evaluate(
  "//libro[año = '2020']",
  doc,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);

for (let i = 0; i < resultado.snapshotLength; i++) {
  console.log(resultado.snapshotItem(i).textContent);
}
```

#### 5. Scraping web y extracción de datos

Cuando se necesita extraer datos de documentos HTML o XML, XPath (junto con tecnologías como Selenium o BeautifulSoup) es la herramienta ideal.

**Ejemplo de extracción de datos:**

Supongamos que tienes un documento con información de productos:

```xml
<?xml version="1.0"?>
<tienda>
  <producto>
    <nombre>Laptop</nombre>
    <precio>899.99</precio>
    <stock>5</stock>
    <disponible>sí</disponible>
  </producto>
  <producto>
    <nombre>Monitor</nombre>
    <precio>299.99</precio>
    <stock>0</stock>
    <disponible>no</disponible>
  </producto>
</tienda>
```

Con XPath puedes extraer fácilmente:

```xpath
# Productos disponibles
//producto[disponible='sí']

# Nombres de productos caros
//producto[precio > 500]/nombre

# Stock total de productos disponibles
sum(//producto[disponible='sí']/stock)
```

#### 6. Web Services y APIs

En web services basados en XML (como SOAP), XPath se utiliza para procesar respuestas y extraer datos específicos.

**Ejemplo conceptual:**

Un cliente realiza una solicitud SOAP a un servicio meteorológico:

```xml
<!-- Respuesta SOAP -->
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetWeatherResponse xmlns="http://www.ejemplo.com/weather">
      <ciudades>
        <ciudad>
          <nombre>Madrid</nombre>
          <temperatura>15</temperatura>
          <condicion>Parcialmente nublado</condicion>
        </ciudad>
        <ciudad>
          <nombre>Barcelona</nombre>
          <temperatura>18</temperatura>
          <condicion>Soleado</condicion>
        </ciudad>
      </ciudades>
    </GetWeatherResponse>
  </soap:Body>
</soap:Envelope>
```

Con XPath, el cliente puede extraer específicamente lo que necesita:

```xpath
# Temperatura de Madrid
//ciudad[nombre='Madrid']/temperatura

# Todas las ciudades con condición soleada
//ciudad[condicion='Soleado']/nombre
```

### Ventajas de usar XPath

| Ventaja | Descripción |
|---------|-------------|
| **Estándar W3C** | Es un estándar oficial, lo que garantiza compatibilidad entre diferentes lenguajes y plataformas |
| **Sintaxis simple** | Las expresiones son relativamente fáciles de escribir y entender, similar a las rutas de directorios |
| **Flexibilidad** | Permite tanto rutas absolutas como relativas, búsquedas recursivas y complejos criterios de filtrado |
| **Eficiencia** | Puede optimizar la navegación sin procesar todo el documento |
| **Potencia** | A pesar de su simplicidad, permite expresiones muy complejas con funciones integradas |
| **Amplio soporte** | Disponible en prácticamente todos los lenguajes de programación y herramientas XML |

### Limitaciones de XPath

Aunque XPath es muy potente, tiene algunas limitaciones:

- **No es Turing-completo**: No es suficiente para programación general compleja
- **No puede modificar documentos**: Solo permite consultar, no crear o modificar XML (para esto se usa XQuery Update)
- **No tiene soporte para búsquedas de texto completo**: Las búsquedas son básicas, sin capacidades de tokenización o análisis lingüístico
- **Performance en documentos muy grandes**: Puede ser lento en documentos XML extremadamente grandes sin optimizaciones

Para estos casos, se utilizan herramientas complementarias o lenguajes más completos como XQuery o XSLT.

### Conclusión

XPath es una herramienta esencial en el ecosistema XML, indispensable para cualquier desarrollo que involucre procesamiento de documentos estructurados. Su sintaxis intuitiva y su capacidad para expresar consultas complejas la hacen ideal tanto para principiantes como para usuarios avanzados.

En los siguientes apartados, profundizaremos en la sintaxis de las expresiones XPath, los diferentes tipos de nodos, y cómo construir consultas efectivas para extraer la información que necesitas de tus documentos XML.