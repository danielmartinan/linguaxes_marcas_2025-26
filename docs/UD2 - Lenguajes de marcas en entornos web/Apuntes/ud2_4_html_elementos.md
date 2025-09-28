# Elementos HTML

Un elemento HTML está formado por:

* Una etiqueta de apertura.  
* Cero o más atributos.  
* Opcionalmente, un texto, encerrado entre las etiquetas de apertura y cierre. No todas las etiquetas pueden encerrar texto.  
* Una etiqueta de cierre. Para algunos elementos no hay etiqueta de cierre o es opcional.

Según el modo en que ocupan el espacio disponible en la página, los elementos pueden ser de dos tipos:

* Elementos en línea (*inline*) o lineales. Solo ocupan el espacio necesario para mostrar sus contenidos. Su contenido puede ser texto u otros elementos *inline*.  
* Elementos de bloque (*block*). Los elementos de bloque siempre empiezan en una nueva línea y ocupan todo el espacio disponible hasta el final de la línea, aunque sus contenidos no ocupen todo el ancho. Su contenido puede ser texto, elementos *inline* u otros elementos de bloque.

## **Ejemplo[​](https://mp0373-lmsxi.vercel.app/docs/unidades/02/contenidos/html/elementos/introduccion#ejemplo)**

El siguiente ejemplo muestra la diferencia entre ambos comportamientos:  

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>
      Ejemplo de la diferencia entre los elementos inline y los elementos block
    </title>
  </head>
  <body>
    <h1>Los encabezados son elementos block.</h1>
    <p>Y los párrafos también.</p>
    <a href="#">Los enlaces son elementos inline</a>
    <p>
      Incluso si esta definido dentro de un párrafo,
      <strong>un texto resaltado</strong> sigue siendo un elemento inline.
    </p>
  </body>
</html>
```

Un navegador web lo mostraría así:

![ejemplo](ejemplo_html.png)

Prúebalo en el navegador pulsando [aquí](/htmls/ud2_4_1.html)