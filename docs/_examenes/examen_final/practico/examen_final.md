# Examen Final Práctico - Lenguajes de Marcas

**Módulo:** Lenguajes de Marcas y Sistemas de Gestión de Información  
**Unidades evaluadas:** UD1, UD2, UD3, UD4, UD5, UD6 y UD7  
**Duración total:** 2 horas y 30 minutos  
**Estructura:** 3 bloques de 50 minutos  
**Puntuación total:** 30 puntos (10 puntos por bloque)

**Herramientas permitidas:** Visual Studio Code, navegador web y BaseX.  
**Herramienta obligatoria para el bloque 3:** **BaseX**.

## Instrucciones generales

- Lee completamente cada bloque antes de comenzar.
- Organiza el tiempo: cada bloque está diseñado para resolverse en **50 minutos**.
- Entrega todos los archivos en una carpeta comprimida ZIP con el nombre: `examen_final_nombre_apellidos.zip`.
- Respeta los nombres de archivo y la estructura de carpetas indicada.
- Se valorará la corrección técnica, la claridad de la solución y la organización del trabajo.
- El uso de asistentes automáticos de código (por ejemplo, Copilot) está prohibido durante la prueba.

## Antes de comenzar

Descarga y descomprime `recursos_examen_final.zip`. Ese paquete incluye los materiales de partida para los tres bloques:

- Archivos base HTML y CSS para los ejercicios web.
- Recursos XML y XSD para validación.
- Archivos XML y una plantilla XSL para el bloque de BaseX.
- Imágenes y documentos auxiliares cuando proceda.

Los bloques son **independientes** entre sí. Puedes resolverlos en el orden que prefieras.

---

## Bloque 1: Marcado y publicación web (UD1 y UD2) - 10 puntos - 50 minutos

Este bloque evalúa la creación de documentos estructurados y páginas web semánticas. En este examen final, las tareas parten de materiales ya preparados y solo exigen completar una parte concreta de cada ejercicio.

### Ejercicio 1.1: XML bien formado de catálogo cultural (3 puntos)

Escribe un documento XML llamado `ejer1_catalogo_cultural.xml` para almacenar información de un **catálogo de actividades culturales**.

#### Requisitos

Debes incluir **2 actividades**, y cada una debe contener:

- Título de la actividad.
- Tipo (`teatro`, `cine`, `concierto` o `exposicion`).
- Fecha.
- Precio.
- Lugar.

#### Consideraciones

- Usa al menos **un atributo** en cada actividad.
- El XML debe estar bien formado y ser fácil de procesar.
- Incluye la declaración XML.
- Utiliza nombres de etiquetas claros y coherentes.

#### Entrega 1.1

- Archivo: `bloque1/ejer1_catalogo_cultural.xml`

#### Criterios de evaluación 1.1

- Sintaxis XML correcta: **1,00 punto**.
- Estructura semántica adecuada: **1,00 punto**.
- Completitud y legibilidad: **1,00 punto**.

### Ejercicio 1.2: Página HTML semántica de jornadas técnicas (3,5 puntos)

Se proporciona un archivo HTML base llamado `ejer2_jornadas_tecnicas.html` ya estructurado. Debes **completar únicamente una parte del contenido** para anunciar unas **jornadas tecnológicas**.

#### Requisitos 1.2

Partiendo del HTML preconfigurado, debes añadir solo estos elementos en la zona indicada del documento:

1. Dos `article` de ponencias o talleres, cada uno con:
   - Título.
   - Breve descripción.
   - Ponente.
2. Una tabla simple con horario de **3 actividades**.
3. Un botón o enlace de inscripción dentro de la sección principal.

#### Consideraciones 1.2

- No debes rehacer la página completa.
- No es necesario aplicar CSS en este ejercicio.
- Debes respetar la estructura semántica ya proporcionada.

#### Entrega 1.2

- Archivo completado: `bloque1/ejer2_jornadas_tecnicas.html`

#### Criterios de evaluación 1.2

- Inserción correcta del contenido solicitado en el HTML base: **1,50 puntos**.
- Uso adecuado de etiquetas semánticas y jerarquía: **1,25 puntos**.
- Limpieza y coherencia del marcado: **0,75 puntos**.

### Ejercicio 1.3: CSS de una tarjeta informativa responsive (3,5 puntos)

Se proporcionan un HTML base `ejer3_tarjeta_evento.html` y una hoja `styles.css` ya iniciada. Debes **añadir únicamente los estilos que faltan** para completar la presentación de una **tarjeta informativa de evento**.

#### Requisitos de diseño

En la hoja CSS preconfigurada debes completar estos apartados:

- Estilos de la cabecera de la tarjeta.
- Distribución en Flexbox de la zona de detalles.
- Apariencia de los botones de acción.
- Ajuste responsive para móvil en pantallas menores de 600px.

#### Consideraciones 1.3

- Solo se evalúa el CSS.
- Debes trabajar sobre el HTML y el CSS proporcionados, sin rehacerlos desde cero.

#### Entrega 1.3

- Archivo completado: `bloque1/styles/styles.css`

#### Criterios de evaluación 1.3

- Selectores y ampliación correcta del CSS base: **1,00 punto**.
- Layout y estilos de los bloques solicitados: **1,50 puntos**.
- Responsive y coherencia visual final: **1,00 punto**.

---

## Bloque 2: Interactividad y validación de documentos (UD3 y UD4) - 10 puntos - 50 minutos

Este bloque combina programación en cliente con modelado de esquemas XML. Las funcionalidades exigidas son más acotadas que en el parcial T2.

### Ejercicio 2.1: JavaScript DOM para gestor de tareas (6 puntos)

Partiendo del HTML base proporcionado en `bloque2/ejer1/`, desarrolla la funcionalidad de un **gestor simple de tareas**.

#### Requisitos funcionales 2.1

1. Cargar una lista inicial de **5 tareas** desde un array JavaScript.
2. Mostrar cada tarea con:
   - Texto descriptivo.
   - Estado (`pendiente` o `hecha`).
   - Botón para cambiar estado.
   - Botón para eliminar.
3. Permitir añadir nuevas tareas mediante un campo de texto y un botón.
4. No permitir tareas vacías ni duplicadas exactas.
5. Mostrar un resumen dinámico con:
   - Total de tareas.
   - Pendientes.
   - Hechas.

#### Restricciones técnicas 2.1

- Usa `addEventListener`.
- No se permiten eventos inline.
- Organiza el código en funciones reutilizables.
- Solo puedes modificar el HTML base para añadir clases o atributos si son necesarios.

#### Entrega 2.1

- `bloque2/ejer1/ejer1_tareas.html`
- `bloque2/ejer1/ejer1_tareas.css` (proporcionado, no modificar)
- `bloque2/ejer1/ejer1_tareas.js`

#### Criterios de evaluación 2.1

- Renderizado inicial correcto: **1,00 punto**.
- Cambio de estado funcional: **1,25 puntos**.
- Alta con validaciones: **1,50 puntos**.
- Eliminación individual: **0,75 puntos**.
- Resumen dinámico: **1,00 punto**.
- Calidad del código: **0,50 puntos**.

### Ejercicio 2.2: Esquema XSD para un inventario de laboratorio (4 puntos)

Debes definir un esquema `inventario_laboratorio.xsd` para validar un XML con información de **equipos de laboratorio**.

#### Requisitos del XML 2.2

Cada `equipo` debe incluir:

- Atributo obligatorio `codigo`.
- Nombre.
- Categoría.
- Estado (`operativo`, `revision` o `baja`).
- Fecha de compra.
- Coste.
- Responsable.

Además, el documento puede incluir una lista de `sala` con:

- Identificador.
- Nombre.
- Capacidad.

#### Requisitos del esquema 2.2

- Elemento raíz `inventario`.
- Uso de tipos simples y complejos.
- Restricción de valores cerrados para `estado`.
- `coste` decimal mayor o igual que 0.
- `capacidad` entera positiva.
- Unicidad del atributo `codigo` en los equipos.

#### Entrega 2.2

- `bloque2/ejer2/inventario_laboratorio.xsd`

#### Criterios de evaluación 2.2

- Estructura general del esquema: **1,00 punto**.
- Tipos y restricciones bien definidos: **1,50 puntos**.
- Atributos y unicidad: **1,00 punto**.
- Claridad formal y sintaxis: **0,50 puntos**.

---

## Bloque 3: Consulta, transformación e intercambio de datos (UD5, UD6 y UD7) - 10 puntos - 50 minutos

Este bloque integra explotación de documentos XML y una pequeña tarea de intercambio de datos orientada a sistemas de gestión empresarial. Debe realizarse y comprobarse con **BaseX** en los ejercicios indicados.

### Ejercicio 3.1: XPath sobre pedidos (2,5 puntos)

Dispones del documento `pedidos.xml`.

Escribe expresiones XPath que devuelvan:

1. Los nombres de clientes con pedidos del año 2026. **(0,5 puntos)**
2. Los pedidos con importe superior a 500. **(0,5 puntos)**
3. Los productos de la categoría `hardware`. **(0,5 puntos)**
4. El pedido con mayor importe. **(0,5 puntos)**
5. Los códigos de pedido cuyo estado sea `pendiente`. **(0,5 puntos)**

#### Entrega 3.1

- Archivo: `bloque3/ejer1_xpath.txt`
- Debe contener **5 líneas exactas**, una expresión por línea.

### Ejercicio 3.2: XSLT de resumen operativo (2,5 puntos)

Dispones de `pedidos.xml` y de una plantilla parcial `ejer2_base.xsl`.

Debes completar la transformación para generar `resumen_pedidos.xml` con esta estructura:

- Raíz `resumen-pedidos`.
- Sección `pendientes` con los pedidos pendientes.
- Sección `completados` con los pedidos completados.
- Sección `totales` con:
  - `totalPedidos`
  - `totalPendientes`
  - `totalCompletados`

Cada elemento `pedido` del resultado debe incluir atributo `codigo` y texto con el nombre del cliente.

#### Entrega 3.2

- `bloque3/ejer2_transformacion.xsl`
- `bloque3/ejer2_resultado.xml`

#### Criterios de evaluación 3.2

- Estructura del resultado correcta: **1,50 puntos**.
- Selección de nodos y recuentos: **0,75 puntos**.
- Claridad mínima de la XSLT: **0,25 puntos**.

### Ejercicio 3.3: XQuery de explotación de datos (3 puntos)

Escribe tres consultas XQuery independientes sobre `pedidos.xml`:

1. Obtener los elementos `<pedido>` del cliente `C002`. **(1 punto)**
2. Obtener nombre de cliente e importe de los pedidos `pendientes`. **(1 punto)**
3. Obtener cuántos pedidos hay por estado. **(1 punto)**

#### Consideraciones 3.3

- Cada consulta debe guardarse en un archivo distinto.
- No reutilices varias consultas dentro de un mismo fichero.

#### Entrega 3.3

- `bloque3/ejer3_1.xq`
- `bloque3/ejer3_2.xq`
- `bloque3/ejer3_3.xq`

### Ejercicio 3.4: Documento de intercambio para SGE (2 puntos)

A partir de los datos proporcionados en `pedido_manual.txt`, crea un XML llamado `pedido_importacion.xml` pensado para ser importado en un **sistema de gestión empresarial**.

#### Requisitos 3.4

El documento debe contener:

- Identificador de pedido.
- Fecha.
- Cliente.
- Lista de líneas de pedido.
- Para cada línea:
  - Código de artículo.
  - Descripción.
  - Cantidad.
  - Precio unitario.

#### Consideraciones 3.4

- Se valorará que la estructura sea clara, coherente y fácil de intercambiar entre aplicaciones.
- No se pide XSD en este apartado.

#### Entrega 3.4

- `bloque3/pedido_importacion.xml`

#### Criterios de evaluación 3.4

- Estructura adecuada para intercambio de datos: **1,25 puntos**.
- Corrección y completitud del contenido: **0,75 puntos**.

### Comprobación con BaseX

Debes verificar en BaseX, al menos, los ejercicios 3.1, 3.2 y 3.3.

#### Evidencias de ejecución

Incluye un PDF llamado `bloque3_capturas.pdf` donde se vea claramente:

1. La consulta XPath/XQuery o la llamada a `xslt:transform(...)`.
2. La ejecución sin errores.
3. El panel de resultados.
4. El archivo XML cargado o referenciado.

---

## Resumen de tiempos recomendado

- **Bloque 1**: 50 minutos. Ejercicio 1.1: 10 min. Ejercicio 1.2: 20 min. Ejercicio 1.3: 20 min.
- **Bloque 2**: 50 minutos. Ejercicio 2.1: 30 min. Ejercicio 2.2: 20 min.
- **Bloque 3**: 50 minutos. Ejercicio 3.1: 10 min. Ejercicio 3.2: 12 min. Ejercicio 3.3: 18 min. Ejercicio 3.4: 10 min.

## Entrega final

Comprime todo en un único archivo ZIP llamado `examen_final_nombre_apellidos.zip`, con una estructura similar a la siguiente:

```plaintext
examen_final_nombre_apellidos.zip
├── bloque1/
│   ├── ejer1_catalogo_cultural.xml
│   ├── ejer2_jornadas_tecnicas.html
│   └── styles/
│       └── styles.css
├── bloque2/
│   ├── ejer1/
│   │   ├── ejer1_tareas.html
│   │   ├── ejer1_tareas.css
│   │   └── ejer1_tareas.js
│   └── ejer2/
│       └── inventario_laboratorio.xsd
└── bloque3/
   ├── ejer1_xpath.txt
   ├── ejer2_transformacion.xsl
   ├── ejer2_resultado.xml
   ├── ejer3_1.xq
   ├── ejer3_2.xq
   ├── ejer3_3.xq
   ├── pedido_importacion.xml
   └── bloque3_capturas.pdf
```

## Observaciones para el profesorado

- Esta propuesta mantiene los contenidos de todo el módulo, pero reduce la carga de cada tarea frente a los parciales.
- El bloque 1 concentra creación y maquetación básica.
- El bloque 2 separa claramente scripting y validación XSD.
- El bloque 3 integra explotación XML y una tarea breve de intercambio de datos vinculada a SGE.

**¡Mucha suerte!**
