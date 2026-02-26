# Examen Práctico T2 - Lenguajes de Marcas

**Módulo:** Lenguajes de Marcas y Sistemas de Gestión de Información  
**Unidades evaluadas:** UD3 (JavaScript y DOM) y UD4 (Definición de esquemas y vocabularios en XML - XSD)  
**Duración máxima:** 2 horas y 15 minutos  
**Puntuación total:** 10 puntos

## Instrucciones generales

- Lee detenidamente cada ejercicio antes de comenzar.
- Organiza tu tiempo: se recomienda dedicar aproximadamente 1h al ejercicio 1 y 1:15h al ejercicio 2.
- Entrega todos los archivos en una carpeta comprimida ZIP con el nombre: `examen_T2_nombre_apellidos.zip`
- Puedes ver la estructura de carpetas requerida al final del examen.
- Asegúrate de que todos los archivos estén correctamente nombrados y organizados.
- Se valorará la corrección técnica, la estructura del código, la validación y la claridad de la solución.

## Antes de comenzar

Para la realización de este examen, dispones de un archivo base con la estructura inicial de trabajo (`recursos_examen_T2.zip`) en la plataforma.

Podrás utilizar cualquier editor de texto o IDE de tu preferencia para la creación y edición de los archivos, aunque se recomienda el uso de Visual Studio Code. Tienes 5 minutos antes de comenzar el examen para preparar tu entorno de trabajo. Se recomiendan estas extensiones:

- XML Tools
- JavaScript (ES6) code snippets
- Live Server
- Error Lens
- Prettier

Puedes instalar cualquier otra extensión que consideres útil para la realización del examen. Ten en cuenta que el uso de completadores automáticos (tipo Copilot) está **terminantemente prohibido**.

## Ejercicio 1: Interactividad con JavaScript y DOM (5 puntos)

### Tiempo recomendado: 50 minutos

Desarrolla una pequeña aplicación web de **control de asistencia** usando JavaScript en cliente y manipulación del DOM.

Se recomienda analizar detalladamente el HTML base proporcionado en `ejer1/` antes de comenzar a programar, para entender la estructura y los elementos disponibles. **No está permitido modificar el HTML base** (excepto para añadir clases o atributos necesarios para la funcionalidad).

### Requisitos funcionales

Partiendo de un HTML base (proporcionado en `ejer1/`), implementa en JavaScript lo siguiente:

1. **Listado inicial de alumnado**
   - Carga una lista inicial de entre 6 y 8 alumnos desde un array en JavaScript.
   - Muestra cada alumno en una lista visible con su estado de asistencia.

2. **Marcado de asistencia**
   - Cada alumno debe poder marcarse como `presente` o `ausente`.
   - El cambio de estado se realizará con un clic (comportamiento toggle). Si el alumno está marcado como presente, el botón mostrará "Marcar ausente" y viceversa.
   - El estado debe reflejarse visualmente en la interfaz.

3. **Alta de alumno**
   - Incluye un campo de texto y un botón "Añadir alumno".
   - No se permitirá añadir nombres vacíos ni duplicados exactos. Se mostrará un mensaje de error en caso de incumplir estas condiciones (*Introduce un nombre válido* o *El alumno ya existe*).
   - Al añadir un nuevo alumno, este se mostrará automáticamente en la lista con estado inicial `presente`.
   - No se podrán añadir más de 10 alumnos en total. Si se intenta superar este límite, se mostrará un mensaje de error (*Límite de alumnos alcanzado*).

4. **Eliminación de alumno**
   - Cada alumno debe disponer de un botón "Eliminar".
   - Al pulsarlo, se elimina únicamente ese alumno de la lista.

5. **Resumen dinámico**
   - Muestra en pantalla los contadores de:
     - total de alumnos,
     - alumnos presentes,
     - alumnos ausentes.
   - Los contadores deben actualizarse tras cada cambio (añadir, eliminar o marcar asistencia).

### Restricciones técnicas

- Usa `addEventListener` (no eventos inline en HTML).
- Organiza el código en funciones claras y reutilizables.
- Debes trabajar únicamente con HTML + CSS + JavaScript nativo.

### Entrega del ejercicio 1

Entregarás la carpeta `ejer1/` con los siguientes archivos:

- `ejer1_asistencia.html`: el HTML base (proporcionado, no modificar excepto para añadir clases o atributos necesarios).
- `ejer1_asistencia.css`: estilos (ya proporcionados)
- `ejer1_asistencia.js`: tu código JavaScript con la implementación de la funcionalidad.

Se evaluará solamente el código JavaScript.

## Ejercicio 2: Diseño de un esquema XSD y validación XML (5 puntos)

### Tiempo recomendado: 55 minutos

Debes definir un esquema XSD para validar un documento XML de **temporada de Fórmula 1**.

### Requisitos del XML a validar

Cada escudería debe incluir:

- **Nombre de escudería** (obligatorio)
- **Código** de escudería (atributo obligatorio, único)
- **País base** (obligatorio)
- **Jefe de equipo** (obligatorio, con nombre y nacionalidad)
- **Pilotos** (al menos 2 pilotos titulares, opcionalmente pilotos reserva)
- Para cada piloto:
  - **Nombre** (obligatorio)
  - **Dorsal** (entero entre 1 y 99)
  - **Nacionalidad** (obligatorio)
  - **Rol** (`titular`, `reserva`)
- **Motor** (`Ferrari`, `Mercedes`, `Honda`, `Ford`)
- **Presupuesto** (decimal mayor o igual a 0)
- **Circuitos habituales** (0 o más)

Cada circuito debe incluir:

- **Nombre** (obligatorio)
- **País** (obligatorio)
- **LongitudKm** (decimal positivo)
- **Tipo** (`urbano`, `permanente`, `semiurbano`)

### Requisitos del esquema XSD

Tu archivo `formula1.xsd` debe contemplar, como mínimo:

1. **Estructura general**
   - Elemento raíz `temporadaF1`.
   - Repetición de elementos `escuderia` y `circuito`.

2. **Tipos y restricciones**
   - Uso de tipos simples y complejos.
   - Restricciones y enumeraciones cuando proceda.

3. **Atributos y unicidad**
   - El `codigo` debe declararse como atributo obligatorio de `escuderia`.
   - Debe garantizarse que no haya dos escuderías con el mismo `codigo`.
   - Debe garantizarse que no haya dos pilotos con el mismo `dorsal`.

4. **Cardinalidades**
   - `jefeEquipo` debe aparecer exactamente una vez por escudería.

### XML de ejemplo

A continuación se muestra un ejemplo de XML válido, que debe ser validado correctamente por tu esquema XSD:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<temporadaF1>
  <escuderia codigo="MER">
    <nombre>Mercedes-AMG Petronas</nombre>
    <paisBase>Alemania</paisBase>
    <jefeEquipo>
      <nombre>Toto Wolff</nombre>
      <nacionalidad>Austriaco</nacionalidad>
    </jefeEquipo>
    <pilotos>
      <piloto>
        <nombre>Kimi Antonelli</nombre>
        <dorsal>12</dorsal>
        <nacionalidad>Italiano</nacionalidad>
        <rol>titular</rol>
      </piloto>
      <piloto>
        <nombre>George Russell</nombre>
        <dorsal>63</dorsal>
        <nacionalidad>Británico</nacionalidad>
        <rol>titular</rol>
      </piloto>
    </pilotos>
    <motor>Mercedes</motor>
    <presupuesto>450.5</presupuesto>
    <circuitosHabituales>
      <circuitoHabitual>
        <nombre>Silverstone</nombre>
        <pais>Reino Unido</pais>
        <longitudKm>5.891</longitudKm>
        <tipo>permanente</tipo>
      </circuitoHabitual>
      <!-- Más circuitos habituales -->
    </circuitosHabituales>
  </escuderia>

  <escuderia codigo="FER">
    <nombre>Scuderia Ferrari</nombre>
    <paisBase>Italia</paisBase>
    <jefeEquipo>
      <nombre>Frederic Vasseur</nombre>
      <nacionalidad>Francés</nacionalidad>
    </jefeEquipo>
    <pilotos>
      <piloto>
        <nombre>Charles Leclerc</nombre>
        <dorsal>16</dorsal>
        <nacionalidad>Monegasco</nacionalidad>
        <rol>titular</rol>
      </piloto>
      <piloto>
        <nombre>Lewis Hamilton</nombre>
        <dorsal>44</dorsal>
        <nacionalidad>Británico</nacionalidad>
        <rol>titular</rol>
      </piloto>
    </pilotos>
    <motor>Ferrari</motor>
    <presupuesto>400.0</presupuesto>
    <circuitosHabituales>
      <circuitoHabitual>
        <nombre>Monza</nombre>
        <pais>Italia</pais>
        <longitudKm>5.793</longitudKm>
        <tipo>permanente</tipo>
      </circuitoHabitual>
    </circuitosHabituales>
  </escuderia>

  <escuderia codigo="MCL">
    <nombre>McLaren Formula 1 Team</nombre>
    <paisBase>Reino Unido</paisBase>
    <jefeEquipo>
      <nombre>Andrea Stella</nombre>
      <nacionalidad>Italiano</nacionalidad>
    </jefeEquipo>
    <pilotos>
      <piloto>
        <nombre>Lando Norris</nombre>
        <dorsal>4</dorsal>
        <nacionalidad>Británico</nacionalidad>
        <rol>titular</rol>
      </piloto>
      <piloto>
        <nombre>Oscar Piastri</nombre>
        <dorsal>81</dorsal>
        <nacionalidad>Australiano</nacionalidad>
        <rol>titular</rol>
      </piloto>
      <piloto>
        <nombre>Leonardo Fornaroli</nombre>
        <dorsal>20</dorsal>
        <nacionalidad>Italiano</nacionalidad>
        <rol>reserva</rol>
      </piloto>
      <piloto>
        <nombre>Patricio 'Pato' O'Ward</nombre>
        <dorsal>5</dorsal>
        <nacionalidad>Mexicano</nacionalidad>
        <rol>reserva</rol>
      </piloto>
    </pilotos>
    <motor>Mercedes</motor>
    <presupuesto>420.0</presupuesto>
    <circuitosHabituales>
      <circuitoHabitual>
        <nombre>Suzuka</nombre>
        <pais>Japón</pais>
        <longitudKm>5.807</longitudKm>
        <tipo>permanente</tipo>
      </circuitoHabitual>
    </circuitosHabituales>
  </escuderia>

  <circuito>
    <nombre>Bahrain International Circuit</nombre>
    <pais>Baréin</pais>
    <longitudKm>5.412</longitudKm>
    <tipo>permanente</tipo>
  </circuito>
  <circuito>
    <nombre>Circuit de Monaco</nombre>
    <pais>Mónaco</pais>
    <longitudKm>3.337</longitudKm>
    <tipo>urbano</tipo>
  </circuito>
  <circuito>
    <nombre>Yas Marina Circuit</nombre>
    <pais>Emiratos Árabes Unidos</pais>
    <longitudKm>5.281</longitudKm>
    <tipo>semiurbano</tipo>
  </circuito>
</temporadaF1>
```

### Entrega del ejercicio 2

Entregarás la carpeta `ejer2/` con los siguientes archivos:

- Guarda el esquema como: `formula1.xsd`
- `formula1.xml` ya proporcionado (para validación).

### Criterios de evaluación del ejercicio 2

## Entrega final

Comprime las 2 carpetas (`ejer1`, `ejer2`) en un único archivo ZIP, con el nombre `examen_T2_nombre_apellidos.zip`, y asegúrate de que la estructura interna sea la siguiente:

```plaintext
examen_T2_nombre_apellidos.zip
├── ejer1/
│   ├── ejer1_asistencia.html
│   ├── ejer1_asistencia.js
│   └── ejer1_asistencia.css
└── ejer2/
    ├── formula1.xsd
    └── formula1.xml
```

**¡Mucha suerte!**
