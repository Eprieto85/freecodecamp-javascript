# Guía de Respuestas: Programación funcional en JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué es la programación funcional?

**Pregunta 1:** ¿Cuál es una característica clave de una función pura?

**✅ Respuesta:** Siempre produce el mismo resultado para la misma entrada.

---

**Pregunta 2:** ¿Cuál de los siguientes se considera un efecto secundario (side effect) en programación funcional?

**✅ Respuesta:** Modificar una variable global.

---

**Pregunta 3:** ¿Cuál es un beneficio de evitar efectos secundarios en programación funcional?

**✅ Respuesta:** Hace el código más fácil de entender y probar.

---

### Lectura 2: ¿Qué es el currying y cómo funciona?

**Pregunta 1:** ¿Cuál es el propósito principal del currying en programación funcional?

**✅ Respuesta:** Transformar una función con múltiples argumentos en una secuencia de funciones con un solo argumento.

---

**Pregunta 2:** En el contexto del currying, ¿qué es la aplicación parcial?

**✅ Respuesta:** Aplicar una función a solo algunos de sus argumentos.

---

**Pregunta 3:** ¿Cuál de los siguientes es un ejemplo de función currificada en JavaScript?

**✅ Respuesta:**
```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
```

---

## TALLER — Construir un conversor de ingredientes de receta

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-recipe-ingredient-converter/step-N`

En este taller construirás una aplicación web de conversión de ingredientes de receta aplicando conceptos de programación funcional como currying y composición de funciones.

---

### Fases del taller (18 pasos)

**Fase 1 — Estructura HTML y CSS (pasos 1–5):**
Crear la estructura base del HTML con un formulario que incluye campos para: `ingredient` (texto), `quantity` (número), `unit` (selector con cup/gram/ounce/teaspoon), `servings` (número). Agregar botón `submit` y sección de resultados con `<ul id="result-list">`. Vincular los estilos CSS y el archivo `script.js`.

**Fase 2 — Tabla de conversión y funciones currificadas (pasos 6–11):**
Crear el objeto `conversionTable` con tasas de conversión entre cup, gram, ounce y teaspoon. Implementar la función currificada `convertQuantity = (fromUnit) => (toUnit) => (quantity) => {...}` que usa la tabla de conversión. Implementar `adjustForServings = (baseQuantity) => (newServings) => baseQuantity * newServings`.

**Fase 3 — Función de procesamiento y referencias DOM (pasos 12–15):**
Crear `processIngredient(baseQuantity, baseUnit, newUnit, newServings)` que combina ambas funciones currificadas. Obtener referencias DOM para todos los campos del formulario con `getElementById`.

**Fase 4 — Lógica de actualización y listener de eventos (pasos 16–18):**
Implementar `updateResultsList()` que itera sobre todas las unidades, omite la unidad actual, calcula la conversión y actualiza el `innerHTML` de la lista. Agregar listener al formulario para el evento `submit` que llama a `updateResultsList()`.

---

### Solución final completa — script.js

```js
const conversionTable = {
  cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
  gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
  ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
  teaspoon: { cup: 1 / 48, gram: 5, ounce: 0.167 },
}

const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const conversionRate = conversionTable[fromUnit][toUnit];
  return quantity * conversionRate;
}

const adjustForServings = (baseQuantity) => (newServings) =>
  baseQuantity * newServings;

const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  const convertedQuantity =
    convertQuantity(baseUnit)(newUnit)(adjustedQuantity);
  return convertedQuantity.toFixed(2);
};

const ingredientName = document.getElementById("ingredient");
const ingredientQuantity = document.getElementById("quantity");
const unitToConvert = document.getElementById("unit");
const numberOfServings = document.getElementById("servings");
const recipeForm = document.getElementById("recipe-form");
const resultList = document.getElementById("result-list");

const units = ["cup", "gram", "ounce", "teaspoon"];

const updateResultsList = () => {
  resultList.innerHTML = "";

  units.forEach((newUnit) => {
    if (newUnit !== unitToConvert.value) {
      const convertedQuantity = processIngredient(
        parseFloat(ingredientQuantity.value),
        unitToConvert.value,
        newUnit,
        parseFloat(numberOfServings.value)
      );

      resultList.innerHTML += `<li>${ingredientName.value}: ${convertedQuantity} ${newUnit}</li>`;
    }
  });
}

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  updateResultsList();
});
```

---

## LABORATORIO 1 — Función de suma con argumentos opcionales

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-optional-arguments-sum-function`

Construye una función `addTogether` que acepta hasta dos argumentos y los suma. Si solo se proporciona un argumento, devuelve una función que espera el segundo número.

**Requisitos:**
1. Crear una función `addTogether`.
2. Si recibe dos argumentos, retornar la suma.
3. Si recibe solo uno, retornar una función que al llamarse con un argumento retorna la suma.
4. Si algún argumento no es un número válido, retornar `undefined`.

**Ejemplo:**
```js
const sumTwoAnd = addTogether(2);
sumTwoAnd(3); // 5
addTogether(2, 3); // 5
addTogether("abc"); // undefined
```

**✅ Solución:**
```js
function addTogether() {
  const first = arguments[0];
  if (typeof(first) !== 'number') {
    return undefined;
  }
  if (arguments.length === 1) {
    return function(second) {
      if (typeof(second) !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  const second = arguments[1];
  if (typeof(second) !== 'number') {
    return undefined;
  }
  return first + second;
}
```

---

## LABORATORIO 2 — Visualizador de ordenamiento (Bubble Sort)

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-sorting-visualizer`

Implementa un visualizador del algoritmo Bubble Sort. Se te proporciona HTML y CSS; debes escribir el JavaScript.

**Requisitos:**
1. `generateElement()` → retorna entero aleatorio entre 1 y 100 inclusive.
2. `generateArray()` → usa `generateElement` para retornar un array de 5 enteros.
3. `generateContainer()` → crea y retorna un `div` vacío.
4. `fillArrContainer(elem, array)` → llena el elemento con los valores del array como `<span>`.
5. `isOrdered(a, b)` → retorna `true` si `a <= b`.
6. `swapElements(arr, n)` → intercambia `arr[n]` con `arr[n+1]` si no están ordenados.
7. `bubbleSort()` → ejecuta el algoritmo y visualiza cada paso.

**✅ Solución (fragmento clave de script.js):**
```js
const generateElement = () => Math.floor(Math.random() * maxVal + minVal);
const generateArray = () => Array.from({ length: arrayLength }, generateElement);
const isOrdered = (el1, el2) => el1 <= el2;

const swapElements = (arr, n = 0) => {
  if (n < arr.length - 1 && !isOrdered(arr[n], arr[n + 1])) {
    const temp = arr[n];
    arr[n] = arr[n + 1];
    arr[n + 1] = temp;
  }
}

const generateContainer = () => {
  const container = document.createElement("div");
  arrayContainer.appendChild(container);
  return container;
}

const fillArrContainer = (container, arr) => {
  container.innerHTML = "";
  arr.forEach(i => {
    const el = document.createElement("span");
    el.innerText = i;
    el.id = `number-${i}`;
    container.appendChild(el);
  })
}
```

---

## REVISIÓN — Programación funcional en JavaScript

| Concepto | Descripción |
|---|---|
| Programación funcional | Paradigma que trata las funciones como ciudadanos de primera clase y evita estados mutables |
| Función pura | Función que siempre retorna el mismo resultado para los mismos argumentos y no produce efectos secundarios |
| Efectos secundarios | Cambios en el estado del programa que son observables fuera de la función (modificar variables globales, I/O) |
| Inmutabilidad | No modificar datos existentes; crear nuevas copias en su lugar |
| Currying | Transformar una función de múltiples argumentos en una secuencia de funciones de un solo argumento |
| Aplicación parcial | Aplicar una función a solo algunos de sus argumentos, generando una nueva función |
| Composición | Combinar funciones para que la salida de una sea la entrada de la siguiente |
| Funciones de orden superior | Funciones que reciben otras funciones como argumento o las retornan |

---

## QUIZ — Cuestionario de programación funcional en JavaScript (10 preguntas)

Necesitas 9/10 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Una función que siempre retorna el mismo resultado para la misma entrada y no produce efectos secundarios. |
| 2 | Un cambio en el estado del programa que es observable fuera de la función. |
| 3 | El proceso de transformar una función de múltiples argumentos en una secuencia de funciones, cada una con un solo argumento. |
| 4 | 7 |
| 5 | function curriedAverage(a) { return function(b) { return function(c) { return (a + b + c) / 3; }; }; } |
| 6 | Evitar efectos secundarios y usar datos inmutables. |
| 7 | Una función con efectos secundarios. |
| 8 | curriedAverage(2)(3)(4); |
| 9 | let total = 0; function addToTotal(value) { total += value; return total; } |
| 10 | Retornar la suma de dos valores. |

---

*Fin de la guía — Módulo: Programación funcional en JavaScript*




Aquí tienes las respuestas correctas para cada una de las preguntas del cuestionario sobre Programación Funcional:

¿Cuál es una característica clave de una función pura?

Respuesta: Siempre produce la misma salida para la misma entrada.

¿Cuál de los siguientes se considera un efecto secundario en la programación funcional?

Respuesta: Modificar una variable global.

¿Cuál es un beneficio de evitar efectos secundarios en la programación funcional?

Respuesta: Hace que el código sea más fácil de entender y probar.




Aquí tienes las respuestas correctas para cada una de las preguntas sobre el currying:

¿Cuál es el propósito principal del currying en la programación funcional?

Respuesta: Para transformar una función con múltiples argumentos en una secuencia de funciones con argumentos únicos.

En el contexto del currying, ¿qué es la aplicación parcial?

Respuesta: Aplicar una función a solo algunos de sus argumentos.

¿Cuál de los siguientes es un ejemplo de una función curried en JavaScript?

Respuesta:

JavaScript
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}











Construir un convertidor de ingredientes de recetas, No iniciado
Taller







Construir una función de suma con argumentos opcionales, Completado

LABORATORIO
const addTogether = (...args) => {
  const [first, second] = args;

  // Función auxiliar para verificar si un valor es un número válido
  const isNumber = (num) => typeof num === "number" && !isNaN(num);

  if (!isNumber(first)) {
    return undefined;
  }

  if (args.length === 2) {
    if (!isNumber(second)) {
      return undefined;
    }
    return first + second;
  }

  // Si solo hay un argumento, retornamos una función que espera el segundo número
  return (nextNum) => {
    if (!isNumber(nextNum)) {
      return undefined;
    }
    return first + nextNum;
  };
};



Construir un visualizador de ordenamiento, No iniciado
Laboratorio (este codigo fue el más dificil de construir, tuve que ingresar por f12 para v er el codigo fuente y descifrarlo)

"use strict";

const arrayContainer = document.getElementById("array-container");
const generateArrayBtn = document.getElementById("generate-btn");
const sortArrayBtn = document.getElementById("sort-btn");
const arrayLength = 5;
const minVal = 1;
const maxVal = 100;

// Verifica si el contenedor está en su estado inicial
const isStart = () => arrayContainer.children.length === 1;

// Limpia el contenedor y deja solo el arreglo inicial
const clearArrayContainer = () => {
  arrayContainer.innerHTML = '<div id="starting-array"></div>';
};

// Control de visibilidad del botón de ordenar
const showSortBtn = () => {
  sortArrayBtn.style.display = "inline-block";
};

const hideSortBtn = () => {
  sortArrayBtn.style.display = "none";
};

// 1. Generar número aleatorio
const generateElement = () => Math.floor(Math.random() * maxVal + minVal);

// 2. Generar arreglo de 5 elementos
const generateArray = () => Array.from({ length: arrayLength }, generateElement);

// 4 y 5. Llenar contenedor con spans numerados
const fillArrContainer = (container, arr) => {
  container.innerHTML = "";
  arr.forEach(i => {
    const el = document.createElement("span");
    el.innerText = i;
    el.id = `number-${i}`;
    container.appendChild(el);
  });
};

// 6. Verificar si está ordenado
const isOrdered = (el1, el2) => el1 <= el2;

// 7 y 8. Intercambiar elementos en el arreglo
const swapElements = (arr, n = 0) => {
  if (n < arr.length - 1 && !isOrdered(arr[n], arr[n + 1])) {
    const temp = arr[n];
    arr[n] = arr[n + 1];
    arr[n + 1] = temp;
  }
};

// Utilidades para obtener elementos del DOM
const getLastChildren = () => arrayContainer.lastElementChild;

const getLastArr = () => {
  const els = Array.from(getLastChildren().children);
  return els.map(el => Number(el.id.replace("number-", "")));
};

// 3. Crear contenedor de paso
const generateContainer = () => {
  const container = document.createElement("div");
  arrayContainer.appendChild(container);
  return container;
};

// 9 y 10. Resaltar elementos actuales con borde rojo punteado
const highlightCurrentEls = (container, n = 0) => {
  const children = container.children;
  if (children[n]) children[n].style.border = "2px dashed red";
  if (children[n + 1]) children[n + 1].style.border = "2px dashed red";
};

// Resaltar el resultado final ordenado con borde verde
const highlightSorted = () => {
  getLastChildren().style.border = "4px solid green";
};

// Algoritmo de Bubble Sort adaptado a la visualización paso a paso
const bubbleSort = () => {
  let swapped = true;
  while (swapped) {
    const startingArr = getLastArr();
    startingArr.forEach((_, i) => {
      if (i + 1 < arrayLength) {
        highlightCurrentEls(getLastChildren(), i);
        const arr = getLastArr();
        swapElements(arr, i);
        fillArrContainer(generateContainer(), arr);
      }
    });
    const lastArr = getLastArr();
    if (startingArr.every((el, i) => el === lastArr[i])) {
      swapped = false;
    }
  }
};

// Eventos de los botones
generateArrayBtn.addEventListener("click", () => {
  if (!isStart()) {
    clearArrayContainer();
  }
  fillArrContainer(document.getElementById("starting-array"), generateArray());
  showSortBtn();
});

sortArrayBtn.addEventListener("click", () => {
  bubbleSort();
  highlightSorted();
  hideSortBtn();
});