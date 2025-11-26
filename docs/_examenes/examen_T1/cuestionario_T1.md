# Cuestionario T1

---

## Preguntas XML

1. ¿Cuál es la principal diferencia entre un lenguaje de marcas y un lenguaje de programación?
    a) Los lenguajes de marcas son más rápidos  
    b) Los lenguajes de marcas describen y estructuran contenidos, mientras que los de programación definen comportamientos  
    c) Los lenguajes de programación son más antiguos y versátiles, mientras que los de marcas son modernos pero limitados  
    d) No hay diferencias significativas

2. ¿Qué es un lenguaje de marcas?
    a) Un lenguaje de programación orientado a objetos  
    b) Un sistema para codificar documentos que combina texto con etiquetas que aportan información adicional  
    c) Un sistema de gestión de bases de datos  
    d) Un compilador de código fuente

3. ¿Qué característica define un documento XML "bien formado"?
    a) Que tenga un DTD asociado  
    b) Que cumpla las reglas sintácticas de XML  
    c) Que use solo mayúsculas en las etiquetas  
    d) Que tenga un XML Schema predefinido

4. ¿Cuál es la estructura mínima obligatoria de un documento XML?
    a) Prólogo y ejemplar  
    b) Solo el ejemplar  
    c) Declaración XML, DTD y datos  
    d) Prólogo, cabecera y cuerpo

5. Un documento XML es
    a) Un documento binario que requiere un editor especial  
    b) Un documento de texto con extensión .xml  
    c) Un archivo ejecutable  
    d) Una base de datos

6. ¿Qué símbolo se utiliza para iniciar un comentario en XML?
    a) `//`  
    b) `/* */`  
    c) `<!-- -->`  
    d) `# #`

7. En XML, ¿qué representa `&lt;`?
    a) El símbolo menor que (<)  
    b) El símbolo mayor que (>)  
    c) El símbolo ampersand (&)  
    d) Las comillas dobles (")

8. ¿Entre qué símbolos se sitúa el marcado de **entidades** en XML?
    a) & y ;  
    b) # y $  
    c) @ y %  
    d) * y +

---

## Preguntas HTML

1. ¿Cuál de estas NO es una etiqueta semántica de HTML5?
    a) `<header>`  
    b) `<section>`  
    c) `<div>`  
    d) `<nav>`

2. ¿Qué atributo se usa en la etiqueta `<a>` para especificar la URL de destino?
    a) `src`  
    b) `link`  
    c) `href`  
    d) `url`

3. ¿Qué etiqueta HTML se utiliza para crear un formulario?
    a) `<input>`  
    b) `<form>`  
    c) `<field>`  
    d) `<fieldset>`

4. ¿Qué tipo de input HTML se utiliza para un campo de contraseña?
    a) `type="pass"`  
    b) `type="password"`  
    c) `type="hidden"`  
    d) `type="secret"`

5. ¿Qué elemento HTML permite seleccionar múltiples opciones en un formulario?
    a) `<radio>`  
    b) `<select multiple>`  
    c) `<checkbox>`  
    d) Tanto b como c son correctas

6. En el siguiente fragmento HTML:

    ```html
    <a href="https://www.ejemplo.com" target="_blank">Visitar sitio</a>
    ```

    ¿Qué hace el atributo `target="_blank"`?

    a) Abre el enlace en la misma pestaña  
    b) Abre el enlace en una nueva pestaña o ventana  
    c) Desactiva el enlace  
    d) Cambia el color del enlace

7. En el siguiente fragmento HTML:

    ```html
    <table>
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
    </tr>
    <tr>
        <td>Ana</td>
        <td>25</td>
    </tr>
    </table>
    ```

    ¿Cuántas filas tiene la tabla?

    a) 1  
    b) 2  
    c) 3  
    d) 4

8. En el siguiente código HTML:

    ```html
    <img src="logo.png" alt="Logo de la empresa" width="150">
    ```

    ¿Qué pasará si la imagen no se puede cargar?

    a) Aparecerá solo un icono de error sin texto  
    b) Aparecerá el texto "Logo de la empresa"  
    c) La página se quedará en blanco  
    d) Se cargará una imagen por defecto del navegador

9. ¿Qué atributo HTML5 hace que un campo de formulario sea obligatorio?
    a) `mandatory`  
    b) `required`  
    c) `validate`  
    d) `must`

---

## Preguntas CSS

1. ¿Cuál es la forma correcta de vincular un archivo CSS externo en HTML?
    a) `<style src="estilos.css">`  
    b) `<link rel="stylesheet" href="estilos.css">`  
    c) `<css href="estilos.css">`  
    d) `<stylesheet src="estilos.css">`

2. ¿Qué valor de la propiedad `display` hace que un elemento se comporte como un bloque?
    a) `inline`  
    b) `block`  
    c) `flex`  
    d) `none`

3. ¿Qué regla CSS permite adaptar el diseño a diferentes tamaños de pantalla?
    a) `@screen`  
    b) `@media`  
    c) `@viewport`  
    d) `@responsive`

4. Observa este código CSS:

    ```css
    .contenedor {
    display: flex;
    justify-content: space-between;
    }
    ```

    ¿Cómo se distribuirán los elementos hijos?

    a) Todos centrados  
    b) Todos a la izquierda  
    c) Con espacio igual entre ellos  
    d) Apilados verticalmente

5. Dado el siguiente código CSS:

    ```css
    h1 {
    color: blue;
    font-size: 24px;
    }
    ```

    ¿Qué elementos se verán afectados por este estilo?

    a) Todos los elementos de la página  
    b) Solo el primer `<h1>` de la página  
    c) Todos los elementos `<h1>` de la página  
    d) Todos los elementos con `class="h1"`

6. Dado este código CSS:

    ```css
    @media (max-width: 768px) {
    .menu {
        display: none;
    }
    }
    ```

    ¿Cuándo se ocultará el elemento con clase `menu`?

    a) En pantallas mayores de 768px  
    b) En pantallas de exactamente 768px  
    c) En pantallas menores o iguales a 768px  
    d) Siempre estará oculto

7. En el siguiente fragmento CSS:

    ```css
    #encabezado {
    background-color: navy;
    color: white;
    }
    ```

    ¿A qué tipo de selector corresponde `#encabezado`?

    a) Selector de clase  
    b) Selector de ID  
    c) Selector de etiqueta  
    d) Selector universal