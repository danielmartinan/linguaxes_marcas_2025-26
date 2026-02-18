# Depuración XSLT

La depuración de una hoja XSL es el proceso de **identificar y solucionar errores** en una hoja de transformación XSLT. Este proceso puede ser complejo y requiere un conocimiento profundo de la sintaxis y funcionalidad de XSLT. Algunas de las técnicas de depuración comunes incluyen:

- Utilizar un **depurador XSLT**, que es una herramienta de depuración específica para XSLT.
- Utilizar el **elemento `message`** de XSLT para imprimir mensajes de depuración en la consola o en un archivo de registro.
- Utilizar un **editor de texto** para verificar la sintaxis y la lógica de la hoja XSL a medida que se escribe.
- Utilizar un **visor de XML** para analizar el resultado de la transformación y verificar que el resultado sea el esperado.

Algunos de los errores más comunes que pueden ocurrir durante el proceso de transformación XSLT incluyen:

- Errores de **sintaxis**: por ejemplo, etiquetas mal cerradas o mal escritas.
- Errores de **lógica**: por ejemplo, expresiones XPath mal construidas o selecciones de nodos incorrectas.

## Elemento `message`

El elemento `xsl:message` es un elemento del estándar XSLT que se utiliza para enviar **mensajes de depuración** durante la ejecución de una transformación XSLT. Este elemento permite al programador mostrar información relevante en el proceso de transformación XSLT en la consola o en un archivo de registro.

Este elemento es especialmente útil ya que permite **imprimir mensajes de error**, información sobre el procesamiento de datos, o cualquier otra información que pueda ser útil en el proceso de desarrollo de una hoja XSL.

El mensaje se puede construir con una **expresión XPath** para incluir información específica sobre la ejecución de la transformación.

La sintaxis básica del elemento es la siguiente:

```xml
<xsl:message select="//elementos"/>
```

De forma alternativa, se puede utilizar la siguiente sintaxis:

```xml
<xsl:message>{//elementos}</xsl:message>
```

Si queremos mostrar una cadena de texto, podemos hacerlo de la siguiente forma:

```xml
<xsl:message select="'Mensaje para el procesador XSLT'"/>
```

De forma alternativa, se puede utilizar también la siguiente sintaxis:

```xml
<xsl:message>Mensaje para el procesador XSLT</xsl:message>
```

## Depuradores

Los depuradores son aplicaciones que permiten la **depuración** (*debugging*) del código que estamos produciendo, es decir, permiten seguir la generación de un nuevo documento a partir de una transformación XSLT minuciosamente.

Los depuradores XSLT nos **facilitan la localización y corrección de errores**, ya que nos permiten:

- Ejecutar el código paso a paso.
- Ejecutar el código hasta cierta marca o cursor.
- Ejecutar el código hasta el final.
- Pausar la ejecución del código.
- Detener la ejecución del código.

Algunos editores de XML (sobre todo, los comerciales) incluyen un depurador que permite visualizar simultáneamente la plantilla que se está ejecutando, sobre qué datos del documento XML actúan y cuál es la salida que genera dicha orden.

De este modo, es más fácil averiguar cuáles son las plantillas que dan lugar al formato que deseamos.

