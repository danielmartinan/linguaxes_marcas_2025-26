# Solución propuesta — Tarea UD4

## Estructura de la entrega

La solución se organiza en dos ejercicios independientes, cada uno con su propio fichero XSD y un documento XML de ejemplo que lo valida:

```
solucion/
├── ejer1/
│   ├── ud4_tarea_ejercicio1.xsd   ← esquema del inventario de impresoras
│   └── ejemplo.xml                ← XML de ejemplo válido
└── ejer2/
    ├── ud4_tarea_ejercicio2.xsd   ← esquema de la plataforma de alquiler
    └── ejemplo.xml                ← XML de ejemplo válido
```

---

## Ejercicio 1 — Inventario de impresoras

### Descripción del problema

Se necesita un esquema XSD que valide documentos XML con información sobre una o más impresoras: datos de identificación (número de serie, tecnología, año de compra), datos técnicos (fabricante, modelo, peso, tamaños de papel soportados, código de cartucho) y si está conectada en red.

### Decisiones de diseño

#### Tipos simples definidos

| Tipo | Restricción | Justificación |
|---|---|---|
| `NumSerieTipo` | patrón `i[0-9]{5}` | El enunciado exige `i` + 5 dígitos exactos |
| `TecnologiaTipo` | enumeración: `matricial`, `láser`, `tinta` | Solo se permiten tres valores fijos |
| `AnoCompraTipo` | `xs:int` con rango 1950–2100 | Año entero positivo con límites razonables |
| `PesoTipo` | `xs:decimal` positivo, patrón `[0-9]+(\.[0-9]{1,2})?` | Número positivo con máximo 2 decimales |
| `UnidadPesoTipo` | enumeración: `kg`, `g`, `lb` | Las tres unidades especificadas en el enunciado |
| `TamanoPapelTipo` | enumeración: `A3`, `A4`, `A5`, `Carta`, `Oficio` | Tamaños estándar habituales |
| `CodigoCartuchoTipo` | patrón `C-[0-9]{3}[A-Z]{1,2}` | El enunciado exige `C-` + 3 números + 1 ó 2 letras mayúsculas |

#### Tipo complejo `PesoAtributoTipo`

El peso es un valor decimal (basado en `PesoTipo`) que lleva un atributo obligatorio `unidad`. Para combinar contenido de texto simple con un atributo se emplea `xs:simpleContent` + `xs:extension`.

#### Tipo complejo `ImpresoraTipo`

La secuencia de elementos dentro de `<impresora>` sigue el orden del enunciado:

1. `fabricante` — `xs:string`, obligatorio (`minOccurs` por defecto = 1)
2. `modelo` — `xs:string`, obligatorio
3. `peso` — `PesoAtributoTipo`, obligatorio
4. `tamaño` — `TamanoPapelTipo`, **1 o más** (`maxOccurs="unbounded"`)
5. `cartucho` — `CodigoCartuchoTipo`, obligatorio
6. `enred` — `xs:complexType` vacío, **opcional** (`minOccurs="0"`)

Los tres atributos de `<impresora>`:

| Atributo | Tipo | Obligatorio |
|---|---|---|
| `numSerie` | `NumSerieTipo` | sí |
| `tecnologia` | `TecnologiaTipo` | sí |
| `compra` | `AnoCompraTipo` | no (`use="optional"`) |

#### Elemento raíz `impresoras`

Contiene una secuencia de `<impresora>` con `maxOccurs="unbounded"` para permitir una o más impresoras.

#### Documentación

Cada tipo y cada elemento incluye `xs:annotation`/`xs:documentation` explicando su propósito, formato y ejemplo de valor. Se añade un bloque de documentación general al inicio del esquema.

---

## Ejercicio 2 — Plataforma de alquiler de vehículos autónomos

### Descripción del problema

Esquema XSD para gestionar una plataforma con cinco entidades relacionadas: **sucursales**, **seguros**, **vehículos**, **clientes** y **reservas**. Las entidades se referencian entre sí mediante identificadores únicos (`xs:ID` / `xs:IDREF`).

### Organización del esquema

El fichero se estructura en tres secciones claramente delimitadas por comentarios:

1. **Tipos simples personalizados** — restricciones de dominio (patrones, rangos, enumeraciones)
2. **Tipos complejos reutilizables** — estructuras compartidas entre varias entidades
3. **Elemento raíz y elementos principales** — definición del documento completo

### Tipos simples definidos

#### Identificadores

| Tipo | Patrón | Uso |
|---|---|---|
| `IDClienteTipo` | `cli[0-9]{4}` | atributo `id` de `<cliente>` |
| `IDVehiculoTipo` | `veh[0-9]{4}` | atributo `id` de `<vehiculo>` |
| `IDSucursalTipo` | `suc[0-9]{3}` | atributo `id` de `<sucursal>` |
| `IDReservaTipo` | `res[0-9]{4}` | atributo `id` de `<reserva>` |
| `IDSeguroTipo` | `seg[0-9]{3}` | atributo `id` de `<seguro>` |

#### Documentación personal

| Tipo | Restricción |
|---|---|
| `DNITipo` | `[0-9]{8}[A-Z]` |
| `NIETipo` | `[XYZ][0-9]{7}[A-Z]` |
| `EmailTipo` | `[^@]+@[^@]+\.[^@]+` |
| `TelefonoTipo` | `[0-9]{9}` |
| `CodigoPostalTipo` | `[0-9]{5}` |

#### Vehículos y seguros

| Tipo | Restricción |
|---|---|
| `MatriculaTipo` | `[A-Z0-9]{5,10}` (acepta matrículas internacionales) |
| `AnoFabricacionTipo` | `xs:int` rango 1900–2100 (reutilizado para año de revisión de software) |
| `TipoVehiculoTipo` | enumeración: `turismo`, `suv`, `furgoneta`, `camion` |
| `TipoCombustibleTipo` | enumeración: `gasolina`, `diesel`, `electrico`, `hibrido` |
| `NivelAutomatizacionTipo` | `xs:int` 0–5 (norma SAE J3016) |
| `SistemaActivoTipo` | enumeración de 5 sistemas de asistencia |
| `EstadoVehiculoTipo` | enumeración: `disponible`, `alquilado`, `en-mantenimiento` |
| `PrecioTipo` | `xs:decimal` ≥ 0, patrón `[0-9]+\.[0-9]{2}` (exactamente 2 decimales) |
| `ConsumoDiarioTipo` | `xs:decimal` ≥ 0, hasta 2 decimales |
| `CoberturaSeguroTipo` | enumeración: `basica`, `estandar`, `premium`, `integral` |
| `EstadoReservaTipo` | enumeración: `confirmada`, `pendiente`, `completada`, `cancelada` |

### Tipos complejos reutilizables

| Tipo | Descripción | Usado en |
|---|---|---|
| `DireccionTipo` | `calle`, `numero`, `ciudad`, `codigoPostal` | `ClienteTipo`, `SucursalTipo` |
| `HorarioTipo` | `horaApertura`, `horaCierre` (`xs:time`) | `SucursalTipo` |
| `PermisoConducirTipo` | `numero`, `vigenciaHasta` (`xs:date`) | `DatosPersonalesTipo` |
| `DatosPersonalesTipo` | `fechaNacimiento` + `PermisoConducirTipo` | `ClienteTipo` |
| `CaracteristicasTipo` | `potencia`, `capacidadMaletero`, `plazas`, `consumoMedio` | `VehiculoTipo` |
| `AutomatizacionTipo` | `nivel`, `sistemaActivo` (0..*), `anoUltimaRevisionSoftware` | `VehiculoTipo` |

### Uso de `xs:choice` para DNI/NIE

Para modelar la exclusividad entre DNI y NIE se define un **grupo reutilizable** (`IdentificacionGrupo`) con `xs:choice`, referenciado dentro de `ClienteTipo` mediante `xs:group ref="IdentificacionGrupo"`. Esto garantiza que aparezca exactamente uno de los dos, y el grupo queda disponible para reutilizarlo en otros tipos si fuera necesario.

### Identificadores y referencias

Los atributos `id` de cada entidad se declaran de tipo `xs:ID`, lo que garantiza unicidad en el documento. Los elementos de referencia (`cliente`, `vehiculo`, `sucursalRecogida`, `sucursalDevolucion`, `seguroContratado`) se declaran de tipo `xs:IDREF`, asegurando la integridad referencial.

> **Nota sobre limitación de XSD 1.0:** Los tipos `xs:ID` e `xs:IDREF` validan la existencia de la referencia pero no comprueban que apunte a una entidad del tipo correcto (p. ej., que `seguroContratado` apunte a un `<seguro>` y no a un `<cliente>`). Para esa validación cruzada sería necesario XSD 1.1 o Schematron.

### Cardinalidad y composición

- **`xs:sequence`** en todos los tipos complejos para imponer el orden obligatorio de los elementos.
- **`xs:choice`** exclusivamente para la selección DNI/NIE mediante el grupo `IdentificacionGrupo`.
- **`minOccurs="0"`** en los elementos opcionales: `sistemaActivo` (0..*), `franquicia`, `nivelAutomatizacionMinimo`.
- **`maxOccurs="unbounded"`** donde se permite repetición: `sistemaActivo`, y en los contenedores de cada entidad principal.

### Documentación

Todo el esquema está anotado con `xs:annotation`/`xs:documentation`. Las secciones principales están delimitadas por comentarios de bloque para facilitar la lectura. Cada tipo simple incluye ejemplos de valores válidos.
