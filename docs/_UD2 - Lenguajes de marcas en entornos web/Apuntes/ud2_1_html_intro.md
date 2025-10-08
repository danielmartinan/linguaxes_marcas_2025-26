# Introducción a HTML

## ¿Qué es HTML?

HTML (*HyperText Markup Language*) es el **lenguaje de marcas** utilizado para crear la mayor parte de las **páginas web**.

:::warning[Tipos de lenguajes]

No se debe confundir lenguaje de marcas con lenguaje de programación.

Un **lenguaje de marcas** o lenguaje de marcado define un conjunto de reglas para codificar documentos en un formato que es legible para las personas y también para la máquina, mientras que un **lenguaje de programación** proporciona un conjunto de comandos y sintaxis que se pueden usar para escribir programas de computadora que son entendidos por la computadora.

:::

Es un **estándar** reconocido en todos los **navegadores**, por lo tanto, todos ellos visualizan una página HTML de forma muy similar, independientemente del sistema operativo sobre el que se ejecutan.

Un documento HTML tiene el siguiente aspecto:

```html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8" />
   <title>Título del documento</title>
 </head>
 <body>
   <p>LMSXI</p>
 </body>
</html>
```

## **Código HTML de una página web**

Podemos ver el documento HTML correspondiente a una web que estamos visualizando si pulsamos con el botón derecho del ratón y escogemos la opción *Ver código fuente de la página*. El nombre de la opción varía dependiendo del navegador.

![alt text](/img/linguaxes-marcas/ud2/img/ver_codigo_fuente.png)

## Versiones de HTML

El origen de HTML fue un sistema de [hipertexto](https://es.wikipedia.org/wiki/Hipertexto) para **compartir documentos** electrónicos en 1990. La primera propuesta oficial para convertir HTML en un estándar se realizó en 1993. Ninguna de las dos primeras propuestas de estándar que se hicieron (HTML y HTML+) consiguieron convertirse en estándares oficiales.

A lo largo de los años, se fueron publicando **diferentes versiones** del **estándar**. A continuación, se muestran algunas:

### HTML 1.0

La versión básica de HTML tiene soporte para **elementos básicos** como texto e imágenes. Era una versión muy básica de HTML, con menos soporte para una amplia gama de elementos HTML.

Esta versión no incluye características avanzadas como el estilo y otros aspectos que estaban relacionados con la forma en que se representa el contenido en un navegador. Tampoco brindaba soporte para otros elementos que en la actualidad tienen sorpote como tablas o fuentes tipográficas.

Es importante recalcar que el **W3C no existía** antes de HTML 2.0. Por lo tanto, no muestra detalles sobre la primera versión de HTML.

### HTML 2.0

Fue la **primera versión oficial** de HTML.

El [IETF](https://es.wikipedia.org/wiki/Grupo_de_Trabajo_de_Ingenier%C3%ADa_de_Internet) (*Internet Engineering Task Force*) publicó el [**estándar**](https://datatracker.ietf.org/doc/html/rfc1866) en noviembre de 1995\.

### **HTML 3.2**

Se publicó el 14 de enero de 1997, por el [W3C](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium). Incorporaba:

- Los **applets de Java**.  
- Texto alrededor de las imágenes.

### HTML 4.0

Se publicó el 24 de abril de 1998\. Entre las novedades que presentaba, se encontraban:

- Las **hojas de estilos CSS**, utilizadas a día de hoy para aplicar estilos a las páginas web.  
- La posibilidad de incluir pequeños **programas** en las páginas web.

### HTML 4.01

Se publicó el 24 de diciembre de 1999\. En ese momento, el W3C detuvo la actividad de estandarización de HTML hasta marzo de 2007, momento en que se retoma debido a la fuerza de las empresas que forman el grupo [WHATWG](https://es.wikipedia.org/wiki/Web_Hypertext_Application_Technology_Working_Group) (*Web Hypertext Application Technology Working Group*) y a la publicación de los borradores de HTML 5, que sería la siguiente versión de este lenguaje.

### HTML 5

[HTML5](https://es.wikipedia.org/wiki/HTML5) la versión más avanzada y la que se considera **estándar actual**, aunque ha ido evolucionando por diferentes especificaciones (HTML 5.1, HTML 5.2 y HTML 5.3). Su lanzamiento inicial fue el 28 de octubre de 2014, pero es una versión viva en la que se sigue trabajando. Puedes encontrar las [**especificaciones de la última versión de HTML**](https://html.spec.whatwg.org/multipage/) en la web del WHATWG.

Esta versión introduce **cambios importantes**. Algunos son:

- Introducción de nuevos elementos y atributos que reflejan usos típicos de componentes en los sitios web modenos.  
- Elementos con significado semántico. Estas nuevas etiquetas permiten describir cuál es el significado del elemento. Por ejemplo, `<header>` se utiliza para cabeceras de webs y `<footer>` para piés de página.  
- Nuevas funcionalidades (HTML5 APIs) como almacenamiento offline de información, funcionalidad [Drag\&Drop](https://es.wikipedia.org/wiki/Clic_\(inform%C3%A1tica\)#Arrastrar_y_soltar), uso de la geolocalización, etc.  
- De desacopla el contenido de la presentación: los estilos se definen en las hojas de estilo CSS. Es decir, cuestiones como colores, fondos, tamaño o posicionamiento se especifican mediante CSS. El HTML se encarga de la información que se quiere mostrar, su estructura y su semántica. Esto hace que muchos elementos y atributos de la versión anterior de HTML hayan quedado obsoletos (`<font>`, `<center>`, `align`, etc.).  
