# Ejercicio 2: Formulario de Reservas de Restaurante

## Decisiones de Diseño

### 1. **Estructura HTML**

- **Uso de `<fieldset>` y `<legend>`**: Agrupación semántica de campos relacionados (datos personales, detalles de reserva, preferencias). Mejora la accesibilidad y la organización visual.

- **Labels asociados**: Cada input tiene su `<label>` correctamente vinculado con `for` e `id`, mejorando la usabilidad (especialmente en dispositivos táctiles y lectores de pantalla).

- **Validación nativa HTML5**: 
  - `required` en campos obligatorios
  - `type="email"` para correos
  - `type="tel"` con `pattern` para teléfonos
  - Estados visuales automáticos (`:valid`, `:invalid`)

### 2. **Diseño Visual**

- **Paleta de colores**: Gradiente rosa-violeta que transmite modernidad y elegancia, apropiado para un restaurante contemporáneo.

- **Espaciado generoso**: Padding y márgenes amplios para facilitar la lectura y evitar errores táctiles en móviles.

- **Bordes redondeados**: `border-radius` de 8-16px para un aspecto suave y moderno.

- **Sombras sutiles**: `box-shadow` en el contenedor principal y botones para crear profundidad.

### 3. **Interacción y Estados**

- **Estados hover**: Cambios visuales claros al pasar el ratón sobre botones, radios y checkboxes.

- **Estados focus**: Borde de color y sombra sutil en los campos activos, mejorando la accesibilidad para navegación por teclado.

- **Feedback visual**: Bordes de color según validación (rojo para inválido, verde para válido).

### 4. **Responsive Design**

- **Mobile-first**: El formulario se adapta a pantallas pequeñas:
  - Grid de 2 columnas en desktop → 1 columna en móvil
  - Selectores de fecha apilados verticalmente en móvil
  - Botones en columna en móvil

- **Breakpoint**: `max-width: 600px` para cambiar el layout.

### 5. **Accesibilidad**

- **Contraste de colores**: Cumple con WCAG 2.1 (AA) para texto sobre fondo.

- **Tamaños táctiles**: Elementos interactivos con mínimo 44x44px.

- **Reducción de movimiento**: Respeta `prefers-reduced-motion` para usuarios sensibles a animaciones.

### 6. **Usabilidad**

- **Placeholders informativos**: Ejemplos de formato en teléfono y email.

- **Opciones claras**: Turnos con horarios indicados ("Comida (13:00-16:00)").

- **Textarea para comentarios**: Permite al usuario especificar alergias o peticiones especiales.

- **Botón de reset**: Permite limpiar el formulario fácilmente.

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con Grid y Flexbox
- Gradientes CSS para un diseño moderno
- Transiciones suaves para mejorar la experiencia

## Archivos

- `index.html`: Estructura del formulario
- `css/styles.css`: Estilos completos con comentarios justificativos
