---
sidebar_position: 7
---

# UD3.7 - Eventos en JavaScript

## Introducción

Los eventos son acciones que ocurren en el navegador web, como hacer clic en un botón, mover el ratón, presionar una tecla, o cargar una página. JavaScript nos permite "escuchar" estos eventos y ejecutar código en respuesta a ellos, creando páginas web interactivas.

## 1. Conceptos Fundamentales

### 1.1 ¿Qué son los eventos?

Los eventos son señales que indican que algo ha sucedido en el documento HTML. Pueden ser:

- **Eventos de usuario**: clic, movimiento del ratón, pulsación de teclas
- **Eventos del navegador**: carga de página, redimensionado de ventana
- **Eventos de formulario**: envío, cambio de valores
- **Eventos de multimedia**: reproducción, pausa de video/audio

### 1.2 Flujo de eventos

Cuando ocurre un evento, este sigue un flujo a través del DOM:

1. **Fase de captura**: El evento viaja desde la raíz hasta el elemento objetivo
2. **Fase objetivo**: El evento llega al elemento que lo generó
3. **Fase de burbujeo**: El evento viaja desde el elemento objetivo hacia la raíz

```html
<div id="padre">
    <div id="hijo">
        <button id="boton">Clic aquí</button>
    </div>
</div>
```

## 2. Formas de Manejar Eventos

### 2.1 Atributos HTML (no recomendado)

```html
<button onclick="alert('¡Hola!')">Clic aquí</button>
<button onmouseover="cambiarColor(this)">Pasa el ratón</button>
```

### 2.2 Propiedades de JavaScript

```javascript
const boton = document.getElementById('miBoton');

boton.onclick = function() {
    alert('¡Botón clickeado!');
};

// O con función flecha
boton.onclick = () => {
    alert('¡Botón clickeado!');
};
```

### 2.3 addEventListener (recomendado)

```javascript
const boton = document.getElementById('miBoton');

boton.addEventListener('click', function() {
    alert('¡Botón clickeado!');
});

// Con función flecha
boton.addEventListener('click', () => {
    alert('¡Botón clickeado!');
});

// Función externa
function manejarClic() {
    alert('¡Botón clickeado!');
}

boton.addEventListener('click', manejarClic);
```

## 3. Principales Tipos de Eventos

### 3.1 Eventos de Mouse

```javascript
const elemento = document.getElementById('miElemento');

// Clic con botón izquierdo
elemento.addEventListener('click', (e) => {
    console.log('Clic en coordenadas:', e.clientX, e.clientY);
});

// Doble clic
elemento.addEventListener('dblclick', () => {
    console.log('Doble clic');
});

// Botón del mouse presionado
elemento.addEventListener('mousedown', (e) => {
    console.log('Botón presionado:', e.button); // 0=izq, 1=medio, 2=der
});

// Botón del mouse liberado
elemento.addEventListener('mouseup', () => {
    console.log('Botón liberado');
});

// Ratón entra en el elemento
elemento.addEventListener('mouseenter', () => {
    elemento.style.backgroundColor = 'lightblue';
});

// Ratón sale del elemento
elemento.addEventListener('mouseleave', () => {
    elemento.style.backgroundColor = '';
});

// Movimiento del ratón sobre el elemento
elemento.addEventListener('mousemove', (e) => {
    console.log('Posición:', e.offsetX, e.offsetY);
});
```

### 3.2 Eventos de Teclado

```javascript
// Escuchar en todo el documento
document.addEventListener('keydown', (e) => {
    console.log('Tecla presionada:', e.key);
    console.log('Código:', e.code);
    
    // Detectar teclas especiales
    if (e.key === 'Enter') {
        console.log('Enter presionado');
    }
    
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // Prevenir guardar del navegador
        console.log('Ctrl+S presionado');
    }
});

// Tecla liberada
document.addEventListener('keyup', (e) => {
    console.log('Tecla liberada:', e.key);
});

// Solo cuando se escribe un carácter
document.addEventListener('keypress', (e) => {
    console.log('Carácter:', e.key);
});

// En un input específico
const input = document.getElementById('miInput');
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log('Enter en el input:', input.value);
    }
});
```

### 3.3 Eventos de Formulario

```javascript
const formulario = document.getElementById('miFormulario');
const input = document.getElementById('miInput');

// Envío del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir envío por defecto
    console.log('Formulario enviado');
    
    // Validar y procesar datos
    const datos = new FormData(formulario);
    console.log('Datos:', Object.fromEntries(datos));
});

// Cambio en input
input.addEventListener('change', (e) => {
    console.log('Valor cambiado a:', e.target.value);
});

// Escribir en input (tiempo real)
input.addEventListener('input', (e) => {
    console.log('Escribiendo:', e.target.value);
});

// Foco en elemento
input.addEventListener('focus', () => {
    console.log('Input enfocado');
    input.style.backgroundColor = 'lightyellow';
});

// Perder foco
input.addEventListener('blur', () => {
    console.log('Input desenfocado');
    input.style.backgroundColor = '';
});

// Para selects
const select = document.getElementById('miSelect');
select.addEventListener('change', (e) => {
    console.log('Opción seleccionada:', e.target.value);
});
```

### 3.4 Eventos de Ventana

```javascript
// Carga completa de la página
window.addEventListener('load', () => {
    console.log('Página completamente cargada');
});

// DOM cargado (sin esperar imágenes)
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM listo');
});

// Redimensionar ventana
window.addEventListener('resize', () => {
    console.log('Ventana redimensionada:', window.innerWidth, window.innerHeight);
});

// Scroll
window.addEventListener('scroll', () => {
    console.log('Scroll vertical:', window.pageYOffset);
});

// Antes de cerrar página
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '¿Estás seguro de que quieres salir?';
});
```

## 4. El Objeto Event

### 4.1 Propiedades principales

```javascript
elemento.addEventListener('click', (event) => {
    // Información básica
    console.log('Tipo de evento:', event.type);
    console.log('Elemento objetivo:', event.target);
    console.log('Elemento actual:', event.currentTarget);
    
    // Coordenadas del mouse
    console.log('Coordenadas de pantalla:', event.screenX, event.screenY);
    console.log('Coordenadas de cliente:', event.clientX, event.clientY);
    console.log('Coordenadas de página:', event.pageX, event.pageY);
    console.log('Coordenadas del elemento:', event.offsetX, event.offsetY);
    
    // Teclas modificadoras
    console.log('Ctrl presionado:', event.ctrlKey);
    console.log('Shift presionado:', event.shiftKey);
    console.log('Alt presionado:', event.altKey);
    
    // Timestamp
    console.log('Momento del evento:', event.timeStamp);
});
```

### 4.2 Métodos del objeto Event

```javascript
elemento.addEventListener('click', (e) => {
    // Prevenir comportamiento por defecto
    e.preventDefault();
    
    // Detener propagación del evento
    e.stopPropagation();
    
    // Detener propagación inmediatamente (incluye otros listeners)
    e.stopImmediatePropagation();
});
```

## 5. Propagación de Eventos

### 5.1 Burbujeo (Bubbling)

```html
<div id="exterior" style="padding: 50px; background: red;">
    Exterior
    <div id="interior" style="padding: 30px; background: blue;">
        Interior
        <button id="boton">Botón</button>
    </div>
</div>
```

```javascript
// Sin stopPropagation, el evento burbujea
document.getElementById('exterior').addEventListener('click', () => {
    console.log('Clic en exterior');
});

document.getElementById('interior').addEventListener('click', () => {
    console.log('Clic en interior');
});

document.getElementById('boton').addEventListener('click', (e) => {
    console.log('Clic en botón');
    // e.stopPropagation(); // Descomenta para detener burbujeo
});

// Al hacer clic en el botón se ejecutarán los 3 eventos
```

### 5.2 Captura (Capturing)

```javascript
// Tercer parámetro en true activa la captura
document.getElementById('exterior').addEventListener('click', () => {
    console.log('Exterior - Captura');
}, true);

document.getElementById('interior').addEventListener('click', () => {
    console.log('Interior - Captura');
}, true);

document.getElementById('boton').addEventListener('click', () => {
    console.log('Botón - Normal');
});

// Orden: Exterior-Captura -> Interior-Captura -> Botón-Normal
```

## 6. Delegación de Eventos

La delegación permite manejar eventos de múltiples elementos usando un solo listener en un elemento padre:

```html
<ul id="lista">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>
<button onclick="agregarElemento()">Agregar elemento</button>
```

```javascript
// En lugar de agregar un listener a cada <li>
const lista = document.getElementById('lista');

lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Clickeaste:', e.target.textContent);
        e.target.style.backgroundColor = 'yellow';
    }
});

// Función para agregar elementos dinámicamente
function agregarElemento() {
    const li = document.createElement('li');
    li.textContent = `Elemento ${lista.children.length + 1}`;
    lista.appendChild(li);
    // El nuevo elemento automáticamente tendrá el evento
}
```

## 7. Eventos Personalizados

### 7.1 Crear y disparar eventos personalizados

```javascript
// Crear evento personalizado
const eventoPersonalizado = new CustomEvent('miEvento', {
    detail: {
        mensaje: 'Hola desde el evento personalizado',
        timestamp: Date.now()
    }
});

// Escuchar el evento
document.addEventListener('miEvento', (e) => {
    console.log('Evento recibido:', e.detail.mensaje);
    console.log('Timestamp:', e.detail.timestamp);
});

// Disparar el evento
document.dispatchEvent(eventoPersonalizado);
```

### 7.2 Ejemplo práctico: Sistema de notificaciones

```javascript
// Sistema de notificaciones personalizado
class SistemaNotificaciones {
    constructor() {
        document.addEventListener('mostrarNotificacion', this.mostrar.bind(this));
        document.addEventListener('ocultarNotificacion', this.ocultar.bind(this));
    }
    
    mostrar(e) {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = e.detail.mensaje;
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: green;
            color: white;
            padding: 10px;
            border-radius: 5px;
        `;
        document.body.appendChild(notificacion);
        
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 3000);
    }
    
    ocultar(e) {
        // Lógica para ocultar notificación específica
    }
}

// Inicializar sistema
const notificaciones = new SistemaNotificaciones();

// Usar el sistema
function enviarNotificacion(mensaje) {
    const evento = new CustomEvent('mostrarNotificacion', {
        detail: { mensaje }
    });
    document.dispatchEvent(evento);
}

// Ejemplo de uso
document.getElementById('botonNotificar').addEventListener('click', () => {
    enviarNotificacion('¡Operación completada con éxito!');
});
```

## 8. Casos de Uso Prácticos

### 8.1 Validación de formulario en tiempo real

```html
<form id="formularioRegistro">
    <input type="email" id="email" placeholder="Email" required>
    <div id="errorEmail" class="error"></div>
    
    <input type="password" id="password" placeholder="Contraseña" required>
    <div id="errorPassword" class="error"></div>
    
    <input type="password" id="confirmPassword" placeholder="Confirmar contraseña" required>
    <div id="errorConfirmPassword" class="error"></div>
    
    <button type="submit">Registrarse</button>
</form>
```

```javascript
// Validación en tiempo real
const form = document.getElementById('formularioRegistro');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Validar email
email.addEventListener('input', () => {
    const errorDiv = document.getElementById('errorEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value && !emailRegex.test(email.value)) {
        errorDiv.textContent = 'Email inválido';
        errorDiv.style.color = 'red';
    } else {
        errorDiv.textContent = '';
    }
});

// Validar contraseña
password.addEventListener('input', () => {
    const errorDiv = document.getElementById('errorPassword');
    
    if (password.value.length < 8) {
        errorDiv.textContent = 'La contraseña debe tener al menos 8 caracteres';
        errorDiv.style.color = 'red';
    } else {
        errorDiv.textContent = 'Contraseña válida';
        errorDiv.style.color = 'green';
    }
});

// Confirmar contraseña
confirmPassword.addEventListener('input', () => {
    const errorDiv = document.getElementById('errorConfirmPassword');
    
    if (confirmPassword.value !== password.value) {
        errorDiv.textContent = 'Las contraseñas no coinciden';
        errorDiv.style.color = 'red';
    } else {
        errorDiv.textContent = 'Contraseñas coinciden';
        errorDiv.style.color = 'green';
    }
});

// Envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validación final
    if (validarFormulario()) {
        console.log('Formulario válido, enviando...');
        // Aquí enviarías los datos
    } else {
        console.log('Formulario inválido');
    }
});

function validarFormulario() {
    // Implementar validación completa
    return email.value && password.value.length >= 8 && password.value === confirmPassword.value;
}
```

### 8.2 Galería de imágenes interactiva

```html
<div class="galeria">
    <div class="miniaturas">
        <img src="thumb1.jpg" data-full="img1.jpg" class="miniatura">
        <img src="thumb2.jpg" data-full="img2.jpg" class="miniatura">
        <img src="thumb3.jpg" data-full="img3.jpg" class="miniatura">
    </div>
    <div class="visor">
        <img id="imagenPrincipal" src="img1.jpg" alt="Imagen principal">
    </div>
</div>
```

```javascript
// Galería interactiva
const galeria = document.querySelector('.galeria');
const imagenPrincipal = document.getElementById('imagenPrincipal');

// Delegación de eventos para miniaturas
galeria.addEventListener('click', (e) => {
    if (e.target.classList.contains('miniatura')) {
        // Remover clase activa de todas las miniaturas
        document.querySelectorAll('.miniatura').forEach(img => {
            img.classList.remove('activa');
        });
        
        // Agregar clase activa a la seleccionada
        e.target.classList.add('activa');
        
        // Cambiar imagen principal con efecto fade
        imagenPrincipal.style.opacity = '0';
        
        setTimeout(() => {
            imagenPrincipal.src = e.target.dataset.full;
            imagenPrincipal.style.opacity = '1';
        }, 200);
    }
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    const miniaturas = Array.from(document.querySelectorAll('.miniatura'));
    const activa = document.querySelector('.miniatura.activa');
    let indice = miniaturas.indexOf(activa);
    
    if (e.key === 'ArrowRight') {
        indice = (indice + 1) % miniaturas.length;
        miniaturas[indice].click();
    } else if (e.key === 'ArrowLeft') {
        indice = (indice - 1 + miniaturas.length) % miniaturas.length;
        miniaturas[indice].click();
    }
});
```

### 8.3 To-Do List dinámico

```html
<div id="todoApp">
    <input type="text" id="nuevaTarea" placeholder="Nueva tarea...">
    <button id="agregarTarea">Agregar</button>
    <ul id="listaTareas"></ul>
</div>
```

```javascript
// To-Do List con eventos
class TodoApp {
    constructor() {
        this.tareas = [];
        this.inicializarEventos();
    }
    
    inicializarEventos() {
        const input = document.getElementById('nuevaTarea');
        const botonAgregar = document.getElementById('agregarTarea');
        const lista = document.getElementById('listaTareas');
        
        // Agregar tarea con botón o Enter
        botonAgregar.addEventListener('click', () => this.agregarTarea());
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.agregarTarea();
        });
        
        // Delegación para botones de tareas
        lista.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            const id = parseInt(li.dataset.id);
            
            if (e.target.classList.contains('completar')) {
                this.completarTarea(id);
            } else if (e.target.classList.contains('eliminar')) {
                this.eliminarTarea(id);
            }
        });
    }
    
    agregarTarea() {
        const input = document.getElementById('nuevaTarea');
        const texto = input.value.trim();
        
        if (texto) {
            const tarea = {
                id: Date.now(),
                texto: texto,
                completada: false
            };
            
            this.tareas.push(tarea);
            this.renderizar();
            input.value = '';
        }
    }
    
    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = !tarea.completada;
            this.renderizar();
        }
    }
    
    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.renderizar();
    }
    
    renderizar() {
        const lista = document.getElementById('listaTareas');
        lista.innerHTML = '';
        
        this.tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.dataset.id = tarea.id;
            li.className = tarea.completada ? 'completada' : '';
            
            li.innerHTML = `
                <span class="texto">${tarea.texto}</span>
                <button class="completar">${tarea.completada ? 'Desmarcar' : 'Completar'}</button>
                <button class="eliminar">Eliminar</button>
            `;
            
            lista.appendChild(li);
        });
    }
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
```

## 9. removeEventListener

Para optimizar la memoria, es importante remover event listeners cuando no se necesiten:

```javascript
// Función nombrada para poder removerla después
function manejarClic() {
    console.log('Clic manejado');
}

const boton = document.getElementById('miBoton');

// Agregar listener
boton.addEventListener('click', manejarClic);

// Remover listener
boton.removeEventListener('click', manejarClic);

// Para funciones anónimas, guardar referencia
const manejarHover = (e) => {
    console.log('Hover');
};

elemento.addEventListener('mouseenter', manejarHover);
// ...más tarde...
elemento.removeEventListener('mouseenter', manejarHover);
```

## 10. Mejores Prácticas

### 10.1 Performance

```javascript
// ❌ Malo: Agregar listener a cada elemento
document.querySelectorAll('.boton').forEach(boton => {
    boton.addEventListener('click', manejarClic);
});

// ✅ Bueno: Delegación de eventos
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('boton')) {
        manejarClic(e);
    }
});
```

### 10.2 Prevenir memory leaks

```javascript
// Remover listeners en cleanup
class Componente {
    constructor(elemento) {
        this.elemento = elemento;
        this.manejarClic = this.manejarClic.bind(this);
        this.elemento.addEventListener('click', this.manejarClic);
    }
    
    manejarClic(e) {
        console.log('Clic manejado');
    }
    
    destruir() {
        this.elemento.removeEventListener('click', this.manejarClic);
    }
}
```

### 10.3 Debouncing para eventos frecuentes

```javascript
// Para eventos que se disparan muy frecuentemente (scroll, resize)
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Uso con scroll
window.addEventListener('scroll', debounce(() => {
    console.log('Scroll terminado');
}, 250));
```

Los eventos son fundamentales para crear aplicaciones web interactivas. Dominar su uso te permitirá crear experiencias de usuario ricas y dinámicas.
