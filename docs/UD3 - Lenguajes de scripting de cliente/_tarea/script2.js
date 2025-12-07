document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('formTareas');
	const input = document.getElementById('tarea');
	const lista = document.getElementById('lista');
	const error = document.getElementById('error');
	const contador = document.getElementById('contador');
	const btnLimpiar = document.getElementById('limpiar');

	const actualizarContador = () => {
		const total = lista.children.length;
		if (contador) contador.textContent = `Total tareas: ${total}`;
	};

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

	if (btnLimpiar) {
		btnLimpiar.addEventListener('click', () => {
			lista.innerHTML = '';
			actualizarContador();
		});
	}

	actualizarContador();
});