# Guía de Respuestas: Depuración de JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Cuáles son algunos ejemplos de errores comunes de JavaScript?

**Pregunta 1:** ¿Qué causa un SyntaxError en JavaScript?

**✅ Respuesta:** Escribir algo incorrectamente en tu código, como faltar un paréntesis o punto y coma.

---

**Pregunta 2:** ¿Qué sucederá si intentas llamar a una variable que tiene un número como si fuera una función?

**✅ Respuesta:** TypeError

---

**Pregunta 3:** ¿Qué error ocurre cuando asignas un valor inválido, como -1, a la length de un arreglo?

**✅ Respuesta:** RangeError

---

### Lectura 2: ¿Cómo funciona la instrucción throw?

**Pregunta 1:** ¿Qué ocurre al usar la instrucción throw en JavaScript?

**✅ Respuesta:** Lanza una expresión de error y detiene el programa si no se encuentra un manejador de errores.

---

**Pregunta 2:** ¿Cómo te aseguras de que el código funcione sin problemas después de que ocurra un error?

**✅ Respuesta:** Usa la sintaxis try...catch para manejar el error y permitir que la ejecución del código continúe.

---

**Pregunta 3:** ¿Cómo usas la sentencia throw en combinación con la estructura Error en JavaScript?

**✅ Respuesta:** throw new Error();

---

### Lectura 3: ¿Cómo funciona la instrucción debugger?

**Pregunta 1:** ¿Para qué se usa el debugger?

**✅ Respuesta:** Pausando la ejecución del código.

---

**Pregunta 2:** ¿Qué comportamiento adicional proporcionan los navegadores modernos al encontrar una declaración debugger?

**✅ Respuesta:** Continúan recargando la página y le permiten reanudar haciendo clic en el botón de reproducción.

---

**Pregunta 3:** ¿Cuál será la salida del siguiente código mientras la consola esté abierta?

```js
let firstNumber = 23;
let secondNumber = 4;
debugger;
let sum = firstNumber + secondNumber;
console.log(sum);
```

**✅ Respuesta:** La ejecución del código se pausa en la declaración debugger.

---

### Lectura 4: ¿Cómo funciona try...catch...finally?

**Pregunta 1:** ¿Qué describe mejor el bloque try?

**✅ Respuesta:** Es un envoltorio seguro para código que podría lanzar un error.

---

**Pregunta 2:** ¿Qué bloque siempre se ejecuta incluso si ocurre un error?

**✅ Respuesta:** finally

---

**Pregunta 3:** ¿Cuál es el propósito del bloque catch?

**✅ Respuesta:** Para manejar errores de manera elegante sin bloquear el programa.

---

### Lectura 5: ¿Cuáles son algunos ejemplos de técnicas avanzadas de depuración de JavaScript?

**Pregunta 1:** ¿En qué pestaña de las herramientas de desarrollo de Chrome tienes acceso para añadir puntos de interrupción?

**✅ Respuesta:** Pestaña de fuentes.

---

**Pregunta 2:** ¿Qué permiten hacer las expresiones de observación?

**✅ Respuesta:** Monitorear los valores de variables o expresiones, incluso si están fuera del alcance actual.

---

**Pregunta 3:** ¿Qué método puedes usar para ver una lista interactiva de propiedades del objeto de JavaScript que transmites?

**✅ Respuesta:** console.dir()

---

## LABORATORIOS

---

### Lab: Cambiador de Color de Fondo Aleatorio (`lab-random-background-color-changer`)

**Tipo:** Depuración — encontrar y corregir 10 errores en el código.

**Descripción:** Tienes un script con múltiples errores. El botón "Change Background Color" debería cambiar el fondo de la página a un color oscuro aleatorio y mostrar su código hexadecimal.

**Código inicial (con errores) — script.js:**

```js
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C"
  "#616A6B"
  "#4A235A"
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  const randomIndex = darkColorsArr.length * math.random();
  return randomIndex;
}

const body = document.queryselector("body");
const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex];
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

const btn = document.querySelector("#click-btn");
btn.addEventListener("click", changeBackgroundColor());
```

**Errores a corregir:**

1. Falta coma después de `"#2C2C2C"`
2. Falta coma después de `"#616A6B"`
3. Falta coma después de `"#4A235A"`
4. `math.random()` → `Math.random()` (la M debe ser mayúscula)
5. Falta `Math.floor(...)` alrededor del cálculo para obtener un entero
6. `document.queryselector` → `document.querySelector` (la S debe ser mayúscula)
7. `"bg-hex-code"` → `"#bg-hex-code"` (falta el `#` para selector de ID)
8. `darkColorsArr[getRandomIndex]` → `darkColorsArr[getRandomIndex()]` (falta llamar la función con paréntesis)
9. `"#click-btn"` → `"#btn"` (ID incorrecto en el HTML)
10. `changeBackgroundColor()` → `changeBackgroundColor` (pasar referencia, no llamar la función en addEventListener)

**Solución — script.js:**

```js
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", changeBackgroundColor);
```

---

## REVISIÓN — Temas cubiertos

---

### Tipos comunes de errores en JavaScript

- **`SyntaxError`:** Ocurre cuando escribes algo incorrectamente en tu código, como olvidar un paréntesis o un corchete. Es como un error gramatical en una oración.
  ```js
  const arr = ["Beau", "Quincy" "Tom"] // falta coma
  ```
- **`ReferenceError`:** Se produce cuando intentas usar una variable que no ha sido definida, o cuando intentas acceder a una variable declarada con `let` o `const` antes de su inicialización.
  ```js
  console.log(price); // ReferenceError: price is not defined
  ```
- **`TypeError`:** Ocurre cuando intentas realizar una operación en el tipo de dato incorrecto.
  ```js
  const obj = { name: "Jessica" };
  obj.map(); // TypeError: obj.map is not a function
  ```
- **`RangeError`:** Sucede cuando tu código intenta usar un valor fuera del rango que JavaScript puede manejar.
  ```js
  const arr = [];
  arr.length = -1; // RangeError
  ```

### La instrucción `throw`

- **Definición:** Se usa para lanzar una excepción definida por el usuario. Una excepción es cuando ocurre un evento inesperado que interrumpe el flujo normal del programa.
- **Sintaxis:** `throw expression;`
- Se pueden lanzar objetos de error incorporados: `Error`, `TypeError`, `RangeError`.
  ```js
  throw new TypeError("Se esperaba un número");
  throw new Error("No se puede dividir por cero");
  ```

### `try...catch...finally`

- **`try`:** Envuelve el código que podría lanzar un error. Es un espacio seguro para intentar algo que podría fallar.
- **`catch`:** Captura y maneja los errores que ocurren en el bloque `try`. Recibe el objeto de error para inspeccionar qué salió mal.
- **`finally`:** Se ejecuta después de los bloques `try` y `catch`, independientemente de si ocurrió un error. Se usa comúnmente para tareas de limpieza.
  ```js
  try {
    const resultado = procesarDato(entrada);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    // siempre se ejecuta
  }
  ```

### Técnicas de depuración

- **Instrucción `debugger`:** Pausa la ejecución del código en una línea específica para investigar el estado del programa. Solo funciona si las herramientas de desarrollo del navegador están abiertas.
  ```js
  let x = 5;
  debugger; // la ejecución se pausa aquí
  let y = x * 2;
  ```
- **Puntos de interrupción (Breakpoints):** Permiten pausar la ejecución en una línea específica desde la pestaña **Sources** de las herramientas de desarrollo. Puedes inspeccionar variables, evaluar expresiones y examinar la pila de llamadas.
- **Expresiones de observación (Watch expressions):** Monitorean los valores de variables o expresiones mientras el código se ejecuta, incluso si están fuera del alcance actual. Se configuran en la pestaña Sources.
- **Perfilado (Profiling):** Ayuda a identificar cuellos de botella de rendimiento. Registra el uso de CPU, llamadas a funciones y tiempo de ejecución desde la pestaña **Performance**.
- **`console.dir(objeto)`:** Muestra una lista interactiva y jerárquica de las propiedades del objeto JavaScript especificado.
  ```js
  console.dir(document);
  ```
- **`console.table(datos)`:** Muestra datos tabulares como una tabla en la consola. Acepta un array u objeto.
- **`console.error(msg)`:** Registra mensajes de error; en muchos navegadores aparece en rojo en la consola.

---

## QUIZ — Quiz de depuración de JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | `ReferenceError` |
| 2 | `debugger` |
| 3 | `console.table()` |
| 4 | Usando la pestaña "Red". |
| 5 | `try { ... } catch(error) { ... }` |
| 6 | Falta una coma entre elementos de un array. |
| 7 | Pausa la ejecución en un punto específico. |
| 8 | Se lanza una excepción y se ejecuta el bloque catch (si está presente). |
| 9 | `console.log()` |
| 10 | `ReferenceError` |
| 11 | Puntos de interrupción en las herramientas para desarrolladores. |
| 12 | `TypeError` |
| 13 | Siempre se ejecuta, independientemente de los errores. |
| 14 | El código lanzará un RangeError. |
| 15 | La declaración debugger se ignora cuando las herramientas para desarrolladores no están abiertas. |
| 16 | Para identificar cuellos de botella en el rendimiento grabando el uso de CPU, llamadas de función y tiempo de ejecución. |
| 17 | Una herramienta para monitorear el valor de las variables. |
| 18 | Para registrar mensajes de error. |
| 19 | Crea un nuevo objeto de error que se puede lanzar. |
| 20 | Para generar una lista jerárquica e interactiva de propiedades para un objeto específico de JavaScript. |

---

*Fin de la guía — Módulo: Depuración de JavaScript*
