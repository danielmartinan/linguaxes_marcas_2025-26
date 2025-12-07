document.addEventListener('DOMContentLoaded', () => {
	const valor = document.getElementById('valor');
	const btnMas = document.getElementById('mas1');
	const btnMas10 = document.getElementById('mas10');
	const btnMenos = document.getElementById('menos1');
	const btnMenos10 = document.getElementById('menos10');
	const btnReset = document.getElementById('reset');

	let contador = 0;

	const pintar = () => {
		valor.textContent = contador;
		valor.style.color = contador > 10 ? 'green' : '#222';
	};

	const sumar = (n) => {
		contador += n;
		if (contador < 0) contador = 0;
		pintar();
	};

	btnMas.addEventListener('click', () => sumar(1));
	btnMas10.addEventListener('click', () => sumar(10));
	btnMenos.addEventListener('click', () => sumar(-1));
	btnMenos10.addEventListener('click', () => sumar(-10));
	btnReset.addEventListener('click', () => { contador = 0; pintar(); });

	pintar();
});
