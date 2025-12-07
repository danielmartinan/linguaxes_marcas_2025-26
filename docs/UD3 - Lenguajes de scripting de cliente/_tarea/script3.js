document.addEventListener('DOMContentLoaded', () => {
	const productos = [
		{ nombre: 'Manzana', categoria: 'fruta' },
		{ nombre: 'Plátano', categoria: 'fruta' },
		{ nombre: 'Zumo de naranja', categoria: 'bebida' },
		{ nombre: 'Agua mineral', categoria: 'bebida' },
		{ nombre: 'Pera', categoria: 'fruta' },
	];

	const contenedor = document.getElementById('productos');
	const buscador = document.getElementById('buscador');
	const sinResultados = document.getElementById('sinResultados');
	const botonesCat = document.querySelectorAll('.cat');

	let categoriaActiva = 'todos';
	let termino = '';

	const render = (lista) => {
		contenedor.innerHTML = '';
		if (lista.length === 0) {
			sinResultados.style.display = 'block';
			return;
		}
		sinResultados.style.display = 'none';
		lista.forEach((p) => {
			const card = document.createElement('div');
			card.className = 'producto';
			card.innerHTML = `
				<h3>${p.nombre}</h3>
				<span class="cat-tag">${p.categoria}</span>
			`;
			contenedor.appendChild(card);
		});
	};

	const aplicarFiltros = () => {
		const filtrados = productos.filter((p) => {
			const coincideCat = categoriaActiva === 'todos' || p.categoria === categoriaActiva;
			const coincideTexto = p.nombre.toLowerCase().includes(termino);
			return coincideCat && coincideTexto;
		});
		render(filtrados);
	};

	buscador.addEventListener('input', (e) => {
		termino = e.target.value.toLowerCase().trim();
		aplicarFiltros();
	});

	botonesCat.forEach((btn) => {
		btn.addEventListener('click', () => {
			botonesCat.forEach((b) => b.classList.remove('active'));
			btn.classList.add('active');
			categoriaActiva = btn.dataset.cat;
			aplicarFiltros();
		});
	});

	aplicarFiltros();
});
