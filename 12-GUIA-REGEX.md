# Guía de Respuestas: Regex Básico
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué son las expresiones regulares y cuáles son algunos métodos comunes?

**Pregunta 1:** En JavaScript, ¿cómo se define una expresión regular básica?

**✅ Respuesta:** Usando barras diagonales: /pattern/

---

**Pregunta 2:** ¿Qué devuelve el método `test()` cuando se usa con una expresión regular?

**✅ Respuesta:** Un valor booleano.

---

**Pregunta 3:** ¿Qué sucede cuando utilizas el método `match()` con una expresión regular en una cadena que no contiene una coincidencia?

**✅ Respuesta:** Devuelve null.

---

### Lectura 2: ¿Cuáles son algunos modificadores comunes de expresiones regulares utilizados para buscar?

**Pregunta 1:** ¿Qué devolvería el siguiente código?

**✅ Respuesta:**
```
true
false
true
```

---

**Pregunta 2:** ¿Cuándo NO querrías usar el global (g) flag en una expresión regular?

**✅ Respuesta:** Cuando estás probando múltiples cadenas y no necesitas rastrear el estado de la coincidencia.

---

**Pregunta 3:** ¿Qué hace el modificador de líneas múltiples (m) en una expresión regular?

**✅ Respuesta:** Permite que los anclajes (^ y $) coincidan con el inicio y fin de cada línea, no solo con toda la cadena.

---

### Lectura 3: ¿Cómo puedes coincidir y reemplazar todas las apariciones en una cadena?

**Pregunta 1:** ¿Qué modificador se debe agregar a una expresión regular para coincidir con todas las ocurrencias de un patrón en una cadena?

**✅ Respuesta:** /g

---

**Pregunta 2:** ¿Cuál es la principal diferencia entre los métodos match() y matchAll() cuando se usan con una expresión regular global?

**✅ Respuesta:** match() devuelve un arreglo, mientras que matchAll() devuelve un Iterador.

---

**Pregunta 3:** Según la lección, ¿cómo puedes convertir el resultado de matchAll() en un arreglo que contenga todas las coincidencias?

**✅ Respuesta:** Usando Array.from() con el resultado como argumento.

---

### Lectura 4: ¿Qué son las clases de caracteres y cuáles son algunos ejemplos comunes?

**Pregunta 1:** ¿Qué clase de caracteres coincide con cualquier carácter único EXCEPTO los saltos de línea?

**✅ Respuesta:** .

---

**Pregunta 2:** ¿Con qué coincide la clase de caracteres \w?

**✅ Respuesta:** Cualquier letra, número o guion bajo.

---

**Pregunta 3:** ¿Cómo crearías una clase de caracteres personalizada que coincida con cualquier letra mayúscula o minúscula, pero NO números o guiones bajos?

**✅ Respuesta:** [a-zA-Z]

---

### Lectura 5: ¿Qué son las aserciones de anticipación y retroceso, y cómo funcionan?

**Pregunta 1:** ¿Cuál es la sintaxis para una aserción de anticipación positiva en una expresión regular?

**✅ Respuesta:** (?=pattern)

---

**Pregunta 2:** ¿Qué aserción usarías para coincidir una palabra solo si NO va seguida de un patrón específico?

**✅ Respuesta:** Anticipación negativa.

---

**Pregunta 3:** Cuando se usa una aserción de retroceso con String.prototype.match, ¿qué parte de la cadena está realmente incluida en el resultado de la coincidencia?

**✅ Respuesta:** El patrón después de la aserción de retroceso.

---

### Lectura 6: ¿Qué son los cuantificadores de expresiones regulares y cómo funcionan?

**Pregunta 1:** ¿Qué significa el cuantificador {4,6} en una expresión regular?

**✅ Respuesta:** Coincide al menos cuatro veces, pero no más de seis veces.

---

**Pregunta 2:** ¿Qué símbolo de cuantificador es equivalente a {0,1} en expresiones regulares?

**✅ Respuesta:** ?

---

**Pregunta 3:** ¿Qué significa el cuantificador + en una expresión regular?

**✅ Respuesta:** Coincide una o más veces.

---

### Lectura 7: ¿Qué son los grupos de captura y las referencias inversas, y cómo funcionan?

**Pregunta 1:** ¿Cómo creas un grupo de captura nombrado en una expresión regular?

**✅ Respuesta:** (?<name>pattern)

---

**Pregunta 2:** En un método replace(), ¿cómo harías referencia al primer grupo de captura en la cadena de reemplazo?

**✅ Respuesta:** $1

---

**Pregunta 3:** ¿Cuál es el propósito de un grupo de no captura en una expresión regular?

**✅ Respuesta:** Crear patrones alternativos sin sacrificar legibilidad o rendimiento

---

## TALLER — Filtro de Spam con Regex (`workshop-spam-filter`)

**Proyecto:** Construir un filtro de spam que detecte mensajes sospechosos usando expresiones regulares.

**Archivos:** `index.html` (provisto) + `styles.css` (provisto) + `script.js` (tú construyes)

---

### Paso 1 — Obtener los elementos del DOM

**Instrucción:** Obtén los elementos `#message-input`, `#result-message` y `#check-message-btn` del HTML y asígnalos a las variables `messageInput`, `result` y `checkMessageButton`.

**script.js:**
```js
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");
```

---

### Paso 2 — Agregar listener y validar entrada vacía

**Instrucción:** Añade un event listener al botón `checkMessageButton` escuchando el evento `"click"`. Si `messageInput.value` está vacío, muestra un alert con `"Please enter a message."` y detén la ejecución.

**Agrega en script.js:**
```js
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
});
```

---

### Paso 3 — Crear la función `isSpam`

**Instrucción:** Crea una función `isSpam` que tome un parámetro y retorne `false` por ahora. Colócala antes del event listener.

**Agrega en script.js:**
```js
const isSpam = (msg) => false;
```

---

### Paso 4 — Mostrar resultado con operador ternario

**Instrucción:** Dentro del event listener, después del `if`, actualiza `result.textContent` usando un ternario basado en `isSpam(messageInput.value)`. Luego limpia `messageInput.value`.

**Agrega dentro del callback del listener:**
```js
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
```

---

### Paso 5 — Crear la primera regex: `helpRegex`

**Instrucción:** Declara `helpRegex` como una expresión regular que coincida con la cadena `please help`.

**Agrega en script.js (antes de `isSpam`):**
```js
const helpRegex = /please help/;
```

---

### Paso 6 — Agregar la bandera `i` a `helpRegex`

**Instrucción:** Añade el modificador `i` para que la regex sea insensible a mayúsculas.

**Modifica la línea:**
```js
const helpRegex = /please help/i;
```

---

### Paso 7 — Usar `.test()` en `isSpam`

**Instrucción:** Actualiza `isSpam` para que use el método `.test()` de `helpRegex` sobre `msg` en vez de retornar `false`.

**Modifica:**
```js
const isSpam = (msg) => helpRegex.test(msg);
```

---

### Paso 8 — Usar `.match()` en `isSpam` (temporal)

**Instrucción:** Actualiza `isSpam` para que use `.match()` en `msg` pasando `helpRegex` como argumento.

**Modifica:**
```js
const isSpam = (msg) => msg.match(helpRegex);
```

---

### Paso 9 — Usar alternancia `|` en `helpRegex`

**Instrucción:** Actualiza `helpRegex` usando `|` para que coincida con `please help` **o** `assist me`.

**Modifica:**
```js
const helpRegex = /please help|assist me/i;
```

---

### Paso 10 — Crear el arreglo `denyList`

**Instrucción:** Declara `denyList` como un arreglo que contenga `helpRegex`.

**Agrega en script.js (entre `helpRegex` y `isSpam`):**
```js
const denyList = [helpRegex];
```

---

### Paso 11 — Usar `denyList.some()` en `isSpam`

**Instrucción:** Actualiza `isSpam` para que use `.some()` sobre `denyList`, verificando si alguna regex coincide con `msg`.

**Modifica:**
```js
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
```

---

### Paso 12 — Agregar `dollarRegex` a la lista

**Instrucción:** Declara `dollarRegex` como una regex insensible a mayúsculas que coincida con `dollars`. Agrégala al arreglo `denyList`.

**Modifica:**
```js
const dollarRegex = /dollars/i;

const denyList = [helpRegex, dollarRegex];
```

---

### Paso 13 — Agregar clase de caracteres `[0-9]`

**Instrucción:** Actualiza `dollarRegex` para que antes de `dollars` haya un dígito del 0 al 9 seguido de un espacio. Usa una clase de caracteres `[0-9]`.

**Modifica:**
```js
const dollarRegex = /[0-9] dollars/i;
```

---

### Paso 14 — Cuantificador `+` para uno o más dígitos

**Instrucción:** Añade el cuantificador `+` para que coincida con uno o más dígitos consecutivos antes de `dollars`.

**Modifica:**
```js
const dollarRegex = /[0-9]+ dollars/i;
```

---

### Paso 15 — Grupo de captura para denominaciones

**Instrucción:** Añade un grupo de captura entre los dígitos y `dollars` que acepte `hundred`, `thousand`, `million` o `billion` usando `|`.

**Modifica:**
```js
const dollarRegex = /[0-9]+ (hundred|thousand|million|billion) dollars/i;
```

---

### Paso 16 — Hacer opcional el grupo de captura con `?`

**Instrucción:** Añade `?` al grupo de captura para que sea opcional (también debe coincidir con `100 dollars`).

**Modifica:**
```js
const dollarRegex = /[0-9]+ (hundred|thousand|million|billion)? dollars/i;
```

---

### Paso 17 — Reemplazar espacios con `\s*` y `\s+`

**Instrucción:** Reemplaza el espacio literal antes del grupo de denominaciones con `\s*` (cero o más espacios), y el espacio antes de `dollars` con `\s+` (uno o más).

**Modifica:**
```js
const dollarRegex = /[0-9]+\s*(hundred|thousand|million|billion)?\s+dollars/i;
```

---

### Paso 18 — Usar grupo no capturador `(?:...)`

**Instrucción:** Convierte el grupo capturador en un grupo no capturador añadiendo `?:` después del paréntesis de apertura.

**Modifica:**
```js
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
```

---

### Paso 19 — Agregar `freeRegex` a la lista

**Instrucción:** Declara `freeRegex` como una regex insensible a mayúsculas que coincida con `free money`. Agrégala al arreglo `denyList`.

**Modifica:**
```js
const freeRegex = /free money/i;

const denyList = [helpRegex, dollarRegex, freeRegex];
```

---

### Paso 20 — Clases de caracteres para `e` y `3`

**Instrucción:** Reemplaza cada `e` en la regex con una clase de caracteres `[e3]` que coincida con la letra o el número.

**Modifica:**
```js
const freeRegex = /fr[e3][e3] mon[e3]y/i;
```

---

### Paso 21 — Clase de caracteres para `o` y `0`

**Instrucción:** Reemplaza la `o` con la clase de caracteres `[o0]`.

**Modifica:**
```js
const freeRegex = /fr[e3][e3] m[o0]n[e3]y/i;
```

---

### Paso 22 — Agregar `\s` al inicio y al final

**Instrucción:** Para evitar coincidencias parciales (ej. `hands-free money`), añade `\s` antes y después del patrón.

**Modifica:**
```js
const freeRegex = /\sfr[e3][e3] m[o0]n[e3]y\s/i;
```

---

### Paso 23 — Reemplazar primer `\s` con grupo no capturador

**Instrucción:** Reemplaza el primer `\s` con `(?:^|\s)` para que también coincida al inicio de la cadena.

**Modifica:**
```js
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y\s/i;
```

---

### Paso 24 — Reemplazar último `\s` con grupo no capturador

**Instrucción:** Reemplaza el último `\s` con `(?:$|\s)` para que también coincida al final de la cadena.

**Modifica:**
```js
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
```

---

### Paso 25 — Agregar `stockRegex` a la lista

**Instrucción:** Declara `stockRegex` como una regex insensible a mayúsculas que coincida con `stock alert`. Agrégala a `denyList`.

**Modifica:**
```js
const stockRegex = /stock alert/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex];
```

---

### Paso 26 — Clases de caracteres para `e/3` y `o/0` en stockRegex

**Instrucción:** Actualiza `stockRegex` reemplazando `e` con `[e3]` y `o` con `[o0]`.

**Modifica:**
```js
const stockRegex = /st[o0]ck al[e3]rt/i;
```

---

### Paso 27 — Clases de caracteres para `s/5` y `t/7`

**Instrucción:** Reemplaza `s` con `[s5]` y `t` con `[t7]` en ambas ocurrencias.

**Modifica:**
```js
const stockRegex = /[s5][t7][o0]ck al[e3]r[t7]/i;
```

---

### Paso 28 — Clase de caracteres para `a/@/4`

**Instrucción:** Reemplaza la `a` en `alert` con la clase `[a@4]` para coincidir con variaciones.

**Modifica:**
```js
const stockRegex = /[s5][t7][o0]ck [a@4]l[e3]r[t7]/i;
```

---

### Paso 29 — Clase de caracteres para `c/{/[/(`

**Instrucción:** Reemplaza la `c` en `stock` con la clase `[c{[(]` para coincidir con caracteres similares.

**Modifica:**
```js
const stockRegex = /[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7]/i;
```

---

### Paso 30 — Agregar límites de palabra a stockRegex

**Instrucción:** Añade grupos no capturadores `(?:^|\s)` al inicio y `(?:$|\s)` al final para que coincida solo con palabras completas.

**Modifica:**
```js
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
```

---

### Paso 31 — Agregar `dearRegex` a la lista

**Instrucción:** Declara `dearRegex` como una regex insensible a mayúsculas que coincida con `dear friend`. Agrégala a `denyList`.

**Modifica:**
```js
const dearRegex = /dear friend/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];
```

---

### Paso 32 — Finalizar `dearRegex` con clases y límites

**Instrucción:** Actualiza `dearRegex` para mapear vocales a números (`e→[e3]`, `a→[a@4]`, `i→[i1|]`), y agregar límites de palabra `(?:^|\s)` / `(?:$|\s)`.

**Modifica (código final de script.js):**
```js
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
```

---

## LABORATORIOS

---

### Lab 1: Verificador de Palíndromos (`lab-palindrome-checker`)

**Descripción:** Construir una aplicación completa con HTML, CSS y JS que verifique si un texto ingresado es un palíndromo (se lee igual al derecho y al revés, ignorando puntuación, mayúsculas y espacios).

**Elementos HTML requeridos:** `input#text-input`, `button#check-btn`, `div#result` (o `span` / `p`).

**Comportamiento:** Si el input está vacío → alert `"Please input a value"`. Si es palíndromo → `"[texto] is a palindrome"`. Si no → `"[texto] is not a palindrome"`.

**Solución — index.html:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Palindrome Checker</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <h1>Palindrome Checker</h1>
      <div class="container">
        <label for="text-input">Enter in text to check for a palindrome:</label>
        <div class="input-row">
          <input id="text-input" type="text" placeholder="Enter text" />
          <button id="check-btn">Check</button>
        </div>
        <div id="result" class="hidden"></div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

**Solución — styles.css:**
```css
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: #0a0a23;
  color: #fff;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2rem;
}

main {
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #f5f6f7;
}

.container {
  background-color: #1b1b32;
  border-radius: 8px;
  padding: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.input-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #3b3b4f;
  background: #2a2a40;
  color: #fff;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1.2rem;
  background-color: #f5f6f7;
  color: #1b1b32;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: #ddd;
}

#result {
  background-color: #2a2a40;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
}

#result.hidden {
  display: none;
}

.user-input strong {
  color: #acd157;
}
```

**Solución — script.js:**
```js
const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkForPalindrome = (input) => {
  const originalInput = input;

  if (input === "") {
    alert("Please input a value");
    return;
  }

  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a palindrome.`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  resultDiv.classList.remove("hidden");
};

checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = "";
  }
});
```

---

### Lab 2: Sandbox de Expresiones Regulares (`lab-regex-sandbox`)

**Descripción:** Construir una herramienta que permite probar expresiones regulares contra una cadena de texto, resaltando las coincidencias con un `span.highlight`.

**Elementos HTML provistos:** `#pattern`, `#test-string`, `#test-btn`, `#result`, `#i` (checkbox), `#g` (checkbox).

**Solución — index.html:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Regex Sandbox</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <h1>Regex Sandbox</h1>
      <div class="container">
        <label for="pattern">Regex Pattern:</label>
        <input id="pattern" type="text" placeholder="e.g. hello" />

        <label for="test-string">Test String:</label>
        <div id="test-string" contenteditable="true" class="test-string">Type your test string here...</div>

        <div class="flags-row">
          <label><input type="checkbox" id="i" /> Case insensitive (i)</label>
          <label><input type="checkbox" id="g" checked /> Global (g)</label>
        </div>

        <button id="test-btn">Test Regex</button>
        <div class="result-label">Matches:</div>
        <div id="result" class="result-box">—</div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

**Solución — styles.css:**
```css
*, *::before, *::after { box-sizing: border-box; }

body {
  background: #0a0a23;
  color: #fff;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
}

main { width: 100%; max-width: 540px; }

h1 { text-align: center; margin-bottom: 1.5rem; }

.container {
  background: #1b1b32;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

label { font-size: .9rem; color: #aaa; }

input[type="text"] {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #3b3b4f;
  background: #2a2a40;
  color: #fff;
  font-size: 1rem;
  font-family: monospace;
}

.test-string {
  min-height: 80px;
  padding: 0.75rem;
  background: #2a2a40;
  border: 1px solid #3b3b4f;
  border-radius: 4px;
  font-family: monospace;
  font-size: .95rem;
  line-height: 1.6;
  outline: none;
}

.highlight { background: #f5a623; color: #000; border-radius: 2px; }

.flags-row { display: flex; gap: 1.5rem; }
.flags-row label { display: flex; align-items: center; gap: .4rem; color: #fff; cursor: pointer; }

button {
  padding: 0.5rem 1.2rem;
  background: #f5f6f7;
  color: #1b1b32;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
}

button:hover { background: #ddd; }

.result-label { font-size: .85rem; color: #aaa; margin-top: .4rem; }

.result-box {
  background: #2a2a40;
  border: 1px solid #3b3b4f;
  border-radius: 4px;
  padding: 0.6rem 1rem;
  font-family: monospace;
  font-size: .9rem;
  color: #acd157;
  min-height: 36px;
}
```

**Solución — script.js:**
```js
const regexPattern = document.getElementById("pattern");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");
const testResult = document.getElementById("result");

const getFlags = () => {
  let flags = '';
  const flagArray = [caseInsensitiveFlag, globalFlag];
  flagArray.forEach((flag) => {
    if (flag.checked) flags += flag.id;
  });
  return flags;
};

const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");

testButton.addEventListener("click", () => {
  const flags = getFlags();
  const regex = new RegExp(regexPattern.value, flags);
  stringToTest.innerHTML = stringToTest.innerText.replace(
    regex,
    '<span class="highlight">$&</span>'
  );
  const matched = stringToTest.innerText.match(regex);
  testResult.innerText = matched ? matched.join(", ") : "no match";
});
```

---

### Lab 3: Convertidor a Spinal Case (`lab-spinal-case-converter`)

**Descripción:** Crear la función `spinalCase(str)` que convierte cualquier formato de string (CamelCase, snake_case, espacios) al formato `spinal-case` (todo en minúsculas separado por guiones).

**Solución — script.js:**
```js
function spinalCase(str) {
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```

---

### Lab 4: Traductor de Pig Latin (`lab-pig-latin`)

**Descripción:** Crear la función `translatePigLatin(str)` que traduce una palabra al Pig Latin: si empieza con consonante(s), mueve el grupo consonántico al final y añade `"ay"`; si empieza con vocal, añade `"way"`.

**Solución — script.js:**
```js
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  let front = [];
  str = str.split('');
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join('') + 'ay';
}

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
```

---

### Lab 5: Reemplazo Inteligente de Palabras (`lab-smart-word-replacement`)

**Descripción:** Crear la función `myReplace(str, before, after)` que reemplaza una palabra en un texto, preservando la capitalización de la primera letra de la palabra original.

**Solución — script.js:**
```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```

---

## QUIZ — Cuestionario de Expresiones Regulares en JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | `"hello, world!"` |
| 2 | `new RegExp("f[o0]{2} b[a4@]r", "i")` |
| 3 | Un booleano que indica si la cadena coincide con la expresión regular. |
| 4 | Busca la primera coincidencia completa, y devuelve un arreglo que contiene esa primera coincidencia. |
| 5 | Para verificar si una cadena dada coincide con la expresión regular. |
| 6 | Para reemplazar una cadena coincidente con una cadena de reemplazo dada. |
| 7 | `match` devuelve un arreglo de cadenas que coinciden, mientras que `matchAll` devuelve un objeto iterador de todas las coincidencias encontradas. |
| 8 | `foo.replaceAll(/foobar/g, "fizzbuzz")` |
| 9 | `\w` |
| 10 | `\d` |
| 11 | Un lookahead verifica a la derecha de la cadena, asegurando que el subpatrón ESTÉ presente. |
| 12 | El lookbehind debe colocarse a la izquierda del patrón principal de la expresión regular. |
| 13 | `?` |
| 14 | `/^\d{1,6}$/` |
| 15 | Puede definir un conjunto personalizado de caracteres para coincidir. |
| 16 | `[A-Z]` |
| 17 | El grupo de captura intenta coincidir con el subpatrón dado, y continúa con el resultado en memoria. |
| 18 | El grupo no capturante intenta coincidir con el subpatrón dado, y continúa sin mantener el resultado en memoria. |
| 19 | `regex.test("cat   cat");` |
| 20 | Coincide con cualquier carácter individual excepto una nueva línea. |

---

*Fin de la guía — Módulo: Regex Básico*
