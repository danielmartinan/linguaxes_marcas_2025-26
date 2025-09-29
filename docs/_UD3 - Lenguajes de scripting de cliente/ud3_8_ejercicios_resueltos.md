---
sidebar_position: 8
---

# UD3.8 - Ejercicios Resueltos

## Introducción

Esta sección contiene ejercicios prácticos resueltos que integran todos los conceptos aprendidos: manipulación del DOM, eventos, estilos y JavaScript básico. Los ejercicios están ordenados de menor a mayor dificultad.

## Ejercicio 1: Calculadora Básica

### Enunciado
Crear una calculadora básica que permita realizar operaciones de suma, resta, multiplicación y división entre dos números.

### Solución HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Básica</title>
    <style>
        .calculadora {
            max-width: 300px;
            margin: 50px auto;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #f0f0f0;
        }
        
        .input-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="number"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        
        .botones {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin: 20px 0;
        }
        
        button {
            padding: 15px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        #resultado {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            padding: 15px;
            background-color: white;
            border: 2px solid #333;
            border-radius: 5px;
            margin-top: 15px;
        }
        
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <h2>Calculadora Básica</h2>
        
        <div class="input-group">
            <label for="numero1">Primer número:</label>
            <input type="number" id="numero1" step="any">
        </div>
        
        <div class="input-group">
            <label for="numero2">Segundo número:</label>
            <input type="number" id="numero2" step="any">
        </div>
        
        <div class="botones">
            <button onclick="calcular('+')">+</button>
            <button onclick="calcular('-')">-</button>
            <button onclick="calcular('*')">×</button>
            <button onclick="calcular('/')">/</button>
        </div>
        
        <button onclick="limpiar()" style="width: 100%; background-color: #dc3545;">Limpiar</button>
        
        <div id="resultado">Resultado: 0</div>
    </div>

    <script>
        function calcular(operacion) {
            const num1 = parseFloat(document.getElementById('numero1').value);
            const num2 = parseFloat(document.getElementById('numero2').value);
            const resultadoDiv = document.getElementById('resultado');
            
            // Validar que ambos números sean válidos
            if (isNaN(num1) || isNaN(num2)) {
                resultadoDiv.textContent = 'Error: Ingrese números válidos';
                resultadoDiv.className = 'error';
                return;
            }
            
            let resultado;
            
            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        resultadoDiv.textContent = 'Error: No se puede dividir por cero';
                        resultadoDiv.className = 'error';
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                default:
                    resultadoDiv.textContent = 'Error: Operación no válida';
                    resultadoDiv.className = 'error';
                    return;
            }
            
            // Mostrar resultado
            resultadoDiv.textContent = `Resultado: ${resultado.toFixed(2)}`;
            resultadoDiv.className = '';
        }
        
        function limpiar() {
            document.getElementById('numero1').value = '';
            document.getElementById('numero2').value = '';
            document.getElementById('resultado').textContent = 'Resultado: 0';
            document.getElementById('resultado').className = '';
        }
        
        // Permitir calcular con Enter
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const ultimaOperacion = '+'; // Por defecto suma
                calcular(ultimaOperacion);
            }
        });
    </script>
</body>
</html>
```

## Ejercicio 2: Lista de Tareas Interactiva

### Enunciado
Crear una aplicación de lista de tareas que permita agregar, marcar como completadas y eliminar tareas. Las tareas completadas deben mostrarse con un estilo diferente.

### Solución

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        
        .input-section {
            display: flex;
            margin-bottom: 30px;
        }
        
        #nuevaTarea {
            flex: 1;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 5px 0 0 5px;
            font-size: 16px;
        }
        
        #nuevaTarea:focus {
            outline: none;
            border-color: #007bff;
        }
        
        #agregarBtn {
            padding: 12px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            font-size: 16px;
        }
        
        #agregarBtn:hover {
            background-color: #0056b3;
        }
        
        .estadisticas {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
        }
        
        .stat-label {
            font-size: 14px;
            color: #666;
        }
        
        #listaTareas {
            list-style: none;
            padding: 0;
        }
        
        .tarea {
            display: flex;
            align-items: center;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: #fff;
            transition: all 0.3s ease;
        }
        
        .tarea:hover {
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .tarea.completada {
            background-color: #f8f9fa;
            opacity: 0.7;
        }
        
        .tarea.completada .texto-tarea {
            text-decoration: line-through;
            color: #6c757d;
        }
        
        .texto-tarea {
            flex: 1;
            margin-left: 10px;
            font-size: 16px;
        }
        
        .checkbox-tarea {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        
        .btn-eliminar {
            background-color: #dc3545;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 14px;
        }
        
        .btn-eliminar:hover {
            background-color: #c82333;
        }
        
        .empty-state {
            text-align: center;
            padding: 40px;
            color: #6c757d;
        }
        
        .controles {
            margin-top: 20px;
            text-align: center;
        }
        
        .controles button {
            margin: 0 5px;
            padding: 8px 15px;
            border: 1px solid #007bff;
            background-color: white;
            color: #007bff;
            border-radius: 3px;
            cursor: pointer;
        }
        
        .controles button:hover {
            background-color: #007bff;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Mi Lista de Tareas</h1>
        
        <div class="input-section">
            <input type="text" id="nuevaTarea" placeholder="Escribe una nueva tarea...">
            <button id="agregarBtn">Agregar</button>
        </div>
        
        <div class="estadisticas">
            <div class="stat">
                <div class="stat-number" id="totalTareas">0</div>
                <div class="stat-label">Total</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="tareasCompletadas">0</div>
                <div class="stat-label">Completadas</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="tareasPendientes">0</div>
                <div class="stat-label">Pendientes</div>
            </div>
        </div>
        
        <ul id="listaTareas"></ul>
        
        <div class="controles">
            <button onclick="mostrarTodas()">Todas</button>
            <button onclick="mostrarPendientes()">Pendientes</button>
            <button onclick="mostrarCompletadas()">Completadas</button>
            <button onclick="eliminarCompletadas()">Eliminar Completadas</button>
        </div>
    </div>

    <script>
        class GestorTareas {
            constructor() {
                this.tareas = JSON.parse(localStorage.getItem('tareas')) || [];
                this.filtro = 'todas'; // 'todas', 'pendientes', 'completadas'
                this.inicializar();
            }
            
            inicializar() {
                this.configurarEventos();
                this.renderizar();
                this.actualizarEstadisticas();
            }
            
            configurarEventos() {
                const input = document.getElementById('nuevaTarea');
                const botonAgregar = document.getElementById('agregarBtn');
                
                // Agregar tarea con botón o Enter
                botonAgregar.addEventListener('click', () => this.agregarTarea());
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.agregarTarea();
                    }
                });
                
                // Delegación de eventos para la lista
                document.getElementById('listaTareas').addEventListener('click', (e) => {
                    const li = e.target.closest('.tarea');
                    if (!li) return;
                    
                    const id = parseInt(li.dataset.id);
                    
                    if (e.target.classList.contains('checkbox-tarea')) {
                        this.toggleCompletada(id);
                    } else if (e.target.classList.contains('btn-eliminar')) {
                        this.eliminarTarea(id);
                    }
                });
            }
            
            agregarTarea() {
                const input = document.getElementById('nuevaTarea');
                const texto = input.value.trim();
                
                if (texto === '') {
                    alert('Por favor, escribe una tarea');
                    return;
                }
                
                const nuevaTarea = {
                    id: Date.now(),
                    texto: texto,
                    completada: false,
                    fechaCreacion: new Date().toISOString()
                };
                
                this.tareas.push(nuevaTarea);
                input.value = '';
                this.guardar();
                this.renderizar();
                this.actualizarEstadisticas();
                
                // Animación de entrada
                setTimeout(() => {
                    const ultimoElemento = document.querySelector(`[data-id="${nuevaTarea.id}"]`);
                    if (ultimoElemento) {
                        ultimoElemento.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            ultimoElemento.style.transform = 'scale(1)';
                        }, 200);
                    }
                }, 100);
            }
            
            toggleCompletada(id) {
                const tarea = this.tareas.find(t => t.id === id);
                if (tarea) {
                    tarea.completada = !tarea.completada;
                    this.guardar();
                    this.renderizar();
                    this.actualizarEstadisticas();
                }
            }
            
            eliminarTarea(id) {
                if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
                    this.tareas = this.tareas.filter(t => t.id !== id);
                    this.guardar();
                    this.renderizar();
                    this.actualizarEstadisticas();
                }
            }
            
            eliminarCompletadas() {
                const completadas = this.tareas.filter(t => t.completada).length;
                if (completadas === 0) {
                    alert('No hay tareas completadas para eliminar');
                    return;
                }
                
                if (confirm(`¿Eliminar ${completadas} tarea(s) completada(s)?`)) {
                    this.tareas = this.tareas.filter(t => !t.completada);
                    this.guardar();
                    this.renderizar();
                    this.actualizarEstadisticas();
                }
            }
            
            filtrarTareas() {
                switch (this.filtro) {
                    case 'pendientes':
                        return this.tareas.filter(t => !t.completada);
                    case 'completadas':
                        return this.tareas.filter(t => t.completada);
                    default:
                        return this.tareas;
                }
            }
            
            renderizar() {
                const lista = document.getElementById('listaTareas');
                const tareasFiltradas = this.filtrarTareas();
                
                if (tareasFiltradas.length === 0) {
                    lista.innerHTML = `
                        <div class="empty-state">
                            <p>No hay tareas para mostrar</p>
                            <p>¡Agrega tu primera tarea!</p>
                        </div>
                    `;
                    return;
                }
                
                lista.innerHTML = tareasFiltradas.map(tarea => `
                    <li class="tarea ${tarea.completada ? 'completada' : ''}" data-id="${tarea.id}">
                        <input type="checkbox" class="checkbox-tarea" ${tarea.completada ? 'checked' : ''}>
                        <span class="texto-tarea">${tarea.texto}</span>
                        <button class="btn-eliminar">Eliminar</button>
                    </li>
                `).join('');
            }
            
            actualizarEstadisticas() {
                const total = this.tareas.length;
                const completadas = this.tareas.filter(t => t.completada).length;
                const pendientes = total - completadas;
                
                document.getElementById('totalTareas').textContent = total;
                document.getElementById('tareasCompletadas').textContent = completadas;
                document.getElementById('tareasPendientes').textContent = pendientes;
            }
            
            cambiarFiltro(nuevoFiltro) {
                this.filtro = nuevoFiltro;
                this.renderizar();
                
                // Actualizar botones activos
                document.querySelectorAll('.controles button').forEach(btn => {
                    btn.style.backgroundColor = 'white';
                    btn.style.color = '#007bff';
                });
            }
            
            guardar() {
                localStorage.setItem('tareas', JSON.stringify(this.tareas));
            }
        }
        
        // Inicializar la aplicación
        const gestor = new GestorTareas();
        
        // Funciones globales para los botones
        function mostrarTodas() {
            gestor.cambiarFiltro('todas');
        }
        
        function mostrarPendientes() {
            gestor.cambiarFiltro('pendientes');
        }
        
        function mostrarCompletadas() {
            gestor.cambiarFiltro('completadas');
        }
        
        function eliminarCompletadas() {
            gestor.eliminarCompletadas();
        }
    </script>
</body>
</html>
```

## Ejercicio 3: Galería de Imágenes con Lightbox

### Enunciado
Crear una galería de imágenes con efecto lightbox. Al hacer clic en una miniatura, debe abrirse la imagen en tamaño completo con navegación entre imágenes.

### Solución

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería con Lightbox</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        
        .galeria-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }
        
        .galeria {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .miniatura {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
            cursor: pointer;
        }
        
        .miniatura:hover {
            transform: scale(1.05);
        }
        
        .miniatura img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: filter 0.3s ease;
        }
        
        .miniatura:hover img {
            filter: brightness(1.1);
        }
        
        .miniatura .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .miniatura:hover .overlay {
            opacity: 1;
        }
        
        /* Lightbox */
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .lightbox.activo {
            display: flex;
        }
        
        .lightbox-contenido {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            text-align: center;
        }
        
        .lightbox img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        
        .lightbox-cerrar {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 30px;// filepath: ud3_8_ejercicios_resueltos.md
---
sidebar_position: 8
---

# UD3.8 - Ejercicios Resueltos

## Introducción

Esta sección contiene ejercicios prácticos resueltos que integran todos los conceptos aprendidos: manipulación del DOM, eventos, estilos y JavaScript básico. Los ejercicios están ordenados de menor a mayor dificultad.

## Ejercicio 1: Calculadora Básica

### Enunciado
Crear una calculadora básica que permita realizar operaciones de suma, resta, multiplicación y división entre dos números.

### Solución HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Básica</title>
    <style>
        .calculadora {
            max-width: 300px;
            margin: 50px auto;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #f0f0f0;
        }
        
        .input-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="number"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        
        .botones {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin: 20px 0;
        }
        
        button {
            padding: 15px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        #resultado {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            padding: 15px;
            background-color: white;
            border: 2px solid #333;
            border-radius: 5px;
            margin-top: 15px;
        }
        
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <h2>Calculadora Básica</h2>
        
        <div class="input-group">
            <label for="numero1">Primer número:</label>
            <input type="number" id="numero1" step="any">
        </div>
        
        <div class="input-group">
            <label for="numero2">Segundo número:</label>
            <input type="number" id="numero2" step="any">
        </div>
        
        <div class="botones">
            <button onclick="calcular('+')">+</button>
            <button onclick="calcular('-')">-</button>
            <button onclick="calcular('*')">×</button>
            <button onclick="calcular('/')">/</button>
        </div>
        
        <button onclick="limpiar()" style="width: 100%; background-color: #dc3545;">Limpiar</button>
        
        <div id="resultado">Resultado: 0</div>
    </div>

    <script>
        function calcular(operacion) {
            const num1 = parseFloat(document.getElementById('numero1').value);
            const num2 = parseFloat(document.getElementById('numero2').value);
            const resultadoDiv = document.getElementById('resultado');
            
            // Validar que ambos números sean válidos
            if (isNaN(num1) || isNaN(num2)) {
                resultadoDiv.textContent = 'Error: Ingrese números válidos';
                resultadoDiv.className = 'error';
                return;
            }
            
            let resultado;
            
            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        resultadoDiv.textContent = 'Error: No se puede dividir por cero';
                        resultadoDiv.className = 'error';
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                default:
                    resultadoDiv.textContent = 'Error: Operación no válida';
                    resultadoDiv.className = 'error';
                    return;
            }
            
            // Mostrar resultado
            resultadoDiv.textContent = `Resultado: ${resultado.toFixed(2)}`;
            resultadoDiv.className = '';
        }
        
        function limpiar() {
            document.getElementById('numero1').value = '';
            document.getElementById('numero2').value = '';
            document.getElementById('resultado').textContent = 'Resultado: 0';
            document.getElementById('resultado').className = '';
        }
        
        // Permitir calcular con Enter
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const ultimaOperacion = '+'; // Por defecto suma
                calcular(ultimaOperacion);
            }
        });
    </script>
</body>
</html>
```
