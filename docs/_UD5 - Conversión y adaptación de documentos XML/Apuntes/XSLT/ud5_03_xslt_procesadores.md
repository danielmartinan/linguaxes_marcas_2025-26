# Procesadores XSLT

Un procesador XSLT es un software que, a partir de un documento XML y un documento XSL (hoja de transformaciones XML), crea un documento de salida. Para ello, aplica las **instrucciones** de la **hoja XSL** a la información del documento XML.

![alt text](/img/linguaxes-marcas/ud5/xslt_procesadores.png)

Para poder realizar una transformación, siempre es necesario disponer de las siguientes partes:

- Un **documento XML** origen o fuente.
- Una **hoja XSL** que defina las transformaciones que se deben llevar a cabo sobre el documento XML fuente.
- Un **procesador XSLT** que se encargará de leer los dos archivos anteriores y generar un nuevo documento (el documento transformado).

Todas las partes anteriores producirán un nuevo documento (documento transformado), que será del tipo indicado en la hoja XSL.

## Tipos de procesadores

Los procesadores XSLT pueden encontrase de diferentes formas:

- Integrados en un **editor de texto**.
- Integrados en un **navegador web**.
- En un **servidor web**.
- Puede ser un programa que se ejecuta desde la **línea de comandos**.

## Métodos para realizar una transformación XSLT

Se presentan diferentes formas de realizar una transformación XSLT:

- **Vinculando una hoja XSL**: se realiza una vinculación entre una hoja XSL y un documento XML mediante una **instrucción XML**. Necesita de un procesador XSLT para que pueda realizar la transformación. Esta es la forma utilizada para visualizar un documento XML en un navegador web.
- Usando directamente un **procesador XSLTPROC**: un procesador XSLTPROC es una utilidad que realiza una transformación XSLT. Se le debe indicar el documento XML fuente y la hoja XSL a utilizar en la transformación. Pueden ser **aplicaciones con interfaz gráfica** o que se deben utilizar a través de la **línea de comandos**.
- Mediante una **biblioteca**: se pueden realizar transformaciones XSLT invocando a una biblioteca (library) de transformación desde un programa. Este método se utiliza si se está **desarrollando una aplicación utilizando un lenguaje de programación**.
