---
sidebar_position: 6
---

# UD3.6 - Modificación de Estilos CSS desde JavaScript

## Introducción

JavaScript permite modificar dinámicamente los estilos CSS de los elementos HTML, lo que nos permite crear páginas web interactivas y responsivas. Existen varias formas de manipular los estilos desde JavaScript.

## 1. La Propiedad `style`

### 1.1 Acceso directo a la propiedad style

La forma más directa de modificar estilos es a través de la propiedad `style` de los elementos:

```javascript
// Seleccionar un elemento
const elemento = document.getElementById('miElemento');

// Modificar estilos individuales
elemento.style.color = 'red';
elemento.style.backgroundColor = 'yellow';
elemento.style.fontSize = '20px';
elemento.style.border = '2px solid blue';
```

### 1.2 Nombres de propiedades CSS en JavaScript

Las propiedades CSS que contienen guiones se convierten a camelCase en JavaScript:

```javascript
// CSS -> JavaScript
// background-color -> backgroundColor
// font-size -> fontSize
// border-radius -> borderRadius
// text-align -> textAlign

elemento.style.backgroundColor = 'lightblue';
elemento.style.fontSize = '16px';
elemento.style.borderRadius = '10px';
elemento.style.textAlign = 'center';
```

### 1.3 Modificar múltiples estilos

```javascript
// Método 1: Uno por uno
elemento.style.width = '300px';
elemento.style.height = '200px';
elemento.style.background = 'linear-gradient(45deg, red, blue)';

// Método 2: Usando cssText
elemento.style.cssText = 'width: 300px; height: 200px; background: red;';

// Método 3: Usando Object.assign
Object.assign(elemento.style, {
    width: '300px',
    height: '200px',
    backgroundColor: 'red',
    border: '1px solid black'
});
```

## 2. Trabajando con Classes CSS

### 2.1 La propiedad classList

Es más eficiente y mantenible trabajar con clases CSS predefinidas:

```javascript
const elemento = document.getElementById('miElemento');

// Agregar una clase
elemento.classList.add('destacado');

// Agregar múltiples clases
elemento.classList.add('grande', 'azul', 'centrado');

// Quitar una clase
elemento.classList.remove('oculto');

// Alternar una clase (toggle)
elemento.classList.toggle('activo');

// Verificar si tiene una clase
if (elemento.classList.contains('visible')) {
    console.log('El elemento es visible');
}

// Reemplazar una clase
elemento.classList.replace('viejo', 'nuevo');
```

### 2.2 Ejemplo práctico con classList

```html
<!-- HTML -->
<div id="caja" class="caja">Contenido</div>
<button onclick="cambiarEstilo()">Cambiar Estilo</button>
```

```css
/* CSS */
.caja {
    width: 100px;
    height: 100px;
    background-color: lightgray;
    transition: all 0.3s ease;
}

.destacada {
    background-color: yellow;
    transform: scale(1.2);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.grande {
    width: 200px;
    height: 200px;
}
```

```javascript
// JavaScript
function cambiarEstilo() {
    const caja = document.getElementById('caja');
    caja.classList.toggle('destacada');
    caja.classList.toggle('grande');
}
```

## 3. getComputedStyle()

Para obtener los estilos calculados (incluyendo CSS externo):

```javascript
const elemento = document.getElementById('miElemento');

// Obtener todos los estilos computados
const estilos = window.getComputedStyle(elemento);

// Obtener propiedades específicas
const color = estilos.getPropertyValue('color');
const fontSize = estilos.getPropertyValue('font-size');
const backgroundColor = estilos.backgroundColor;

console.log('Color:', color);
console.log('Tamaño de fuente:', fontSize);
console.log('Color de fondo:', backgroundColor);
```

### 3.1 Diferencias entre style y getComputedStyle

```javascript
const elemento = document.getElementById('miElemento');

// style: solo devuelve estilos inline
console.log(elemento.style.color); // Puede estar vacío

// getComputedStyle: devuelve el estilo final computado
const estilosComputados = getComputedStyle(elemento);
console.log(estilosComputados.color); // Siempre tiene valor
```

## 4. Manipulación de Hojas de Estilo

### 4.1 Acceder a las hojas de estilo

```javascript
// Obtener todas las hojas de estilo
const hojas = document.styleSheets;

// Acceder a una hoja específica
const primeraHoja = document.styleSheets[0];

// Obtener reglas de una hoja
const reglas = primeraHoja.cssRules || primeraHoja.rules;
```

### 4.2 Añadir reglas CSS dinámicamente

```javascript
// Crear una nueva hoja de estilos
const style = document.createElement('style');
document.head.appendChild(style);
const sheet = style.sheet;

// Añadir reglas CSS
sheet.insertRule('.nueva-clase { color: red; font-size: 20px; }', 0);
sheet.insertRule('@media (max-width: 600px) { .responsive { display: none; } }', 1);
```

## 5. Animaciones con JavaScript

### 5.1 Cambios graduales con setInterval

```javascript
function animarOpacidad(elemento) {
    let opacidad = 1;
    const timer = setInterval(() => {
        if (opacidad <= 0.1) {
            clearInterval(timer);
            elemento.style.display = 'none';
        }
        elemento.style.opacity = opacidad;
        opacidad -= 0.1;
    }, 50);
}

// Uso
const div = document.getElementById('miDiv');
animarOpacidad(div);
```

### 5.2 Usando requestAnimationFrame

```javascript
function animarPosicion(elemento, destino) {
    let posicionActual = 0;
    
    function animar() {
        if (posicionActual < destino) {
            posicionActual += 2;
            elemento.style.left = posicionActual + 'px';
            requestAnimationFrame(animar);
        }
    }
    
    animar();
}

// Uso
const caja = document.getElementById('caja');
caja.style.position = 'relative';
animarPosicion(caja, 300);
```

## 6. Transiciones y Animaciones CSS desde JavaScript

### 6.1 Controlar transiciones CSS

```css
/* CSS */
.elemento {
    transition: all 0.3s ease;
}

.elemento.movido {
    transform: translateX(100px);
}
```

```javascript
// JavaScript
const elemento = document.getElementById('elemento');

// Activar transición
elemento.classList.add('movido');

// Detectar cuando termina la transición
elemento.addEventListener('transitionend', (e) => {
    console.log('Transición completada:', e.propertyName);
});
```

### 6.2 Animaciones CSS controladas por JavaScript

```css
/* CSS */
@keyframes rotar {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.rotando {
    animation: rotar 2s linear infinite;
}
```

```javascript
// JavaScript
const elemento = document.getElementById('elemento');

// Iniciar animación
elemento.classList.add('rotando');

// Detener animación después de 5 segundos
setTimeout(() => {
    elemento.classList.remove('rotando');
}, 5000);
```

## 7. Casos de Uso Prácticos

### 7.1 Cambiar tema (modo oscuro/claro)

```css
/* CSS */
:root {
    --bg-color: white;
    --text-color: black;
}

[data-theme="dark"] {
    --bg-color: #333;
    --text-color: white;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
}
```

```javascript
// JavaScript
function cambiarTema() {
    const body = document.body;
    const temaActual = body.getAttribute('data-theme');
    
    if (temaActual === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}
```

### 7.2 Galería de imágenes con efectos

```html
<!-- HTML -->
<div class="galeria">
    <img src="img1.jpg" class="imagen" onclick="destacarImagen(this)">
    <img src="img2.jpg" class="imagen" onclick="destacarImagen(this)">
    <img src="img3.jpg" class="imagen" onclick="destacarImagen(this)">
</div>
```

```css
/* CSS */
.imagen {
    width: 150px;
    height: 150px;
    margin: 10px;
    transition: transform 0.3s, filter 0.3s;
    cursor: pointer;
}

.imagen:hover {
    transform: scale(1.1);
}

.imagen.destacada {
    transform: scale(1.3);
    filter: brightness(1.2);
    z-index: 10;
    position: relative;
}

.imagen.atenuada {
    filter: brightness(0.5);
}
```

```javascript
// JavaScript
function destacarImagen(imagenClickeada) {
    const todasLasImagenes = document.querySelectorAll('.imagen');
    
    todasLasImagenes.forEach(img => {
        img.classList.remove('destacada', 'atenuada');
        if (img !== imagenClickeada) {
            img.classList.add('atenuada');
        }
    });
    
    imagenClickeada.classList.add('destacada');
}
```

### 7.3 Menú responsive dinámico

```html
<!-- HTML -->
<nav class="menu">
    <div class="menu-toggle" onclick="toggleMenu()">☰</div>
    <ul class="menu-items">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>
</nav>
```

```css
/* CSS */
.menu {
    background-color: #333;
    padding: 10px;
}

.menu-toggle {
    display: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.menu-items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.menu-items li {
    margin-right: 20px;
}

.menu-items a {
    color: white;
    text-decoration: none;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    .menu-items {
        display: none;
        flex-direction: column;
        position: absolute;
        background-color: #333;
        width: 100%;
        left: 0;
        top: 50px;
    }
    
    .menu-items.activo {
        display: flex;
    }
    
    .menu-items li {
        margin: 0;
        padding: 10px;
    }
}
```

```javascript
// JavaScript
function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('activo');
}

// Cerrar menú al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    const menuItems = document.querySelector('.menu-items');
    if (window.innerWidth > 768) {
        menuItems.classList.remove('activo');
    }
});
```

## 8. Mejores Prácticas

### 8.1 Rendimiento

```javascript
// ❌ Malo: Múltiples modificaciones del DOM
elemento.style.width = '100px';
elemento.style.height = '100px';
elemento.style.background = 'red';

// ✅ Bueno: Una sola modificación
elemento.style.cssText = 'width: 100px; height: 100px; background: red;';

// ✅ Mejor: Usar clases CSS
elemento.classList.add('mi-estilo');
```

### 8.2 Mantenibilidad

```javascript
// ❌ Malo: Estilos hardcoded en JavaScript
elemento.style.color = 'red';
elemento.style.fontSize = '16px';

// ✅ Bueno: Usar clases CSS definidas
elemento.classList.add('texto-destacado');
```

### 8.3 Responsive Design

```javascript
// Verificar el tamaño de pantalla
function aplicarEstilosResponsive() {
    const elementos = document.querySelectorAll('.adaptable');
    
    elementos.forEach(elemento => {
        if (window.innerWidth <= 768) {
            elemento.classList.add('mobile');
        } else {
            elemento.classList.remove('mobile');
        }
    });
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', aplicarEstilosResponsive);
window.addEventListener('resize', aplicarEstilosResponsive);
```

## Ejercicios Propuestos

1. **Cambiador de colores**: Crea botones que cambien el color de fondo de una página.
2. **Calculadora de estilos**: Programa que permita al usuario cambiar el tamaño de fuente, color y fondo de un texto mediante controles.
3. **Acordeón**: Implementa un componente acordeón que muestre/oculte contenido con animaciones.
4. **Slider de imágenes**: Crea un carousel de imágenes con efectos de transición.
5. **Dashboard responsive**: Diseña un panel de control que se adapte a diferentes tamaños de pantalla usando JavaScript y CSS.
