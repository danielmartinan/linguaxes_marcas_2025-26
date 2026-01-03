# Tarea UD3 - Definición de esquemas y vocabularios en XML

En esta tarea tendrás que realizar los siguientes ejercicios relacionados con la definición de esquemas y vocabularios en XML utilizando XSD (XML Schema Definition).

## Ejercicio 1

Una empresa utiliza ficheros XML para realizar el **inventario de impresoras**. Para cada impresora, se quiere guardar la siguiente información:

- Número de serie (atributo).
- Fabricante.
- Modelo.
- Peso.
- Tamaños de papel con los que puede trabajar.
- Tecnología (atributo).
- Código del cartucho utilizado.
- Año de compra (atributo).
- Si está en red o no.

Un ejemplo de documento XML que contiene la información de dos impresoras es el siguiente:

```xml
<impresoras>
    <impresora numSerie="i245" tecnologia="láser" compra="2010">
        <fabricante>Epson</fabricante>
        <modelo>EPL300</modelo>
        <peso>4.52</peso>
        <tamaño>A4</tamaño>
        <tamaño>A5</tamaño>
        <cartucho>C-123BV</cartucho>
        <enred/>
    </impresora>
        <impresora numSerie="i246" tecnologia="matricial">
        <fabricante>HP</fabricante>
        <modelo>LaserJet 2410</modelo>
        <peso>3.2</peso>
        <tamaño>A4</tamaño>
        <cartucho>C-456P</cartucho>
    </impresora>
</impresoras>
```

Escribe un XML Schema para validar el tipo de documento XML descrito, eligiendo los **tipos de datos más apropiados** y teniendo en cuenta que:

- En cada documento XML hay datos de **una impresora o más**.
- Todos los elementos son **obligatorios**, excepto `<enred>`.
- Una impresora puede trabajar con **uno o varios tamaños de papel**.
- El peso es un **número positivo** y no puede tener más de **dos decimales**.
- El elemento `cartucho` está formado por C- seguido de tres números y una o dos letras mayúsculas.
- El elemento `enred`, de estar presente, es un elemento vacío.
- El atributo `tecnologia` es obligatorio. Sólo puede tomar los valores matricial, láser y tinta.
- El atributo `numSerie` es obligatorio. Es un identificador de las impresoras. 
- El atributo `compra` es opcional. De estar presente, guarda el **año de compra** (número entero positivo).
  
Además, **documenta el esquema**.

## Ejercicio 2 - Plataforma de alquiler de vehículos autónomos

Una empresa de alquiler de vehículos quiere implementar un sistema XML para gestionar su flota de vehículos, incluyendo **vehículos autónomos con diferentes niveles de automatización**. El sistema debe registrar clientes, sucursales, vehículos disponibles, reservas y seguros.

### Estructura de datos requerida:

**Vehículos:**

- ID único (atributo)
- Marca y modelo
- Matrícula (placa)
- Año de fabricación
- Tipo de vehículo (turismo, suv, furgoneta, camión)
- Tipo de combustible (gasolina, diésel, eléctrico, híbrido)
- Características técnicas:
  - Potencia en CV
  - Capacidad de maletero (litros)
  - Número de plazas
  - Consumo medio (l/100km o kWh/100km)
- **Automatización:**
  - Nivel de automatización (0-5 según normas SAE - Sin automatización, Asistencia, Automatización parcial, Automatización condicional, Automatización alta, Automatización completa)
  - Sistemas activos (freno automático, cambio de carril automático, estacionamiento automático, conducción autónoma en autopista, etc.)
  - Año de última revisión de software
- Sucursal donde se encuentra (referencia IDREF)
- Estado (disponible, alquilado, en mantenimiento)
- Tarifa diaria (número con dos decimales)

**Clientes:**

- ID único (atributo)
- Nombre y apellidos
- DNI (patrón: 8 dígitos + letra mayúscula)
- Email
- Teléfono
- Datos personales:
  - Fecha de nacimiento
  - Permiso de conducir (número de permiso + fecha de vigencia)
  - Edad mínima requerida según nivel de automatización del vehículo
- Dirección:
  - Calle, número, ciudad, código postal (patrón: 5 dígitos)

**Sucursales:**

- ID único (atributo)
- Nombre
- Ciudad
- Teléfono
- Dirección completa
- Horario de apertura y cierre
- Número de plazas de aparcamiento

**Reservas:**

- ID único (atributo)
- Cliente (referencia IDREF)
- Vehículo (referencia IDREF)
- Sucursal de recogida (referencia IDREF)
- Sucursal de devolución (referencia IDREF)
- Fecha y hora de recogida
- Fecha y hora de devolución estimada
- Estado de la reserva (confirmada, pendiente, completada, cancelada)
- Seguro contratado (referencia IDREF)
- Precio estimado

**Seguros:**

- ID único (atributo)
- Nombre del seguro
- Descripción
- Cobertura (básica, estándar, premium, integral)
- Precio por día
- Franquicia (cantidad en euros)
- Vehículos aplicables (puede restringirse según nivel de automatización)

### Ejemplo de documento XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<plataformaAlquiler xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                     xsi:noNamespaceSchemaLocation="ud4_tarea_ejercicio2.xsd">
    
    <sucursales>
        <sucursal id="suc001">
            <nombre>Sucursal Centro</nombre>
            <ciudad>Madrid</ciudad>
            <telefono>914567890</telefono>
            <direccion>
                <calle>Calle Mayor</calle>
                <numero>42</numero>
                <ciudad>Madrid</ciudad>
                <codigoPostal>28001</codigoPostal>
            </direccion>
            <horario>
                <horaApertura>07:00:00</horaApertura>
                <horaCierre>22:00:00</horaCierre>
            </horario>
            <plazasAparcamiento>150</plazasAparcamiento>
        </sucursal>
    </sucursales>
    
    <seguros>
        <seguro id="seg001">
            <nombre>Seguro Básico</nombre>
            <descripcion>Cobertura básica con franquicia</descripcion>
            <cobertura>basica</cobertura>
            <precioDia>9.99</precioDia>
            <franquicia>600</franquicia>
        </seguro>
        <seguro id="seg002">
            <nombre>Seguro Integral Autónomo</nombre>
            <descripcion>Cobertura integral para vehículos con automatización nivel 4-5</descripcion>
            <cobertura>integral</cobertura>
            <precioDia>24.99</precioDia>
            <franquicia>0</franquicia>
            <nivelAutomatizacionMinimo>4</nivelAutomatizacionMinimo>
        </seguro>
    </seguros>
    
    <vehiculos>
        <vehiculo id="veh001">
            <marca>Tesla</marca>
            <modelo>Model S</modelo>
            <matricula>MAD-0001</matricula>
            <anoFabricacion>2024</anoFabricacion>
            <tipo>turismo</tipo>
            <combustible>electrico</combustible>
            <caracteristicas>
                <potencia>450</potencia>
                <capacidadMaletero>600</capacidadMaletero>
                <plazas>5</plazas>
                <consumoMedio>18</consumoMedio>
            </caracteristicas>
            <automatizacion>
                <nivel>5</nivel>
                <sistemaActivo>conduccion-autonoma-completa</sistemaActivo>
                <sistemaActivo>freno-automatico</sistemaActivo>
                <sistemaActivo>cambio-carril-automatico</sistemaActivo>
                <sistemaActivo>estacionamiento-automatico</sistemaActivo>
                <anoUltimaRevisionSoftware>2024</anoUltimaRevisionSoftware>
            </automatizacion>
            <sucursal>suc001</sucursal>
            <estado>disponible</estado>
            <tarifaDiaria>89.99</tarifaDiaria>
        </vehiculo>
        
        <vehiculo id="veh002">
            <marca>BMW</marca>
            <modelo>X5</modelo>
            <matricula>MAD-0002</matricula>
            <anoFabricacion>2023</anoFabricacion>
            <tipo>suv</tipo>
            <combustible>hibrido</combustible>
            <caracteristicas>
                <potencia>385</potencia>
                <capacidadMaletero>750</capacidadMaletero>
                <plazas>7</plazas>
                <consumoMedio>6.5</consumoMedio>
            </caracteristicas>
            <automatizacion>
                <nivel>3</nivel>
                <sistemaActivo>conduccion-autonoma-autopista</sistemaActivo>
                <sistemaActivo>freno-automatico</sistemaActivo>
                <sistemaActivo>cambio-carril-automatico</sistemaActivo>
                <anoUltimaRevisionSoftware>2023</anoUltimaRevisionSoftware>
            </automatizacion>
            <sucursal>suc001</sucursal>
            <estado>alquilado</estado>
            <tarifaDiaria>59.99</tarifaDiaria>
        </vehiculo>
    </vehiculos>
    
    <clientes>
        <cliente id="cli001">
            <nombre>Juan</nombre>
            <apellidos>Pérez García</apellidos>
            <dni>12345678A</dni>
            <email>juan.perez@email.com</email>
            <telefono>666123456</telefono>
            <datosPersonales>
                <fechaNacimiento>1985-03-15</fechaNacimiento>
                <permisoConducir>
                    <numero>1234567890</numero>
                    <vigenciaHasta>2028-10-20</vigenciaHasta>
                </permisoConducir>
            </datosPersonales>
            <direccion>
                <calle>Avenida de la Paz</calle>
                <numero>15</numero>
                <ciudad>Madrid</ciudad>
                <codigoPostal>28002</codigoPostal>
            </direccion>
        </cliente>
    </clientes>
    
    <reservas>
        <reserva id="res001">
            <cliente>cli001</cliente>
            <vehiculo>veh001</vehiculo>
            <sucursalRecogida>suc001</sucursalRecogida>
            <sucursalDevolucion>suc001</sucursalDevolucion>
            <fechaHoraRecogida>2026-01-10T10:00:00</fechaHoraRecogida>
            <fechaHoraDevolucionEstimada>2026-01-15T10:00:00</fechaHoraDevolucionEstimada>
            <estado>confirmada</estado>
            <seguroContratado>seg002</seguroContratado>
            <precioEstimado>599.95</precioEstimado>
        </reserva>
    </reservas>
    
</plataformaAlquiler>
```

### Requisitos del esquema XSD

- Define tipos complejos reutilizables para estructuras comunes (**datosPersonales**, **direccion**, **caracteristicas**, **automatizacion**).
- Utiliza **xs:ID** para identificadores únicos (sucursal, vehículo, cliente, reserva, seguro) e **xs:IDREF** para referencias entre elementos.
- Define tipos simples personalizados con **patrones y restricciones** apropiadas:
  - DNI: patrón `[0-9]{8}[A-Z]`
  - Matrícula: patrón `[A-Z]{3}-[0-9]{4}`
  - Código postal: patrón `[0-9]{5}`
  - Email: patrón `[^@]+@[^@]+\.[^@]+`
  - Teléfono: patrón `[0-9]{9}`
  - Nivel de automatización: enumeración 0-5
  - Estados: enumeración (disponible, alquilado, en mantenimiento, cancelada, etc.)
- Utiliza **sequence** para el orden obligatorio de elementos y **minOccurs/maxOccurs** para cardinalidad.
- Los elementos opcionales según la lógica del negocio (ej: diagnostico en citas, sistemas de automatización condicionales).
- Documenta exhaustivamente con **xs:annotation** y **xs:documentation** explicando cada tipo y restricción.
- Organiza el esquema de forma legible separando definiciones de tipos simples, complejos y elementos.

## Entrega

Deberás entregar un fichero por cada ejercicio, con el nombre `ud4_tarea_ejercicio1.xsd`, `ud4_tarea_ejercicio2.xsd`, etc.

## Valoración

Para la valoración de los ejercicios, se tendrán en cuenta los siguientes aspectos:

- Funcionalidad. El XSD debe validar correctamente cualquier documento XML que tenga las características descritas en el enunciado.
- Documentación. Se deben añadir comentarios explicando las decisiones tomadas durante el diseño del XSD.

Para esta práctica, el ejercicio 1 tendrá un valor de 3.5 puntos y el ejercicio 2 un valor de 6.5 puntos, sumando un total de 10 puntos.