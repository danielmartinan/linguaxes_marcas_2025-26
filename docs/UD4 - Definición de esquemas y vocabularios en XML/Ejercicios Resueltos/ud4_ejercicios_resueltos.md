# Ejercicios resueltos XSD

## Ejercicio 4.1 - Estado de dispositivo con enumeración

Elabora un documento XSD que permita validar el siguiente documento XML:

```xml
<dispositivo>conectado</dispositivo>
```

El contenido del elemento `<dispositivo>` solo puede tomar dos valores: `conectado` u `ocupado`.

<details>
    <summary>Solución</summary>

**Documento XML (dispositivo.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dispositivo
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" 
    xs:noNamespaceSchemaLocation="dispositivo.xsd">conectado</dispositivo>
```

**Esquema XSD (dispositivo.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    
    <xs:element name="dispositivo" type="estado"/>
    
    <xs:simpleType name="estado">
        <xs:restriction base="xs:string">
            <xs:enumeration value="conectado"/>
            <xs:enumeration value="ocupado"/>
        </xs:restriction>
    </xs:simpleType>
    
</xs:schema>
```

</details>

## Ejercicio 4.2 - Nota con elementos en secuencia

Elabora un documento XSD que permita validar el siguiente documento XML:

```xml
<nota> 
  <para>Pedro</para> 
  <de>Laura</de> 
  <titulo>Recordatorio</titulo> 
  <contenido>A las 7:00 pm en la puerta del teatro</contenido> 
</nota>
```

El elemento `<nota>` debe contener los elementos `<para>`, `<de>`, `<titulo>` y `<contenido>`, en ese orden. Todos los elementos son de tipo cadena de texto.

<details>
    <summary>Solución</summary>

**Documento XML (nota.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" 
    xs:noNamespaceSchemaLocation="nota.xsd"> 
    <para>Pedro</para> 
    <de>Laura</de> 
    <titulo>Recordatorio</titulo> 
    <contenido>A las 7:00 pm en la puerta del teatro</contenido> 
</nota>
```

**Esquema XSD (nota.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    
    <xs:element name="nota">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="para" type="xs:string"/>
                <xs:element name="de" type="xs:string"/>
                <xs:element name="titulo" type="xs:string"/>
                <xs:element name="contenido" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
    
</xs:schema>
```

</details>

## Ejercicio 4.3 - Biblioteca digital con tipos personalizados

Crea un esquema XSD para validar una **biblioteca digital** que almacene información sobre libros. Cada libro debe contener:

- Un atributo `isbn` obligatorio que siga el formato ISBN-13 (ejemplo: `978-84-9804-654-0`).
- Un elemento `titulo` obligatorio (cadena de texto de máximo 200 caracteres).
- Un elemento `autor` que puede aparecer de 1 a 5 veces (nombre completo).
- Un elemento `editorial` obligatorio.
- Un elemento `anioPublicacion` que sea un año válido entre 1900 y 2026.
- Un elemento `precio` opcional con máximo 2 decimales.
- Un elemento `categoria` que solo pueda ser: `ficcion`, `no-ficcion`, `tecnico`, `infantil` o `ensayo`.
- Un elemento `disponible` de tipo booleano.

El documento debe contener uno o más libros dentro de un elemento raíz `<biblioteca>`.

**Ejemplo de documento XML válido:**

```xml
<biblioteca>
    <libro isbn="978-84-9804-654-0">
        <titulo>Cien años de soledad</titulo>
        <autor>Gabriel García Márquez</autor>
        <editorial>Editorial Sudamericana</editorial>
        <anioPublicacion>1967</anioPublicacion>
        <precio>19.95</precio>
        <categoria>ficcion</categoria>
        <disponible>true</disponible>
    </libro>
</biblioteca>
```

**Requisitos:**

- Utiliza tipos de datos personalizados para `isbn`, `anioPublicacion` y `categoria`.
- El patrón del ISBN debe ser: tres dígitos, guion, dos dígitos, guion, cuatro dígitos, guion, tres dígitos, guion, un dígito.
- Documenta el esquema con anotaciones.

<details>
    <summary>Solución</summary>

**Documento XML (biblioteca.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" 
    xs:noNamespaceSchemaLocation="biblioteca.xsd">
    <libro isbn="978-84-9804-654-0">
        <titulo>Cien años de soledad</titulo>
        <autor>Gabriel García Márquez</autor>
        <editorial>Editorial Sudamericana</editorial>
        <anioPublicacion>1967</anioPublicacion>
        <precio>19.95</precio>
        <categoria>ficcion</categoria>
        <disponible>true</disponible>
    </libro>
    <libro isbn="978-84-663-0001-1">
        <titulo>El Quijote</titulo>
        <autor>Miguel de Cervantes</autor>
        <editorial>Editorial Cátedra</editorial>
        <anioPublicacion>1605</anioPublicacion>
        <categoria>ficcion</categoria>
        <disponible>false</disponible>
    </libro>
</biblioteca>
```

**Esquema XSD (biblioteca.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>
            Esquema para validar una biblioteca digital con información de libros.
        </xs:documentation>
    </xs:annotation>

    <!-- Elemento raíz -->
    <xs:element name="biblioteca">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="libro" type="libroType" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Tipo complejo para libro -->
    <xs:complexType name="libroType">
        <xs:sequence>
            <xs:element name="titulo" type="tituloType"/>
            <xs:element name="autor" type="xs:string" minOccurs="1" maxOccurs="5"/>
            <xs:element name="editorial" type="xs:string"/>
            <xs:element name="anioPublicacion" type="anioType"/>
            <xs:element name="precio" type="precioType" minOccurs="0"/>
            <xs:element name="categoria" type="categoriaType"/>
            <xs:element name="disponible" type="xs:boolean"/>
        </xs:sequence>
        <xs:attribute name="isbn" type="isbnType" use="required"/>
    </xs:complexType>

    <!-- Tipos simples personalizados -->
    <xs:simpleType name="isbnType">
        <xs:annotation>
            <xs:documentation>Formato ISBN-13: 978-84-9804-654-0</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:pattern value="\d{3}-\d{2}-\d{4}-\d{3}-\d"/>
        </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="tituloType">
        <xs:restriction base="xs:string">
            <xs:maxLength value="200"/>
        </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="anioType">
        <xs:annotation>
            <xs:documentation>Año de publicación entre 1900 y 2026</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:integer">
            <xs:minInclusive value="1900"/>
            <xs:maxInclusive value="2026"/>
        </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="precioType">
        <xs:restriction base="xs:decimal">
            <xs:fractionDigits value="2"/>
            <xs:minInclusive value="0.00"/>
        </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="categoriaType">
        <xs:annotation>
            <xs:documentation>Categorías permitidas para los libros</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:enumeration value="ficcion"/>
            <xs:enumeration value="no-ficcion"/>
            <xs:enumeration value="tecnico"/>
            <xs:enumeration value="infantil"/>
            <xs:enumeration value="ensayo"/>
        </xs:restriction>
    </xs:simpleType>
    
</xs:schema>
```

</details>

## Ejercicio 4.4 - Sistema de gestión de empleados con ID/IDREF

Diseña un esquema XSD para validar un **sistema de gestión de empleados** de una empresa. El documento debe contener:

- Un elemento raíz `<empresa>` con un atributo `nombre` obligatorio y un atributo `cif` (formato: letra + 8 dígitos).
- Dentro de `<empresa>`, un elemento `<empleados>` que contenga múltiples elementos `<empleado>`.
- Cada `<empleado>` debe tener:
  - Un atributo `id` de tipo `xs:ID` obligatorio.
  - Un elemento `<datosPersonales>` que contenga:
    - `nombre` (obligatorio, máximo 50 caracteres)
    - `apellidos` (obligatorio, máximo 100 caracteres)
    - `dni` (formato: 8 dígitos + letra mayúscula)
    - `fechaNacimiento` (tipo fecha)
    - `email` (opcional, formato email básico: texto@texto.texto)
  - Un elemento `<departamento>` que solo pueda ser: `ventas`, `desarrollo`, `marketing`, `administracion` o `recursos-humanos`.
  - Un elemento `<cargo>` (cadena de texto).
  - Un elemento `<salario>` (decimal positivo con máximo 2 decimales).
  - Un elemento `<supervisor>` opcional de tipo `xs:IDREF` que haga referencia al `id` de otro empleado.
  - Un elemento `<telefonos>` que pueda contener de 0 a 3 elementos `<telefono>`, cada uno con formato de 9 dígitos.

**Ejemplo de documento XML válido:**

```xml
<empresa nombre="TechCorp S.L." cif="B12345678">
    <empleados>
        <empleado id="emp001">
            <datosPersonales>
                <nombre>Juan</nombre>
                <apellidos>García López</apellidos>
                <dni>12345678A</dni>
                <fechaNacimiento>1985-03-15</fechaNacimiento>
                <email>juan.garcia@techcorp.com</email>
            </datosPersonales>
            <departamento>desarrollo</departamento>
            <cargo>Director de Desarrollo</cargo>
            <salario>45000.00</salario>
            <telefonos>
                <telefono>986123456</telefono>
            </telefonos>
        </empleado>
        <empleado id="emp002">
            <datosPersonales>
                <nombre>María</nombre>
                <apellidos>Rodríguez Pérez</apellidos>
                <dni>87654321B</dni>
                <fechaNacimiento>1990-07-20</fechaNacimiento>
            </datosPersonales>
            <departamento>desarrollo</departamento>
            <cargo>Desarrolladora Senior</cargo>
            <salario>38000.00</salario>
            <supervisor>emp001</supervisor>
            <telefonos>
                <telefono>986234567</telefono>
                <telefono>666777888</telefono>
            </telefonos>
        </empleado>
    </empleados>
</empresa>
```

**Requisitos:**

- Define tipos complejos reutilizables para `datosPersonales` y `empleado`.
- Utiliza tipos simples personalizados para `dni`, `departamento` y `telefono`.
- Documenta el esquema indicando el propósito de cada tipo definido.

<details>
    <summary>Solución</summary>

**Documento XML (empresa.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<empresa nombre="TechCorp S.L." cif="B12345678"
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" 
    xs:noNamespaceSchemaLocation="empresa.xsd">
    <empleados>
        <empleado id="emp001">
            <datosPersonales>
                <nombre>Juan</nombre>
                <apellidos>García López</apellidos>
                <dni>12345678A</dni>
                <fechaNacimiento>1985-03-15</fechaNacimiento>
                <email>juan.garcia@techcorp.com</email>
            </datosPersonales>
            <departamento>desarrollo</departamento>
            <cargo>Director de Desarrollo</cargo>
            <salario>45000.00</salario>
            <telefonos>
                <telefono>986123456</telefono>
            </telefonos>
        </empleado>
        <empleado id="emp002">
            <datosPersonales>
                <nombre>María</nombre>
                <apellidos>Rodríguez Pérez</apellidos>
                <dni>87654321B</dni>
                <fechaNacimiento>1990-07-20</fechaNacimiento>
            </datosPersonales>
            <departamento>desarrollo</departamento>
            <cargo>Desarrolladora Senior</cargo>
            <salario>38000.00</salario>
            <supervisor>emp001</supervisor>
            <telefonos>
                <telefono>986234567</telefono>
                <telefono>666777888</telefono>
            </telefonos>
        </empleado>
    </empleados>
</empresa>
```

**Esquema XSD (empresa.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>
            Esquema para sistema de gestión de empleados.
            Utiliza xs:ID e xs:IDREF para establecer relaciones entre empleados.
        </xs:documentation>
    </xs:annotation>

    <!-- Elemento raíz -->
    <xs:element name="empresa">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="empleados">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="empleado" type="empleadoType" maxOccurs="unbounded"/>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
            <xs:attribute name="nombre" type="xs:string" use="required"/>
            <xs:attribute name="cif" type="cifType" use="required"/>
        </xs:complexType>
    </xs:element>

    <!-- Tipo complejo para empleado -->
    <xs:complexType name="empleadoType">
        <xs:annotation>
            <xs:documentation>Define la estructura de un empleado</xs:documentation>
        </xs:annotation>
        <xs:sequence>
            <xs:element name="datosPersonales" type="datosPersonalesType"/>
            <xs:element name="departamento" type="departamentoType"/>
            <xs:element name="cargo" type="xs:string"/>
            <xs:element name="salario" type="salarioType"/>
            <xs:element name="supervisor" type="xs:IDREF" minOccurs="0"/>
            <xs:element name="telefonos" minOccurs="0">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="telefono" type="telefonoType" minOccurs="0" maxOccurs="3"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
        <xs:attribute name="id" type="xs:ID" use="required"/>
    </xs:complexType>

    <!-- Tipo complejo para datos personales -->
    <xs:complexType name="datosPersonalesType">
        <xs:annotation>
            <xs:documentation>Información personal del empleado</xs:documentation>
        </xs:annotation>
        <xs:sequence>
            <xs:element name="nombre">
                <xs:simpleType>
                    <xs:restriction base="xs:string">
                        <xs:maxLength value="50"/>
                    </xs:restriction>
                </xs:simpleType>
            </xs:element>
            <xs:element name="apellidos">
                <xs:simpleType>
                    <xs:restriction base="xs:string">
                        <xs:maxLength value="100"/>
                    </xs:restriction>
                </xs:simpleType>
            </xs:element>
            <xs:element name="dni" type="dniType"/>
            <xs:element name="fechaNacimiento" type="xs:date"/>
            <xs:element name="email" type="emailType" minOccurs="0"/>
        </xs:sequence>
    </xs:complexType>

    <!-- Tipos simples personalizados -->
    <xs:simpleType name="cifType">
        <xs:annotation>
            <xs:documentation>CIF con formato: letra + 8 dígitos</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:pattern value="[A-Z][0-9]{8}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="dniType">
        <xs:annotation>
            <xs:documentation>DNI con formato: 8 dígitos + letra mayúscula</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{8}[A-Z]"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="emailType">
        <xs:annotation>
            <xs:documentation>Email con formato básico: texto@texto.texto</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:pattern value="[^@]+@[^@]+\.[^@]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="departamentoType">
        <xs:annotation>
            <xs:documentation>Departamentos permitidos en la empresa</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:enumeration value="ventas"/>
            <xs:enumeration value="desarrollo"/>
            <xs:enumeration value="marketing"/>
            <xs:enumeration value="administracion"/>
            <xs:enumeration value="recursos-humanos"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="salarioType">
        <xs:annotation>
            <xs:documentation>Salario con máximo 2 decimales</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:decimal">
            <xs:minInclusive value="0.00"/>
            <xs:fractionDigits value="2"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="telefonoType">
        <xs:annotation>
            <xs:documentation>Teléfono de 9 dígitos</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{9}"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>

## Ejercicio 4.5 - Catálogo de productos con choice

Crea un esquema XSD para validar un **catálogo de productos** de una tienda online que soporte diferentes tipos de productos. El esquema debe permitir:

- Un elemento raíz `<catalogo>` con atributo `version` obligatorio (formato: número.número, ej: `1.0`, `2.5`).
- Dentro de `<catalogo>`, múltiples elementos `<producto>`.
- Cada `<producto>` tiene:
  - Atributo `codigo` obligatorio (formato: PROD seguido de 6 dígitos, ej: `PROD000123`).
  - Atributo `destacado` opcional de tipo booleano.
  - Elemento `<nombre>` obligatorio (entre 5 y 100 caracteres).
  - Elemento `<descripcion>` obligatorio (entre 20 y 500 caracteres).
  - Elemento `<precio>` con atributo `divisa` que puede ser `EUR`, `USD` o `GBP` (contenido: decimal positivo con máximo 2 decimales).
  - Elemento `<stock>` (entero no negativo).
  - Elemento `<categorias>` que contenga de 1 a 3 elementos `<categoria>`.
  - **ELECCIÓN:** El producto debe tener UNO de los siguientes grupos de información específica:
    - **Para electrónica:**
      - `<marca>` (texto)
      - `<garantia>` (entero positivo, en meses)
      - `<voltaje>` opcional (entero positivo)
    - **Para ropa:**
      - `<talla>` (valores permitidos: `XS`, `S`, `M`, `L`, `XL`, `XXL`)
      - `<color>` (texto)
      - `<material>` (texto)
    - **Para libros:**
      - `<isbn>` (formato ISBN-13)
      - `<autor>` (texto, puede aparecer de 1 a 3 veces)
      - `<paginas>` (entero positivo)
  - Elemento `<imagenes>` que contenga de 1 a 5 elementos `<imagen>` (URLs válidas).
  - Elemento `<valoraciones>` opcional que contenga:
    - De 0 a ilimitadas `<valoracion>` con:
      - Atributo `puntuacion` (entero de 1 a 5)
      - Atributo `usuario` (texto)
      - Contenido: comentario del usuario (texto)

**Ejemplo de documento XML válido (producto electrónico):**

```xml
<catalogo version="2.1">
    <producto codigo="PROD000123" destacado="true">
        <nombre>Laptop Dell XPS 15</nombre>
        <descripcion>Portátil de alta gama con procesador Intel Core i7, 16GB RAM y pantalla 4K</descripcion>
        <precio divisa="EUR">1299.99</precio>
        <stock>15</stock>
        <categorias>
            <categoria>Informática</categoria>
            <categoria>Portátiles</categoria>
        </categorias>
        <marca>Dell</marca>
        <garantia>24</garantia>
        <voltaje>220</voltaje>
        <imagenes>
            <imagen>https://ejemplo.com/laptop1.jpg</imagen>
            <imagen>https://ejemplo.com/laptop2.jpg</imagen>
        </imagenes>
        <valoraciones>
            <valoracion puntuacion="5" usuario="juan_garcia">Excelente equipo, muy rápido</valoracion>
            <valoracion puntuacion="4" usuario="maria_lopez">Buena calidad pero un poco caro</valoracion>
        </valoraciones>
    </producto>
</catalogo>
```

**Requisitos:**

- Utiliza `<xs:choice>` para los diferentes tipos de producto (electrónica, ropa, libros).
- Define grupos reutilizables para las características específicas de cada tipo.
- Utiliza tipos simples personalizados con restricciones adecuadas.
- Documenta claramente cada sección del esquema.

<details>
    <summary>Solución</summary>

**Documento XML (catalogo.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<catalogo version="2.1"
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" 
    xs:noNamespaceSchemaLocation="catalogo.xsd">
    <producto codigo="PROD000123" destacado="true">
        <nombre>Laptop Dell XPS 15</nombre>
        <descripcion>Portátil de alta gama con procesador Intel Core i7, 16GB RAM y pantalla 4K</descripcion>
        <precio divisa="EUR">1299.99</precio>
        <stock>15</stock>
        <categorias>
            <categoria>Informática</categoria>
            <categoria>Portátiles</categoria>
        </categorias>
        <marca>Dell</marca>
        <garantia>24</garantia>
        <voltaje>220</voltaje>
        <imagenes>
            <imagen>https://ejemplo.com/laptop1.jpg</imagen>
            <imagen>https://ejemplo.com/laptop2.jpg</imagen>
        </imagenes>
        <valoraciones>
            <valoracion puntuacion="5" usuario="juan_garcia">Excelente equipo, muy rápido</valoracion>
            <valoracion puntuacion="4" usuario="maria_lopez">Buena calidad pero un poco caro</valoracion>
        </valoraciones>
    </producto>
</catalogo>
```

**Esquema XSD (catalogo.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>
            Esquema para catálogo de productos de tienda online.
            Soporta diferentes tipos de productos: electrónica, ropa y libros.
        </xs:documentation>
    </xs:annotation>

    <!-- Elemento raíz -->
    <xs:element name="catalogo">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="producto" type="productoType" maxOccurs="unbounded"/>
            </xs:sequence>
            <xs:attribute name="version" type="versionType" use="required"/>
        </xs:complexType>
    </xs:element>

    <!-- Tipo complejo para producto -->
    <xs:complexType name="productoType">
        <xs:sequence>
            <xs:element name="nombre" type="nombreType"/>
            <xs:element name="descripcion" type="descripcionType"/>
            <xs:element name="precio" type="precioType"/>
            <xs:element name="stock" type="xs:nonNegativeInteger"/>
            <xs:element name="categorias">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="categoria" type="xs:string" minOccurs="1" maxOccurs="3"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <!-- Choice: solo uno de estos grupos -->
            <xs:choice>
                <xs:group ref="electronicaGroup"/>
                <xs:group ref="ropaGroup"/>
                <xs:group ref="librosGroup"/>
            </xs:choice>
            <xs:element name="imagenes">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="imagen" type="xs:anyURI" minOccurs="1" maxOccurs="5"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="valoraciones" minOccurs="0">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="valoracion" type="valoracionType" minOccurs="0" maxOccurs="unbounded"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
        <xs:attribute name="codigo" type="codigoProductoType" use="required"/>
        <xs:attribute name="destacado" type="xs:boolean"/>
    </xs:complexType>

    <!-- Grupos para diferentes tipos de productos -->
    <xs:group name="electronicaGroup">
        <xs:annotation>
            <xs:documentation>Características específicas para productos electrónicos</xs:documentation>
        </xs:annotation>
        <xs:sequence>
            <xs:element name="marca" type="xs:string"/>
            <xs:element name="garantia" type="xs:positiveInteger"/>
            <xs:element name="voltaje" type="xs:positiveInteger" minOccurs="0"/>
        </xs:sequence>
    </xs:group>

    <xs:group name="ropaGroup">
        <xs:annotation>
            <xs:documentation>Características específicas para ropa</xs:documentation>
        </xs:annotation>
        <xs:sequence>
            <xs:element name="talla" type="tallaType"/>
            <xs:element name="color" type="xs:string"/>
            <xs:element name="material" type="xs:string"/>
        </xs:sequence>
    </xs:group>

    <xs:group name="librosGroup">
        <xs:annotation>
            <xs:documentation>Características específicas para libros</xs:documentation>
        </xs:annotation>
        <xs:sequence>
            <xs:element name="isbn" type="isbnType"/>
            <xs:element name="autor" type="xs:string" minOccurs="1" maxOccurs="3"/>
            <xs:element name="paginas" type="xs:positiveInteger"/>
        </xs:sequence>
    </xs:group>

    <!-- Tipo complejo para precio con divisa -->
    <xs:complexType name="precioType">
        <xs:simpleContent>
            <xs:extension base="precioValorType">
                <xs:attribute name="divisa" type="divisaType" use="required"/>
            </xs:extension>
        </xs:simpleContent>
    </xs:complexType>

    <!-- Tipo complejo para valoración -->
    <xs:complexType name="valoracionType">
        <xs:simpleContent>
            <xs:extension base="xs:string">
                <xs:attribute name="puntuacion" type="puntuacionType" use="required"/>
                <xs:attribute name="usuario" type="xs:string" use="required"/>
            </xs:extension>
        </xs:simpleContent>
    </xs:complexType>

    <!-- Tipos simples personalizados -->
    <xs:simpleType name="versionType">
        <xs:restriction base="xs:string">
            <xs:pattern value="\d+\.\d+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="codigoProductoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="PROD[0-9]{6}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="nombreType">
        <xs:restriction base="xs:string">
            <xs:minLength value="5"/>
            <xs:maxLength value="100"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="descripcionType">
        <xs:restriction base="xs:string">
            <xs:minLength value="20"/>
            <xs:maxLength value="500"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="precioValorType">
        <xs:restriction base="xs:decimal">
            <xs:minInclusive value="0.00"/>
            <xs:fractionDigits value="2"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="divisaType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="EUR"/>
            <xs:enumeration value="USD"/>
            <xs:enumeration value="GBP"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tallaType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="XS"/>
            <xs:enumeration value="S"/>
            <xs:enumeration value="M"/>
            <xs:enumeration value="L"/>
            <xs:enumeration value="XL"/>
            <xs:enumeration value="XXL"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="isbnType">
        <xs:restriction base="xs:string">
            <xs:pattern value="\d{3}-\d{2}-\d{4}-\d{3}-\d"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="puntuacionType">
        <xs:restriction base="xs:integer">
            <xs:minInclusive value="1"/>
            <xs:maxInclusive value="5"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>

## Ejercicio 4.6 - Sistema de gestión hospitalaria (avanzado)

Diseña un esquema XSD completo para validar un **sistema de gestión hospitalaria** que incluya pacientes, médicos, citas y tratamientos. Este ejercicio integra múltiples conceptos avanzados de XSD.

**Estructura requerida:**

1. **Elemento raíz `<hospital>`:**
   - Atributo `nombre` obligatorio
   - Atributo `ciudad` obligatorio
   - Atributo `codigo` (formato: HOS-XXX donde X es un dígito)

2. **Elemento `<personal>`:**
   - Contiene múltiples elementos `<medico>`:
     - Atributo `id` de tipo `xs:ID`
     - Atributo `especialidad` (valores: `medicina-general`, `cardiologia`, `pediatria`, `traumatologia`, `neurologia`)
     - `<nombre>` (texto, máximo 50 caracteres)
     - `<apellidos>` (texto, máximo 100 caracteres)
     - `<numColegiado>` (formato: 6 dígitos + 2 letras mayúsculas, ej: `123456AB`)
     - `<telefono>` (9 dígitos)
     - `<email>` (formato email)
     - `<horario>` que contenga de 1 a 7 elementos `<dia>` con:
       - Atributo `nombre` (valores: `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`)
       - `<horaInicio>` (formato `xs:time`)
       - `<horaFin>` (formato `xs:time`)

3. **Elemento `<pacientes>`:**
   - Contiene múltiples elementos `<paciente>`:
     - Atributo `id` de tipo `xs:ID`
     - Atributo `tipoSeguro` (valores: `publico`, `privado`, `ninguno`)
     - `<datosPersonales>` (reutiliza un tipo complejo que incluya nombre, apellidos, DNI, fecha de nacimiento, dirección)
     - `<numeroSeguroSocial>` (12 dígitos)
     - `<contactoEmergencia>` con:
       - `<nombre>`
       - `<parentesco>`
       - `<telefono>`
     - `<alergias>` opcional que pueda contener de 0 a ilimitadas `<alergia>` (texto)
     - `<grupoSanguineo>` (valores: `A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`)

4. **Elemento `<citas>`:**
   - Contiene múltiples elementos `<cita>`:
     - Atributo `id` de tipo `xs:ID`
     - Atributo `estado` (valores: `pendiente`, `realizada`, `cancelada`)
     - `<paciente>` de tipo `xs:IDREF` (referencia a un paciente)
     - `<medico>` de tipo `xs:IDREF` (referencia a un médico)
     - `<fechaHora>` (tipo `xs:dateTime`)
     - `<motivo>` (texto, entre 10 y 500 caracteres)
     - `<sala>` (formato: Sala seguido de un número de 1 a 3 dígitos, ej: `Sala5`, `Sala123`)
     - `<diagnostico>` opcional (texto, máximo 1000 caracteres)

5. **Elemento `<tratamientos>`:**
   - Contiene múltiples elementos `<tratamiento>`:
     - Atributo `codigo` (formato: TRT- + 5 dígitos)
     - `<paciente>` de tipo `xs:IDREF`
     - `<medicoPrescriptor>` de tipo `xs:IDREF`
     - `<fechaInicio>` (tipo `xs:date`)
     - `<fechaFin>` opcional (tipo `xs:date`)
     - `<medicamentos>` con de 1 a 10 elementos `<medicamento>`:
       - `<nombre>` (texto)
       - `<dosis>` (texto, ej: "500mg cada 8 horas")
       - `<duracion>` (entero positivo, en días)
     - `<observaciones>` opcional (texto)

**Ejemplo parcial de documento XML válido:**

```xml
<hospital nombre="Hospital General" ciudad="Santiago de Compostela" codigo="HOS-001">
    <personal>
        <medico id="med001" especialidad="cardiologia">
            <nombre>Carlos</nombre>
            <apellidos>Fernández Gómez</apellidos>
            <numColegiado>123456AB</numColegiado>
            <telefono>981234567</telefono>
            <email>carlos.fernandez@hospital.com</email>
            <horario>
                <dia nombre="lunes">
                    <horaInicio>08:00:00</horaInicio>
                    <horaFin>15:00:00</horaFin>
                </dia>
                <dia nombre="miercoles">
                    <horaInicio>08:00:00</horaInicio>
                    <horaFin>15:00:00</horaFin>
                </dia>
            </horario>
        </medico>
    </personal>
    
    <pacientes>
        <paciente id="pac001" tipoSeguro="publico">
            <datosPersonales>
                <nombre>Ana</nombre>
                <apellidos>García Martínez</apellidos>
                <dni>12345678A</dni>
                <fechaNacimiento>1980-05-15</fechaNacimiento>
                <direccion>
                    <calle>Rúa Principal</calle>
                    <numero>25</numero>
                    <ciudad>Santiago</ciudad>
                    <codigoPostal>15701</codigoPostal>
                </direccion>
            </datosPersonales>
            <numeroSeguroSocial>123456789012</numeroSeguroSocial>
            <contactoEmergencia>
                <nombre>Pedro García</nombre>
                <parentesco>Esposo</parentesco>
                <telefono>666777888</telefono>
            </contactoEmergencia>
            <alergias>
                <alergia>Penicilina</alergia>
            </alergias>
            <grupoSanguineo>O+</grupoSanguineo>
        </paciente>
    </pacientes>
    
    <citas>
        <cita id="cita001" estado="pendiente">
            <paciente>pac001</paciente>
            <medico>med001</medico>
            <fechaHora>2026-01-15T10:00:00</fechaHora>
            <motivo>Revisión rutinaria cardiológica</motivo>
            <sala>Sala15</sala>
        </cita>
    </citas>
    
    <tratamientos>
        <tratamiento codigo="TRT-00001">
            <paciente>pac001</paciente>
            <medicoPrescriptor>med001</medicoPrescriptor>
            <fechaInicio>2026-01-10</fechaInicio>
            <medicamentos>
                <medicamento>
                    <nombre>Atorvastatina</nombre>
                    <dosis>20mg cada 24 horas</dosis>
                    <duracion>30</duracion>
                </medicamento>
            </medicamentos>
            <observaciones>Controlar niveles de colesterol mensualmente</observaciones>
        </tratamiento>
    </tratamientos>
</hospital>
```

**Requisitos:**

- Define tipos complejos reutilizables para estructuras comunes (datosPersonales, direccion, contacto).
- Utiliza grupos (`xs:group`) para agrupar elementos relacionados.
- Define tipos simples personalizados con patrones y restricciones apropiadas.
- Utiliza correctamente `xs:ID` e `xs:IDREF` para establecer relaciones entre entidades.
- Utiliza `sequence`, `choice` y `all` donde sea apropiado.
- Aplica `minOccurs` y `maxOccurs` de forma coherente.
- Documenta exhaustivamente el esquema con `xs:annotation`, `xs:documentation` y `xs:appinfo`.
- Organiza el esquema de forma legible y mantenible.

<details>
    <summary>Solución</summary>

**Esquema XSD (hospital.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>
            Sistema de gestión hospitalaria completo.
            Integra pacientes, médicos, citas y tratamientos con relaciones complejas.
        </xs:documentation>
    </xs:annotation>

    <!-- Elemento raíz -->
    <xs:element name="hospital">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="personal" type="personalType"/>
                <xs:element name="pacientes" type="pacientesType"/>
                <xs:element name="citas" type="citasType"/>
                <xs:element name="tratamientos" type="tratamientosType"/>
            </xs:sequence>
            <xs:attribute name="nombre" type="xs:string" use="required"/>
            <xs:attribute name="ciudad" type="xs:string" use="required"/>
            <xs:attribute name="codigo" type="codigoHospitalType"/>
        </xs:complexType>
    </xs:element>

    <!-- TIPOS PARA PERSONAL (MÉDICOS) -->
    <xs:complexType name="personalType">
        <xs:sequence>
            <xs:element name="medico" type="medicoType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="medicoType">
        <xs:sequence>
            <xs:element name="nombre" type="nombreRestringidoType"/>
            <xs:element name="apellidos" type="apellidosRestringidosType"/>
            <xs:element name="numColegiado" type="numColegiadoType"/>
            <xs:element name="telefono" type="telefonoType"/>
            <xs:element name="email" type="emailType"/>
            <xs:element name="horario" type="horarioType"/>
        </xs:sequence>
        <xs:attribute name="id" type="xs:ID" use="required"/>
        <xs:attribute name="especialidad" type="especialidadType" use="required"/>
    </xs:complexType>

    <xs:complexType name="horarioType">
        <xs:sequence>
            <xs:element name="dia" type="diaHorarioType" maxOccurs="7"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="diaHorarioType">
        <xs:sequence>
            <xs:element name="horaInicio" type="xs:time"/>
            <xs:element name="horaFin" type="xs:time"/>
        </xs:sequence>
        <xs:attribute name="nombre" type="diasSemanaType" use="required"/>
    </xs:complexType>

    <!-- TIPOS PARA PACIENTES -->
    <xs:complexType name="pacientesType">
        <xs:sequence>
            <xs:element name="paciente" type="pacienteType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="pacienteType">
        <xs:sequence>
            <xs:element name="datosPersonales" type="datosPersonalesType"/>
            <xs:element name="numeroSeguroSocial" type="numeroSeguroType"/>
            <xs:element name="contactoEmergencia" type="contactoType"/>
            <xs:element name="alergias" type="alergiasType" minOccurs="0"/>
            <xs:element name="grupoSanguineo" type="grupoSanguineoType"/>
        </xs:sequence>
        <xs:attribute name="id" type="xs:ID" use="required"/>
        <xs:attribute name="tipoSeguro" type="tipoSeguroType" use="required"/>
    </xs:complexType>

    <xs:complexType name="datosPersonalesType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="apellidos" type="xs:string"/>
            <xs:element name="dni" type="dniType"/>
            <xs:element name="fechaNacimiento" type="xs:date"/>
            <xs:element name="direccion" type="direccionType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="direccionType">
        <xs:sequence>
            <xs:element name="calle" type="xs:string"/>
            <xs:element name="numero" type="xs:string"/>
            <xs:element name="ciudad" type="xs:string"/>
            <xs:element name="codigoPostal" type="codigoPostalType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="contactoType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="parentesco" type="xs:string"/>
            <xs:element name="telefono" type="telefonoType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="alergiasType">
        <xs:sequence>
            <xs:element name="alergia" type="xs:string" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <!-- TIPOS PARA CITAS -->
    <xs:complexType name="citasType">
        <xs:sequence>
            <xs:element name="cita" type="citaType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="citaType">
        <xs:sequence>
            <xs:element name="paciente" type="xs:IDREF"/>
            <xs:element name="medico" type="xs:IDREF"/>
            <xs:element name="fechaHora" type="xs:dateTime"/>
            <xs:element name="motivo" type="motivoType"/>
            <xs:element name="sala" type="salaType"/>
            <xs:element name="diagnostico" type="diagnosticoType" minOccurs="0"/>
        </xs:sequence>
        <xs:attribute name="id" type="xs:ID" use="required"/>
        <xs:attribute name="estado" type="estadoCitaType" use="required"/>
    </xs:complexType>

    <!-- TIPOS PARA TRATAMIENTOS -->
    <xs:complexType name="tratamientosType">
        <xs:sequence>
            <xs:element name="tratamiento" type="tratamientoType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="tratamientoType">
        <xs:sequence>
            <xs:element name="paciente" type="xs:IDREF"/>
            <xs:element name="medicoPrescriptor" type="xs:IDREF"/>
            <xs:element name="fechaInicio" type="xs:date"/>
            <xs:element name="fechaFin" type="xs:date" minOccurs="0"/>
            <xs:element name="medicamentos" type="medicamentosType"/>
            <xs:element name="observaciones" type="xs:string" minOccurs="0"/>
        </xs:sequence>
        <xs:attribute name="codigo" type="codigoTratamientoType" use="required"/>
    </xs:complexType>

    <xs:complexType name="medicamentosType">
        <xs:sequence>
            <xs:element name="medicamento" type="medicamentoType" minOccurs="1" maxOccurs="10"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="medicamentoType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="dosis" type="xs:string"/>
            <xs:element name="duracion" type="xs:positiveInteger"/>
        </xs:sequence>
    </xs:complexType>

    <!-- TIPOS SIMPLES PERSONALIZADOS -->
    <xs:simpleType name="codigoHospitalType">
        <xs:annotation>
            <xs:documentation>Código del hospital: HOS-XXX</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:pattern value="HOS-[0-9]{3}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="numColegiadoType">
        <xs:annotation>
            <xs:documentation>Número colegiado: 6 dígitos + 2 letras mayúsculas</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{6}[A-Z]{2}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="nombreRestringidoType">
        <xs:restriction base="xs:string">
            <xs:maxLength value="50"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="apellidosRestringidosType">
        <xs:restriction base="xs:string">
            <xs:maxLength value="100"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="telefonoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{9}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="emailType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[^@]+@[^@]+\.[^@]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="especialidadType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="medicina-general"/>
            <xs:enumeration value="cardiologia"/>
            <xs:enumeration value="pediatria"/>
            <xs:enumeration value="traumatologia"/>
            <xs:enumeration value="neurologia"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="diasSemanaType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="lunes"/>
            <xs:enumeration value="martes"/>
            <xs:enumeration value="miercoles"/>
            <xs:enumeration value="jueves"/>
            <xs:enumeration value="viernes"/>
            <xs:enumeration value="sabado"/>
            <xs:enumeration value="domingo"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="dniType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{8}[A-Z]"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="codigoPostalType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{5}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="numeroSeguroType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{12}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="grupoSanguineoType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="A+"/>
            <xs:enumeration value="A-"/>
            <xs:enumeration value="B+"/>
            <xs:enumeration value="B-"/>
            <xs:enumeration value="AB+"/>
            <xs:enumeration value="AB-"/>
            <xs:enumeration value="O+"/>
            <xs:enumeration value="O-"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoSeguroType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="publico"/>
            <xs:enumeration value="privado"/>
            <xs:enumeration value="ninguno"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="motivoType">
        <xs:restriction base="xs:string">
            <xs:minLength value="10"/>
            <xs:maxLength value="500"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="salaType">
        <xs:restriction base="xs:string">
            <xs:pattern value="Sala[0-9]{1,3}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="diagnosticoType">
        <xs:restriction base="xs:string">
            <xs:maxLength value="1000"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="estadoCitaType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="pendiente"/>
            <xs:enumeration value="realizada"/>
            <xs:enumeration value="cancelada"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="codigoTratamientoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="TRT-[0-9]{5}"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>

## Ejercicio 4.7 - Agenda de contactos con grupos reutilizables

Crea un esquema XSD para validar una **agenda de contactos** personal. El documento debe permitir almacenar varios contactos con información básica y datos de comunicación.

**Requisitos:**

- Un elemento raíz `<agenda>` con un atributo `propietario` obligatorio.
- Uno o más elementos `<contacto>`.
- Cada `<contacto>` debe incluir:
  - Un atributo `id` obligatorio de tipo `xs:ID`.
  - `<nombre>` y `<apellidos>` obligatorios.
  - `<email>` opcional con formato básico.
  - `<telefonos>` con de 1 a 3 elementos `<telefono>`.
  - `<direccion>` opcional con calle, ciudad y codigoPostal.
  - Un elemento `<tipo>` que solo pueda ser `personal`, `trabajo` o `familia`.

**Ejemplo de documento XML válido:**

```xml
<agenda propietario="Ana Perez">
    <contacto id="c1">
        <nombre>Laura</nombre>
        <apellidos>Fernández Soto</apellidos>
        <email>laura@example.com</email>
        <telefonos>
            <telefono>666123123</telefono>
            <telefono>986456456</telefono>
        </telefonos>
        <direccion>
            <calle>Rúa Nova 12</calle>
            <ciudad>Vigo</ciudad>
            <codigoPostal>36201</codigoPostal>
        </direccion>
        <tipo>personal</tipo>
    </contacto>
</agenda>
```

<details>
    <summary>Solución</summary>

**Documento XML (agenda.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<agenda propietario="Ana Perez"
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
    xs:noNamespaceSchemaLocation="agenda.xsd">
    <contacto id="c1">
        <nombre>Laura</nombre>
        <apellidos>Fernández Soto</apellidos>
        <email>laura@example.com</email>
        <telefonos>
            <telefono>666123123</telefono>
            <telefono>986456456</telefono>
        </telefonos>
        <direccion>
            <calle>Rúa Nova 12</calle>
            <ciudad>Vigo</ciudad>
            <codigoPostal>36201</codigoPostal>
        </direccion>
        <tipo>personal</tipo>
    </contacto>
</agenda>
```

**Esquema XSD (agenda.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>Esquema para una agenda de contactos personal.</xs:documentation>
    </xs:annotation>

    <xs:element name="agenda">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="contacto" type="contactoType" maxOccurs="unbounded"/>
            </xs:sequence>
            <xs:attribute name="propietario" type="xs:string" use="required"/>
        </xs:complexType>
    </xs:element>

    <xs:complexType name="contactoType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="apellidos" type="xs:string"/>
            <xs:element name="email" type="emailType" minOccurs="0"/>
            <xs:element name="telefonos">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="telefono" type="telefonoType" minOccurs="1" maxOccurs="3"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="direccion" type="direccionType" minOccurs="0"/>
            <xs:element name="tipo" type="tipoContactoType"/>
        </xs:sequence>
        <xs:attribute name="id" type="xs:ID" use="required"/>
    </xs:complexType>

    <xs:complexType name="direccionType">
        <xs:sequence>
            <xs:element name="calle" type="xs:string"/>
            <xs:element name="ciudad" type="xs:string"/>
            <xs:element name="codigoPostal" type="codigoPostalType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:simpleType name="emailType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[^@]+@[^@]+\.[^@]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="telefonoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{9}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="codigoPostalType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{5}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoContactoType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="personal"/>
            <xs:enumeration value="trabajo"/>
            <xs:enumeration value="familia"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>

## Ejercicio 4.8 - Control de asistencia de cursos

Diseña un esquema XSD para validar un **control de asistencia** de un curso presencial. El documento debe guardar la información de un curso, su profesor y la lista de alumnos matriculados.

**Requisitos:**

- Un elemento raíz `<curso>` con atributos `codigo` y `modalidad`.
- `<titulo>`, `<profesor>` y `<alumnos>` como hijos obligatorios.
- `<profesor>` con nombre, email y despacho.
- `<alumnos>` con uno o más `<alumno>`.
- Cada `<alumno>` debe tener nombre, apellidos, dni, asistencias y estado.
- `estado` solo puede ser `apto`, `no-apto` o `pendiente`.
- `asistencias` es un entero entre 0 y 100.

**Ejemplo de documento XML válido:**

```xml
<curso codigo="XML2026" modalidad="presencial">
    <titulo>Lenguajes de marcas</titulo>
    <profesor>
        <nombre>Mario</nombre>
        <email>mario@centro.edu</email>
        <despacho>D-12</despacho>
    </profesor>
    <alumnos>
        <alumno>
            <nombre>Lucía</nombre>
            <apellidos>Varela Castro</apellidos>
            <dni>12345678A</dni>
            <asistencias>92</asistencias>
            <estado>apto</estado>
        </alumno>
    </alumnos>
</curso>
```

<details>
    <summary>Solución</summary>

**Documento XML (curso.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<curso codigo="XML2026" modalidad="presencial"
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
    xs:noNamespaceSchemaLocation="curso.xsd">
    <titulo>Lenguajes de marcas</titulo>
    <profesor>
        <nombre>Mario</nombre>
        <email>mario@centro.edu</email>
        <despacho>D-12</despacho>
    </profesor>
    <alumnos>
        <alumno>
            <nombre>Lucía</nombre>
            <apellidos>Varela Castro</apellidos>
            <dni>12345678A</dni>
            <asistencias>92</asistencias>
            <estado>apto</estado>
        </alumno>
        <alumno>
            <nombre>Diego</nombre>
            <apellidos>Pérez Núñez</apellidos>
            <dni>87654321B</dni>
            <asistencias>68</asistencias>
            <estado>pendiente</estado>
        </alumno>
    </alumnos>
</curso>
```

**Esquema XSD (curso.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>Esquema para controlar la asistencia de un curso.</xs:documentation>
    </xs:annotation>

    <xs:element name="curso">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="titulo" type="xs:string"/>
                <xs:element name="profesor" type="profesorType"/>
                <xs:element name="alumnos" type="alumnosType"/>
            </xs:sequence>
            <xs:attribute name="codigo" type="codigoCursoType" use="required"/>
            <xs:attribute name="modalidad" type="modalidadType" use="required"/>
        </xs:complexType>
    </xs:element>

    <xs:complexType name="profesorType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="email" type="emailType"/>
            <xs:element name="despacho" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="alumnosType">
        <xs:sequence>
            <xs:element name="alumno" type="alumnoType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="alumnoType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="apellidos" type="xs:string"/>
            <xs:element name="dni" type="dniType"/>
            <xs:element name="asistencias" type="asistenciasType"/>
            <xs:element name="estado" type="estadoAlumnoType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:simpleType name="codigoCursoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[A-Z]{3}[0-9]{4}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="modalidadType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="presencial"/>
            <xs:enumeration value="online"/>
            <xs:enumeration value="mixto"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="emailType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[^@]+@[^@]+\.[^@]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="dniType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{8}[A-Z]"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="asistenciasType">
        <xs:restriction base="xs:integer">
            <xs:minInclusive value="0"/>
            <xs:maxInclusive value="100"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="estadoAlumnoType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="apto"/>
            <xs:enumeration value="no-apto"/>
            <xs:enumeration value="pendiente"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>

## Ejercicio 4.9 - Pedido online con productos y envío

Elabora un esquema XSD para un **pedido online** que distinga entre productos físicos y digitales dentro de una misma compra.

**Requisitos:**

- Un elemento raíz `<pedido>` con atributo `numero` obligatorio.
- `<cliente>`, `<fecha>`, `<lineasPedido>` y `<total>` obligatorios.
- `<cliente>` con nombre, email y telefono.
- `<lineasPedido>` con una o más `<linea>`.
- Cada `<linea>` debe tener `cantidad` y un bloque de producto que sea:
  - `fisico`: nombre, peso y stock.
  - `digital`: nombre, formato y urlDescarga.
- `<total>` debe ser un decimal positivo con 2 decimales.

**Ejemplo de documento XML válido:**

```xml
<pedido numero="P-1001">
    <cliente>
        <nombre>Eva</nombre>
        <email>eva@mail.com</email>
        <telefono>666111222</telefono>
    </cliente>
    <fecha>2026-05-10</fecha>
    <lineasPedido>
        <linea cantidad="2">
            <fisico>
                <nombre>Cascos</nombre>
                <peso>0.45</peso>
                <stock>18</stock>
            </fisico>
        </linea>
    </lineasPedido>
    <total>39.90</total>
</pedido>
```

<details>
    <summary>Solución</summary>

**Documento XML (pedido.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<pedido numero="P-1001"
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
    xs:noNamespaceSchemaLocation="pedido.xsd">
    <cliente>
        <nombre>Eva</nombre>
        <email>eva@mail.com</email>
        <telefono>666111222</telefono>
    </cliente>
    <fecha>2026-05-10</fecha>
    <lineasPedido>
        <linea cantidad="2">
            <fisico>
                <nombre>Cascos</nombre>
                <peso>0.45</peso>
                <stock>18</stock>
            </fisico>
        </linea>
        <linea cantidad="1">
            <digital>
                <nombre>Manual PDF</nombre>
                <formato>pdf</formato>
                <urlDescarga>https://ejemplo.com/manual.pdf</urlDescarga>
            </digital>
        </linea>
    </lineasPedido>
    <total>39.90</total>
</pedido>
```

**Esquema XSD (pedido.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>Esquema para pedidos online con productos físicos y digitales.</xs:documentation>
    </xs:annotation>

    <xs:element name="pedido">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="cliente" type="clienteType"/>
                <xs:element name="fecha" type="xs:date"/>
                <xs:element name="lineasPedido" type="lineasPedidoType"/>
                <xs:element name="total" type="importeType"/>
            </xs:sequence>
            <xs:attribute name="numero" type="xs:string" use="required"/>
        </xs:complexType>
    </xs:element>

    <xs:complexType name="clienteType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="email" type="emailType"/>
            <xs:element name="telefono" type="telefonoType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="lineasPedidoType">
        <xs:sequence>
            <xs:element name="linea" type="lineaType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="lineaType">
        <xs:choice>
            <xs:element name="fisico" type="productoFisicoType"/>
            <xs:element name="digital" type="productoDigitalType"/>
        </xs:choice>
        <xs:attribute name="cantidad" type="xs:positiveInteger" use="required"/>
    </xs:complexType>

    <xs:complexType name="productoFisicoType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="peso" type="pesoType"/>
            <xs:element name="stock" type="xs:nonNegativeInteger"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="productoDigitalType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="formato" type="xs:string"/>
            <xs:element name="urlDescarga" type="xs:anyURI"/>
        </xs:sequence>
    </xs:complexType>

    <xs:simpleType name="emailType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[^@]+@[^@]+\.[^@]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="telefonoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{9}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="pesoType">
        <xs:restriction base="xs:decimal">
            <xs:minInclusive value="0.01"/>
            <xs:fractionDigits value="2"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="importeType">
        <xs:restriction base="xs:decimal">
            <xs:minInclusive value="0.00"/>
            <xs:fractionDigits value="2"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>

## Ejercicio 4.10 - Inventario de laboratorio con muestras

Crea un esquema XSD para controlar un **inventario de laboratorio** con muestras y ensayos. El objetivo es registrar materiales y resultados de pruebas básicas.

**Requisitos:**

- Un elemento raíz `<inventario>` con atributo `laboratorio` obligatorio.
- Uno o más elementos `<muestra>`.
- Cada `<muestra>` debe incluir:
  - Atributo `codigo` obligatorio.
  - `<nombre>`, `<tipo>`, `<fechaAlta>` y `<estado>`.
  - `<medidas>` opcional con una o más `<medida>`.
- `tipo` solo puede ser `liquida`, `solida` o `gaseosa`.
- `estado` solo puede ser `pendiente`, `analizada` o `descartada`.

**Ejemplo de documento XML válido:**

```xml
<inventario laboratorio="BioLab">
    <muestra codigo="M-001">
        <nombre>Suero A</nombre>
        <tipo>liquida</tipo>
        <fechaAlta>2026-04-21</fechaAlta>
        <estado>pendiente</estado>
    </muestra>
</inventario>
```

<details>
    <summary>Solución</summary>

**Documento XML (inventario.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventario laboratorio="BioLab"
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
    xs:noNamespaceSchemaLocation="inventario.xsd">
    <muestra codigo="M-001">
        <nombre>Suero A</nombre>
        <tipo>liquida</tipo>
        <fechaAlta>2026-04-21</fechaAlta>
        <estado>pendiente</estado>
    </muestra>
    <muestra codigo="M-002">
        <nombre>Polvo B</nombre>
        <tipo>solida</tipo>
        <fechaAlta>2026-04-18</fechaAlta>
        <estado>analizada</estado>
        <medidas>
            <medida>12.4</medida>
            <medida>12.6</medida>
        </medidas>
    </muestra>
</inventario>
```

**Esquema XSD (inventario.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:element name="inventario">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="muestra" type="muestraType" maxOccurs="unbounded"/>
            </xs:sequence>
            <xs:attribute name="laboratorio" type="xs:string" use="required"/>
        </xs:complexType>
    </xs:element>

    <xs:complexType name="muestraType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="tipo" type="tipoMuestraType"/>
            <xs:element name="fechaAlta" type="xs:date"/>
            <xs:element name="estado" type="estadoMuestraType"/>
            <xs:element name="medidas" minOccurs="0">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="medida" type="xs:decimal" minOccurs="1" maxOccurs="unbounded"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
        <xs:attribute name="codigo" type="xs:string" use="required"/>
    </xs:complexType>

    <xs:simpleType name="tipoMuestraType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="liquida"/>
            <xs:enumeration value="solida"/>
            <xs:enumeration value="gaseosa"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="estadoMuestraType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="pendiente"/>
            <xs:enumeration value="analizada"/>
            <xs:enumeration value="descartada"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>

## Ejercicio 4.11 - Reserva de hotel con servicios opcionales

Construye un esquema XSD para validar una **reserva de hotel** con información del cliente, la estancia y los servicios contratados.

**Requisitos:**

- Un elemento raíz `<reserva>` con atributo `localizador` obligatorio.
- `<cliente>`, `<entrada>`, `<salida>`, `<habitacion>` y `<precioTotal>` obligatorios.
- `<cliente>` con nombre, apellidos, email y telefono.
- `<habitacion>` con número, tipo y ocupacion.
- `tipo` debe ser `individual`, `doble` o `suite`.
- `ocupacion` debe ser un entero entre 1 y 4.
- `<servicios>` opcional con cero o más `<servicio>`.
- Cada `<servicio>` debe tener nombre y precio.

**Ejemplo de documento XML válido:**

```xml
<reserva localizador="H2026-01">
    <cliente>
        <nombre>Alba</nombre>
        <apellidos>Rodríguez Díaz</apellidos>
        <email>alba@mail.com</email>
        <telefono>611223344</telefono>
    </cliente>
    <entrada>2026-07-12</entrada>
    <salida>2026-07-15</salida>
    <habitacion>
        <numero>204</numero>
        <tipo>doble</tipo>
        <ocupacion>2</ocupacion>
    </habitacion>
    <precioTotal>315.00</precioTotal>
</reserva>
```

<details>
    <summary>Solución</summary>

**Documento XML (reserva.xml):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<reserva localizador="H2026-01"
    xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
    xs:noNamespaceSchemaLocation="reserva.xsd">
    <cliente>
        <nombre>Alba</nombre>
        <apellidos>Rodríguez Díaz</apellidos>
        <email>alba@mail.com</email>
        <telefono>611223344</telefono>
    </cliente>
    <entrada>2026-07-12</entrada>
    <salida>2026-07-15</salida>
    <habitacion>
        <numero>204</numero>
        <tipo>doble</tipo>
        <ocupacion>2</ocupacion>
    </habitacion>
    <servicios>
        <servicio>
            <nombre>Desayuno</nombre>
            <precio>12.50</precio>
        </servicio>
        <servicio>
            <nombre>Parking</nombre>
            <precio>10.00</precio>
        </servicio>
    </servicios>
    <precioTotal>315.00</precioTotal>
</reserva>
```

**Esquema XSD (reserva.xsd):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:annotation>
        <xs:documentation>Esquema para reservas de hotel con servicios opcionales.</xs:documentation>
    </xs:annotation>

    <xs:element name="reserva">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="cliente" type="clienteType"/>
                <xs:element name="entrada" type="xs:date"/>
                <xs:element name="salida" type="xs:date"/>
                <xs:element name="habitacion" type="habitacionType"/>
                <xs:element name="servicios" type="serviciosType" minOccurs="0"/>
                <xs:element name="precioTotal" type="precioType"/>
            </xs:sequence>
            <xs:attribute name="localizador" type="xs:string" use="required"/>
        </xs:complexType>
    </xs:element>

    <xs:complexType name="clienteType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="apellidos" type="xs:string"/>
            <xs:element name="email" type="emailType"/>
            <xs:element name="telefono" type="telefonoType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="habitacionType">
        <xs:sequence>
            <xs:element name="numero" type="xs:positiveInteger"/>
            <xs:element name="tipo" type="tipoHabitacionType"/>
            <xs:element name="ocupacion" type="ocupacionType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="serviciosType">
        <xs:sequence>
            <xs:element name="servicio" type="servicioType" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="servicioType">
        <xs:sequence>
            <xs:element name="nombre" type="xs:string"/>
            <xs:element name="precio" type="precioType"/>
        </xs:sequence>
    </xs:complexType>

    <xs:simpleType name="emailType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[^@]+@[^@]+\.[^@]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="telefonoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{9}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoHabitacionType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="individual"/>
            <xs:enumeration value="doble"/>
            <xs:enumeration value="suite"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ocupacionType">
        <xs:restriction base="xs:integer">
            <xs:minInclusive value="1"/>
            <xs:maxInclusive value="4"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="precioType">
        <xs:restriction base="xs:decimal">
            <xs:minInclusive value="0.00"/>
            <xs:fractionDigits value="2"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>
```

</details>
