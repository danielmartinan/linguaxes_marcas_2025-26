# Herramientas para trabajar con XPath

## Introducción

XPath se utiliza ampliamente en el desarrollo y procesamiento de documentos XML. Para facilitar el aprendizaje, depuración y uso profesional de XPath, existen numerosas herramientas tanto online como de escritorio. Estas herramientas permiten probar expresiones XPath de forma interactiva, ver resultados en tiempo real y comprender mejor cómo funcionan las consultas.

En esta sección exploraremos diferentes tipos de herramientas:

- **Herramientas online**: Perfectas para pruebas rápidas sin instalación
- **Editores y extensiones**: Para integración en el flujo de trabajo
- **Aplicaciones de escritorio**: Para proyectos más complejos
- **Navegadores web**: Con herramientas de desarrollo integradas

## Herramientas Online

### XPath Tester (Code Beautify)

**URL**: [https://codebeautify.org/Xpath-Tester](https://codebeautify.org/Xpath-Tester)

**Características**:

- Interfaz simple e intuitiva
- Soporta XPath 1.0 y 2.0
- Editor con resaltado de sintaxis para XML
- Resultados en tiempo real
- Posibilidad de cargar archivos XML
- Ejemplos predefinidos para aprender

**Ventajas**:

- No requiere registro
- Rápida para pruebas sencillas
- Buena para principiantes

**Uso recomendado**: Ideal para estudiantes y pruebas rápidas de expresiones XPath básicas.

**Ejemplo de uso**:

1. Copiar código XML en el panel izquierdo
2. Escribir expresión XPath en la caja de consulta
3. Ver resultados resaltados en el XML

:::warning[Limitaciones]
Algunas funciones de XPath podrían no estar soportadas, especialmente en versiones más recientes como XPath 3.x.
:::

### XPath 3.1 Online Tester

**URL**: [https://videlibri.de/cgi-bin/xidelcgi](https://videlibri.de/cgi-bin/xidelcgi)

Pattern matching / XPath 3.1 / XQuery 3.1 / CSS 3 Selector Online Tester es una aplicación web que permite probar expresiones XPath. Para su funcionamiento, necesita un documento XML y la expresión a evaluar. Además, debemos asegurarnos de tener seleccionada la opción XPath 3.1.

![alt text](/img/linguaxes-marcas/ud5/xpath3_1_online.png)

## Formato de salida

Para que la salida se formatee correctamente, debemos tener seleccionada la siguiente opción:

![alt text](/img/linguaxes-marcas/ud5/xpath3_1_output.png)

De esta forma, por ejemplo, se mostrará una salida diferente para /elemento o /elemento/text().

:::warning[Limitaciones]
Cuando tenemos una expresión XPath donde recuperamos un atributo, si está seleccionado el valor `xml` en la opción *Node format*, los valores de los atributos no se mostrarán.

Por ejemplo, la siguiente expresión no mostrará nada con la opción xml:

```xpath
/persona/@id
```

Sin embargo, con la opción text sí que muestra la salida.

![alt text](/img/linguaxes-marcas/ud5/xpath3_1_attr_text.png)
:::

## Compatibilidad

De manera predefinida, la aplicación web cuenta con varias extensiones activadas que permiten añadir características adicionales que no son compatibles con el estándar XPath. Entre ellas se encuentra la insensibilidad a las mayúsculas y minúsculas, es decir, que no se diferencie entre mayúsculas y minúsculas. De esta forma, las siguientes dos expresiones XPath devolverían los mismos resultados:

```xpath
/coche[@tipo='Deportivo']
```

```xpath
/coche[@tipo='deportivo']
```

Cabe señalar que el estándar XPath 3.1 diferencia entre mayúsculas y minúsculas (case sensitive), por lo que si se desea obtener una salida conforme a dicho estándar, es necesario seleccionar la opción Standard XQuery en el menú desplegable Compatibility.

![alt text](/img/linguaxes-marcas/ud5/xpath3_1_compatibility.png)

### Free Formatter XPath Tester

**URL**: [https://www.freeformatter.com/xpath-tester.html](https://www.freeformatter.com/xpath-tester.html)

**Características**:

- Interfaz limpia y profesional
- Soporte para XPath 1.0 y 2.0
- Validación de XML antes de ejecutar consultas
- Formateo automático de XML
- Exportación de resultados

**Ventajas**:

- Herramientas adicionales integradas (formateo, validación)
- Sin límites de tamaño razonables
- Sin anuncios intrusivos

**Uso recomendado**: Para trabajo profesional que requiere validación y formateo adicional.

### Fonto

**Tipo**: Aplicación web para edición estructurada de XML

**Características**:

- Editor XML visual
- Soporte para XPath en consultas y validaciones
- Interfaz de usuario moderna
- Integración con esquemas XML

**Ventajas**:

- Enfoque visual para XML
- Buena para documentación técnica
- Flujo de trabajo profesional

**Limitaciones**:

- Más orientado a edición que a testing de XPath
- Requiere configuración inicial

**Uso recomendado**: Para equipos que trabajan con documentación XML estructurada y necesitan herramientas de edición avanzadas.

## Herramientas de Escritorio

### BaseX

**URL**: [https://basex.org/](https://basex.org/)

**Tipo**: Base de datos XML nativa con soporte completo de XPath y XQuery

**Características**:

- Motor de base de datos XML completo
- Soporte para XPath 3.1 y XQuery 3.1
- Interfaz gráfica (GUI) y línea de comandos
- Editor con autocompletado
- Visualización de resultados en múltiples formatos
- Servidor REST API
- Indexación y optimización de consultas

**Ventajas**:

- Herramienta profesional de código abierto
- Excelente rendimiento con documentos grandes
- Documentación completa
- Comunidad activa
- Gratuito y multiplataforma (Windows, Mac, Linux)

**Instalación**:

```bash
# Descargar desde https://basex.org/download/
# Ejecutar BaseX.jar
java -jar BaseX.jar
```

**Uso recomendado**: Para proyectos profesionales, aprendizaje avanzado de XPath/XQuery, y gestión de grandes colecciones de documentos XML.

Puedes revisar [este tutorial](https://www.youtube.com/watch?v=A1PpSBy-wz0) o [este otro](https://www.youtube.com/watch?v=P34QKHlUQho) (este último aborda otros conceptos que veremos más adelante) de introducción a BaseX.

### XMLSpy (Altova)

**URL**: [https://www.altova.com/xmlspy-xml-editor](https://www.altova.com/xmlspy-xml-editor)

**Tipo**: IDE profesional para XML (de pago)

**Características**:

- Editor XML completo
- Evaluador XPath integrado con depurador
- Soporte para XPath 3.1
- Autocompletado inteligente
- Visualización gráfica de resultados
- Generación de código

**Ventajas**:

- Herramienta profesional muy completa
- Excelente para desarrollo empresarial
- Soporte técnico

**Limitaciones**:

- Software comercial (caro)
- Puede ser excesivo para necesidades simples

**Uso recomendado**: Entornos corporativos con presupuesto para herramientas profesionales.

### Oxygen XML Editor

**URL**: [https://www.oxygenxml.com/](https://www.oxygenxml.com/)

**Tipo**: Editor XML profesional (de pago, con versión académica)

**Características**:

- Editor XML completo y potente
- XPath Builder visual
- Consola XPath con historial
- Soporte para XPath 3.1
- Depurador de XSLT con evaluación XPath
- Vista de resultados interactiva

**Ventajas**:

- Muy popular en entornos académicos
- Licencias educativas asequibles
- Excelente documentación
- Interfaz intuitiva

**Uso recomendado**: Ideal para estudiantes y profesionales que trabajan frecuentemente con XML/XSLT.

## Visual Studio Code (VSCode)

**URL**: [https://code.visualstudio.com/](https://code.visualstudio.com/)

Visual Studio Code es un editor de código gratuito y muy popular que se puede convertir en una excelente herramienta para trabajar con XPath mediante extensiones.

### Extensiones Recomendadas para XML/XPath

#### 1. XML Tools

**ID**: `DotJoshJohnson.xml`

**Características**:

- Formateo automático de XML
- Validación de sintaxis
- Evaluación de expresiones XPath
- Minificación de XML
- Conversión XML a texto

**Uso de XPath en XML Tools**:

1. Abrir un archivo XML en VSCode
2. Presionar `Ctrl+Shift+P` (Command Palette)
3. Buscar "XML Tools: Evaluate XPath"
4. Escribir expresión XPath
5. Ver resultados en panel de salida

**Ejemplo**:

```xml
<!-- Archivo: biblioteca.xml -->
<biblioteca>
  <libro>
    <titulo>El Quijote</titulo>
    <precio>25.50</precio>
  </libro>
</biblioteca>

<!-- Ejecutar XPath: //libro[precio > 20]/titulo -->
<!-- Resultado: <titulo>El Quijote</titulo> -->
```

#### 2. XSLT/XPath for Visual Studio Code

**ID**: `deltaxml.xslt-xpath`

**Características**:

- Resaltado de sintaxis XPath
- Autocompletado para funciones XPath
- Snippets para expresiones comunes
- Integración con transformaciones XSLT
- Navegación a definiciones

**Ventajas**:

- Gratuito y de código abierto
- Actualizado regularmente
- Buena integración con XSLT

#### 3. Red Hat XML Extension

**ID**: `redhat.vscode-xml`

**Características**:

- Validación XML con esquemas (XSD, DTD)
- Autocompletado basado en esquemas
- Formateo avanzado
- Soporte para namespaces
- Integración con Language Server Protocol

**Configuración**:

```json
// settings.json
{
  "xml.format.enabled": true,
  "xml.validation.enabled": true,
  "xml.validation.namespaces.enabled": "always"
}
```

### Configuración Recomendada de VSCode para XML/XPath

**settings.json**:

```json
{
  // Formateo XML
  "xml.format.enabled": true,
  "xml.format.splitAttributes": false,
  "xml.format.preserveSpace": ["xsl:text", "xsl:comment"],
  
  // Validación
  "xml.validation.enabled": true,
  
  // Extensión XML Tools
  "xmlTools.enforcePrettySelfClosingTagOnFormat": true,
  "xmlTools.splitXmlnsOnFormat": true,
  
  // Editor
  "editor.formatOnSave": true,
  "editor.minimap.enabled": true,
  
  // Asociaciones de archivos
  "files.associations": {
    "*.xsl": "xml",
    "*.xslt": "xml",
    "*.xpath": "xpath"
  }
}
```

### Flujo de Trabajo con VSCode

**Paso 1: Estructura de proyecto**

```
proyecto-xml/
├── data/
│   └── catalogo.xml
├── queries/
│   └── consultas.xpath
└── transformations/
    └── plantilla.xsl
```

**Paso 2: Trabajar con XML**

1. Abrir carpeta del proyecto en VSCode
2. Instalar extensiones recomendadas
3. Crear/abrir archivo XML
4. Usar `Alt+Shift+F` para formatear

**Paso 3: Probar expresiones XPath**

1. Abrir Command Palette (`Ctrl+Shift+P`)
2. Ejecutar "XML Tools: Evaluate XPath"
3. Escribir expresión
4. Ver resultados en Output panel

### Ventajas de VSCode para XPath

✅ **Gratuito y de código abierto**  
✅ **Ligero y rápido**  
✅ **Gran ecosistema de extensiones**  
✅ **Multiplataforma (Windows, Mac, Linux)**  
✅ **Integración con Git**  
✅ **Terminal integrada**  
✅ **Edición de múltiples archivos simultáneamente**  
✅ **Soporte para proyectos grandes**  
✅ **Actualización constante**  

### Limitaciones de VSCode para XPath

⚠️ **No es un IDE específico para XML** (menos especializado que Oxygen o XMLSpy)  
⚠️ **Depende de extensiones** (calidad variable)  
⚠️ **Funcionalidades XPath limitadas** comparadas con herramientas especializadas  
⚠️ **No tiene depurador XPath visual** como Oxygen  

### Cuándo usar VSCode para XPath

**✅ Usar VSCode cuando**:

- Trabajas en proyectos pequeños a medianos
- Necesitas editar XML junto con otros lenguajes
- Prefieres herramientas gratuitas
- Quieres un entorno ligero
- Ya usas VSCode para desarrollo

**❌ Preferir herramientas especializadas cuando**:

- Trabajas profesionalmente con XML/XSLT a diario
- Necesitas depuración avanzada de XSLT
- Trabajas con esquemas complejos
- Requieres validación empresarial
- Tienes presupuesto para software comercial

## Navegadores Web

### Firefox Developer Tools

**Características**:

- Consola JavaScript con evaluación XPath
- Inspección del DOM con XPath
- Función `$x()` en consola: evalúa expresiones XPath. Por ejemplo:

```javascript
$x("//tagname")
```

devuelve una lista de nodos con el nombre `tagname`.

**Uso**:

1. Abrir página web
2. Presionar `F12` (DevTools)
3. Ir a pestaña "Console"
4. Usar `$x("expresion-xpath")`

**Ejemplo**:

```javascript
// En la consola de Firefox/Chrome
$x("//h1")                    // Todos los h1
$x("//a[@href]")              // Todos los enlaces con href
$x("//div[@class='content']") // Divs con clase content
```

**Ventajas**:

- Ideal para web scraping y automatización
- Pruebas en documentos HTML reales
- Sin instalación adicional

### Chrome DevTools

**Características similares a Firefox**:

- Función `$x()` en consola
- Inspección del DOM
- Evaluación de expresiones XPath

**Uso adicional con extensiones**:

- **XPath Helper**: Extensión de Chrome para generar y probar XPath visualmente
- **ChroPath**: Generador de XPath/CSS selectors

## Comparativa de Herramientas

| Herramienta | Tipo | Precio | XPath Version | Mejor para |
|-------------|------|--------|---------------|------------|
| Code Beautify | Online | Gratis | 1.0, 2.0 | Principiantes, pruebas rápidas |
| XPath 3.1 Tester | Online | Gratis | 3.1 | Funciones avanzadas |
| BaseX | Desktop | Gratis | 3.1 | Proyectos profesionales, bases de datos XML |
| VSCode + ext | Desktop | Gratis | 2.0-3.1* | Desarrollo general, proyectos mixtos |
| Oxygen | Desktop | Pago | 3.1 | Educación, desarrollo XML profesional |
| XMLSpy | Desktop | Pago | 3.1 | Empresas, desarrollo complejo |
| Navegadores | Built-in | Gratis | 1.0 | Web scraping, HTML |

*Depende de la extensión instalada

## Ejercicios Prácticos

Para familiarizarse con las herramientas mencionadas, se proponen los siguientes ejercicios prácticos:

**Tarea**: Probar la misma consulta XPath en tres herramientas diferentes:

**XML de prueba**:

```xml
<tienda>
  <producto id="1">
    <nombre>Laptop</nombre>
    <precio>899.99</precio>
  </producto>
  <producto id="2">
    <nombre>Mouse</nombre>
    <precio>25.50</precio>
  </producto>
</tienda>
```

**Consulta**: `//producto[precio > 50]/nombre`

**Herramientas a probar**:

1. Code Beautify XPath Tester
2. VSCode con XML Tools
3. Navegador (consola con $x)

### Documentación Oficial

- **W3C XPath Specification**: [https://www.w3.org/TR/xpath-31/](https://www.w3.org/TR/xpath-31/)
- **MDN XPath Reference**: [https://developer.mozilla.org/en-US/docs/Web/XPath](https://developer.mozilla.org/en-US/docs/Web/XPath)

### Tutoriales Interactivos

- **W3Schools XPath Tutorial**: [https://www.w3schools.com/xml/xpath_intro.asp](https://www.w3schools.com/xml/xpath_intro.asp)
- **[XPath Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/xpath/index.htm)**: Ejemplos paso a paso