# Tarea UD4 - Definición de esquemas y vocabularios en XML

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
    <impresora numSerie="i00245" tecnologia="láser" compra="2010">
        <fabricante>Epson</fabricante>
        <modelo>EPL300</modelo>
        <peso>4.52</peso>
        <tamaño>A4</tamaño>
        <tamaño>A5</tamaño>
        <cartucho>C-123BV</cartucho>
        <enred/>
    </impresora>
        <impresora numSerie="i00246" tecnologia="matricial">
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
- Todos los elementos son **obligatorios**, excepto `<enred>` y `compra`.
- Una impresora puede trabajar con **uno o varios tamaños de papel**.
- El peso es un **número positivo** y no puede tener más de **dos decimales**. Debe tener un atributo de unidad, que puede ser `kg`, `g` o `lb`.
- El elemento `cartucho` está formado por `C-` seguido de tres números y una o dos letras mayúsculas.
- El elemento `enred`, de estar presente, es un elemento vacío.
- El atributo `tecnologia` es obligatorio. Sólo puede tomar los valores `matricial`, `láser` o `tinta`
- El atributo `numSerie` es obligatorio. Es un identificador de las impresoras, con el formato `i` seguido de cinco números.
- El atributo `compra` es opcional. De estar presente, guarda el **año de compra** (número entero positivo).
  
Además, **documenta el esquema** con comentarios explicando cada decisión tomada durante el diseño del XSD.

## Ejercicio 2 - Plataforma de alquiler de vehículos autónomos

Una empresa de alquiler de vehículos quiere implementar un sistema XML para gestionar su flota de vehículos, incluyendo **vehículos autónomos con diferentes niveles de automatización**. El sistema debe registrar clientes, sucursales, vehículos disponibles, reservas y seguros.

### Estructura de datos requerida

**Vehículos:**

- ID único (atributo) **obligatorio** con el formato `veh` seguido de cuatro números.
- Marca y modelo (cadenas de texto, **obligatorios**)
- Matrícula (placa) (**obligatorio**). No se impone un formato específico para aceptar matrículas de diferentes países, pero debe ser una cadena alfanumérica de entre 5 y 10 caracteres (patrón: `[A-Z0-9]{5,10}`).
- Año de fabricación (**obligatorio**, número entero positivo entre 1900 y el año actual)
- Tipo de vehículo (**obligatorio**, enumeración: `turismo`, `suv`, `furgoneta`, `camion`)
- Tipo de combustible (**obligatorio**, enumeración: `gasolina`, `diesel`, `electrico`, `hibrido`)
- Características técnicas (**obligatorio**):
  - Potencia en CV (**obligatorio**, número entero positivo)
  - Capacidad de maletero en litros (**obligatorio**, número entero positivo)
  - Número de plazas (**obligatorio**, número entero positivo entre 1 y 9)
  - Consumo medio en l/100km o kWh/100km (**obligatorio**, número decimal positivo con hasta 2 decimales)
- Automatización (**obligatorio**):
  - Nivel de automatización (**obligatorio**, enumeración: 0, 1, 2, 3, 4, 5 según normas [SAE](https://www.sae.org/standards/content/j3016_202104/) - Sin automatización, Asistencia, Automatización parcial, Automatización condicional, Automatización alta, Automatización completa)
  - Sistemas activos (**opcional**, puede aparecer 0 o más veces. Valores permitidos: `freno-automatico`, `cambio-carril-automatico`, `estacionamiento-automatico`, `conduccion-autonoma-autopista`, `conduccion-autonoma-completa`)
  - Año de última revisión de software (**obligatorio**, número entero positivo entre 2000 y el año actual)
- Sucursal donde se encuentra (**obligatorio**, referencia IDREF a una sucursal existente)
- Estado (**obligatorio**, enumeración: `disponible`, `alquilado`, `en-mantenimiento`)
- Tarifa diaria (**obligatorio**, número decimal positivo con exactamente dos decimales)

**Clientes:**

- ID único (atributo) **obligatorio** con el formato `cli` seguido de cuatro números.
- Nombre (**obligatorio**, cadena de texto no vacía)
- Apellidos (**obligatorio**, cadena de texto no vacía)
- DNI (**obligatorio** para ciudadanos españoles, patrón: 8 dígitos + letra mayúscula) o, en caso de extranjeros, NIE (**obligatorio** para extranjeros, patrón: X/Y/Z + 7 dígitos + letra mayúscula). Solo uno de los dos debe aparecer.
- Email (**obligatorio**, patrón básico de email: `[^@]+@[^@]+\.[^@]+` - debe contener un carácter `@` y un dominio)
- Teléfono (**obligatorio**, patrón: 9 dígitos)
- Datos personales (**obligatorio**):
  - Fecha de nacimiento (**obligatorio**, formato fecha: YYYY-MM-DD)
  - Permiso de conducir (**obligatorio**):
    - Número de permiso (**obligatorio**, cadena alfanumérica de 10 caracteres)
    - Fecha de vigencia (**obligatorio**, formato fecha: YYYY-MM-DD)
- Dirección (**obligatorio**):
  - Calle (**obligatorio**, cadena de texto no vacía)
  - Número (**obligatorio**, cadena de texto no vacía - puede contener números y letras como "15B")
  - Ciudad (**obligatorio**, cadena de texto no vacía)
  - Código postal (**obligatorio**, patrón: 5 dígitos)

**Sucursales:**

- ID único (atributo) **obligatorio** con el formato `suc` seguido de tres números .
- Nombre (**obligatorio**, cadena de texto no vacía)
- Ciudad (**obligatorio**, cadena de texto no vacía)
- Teléfono (**obligatorio**, patrón: 9 dígitos)
- Dirección (**obligatoria**):
  - Calle (**obligatorio**, cadena de texto no vacía)
  - Número (**obligatorio**, cadena de texto no vacía - puede contener números y letras como "42A")
  - Ciudad (**obligatorio**, cadena de texto no vacía)
  - Código postal (**obligatorio**, patrón: 5 dígitos)
- Horario (**obligatorio**):
  - Hora de apertura (**obligatorio**, formato hora: HH:MM:SS)
  - Hora de cierre (**obligatorio**, formato hora: HH:MM:SS)
- Número de plazas de aparcamiento (**obligatorio**, número entero positivo)

**Reservas:**

- ID único (atributo) **obligatorio** con el formato `res` seguido de cuatro números.
- Cliente (**obligatorio**, referencia IDREF a un cliente existente)
- Vehículo (**obligatorio**, referencia IDREF a un vehículo existente)
- Sucursal de recogida (**obligatorio**, referencia IDREF a una sucursal existente)
- Sucursal de devolución (**obligatorio**, referencia IDREF a una sucursal existente)
- Fecha y hora de recogida (**obligatorio**, formato fecha y hora: YYYY-MM-DDTHH:MM:SS)
- Fecha y hora de devolución estimada (**obligatorio**, formato fecha y hora: YYYY-MM-DDTHH:MM:SS)
- Estado de la reserva (**obligatorio**, enumeración: `confirmada`, `pendiente`, `completada`, `cancelada`)
- Seguro contratado (**obligatorio**, referencia IDREF a un seguro existente)
- Precio estimado (**obligatorio**, número decimal positivo con hasta dos decimales)

**Seguros:**

- ID único (atributo) **obligatorio** con el formato `seg` seguido de tres números.
- Nombre del seguro (**obligatorio**, cadena de texto no vacía)
- Descripción (**obligatorio**, cadena de texto no vacía)
- Cobertura (**obligatorio**, enumeración: `basica`, `estandar`, `premium`, `integral`)
- Precio por día (**obligatorio**, número decimal positivo con exactamente dos decimales)
- Franquicia (**obligatorio**, número decimal no negativo con hasta dos decimales - cantidad en euros, puede ser 0 para seguros sin franquicia)
- Nivel de automatización mínimo (**opcional**, número entero entre 0 y 5 - puede restringirse según nivel de automatización del vehículo al que se aplica el seguro)

### Ejemplo de documento XML

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
        <vehiculo id="veh0001">
            <marca>Tesla</marca>
            <modelo>Model S</modelo>
            <matricula>MAD0001</matricula>
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
        
        <vehiculo id="veh0002">
            <marca>BMW</marca>tres
            <modelo>X5</modelo>
            <matricula>0002NNN</matricula>
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
        <cliente id="cli0001">
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
        <reserva id="res0001">
            <cliente>cli0001</cliente>
            <vehiculo>veh0001</vehiculo>
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

- Define tipos complejos reutilizables para estructuras comunes (**datosPersonales**, **direccion**, **caracteristicas**, **automatizacion**, **horario**, **permisoConducir**).
- Utiliza **xs:ID** para identificadores únicos (sucursal, vehículo, cliente, reserva, seguro) e **xs:IDREF** para referencias entre elementos.
- Define tipos simples personalizados con **patrones y restricciones** apropiadas:
- Utiliza **xs:choice** para permitir elegir, **sequence** para el orden obligatorio de elementos y **minOccurs/maxOccurs** para cardinalidad donde corresponda.
- Documenta exhaustivamente con **xs:annotation** y **xs:documentation** explicando cada tipo y restricción.
- Organiza el esquema de forma legible separando definiciones de tipos simples, complejos y elementos.

## Entrega

Deberás entregar un fichero por cada ejercicio, con el nombre `ud4_tarea_ejercicio1.xsd`, `ud4_tarea_ejercicio2.xsd`, etc.

## Valoración

Para la valoración de los ejercicios, se tendrán en cuenta los siguientes aspectos:

- Funcionalidad. El XSD debe validar correctamente cualquier documento XML que tenga las características descritas en el enunciado.
- Documentación. Se deben añadir comentarios explicando las decisiones tomadas durante el diseño del XSD.

Para esta práctica, el ejercicio 1 tendrá un valor de 3.5 puntos y el ejercicio 2 un valor de 6.5 puntos, sumando un total de 10 puntos.
