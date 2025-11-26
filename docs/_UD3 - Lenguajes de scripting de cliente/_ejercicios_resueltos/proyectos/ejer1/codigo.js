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
