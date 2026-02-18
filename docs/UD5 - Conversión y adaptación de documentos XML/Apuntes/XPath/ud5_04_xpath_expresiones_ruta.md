# Expresiones de ruta en XPath

## Introducción

Las **expresiones de ruta** (*path expressions*) son el mecanismo principal para **navegar** y **seleccionar** nodos en un documento XML usando **XPath**. Una expresión de ruta especifica una **secuencia de pasos** para localizar nodos en el árbol del documento.

![alt text](/img/linguaxes-marcas/ud5/xpath_expresiones_ruta.png)

## Tipos de datos

Las evaluaciones de expresiones XPath pueden devolver diferentes tipos de datos:

| Tipo de dato       | Descripción                                      | Nombre |
|--------------------|--------------------------------------------------| --------|
| Nodo               | Un nodo del árbol XML (elemento, atributo, texto, etc.) | Node   |
| Conjunto de nodos | Una lista ordenada de nodos                       | NodeSet |
| Número             | Un valor numérico (entero o decimal)             | Number |
| Cadena             | Una secuencia de caracteres                       | String |
| Booleano           | Un valor verdadero o falso                        | Boolean |

Las características de un conjunto de nodos (nodeset) son:

- No está ordenado.
- Se considera que todos los elementos de un conjunto de nodos son hermanos, independientemente de lo que fuesen originalmente.
- Aunque los hijos de los nodos que forman un conjunto de nodos son accesibles, los subárboles de un nodo no se consideran elementos del conjunto.

## Definición de expresiones

Una expresión XPath puede ser simple o compleja. Las expresiones se construyen combinando:

1. **Rutas de localización**: Para navegar por el árbol de nodos
2. **Operadores**: Aritméticos, de comparación, lógicos
3. **Funciones**: Para realizar operaciones sobre nodos y valores
4. **Literales**: Valores constantes (números, cadenas)

### Ejemplos de expresiones

**Expresiones simples:**

```xpath
/biblioteca/libro
```

Selecciona todos los elementos `<libro>` hijos de `<biblioteca>`.

**Expresiones con predicados:**

```xpath
//libro[@precio < 20]
```

Selecciona todos los elementos `<libro>` cuyo atributo `precio` sea menor que 20.

**Expresiones con funciones:**

```xpath
count(//libro)
```

Cuenta el número total de elementos `<libro>` en el documento.

**Expresiones aritméticas:**

```xpath
//libro/@precio * 1.21
```

Multiplica el precio de cada libro por 1.21 (por ejemplo, para añadir IVA).

**Expresiones de comparación:**

```xpath
//libro/año = 2020
```

Selecciona los años de los libros que son iguales a 2020.

**Expresiones lógicas:**

```xpath
//libro[@precio < 20 and @stock > 0]
```

Selecciona libros con precio menor a 20 Y stock mayor que 0.

## Procesamiento de expresiones

El procesamiento de una expresión XPath sigue estos pasos:

1. **Análisis sintáctico**: La expresión se descompone en sus componentes (ejes, pruebas de nodo, predicados, etc.).

2. **Evaluación del contexto**: Se establece el nodo de contexto inicial (normalmente el nodo raíz o el nodo actual).

3. **Evaluación de pasos**: Cada paso de la ruta se evalúa secuencialmente:
   - Se aplica el eje para seleccionar un conjunto de nodos
   - Se aplica la prueba de nodo para filtrar
   - Se aplican los predicados para refinar la selección

4. **Combinación de resultados**: Los resultados de cada paso se combinan para producir el conjunto final de nodos.

5. **Devolución del resultado**: Se devuelve una secuencia de ítems (nodos o valores atómicos).

#### Ejemplo de procesamiento

Consideremos la expresión: `/biblioteca/libro[precio < 20]/titulo`

1. Se parte del nodo raíz `/`
2. Se selecciona el elemento hijo `biblioteca`
3. Se seleccionan todos los elementos hijo `libro` de `biblioteca`
4. Se filtran los `libro` cuyo elemento hijo `precio` tenga un valor menor que 20
5. De los libros resultantes, se seleccionan sus elementos hijo `titulo`
6. Se devuelve una secuencia con todos los elementos `<titulo>` encontrados
