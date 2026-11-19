# Guía de Respuestas: Recursión y la pila de llamadas
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lectura con preguntas

---

### Lectura 1: ¿Qué es la recursión, y cómo funciona?

**Pregunta 1:** ¿Cuál es el propósito principal de un caso base en una función recursiva?

**✅ Respuesta:** Para prevenir la recursión infinita y el desbordamiento de pila.

---

**Pregunta 2:** En el contexto de la recursión, ¿para qué se utiliza la pila de llamadas?

**✅ Respuesta:** Para rastrear y resolver llamadas a funciones.

---

**Pregunta 3:** ¿Qué sucede cuando una llamada recursiva alcanza su caso base?

**✅ Respuesta:** Devuelve y permite que la llamada anterior retome la ejecución.

---

## TALLER 1 — Construir una función countup

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-countup/step-N`

En este taller construirás una función recursiva `countup` que genera un array de números del 1 hasta `number`.

---

### Paso 1 — Crear la función countup vacía

Crea una función vacía llamada `countup` con un único parámetro llamado `number`.

**✅ Respuesta:**
```js
function countup(number) {

}
```

---

### Paso 2 — Agregar el caso base

Agrega un bloque `if` dentro de `countup`. Si `number` es menor que `1`, devuelve un array vacío. Este es el caso base que detiene la recursión.

**✅ Respuesta:**
```js
if (number < 1) {
  return [];
}
```

---

### Paso 3 — Declarar el array countArray

Declara una variable `countArray` como array vacío justo antes del bloque `if`. Este array almacenará los valores acumulados en cada llamada recursiva.

**✅ Respuesta:**
```js
let countArray = [];
```

---

### Paso 4 — Crear el bloque else con la llamada recursiva

Agrega un bloque `else` después del `if`. Dentro de él: asigna a `countArray` el resultado de llamar `countup(number - 1)`, usa `.push()` para agregar `number` al final de `countArray`, y devuelve `countArray`.

**✅ Respuesta:**
```js
} else {
  countArray = countup(number - 1);
  countArray.push(number);
  return countArray;
}
```

---

### Paso 5 — Probar con console.log

Llama a `countup` con el argumento `5` dentro de un `console.log()`. La salida en la consola debe ser `[1, 2, 3, 4, 5]`.

**✅ Respuesta:**
```js
console.log(countup(5));
```

---

## LABORATORIO 1 — Crear una cuenta regresiva

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-countdown/build-a-countdown`

Construye una función recursiva `countdown(n)` que devuelva un array con la cuenta regresiva desde `n` hasta `1`. Si `n` es menor que `1`, devuelve un array vacío.

**Requisitos:**
- `countdown(5)` → `[5, 4, 3, 2, 1]`
- `countdown(1)` → `[1]`
- `countdown(0)` → `[]`
- Debe usar recursión.

**✅ Solución:**
```js
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
```

---

## LABORATORIO 2 — Crear un generador de rango de números

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-range-of-numbers/build-a-range-of-numbers-generator`

Construye una función recursiva `rangeOfNumbers(startNum, endNum)` que devuelva un array con todos los enteros desde `startNum` hasta `endNum`, ambos inclusivos.

**Requisitos:**
- `rangeOfNumbers(1, 5)` → `[1, 2, 3, 4, 5]`
- `rangeOfNumbers(6, 9)` → `[6, 7, 8, 9]`
- Si `startNum === endNum`, devuelve `[startNum]`.
- Debe usar recursión.

**✅ Solución:**
```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else if (startNum === endNum) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```

---

## TALLER 2 — Construir un conversor de decimal a binario

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-decimal-to-binary-converter/step-N`

En este taller construirás una aplicación que convierte números decimales a binario usando recursión. También incluye una animación de la pila de llamadas para el caso especial `5`.

---

### Paso a paso del taller (pasos clave)

---

### Paso 1 — Obtener referencias del DOM

Declara cuatro constantes usando `document.getElementById` para los elementos: `number-input`, `convert-btn`, `result` y `animation-container`.

**✅ Respuesta:**
```js
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
```

---

### Paso 2 — Crear la función checkUserInput vacía

Declara la función flecha `checkUserInput` asignada a una constante.

**✅ Respuesta:**
```js
const checkUserInput = () => {

};
```

---

### Paso 3 — Parsear el valor de entrada

Dentro de `checkUserInput`, declara `inputInt` usando `parseInt` sobre `numberInput.value`.

**✅ Respuesta:**
```js
const inputInt = parseInt(numberInput.value);
```

---

### Paso 4 — Validar la entrada

Agrega un bloque `if` que muestre un `alert` si el campo está vacío, el valor no es un número, o es negativo. Luego agrega `return` para salir de la función.

**✅ Respuesta:**
```js
if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
  alert("Please provide a decimal number greater than or equal to 0");
  return;
}
```

---

### Paso 5 — Crear la función recursiva decimalToBinary

Declara la función flecha `decimalToBinary(input)`. Caso base: si `input` es `0` o `1`, devuelve `String(input)`. Caso recursivo: devuelve `decimalToBinary(Math.floor(input / 2)) + (input % 2)`.

**✅ Respuesta:**
```js
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};
```

---

### Paso 6 — Mostrar el resultado y limpiar el campo

Dentro de `checkUserInput`, asigna el resultado de `decimalToBinary(inputInt)` a `result.textContent` y limpia el campo.

**✅ Respuesta:**
```js
result.textContent = decimalToBinary(inputInt);
numberInput.value = "";
```

---

### Paso 7 — Agregar el event listener del botón

Conecta `checkUserInput` al evento `"click"` del botón.

**✅ Respuesta:**
```js
convertBtn.addEventListener("click", checkUserInput);
```

---

### Paso 8 — Agregar el event listener del teclado

Conecta un listener al evento `"keydown"` del input para ejecutar `checkUserInput` cuando se presione `Enter`.

**✅ Respuesta:**
```js
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
```

---

### Paso 9 — Crear el array animationData

Declara el array `animationData` con objetos que describen las llamadas recursivas para el caso especial `input = 5`. Cada objeto tiene `inputVal`, `addElDelay`, y opcionalmente `msg`, `showMsgDelay`, `removeElDelay`.

**✅ Respuesta:**
```js
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 10000,
    removeElDelay: 15000
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000
  }
];
```

---

### Paso 10 — Crear la función showAnimation

Declara `showAnimation` que primero asigna `"Call Stack Animation"` a `result.innerText`, luego itera sobre `animationData` usando `.forEach()` y `setTimeout` para agregar elementos `<p>` al contenedor de animación.

**✅ Respuesta:**
```js
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);
  });
};
```

---

### Paso 11 — Detectar el caso especial inputInt === 5

Dentro de `checkUserInput`, antes de mostrar el resultado normal, agrega un bloque `if` que detecte cuando `inputInt === 5` y llame a `showAnimation()` con un `return` para salir.

**✅ Respuesta:**
```js
if (inputInt === 5) {
  showAnimation();
  return;
}
```

---

### Solución final completa — script.js

```js
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 10000,
    removeElDelay: 15000
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000
  }
];

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);
  });
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
```

---

## LABORATORIO 3 — Crear un generador de permutaciones

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-permutations/build-a-permutation-generator`

Construye una función recursiva `permuteString(str, prefix)` que devuelva un array con todas las permutaciones únicas de los caracteres de la cadena. La técnica: fijar el carácter actual como prefijo y generar permutaciones del resto.

**Requisitos:**
- `permuteString("far")` → `["far", "fra", "afr", "arf", "rfa", "raf"]`
- `permuteString("fcc")` → `["fcc", "cfc", "ccf"]` (sin duplicados, ya que hay dos "c")
- `permuteString("p")` → `["p"]`
- `permuteString("")` → `[""]`
- Debe usar recursión.

**✅ Solución:**
```js
function permuteString(str, prefix = "") {
  if (str.length === 0) {
    return [prefix];
  }
  const result = [];
  const usedChars = new Set();
  for (let i = 0; i < str.length; i++) {
    if (usedChars.has(str[i])) continue;
    usedChars.add(str[i]);
    const newPrefix = prefix + str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    result.push(...permuteString(remaining, newPrefix));
  }
  return result;
}
```

**Cómo funciona:**
- Caso base: cuando `str` está vacío, el `prefix` acumulado es una permutación completa → devolver `[prefix]`.
- Caso recursivo: para cada carácter en `str`, si no se usó ya (Set evita duplicados), fijarlo en `newPrefix` y llamar recursivamente con el resto de la cadena.

---

## QUIZ — Cuestionario de Recursión (10 preguntas)

Necesitas 9/10 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Un proceso en el que una función se llama a sí misma. |
| 2 | La función factorial con caso base n === 0 o n === 1, que llama a n * factorial(n - 1) |
| 3 | 6 |
| 4 | 3 |
| 5 | Siempre debe tener un caso base. |
| 6 | if (number < 0) { return; } |
| 7 | Para proporcionar una forma de que la función salga de sus llamadas recursivas y evite bucles infinitos. |
| 8 | Causar un desbordamiento de pila. |
| 9 | Una estructura de datos que lleva el registro de las llamadas a funciones y su orden de ejecución. |
| 10 | Invierte una cadena. |

---

*Fin de la guía — Módulo: Recursión y la pila de llamadas*
