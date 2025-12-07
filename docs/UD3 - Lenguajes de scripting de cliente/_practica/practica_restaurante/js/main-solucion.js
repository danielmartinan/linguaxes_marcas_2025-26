// ============================================
// PRÁCTICA RESTAURANTE - LA BUENA MESA
// SOLUCIÓN COMPLETA
// ============================================

// ============================================
// APARTADO 1: NAVEGACIÓN Y MENÚ INTERACTIVO
// ============================================

/**
 * 1.1: Implementar menú hamburguesa responsive
 */
function inicializarMenuHamburguesa() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * 1.2: Implementar scroll suave a las secciones
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
 * 1.3: Destacar enlace activo según scroll
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
 * Funciones de validación
 */
const validaciones = {
    nombre: (valor) => {
        if (valor.length < 3) {
            return 'El nombre debe tener al menos 3 caracteres';
        }
        if (!/^[a-záéíóúñ\s]+$/i.test(valor)) {
            return 'El nombre solo puede contener letras y espacios';
        }
        return '';
    },

    email: (valor) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(valor)) {
            return 'Introduce un email válido';
        }
        return '';
    },

    telefono: (valor) => {
        if (!/^\d{9}$/.test(valor)) {
            return 'El teléfono debe tener exactamente 9 dígitos';
        }
        return '';
    },

    personas: (valor) => {
        const num = parseInt(valor);
        if (isNaN(num) || num < 1 || num > 10) {
            return 'Selecciona entre 1 y 10 personas';
        }
        return '';
    },

    fecha: (valor) => {
        if (!valor) {
            return 'Selecciona una fecha';
        }

        const fechaSeleccionada = new Date(valor);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        const tresMesesFuturo = new Date();
        tresMesesFuturo.setMonth(tresMesesFuturo.getMonth() + 3);

        if (fechaSeleccionada < hoy) {
            return 'La fecha debe ser posterior a hoy';
        }

        if (fechaSeleccionada > tresMesesFuturo) {
            return 'No se pueden hacer reservas con más de 3 meses de antelación';
        }

        return '';
    },

    hora: (valor) => {
        if (!valor) {
            return 'Selecciona una hora';
        }
        return '';
    }
};

/**
 * Función para validar un campo individual
 */
function validarCampo(campo, mostrarError = true) {
    const valor = campo.value.trim();
    const nombreCampo = campo.id;
    const errorSpan = document.getElementById(`error${nombreCampo.charAt(0).toUpperCase() + nombreCampo.slice(1)}`);
    
    let mensajeError = '';

    // Validar según el tipo de campo
    if (validaciones[nombreCampo]) {
        mensajeError = validaciones[nombreCampo](valor);
    }

    // Mostrar u ocultar error
    if (mostrarError) {
        if (mensajeError) {
            campo.classList.add('error');
            if (errorSpan) {
                errorSpan.textContent = mensajeError;
            }
        } else {
            campo.classList.remove('error');
            if (errorSpan) {
                errorSpan.textContent = '';
            }
        }
    }

    return mensajeError === '';
}

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
 * 2.3: Validación final al enviar el formulario
 */
function inicializarValidacionFormulario() {
    const form = document.getElementById('reservaForm');
    const formErrors = document.getElementById('formErrors');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const campos = ['nombre', 'email', 'telefono', 'personas', 'fecha', 'hora'];
        const errores = [];

        // Validar todos los campos
        campos.forEach(nombreCampo => {
            const campo = document.getElementById(nombreCampo);
            if (campo && !validarCampo(campo)) {
                const label = campo.previousElementSibling?.textContent || nombreCampo;
                errores.push(label.replace(' *', ''));
            }
        });

        // Si hay errores, mostrarlos
        if (errores.length > 0) {
            formErrors.innerHTML = `
                <strong>⚠️ Por favor, corrige los siguientes errores:</strong>
                <ul>
                    ${errores.map(error => `<li>${error}</li>`).join('')}
                </ul>
            `;
            formErrors.style.display = 'block';
            formErrors.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // Todo correcto, procesar reserva
            formErrors.style.display = 'none';
            
            const datosReserva = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                personas: document.getElementById('personas').value,
                fecha: document.getElementById('fecha').value,
                hora: document.getElementById('hora').value,
                comentarios: document.getElementById('comentarios').value
            };

            // Mostrar confirmación
            mostrarConfirmacionReserva(datosReserva);
            
            // Limpiar formulario
            form.reset();
            
            // Limpiar clases de error
            campos.forEach(nombreCampo => {
                const campo = document.getElementById(nombreCampo);
                if (campo) {
                    campo.classList.remove('error');
                    const errorSpan = document.getElementById(`error${nombreCampo.charAt(0).toUpperCase() + nombreCampo.slice(1)}`);
                    if (errorSpan) {
                        errorSpan.textContent = '';
                    }
                }
            });
        }
    });
}

/**
 * Mostrar confirmación de reserva
 */
function mostrarConfirmacionReserva(datos) {
    const mensaje = `
✅ ¡Reserva confirmada!

Nombre: ${datos.nombre}
Email: ${datos.email}
Fecha: ${datos.fecha}
Hora: ${datos.hora}
Personas: ${datos.personas}

Recibirás un email de confirmación en breve.
    `;
    
    alert(mensaje);
}

// ============================================
// APARTADO 3: FILTRADO Y BÚSQUEDA DE PLATOS
// ============================================

// Variables globales para el menú
let todosLosPlatos = [];
let categoriaActiva = 'todos';
let terminoBusqueda = '';

/**
 * 3.1: Cargar y mostrar los platos desde JSON
 */
async function cargarPlatos() {
    try {
        const response = await fetch('data/platos.json');
        
        if (!response.ok) {
            throw new Error('Error al cargar los platos');
        }
        
        todosLosPlatos = await response.json();
        mostrarPlatos(todosLosPlatos);
        
    } catch (error) {
        console.error('Error:', error);
        const platosGrid = document.getElementById('platosGrid');
        platosGrid.innerHTML = '<p class="error">❌ Error al cargar el menú. Por favor, recarga la página.</p>';
    }
}

/**
 * Función para renderizar platos en el DOM
 */
function mostrarPlatos(platos) {
    const platosGrid = document.getElementById('platosGrid');
    const noResults = document.getElementById('noResults');

    // Limpiar grid
    platosGrid.innerHTML = '';

    // Si no hay platos, mostrar mensaje
    if (platos.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    // Crear tarjetas de platos
    platos.forEach(plato => {
        const card = document.createElement('div');
        card.className = 'plato-card';
        
        card.innerHTML = `
            <img src="${plato.imagen}" alt="${plato.nombre}" class="plato-imagen" loading="lazy">
            <div class="plato-info">
                <span class="plato-categoria">${plato.categoria}</span>
                <h3 class="plato-nombre">${plato.nombre}</h3>
                <p class="plato-descripcion">${plato.descripcion}</p>
                <div class="plato-footer">
                    <span class="plato-precio">${formatearPrecio(plato.precio)}</span>
                    <button class="btn-add-cart" data-id="${plato.id}">
                        Añadir 🛒
                    </button>
                </div>
            </div>
        `;

        // Añadir evento al botón de añadir al carrito
        const btnAdd = card.querySelector('.btn-add-cart');
        btnAdd.addEventListener('click', () => {
            agregarAlCarrito(plato);
        });

        platosGrid.appendChild(card);
    });
}

/**
 * 3.2: Implementar filtrado por categorías
 */
function inicializarFiltros() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botones activos
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Obtener categoría
            categoriaActiva = btn.dataset.category;

            // Aplicar filtros
            aplicarFiltros();
        });
    });
}

/**
 * 3.3: Implementar búsqueda en tiempo real
 */
function inicializarBusqueda() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        terminoBusqueda = e.target.value.toLowerCase().trim();
        aplicarFiltros();
    });
}

/**
 * Aplicar filtros combinados (categoría + búsqueda)
 */
function aplicarFiltros() {
    let platosFiltrados = todosLosPlatos;

    // Filtrar por categoría
    if (categoriaActiva !== 'todos') {
        platosFiltrados = platosFiltrados.filter(plato => 
            plato.categoria === categoriaActiva
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

// ============================================
// APARTADO 4: CARRITO DE COMPRAS
// ============================================

// Variable global para el carrito
let carrito = [];

/**
 * 4.1: Añadir productos al carrito
 */
function agregarAlCarrito(plato) {
    // Buscar si el plato ya está en el carrito
    const itemExistente = carrito.find(item => item.id === plato.id);

    if (itemExistente) {
        // Si existe, incrementar cantidad
        itemExistente.cantidad++;
    } else {
        // Si no existe, añadirlo con cantidad 1
        carrito.push({
            id: plato.id,
            nombre: plato.nombre,
            precio: plato.precio,
            imagen: plato.imagen,
            cantidad: 1
        });
    }

    // Mostrar notificación
    mostrarNotificacion(`✅ ${plato.nombre} añadido al carrito`);

    // Actualizar UI y localStorage
    actualizarContadorCarrito();
    guardarCarrito();
    renderizarCarrito();
}

/**
 * 4.2: Mostrar/ocultar panel lateral del carrito
 */
function inicializarCarrito() {
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');

    // Abrir carrito
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        overlay.classList.add('active');
    });

    // Cerrar carrito
    closeCart.addEventListener('click', cerrarCarrito);
    overlay.addEventListener('click', cerrarCarrito);

    function cerrarCarrito() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

/**
 * Renderizar el contenido del carrito
 */
function renderizarCarrito() {
    const cartContent = document.getElementById('cartContent');

    // Si el carrito está vacío
    if (carrito.length === 0) {
        cartContent.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
        actualizarTotal();
        return;
    }

    // Crear HTML para cada producto
    cartContent.innerHTML = carrito.map(item => `
        <div class="cart-item">
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nombre}</div>
                <div class="cart-item-price">${formatearPrecio(item.precio)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="decrementarCantidad(${item.id})">-</button>
                    <span class="quantity">${item.cantidad}</span>
                    <button class="quantity-btn" onclick="incrementarCantidad(${item.id})">+</button>
                    <button class="remove-item" onclick="eliminarDelCarrito(${item.id})" title="Eliminar">🗑️</button>
                </div>
                <div class="cart-item-subtotal">
                    Subtotal: ${formatearPrecio(item.precio * item.cantidad)}
                </div>
            </div>
        </div>
    `).join('');

    actualizarTotal();
}

/**
 * 4.3: Cálculos dinámicos del carrito
 */
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;
}

function actualizarTotal() {
    const totalPrice = document.getElementById('totalPrice');
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    totalPrice.textContent = formatearPrecio(total);
}

/**
 * 4.4: Persistencia con localStorage
 */
function guardarCarrito() {
    localStorage.setItem('carritoRestaurante', JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carritoRestaurante');
    
    if (carritoGuardado) {
        try {
            carrito = JSON.parse(carritoGuardado);
            actualizarContadorCarrito();
            renderizarCarrito();
        } catch (error) {
            console.error('Error al cargar el carrito:', error);
            carrito = [];
        }
    }
}

/**
 * Incrementar cantidad de un producto
 */
function incrementarCantidad(idProducto) {
    const item = carrito.find(item => item.id === idProducto);
    if (item) {
        item.cantidad++;
        actualizarContadorCarrito();
        guardarCarrito();
        renderizarCarrito();
    }
}

/**
 * Decrementar cantidad de un producto
 */
function decrementarCantidad(idProducto) {
    const item = carrito.find(item => item.id === idProducto);
    if (item) {
        item.cantidad--;
        
        // Si la cantidad llega a 0, eliminar del carrito
        if (item.cantidad === 0) {
            eliminarDelCarrito(idProducto);
        } else {
            actualizarContadorCarrito();
            guardarCarrito();
            renderizarCarrito();
        }
    }
}

/**
 * Eliminar producto del carrito
 */
function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarContadorCarrito();
    guardarCarrito();
    renderizarCarrito();
    mostrarNotificacion('🗑️ Producto eliminado del carrito');
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Formatear precio con 2 decimales
 */
function formatearPrecio(numero) {
    return `${numero.toFixed(2)}€`;
}

/**
 * Mostrar notificación temporal
 */
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notif = document.createElement('div');
    notif.className = 'notificacion';
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notif);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Añadir animaciones CSS para las notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .cart-item-subtotal {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: #666;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializar la aplicación cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🍽️ Inicializando La Buena Mesa...');

    // Apartado 1: Navegación
    inicializarMenuHamburguesa();
    inicializarScrollSuave();
    inicializarMenuActivo();

    // Apartado 2: Validación de formulario
    inicializarValidacionTiempoReal();
    inicializarValidacionFormulario();

    // Apartado 3: Menú y filtros
    cargarPlatos();
    inicializarFiltros();
    inicializarBusqueda();

    // Apartado 4: Carrito
    cargarCarrito();
    inicializarCarrito();

    console.log('✅ Aplicación inicializada correctamente');
});
