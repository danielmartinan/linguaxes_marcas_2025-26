# Ejercicios UD5 - Conversión y Adaptación de Documentos XML

## Ejercicio 1

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE agenda>
<agenda>
  <propietario>
    <identificadores>
      <nombre>Alma</nombre>
      <apellidos>López Terán</apellidos>
    </identificadores>
    <direccion>
      <calle>El Percebe 13, 6F</calle>
      <localidad>Torrelavega</localidad>
      <cp>39300</cp>
    </direccion>
    <telefonos>
      <movil>970898765</movil>
      <casa>942124567</casa>
      <trabajo>628983456</trabajo>
    </telefonos>
  </propietario>
  <contactos>
    <persona id="p01">
      <identificadores>
        <nombre>Inés</nombre>
        <apellidos>López Pérez</apellidos>
      </identificadores>
      <direccion>
        <calle>El Ranchito 24, 6B</calle>
        <localidad>Santander</localidad>
        <cp>39006</cp>
      </direccion>
      <telefonos>
        <movil>970123123</movil>
      </telefonos>
    </persona>
    <persona id="p02">
      <identificadores>
        <nombre>Roberto</nombre>
        <apellidos>Gutiérrez Gómez</apellidos>
      </identificadores>
      <direccion>
        <calle>El Marranito 4, 2F</calle>
        <localidad>Santander</localidad>
        <cp>39004</cp>
      </direccion>
      <telefonos>
        <movil>970987456</movil>
        <casa>942333323</casa>
      </telefonos>
    </persona>
    <persona id="p03">
      <identificadores>
        <nombre>Juan</nombre>
        <apellidos>Sánchez Martínez</apellidos>
      </identificadores>
      <direccion>
        <calle>El Cangrejo 10, sn</calle>
        <localidad>Torrelavega</localidad>
        <cp>39300</cp>
      </direccion>
      <telefonos>
        <movil>997564343</movil>
        <casa>942987974</casa>
        <trabajo>677899234</trabajo>
      </telefonos>
    </persona>
  </contactos>
</agenda>
```

### Tareas

Construye las sentencias XPath que permitan obtener los siguientes datos:

1. Nombre del propietario de la agenda.
2. Teléfono de casa del propietario.
3. Nombres y apellidos de los contactos de la agenda.
4. Nombre e identificador de cada contacto.
5. Datos del contacto con identificador `p02`.
6. Identificadores de los contactos que tienen móvil.

<details>
<summary>Solución</summary>

1. `/agenda/propietario/identificadores/nombre` → `Alma`
2. `/agenda/propietario/telefonos/casa` → `942124567`
3. `/agenda/contactos/persona/identificadores/(nombre|apellidos)` → `Inés`, `López Pérez`, `Roberto`, `Gutiérrez Gómez`, `Juan`, `Sánchez Martínez`
4. `/agenda/contactos/persona/@id` y `/agenda/contactos/persona/identificadores/nombre` → `p01, Inés | p02, Roberto | p03, Juan`
5. `/agenda/contactos/persona[@id="p02"]` → Todos los datos del contacto p02
6. `/agenda/contactos/persona[telefonos/movil]/@id` → `p01`, `p02`, `p03`

</details>

---

## Ejercicio 2

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ies>
  <nombre>IES Gonzalo Nazareno</nombre>
  <web>http://www.gonzalonazareno.org</web>
  <ciclos>
    <ciclo id="ASIR">
      <nombre>Administración de Sistemas Informáticos en Red</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2009" />
    </ciclo>
    <ciclo id="DAW">
      <nombre>Desarrollo de Aplicaciones Web</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2010" />
    </ciclo>
    <ciclo id="SMR">
      <nombre>Sistemas Microinformáticos y Redes</nombre>
      <grado>Medio</grado>
      <decretoTitulo año="2008" />
    </ciclo>
  </ciclos>
</ies>
```

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Nombre del instituto.
2. Página web del instituto.
3. Nombre de los ciclos formativos.
4. Siglas por las que se conocen los ciclos formativos.
5. Años en los que se publicaron los decretos de título de los ciclos formativos.
6. Ciclos formativos de Grado Medio (se trata de obtener el elemento completo).
7. Nombre de los ciclos formativos de Grado Superior.
8. Nombre de los ciclos formativos anteriores a 2010.
9. Nombre de los ciclos formativos de 2008 o 2010.

<details>
<summary>Solución</summary>

1. `/ies/nombre` → `IES Gonzalo Nazareno`
2. `/ies/web` → `http://www.gonzalonazareno.org`
3. `/ies/ciclos/ciclo/nombre` → `Administración de Sistemas Informáticos en Red`, `Desarrollo de Aplicaciones Web`, `Sistemas Microinformáticos y Redes`
4. `/ies/ciclos/ciclo/@id` → `ASIR`, `DAW`, `SMR`
5. `/ies/ciclos/ciclo/decretoTitulo/@año` → `2009`, `2010`, `2008`
6. `/ies/ciclos/ciclo[grado="Medio"]` → Elemento completo del ciclo SMR
7. `/ies/ciclos/ciclo[grado="Superior"]/nombre` → `Administración de Sistemas Informáticos en Red`, `Desarrollo de Aplicaciones Web`
8. `/ies/ciclos/ciclo[decretoTitulo/@año < 2010]/nombre` → `Sistemas Microinformáticos y Redes`
9. `/ies/ciclos/ciclo[decretoTitulo/@año = 2008 or decretoTitulo/@año = 2010]/nombre` → `Desarrollo de Aplicaciones Web`, `Sistemas Microinformáticos y Redes`

</details>

---

## Ejercicio 3

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ies>
  <modulos>
    <modulo id="0228">
      <nombre>Aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>4</horasSemanales>
      <ciclo>SMR</ciclo>
    </modulo>
    <modulo id="0372">
      <nombre>Gestión de bases de datos</nombre>
      <curso>1</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
    <modulo id="0373">
      <nombre>Lenguajes de marcas y sistemas de gestión de información</nombre>
      <curso>1</curso>
      <horasSemanales>3</horasSemanales>
      <ciclo>ASIR</ciclo>
      <ciclo>DAW</ciclo>
    </modulo>
    <modulo id="0376">
      <nombre>Implantación de aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
  </modulos>
</ies>
```

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Nombre de los módulos que se imparten en el instituto.
2. Nombre de los módulos del ciclo ASIR.
3. Nombre de los módulos que se imparten en el segundo curso de cualquier ciclo.
4. Nombre de los módulos de menos de 5 horas semanales.
5. Nombre de los módulos que se imparten en el primer curso de ASIR.
6. Horas semanales de los módulos de más de 3 horas semanales.

<details>
<summary>Solución</summary>

1. `/ies/modulos/modulo/nombre` → Todos los nombres de módulos
2. `/ies/modulos/modulo[ciclo="ASIR"]/nombre` → `Gestión de bases de datos`, `Lenguajes de marcas y sistemas de gestión de información`, `Implantación de aplicaciones web`
3. `/ies/modulos/modulo[curso="2"]/nombre` → `Aplicaciones web`, `Implantación de aplicaciones web`
4. `/ies/modulos/modulo[horasSemanales < 5]/nombre` → `Lenguajes de marcas y sistemas de gestión de información`
5. `/ies/modulos/modulo[curso="1" and ciclo="ASIR"]/nombre` → `Gestión de bases de datos`, `Lenguajes de marcas y sistemas de gestión de información`
6. `/ies/modulos/modulo[horasSemanales > 3]/horasSemanales` → `4`, `5`, `5`, `5`

</details>

---

## Ejercicio 4

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventario>
  <producto codigo="AAA-111">
    <nombre>Teclado</nombre>
    <peso unidad="g">480</peso>
  </producto>
  <producto codigo="ACD-981">
    <nombre>Monitor</nombre>
    <peso unidad="kg">1.8</peso>
  </producto>
  <producto codigo="DEZ-138">
    <nombre>Raton</nombre>
    <peso unidad="g">50</peso>
  </producto>
</inventario>
```

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Extraer todos los elementos `<peso>` (etiqueta incluida).
2. Extraer las cantidades de todos los elementos `<peso>` (sin la etiqueta `<peso>`).
3. Extraer el peso del último elemento.
4. Extraer las distintas unidades en las que se han almacenado los pesos.
5. Extraer el penúltimo codigo.
6. Extraer el peso del elemento cuyo codigo sea `AAA-111`.
7. Extraer el nombre de los productos que hayan puesto el peso en gramos.
8. Extraer el codigo de los productos cuyo nombre sea `Monitor`.
9. Extraer el código de los productos que pesen más de un cuarto de kilo.

<details>
<summary>Solución</summary>

1. `/inventario/producto/peso` → Todos los elementos peso (etiquetas incluidas)
2. `/inventario/producto/peso/text()` → `480`, `1.8`, `50`
3. `/inventario/producto[last()]/peso` → `50`
4. `/inventario/producto/peso/@unidad` → `g`, `kg`, `g`
5. `/inventario/producto[last()-1]/@codigo` → `ACD-981`
6. `/inventario/producto[@codigo="AAA-111"]/peso` → `480`
7. `/inventario/producto[peso/@unidad="g"]/nombre` → `Teclado`, `Raton`
8. `/inventario/producto[nombre="Monitor"]/@codigo` → `ACD-981`
9. `/inventario/producto[peso > 0.25]/@codigo` → `AAA-111`, `ACD-981`

</details>

---

## Ejercicio 5

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<listado>
  <cuenta>
    <titular dni="5671001D">Ramon Perez</titular>
    <saldoactual moneda="euros">12000</saldoactual>
    <fechacreacion>13-abril-2012</fechacreacion>
  </cuenta>
  <fondo>
    <cuentaasociada>20-A</cuentaasociada>
    <datos>
      <cantidaddepositada>20000</cantidaddepositada>
      <moneda>Euros</moneda>
    </datos>
  </fondo>
  <fondo>
    <cuentaasociada>21-DX</cuentaasociada>
    <datos>
      <cantidaddepositada>4800</cantidaddepositada>
      <moneda>Dólares</moneda>
    </datos>
  </fondo>
  <cuenta>
    <titular dni="39812341C">Carmen Diaz</titular>
    <saldoactual moneda="euros">1900</saldoactual>
    <fechacreacion>15-febrero-2011</fechacreacion>
  </cuenta>
</listado>
```

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Extraer la cantidad depositada en el fondo con cuenta asociada `20-A`.
2. Extraer un listado sin etiquetas de todas las monedas usadas por los distintos fondos.
3. Extraer el DNI de las cuentas que usen `dólares` como moneda de base.
4. Extraer toda la información de los fondos que usen `Euros` por un valor inferior a `2500`.

<details>
<summary>Solución</summary>

1. `/listado/fondo[cuentaasociada="20-A"]/datos/cantidaddepositada` → `20000`
2. `/listado/fondo/datos/moneda/text()` → `Euros`, `Dólares`
3. `/listado/cuenta[saldoactual/@moneda="euros" or //fondo/datos[moneda="Dólares"]]/titular/@dni` → Para este caso, se requiere lógica más compleja
4. `/listado/fondo[datos/moneda="Euros" and datos/cantidaddepositada < 2500]` → No devuelve ninguno (20000 no es < 2500)

</details>

---

## Ejercicio 6

Consideremos el siguiente documento XML (documento extenso con estructura de universidad, carreras, asignaturas y alumnos):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<universidad>
  <nombre>Universidad de Victoria</nombre>
  <pais>España</pais>
  <!--  CARRERAS  -->
  <carreras>
    <carrera id="c01">
      <nombre>I.T. Informática</nombre>
      <plan>2003</plan>
      <creditos>250</creditos>
      <centro>Escuela de Informática</centro>
    </carrera>
    <carrera id="c02">
      <nombre>Dipl. Empresariales</nombre>
      <plan>2001</plan>
      <creditos>275</creditos>
      <centro>Facultad de Ciencias Sociales</centro>
    </carrera>
    <carrera id="c03">
      <nombre>Dipl. Relaciones Laborales</nombre>
      <plan>2001</plan>
      <creditos>280</creditos>
      <centro>Facultad de Ciencias Sociales</centro>
      <subdirector>Alfonso Martín Luque</subdirector>
    </carrera>
    <carrera id="c04">
      <nombre>Lic. Quimica</nombre>
      <plan>2003</plan>
      <creditos>175</creditos>
      <centro>Facultad de Ciencias Experimentales</centro>
    </carrera>
    <carrera id="c05">
      <nombre>Lic. Biología</nombre>
      <plan>2001</plan>
      <creditos>175</creditos>
      <centro>Facultad de Ciencias Experimentales</centro>
    </carrera>
    <carrera id="c06">
      <nombre>Lic. Humanidades</nombre>
      <plan>1980</plan>
      <creditos>475</creditos>
      <centro>Facultad de Humanidades</centro>
    </carrera>
  </carreras>
  <!--  ASIGNATURAS  -->
  <asignaturas>
    <asignatura id="a01" titulacion="c01">
      <nombre>Ofimática</nombre>
      <creditos_teoricos>3</creditos_teoricos>
      <creditos_practicos>1.5</creditos_practicos>
      <trimestre>1</trimestre>
    </asignatura>
    <asignatura id="a02" titulacion="c01">
      <nombre>Ingeniería del Software</nombre>
      <creditos_teoricos>6</creditos_teoricos>
      <creditos_practicos>1.5</creditos_practicos>
      <trimestre>2</trimestre>
    </asignatura>
    <asignatura id="a03" titulacion="c02">
      <nombre>Administración de Empresas</nombre>
      <creditos_teoricos>4</creditos_teoricos>
      <creditos_practicos>1.5</creditos_practicos>
      <trimestre>1</trimestre>
    </asignatura>
    <asignatura id="a04" titulacion="c02">
      <nombre>Derecho Internacional</nombre>
      <creditos_teoricos>4</creditos_teoricos>
      <creditos_practicos>5</creditos_practicos>
      <trimestre>1</trimestre>
    </asignatura>
    <asignatura id="a05" titulacion="c04">
      <nombre>Pedagogía</nombre>
      <creditos_teoricos>4</creditos_teoricos>
      <creditos_practicos>1.5</creditos_practicos>
      <trimestre>2</trimestre>
    </asignatura>
    <asignatura id="a06" titulacion="c03">
      <nombre>Didáctica</nombre>
      <creditos_teoricos>4</creditos_teoricos>
      <creditos_practicos>3</creditos_practicos>
      <trimestre>2</trimestre>
    </asignatura>
    <asignatura id="a07" titulacion="c04">
      <nombre>Tecnología de los Alimentos</nombre>
      <creditos_teoricos>1.5</creditos_teoricos>
      <creditos_practicos>7.5</creditos_practicos>
      <trimestre>2</trimestre>
    </asignatura>
    <asignatura id="a08" titulacion="c01">
      <nombre>Bases de Datos</nombre>
      <creditos_teoricos>4.5</creditos_teoricos>
      <creditos_practicos>5.5</creditos_practicos>
      <trimestre>1</trimestre>
    </asignatura>
    <asignatura id="a09" titulacion="c06">
      <nombre>Historia del Pensamiento</nombre>
      <creditos_teoricos>6</creditos_teoricos>
      <creditos_practicos>0</creditos_practicos>
      <trimestre>2</trimestre>
    </asignatura>
  </asignaturas>
  <!--  ALUMNOS  -->
  <alumnos>
    <alumno id="e01">
      <apellido1>Rivas</apellido1>
      <apellido2>Santos</apellido2>
      <nombre>Víctor Manuel</nombre>
      <sexo>Hombre</sexo>
      <estudios>
        <carrera codigo="c01"/>
        <asignaturas>
          <asignatura codigo="a01"/>
          <asignatura codigo="a03"/>
          <asignatura codigo="a05"/>
          <asignatura codigo="a09"/>
        </asignaturas>
      </estudios>
    </alumno>
    <alumno id="e02">
      <apellido1>Pérez</apellido1>
      <apellido2>García</apellido2>
      <nombre>Luisa</nombre>
      <sexo>Mujer</sexo>
      <estudios>
        <carrera codigo="c02"/>
        <asignaturas>
          <asignatura codigo="a02"/>
          <asignatura codigo="a01"/>
        </asignaturas>
        <proyecto>Web de IBM.com</proyecto>
      </estudios>
    </alumno>
    <alumno id="e03" beca="si">
      <apellido1>Pérez</apellido1>
      <apellido2>Romero</apellido2>
      <nombre>Fernando</nombre>
      <sexo>Hombre</sexo>
      <estudios>
        <carrera codigo="c02"/>
        <asignaturas>
          <asignatura codigo="a02"/>
          <asignatura codigo="a01"/>
          <asignatura codigo="a04"/>
          <asignatura codigo="a09"/>
        </asignaturas>
      </estudios>
    </alumno>
    <alumno id="e04">
      <apellido1>Avalón</apellido1>
      <apellido2>Jiménez</apellido2>
      <nombre>María</nombre>
      <sexo>Mujer</sexo>
      <estudios>
        <carrera codigo="c01"/>
        <asignaturas>
          <asignatura codigo="a02"/>
          <asignatura codigo="a01"/>
          <asignatura codigo="a07"/>
        </asignaturas>
        <proyecto>Estudio de Salinidad del Pantano Iris</proyecto>
      </estudios>
    </alumno>
  </alumnos>
</universidad>
```

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Nombre de la universidad.
2. Pais de la universidad.
3. Nombres de las carreras.
4. Años de plan de estudio de las carreras.
5. Nombres de todos los alumnos.
6. Identificadores de todas las carreras.
7. Datos de la carrera cuyo id es `c01`.
8. Centro en que se estudia de la carrera cuyo id es `c02`.
9. Nombre de las carreras que tengan subdirector.
10. Nombre de los alumnos que estén haciendo proyecto.
11. Códigos de las carreras en las que hay algún alumno matriculado.
12. Apellidos y nombre de los alumnos con beca.
13. Nombre de las asignaturas de la titulación `c04`.
14. Nombre de las asignaturas de segundo trimestre.
15. Nombre de las asignaturas que no tienen 4 créditos teóricos.
16. Código de la carrera que estudia el último alumno.
17. Código de las asignaturas que estudian mujeres.
18. Nombre de los alumnos que están matriculados en la asignatura `a02`.
19. Códigos de las carreras que estudian los alumnos matriculados en alguna asignatura.
20. Apellidos de todos los hombres.
21. Nombre de la carrera que estudia Víctor Manuel.
22. Nombre de las asignaturas que estudia Luisa.
23. Primer apellido de los alumnos matriculados en Ingeniería del Software.
24. Nombre de las carreras que estudian los alumnos matriculados en la asignatura Tecnología de los Alimentos.
25. Nombre de los alumnos matriculados en carreras que no tienen subdirector.
26. Nombre de las alumnos matriculados en asignaturas con 0 créditos prácticos y que estudien la carrera de I.T. Informática.
27. Nombre de los alumnos que estudian carreras cuyos planes son anteriores a 2002.

<details>
<summary>Solución</summary>

Por su complejidad, aquí se presentan algunos ejemplos clave:

1. `/universidad/carreras/carrera/nombre` → Todos los nombres de carreras
2. `/universidad/carreras/carrera[subdirector]/nombre` → `Dipl. Relaciones Laborales`
3. `/universidad/alumnos/alumno[estudios/proyecto]/nombre` → `Luisa`, `María`
4. `/universidad/alumnos/alumno[@beca="si"]/(apellido1|apellido2|nombre)` → `Pérez Romero Fernando`
5. `/universidad/asignaturas/asignatura[@titulacion="c04"]/nombre` → `Pedagogía`, `Tecnología de los Alimentos`
6. `/universidad/asignaturas/asignatura[trimestre="2"]/nombre` → Asignaturas de segundo trimestre
7. `/universidad/asignaturas/asignatura[creditos_teoricos != 4]/@id`
8. `/universidad/alumnos/alumno[sexo="Mujer"]/estudios/asignaturas/asignatura/@codigo`

</details>

---

## Ejercicio 7

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ies>
  <nombre>IES Gonzalo Nzareno</nombre>
  <web>http://www.gonzalonzareno.org</web>
  <ciclos>
    <ciclo id="ASIR">
      <nombre>Administración de Sistemas Informáticos en Red</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2009" />
    </ciclo>
    <ciclo id="DAW">
      <nombre>Desarrollo de Aplicaciones Web</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2010" />
    </ciclo>
    <ciclo id="SMR">
      <nombre>Sistemas Microinformáticos y Redes</nombre>
      <grado>Medio</grado>
      <decretoTitulo año="2008" />
    </ciclo>
  </ciclos>
  <modulos>
    <modulo id="0228">
      <nombre>Aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>4</horasSemanales>
      <ciclo>SMR</ciclo>
    </modulo>
    <modulo id="0372">
      <nombre>Gestión de bases de datos</nombre>
      <curso>1</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
    <modulo id="0373">
      <nombre>Lenguajes de marcas y sistemas de gestión de información</nombre>
      <curso>1</curso>
      <horasSemanales>3</horasSemanales>
      <ciclo>ASIR</ciclo>
      <ciclo>DAW</ciclo>
    </modulo>
    <modulo id="0376">
      <nombre>Implantación de aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
  </modulos>
</ies>
```

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Nombre de los módulos del ciclo Sistemas Microinformáticos y Redes (en la expresión final no deben aparecer las siglas SMR).
2. Nombre completo de los ciclos que incluyen el módulo Lenguajes de marcas y sistemas de gestión de información.
3. Nombre de los módulos de ciclos de Grado Superior.
4. Nombre de los módulos de ciclos cuyo título se aprobó en 2008.
5. Grado de los ciclos con módulos de primer curso.

<details>
<summary>Solución</summary>

1. `/ies/ciclos/ciclo[nombre="Sistemas Microinformáticos y Redes"]/../modulos/modulo[ciclo="SMR"]/nombre` → `Aplicaciones web`
2. `/ies/ciclos/ciclo[decretoTitulo/@año="2010"]/nombre` → Devolver nombre completo del ciclo
3. `/ies/modulos/modulo[ciclo=/ies/ciclos/ciclo[grado="Superior"]/@id]/nombre`
4. `/ies/modulos/modulo[ciclo=/ies/ciclos/ciclo[decretoTitulo/@año="2008"]/@id]/nombre` → `Aplicaciones web`
5. `/ies/ciclos/ciclo[modulos/modulo[curso="1"]]/@grado` → Valores únicos de grado

</details>

---

## Ejercicio 8

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventario>
  <producto codigo="P1">
    <peso unidad="kg">10</peso>
    <nombre>Ordenador</nombre>
    <lugar edificio="B">
      <aula>10</aula>
    </lugar>
  </producto>
  <producto codigo="P2">
    <peso unidad="g">500</peso>
    <nombre>Switch</nombre>
    <lugar edificio="A">
      <aula>6</aula>
    </lugar>
  </producto>
</inventario>
```

### Tareas

Diseña el fichero XSLT que permita obtener la siguiente salida en HTML (ver en el sitio web original).

---

## Ejercicio 9

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventario>
  <producto codigo="P1">
    <peso unidad="kg">10</peso>
    <nombre>Ordenador</nombre>
    <lugar edificio="B">
      <aula>10</aula>
    </lugar>
  </producto>
  <producto codigo="P2">
    <peso unidad="g">500</peso>
    <nombre>Switch</nombre>
    <lugar edificio="A">
      <aula>6</aula>
    </lugar>
  </producto>
</inventario>
```

### Tareas

Diseña el fichero XSLT que permita crear un documento XML de salida cuyo resultado sea el de filtrar, del XML anterior, los elementos cuyo peso sea mayor que 10.

<details>
<summary>Solución</summary>

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/inventario">
    <inventario>
      <xsl:for-each select="producto[peso > 10]">
        <xsl:copy>
          <xsl:copy-of select="@*"/>
          <xsl:copy-of select="*"/>
        </xsl:copy>
      </xsl:for-each>
    </inventario>
  </xsl:template>
</xsl:stylesheet>
```

</details>

---

## Ejercicio 510

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventario>
  <producto codigo="P1">
    <peso unidad="kg">10</peso>
    <nombre>Ordenador</nombre>
    <lugar edificio="B">
      <aula>10</aula>
    </lugar>
  </producto>
  <producto codigo="P2">
    <peso unidad="g">500</peso>
    <nombre>Switch</nombre>
    <lugar edificio="A">
      <aula>6</aula>
    </lugar>
  </producto>
</inventario>
```

### Tareas

Diseña el fichero XSLT que permita crear un documento XML de salida cuyo resultado sea el de filtrar, del XML anterior, los productos que sean del edificio B.

<details>
<summary>Solución</summary>

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/inventario">
    <inventario>
      <xsl:for-each select="producto[lugar/@edificio='B']">
        <xsl:copy>
          <xsl:copy-of select="@*"/>
          <xsl:copy-of select="*"/>
        </xsl:copy>
      </xsl:for-each>
    </inventario>
  </xsl:template>
</xsl:stylesheet>
```

</details>

---

## Ejercicio 511

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventario>
  <producto codigo="P1">
    <peso unidad="kg">10</peso>
    <nombre>Ordenador</nombre>
    <lugar edificio="B">
      <aula>10</aula>
    </lugar>
  </producto>
  <producto codigo="P2">
    <peso unidad="g">500</peso>
    <nombre>Switch</nombre>
    <lugar edificio="A">
      <aula>6</aula>
    </lugar>
  </producto>
  <producto codigo="P3">
    <peso unidad="kg">15</peso>
    <nombre>Mesa</nombre>
    <lugar edificio="B">
      <aula>6</aula>
    </lugar>
  </producto>
</inventario>
```

### Tareas

Diseña el fichero XSLT que permita obtener la siguiente salida en HTML (ver en el sitio web original).

---

## Ejercicio 512

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventario>
  <producto codigo="P1">
    <peso unidad="kg">10</peso>
    <nombre>Ordenador</nombre>
    <lugar edificio="B">
      <aula>10</aula>
    </lugar>
  </producto>
  <producto codigo="P2">
    <peso unidad="g">500</peso>
    <nombre>Switch</nombre>
    <lugar edificio="A">
      <aula>6</aula>
    </lugar>
  </producto>
  <producto codigo="P3">
    <peso unidad="kg">15</peso>
    <nombre>Mesa</nombre>
    <lugar edificio="B">
      <aula>6</aula>
    </lugar>
  </producto>
</inventario>
```

### Tareas

Diseña el fichero XSLT que permita obtener la siguiente salida en HTML (ver en el sitio web original).

<details>
<summary>Solución</summary>

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/inventario">
    <html>
      <head><title>Inventario</title></head>
      <body>
        <table border="1" cellpadding="5">
          <tr bgcolor="#cccccc">
            <th>Código</th>
            <th>Nombre</th>
            <th>Peso</th>
            <th>Edificio</th>
            <th>Aula</th>
          </tr>
          <xsl:for-each select="producto">
            <tr>
              <td><xsl:value-of select="@codigo"/></td>
              <td><xsl:value-of select="nombre"/></td>
              <td><xsl:value-of select="peso"/> <xsl:value-of select="peso/@unidad"/></td>
              <td><xsl:value-of select="lugar/@edificio"/></td>
              <td><xsl:value-of select="lugar/aula"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

</details>

---

## Ejercicio 513

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<catalogo>
  <libro isbn="i1">
    <titulo>Don Quijote</titulo>
    <autores>
      <autor nacimiento="1547">Cervantes</autor>
    </autores>
  </libro>
  <libro isbn="i2">
    <titulo>Antologia</titulo>
    <autores>
      <autor nacimiento="1898">Lorca</autor>
      <autor nacimiento="1910">Miguel Hernandez</autor>
    </autores>
  </libro>
</catalogo>
```

### Tareas

Diseña un fichero XSLT (para cada apartado) que permita obtener la siguiente salida en HTML:

1. Mostrar una lista numerada los títulos de los libros con algún autor nacido después de 1900.
2. Mostrar una lista ordenada por orden alfabética inverso de los autores.
3. Mostrar el nombre de los autores nacidos despues del año 1700.

<details>
<summary>Solución</summary>

**Apartado 1:**

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/catalogo">
    <html>
      <body>
        <ol>
          <xsl:for-each select="libro[autores/autor[@nacimiento > 1900]]">
            <li><xsl:value-of select="titulo"/></li>
          </xsl:for-each>
        </ol>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

**Apartado 2:**

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/catalogo">
    <html>
      <body>
        <ul>
          <xsl:for-each select="libro/autores/autor">
            <xsl:sort select="." order="descending"/>
            <li><xsl:value-of select="."/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

**Apartado 3:**

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/catalogo">
    <html>
      <body>
        <p>
          <xsl:for-each select="libro/autores/autor[@nacimiento > 1700]">
            <xsl:value-of select="."/><br/>
          </xsl:for-each>
        </p>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

</details>

---

## Ejercicio 514

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<listado>
  <cuenta>
    <titular dni="5671001D">Ramon Perez</titular>
    <saldoactual moneda="euros">12000</saldoactual>
    <fechacreacion>13-abril-2012</fechacreacion>
  </cuenta>
  <fondo>
    <cuentaasociada>20-A</cuentaasociada>
    <datos>
      <cantidaddepositada>20000</cantidaddepositada>
      <moneda>Euros</moneda>
    </datos>
  </fondo>
  <fondo>
    <cuentaasociada>21-DX</cuentaasociada>
    <datos>
      <cantidaddepositada>4800</cantidaddepositada>
      <moneda>Dolares</moneda>
    </datos>
  </fondo>
  <cuenta>
    <titular dni="39812341C">Carmen Diaz</titular>
    <saldoactual moneda="euros">1900</saldoactual>
    <fechacreacion>15-febrero-2011</fechacreacion>
  </cuenta>
</listado>
```

### Tareas

Diseña un documento XSLT que permita transformar el fichero anterior en el siguiente fichero XML:

```xml
<datos>
  <cuentas>
    <cuenta dnititular="5671001D">
      <creacion>13-abril-2012</creacion>
      <titular>Ramon Perez</titular>
      <saldoactual>12000 euros</saldoactual>
    </cuenta>
    <cuenta dnititular="39812341C">
      <creacion>15-febrero-2011</creacion>
      <titular>Carmen Diaz</titular>
      <saldoactual>1900 euros</saldoactual>
    </cuenta>
  </cuentas>
  <fondos>
    <fondo cuentaasociada="20-A">
      <cantidaddepositada>20000</cantidaddepositada>
      <moneda>Euros</moneda>
    </fondo>
    <fondo cuentaasociada="21-DX">
      <cantidaddepositada>4800</cantidaddepositada>
      <moneda>Dolares</moneda>
    </fondo>
  </fondos>
</datos>
```

<details>
<summary>Solución</summary>

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/listado">
    <datos>
      <cuentas>
        <xsl:for-each select="cuenta">
          <cuenta dnititular="{titular/@dni}">
            <creacion><xsl:value-of select="fechacreacion"/></creacion>
            <titular><xsl:value-of select="titular"/></titular>
            <saldoactual><xsl:value-of select="saldoactual"/> <xsl:value-of select="saldoactual/@moneda"/></saldoactual>
          </cuenta>
        </xsl:for-each>
      </cuentas>
      <fondos>
        <xsl:for-each select="fondo">
          <fondo cuentaasociada="{cuentaasociada}">
            <cantidaddepositada><xsl:value-of select="datos/cantidaddepositada"/></cantidaddepositada>
            <moneda><xsl:value-of select="datos/moneda"/></moneda>
          </fondo>
        </xsl:for-each>
      </fondos>
    </datos>
  </xsl:template>
</xsl:stylesheet>
```

</details>

---

## Ejercicio 515

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<notas>
  <alumno convocatoria="Septiembre">
    <nombre>Carlos</nombre>
    <apellidos>Amaya Arozamena</apellidos>
    <matricula>m019843</matricula>
    <cuestionarios>8.0</cuestionarios>
    <tareas>8.0</tareas>
    <examen>6.0</examen>
    <final>8.0</final>
  </alumno>
  <alumno convocatoria="Junio">
    <nombre>Jose</nombre>
    <apellidos>Muñoz Soto</apellidos>
    <matricula>m019872</matricula>
    <cuestionarios>7.0</cuestionarios>
    <tareas>9.0</tareas>
    <examen>7.0</examen>
    <final>8.5</final>
  </alumno>
  <alumno convocatoria="Junio">
    <nombre>Ana</nombre>
    <apellidos>Martinez de la Fuente</apellidos>
    <matricula>m097215</matricula>
    <cuestionarios>8.0</cuestionarios>
    <tareas>9.0</tareas>
    <examen>9.0</examen>
    <final>8.5</final>
  </alumno>
  <alumno convocatoria="Septiembre">
    <nombre>Roberto</nombre>
    <apellidos>Carrera Fernández</apellidos>
    <matricula>m059312</matricula>
    <cuestionarios>6.0</cuestionarios>
    <tareas>7.0</tareas>
    <examen>6.0</examen>
    <final>6.5</final>
  </alumno>
  <alumno convocatoria="Septiembre">
    <nombre>Concepción</nombre>
    <apellidos>Lalinde Priego</apellidos>
    <matricula>m034093</matricula>
    <cuestionarios>4.0</cuestionarios>
    <tareas>3.0</tareas>
    <examen>2.0</examen>
    <final>3.0</final>
  </alumno>
  <alumno convocatoria="Junio">
    <nombre>Esther</nombre>
    <apellidos>Pereda</apellidos>
    <matricula>m938762</matricula>
    <cuestionarios>2.0</cuestionarios>
    <tareas>3.0</tareas>
    <examen>2.0</examen>
    <final>2.5</final>
  </alumno>
</notas>
```

### Tareas

Diseña el fichero XSLT que permita obtener la siguiente salida en HTML (ver en el sitio web original).

<details>
<summary>Solución</summary>

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/notas">
    <html>
      <body>
        <h1>Calificaciones</h1>
        <table border="1" cellpadding="5">
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Matrícula</th>
            <th>Cuestionarios</th>
            <th>Tareas</th>
            <th>Examen</th>
            <th>Nota Final</th>
            <th>Convocatoria</th>
          </tr>
          <xsl:for-each select="alumno">
            <tr>
              <td><xsl:value-of select="nombre"/></td>
              <td><xsl:value-of select="apellidos"/></td>
              <td><xsl:value-of select="matricula"/></td>
              <td><xsl:value-of select="cuestionarios"/></td>
              <td><xsl:value-of select="tareas"/></td>
              <td><xsl:value-of select="examen"/></td>
              <td><xsl:value-of select="final"/></td>
              <td><xsl:value-of select="@convocatoria"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

</details>

---

## Ejercicio 516

Consideremos el siguiente documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<catalogo>
  <libro id="bk101">
    <autor>Gambardella, Mateo</autor>
    <titulo>Guía del desarrollador de XML</titulo>
    <genero>Computadora</genero>
    <precio>44,95</precio>
    <fecha_de_publicacion>2000-10-01</fecha_de_publicacion>
    <description>Una mirada en profundidad a la creación de aplicaciones con XML.</description>
  </libro>
  <libro id="bk102">
    <autor>Rey, Esteban</autor>
    <titulo>La Torre Oscura: El Pistolero</titulo>
    <genero>Fantasía</genero>
    <precio>5,95</precio>
    <fecha_de_publicacion>10-12-1982</fecha_de_publicacion>
    <description>En el primer libro de esta brillante serie, Stephen King presenta a los lectores uno de sus héroes más enigmáticos, Roland de Gilead, El último pistolero...</description>
  </libro>
  <libro id="bk103">
    <autor>Haldeman, Joe</autor>
    <titulo>La guerra eterna</titulo>
    <género>Ciencia ficción</género>
    <precio>6,95</precio>
    <fecha_de_publicacion>1974-12-03</fecha_de_publicacion>
    <description>Los líderes de la Tierra han trazado una línea en la arena interestelar...</description>
  </libro>
  <libro id="bk104">
    <autor>Rothfuss, Patricio</autor>
    <titulo>El Nombre del Viento</titulo>
    <genero>Fantasía</genero>
    <precio>7,95</precio>
    <fecha_de_publicacion>2001-03-10</fecha_de_publicacion>
    <description>Contada con la propia voz de Kvothe, esta es la historia del joven dotado mágicamente...</description>
  </libro>
  <libro id="bk105">
    <autor>Kurzweil, Ray</autor>
    <titulo>Cómo crear una mente</titulo>
    <género>Ciencia</género>
    <precio>14,99</precio>
    <fecha_de_publicacion>2012-11-13</fecha_de_publicacion>
    <description>En Cómo crear una mente, Kurzweil presenta una provocadora exploración...</description>
  </libro>
</catalogo>
```

### Tareas

Diseña el fichero XSLT que permita obtener la siguiente salida en HTML (ver en el sitio web original).

<details>
<summary>Solución</summary>

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/catalogo">
    <html>
      <head><title>Catálogo de Libros</title></head>
      <body>
        <h1>Catálogo de Libros</h1>
        <table border="1" cellpadding="10">
          <tr bgcolor="#cccccc">
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Género</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
          <xsl:for-each select="libro">
            <tr>
              <td><xsl:value-of select="@id"/></td>
              <td><xsl:value-of select="titulo"/></td>
              <td><xsl:value-of select="autor"/></td>
              <td><xsl:value-of select="genero|género"/></td>
              <td><xsl:value-of select="precio"/> €</td>
              <td><xsl:value-of select="description"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

</details>

---

## Ejercicio 517

Consideremos el [siguiente documento XML](https://mp0373-lmsxi.vercel.app/assets/files/517-8b409ee6c1a0387d7c8fd3798ab052ea.xml).

### Tareas (salida esperada)

Diseña el fichero XSLT que permita obtener el siguiente documento XML con estructura de usuarios y aplicaciones.



---

## Ejercicio 518

Consideremos el [siguiente documento XML](https://mp0373-lmsxi.vercel.app/assets/files/518-094486cc2ec65643d6bf7329afd1fcba.xml).

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Los discos de tecnología `SCSI`.
2. El nombre del sistema operativo de la máquina con IP `192.168.10.45`.
3. Los atributos que figuran en los procesadores de la marca `AMD`.
4. Solo los textos que figuran en la configuracion (elemento `config`) del equipo con nombre `COPERNICO`.
5. Las máquinas de tipo `Semitorre` con sistema operativo `Windows XP`.
6. Los fabricantes de las máquinas que tienen `4GB` de memoria `DDR2`.
7. Los sistemas operativos de las máquinas en las que figure el número de núcleos del procesador.
8. Los nombre de las máquinas que emplee memoria con tecnología `DDR2`.
9. Las máquinas con procesador de marca `Intel` y grabadora de DVD.
10. La configuración de aquellas máquinas en las que figure un gateway.

## Ejercicio 519

Consideremos el [siguiente documento XML](https://mp0373-lmsxi.vercel.app/assets/files/519-1e1e198ecea3f8a7f622cbba163272d6.xml).

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Nombre de los ríos.
2. Idiomas de las repúblicas.
3. Países que tienen por lengua el español.
4. Tamaños de los países por donde pasa el Bidasoa.
5. Ríos de Europa.

<details>
<summary>Solución</summary>

Ejercicio con expresiones XPath sobre dokumento geográfico. Véase el archivo XML original.

</details>

---

## Ejercicio 520

Consideremos el [siguiente documento XML](https://mp0373-lmsxi.vercel.app/assets/files/520-0b00f7bb59c546094a7c65c4623bd715.xml).

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Los comentarios.
2. Los comentarios de la película `Leaving Las Vegas`.
3. Las películas de género `Drama`.
4. Los nombres de las actrices.
5. Los elementos que continen algún texto (elemento no vacíos).
6. Las películas en las que el título sea igual al título original.
7. Los atributos `id` correspondiente a la actriz `Elisabeth Shue`.
8. Los títulos de las películas en las que participó un actor del atributo `id=51`.
9. Obten los títulos de las películas en las que participó la actriz con nombre `Elisabeth Shue`.
10. El título de la última película del documento.
11. La suma de los importes de aquellas películas cuyo importe venga en dólares.
12. La suma (en euros) de los importes de las películas. Consideramos un cambio de 1€ = 1,4$.
13. Si modificáramos el XML anterior de forma que el nodo `<actor>` de `Elisabeth Shue` se llamara `<actriz>`, ¿cuál sería la expresión si quieramos obtener el nombre de los actores que han compartido película con `Elisabeth Shue`?

<details>
<summary>Solución</summary>

Ejercicio con expresiones XPath complejas sobre catálogo de películas. Véase el archivo XML original para la estructura exacta.

</details>

---

## Ejercicio 521

Consideremos el [siguiente documento XML](https://mp0373-lmsxi.vercel.app/assets/files/521-195c4003226624430214ebd40845e57b.xml).

### Tareas

Construye las expresiones XPath que permitan obtener los siguientes datos:

1. Nombres de los pilotos que corrieron para el equipo Mercedes-AMG Petronas F1 Team en 2020.
2. Nombres de los pilotos que corrieron para equipos que utilizaron motoristas fundados después de 1947.
3. Nombres de los equipos que utilizaron motoristas fundados después de 1940.
4. Nombres de los pilotos que corrieron en 2021.
5. Nombres de los motoristas que trabajaron con Sebastian Vettel.
6. Nombre de los compañeros de equipo que ha tenido Sebastian Vettel (puede aparecer el propio Sebastian).
7. Nombre de los compañeros de equipo que ha tenido Sebastian Vettel (sin que aparezca el propio Sebastian).
8. Media de las edades de los pilotos que participaron en la temporada 2021.

<details>
<summary>Solución</summary>

Ejercicio con expresiones XPath complejas sobre Fórmula 1. Véase el archivo XML original.

</details>

---

## Ejercicio 522

Consideremos el [siguiente documento XML](https://mp0373-lmsxi.vercel.app/assets/files/521-195c4003226624430214ebd40845e57b.xml).

### Tareas

Diseña un fichero XSLT que permita obtener la siguiente salida en XML (estructura de equipos de Fórmula 1 con motoristas y pilotos por temporada).

<details>
<summary>Solución</summary>

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <formula1>
      <equipos>
        <xsl:for-each select="//equipo">
          <equipo>
            <nombre><xsl:value-of select="nombre"/></nombre>
            <motorista id="{motorista/@id}">
              <nombre><xsl:value-of select="motorista/nombre"/></nombre>
              <año_fundacion><xsl:value-of select="motorista/año_fundacion"/></año_fundacion>
            </motorista>
            <xsl:for-each select="temporada">
              <temporada>
                <año><xsl:value-of select="año"/></año>
                <xsl:for-each select="piloto">
                  <piloto id="{@id}">
                    <nombre><xsl:value-of select="nombre"/></nombre>
                    <edad><xsl:value-of select="edad"/></edad>
                  </piloto>
                </xsl:for-each>
              </temporada>
            </xsl:for-each>
          </equipo>
        </xsl:for-each>
      </equipos>
    </formula1>
  </xsl:template>
</xsl:stylesheet>
```

</details>
