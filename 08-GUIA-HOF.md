# Guía de Respuestas: Funciones de Orden Superior y Callbacks
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué es una función de devolución de llamada y cómo funciona con el método forEach?

**Pregunta 1:** ¿Cuál es el propósito principal de una función de devolución de llamada en JavaScript?

**✅ Respuesta:** Para permitir que una función ejecute otro fragmento de código en un momento posterior.

---

**Pregunta 2:** ¿Cuántas veces se llama a la función de devolución de llamada en forEach?

**✅ Respuesta:** Una vez para cada elemento en el arreglo.

---

**Pregunta 3:** ¿Cuál de los siguientes NO es un parámetro que puede ser pasado a la función de devolución de llamada en forEach?

**✅ Respuesta:** La longitud del arreglo.

---

### Lectura 2: ¿Qué son las funciones de orden superior?

**Pregunta 1:** ¿Cuál de las siguientes afirma mejor describe a una función de orden superior?

**✅ Respuesta:** Una función que toma otra función como argumento o devuelve una función.

---

**Pregunta 2:** ¿Cuál es un beneficio clave de usar funciones de orden superior?

**✅ Respuesta:** Permiten un código más flexible y reutilizable.

---

**Pregunta 3:** En el contexto de las funciones de orden superior, ¿qué significa para las funciones ser "ciudadanos de primera clase" en JavaScript?

**✅ Respuesta:** Las funciones pueden tratarse como cualquier otro valor, incluso pasarse como argumentos.

---

### Lectura 3: ¿Qué es el método map y cómo funciona?

**Pregunta 1:** ¿Qué devuelve el método map?

**✅ Respuesta:** Un nuevo array con el mismo número de elementos que el original.

---

**Pregunta 2:** ¿Cuántos argumentos puede recibir la función de callback en map?

**✅ Respuesta:** Tres. El elemento actual, su índice y el array original.

---

**Pregunta 3:** ¿Cuál de los siguientes NO es un uso correcto del método map?

**✅ Respuesta:** Eliminar elementos específicos de un array.

---

### Lectura 4: ¿Qué es el método filter y cómo funciona?

**Pregunta 1:** ¿Qué devuelve el método filter si ningún elemento del array pasa la prueba?

**✅ Respuesta:** Un array vacío.

---

**Pregunta 2:** ¿Cuál de las siguientes mejor describe el propósito de la función de callback en el método filter?

**✅ Respuesta:** Para determinar qué elementos deben incluirse en el nuevo array.

---

**Pregunta 3:** ¿Cómo afecta el método filter al array original sobre el que se llama?

**✅ Respuesta:** No afecta en absoluto al array original.

---

### Lectura 5: ¿Qué es el método reduce y cómo funciona?

**Pregunta 1:** ¿Qué hace el método reduce en un array?

**✅ Respuesta:** Transforma el array en un único valor.

---

**Pregunta 2:** En el método reduce, ¿qué es el acumulador?

**✅ Respuesta:** El resultado en proceso de la operación reduce.

---

**Pregunta 3:** ¿Qué sucede si no proporcionas un valor inicial al método reduce?

**✅ Respuesta:** Usa el primer elemento del array como valor inicial.

---

### Lectura 6: ¿Qué es el encadenamiento de métodos y cómo funciona?

**Pregunta 1:** ¿Cuál será la salida del siguiente código?
```js
let str = "  HELLO world  ";
let result = str.trim().toLowerCase().split(' ');
console.log(result);
```

**✅ Respuesta:** `["hello", "world"]`

---

**Pregunta 2:** En el contexto del encadenamiento de métodos, ¿qué debería devolver un método típicamente para permitir un encadenamiento adicional?

**✅ Respuesta:** El objeto mismo (this).

---

**Pregunta 3:** ¿Cuál será el resultado del siguiente código?
```js
let result = obj.increment().double().increment().getValue();
// (obj empieza con value: 1)
```

**✅ Respuesta:** `5`

> Pasos: 1 → increment() → 2 → double() → 4 → increment() → 5 → getValue() → 5

---

### Lectura 7: ¿Cómo funciona el método sort?

**Pregunta 1:** ¿Qué hace el método sort en JavaScript?

**✅ Respuesta:** Ordena los elementos de un arreglo in situ.

---

**Pregunta 2:** ¿Por qué los números no se ordenan como se espera al usar el método sort sin una función de comparación?

**✅ Respuesta:** Los elementos se comparan como cadenas basadas en unidades de código UTF-16.

---

**Pregunta 3:** ¿Qué debe devolver una función de comparación si a debe ir después de b?

**✅ Respuesta:** Un valor positivo.

---

### Lectura 8: ¿Cómo funcionan los métodos every() y some()?

**Pregunta 1:** ¿Qué devuelve el método every si todos los elementos del arreglo cumplen la condición dada?

**✅ Respuesta:** `true`

---

**Pregunta 2:** Si usas el método some en un arreglo vacío, ¿qué devolverá?

**✅ Respuesta:** `false`

---

**Pregunta 3:** ¿Qué método usarías para verificar si al menos un elemento en un arreglo es mayor que 10?

**✅ Respuesta:** `some`

---

## TALLER — Workshop: Library Manager (18 pasos)

---

### Paso 1
Crear el arreglo vacío:
```js
const library = [];
```

---

### Paso 2
Agregar el primer libro al arreglo:
```js
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  }
];
```

---

### Paso 3
Agregar el segundo libro:
```js
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  }
];
```
> Los libros 3–8 se agregan automáticamente en este paso.

---

### Paso 4
Agregar el console.log inicial:
```js
console.log("Books in the Library:\n");
```

---

### Paso 5
Crear la función `getBookInformation`:
```js
function getBookInformation(catalog) {

}
```

---

### Paso 6
Dentro de `getBookInformation`, usar `map` para retornar solo los títulos:
```js
function getBookInformation(catalog) {
  return catalog.map(book => book.title);
}
```

---

### Paso 7
Agregar el console.log para ver el resultado:
```js
console.log(getBookInformation(library));
```

---

### Paso 8
Actualizar `map` para incluir título y autor:
```js
function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`);
}
```

---

### Paso 9
Encadenar `.join("\n")` al `map`:
```js
function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
}
```

---

### Paso 10
Agregar el mensaje de resúmenes:
```js
console.log("\nList of book summaries:\n");
```

---

### Paso 11
Crear la función `getBookSummaries`:
```js
function getBookSummaries(catalog) {
  return catalog.map((book) => book.about);
}
```

---

### Paso 12
Encadenar `.join("\n")` y agregar console.log:
```js
function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n");
}

console.log(getBookSummaries(library));
```

---

### Paso 13
Agregar mensaje para libros de Arvid Kahl:
```js
console.log("\nList of books by Arvid Kahl:\n");
```

---

### Paso 14
Crear la función `getBooksByAuthor`:
```js
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}
```

---

### Paso 15
Mostrar libros de Arvid Kahl:
```js
console.log(getBooksByAuthor(library, "Arvid Kahl"));
```

---

### Paso 16
Mostrar libros de James Clear:
```js
console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));
```

---

### Paso 17
Agregar mensaje de total de páginas:
```js
console.log("\nTotal number of pages for all library books:\n");
```

---

### Paso 18
Crear función `getTotalPages` con `reduce` y mostrar resultado:
```js
function getTotalPages(catalog) {
  return catalog.reduce((acc, book) => acc + book.pages, 0);
}

console.log(getTotalPages(library));
```

---

## LABS — Soluciones

---

### Lab: Build a Book Organizer

```js
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  return 0;
}

const books = [
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
  {
    title: "In Search of Lost Time",
    authorName: "Marcel Proust",
    releaseYear: 1913,
  },
  {
    title: "Ulysses",
    authorName: "James Joyce",
    releaseYear: 1922,
  },
  {
    title: "One Hundred Years of Solitude",
    authorName: "Gabriel García Márquez",
    releaseYear: 1967,
  },
  {
    title: "The Catcher in the Rye",
    authorName: "J. D. Salinger",
    releaseYear: 1951,
  },
];

let filteredBooks = books.filter((book) => book.releaseYear < 1950);

filteredBooks.sort(sortByYear);
```

> Reglas: `sortByYear` retorna -1 si book1 es más viejo, 1 si es más nuevo, 0 si son iguales. `filteredBooks` contiene los libros anteriores a 1950, ordenados por año.

---

### Lab: Implement a Sorted Index Finder

```js
function getIndexToIns(arr, num) {
  const sorted = [...arr].sort((a, b) => a - b);
  const index = sorted.findIndex(el => el >= num);
  return index === -1 ? sorted.length : index;
}
```

> Ordena el arreglo, luego usa `findIndex` para encontrar el primer elemento mayor o igual que `num`. Si no existe, retorna la longitud (insertar al final).

---

### Lab: Build a Symmetric Difference Function

```js
function diffArray(arr1, arr2) {
  return arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)));
}
```

> Retorna los elementos que están solo en uno de los dos arreglos (diferencia simétrica).

---

### Lab: Implement a Value Remover Function

```js
function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}
```

> Usa rest parameters para aceptar cualquier número de valores a eliminar, luego filtra el arreglo original.

---

### Lab: Implement a Matching Object Filter

```js
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj =>
    sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}
```

> Filtra los objetos que tienen todos los pares clave-valor del objeto fuente.

---

### Lab: Implement a Range-Based LCM Calculator

```js
function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a - b);

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;
  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}
```

> Calcula el MCM de todos los números en el rango usando el algoritmo de Euclides.

---

### Lab: Create a Deep Flattening Tool

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  const out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```

> Aplana el arreglo recursivamente. No usar `.flat()` ni `.flatMap()`.

---

### Lab: Build an All-True Property Validator

```js
function truthCheck(collection, pre) {
  return collection.every(function(e) { return e[pre]; });
}
```

> Usa `every` para verificar si la propiedad `pre` tiene valor truthy en todos los objetos.

---

## QUIZ — JavaScript Higher Order Functions (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Todas las funciones en JavaScript, incluidas las que no toman o devuelven otras funciones, pueden clasificarse como funciones de orden superior. *(Esta es la INCORRECTA — es la que debes seleccionar como la que NO es verdadera)* |
| 2 | Una función que devuelve una nueva función basada en parámetros específicos |
| 3 | `forEachRes` es `undefined` y `mapRes` es `[6,7,8,9,10]` |
| 4 | `[{ '20': 5 }, 'a', 'b', undefined, empty]` |
| 5 | Una función pasada como argumento a otra función, para ser ejecutada por la lógica de esa función. |
| 6 | Varía dependiendo del valor inicial del acumulador y la función de callback. |
| 7 | Ordena el array como cadenas dentro de los códigos de unidad de UTF-16. |
| 8 | Para determinar si algún elemento en un array pasa una prueba especificada. |
| 9 | `str.toLowerCase().trim().replace(' ', '_');` |
| 10 | `0 0 0 0` |
| 11 | Promueve una sintaxis simplificada y código más legible al permitir múltiples operaciones en una sola expresión. |
| 12 | Usa una función de comparación que compare los valores de las propiedades. |
| 13 | Divide cadenas largas en múltiples pasos. |
| 14 | Puede hacer que el código sea más difícil de depurar. |
| 15 | `every()` |
| 16 | `[{ id: 1 }, { id: 4 }, { id: 3 }]` |
| 17 | `['apple', 'pear', 'kiwi']` |
| 18 | Para definir el valor inicial para el acumulador. |
| 19 | No, está específicamente diseñado para arrays. |
| 20 | Para crear un nuevo array que contenga los resultados de llamar a una función proporcionada sobre cada elemento del array inicial. |

---

*Fin de la guía — Módulo: Funciones de Orden Superior y Callbacks*
