# UD1.4 - Herramientas para la edición de documentos xml y html

## Introducción

Como se ha comentado previamente, los documentos XML y HTML son archivos de texto plano que pueden ser editados con cualquier editor de texto. Sin embargo, existen editores específicos que facilitan la creación y edición de estos documentos, proporcionando funcionalidades adicionales como la validación de la sintaxis, el autocompletado de etiquetas, la visualización en tiempo real del resultado, entre otras. No es objetivo de este módulo profundizar en el uso de los entornos de desarrollo inteegrados, pero veremos algunos aspectos básicos relevantes y útiles para la edición de documentos XML y HTML.

## Editores de texto recomendados

### Visual Studio Code

Visual Studio Code (VSCode) es un **editor de código fuente** multiplataforma desarrollado por Microsoft. Permite editar, depurar y gestionar proyectos en diversos lenguajes de programación, siendo especialmente útil para trabajar con **HTML**, **XML** y otros lenguajes de marcas.

### Principales características

- **Gratuito y de código abierto**.
- Funciona en Windows, Mac y Linux.
- Ligero, rápido y fácil de instalar.
- Optimizado para edición de archivos de texto plano (.html, .xml, .css, .js, etc.).
- Dispone de un potente sistema de extensiones para ampliar funcionalidades.
- Puede utilizarse en versión web (VSCode for Web) sin necesidad de instalación local.

### Ventajas frente a otros editores

VSCode destaca en el ámbito educativo y profesional por proporcionar:

- **Autocompletado inteligente** para HTML/XML, lo que reduce errores y agiliza la escritura de código.
- **Resaltado de sintaxis** y formato automático, facilitando la lectura y la organización del código.
- **Vista previa en tiempo real** (Live Server), muy útil para aprender y depurar proyectos web.
- **Validación de documentos**, ayuda a localizar errores de sintaxis tanto en HTML como en XML.
- **Terminal integrada**, que permite ejecutar comandos sin salir del entorno de edición.
- **Gestión de proyectos**, con explorador de archivos y control de versiones integrado (Git).
- Gran comunidad y abundantes recursos en español e inglés (tutoriales, foros, documentación).

### Por qué elegir VSCode para el módulo

- Es el estándar actual en el sector, ampliamente usado tanto por empresas como por organismos educativos.
- Facilita el aprendizaje progresivo: los alumnos pueden empezar con lo más básico e ir incorporando extensiones o herramientas avanzadas según evolucionan sus conocimientos.
- Favorece la autonomía, ya que su uso es muy similar fuera del centro educativo o en ambientes laborales reales.
- Compatible con la edición y validación de XML, HTML y otros lenguajes de marcas usados en DAW y ASIR.

## Instalación y configuración inicial

Visual Studio Code destaca por su sencilla instalación, su amplia personalización y su rápida adaptación tanto en Windows como en macOS y Linux. A continuación se detallan los pasos y recomendaciones esenciales para comenzar a trabajar en el módulo de lenguajes de marcas con VSCode.

### Descarga e instalación

- Acceder a la página oficial de descarga: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Seleccionar el instalador según el sistema operativo (Windows, macOS o Linux).
- Descargar y ejecutar el instalador, aceptando las opciones por defecto en caso de duda.
- Al finalizar, iniciar Visual Studio Code desde el menú de aplicaciones.

### Idioma y apariencia

- Por defecto, VSCode está en inglés, pero se puede cambiar a español (u otro idioma) instalando la extensión “Spanish Language Pack”:
  1. Ir al icono de extensiones a la izquierda (o pulsar `Ctrl+Shift+X`).
  2. Buscamos "Spanish Language Pack for Visual Studio Code".
  3. Pulsar “Install”.
  4. Reiniciar VSCode si es necesario para aplicar el cambio.
- Cambiar el **tema de apariencia** para mayor comodidad visual:  
    - Acceder a la paleta de comandos (`Ctrl+Shift+P`) y escribir “tema” o “color theme”.
    - Elegir entre temas claros, oscuros o de alto contraste según preferencia.

### Ajustes básicos recomendados

- Configurar el **formato de guardado automático** para evitar pérdidas accidentales:  
    - Menú: Archivo → Preferencias → Configuración → Buscar "guardar automáticamente" y activar la opción (“auto save”).
- Ajustar la **fuente** y el tamaño del texto para una mejor legibilidad:  
    - Configuración → “Editor: Font Size”.
- Personalizar la **tabulación** (número de espacios por tab):  
    - Configuración → “Editor: Tab Size” (usar 2 o 4 según la convención del módulo).
- Habilitar o deshabilitar el **mini-mapa** del editor según preferencia personal.
- Activar la **visualización del número de línea** para facilitar la localización y discusión de errores.

### Primeros pasos recomendados

- Crear una carpeta específica para los ejercicios y apuntes del módulo.
- Abrir la carpeta desde VSCode: Archivo → Abrir carpeta…
- Familiarizarse con el **explorador de archivos** situado a la izquierda: muestra la estructura de carpetas y archivos del proyecto.
- Probar la creación de un archivo nuevo (Archivo → Nuevo archivo), guardarlo con extensión `.html` o `.xml` y observar el resaltado de sintaxis.

## Organización del entorno de trabajo en Visual Studio Code

Para sacar el máximo provecho de Visual Studio Code (VSCode) es fundamental conocer cómo organizar y utilizar eficientemente su entorno de trabajo. Esta sección presenta los elementos clave para gestionar proyectos y editar documentos de manera efectiva.

### Explorador de archivos y carpetas

- **Abrir carpeta o espacio de trabajo:**  
  En VSCode se trabaja habitualmente abriendo una carpeta que contiene todos los archivos relacionados con un proyecto o práctica.  
    - Menú: Archivo → Abrir carpeta...  
    - Permite organizar varios archivos juntos y navegar fácilmente entre ellos.  
  
- **Estructura del Explorador:**  
  El panel lateral izquierdo muestra la jerarquía de archivos y carpetas.  
    - Puedes crear nuevos archivos y carpetas mediante los botones “Nuevo archivo” y “Nueva carpeta”.  
    - Arrastrar y soltar archivos para reorganizar.

- **Búsqueda de archivos:**  
  Presiona `Ctrl+P` para abrir una paleta de búsqueda rápida de archivos por nombre dentro del proyecto.

### Gestión de proyectos

Aunque no es objeto de este módulo, es interesante el uso de sistemas de control de versiones como Git para el versionado y respaldo de los trabajos realizados.

### Edición simultánea y pestañas

- VSCode permite abrir múltiples archivos en pestañas a la vez para trabajar con ellos en paralelo.  
- Puedes **dividir la vista** horizontal o verticalmente para comparar o editar archivos simultáneamente (clic derecho en pestaña → Dividir editor).  
- La función de **vista en paralelo** es muy útil para aprender y trabajar con documentos relacionados, como un archivo HTML y su archivo CSS o XML y su correspondiente XSL.

### Paneles útiles

- **Terminal integrada:**  
  Permite ejecutar comandos de sistema, scripts, usar Git, y lanzar servidores locales sin salir del editor.  
    - Se abre con `` Ctrl+` `` (tecla de tilde invertida debajo de Esc).

- **Panel de problemas y salida:**  
  Indica errores y advertencias detectados en tiempo real o durante compilación/validación.  
  Facilita la corrección rápida de errores en proyectos.

## Edición de HTML y XML en Visual Studio Code

Visual Studio Code (VSCode) ofrece potentes prestaciones para la edición de documentos con lenguajes de marcas como HTML y XML. Este apartado aborda las funcionalidades básicas y específicas para trabajar eficazmente con estos formatos.

### Creación de archivos .html y .xml

- Para crear un nuevo archivo:  
    - Utilizar `Archivo → Nuevo archivo`.  
    - Guardar con extensión `.html` para documentos HTML o `.xml` para los documentos XML, lo que activa automáticamente el resaltado y las ayudas específicas.

- Recomendación: mantener una estructura organizada guardando los archivos en carpetas según el proyecto o tema.

### Resaltado de sintaxis (Syntax Highlighting)

- VSCode reconoce automáticamente el lenguaje según la extensión y aplica colores diferenciados a etiquetas, atributos, valores y texto plano, facilitando la lectura y detección de errores.

- El resaltado ayuda a diferenciar elementos clave del documento, como etiquetas HTML (`<div>`, `<p>`, etc.) o elementos XML personalizados.

### Autocompletado y ayuda contextual

- VSCode sugiere automáticamente etiquetas, atributos y valores mientras se escribe, acelerando la codificación y reduciendo errores.

- Para HTML, incluye sugerencias estándar y por extensiones instaladas; para XML, autocompleta etiquetas según el contexto.

- La ayuda contextual incluye información rápida sobre etiquetas y atributos, facilitando el aprendizaje.

- Al escribir el carácter `<` se despliega una lista de etiquetas posibles; al escribir atributos, se sugieren los más comunes.

### Fragmentos y Emmet

- VSCode integra Emmet, un sistema de abreviaturas que permite generar bloques de código HTML/XML con pocas teclas, por ejemplo: escribir `div.container>ul>li*5` y pulsar `Tab` genera una estructura HTML lista para usar.

- Los fragmentos (snippets) personalizados o por defecto aportan plantillas para código frecuente.

### Validación y formato automático

- VSCode detecta errores básicos de sintaxis como etiquetas sin cerrar o atributos mal formados y marca visualmente los problemas.

    ![ejemplo_error](/img/linguaxes-marcas/ud1/resources/ejemplo_error.png)

    Si posicionamos el cursor sobre el error, se muestra una descripción del problema.

    ![descripcion_error](/img/linguaxes-marcas/ud1/resources/descripcion_error.png)

- El usuario puede configurar el formato automático al guardar (`Format on Save`) para mantener el código limpio y bien indentado. Para ello:
    - Ir a `Archivo → Preferencias → Configuración`.
    - Buscar "Format On Save" y activar la opción.

### Extensiones recomendadas

VScode se caracteriza por su sistema de extensiones que amplían sus capacidades. Algunas recomendadas para trabajar con HTML y XML son:

- **XML** de Red Hat: Proporciona validación, autocompletado y navegación avanzada para XML.
- **XML Tools:** Ofrece funcionalidades específicas para la edición de XML, como validación y formateo.
- **Live Server:** Permite lanzar un servidor local para previsualizar en tiempo real los cambios en archivos HTML.
- **Prettier - Code formatter:** Formatea automáticamente el código para mantener un estilo consistente.

Conforme se avance en el módulo, iremos viendo la utilidad de estas y otras extensiones, en las que profundizaremos más adelante.
