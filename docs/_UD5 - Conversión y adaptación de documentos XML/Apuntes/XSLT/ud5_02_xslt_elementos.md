# Introducción a los elementos XSLT

Dentro de una hoja XLST podemos distinguir los siguientes tres elementos:

- **Elementos XSLT**: se utilizan para definir las **reglas de transformación XSLT**. Están precedidos del prefijo `xsl:` y pertenecen al espacio de nombres `xsl`. Están definidos en el estándar del lenguaje y son interpretados por cualquier procesador XSLT.
- **Elementos LRE (Literal Result Element)**: un elemento de resultado literal es un elemento que no pertenece a XSLT, sino que se repite literalmente en la salida.
- **Elementos de extensión**: al igual que los anteriores, no pertenecen al espacio de nombres `xsl` ya que son manejados por implementaciones concretas del procesador. Estos normalmente no son usados.

## Elemento XSLT raíz

Una hoja XSL puede tener dos tipos de elementos XSLT raíz:

- `stylesheet`
- `transform`

Ambos elementos son **equivalentes** y **no pueden aparecer simultáneamente** (ya que no es posible tener más de un elemento raíz).

## Tipos de elementos

Los elementos XSLT que aparecen dentro del elemento XSLT raíz se pueden dividir en dos tipos:

- **Elementos de nivel superior**: son hijos directos de stylesheet o transform.
- **Instrucciones**: están contenidas dentro de elementos de nivel superior.

## Elementos de Nivel Superior

### `stylesheet` / `transform`

**Categoría**: Elemento raíz

Son los elementos raíz de una hoja XSLT. Ambos son equivalentes y definen el contenedor principal de la transformación. El elemento `stylesheet` es más antiguo, mientras que `transform` es la nomenclatura moderna.

**Atributos principales**:

- `version`: versión de XSLT (obligatorio, p. ej., "1.0", "2.0")
- `xmlns:xsl`: declaración del espacio de nombres XSLT
- `exclude-result-prefixes`: prefijos a excluir del resultado

**Ejemplo**:

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Contenido de la hoja XSLT -->
</xsl:stylesheet>
```

Cuando un elemento `stylesheet`o `transform`está vacío, la transformación consiste en la extracción de todos los datos de los nodos del documento XML de entrada, copiándolos tal cual al documento de salida (los atributos no se copian). Por ejemplo, para el siguiente documento XML de entrada:

```xml
<libros>
  <libro>
    <titulo>Aprendiendo XSLT</titulo>
    <autor>Juan Pérez</autor>
  </libro>
  <libro>
    <titulo>XML Avanzado</titulo>
    <autor>Ana Gómez</autor>
  </libro>
</libros>
```

La transformación con una hoja XSLT vacía produciría el siguiente documento de salida:

```xml
<?xml version="1.0" encoding="UTF-8"?>
  
    Aprendiendo XSLT
    Juan Pérez
  
  
    XML Avanzado
    Ana Gómez
  
```

Como podemos ver, el documento de salida está formado por la declaración XML seguida del contenido de los nodos del documento de entrada, sin etiquetas ni atributos (se respetan incluso los espacios en blanco y saltos de línea).

### output

Define las características del documento de salida (formato, codificación, etc.). Controla cómo se genera el resultado de la transformación. Al ser un elemento de nivel superior, debe ir como hijo directo del elemento raíz (`stylesheet` o `transform`).

**Atributos principales**:

- `method`: tipo de salida ("xml", "html", "text"). Por defecto, el valor es `"xml"`.
- `version`: versión del formato de salida (p. ej., "1.0" para XML). solo aplicable si `method="xml"` o `method="html"`
- `encoding`: codificación del documento (p. ej., "UTF-8")
- `indent`: sangrado automático ("yes" o "no")
- `omit-xml-declaration`: omitir declaración XML ("yes" o "no" (por defecto "no"))
- `standalone`: valor del atributo `standalone` en la declaración XML de salida ("yes" o "no")
- `doctype-public` y `doctype-system`: permite establecer el valor del atributo `PUBLIC` y `SYSTEM` de la declaración DOCTYPE en el documento de salida (solo aplicable si `method="xml"` o `method="html"`)
- `cdata-section-elements`: lista de elementos cuyos contenidos deben ser tratados como secciones CDATA en la salida
- `indent`: especifica si el resultado debe estar indentado para mejorar su legibilidad ("yes" o "no")
- `media-type`: especifica el tipo MIME del documento de salida (p. ej., "text/xml", "text/html")

Todos los atributos son **opcionales**.

#### Ejemplos

Un ejemplo de uso de `xsl:output` para generar un documento XML con codificación UTF-8, con sangrado y sin omitir la declaración XML sería:

```xml
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" encoding="UTF-8" indent="yes" omit-xml-declaration="no"/>
  <!-- Resto de la hoja XSLT -->
</xsl:stylesheet>
```

Otro ejemplo para obtener un documento `HTML` con codificación `ISO-8859-1`, sin sangrado y omitiendo la declaración XML sería:

```xml
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="ISO-8859-1" indent="no" omit-xml-declaration="yes"/>
  <!-- Resto de la hoja XSLT -->
</xsl:stylesheet>
```

Para obtener un documento de texto plano, se podría usar:

```xml
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="text" encoding="UTF-8"/>
  <!-- Resto de la hoja XSLT -->
</xsl:stylesheet>
```

### import

Importa las reglas y definiciones de otra hoja XSLT. Las reglas importadas tienen menor prioridad que las de la hoja principal. Debe aparecer al principio de la hoja.

**Atributos principales**:

- `href`: ruta del archivo XSLT a importar

**Ejemplo**:

```xml
<xsl:import href="comunes.xsl"/>
```

:::note
Existe también `xsl:include`, que funciona de forma similar pero las reglas incluidas tienen la misma prioridad que las locales.
:::

### template

Define una plantilla de transformación que se aplica a nodos específicos del documento XML de entrada. Es uno de los elementos más importantes en XSLT.

**Atributos principales**:

- `match`: expresión **XPath** para identificar los nodos (p. ej., "//libro")
- `name`: nombre de la plantilla (para llamadas directas)
- `mode`: modo para diferenciar múltiples plantillas para el mismo nodo
- `priority`: prioridad de la plantilla

**Ejemplo**:

```xml
<xsl:template match="//libro">
  <libro>
    <titulo><xsl:value-of select="titulo"/></titulo>
  </libro>
</xsl:template>
```

### decimal-format

**Categoría**: Elemento de nivel superior

**Descripción**:

Define el formato de números decimales para la función `format-number()`. Permite personalizar separadores de miles, decimales, etc.

**Atributos principales**:

- `name`: nombre del formato
- `decimal-separator`: carácter separador decimal (defecto: ".")
- `grouping-separator`: carácter separador de miles (defecto: ",")

**Ejemplo**:

```xml
<xsl:decimal-format name="europeano" decimal-separator="," grouping-separator="."/>
```

### attribute-set

**Categoría**: Elemento de nivel superior

**Descripción**:

Define conjuntos de atributos reutilizables que se pueden aplicar a múltiples elementos.

**Atributos principales**:

- `name`: nombre del conjunto de atributos

**Ejemplo**:

```xml
<xsl:attribute-set name="estiloTitulo">
  <xsl:attribute name="class">titulo</xsl:attribute>
  <xsl:attribute name="style">color: blue;</xsl:attribute>
</xsl:attribute-set>
```

---

## Instrucciones (Elementos de Control)

### apply-templates

**Descripción**:

Aplica plantillas a los nodos hijo del contexto actual. Es el mecanismo principal para procesar recursivamente el árbol XML.

**Atributos principales**:

- `select`: expresión XPath para seleccionar nodos (defecto: nodos hijo)
- `mode`: modo de la plantilla a aplicar

**Ejemplo**:

```xml
<xsl:apply-templates select="libro"/>
```

### value-of

**Descripción**:

Extrae el valor de texto de un nodo y lo añade al resultado. Realiza la conversión a string automáticamente.

**Atributos principales**:

- `select`: expresión XPath del nodo (obligatorio)
- `disable-output-escaping`: no escapar caracteres especiales ("yes" o "no")

**Ejemplo**:

```xml
<titulo><xsl:value-of select="titulo"/></titulo>
```

### copy-of

**Descripción**:

Copia nodos completos del documento de entrada al resultado, incluyendo atributos e hijos.

**Atributos principales**:

- `select`: expresión XPath de los nodos a copiar (obligatorio)

**Ejemplo**:

```xml
<xsl:copy-of select="metadatos/*"/>
```

### for-each

**Descripción**:

Itera sobre un conjunto de nodos seleccionados, aplicando el mismo procesamiento a cada uno. Útil para procesar listas de elementos.

**Atributos principales**:

- `select`: expresión XPath de los nodos a iterar (obligatorio)

**Ejemplo**:

```xml
<xsl:for-each select="libro">
  <elemento><xsl:value-of select="titulo"/></elemento>
</xsl:for-each>
```

### if

**Descripción**:

Evaluación condicional simple. Procesa su contenido solo si la condición es verdadera.

**Atributos principales**:

- `test`: expresión XPath que se evalúa (obligatorio)

**Ejemplo**:

```xml
<xsl:if test="precio > 20">
  <caro><xsl:value-of select="titulo"/></caro>
</xsl:if>
```

:::note
Para múltiples condiciones, usar `xsl:choose`.
:::

### choose

**Descripción**:

Evaluación condicional múltiple (similar a switch/case). Contiene múltiples ramas `when` y una rama `otherwise`.

**Estructura**:

- `when`: condiciones alternativas
- `otherwise`: rama por defecto (opcional)

**Ejemplo**:

```xml
<xsl:choose>
  <xsl:when test="precio > 50">Muy caro</xsl:when>
  <xsl:when test="precio > 20">Moderado</xsl:when>
  <xsl:otherwise>Barato</xsl:otherwise>
</xsl:choose>
```

### sort

**Descripción**:

Ordena nodos dentro de `apply-templates` o `for-each` según criterios específicos. Debe aparecer como primer hijo de estos elementos.

**Atributos principales**:

- `select`: expresión XPath a ordenar (defecto: el nodo mismo)
- `order`: "ascending" (defecto) o "descending"
- `data-type`: "text" (defecto), "number"
- `case-order`: "upper-first" o "lower-first"

**Ejemplo**:

```xml
<xsl:for-each select="libro">
  <xsl:sort select="precio" data-type="number" order="descending"/>
  <titulo><xsl:value-of select="titulo"/></titulo>
</xsl:for-each>
```

### call-template

**Descripción**:

Llama a una plantilla por nombre, pasándole parámetros. Permite reutilizar bloques de transformación.

**Atributos principales**:

- `name`: nombre de la plantilla a llamar (obligatorio)

**Contiene**:

- `with-param`: parámetros a pasar a la plantilla

**Ejemplo**:

```xml
<xsl:call-template name="formatoTitulo">
  <xsl:with-param name="texto" select="titulo"/>
</xsl:call-template>
```

### variable

**Descripción**:

Define variables locales que se pueden usar dentro del contexto actual. Son inmutables una vez asignadas.

**Atributos principales**:

- `name`: nombre de la variable (obligatorio)
- `select`: expresión XPath con el valor (alternativa a contenido)

**Ejemplo**:

```xml
<xsl:variable name="precioBase" select="100"/>
<xsl:variable name="resultado">
  <valor><xsl:value-of select="$precioBase * 1.21"/></valor>
</xsl:variable>
```

### param

**Descripción**:

Define parámetros de entrada en plantillas o en la hoja XSLT. Pueden tener valores por defecto.

**Atributos principales**:

- `name`: nombre del parámetro (obligatorio)
- `select`: valor por defecto

**Ejemplo**:

```xml
<xsl:template name="saludo">
  <xsl:param name="nombre">Usuario</xsl:param>
  <saludo>Hola, <xsl:value-of select="$nombre"/></saludo>
</xsl:template>
```

### with-param

**Descripción**:

Paso de parámetros a plantillas llamadas con `call-template` o `apply-templates`. Los valores se asignan a los parámetros definidos con `param`.

**Atributos principales**:

- `name`: nombre del parámetro (obligatorio)
- `select`: valor a pasar

**Ejemplo**:

```xml
<xsl:call-template name="formatear">
  <xsl:with-param name="estilo">negrita</xsl:with-param>
</xsl:call-template>
```

### attribute

**Descripción**:

Crea un atributo en el elemento de salida. Se usa para generar atributos dinámicamente.

**Atributos principales**:

- `name`: nombre del atributo (obligatorio)
- `namespace`: espacio de nombres del atributo (opcional)

**Ejemplo**:

```xml
<elemento>
  <xsl:attribute name="id"><xsl:value-of select="@id"/></xsl:attribute>
  Contenido
</elemento>
```

---

## Resumen de Clasificación

| Elemento | Tipo | Propósito |
|----------|------|----------|
| **stylesheet/transform** | Raíz | Contenedor principal de XSLT |
| **output** | Nivel superior | Configuración del documento de salida |
| **import** | Nivel superior | Importar reglas de otras hojas |
| **template** | Nivel superior | Definir reglas de transformación |
| **decimal-format** | Nivel superior | Formato de números |
| **attribute-set** | Nivel superior | Conjuntos de atributos reutilizables |
| **apply-templates** | Instrucción | Aplicar plantillas a nodos |
| **value-of** | Instrucción | Extraer valor de texto |
| **copy-of** | Instrucción | Copiar nodos |
| **for-each** | Instrucción | Iterar sobre nodos |
| **if** | Instrucción | Condicional simple |
| **choose** | Instrucción | Condicional múltiple |
| **sort** | Instrucción | Ordenar nodos |
| **call-template** | Instrucción | Llamar plantilla por nombre |
| **variable** | Instrucción | Definir variables |
| **param** | Instrucción | Definir parámetros |
| **with-param** | Instrucción | Pasar parámetros |
| **attribute** | Instrucción | Crear atributos dinámicos |

---

## Elementos Relacionados No Incluidos

:::tip[Información adicional]

Además de los elementos listados, existen otros elementos XSLT útiles en contextos específicos:

- **`xsl:text`**: Para incluir texto literal (útil para preservar espacios en blanco)
- **`xsl:copy`**: Copia el nodo actual sin sus hijos
- **`xsl:element`**: Crea elementos con nombres dinámicos
- **`xsl:comment`**: Genera comentarios HTML/XML
- **`xsl:processing-instruction`**: Crea instrucciones de procesamiento
- **`xsl:namespace-alias`**: Mapea espacios de nombres
- **`xsl:key`**: Define claves para búsquedas eficientes
- **`xsl:message`**: Envía mensajes (útil en depuración)

Estos elementos se cubren en secciones más avanzadas del curso.

:::