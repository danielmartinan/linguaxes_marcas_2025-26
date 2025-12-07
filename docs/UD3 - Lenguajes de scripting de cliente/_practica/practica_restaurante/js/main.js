// ============================================
// PRÁCTICA RESTAURANTE - LA BUENA MESA
// ============================================

// ============================================
// APARTADO 1: NAVEGACIÓN Y MENÚ INTERACTIVO
// ============================================

/**
 * TODO 1.1: Implementar menú hamburguesa responsive
 * 
 * Debes:
 * - Seleccionar el botón hamburguesa (#menuToggle) y el menú (#navMenu)
 * - Al hacer clic en el botón, añadir/quitar la clase 'active' a ambos elementos
 * - Al hacer clic en cualquier enlace del menú, cerrar el menú automáticamente
 * - Asegúrate de que funcione correctamente en móvil
 * 
 * Pista: deberás usar classlist para añadir/quitar clases
 * 
 * Revisa el estilo css de 'menu-toggle span' para ver cómo se transforma el icono
 */

// TODO: Escribe tu código aquí

/**
 * Implementar scroll suave a las secciones
 */
function inicializarScrollSuave() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Destacar enlace activo según scroll
 */
function inicializarMenuActivo() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Opciones para el IntersectionObserver
    const options = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    // Callback del observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitar clase active de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Añadir clase active al enlace correspondiente
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    // Observar todas las secciones
    sections.forEach(section => observer.observe(section));
}


// ============================================
// APARTADO 2: VALIDACIÓN DE FORMULARIO
// ============================================

/**
 * TODO 2.1: Validación en tiempo real
 * 
 * Debes validar los siguientes campos mientras el usuario escribe:
 * 
 * - Nombre (#nombre): Mínimo 3 caracteres, solo letras y espacios
 * - Email (#email): Formato válido (usa regex o checkValidity())
 * - Teléfono (#telefono): Exactamente 9 dígitos
 * - Personas (#personas): Entre 1 y 10
 * 
 * Para cada campo:
 * - Añade evento 'blur' o 'input'
 * - Si es inválido, añade clase 'error' al input
 * - Muestra mensaje de error en el span correspondiente
 * - Si es válido, quita clase 'error' y limpia mensaje
 */

// TODO: Escribe tu código aquí

/**
 * 2.1 y 2.2: Validación en tiempo real
 */
function inicializarValidacionTiempoReal() {
    const campos = ['nombre', 'email', 'telefono', 'personas', 'fecha', 'hora'];

    campos.forEach(nombreCampo => {
        const campo = document.getElementById(nombreCampo);
        if (campo) {
            // Validar al perder el foco
            campo.addEventListener('blur', () => {
                validarCampo(campo);
            });

            // Limpiar error al escribir
            campo.addEventListener('input', () => {
                if (campo.classList.contains('error')) {
                    validarCampo(campo);
                }
            });
        }
    });
}


/**
 * TODO 2.2: Validación de fecha de reserva
 * 
 * Debes:
 * - Validar que la fecha sea posterior a hoy
 * - Validar que no sea más de 3 meses en el futuro
 * - Mostrar mensajes de error claros (#errorFecha)
 */

// TODO: Escribe tu código aquí




/**
 * TODO 2.3: Validación final al enviar el formulario
 * 
 * Debes:
 * - Seleccionar el formulario (#reservaForm)
 * - Añadir evento 'submit'
 * - Validar TODOS los campos obligatorios
 * - Si hay errores:
 *   - Prevenir el envío con preventDefault()
 *   - Mostrar lista de errores en #formErrors
 *   - Hacer scroll al inicio del formulario
 * - Si todo es válido:
 *   - Mostrar mensaje de confirmación (alert o crear un modal)
 *   - Limpiar el formulario
 */

// TODO: Escribe tu código aquí




// ============================================
// APARTADO 3: FILTRADO Y BÚSQUEDA DE PLATOS
// ============================================

// Variable global para almacenar todos los platos
let todosLosPlatos = [];

/**
 * TODO 3.1: Cargar y mostrar los platos desde JSON
 * 
 * Debes:
 * - Usar fetch() para cargar 'data/platos.json'
 * - Guardar los datos en la variable todosLosPlatos
 * - Llamar a la función mostrarPlatos() para renderizarlos
 * - Manejar errores con catch()
 */

// TODO: Escribe tu código aquí




/**
 * Función auxiliar para renderizar platos en el DOM
 * 
 * @param {Array} platos - Array de objetos plato
 * 
 * Debes:
 * - Limpiar el contenido de #platosGrid
 * - Si no hay platos, mostrar mensaje #noResults
 * - Para cada plato, crear una tarjeta HTML con:
 *   - div.plato-card
 *   - img.plato-imagen
 *   - div.plato-info con nombre, categoría, descripción, precio
 *   - botón para añadir al carrito
 * - Insertar las tarjetas en #platosGrid
 */
function mostrarPlatos(platos) {
    // TODO: Escribe tu código aquí
}




/**
 * TODO 3.2: Implementar filtrado por categorías
 * 
 * Debes:
 * - Seleccionar todos los botones de filtro (.filter-btn)
 * - Añadir evento click a cada botón
 * - Al hacer clic:
 *   - Quitar clase 'active' de todos los botones
 *   - Añadir clase 'active' al botón clickeado
 *   - Obtener la categoría del atributo data-category
 *   - Si es "todos", mostrar todos los platos
 *   - Si no, filtrar platos por categoría
 *   - Llamar a mostrarPlatos() con el resultado
 * 
 * Pista: Usa filter() para filtrar el array
 */

// TODO: Escribe tu código aquí




/**
 * TODO 3.3: Implementar búsqueda en tiempo real
 * 
 * Debes:
 * - Seleccionar el input de búsqueda (#searchInput)
 * - Añadir evento 'input' para detectar cambios
 * - Obtener el texto escrito (en minúsculas)
 * - Filtrar platos que contengan el texto en nombre o descripción
 * - Combinar con el filtro de categoría activo (si hay uno)
 * - Mostrar resultados con mostrarPlatos()
 * 
 * Pista: Usa includes() para buscar en strings
 */

// TODO: Escribe tu código aquí




// ============================================
// APARTADO 4: CARRITO DE COMPRAS
// ============================================

// Variable global para el carrito (array de objetos)
let carrito = [];

/**
 * TODO 4.1: Añadir productos al carrito
 * 
 * Debes:
 * - En la función mostrarPlatos(), añadir evento click a cada botón "Añadir al carrito"
 * - Al hacer clic:
 *   - Obtener los datos del plato (id, nombre, precio, imagen)
 *   - Verificar si ya está en el carrito
 *   - Si está, incrementar cantidad
 *   - Si no está, añadirlo con cantidad 1
 *   - Mostrar notificación (alert o toast)
 *   - Actualizar contador del carrito (#cartCount)
 *   - Guardar en localStorage
 *   - Renderizar el carrito
 */

// TODO: Escribe tu código aquí




/**
 * TODO 4.2: Mostrar/ocultar panel lateral del carrito
 * 
 * Debes:
 * - Seleccionar icono del carrito (#cartIcon), sidebar (#cartSidebar), overlay (#overlay)
 * - Al hacer clic en el icono:
 *   - Añadir clase 'open' al sidebar
 *   - Añadir clase 'active' al overlay
 * - Al hacer clic en el botón cerrar (#closeCart) o en el overlay:
 *   - Quitar las clases 'open' y 'active'
 */

// TODO: Escribe tu código aquí




/**
 * Función para renderizar el contenido del carrito
 * 
 * Debes:
 * - Seleccionar el contenedor #cartContent
 * - Si el carrito está vacío, mostrar mensaje
 * - Si no, crear HTML para cada producto con:
 *   - Imagen miniatura
 *   - Nombre y precio
 *   - Botones para incrementar/decrementar cantidad
 *   - Botón para eliminar
 *   - Subtotal (precio × cantidad)
 * - Añadir eventos a los botones de cantidad y eliminar
 * - Actualizar el total general
 */
function renderizarCarrito() {
    // TODO: Escribe tu código aquí
}




/**
 * TODO 4.3: Cálculos dinámicos del carrito
 * 
 * Debes crear funciones para:
 * - Calcular el total del carrito
 * - Actualizar el contador de productos (#cartCount)
 * - Actualizar el precio total (#totalPrice)
 * 
 * Pista: Usa reduce() para sumar precios × cantidades
 */

// TODO: Escribe tu código aquí




/**
 * TODO 4.4: Persistencia con localStorage
 * 
 * Debes:
 * - Crear función guardarCarrito() que guarde el array en localStorage
 * - Crear función cargarCarrito() que recupere el carrito al cargar la página
 * - Llamar a guardarCarrito() cada vez que se modifique el carrito
 * - Llamar a cargarCarrito() al inicio del script
 * 
 * Pista: Usa JSON.stringify() y JSON.parse()
 */

// TODO: Escribe tu código aquí




/**
 * Función para incrementar cantidad de un producto
 */
function incrementarCantidad(idProducto) {
    // TODO: Escribe tu código aquí
}

/**
 * Función para decrementar cantidad de un producto
 */
function decrementarCantidad(idProducto) {
    // TODO: Escribe tu código aquí
}

/**
 * Función para eliminar producto del carrito
 */
function eliminarDelCarrito(idProducto) {
    // TODO: Escribe tu código aquí
}




// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Esta función se ejecuta cuando el DOM está listo
 * Aquí debes inicializar todas las funcionalidades
 */
document.addEventListener('DOMContentLoaded', function() {
    // TODO: Llama aquí a las funciones de inicialización
    
    // Inicializar navegación
    
    // Inicializar validación de formulario
    
    // Cargar platos del menú
    
    // Cargar carrito desde localStorage
    
    console.log('✅ Aplicación inicializada correctamente');
});




// ============================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ============================================

/**
 * Puedes crear funciones auxiliares adicionales aquí
 * Por ejemplo:
 * - formatearPrecio(numero) - Formatear precios con 2 decimales
 * - mostrarNotificacion(mensaje) - Mostrar toast de notificación
 * - validarEmail(email) - Validar formato de email con regex
 * - etc.
 */

// TODO: Añade tus funciones auxiliares aquí
