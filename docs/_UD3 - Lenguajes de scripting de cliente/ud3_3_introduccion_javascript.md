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

A continuación, se presentan los conceptos básicos de la sintaxis de JavaScript con ejemplos prácticos.

### 1. Incluir JavaScript en HTML

Para añadir funcionalidad JavaScript a una página web, se puede incluir el código de dos formas principales:

#### Mediante etiqueta script interna

Añadimos un bloque de código JavaScript directamente dentro de la etiqueta `<script>` en el HTML.

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

Referenciamos un archivo `.js` externo usando la etiqueta `<script>` con el atributo `src`.

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

#### ¿Cual es la mejor práctica?

Es recomendable colocar las etiquetas `<script>` justo antes del cierre de la etiqueta `</body>`. Esto asegura que el HTML se cargue primero, mejorando el rendimiento y evitando errores si el script intenta acceder a elementos del DOM que aún no existen.

### 2. Variables en JavaScript

Las variables se utilizan para almacenar datos que pueden cambiar durante la ejecución del programa. En JavaScript, existen tres formas principales de declarar variables: `var`, `let` y `const`.

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

Debemos seguir ciertas reglas al nombrar variables:

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

Son los tipos de datos básicos en JavaScript:

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

#### Verificar tipos

```javascript
let edad = 25;
let nombre = "Ana";

console.log(typeof edad);   // "number"
console.log(typeof nombre); // "string"
```

### 4. Operadores

#### Operadores aritméticos

```javascript
let a = 10;
let b = 3;

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

### 5. Estructuras de control

#### Condicionales

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

```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Mayor de edad"
```

#### Bucles

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

```javascript
function saludar(nombre = "Usuario") {
    console.log("¡Hola, " + nombre + "!");
}

saludar();        // "¡Hola, Usuario!"
saludar("Ana");   // "¡Hola, Ana!"
```

### 7. Arrays (Arreglos)

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