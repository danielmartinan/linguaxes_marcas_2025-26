# Almacenamiento de información

## Introducción

XML es un estándar ampliamente utilizado para almacenar e intercambiar **información estructurada**.

**Características principales:**

- Separa **estructura** y **presentación** de los datos.
- Es texto plano, por lo que puede abrirse con cualquier editor.
- Es interoperable entre plataformas y tecnologías.
- Permite validación mediante **DTD** o **XML Schema (XSD)**.

**Limitación importante:**

- Para localizar información específica, normalmente es necesario procesar el documento completo o disponer de índices en el motor de almacenamiento.

## Ámbitos de aplicación

Los documentos XML y sus requisitos de almacenamiento suelen clasificarse en **dos grupos**.

### Sistemas centrados en datos

- Estructura bien definida y predecible.
- Datos actualizables y consultables con frecuencia.
- Casos típicos: facturas, pedidos, catálogos, inventario.

En este escenario, las bases de datos relacionales suelen ofrecer mejor rendimiento para operaciones *transaccionales*.

### Sistemas centrados en documentos

- Tamaño y estructura más variables.
- Mayor heterogeneidad y presencia de campos opcionales.
- Casos típicos: artículos, publicaciones, normativa, documentación técnica.

En este escenario, los sistemas de gestión documental y las bases de datos XML nativas suelen encajar mejor.

## XML y bases de datos

Podemos entender una base de datos XML como una **colección de documentos XML bien formados**. En muchos casos, los documentos siguen un mismo esquema, aunque no es obligatorio.

**Ventajas de XML como formato de persistencia:**

- Flexibilidad estructural.
- Buen soporte para interoperabilidad e intercambio entre sistemas.
- Modelo jerárquico natural para información *semiestructurada*.

No obstante, XML **no sustituye por sí mismo** a un **SGBD completo**. Sin un motor adecuado, faltan capacidades clave como:

- Índices eficientes.
- Control de concurrencia.
- Transacciones ACID.
- Seguridad avanzada.
- Integridad referencial y lógica compleja.

## Sistemas de almacenamiento de la información

XML permite integrar **dos mundos tradicionalmente separados**:

- **Sistemas documentales (ficheros):** estructura irregular, tipos simples, importancia del orden.
- **Sistemas estructurados (relacionales):** estructura tabular, tipos complejos, menor importancia del orden.

**Semejanzas** entre XML + XSD y un SGBD:

- Definición de esquemas.
- Lenguajes de consulta (XPath, XQuery).
- APIs de procesamiento (DOM, SAX, StAX).

**Diferencias importantes:**

- XML no aporta de forma nativa todas las garantías de un SGBD.
- El rendimiento en cargas transaccionales suele ser inferior sin estrategias de indexación y partición.

## Bases de datos relacionales

Las bases de datos relacionales representan la información mediante tablas y se consultan habitualmente con **SQL**.

### Limitaciones al almacenar XML

- El modelo relacional es plano; XML es jerárquico.
- XML puede tener anidamiento profundo y estructura variable.
- El orden de nodos es relevante en XML y no en el modelo relacional clásico.
- XML suele ser más disperso (campos opcionales frecuentes).

### ¿Por qué se usan igualmente?

- Madurez tecnológica y herramientas consolidadas.
- Equipos con alta familiaridad en SQL.
- Buen rendimiento en operaciones transaccionales.

### Middleware de transformación

El middleware permite transformar entre estructura XML y modelo relacional.

**Pasos típicos:**

1. Crear un XSD base a partir de tablas y columnas.
2. Mapear claves primarias a identificadores XML (`ID`).
3. Representar relaciones (anidamiento o referencias `IDREF`).

**Ejemplo de directrices de mapeo:**

- Un elemento XML por tabla.
- Un atributo o elemento por columna no clave.
- Campos `NOT NULL` como requeridos.
- Campos nullable como opcionales.

> Nota: en XML, un `ID` debe ser único en todo el documento, no solo en una “tabla lógica”.

## Bases de datos orientadas a objetos

Las DBOO modelan directamente **objetos persistentes**.

**Características:**

- Cercanas a lenguajes orientados a objetos.
- Útiles cuando la aplicación trabaja con grafos de objetos complejos.
- Permiten mapear XML a objetos de forma natural.

**Componentes habituales** (estándares ODMG históricos):

- **ODL** (Object Definition Language).
- **OQL** (Object Query Language).
- **Bindings OML** en lenguajes como Java o C++.

## Bases de datos XML nativas

Son motores diseñados específicamente para **almacenar y consultar XML**.

**Características habituales:**

- Almacenamiento por colecciones.
- Validación de documentos.
- Consultas con XPath/XQuery.
- Indexación de nodos y valores.
- Actualización y borrado de documentos.
- Soporte multiusuario y transacciones.

### Tipos según almacenamiento

#### Basado en texto

- Guarda el XML como texto completo.
- Añade índices y capacidades de consulta sobre el texto.

#### Basado en modelo

- Guarda una representación interna (árbol/binario) del XML.
- Suele optimizar navegación y consultas estructurales.