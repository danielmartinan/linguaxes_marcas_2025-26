document.addEventListener('DOMContentLoaded', () => {
	// Elementos del DOM
	const form = document.getElementById('formTareas');
	const input = document.getElementById('tarea');
	const lista = document.getElementById('lista');
	const error = document.getElementById('error');
	const contador = document.getElementById('contador');
	const btnLimpiar = document.getElementById('limpiar');

	// Funciones auxiliares
	const actualizarContador = () => {
		const total = lista.children.length;
		if (contador) contador.textContent = `Total tareas: ${total}`;
	};

	// Crear un ítem de la lista ul
	const crearItem = (texto) => {
		const li = document.createElement('li');
		const span = document.createElement('span');
		span.textContent = texto;
		const btnEliminar = document.createElement('button');
		btnEliminar.textContent = 'Eliminar';
		btnEliminar.addEventListener('click', () => {
			li.remove();
			actualizarContador();
		});
		li.append(span, btnEliminar);
		return li;
	};

	// Manejo del formulario
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const texto = input.value.trim();
		if (!texto) {
			error.textContent = 'Escribe una tarea';
			return;
		}
		error.textContent = '';
		lista.appendChild(crearItem(texto));
		input.value = '';
		input.focus();
		actualizarContador();
	});

	// Botón limpiar
	if (btnLimpiar) {
		btnLimpiar.addEventListener('click', () => {
			while (lista.firstChild) {
				lista.removeChild(lista.firstChild);
			}
			actualizarContador();
			error.textContent = '';
			input.value = '';
			input.focus();
		});
	}

	actualizarContador();
});