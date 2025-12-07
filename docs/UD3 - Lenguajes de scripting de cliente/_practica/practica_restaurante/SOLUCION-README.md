# Solución de la Práctica - Restaurante La Buena Mesa

## 📋 Estructura de Archivos

```
practica_restaurante/
├── index.html              # Versión para que los alumnos completen
├── index-solucion.html     # Versión con la solución implementada
├── css/
│   └── styles.css          # Estilos completos
├── js/
│   ├── main.js             # Plantilla con TODOs para los alumnos
│   └── main-solucion.js    # Solución completa (ESTE ARCHIVO)
└── data/
    └── platos.json         # Base de datos de platos
```

## 🎯 Funcionalidades Implementadas

### Apartado 1: Navegación y Menú Interactivo (2 puntos)

#### 1.1 Menú Hamburguesa Responsive
- ✅ Toggle del menú con animación suave
- ✅ Cierre automático al hacer clic en un enlace
- ✅ Cierre al hacer clic fuera del menú
- ✅ Animación del icono hamburguesa a X

**Implementación:**
```javascript
function inicializarMenuHamburguesa() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar al hacer clic en enlaces...
}
```

#### 1.2 Scroll Suave
- ✅ Desplazamiento suave a las secciones
- ✅ Uso de `scrollIntoView()` con comportamiento suave
- ✅ Prevención del comportamiento por defecto

#### 1.3 Menú Activo según Scroll
- ✅ Uso de `IntersectionObserver` para detectar sección visible
- ✅ Actualización dinámica de la clase `active`
- ✅ Detección precisa con márgenes ajustados

**Técnica empleada:**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Actualizar menú activo
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px'
});
```

---

### Apartado 2: Validación de Formulario (2.5 puntos)

#### 2.1 Validación en Tiempo Real
- ✅ Validación en evento `blur` (al salir del campo)
- ✅ Validación en evento `input` (mientras escribe, si hay error previo)
- ✅ Mensajes de error específicos para cada campo
- ✅ Clases CSS para indicar errores visualmente

**Validaciones implementadas:**
- **Nombre**: Mínimo 3 caracteres, solo letras y espacios
- **Email**: Formato válido usando regex
- **Teléfono**: Exactamente 9 dígitos
- **Personas**: Entre 1 y 10

#### 2.2 Validación de Fecha
- ✅ Fecha debe ser posterior a hoy
- ✅ Máximo 3 meses de antelación
- ✅ Mensajes de error claros y específicos

**Implementación:**
```javascript
fecha: (valor) => {
    const fechaSeleccionada = new Date(valor);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    if (fechaSeleccionada < hoy) {
        return 'La fecha debe ser posterior a hoy';
    }
    // ...
}
```

#### 2.3 Validación Final
- ✅ Prevención del envío con `preventDefault()`
- ✅ Validación de todos los campos obligatorios
- ✅ Resumen de errores en la parte superior
- ✅ Scroll automático a los errores
- ✅ Confirmación visual al completar correctamente
- ✅ Limpieza del formulario tras envío exitoso

---

### Apartado 3: Filtrado y Búsqueda (2.5 puntos)

#### 3.1 Carga de Datos
- ✅ Uso de `fetch()` para cargar `platos.json`
- ✅ Manejo de errores con try/catch
- ✅ Renderizado dinámico de tarjetas de platos
- ✅ Lazy loading de imágenes

**Estructura del plato:**
```javascript
{
    id: 1,
    nombre: "Jamón Ibérico de Bellota",
    descripcion: "Jamón ibérico cortado a cuchillo...",
    precio: 18.50,
    categoria: "entrantes",
    imagen: "url..."
}
```

#### 3.2 Filtrado por Categorías
- ✅ Botones para todas las categorías
- ✅ Actualización visual del botón activo
- ✅ Filtrado eficiente con `Array.filter()`
- ✅ Transiciones suaves entre filtros

#### 3.3 Búsqueda en Tiempo Real
- ✅ Búsqueda mientras el usuario escribe
- ✅ Case-insensitive
- ✅ Búsqueda en nombre y descripción
- ✅ Combinación con filtro de categorías
- ✅ Mensaje cuando no hay resultados

**Función de filtrado combinado:**
```javascript
function aplicarFiltros() {
    let platosFiltrados = todosLosPlatos;
    
    // Filtrar por categoría
    if (categoriaActiva !== 'todos') {
        platosFiltrados = platosFiltrados.filter(
            plato => plato.categoria === categoriaActiva
        );
    }
    
    // Filtrar por búsqueda
    if (terminoBusqueda) {
        platosFiltrados = platosFiltrados.filter(plato => 
            plato.nombre.toLowerCase().includes(terminoBusqueda) ||
            plato.descripcion.toLowerCase().includes(terminoBusqueda)
        );
    }
    
    mostrarPlatos(platosFiltrados);
}
```

---

### Apartado 4: Carrito de Compras (3 puntos)

#### 4.1 Añadir al Carrito
- ✅ Detección de productos duplicados
- ✅ Incremento de cantidad si ya existe
- ✅ Notificación visual con animación
- ✅ Actualización del contador del carrito

#### 4.2 Panel Lateral
- ✅ Apertura/cierre con animaciones CSS
- ✅ Overlay oscuro de fondo
- ✅ Cierre al hacer clic fuera
- ✅ Diseño responsive (ancho completo en móvil)

**Estructura del carrito:**
```javascript
carrito = [
    {
        id: 1,
        nombre: "Jamón Ibérico",
        precio: 18.50,
        imagen: "url...",
        cantidad: 2
    },
    // ...
]
```

#### 4.3 Cálculos Dinámicos
- ✅ Contador total de productos
- ✅ Subtotal por producto (precio × cantidad)
- ✅ Total general del carrito
- ✅ Actualización en tiempo real con `reduce()`

**Cálculo del total:**
```javascript
function actualizarTotal() {
    const total = carrito.reduce(
        (sum, item) => sum + (item.precio * item.cantidad), 
        0
    );
    totalPrice.textContent = formatearPrecio(total);
}
```

#### 4.4 Persistencia con localStorage
- ✅ Guardado automático al modificar el carrito
- ✅ Carga al iniciar la página
- ✅ Uso de `JSON.stringify()` y `JSON.parse()`
- ✅ Manejo de errores en caso de datos corruptos

**Funciones de persistencia:**
```javascript
function guardarCarrito() {
    localStorage.setItem('carritoRestaurante', JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carritoRestaurante');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
        renderizarCarrito();
    }
}
```

---

## 🎨 Características Adicionales

### Funciones Auxiliares Implementadas

1. **`formatearPrecio(numero)`**
   - Formatea números a precio con 2 decimales y símbolo €

2. **`mostrarNotificacion(mensaje)`**
   - Crea notificaciones temporales (3 segundos)
   - Animaciones de entrada y salida
   - Posicionamiento fijo en esquina superior derecha

3. **Validaciones modulares**
   - Objeto `validaciones` con funciones para cada campo
   - Reutilizable y fácil de mantener

### Animaciones CSS

```css
@keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
}
```

---

## 🚀 Cómo Probar la Solución

### Opción 1: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server)
npx http-server

# Con VS Code Live Server
# Click derecho > Open with Live Server
```

Luego abre: `http://localhost:8000/index-solucion.html`

### Opción 2: Abrir directamente
⚠️ **Nota**: Algunos navegadores bloquean `fetch()` de archivos locales. Usa un servidor local para mejor experiencia.

---

## 📝 Puntos Clave de la Implementación

### Buenas Prácticas Aplicadas

✅ **Código modular**: Funciones específicas para cada tarea
✅ **Comentarios claros**: Explicación de lógica compleja
✅ **Manejo de errores**: Try/catch en operaciones asíncronas
✅ **Nombres descriptivos**: Variables y funciones con nombres claros
✅ **Event delegation**: Eficiencia en eventos dinámicos
✅ **Progressive enhancement**: Funciona sin JavaScript (HTML semántico)
✅ **Responsive design**: Adaptación a todos los tamaños de pantalla

### Técnicas JavaScript Avanzadas

- **IntersectionObserver API**: Para detectar secciones visibles
- **Async/Await**: Para carga de datos
- **Array methods**: filter(), map(), reduce(), find()
- **Template literals**: Para generación dinámica de HTML
- **localStorage API**: Para persistencia de datos
- **Event delegation**: Para elementos dinámicos

---

## 🐛 Solución de Problemas Comunes

### 1. Los platos no cargan
**Causa**: Fetch bloqueado en archivos locales
**Solución**: Usar un servidor local (ver instrucciones arriba)

### 2. El carrito no se guarda
**Causa**: localStorage lleno o bloqueado
**Solución**: Limpiar localStorage del navegador

### 3. Las imágenes no cargan
**Causa**: URLs de Unsplash pueden fallar ocasionalmente
**Solución**: Las imágenes son placeholder, se pueden reemplazar

### 4. El menú no se cierra en móvil
**Causa**: CSS no cargado correctamente
**Solución**: Verificar ruta del archivo CSS

---

## 📚 Recursos Útiles

- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [MDN - Intersection Observer](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)
- [MDN - LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [MDN - Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 💡 Posibles Mejoras (Para Alumnos Avanzados)

1. **Backend real**: Conectar a una API REST
2. **Base de datos**: Usar IndexedDB en lugar de localStorage
3. **Autenticación**: Sistema de login de usuarios
4. **Pasarela de pago**: Integración con Stripe/PayPal
5. **Notificaciones push**: Confirmar reservas
6. **Geolocalización**: Mostrar mapa real
7. **PWA**: Convertir en Progressive Web App
8. **Tests unitarios**: Añadir Jest o Mocha
9. **Accesibilidad**: ARIA labels completos
10. **Internacionalización**: Soporte multiidioma

---

**Desarrollado por**: [Tu nombre]
**Fecha**: Diciembre 2025
**Versión**: 1.0
