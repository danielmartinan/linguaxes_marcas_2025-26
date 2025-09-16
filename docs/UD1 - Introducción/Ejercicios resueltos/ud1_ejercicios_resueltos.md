# UD1. Ejercicios resueltos sobre xml

## Ejercicio 1

Escribe un documento XML bien formado que guarde información de los libros a la venta en una librería.

Consideraciones:

- De un libro, se debe almacenar: título, autor o los autores, año de publicación y precio.
- Se guardará en forma de atributo, la categoría de un libro (cocina, ficción, informática, etc.) y el tipo de libro (de bolsillo, etc.).
- Por último, se debe almacenar en un atributo el idioma del título de un libro.

<details>
<summary>Ver solución</summary>

Una posible solución sería la siguiente:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<librería>
    <libro categoría="cocina">
        <título idioma="inglés">Everyday Italian</título>
        <autor>Giada De Laurentiis</autor>
        <año>2005</año>
        <precio>30.00</precio>
    </libro>

    <libro categoría="ficción">
        <título idioma="castellano">Harry Potter</título>
        <autor>J.K. Rowling</autor>
        <año>2005</año>
        <precio>29.99</precio>
    </libro>

    <libro categoría="informática">
        <título idioma="inglés">XQuery Kick Start</título>
        <autor>James McGovern</autor>
        <autor>Per Bothner</autor>
        <autor>Kurt Cagle</autor>
        <autor>James Linn</autor>
        <autor>Vaidyanathan Nagarajan</autor>
        <año>2003</año>
        <precio>49.99</precio>
    </libro>

    <libro categoría="informática" tipo="de bolsillo">
        <título idioma="inglés">Learning XML</título>
        <autor>Erik T. Ray</autor>
        <año>2003</año>
        <precio>39.95</precio>
    </libro>
</librería>
```

</details>

## Ejercicio 2

Escribe un documento XML bien formado que guarde información de dos equipos de baloncesto. Se debe almacenar el nombre, ciudad y entrenador del equipo junto con el nombre, la posición y la nacionalidad de dos jugadores. La posición (base, escolta, alero, pivot) deberá representarse mediante un atributo del jugador. Puedes utilizar datos reales para los equipos y jugadores.

<details>
<summary>Ver solución</summary>

Una posible solución sería la siguiente:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<equipos_de_baloncesto>
   <equipo>
      <nombre>Ángeles Lakers</nombre>
      <ciudad>Los Ángeles</ciudad>
      <entrenador></entrenador>
      <jugadores>
         <jugador posicion="Pivot">
            <nombre>LeBrom James</nombre>
            <nacionalidad>Estadounidense</nacionalidad>
         </jugador>
         <jugador posicion="Base">
            <nombre>Patrick Beverley</nombre>
            <nacionalidad>Estadounidense</nacionalidad>
         </jugador>
      </jugadores>
   </equipo>
   <equipo>
      <nombre>Boston Celtics</nombre>
      <ciudad>Boston</ciudad>
      <entrenador></entrenador>
      <jugadores>
         <jugador posicion="Alero">
            <nombre>Jaylen Brown</nombre>
            <nacionalidad>Estadounidense</nacionalidad>
         </jugador>
         <jugador posicion="Pivot">
            <nombre>Robert Williams</nombre>
            <nacionalidad>Camerunés</nacionalidad>
         </jugador>
      </jugadores>
   </equipo>
</equipos_de_baloncesto>
```

</details>

## Ejercicio 3

Indica si el siguiente documento XML está bien formado. En el caso de no estarlo, corrige los errores para conseguir que lo esté.

```xml
<!-- Documento XML con errores de sintaxis. --!>
<? xml versión="1.0" encodin = "UTF-8" >
<terrestres>
   <vehiculo>bicicleta<vehiculo>
   <vehiculo>coche<vehiculo>
   <vehiculo>tractor<vehiculo>
<acuaticos>
   <vehiculo>canoa<vehiculo>
<aereos>
   <vehiculo>avioneta<vehiculo>
   <vehiculo>helicóptero<vehiculo>
```

<details>
<summary>Ver solución</summary>
El documento no está bien formado.

Problemas a corregir:

1. La declaración XML se debe realizar siempre en la primera línea. El comentario puede pasar a la segunda línea.
2. Los comentarios tienen que terminar con los caracteres `-->`.
3. En la declaración XML `<?xml` no puede escribirse separado, version se escribe sin tilde, `encodin` se escribe con una `g` al final, y la declaración debe finalizar con los caracteres `?>`.
4. En un documento XML ha de existir un único elemento raíz y, dado que en este documento no existía dicho elemento, se ha creado `<vehiculos>` como elemento raíz.
5. La sintaxis de la etiqueta de cierre de un elemento es `</etiqueta>`. Por consiguiente, donde corresponda, hay que escribir `</vehiculo>` en vez de `<vehiculo>`.
6. No todos los elementos tienen etiqueta de cierre: falta `</terrestres>`, `</acuaticos>` y `</aereos>`.
Por lo tanto, para corregir esos errores, se propone la siguiente alternativa:

```xml
<?xml version="1.0" encoding = "UTF-8" ?>
<!-- Documento XML sin errores de sintaxis. -->
<vehiculos>
   <terrestres>
      <vehiculo>bicicleta</vehiculo>
      <vehiculo>coche</vehiculo>
      <vehiculo>tractor</vehiculo>
   </terrestres>
   <acuaticos>
      <vehiculo>canoa</vehiculo>
   </acuaticos>
   <aereos>
      <vehiculo>avioneta</vehiculo>
      <vehiculo>helicóptero</vehiculo>
   </aereos>
</vehiculos>
```

</details>

## Ejercicio 4

Escribe un **documento XML bien formado** que guarde la siguiente información:

![Tabla ejercicio 4](/img/linguaxes-marcas/ud1/resources/tabla_ejer4.png)


<details>
<summary>Ver solución</summary>

Una posible solución sería la siguiente:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<hechos_historicos>
    <hecho>
        <descripcion>IBM da a conocer el PC</descripcion>
        <fecha_creacion>
            <dia>12</dia>
            <mes>8</mes>
            <año>1981</año>
        </fecha_creacion>
    </hecho>
    <hecho>
        <descripcion>Se funda Google</descripcion>
        <fecha_creacion>
            <dia>4</dia>
            <mes>9</mes>
            <año>1998</año>
        </fecha_creacion>
    </hecho>
    <hecho>
        <descripcion>Se funda Facebook</descripcion>
        <fecha_creacion>
            <dia>4</dia>
            <mes>2</mes>
            <año>2004</año>
        </fecha_creacion>
    </hecho>
</hechos_historicos>
```

Otra posible solución sería:

```xml 
<?xml version="1.0" encoding="UTF-8"?>
<hechos_historicos>
    <hecho descripcion="IBM da a conocer el PC">
        <fecha_creacion>
            <dia>12</dia>
            <mes>8</mes>
            <año>1981</año>
        </fecha_creacion>
    </hecho>
    <hecho descripcion="Se funda Google">
        <fecha_creacion>
            <dia>4</dia>
            <mes>9</mes>
            <año>1998</año>
        </fecha_creacion>
    </hecho>
    <hecho descripcion="Se funda Facebook">
        <fecha_creacion>
            <dia>4</dia>
            <mes>2</mes>
            <año>2004</año>
        </fecha_creacion>
    </hecho>
</hechos_historicos>
```


</details>

<details>
<summary> </summary>


</details>