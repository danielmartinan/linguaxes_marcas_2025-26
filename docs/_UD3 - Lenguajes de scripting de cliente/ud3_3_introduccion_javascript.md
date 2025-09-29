# UD3.3 - Introducción a JavaScript

## ¿Qué es JavaScript?

**JavaScript** es un lenguaje de programación interpretado, dinámico y de alto nivel que fue diseñado inicialmente para hacer las páginas web más interactivas. Aunque comenzó como un lenguaje para el navegador, hoy en día se utiliza en muchos otros entornos.

### Características principales de JavaScript

- **Interpretado**: No necesita compilación, se ejecuta directamente
- **Dinámico**: Los tipos de datos se determinan en tiempo de ejecución
- **Orientado a objetos**: Soporta programación orientada a objetos
- **Funcional**: Las funciones son "ciudadanos de primera clase"
- **Débilmente tipado**: No es necesario declarar el tipo de las variables

### JavaScript vs Java

A pesar del nombre similar, **JavaScript y Java son lenguajes completamente diferentes**:

| JavaScript | Java |
|------------|------|
| Interpretado | Compilado |
| Tipado dinámico | Tipado estático |
| Ejecución en navegador | Ejecución en máquina virtual |
| Sintaxis más flexible | Sintaxis más rígida |

## Historia de JavaScript

- **1995**: Brendan Eich crea JavaScript en Netscape en 10 días
- **1997**: Estandarización como ECMAScript (ES1)
- **1999**: ES3 - Primera versión ampliamente adoptada
- **2009**: ES5 - Muchas mejoras importantes
- **2015**: ES6/ES2015 - Revolución del lenguaje
- **2016-presente**: Actualizaciones anuales (ES2016, ES2017, etc.)

## Sintaxis básica de JavaScript

### 1. Incluir JavaScript en HTML

#### Mediante etiqueta script interna

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi página</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    
    <script>
        console.log("¡Hola desde JavaScript!");
    </script>
</body>
</html>
```

#### Mediante archivo externo

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi página</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    
    <script src="mi-script.js"></script>
</body>
</html>
```

### 2. Variables en JavaScript

#### var, let y const

```javascript
// var - forma tradicional (evitar en código nuevo)
var nombre = "Ana";

// let - para variables que pueden cambiar
let edad = 25;
edad = 26; // Podemos cambiar el valor

// const - para constantes (no pueden cambiar)
const PI = 3.14159;
// PI = 3.14; // ❌ Error: no se puede cambiar
```

#### Reglas de nomenclatura

```javascript
// ✅ Correcto
let nombre;
let nombreCompleto;
let edad2;
let _precio;
let $total;

// ❌ Incorrecto
let 2nombre;        // No empezar por número
let nombre-completo; // No guiones
let class;          // Palabra reservada
```

### 3. Tipos de datos

#### Tipos primitivos

Los tipos primitivos son los tipos de datos básicos que no son objetos y no tienen métodos. En JavaScript, los principales tipos primitivos son:

```javascript
// String (cadenas de texto)
let nombre = "María";
let apellido = 'González';
let mensaje = `Hola, ${nombre}`; // Template literals

// Number (números)
let entero = 42;
let decimal = 3.14;
let negativo = -5;

// Boolean (verdadero/falso)
let esVerdad = true;
let esFalso = false;

// undefined (sin definir)
let sinValor;
console.log(sinValor); // undefined

// null (valor nulo intencionado)
let valorNulo = null;
```

:::note[Undefined vs Null]

`undefined` y `null` son dos conceptos ampliamente utilizados en programación y concretamente en JavaScript, pero tienen significados diferentes:

- `undefined` es un tipo de dato que indica que una variable no ha sido inicializada o no tiene un valor asignado.
- `null` es un tipo de dato que indica que una variable tiene un valor nulo intencionado. Tener valor nulo significa que la variable está vacía o no apunta a ningún objeto.

:::

#### Verificar tipos

Para verificar tipos de datos, disponemos del operador `typeof`:

```javascript
let edad = 25;
let nombre = "Ana";

console.log(typeof edad);   // "number"
console.log(typeof nombre); // "string"
```

### 4. Operadores

Como en la mayoría de lenguajes de programación, JavaScript dispone de varios tipos de operadores:

- Aritméticos: operan con números y devuelven un valor numérico
- Comparación: comparan dos valores y devuelven un booleano
- Lógicos: combinan expresiones booleanas
- Bit a bit: operan a nivel de bits
- Asignación: asignan valores a variables

#### Operador de asignación

Para asignar un valor a una variable se utiliza el operador `=`. También existen operadores compuestos para asignar y operar aritméticamente al mismo tiempo:

```javascript
let x = 10;      // Asignación simple
x += 5;         // x = x + 5
x -= 3;         // x = x - 3
x *= 2;         // x = x * 2
x /= 4;         // x = x / 4
x %= 3;         // x = x % 3
```

#### Operadores aritméticos

Son los operadores que permiten realizar operaciones matemáticas básicas:

```javascript
let a = 10; // Asignación del valor 10 a la variable a
let b = 3; // Asignación del valor 3 a la variable b

console.log(a + b);  // 13 - Suma
console.log(a - b);  // 7  - Resta
console.log(a * b);  // 30 - Multiplicación
console.log(a / b);  // 3.333... - División
console.log(a % b);  // 1  - Módulo (resto)
console.log(a ** b); // 1000 - Exponente (10³)

// Operadores de incremento/decremento
let contador = 0;
contador++;    // Incrementa en 1
contador--;    // Decrementa en 1
```

#### Operadores de comparación

Permiten comparar dos valores y devuelven un valor booleano (`true` o `false`). Para poder comparar "cosas", estas deben tener concepto de orden y ser del mismo tipo. Por ejemplo, no puedo comparar un número con un String (en realidad el lenguaje sí lo permite, haciendo conversiones implícitas, pero no es recomendable).

Javascript dispone además de dos tipos de igualdad: la igualdad simple (`==`) que compara solo el valor, y la igualdad estricta (`===`) que compara tanto el valor como el tipo.

```javascript
let x = 5;
let y = "5";

// Igualdad (compara valor, convierte tipos)
console.log(x == y);  // true

// Igualdad estricta (compara valor y tipo)
console.log(x === y); // false

// Desigualdad
console.log(x != y);  // false
console.log(x !== y); // true

// Comparaciones numéricas
console.log(x > 3);   // true
console.log(x < 10);  // true
console.log(x >= 5);  // true
console.log(x <= 4);  // false
```

#### Operadores lógicos

Permiten combinar expresiones booleanas (`true`, `false`)

```javascript
let tieneLicencia = true;
let tieneCoche = false;
let edad = 20;

// AND (&&) - ambos deben ser true
let puedeConducir = tieneLicencia && edad >= 18; // true

// OR (||) - al menos uno debe ser true
let puedeViajar = tieneCoche || tieneLicencia; // true

// NOT (!) - invierte el valor
let noTieneCoche = !tieneCoche; // true
```

### 5. Estructuras de control y repetición

Los lenguajes de programación que soportan el paradigma de [**programación estructurada**](https://es.wikipedia.org/wiki/Programaci%C3%B3n_estructurada) (como JavaScript) disponen de estructuras de control que permiten alterar el flujo de ejecución del programa según ciertas condiciones o repetir bloques de código.

Cuando queremos resolver un problema, nos podemos encontrar con tres situaciones:

- Querer realizar operaciones en secuencia (una tras otra)
- Querer realizar operaciones sólamente si se cumple cierta condición.
- Querer repetir operaciones varias veces (bucles). El número de veces puede ser determinado o indeterminado, dependiendo de cierta condición.

Por ello, en los lenguajes de programación estructurada disponemos de tres tipos de estructuras:

1. Estructuras secuenciales.
2. Estructuras condicionales.
3. Estructuras repetitivas (bucles).

El teorema de Böhm-Jacopini establece que **cualquier algoritmo puede ser implementado utilizando únicamente estas tres estructuras**. Esto demuestra lo potente y versátil que es la programación estructurada.

#### Condicionales

Permiten evaluar una condición y ejecutar diferentes bloques de código según el resultado (verdadero o falso). Disponemos de varias opciones:

- `if`: ejecuta un bloque si la condición es verdadera.
- `if-else`: ejecuta un bloque si la condición es verdadera y otro si es falsa.
- `if-else if-else`: permite múltiples condiciones anidadas.
- `switch`: evalúa una expresión y ejecuta el bloque correspondiente al caso que coincida.

```javascript
let edad = 18;

// if simple
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// if-else
if (edad >= 18) {
    console.log("Puedes votar");
} else {
    console.log("No puedes votar aún");
}

// if-else if-else
let nota = 8;
if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}

// switch
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}
```

#### Operador ternario

Es una alternativa compacta al `if-else` cuando solo necesitamos asignar un valor según una condición.

```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Mayor de edad"
```

#### Bucles

Permiten repetir un bloque de código varias veces, ya sea un número determinado de veces o mientras se cumpla una condición. Existen 3 tipos de bucles:

- `for`: se utiliza cuando sabemos de antemano cuántas veces queremos repetir el bloque. Indicamos la inicialización, condición y actualización en una sola línea.
- `while`: se utiliza cuando queremos repetir el bloque mientras se cumpla una condición. La condición se evalúa **antes** de cada iteración.
- `do-while`: similar al `while`, pero la condición se evalúa **después** de cada iteración, garantizando que el bloque se ejecute al menos una vez.

```javascript
// for - cuando sabemos las repeticiones
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}

// while - mientras se cumpla una condición
let contador = 0;
while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
}

// do-while - ejecuta al menos una vez
let numero = 0;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 3);
```

### 6. Funciones

Las funciones son bloques de código reutilizables que realizan una tarea específica. Permiten organizar el código, evitar repeticiones y mejorar la legibilidad.

Cuando definimos una función debemos:

- Darle un **nombre** descriptivo. Cuando querramos usar una función, nos referiremos a ella por este nombre.
- Indicar los **parámetros** (opcional). Son valores que la función puede recibir para trabajar con ellos. Son los datos con los que dicha función podrá operar para realizar su cometido.
- Definir el cuerpo de la función. Es el bloque de código que se ejecutará cuando se llame a la función. Dentro del cuerpo podemos usar los parámetros y otras variables locales. Nos referiremos a los parámetros por el nombre que le hayamos dado al definir la función.
- Retornar un valor (opcional). Si la función debe devolver un resultado, utilizamos la palabra clave `return` seguida del valor o expresión a devolver. Si no se especifica `return`, la función devolverá `undefined` por defecto.

#### Declaración de funciones

```javascript
// Función básica
function saludar() {
    console.log("¡Hola!");
}

// Llamar la función
saludar();

// Función con parámetros
function saludarPersona(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludarPersona("Ana");

// Función que retorna un valor
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // 8
```

#### Diferentes formas de crear funciones

```javascript
// 1. Declaración de función
function miFuncion1() {
    return "Soy una declaración";
}

// 2. Expresión de función
let miFuncion2 = function() {
    return "Soy una expresión";
};

// 3. Arrow function (función flecha) - ES6
let miFuncion3 = () => {
    return "Soy una arrow function";
};

// Arrow function simplificada
let sumar = (a, b) => a + b;
```

#### Parámetros por defecto

Cuando definimos una lista de parámetros, podemos asignarles valores por defecto. Si al llamar a la función no se proporciona un valor para ese parámetro, se usará el valor por defecto.

```javascript
function saludar(nombre = "Usuario") {
    console.log("¡Hola, " + nombre + "!");
}

saludar();        // "¡Hola, Usuario!"
saludar("Ana");   // "¡Hola, Ana!"
```

### 7. Arrays (Arreglos)

Un array es una **colección ordenada** de elementos que pueden ser de cualquier tipo (números, cadenas, objetos, etc.). Los arrays en JavaScript son dinámicos, lo que significa que pueden crecer y reducirse según sea necesario. Además, los arrays pueden contener elementos de diferentes tipos (esta característica no es propia de otros lenguajes como Java o C++).

Los podemos imaginar como una lista de elementos, donde cada elemento tiene un índice (posición) que empieza en 0.

Las operaciones comunes con arrays incluyen:

- Crear y acceder a elementos. Se realizar utilizando un índice, un número que indica la posición del elemento en el array. En JavaScript, los índices empiezan en 0 (muy común en otros lenguajes como C, Java, Python, etc.).
- Modificar elementos. Podemos cambiar el valor de un elemento accediendo a él mediante su índice.
- Propiedades y métodos útiles. Los arrays en JavaScript tienen varias propiedades y métodos incorporados que facilitan su manipulación, como `length`, `push()`, `pop()`, `shift()`, `unshift()`, entre otros.

#### Crear y usar arrays

```javascript
// Crear arrays
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = ["texto", 42, true, null];

// Acceder a elementos (índice empieza en 0)
console.log(frutas[0]);  // "manzana"
console.log(frutas[1]);  // "banana"

// Modificar elementos
frutas[1] = "kiwi";
console.log(frutas); // ["manzana", "kiwi", "naranja"]

// Propiedades y métodos útiles
console.log(frutas.length);    // 3
frutas.push("uva");           // Añadir al final
frutas.pop();                 // Quitar del final
frutas.unshift("pera");       // Añadir al inicio
frutas.shift();               // Quitar del inicio
```

#### Recorrer arrays

Podemos recorrer los elementos de un array utilizando diferentes tipos de bucles:

```javascript
let numeros = [1, 2, 3, 4, 5];

// Con for tradicional
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Con for...of (más moderno)
for (let numero of numeros) {
    console.log(numero);
}

// Con forEach
numeros.forEach(function(numero) {
    console.log(numero);
});
```

### 8. Objetos

#### Crear y usar objetos

```javascript
// Crear un objeto
let persona = {
    nombre: "Ana",
    edad: 25,
    esEstudiante: true,
    hobbies: ["leer", "nadar", "viajar"]
};

// Acceder a propiedades
console.log(persona.nombre);      // "Ana"
console.log(persona["edad"]);     // 25

// Modificar propiedades
persona.edad = 26;
persona["esEstudiante"] = false;

// Añadir nuevas propiedades
persona.ciudad = "Madrid";

// Eliminar propiedades
delete persona.hobbies;
```

#### Métodos en objetos

```javascript
let calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    }
};

console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(5, 3)); // 2
```

#### Sintaxis moderna de objetos (ES6)

```javascript
let nombre = "Ana";
let edad = 25;

// Sintaxis abreviada
let persona = {
    nombre,  // Equivale a nombre: nombre
    edad,    // Equivale a edad: edad
    
    // Método abreviado
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
```

## Conceptos avanzados básicos

### 1. Template literals

```javascript
let nombre = "Ana";
let edad = 25;

// Forma tradicional
let mensaje1 = "Hola, soy " + nombre + " y tengo " + edad + " años";

// Con template literals (más legible)
let mensaje2 = `Hola, soy ${nombre} y tengo ${edad} años`;

// Multilínea
let html = `
    <div>
        <h1>${nombre}</h1>
        <p>Edad: ${edad}</p>
    </div>
`;
```

### 2. Destructuring

```javascript
// Array destructuring
let numeros = [1, 2, 3];
let [primero, segundo, tercero] = numeros;

console.log(primero);  // 1
console.log(segundo);  // 2

// Object destructuring
let persona = { nombre: "Ana", edad: 25 };
let { nombre, edad } = persona;

console.log(nombre);  // "Ana"
console.log(edad);    // 25
```

### 3. Spread operator

```javascript
// Con arrays
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let todos = [...numeros1, ...numeros2]; // [1, 2, 3, 4, 5, 6]

// Con objetos
let persona = { nombre: "Ana", edad: 25 };
let empleado = { ...persona, trabajo: "Programadora" };
// { nombre: "Ana", edad: 25, trabajo: "Programadora" }
```

## Buenas prácticas en JavaScript

### 1. Usa nombres descriptivos

```javascript
// ❌ Mal
let x = getUserAge();
let d = new Date();

// ✅ Bien
let userAge = getUserAge();
let currentDate = new Date();
```

### 2. Usa const por defecto, let cuando necesites cambiar

```javascript
// ✅ Bien
const API_URL = "https://api.ejemplo.com";
const users = getUsers();

let currentIndex = 0; // Solo let si va a cambiar
```

### 3. Usa funciones puras cuando sea posible

```javascript
// ❌ Función impura (modifica variables externas)
let total = 0;
function sumarAlTotal(cantidad) {
    total += cantidad;
}

// ✅ Función pura (no efectos secundarios)
function sumar(a, b) {
    return a + b;
}
```

### 4. Maneja errores apropiadamente

```javascript
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    let resultado = dividir(10, 0);
    console.log(resultado);
} catch (error) {
    console.log("Error:", error.message);
}
```

## Ejercicios prácticos

### Ejercicio 1: Calculadora básica

```javascript
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: División por cero";
        default:
            return "Operación no válida";
    }
}

console.log(calculadora(10, 5, '+')); // 15
console.log(calculadora(10, 5, '*')); // 50
```

### Ejercicio 2: Validador de edad

```javascript
function validarEdad(edad) {
    if (typeof edad !== 'number' || edad < 0) {
        return "Edad no válida";
    }
    
    if (edad < 18) {
        return "Menor de edad";
    } else if (edad >= 18 && edad < 65) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}

console.log(validarEdad(25));  // "Adulto"
console.log(validarEdad(10));  // "Menor de edad"
console.log(validarEdad(70));  // "Adulto mayor"
```

### Ejercicio 3: Gestión de estudiantes

```javascript
let estudiantes = [
    { nombre: "Ana", edad: 20, notas: [8, 9, 7] },
    { nombre: "Luis", edad: 19, notas: [6, 7, 8] },
    { nombre: "Carmen", edad: 21, notas: [9, 9, 10] }
];

function calcularPromedio(notas) {
    let suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

function mostrarEstudiantes() {
    estudiantes.forEach(estudiante => {
        let promedio = calcularPromedio(estudiante.notas);
        console.log(`${estudiante.nombre}: Promedio ${promedio.toFixed(2)}`);
    });
}

mostrarEstudiantes();
// Ana: Promedio 8.00
// Luis: Promedio 7.00  
// Carmen: Promedio 9.33
```

## Herramientas de desarrollo

### 1. Console del navegador

```javascript
// Diferentes tipos de mensajes en consola
console.log("Mensaje informativo");
console.warn("Advertencia");
console.error("Error");
console.table([{nombre: "Ana", edad: 25}, {nombre: "Luis", edad: 30}]);
```

### 2. Debugger

```javascript
function miFuncion() {
    let x = 10;
    debugger; // El navegador pausará aquí
    let y = x * 2;
    return y;
}
```

### 3. Validación de código

```javascript
// Usa herramientas como:
// - ESLint para detectar errores y estilo
// - Prettier para formatear código
// - JSHint para análisis estático
```

## Próximos pasos

Ahora que conoces los fundamentos de JavaScript, estás preparado para:

1. **Interactuar con el DOM** - Manipular elementos HTML
2. **Manejar eventos** - Responder a clics, teclas, etc.
3. **Trabajar con APIs** - Obtener datos externos
4. **Usar frameworks** - React, Vue, Angular
5. **Desarrollar aplicaciones completas**

JavaScript es un lenguaje muy potente y versátil. Con estos fundamentos, puedes empezar a crear aplicaciones web interactivas y continuar aprendiendo conceptos más avanzados según tus necesidades.