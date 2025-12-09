# Tarea UD3 (versión simplificada)

Tres ejercicios independientes, pensados para 1º DAW/ASIR, usando solo lo visto en los apuntes de UD3: variables, eventos, DOM, arrays simples y un poco de validación básica. Se entrega cada ejercicio con un único HTML + CSS mínimo; el alumnado solo completa el JS.

## Ejercicio 1: Contador con botones

**Objetivo:** practicar eventos `click`, acceso al DOM (`getElementById`), actualización de `textContent` y control de límites.

**Requisitos:**

- Botones: "+10", "+1", "-1", "-10" y "Reset".
- El número se muestra centrado y empieza en 0.
- No puede bajar de 0 (si está a 0 y pulsan "-1", no cambia).
- Opcional: si el valor es mayor que 10, poner el número en verde.

## Ejercicio 2: Lista de tareas mínima

**Objetivo:** practicar formularios, `preventDefault()`, creación de nodos (`createElement`), `appendChild`, manejo básico de errores.

**Requisitos:**

- Al enviar, si el input está vacío: mostrar mensaje de error debajo del campo.
- Si hay texto: crear un `<li>` dentro de la lista con un botón "Eliminar" que borre solo ese ítem.
- Mostrar un contador "Total tareas: X".
- Mostrar un botón "Limpiar lista" que borre todas las tareas.

## Ejercicio 3: Filtro en vivo de productos (sin fetch)

**Objetivo:** practicar arrays, `filter`, `toLowerCase()`, eventos `input` y renderizado dinámico en el DOM.

**Requisitos:**

- Definir en JS un array de productos (nombre y categoría) ya en el código. Por ejemplo:

    ```javascript
	const productos = [
		{ nombre: 'Manzana', categoria: 'fruta' },
		{ nombre: 'Plátano', categoria: 'fruta' },
		{ nombre: 'Zumo de naranja', categoria: 'bebida' },
		{ nombre: 'Agua mineral', categoria: 'bebida' },
		{ nombre: 'Pera', categoria: 'fruta' },
	];

- Mostrar las tarjetas de productos en la página.
- Campo de búsqueda: mientras se escribe, se filtra por nombre (contiene, sin distinguir mayúsculas/minúsculas).
- Botones de categoría: "Todos", "Fruta", "Bebida", etc. que combinen con la búsqueda.
- Si no hay resultados, mostrar el mensaje "No se encontraron productos".
