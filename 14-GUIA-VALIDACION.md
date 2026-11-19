# Guía de Respuestas: Validación de formularios con JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Cuáles son algunas formas de validar formularios usando JavaScript?

**Pregunta 1:** ¿Qué método de la API de Validación de Restricciones se usa para verificar si un elemento de entrada cumple con todas sus restricciones de validación?

**✅ Respuesta:** checkValidity()

---

**Pregunta 2:** ¿Cuál es el propósito del método `setCustomValidity()` en la validación de formularios?

**✅ Respuesta:** Para mostrar un mensaje de error personalizado para entradas no válidas.

---

**Pregunta 3:** ¿Qué propiedad del objeto `validity` se vuelve verdadera cuando un campo de entrada requerido se deja vacío?

**✅ Respuesta:** valueMissing

---

### Lectura 2: ¿Cuál es el propósito del método preventDefault()?

**Pregunta 1:** ¿Cuál es el propósito principal del método `preventDefault()` en el manejo de eventos?

**✅ Respuesta:** Para detener el comportamiento predeterminado de un evento.

---

**Pregunta 2:** En el ejemplo dado, ¿qué comportamiento predeterminado se está evitando al llamar a `preventDefault()` en un evento de `keydown` para un elemento `input`?

**✅ Respuesta:** La tecla se muestra en el campo de entrada.

---

**Pregunta 3:** Cuando usa `preventDefault()`, ¿qué consideración importante deben tener en cuenta los desarrolladores?

**✅ Respuesta:** Debe mantener las mismas características que el comportamiento predeterminado para la accesibilidad.

---

### Lectura 3: ¿Cómo funciona el evento Submit con los formularios?

**Pregunta 1:** ¿Cuál de las siguientes NO es una forma de enviar un formulario HTML?

**✅ Respuesta:** Haciendo doble clic en cualquier parte dentro del formulario.

---

**Pregunta 2:** ¿Qué ocurre cuando el atributo `action` de un formulario no está configurado?

**✅ Respuesta:** Los datos del formulario se envían a la URL de la página actual.

---

**Pregunta 3:** ¿Qué valor de `enctype` se debe usar cuando un formulario incluye carga de archivos?

**✅ Respuesta:** multipart/form-data

---

## TALLERES

---

### Taller: Envelope Budget App (59 pasos)

> **Archivos:** `index.html` / `script.js` / `styles.css`

**styles.css** (no cambia durante todo el taller):

```css
:root {
  --light-grey: #f5f6f7;
  --dark-blue: #0a0a23;
  --fcc-blue: #1b1b32;
  --light-yellow: #fecc4c;
  --dark-yellow: #feac32;
  --light-pink: #ffadad;
  --dark-red: #850000;
  --light-green: #acd157;
}
body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--fcc-blue);
  color: var(--light-grey);
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
h1 { text-align: center; margin-top: 30px; font-size: 2em; }
.container { width: 90%; max-width: 680px; margin: 20px auto; padding: 20px; background-color: var(--dark-blue); border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.2); }
label, legend { font-weight: bold; margin-bottom: 5px; }
fieldset { border: 1px solid var(--light-grey); border-radius: 4px; padding: 10px 15px; margin-bottom: 20px; }
legend { padding: 0 8px; }
.input-container { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }
input, select, button { font-size: 16px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; min-height: 32px; box-sizing: border-box; }
input:focus, select:focus, button:focus { outline: 2px solid var(--light-yellow); border-color: var(--dark-yellow); }
button { cursor: pointer; text-decoration: none; background-color: var(--light-yellow); border: 2px solid var(--dark-yellow); transition: background-color 0.2s ease, border 0.2s ease; }
button:hover { background-color: var(--dark-yellow); color: white; }
.controls { margin-bottom: 20px; }
.controls span { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.output { border: 2px solid var(--light-grey); padding: 15px; text-align: center; background-color: var(--dark-blue); border-radius: 6px; margin-top: 20px; }
.output span { font-weight: bold; font-size: 1.4em; }
.surplus { color: var(--light-green); }
.deficit { color: var(--light-pink); }
.hide { display: none; }
@media (max-width: 600px) { body { font-size: 16px; } .controls span { flex-direction: column; align-items: stretch; } button, input, select { width: 100%; } }
```

---

#### Paso 1
**Qué hacer:** Agrega un elemento `<form id="budget-form">` vacío dentro del `div.container`.

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Envelope Budgeter</title>
  </head>
  <body>
    <main>
      <h1>Envelope Budgeter</h1>
      <div class="container">
        <form id="budget-form">
        </form>
      </div>
    </main>
  </body>
</html>
```

---

#### Paso 2
**Qué hacer:** Dentro del formulario, agrega un elemento `label` con `for="income"` y el texto "Total Monthly Income", seguido de un campo `input` con `id="income"`.

**Cambio dentro del `<form>`:**
```html
        <form id="budget-form">
          <label for="income">Total Monthly Income</label>
          <input id="income" />
        </form>
```

---

#### Paso 3
**Qué hacer:** Agrega los atributos `type="number"`, `min="0"`, `placeholder="e.g. 2000"` y `required` al input de ingresos.

**Línea actualizada:**
```html
          <input type="number" min="0" id="income" placeholder="e.g. 2000" required />
```

---

#### Paso 4
**Qué hacer:** Después del input de ingresos, agrega un `fieldset` con `id="rent"` que contenga una `legend` "Rent", un `label` "Amount" y un `input` numérico para la renta.

**Nuevo bloque:**
```html
          <fieldset id="rent">
            <legend>Rent</legend>
            <label for="rent-amount">Amount</label>
            <input type="number" min="0" id="rent-amount" placeholder="e.g. 1000" />
          </fieldset>
```

---

#### Paso 5
**Qué hacer:** Agrega un `fieldset` con `id="food"` que contenga una `legend` "Food" y un `div` con clase `input-container`.

**Nuevo bloque:**
```html
          <fieldset id="food">
            <legend>Food</legend>
            <div class="input-container"></div>
          </fieldset>
```

---

#### Paso 6
**Qué hacer:** Agrega un `fieldset` con `id="utilities"` que contenga una `legend` "Utilities" y un `div` con clase `input-container`.

**Nuevo bloque:**
```html
          <fieldset id="utilities">
            <legend>Utilities</legend>
            <div class="input-container"></div>
          </fieldset>
```

---

#### Paso 7
**Qué hacer:** Agrega un `fieldset` con `id="entertainment"` que contenga una `legend` "Entertainment" y un `div` con clase `input-container`.

**Nuevo bloque:**
```html
          <fieldset id="entertainment">
            <legend>Entertainment</legend>
            <div class="input-container"></div>
          </fieldset>
```

---

#### Paso 8
**Qué hacer:** Después de los fieldsets, agrega un `div class="controls"` con un `span` vacío dentro.

**Nuevo bloque:**
```html
          <div class="controls">
            <span></span>
          </div>
```

---

#### Paso 9
**Qué hacer:** Dentro del `span`, agrega un `label` con `for="entry-dropdown"`, un `select` con `id="entry-dropdown"` y un botón `type="button"` con `id="add-entry"`.

**Bloque actualizado:**
```html
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add expense to:</label>
              <select id="entry-dropdown" name="options"></select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
```

---

#### Paso 10
**Qué hacer:** Dentro del `select`, agrega tres opciones: "Food" (seleccionada por defecto), "Utilities" y "Entertainment".

**Select actualizado:**
```html
              <select id="entry-dropdown" name="options">
                <option value="food" selected>Food</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
              </select>
```

---

#### Paso 11
**Qué hacer:** Después de `div.controls`, agrega un `div` con dos botones: "Calculate Remaining Budget" (tipo `submit`) y "Clear" (tipo `button` con `id="clear"`).

**Nuevo bloque:**
```html
          <div>
            <button type="submit">Calculate Remaining Budget</button>
            <button type="button" id="clear">Clear</button>
          </div>
```

---

#### Paso 12
**Qué hacer:** Después del `</form>`, agrega un `div` con `id="output"` y las clases `output hide`.

**Nueva línea:**
```html
        <div id="output" class="output hide"></div>
```

---

#### Paso 13
**Qué hacer:** Vincula el archivo JavaScript al HTML usando el elemento `script` con `src="./script.js"`, colocándolo después de `</main>` y antes de `</body>`.

**index.html completo (estado final del HTML para todo el taller):**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Envelope Budgeter</title>
  </head>
  <body>
    <main>
      <h1>Envelope Budgeter</h1>
      <div class="container">
        <form id="budget-form">
          <label for="income">Total Monthly Income</label>
          <input type="number" min="0" id="income" placeholder="e.g. 2000" required />
          <fieldset id="rent">
            <legend>Rent</legend>
            <label for="rent-amount">Amount</label>
            <input type="number" min="0" id="rent-amount" placeholder="e.g. 1000" />
          </fieldset>
          <fieldset id="food">
            <legend>Food</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="utilities">
            <legend>Utilities</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="entertainment">
            <legend>Entertainment</legend>
            <div class="input-container"></div>
          </fieldset>
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add expense to:</label>
              <select id="entry-dropdown" name="options">
                <option value="food" selected>Food</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit">Calculate Remaining Budget</button>
            <button type="button" id="clear">Clear</button>
          </div>
        </form>
        <div id="output" class="output hide"></div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

**script.js** (vacío al iniciar):
```js

```

---

#### Paso 14
**Qué hacer:** Obtén el elemento `form` usando `getElementById('budget-form')` y guárdalo en una variable `budgetForm`.

**script.js** (primera aparición completa):
```js
const budgetForm = document.getElementById("budget-form");
```

---

#### Paso 15
**Qué hacer:** Obtén los elementos `#income`, `#rent-amount` y `#entry-dropdown` usando `getElementById` y asígnalos a `incomeInput`, `rentInput` y `entryDropdown`.

**Líneas añadidas:**
```js
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
```

---

#### Paso 16
**Qué hacer:** Obtén los elementos `#add-entry`, `#clear` y `#output` y asígnalos respectivamente a `addEntryButton`, `clearButton` y `output`.

**Líneas añadidas:**
```js
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
```

---

#### Paso 17
**Qué hacer:** Declara una variable `isError` usando `let` e inicialízala con el valor `false`. Esta variable rastreará si el usuario ingresó un valor inválido.

**Línea añadida:**
```js
let isError = false;
```

---

#### Paso 18
**Qué hacer:** Declara una función vacía `cleanInputString` que reciba un parámetro `str`. Los valores de los campos `input` llegan como cadenas de texto; esta función los limpiará.

**Línea añadida:**
```js
function cleanInputString(str) {}
```

---

#### Paso 19
**Qué hacer:** Dentro de la función, declara una variable `regex` y asígnale la expresión regular `/hello/`. En pasos siguientes se actualizará este patrón.

**Dentro de `cleanInputString`:**
```js
function cleanInputString(str) {
  const regex = /hello/;
}
```

---

#### Paso 20
**Qué hacer:** Reemplaza el patrón `/hello/` con `/\+-/` para detectar signos `+` y `-`. El `\` escapa el `+` que tiene significado especial en expresiones regulares.

**Regex actualizada:**
```js
  const regex = /\+-/;
```

---

#### Paso 21
**Qué hacer:** Agrega la clase abreviada `\s` al final del patrón para incluir también espacios en blanco.

**Regex actualizada:**
```js
  const regex = /\+-\s/;
```

---

#### Paso 22
**Qué hacer:** Convierte el patrón en una clase de caracteres `[+-\s]` usando corchetes, para que coincida con cada carácter de forma individual (ya no se necesita escapar el `+`).

**Regex actualizada:**
```js
  const regex = /[+-\s]/;
```

---

#### Paso 23
**Qué hacer:** Agrega la bandera `g` (global) a la expresión regular para que encuentre todas las coincidencias en lugar de solo la primera.

**Regex actualizada:**
```js
  const regex = /[+-\s]/g;
```

---

#### Paso 24
**Qué hacer:** Usa el método `.replace()` sobre `str` pasando `regex` como primer argumento y una cadena vacía `""` como segundo argumento. Retorna el resultado directamente.

**Función completada:**
```js
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
```

---

#### Paso 25
**Qué hacer:** Agrega un `console.log("original string: ", str)` al inicio de `cleanInputString` para verificar que la función recibe los valores correctos.

**Función con log de prueba:**
```js
function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
```

---

#### Paso 26
**Qué hacer:** Después de la función, agrega `console.log(cleanInputString("+-99"))` para ver el resultado en la consola. Deberías ver la cadena original y el valor limpio `"99"`.

**Línea añadida al final del script:**
```js
console.log(cleanInputString("+-99"));
```

---

#### Paso 27
**Qué hacer:** Elimina ambos `console.log` de prueba (el de dentro de la función y el de fuera).

**Estado de script.js después de limpiar:**
```js
const budgetForm = document.getElementById("budget-form");
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
```

---

#### Paso 28
**Qué hacer:** Los campos numéricos de HTML permiten notación exponencial como `1e10`. Declara una función vacía `isInvalidInput` que reciba el parámetro `str` para detectar estos casos.

**Línea añadida:**
```js
function isInvalidInput(str) {}
```

---

#### Paso 29
**Qué hacer:** Dentro de `isInvalidInput`, declara una variable `regex` y asígnale la expresión regular `/e/` para comenzar a detectar la notación exponencial.

**Dentro de `isInvalidInput`:**
```js
function isInvalidInput(str) {
  const regex = /e/;
}
```

---

#### Paso 30
**Qué hacer:** Agrega la bandera `i` a la expresión regular para que detecte tanto `e` minúscula como `E` mayúscula.

**Regex actualizada:**
```js
  const regex = /e/i;
```

---

#### Paso 31
**Qué hacer:** Agrega la clase de caracteres `[0-9]` antes y después de `e` en el patrón, ya que en notación científica válida la `e` aparece entre dígitos.

**Regex actualizada:**
```js
  const regex = /[0-9]e[0-9]/i;
```

---

#### Paso 32
**Qué hacer:** Agrega el modificador `+` después de cada clase `[0-9]` para que coincidan uno o más dígitos (ej. `10e3`, `1e10`).

**Regex actualizada:**
```js
  const regex = /[0-9]+e[0-9]+/i;
```

---

#### Paso 33
**Qué hacer:** Reemplaza las clases `[0-9]` con la clase abreviada `\d` que hace lo mismo de forma más concisa.

**Regex actualizada:**
```js
  const regex = /\d+e\d+/i;
```

---

#### Paso 34
**Qué hacer:** Retorna el resultado de llamar al método `.match()` sobre `str` con `regex` como argumento. `.match()` devuelve un arreglo si hay coincidencia o `null` si no la hay.

**Función completada:**
```js
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
```

---

#### Paso 35
**Qué hacer:** Agrega `console.log(isInvalidInput("1e3"))` después de la función para probarla con notación científica. En la consola verás un arreglo con los detalles de la coincidencia.

**Línea añadida:**
```js
console.log(isInvalidInput("1e3"));
```

---

#### Paso 36
**Qué hacer:** Actualiza el `console.log` para probar con un valor válido: `console.log(isInvalidInput("10"))`. En la consola verás `null`, lo que indica que el input es válido.

**Línea actualizada:**
```js
console.log(isInvalidInput("10"));
```

---

#### Paso 37
**Qué hacer:** Elimina el `console.log` de prueba. El valor `null` que devuelve `.match()` cuando no hay coincidencia es falsy en JavaScript, útil para validaciones condicionales.

**Estado limpio — script.js añade `isInvalidInput` completa:**
```js
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
```

---

#### Paso 38
**Qué hacer:** Agrega `console.log(entryDropdown.value)` para ver el valor actual del menú desplegable. Como está en contexto estático, solo captura el valor inicial `"food"`.

**Línea añadida:**
```js
console.log(entryDropdown.value);
```

---

#### Paso 39
**Qué hacer:** Elimina el `console.log` y declara una función vacía `addEntry` sin parámetros. Esta función permitirá al usuario agregar entradas de gastos.

**Línea añadida:**
```js
function addEntry() {}
```

---

#### Paso 40
**Qué hacer:** Dentro de `addEntry`, obtén el valor del menú desplegable con `entryDropdown.value` y asígnalo a una variable `category`.

**Dentro de `addEntry`:**
```js
function addEntry() {
  const category = entryDropdown.value;
}
```

---

#### Paso 41
**Qué hacer:** Declara `targetInputContainer` y asígnale `document.querySelector()` usando concatenación para combinar `"#"`, la variable `category` y `" .input-container"`.

**Línea añadida:**
```js
  const targetInputContainer = document.querySelector("#" + category + " .input-container");
```

---

#### Paso 42
**Qué hacer:** Reemplaza la concatenación por un literal de plantilla (template literal) en el `querySelector`. Los literales de plantilla usan comillas invertidas y `${}` para interpolar variables.

**Línea actualizada:**
```js
  const targetInputContainer = document.querySelector(`#${category} .input-container`);
```

---

#### Paso 43
**Qué hacer:** Declara `entryNumber` y asígnale el resultado de `targetInputContainer.querySelectorAll()` sin argumento aún. Este método devuelve un `NodeList`.

**Línea añadida:**
```js
  const entryNumber = targetInputContainer.querySelectorAll();
```

---

#### Paso 44
**Qué hacer:** Pasa `'input[type="text"]'` al método `querySelectorAll()` y accede a la propiedad `.length` para contar las entradas de texto existentes.

**Línea actualizada:**
```js
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
```

---

#### Paso 45
**Qué hacer:** Declara `HTMLString` y asígnale una cadena de literal de plantilla vacía. Esta cadena contendrá el HTML dinámico para cada entrada.

**Línea añadida:**
```js
  const HTMLString = `
  `;
```

---

#### Paso 46
**Qué hacer:** Dentro del literal de plantilla, crea un elemento `label` con el texto `Expense ${entryNumber} Name`.

**HTMLString actualizado:**
```js
  const HTMLString = `
  <label>Expense ${entryNumber} Name</label>
  `;
```

---

#### Paso 47
**Qué hacer:** Agrega el atributo `for="${category}-${entryNumber}-name"` al elemento `label` para vincularlo con el input que se creará.

**Label actualizado:**
```js
  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  `;
```

---

#### Paso 48
**Qué hacer:** Agrega un elemento `input` en una nueva línea con `type="text"`, `placeholder="Name"` e `id` igual al atributo `for` del label.

**HTMLString actualizado:**
```js
  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  `;
```

---

#### Paso 49
**Qué hacer:** Crea otro elemento `label` con `for="${category}-${entryNumber}-amount"` y el texto `Expense ${entryNumber} Amount`.

**HTMLString actualizado:**
```js
  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
  `;
```

---

#### Paso 50
**Qué hacer:** Agrega un segundo `input` con `type="number"`, `min="0"`, `placeholder="Amount"` e `id="${category}-${entryNumber}-amount"`.

**HTMLString completado:**
```js
  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
  <input type="number" min="0" id="${category}-${entryNumber}-amount" placeholder="Amount" />`;
```

---

#### Paso 51
**Qué hacer:** Usa el operador `+=` para agregar `HTMLString` a `targetInputContainer.innerHTML`. Esto inserta el nuevo HTML en el contenedor de entradas.

**Línea añadida:**
```js
  targetInputContainer.innerHTML += HTMLString;
```

---

#### Paso 52
**Qué hacer:** Llama a `addEntryButton.addEventListener("click", addEntry)` para que se ejecute `addEntry` cada vez que el usuario haga clic en el botón "Add Entry". Pasa la referencia a la función, no la invocación.

**Línea añadida al final del script:**
```js
addEntryButton.addEventListener("click", addEntry);
```

---

#### Paso 53
**Qué hacer:** Corrige el conteo de entradas sumando `1` al resultado del `.length`. El conteo debe empezar en `1` (no en `0`) porque la consulta se ejecuta antes de agregar el nuevo elemento.

**Línea corregida:**
```js
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
```

---

#### Paso 54
**Qué hacer:** Reemplaza `targetInputContainer.innerHTML += HTMLString` por `targetInputContainer.insertAdjacentHTML()` sin argumentos. El método `innerHTML +=` borra los valores existentes al reasignar el HTML.

**Línea actualizada:**
```js
  targetInputContainer.insertAdjacentHTML();
```

---

#### Paso 55
**Qué hacer:** Pasa `"beforeend"` como primer argumento a `insertAdjacentHTML()` para insertar al final del contenedor, y `HTMLString` como segundo argumento.

**Línea completada:**
```js
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
```

---

#### Paso 56
**Qué hacer:** Declara una función `getTotalFromInputs` que reciba el parámetro `list`. Esta función calculará el total de los valores ingresados en un grupo de inputs.

**Línea añadida:**
```js
function getTotalFromInputs(list) {}
```

---

#### Paso 57
**Qué hacer:** Dentro de `getTotalFromInputs`, declara `let total = 0`. Usa `let` porque este valor se reasignará durante el bucle.

**Dentro de `getTotalFromInputs`:**
```js
function getTotalFromInputs(list) {
  let total = 0;
}
```

---

#### Paso 58
**Qué hacer:** Crea un bucle `for...of` que itere sobre `list`, usando `const item` como variable del bucle. Un `NodeList` es iterable, igual que un arreglo.

**Función actualizada:**
```js
function getTotalFromInputs(list) {
  let total = 0;
  for (const item of list) {
  }
}
```

---

#### Paso 59
**Qué hacer:** Dentro del bucle, asigna `item.value` a una variable `const` llamada `currVal`. Los elementos `input` del `NodeList` exponen su valor actual a través de la propiedad `.value`.

**Estado final de script.js en este taller:**
```js
const budgetForm = document.getElementById("budget-form");
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const category = entryDropdown.value;
  const targetInputContainer = document.querySelector(`#${category} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
  <input type="number" min="0" id="${category}-${entryNumber}-amount" placeholder="Amount" />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getTotalFromInputs(list) {
  let total = 0;
  for (const item of list) {
    const currVal = item.value;
  }
}

addEntryButton.addEventListener("click", addEntry);
```

---

#### Paso 60
**Qué hacer:** Aplica `cleanInputString` al valor de cada input antes de usarlo. Reemplaza `const currVal = item.value` por `const currVal = cleanInputString(item.value)`.

```js
const currVal = cleanInputString(item.value);
```

---

#### Paso 61
**Qué hacer:** Llama a `isInvalidInput(currVal)` y guarda el resultado en `const invalidInputMatch`. Si hay un match, el valor contiene notación científica y es inválido.

```js
const invalidInputMatch = isInvalidInput(currVal);
```

---

#### Paso 62
**Qué hacer:** Si `invalidInputMatch` es truthy, lanza una alerta con el mensaje `Invalid Input: ` seguido del match, pon `isError = true` y retorna `null`.

```js
if (invalidInputMatch) {
  alert(`Invalid Input: ${invalidInputMatch[0]}`);
  isError = true;
  return null;
}
```

---

#### Paso 63
**Qué hacer:** Suma `Number(currVal)` a `total` en cada iteración del bucle.

```js
total += Number(currVal);
```

---

#### Paso 64
**Qué hacer:** Después del bucle `for`, retorna `total`.

```js
return total;
```

**Estado de `getTotalFromInputs` hasta aquí:**
```js
function getTotalFromInputs(list) {
  let total = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    total += Number(currVal);
  }
  return total;
}
```

---

#### Paso 65
**Qué hacer:** Declara la función `calculateBudget` que recibe `e` como parámetro. Llama a `e.preventDefault()` para evitar que el formulario recargue la página, y luego pon `isError = false` para resetear el flag.

```js
function calculateBudget(e) {
  e.preventDefault();
  isError = false;
}
```

---

#### Paso 66
**Qué hacer:** Dentro de `calculateBudget`, selecciona todos los inputs de tipo `number` dentro de `#food`, `#utilities` y `#entertainment` usando `querySelectorAll`.

```js
const foodInputs = document.querySelectorAll("#food input[type='number']");
const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");
```

---

#### Paso 67
**Qué hacer:** Calcula los totales para cada categoría llamando a `getTotalFromInputs`. El alquiler usa `[rentInput]` (array de un elemento), los ingresos usan `[incomeInput]`.

```js
const rent = getTotalFromInputs([rentInput]);
const food = getTotalFromInputs(foodInputs);
const utilities = getTotalFromInputs(utilitiesInputs);
const entertainment = getTotalFromInputs(entertainmentInputs);
const income = getTotalFromInputs([incomeInput]);
```

---

#### Paso 68
**Qué hacer:** Después de calcular los totales, verifica si `isError` es `true`. Si lo es, retorna sin hacer nada más (el alert ya se mostró).

```js
if (isError) {
  return;
}
```

---

#### Paso 69
**Qué hacer:** Calcula `expenses` sumando rent + food + utilities + entertainment, y `netRemaining` restando expenses de income.

```js
const expenses = rent + food + utilities + entertainment;
const netRemaining = income - expenses;
```

---

#### Paso 70
**Qué hacer:** Declara `statusText` y `statusClass` con `let`. Si `netRemaining < 0`, asigna el mensaje de déficit y la clase `"deficit"`. Si no, el mensaje de superávit con la clase `"surplus"`.

```js
let statusText = "";
let statusClass = "";

if (netRemaining < 0) {
  statusText = `Over Budget by $${Math.abs(netRemaining)}`;
  statusClass = "deficit";
} else {
  statusText = `$${netRemaining} Remaining`;
  statusClass = "surplus";
}
```

---

#### Paso 71 al 98 — Completar output y limpiar formulario

**Qué hacer:** Asigna el HTML al elemento `output` usando los valores calculados. Elimina la clase `"hide"` del output para mostrarlo. Luego crea la función `clearForm` que limpia todos los `.input-container`, reinicia los inputs de income y rent, borra el texto del output y vuelve a añadirle la clase `"hide"`. Finalmente agrega los event listeners para `submit` y `clear`.

```js
output.innerHTML = `
  <span class="${statusClass}">${statusText}</span>
  <hr>
  <p>$${income} Total Income</p>
  <p>$${expenses} Total Expenses</p>
`;
output.classList.remove("hide");
```

```js
function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll(".input-container"));
  for (const container of inputContainers) {
    container.innerHTML = "";
  }
  incomeInput.value = "";
  rentInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}
```

```js
budgetForm.addEventListener("submit", calculateBudget);
clearButton.addEventListener("click", clearForm);
```

---

**Script.js completo — Taller Envelope Budgeter (98 pasos):**
```js
const budgetForm = document.getElementById("budget-form");
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const category = entryDropdown.value;
  const targetInputContainer = document.querySelector(`#${category} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
  <input 
    type="number" 
    min="0" 
    id="${category}-${entryNumber}-amount" placeholder="Amount" 
    />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function calculateBudget(e) {
  e.preventDefault();
  isError = false;

  const foodInputs = document.querySelectorAll("#food input[type='number']");
  const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
  const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");

  const rent = getTotalFromInputs([rentInput]);
  const food = getTotalFromInputs(foodInputs);
  const utilities = getTotalFromInputs(utilitiesInputs);
  const entertainment = getTotalFromInputs(entertainmentInputs);
  const income = getTotalFromInputs([incomeInput]);

  if (isError) {
    return;
  }

  const expenses = rent + food + utilities + entertainment;
  const netRemaining = income - expenses;

  let statusText = "";
  let statusClass = "";

  if (netRemaining < 0) {
    statusText = `Over Budget by $${Math.abs(netRemaining)}`;
    statusClass = "deficit";
  } else {
    statusText = `$${netRemaining} Remaining`;
    statusClass = "surplus";
  }

  output.innerHTML = `
    <span class="${statusClass}">${statusText}</span>
    <hr>
    <p>$${income} Total Income</p>
    <p>$${expenses} Total Expenses</p>
  `;

  output.classList.remove("hide");
}

function getTotalFromInputs(list) {
  let total = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    total += Number(currVal);
  }
  return total;
}

function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll(".input-container"));

  for (const container of inputContainers) {
    container.innerHTML = "";
  }

  incomeInput.value = "";
  rentInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}

addEntryButton.addEventListener("click", addEntry);
budgetForm.addEventListener("submit", calculateBudget);
clearButton.addEventListener("click", clearForm);
```

---

## LABORATORIOS

---

### Lab: Formulario de quejas de clientes

> **Archivos:** `index.html` / `script.js` / `styles.css`

**Objetivo:** Validar un formulario de quejas usando JavaScript. El HTML y CSS ya están provistos.

**Historias de usuario:**
1. Al enviar el formulario, verifica que `#full-name` no esté vacío, `#email` sea un correo válido, `#order-no` sea una secuencia de diez dígitos que empiece con `2024`, `#product-code` siga el patrón `XX##-X###-XX#`, `#quantity` sea un entero positivo, al menos un checkbox de `#complaints-group` esté marcado, `#complaint-description` tenga al menos 20 caracteres si el checkbox "Other" está marcado, un radio button de `#solutions-group` esté seleccionado, y `#solution-description` tenga al menos 20 caracteres si el radio "Other" está seleccionado.
2. Debes tener una función `validateForm` que retorne un objeto con claves para cada campo y valor `true`/`false`.
3. Debes tener una función `isValid` que reciba el objeto de `validateForm` y retorne `true` si todos los campos son válidos.
4. Al cambiar un campo con valor válido, su borde debe ponerse en verde. Si es inválido, en rojo.
5. Al enviar el formulario, llama a `isValid`. Si hay campos inválidos, resáltalos en rojo.

**script.js (solución):**
```js
const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const emailAddress = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaints = document.querySelectorAll('input[name="complaint"]');
const complaintDescription = document.getElementById("complaint-description");
const complaintTextAreaDiv = document.getElementById("complaint-description-container");
const solutions = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.getElementById("solution-description");
const solutionTextAreaDiv = document.getElementById("solution-description-container");
const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");

const hideTextareas = () => {
  complaintTextAreaDiv.style.display = "none";
  solutionTextAreaDiv.style.display = "none";
};

hideTextareas();

const formFields = {
  "full-name": fullName,
  "email": emailAddress,
  "order-no": orderNo,
  "product-code": productCode,
  "quantity": quantity,
  "complaints-group": Array.from(complaints),
  "complaint-description": complaintDescription,
  "solutions-group": Array.from(solutions),
  "solution-description": solutionDescription
};

const validateForm = () => {
  const complaintsArr = Array.from(complaints).map(i => i.checked);
  const solutionsArr = Array.from(solutions).map(i => i.checked);
  const validationObject = {
    "full-name": Boolean(fullName.value.trim()),
    "email": /^\S+@\S+\.\S+$/.test(emailAddress.value.trim()),
    "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
    "product-code": /[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d/i.test(productCode.value.trim()),
    "quantity": Number(quantity.value.trim()) > 0,
    "complaints-group": complaintsArr.some(i => i),
    "complaint-description": true,
    "solutions-group": solutionsArr.some(i => i),
    "solution-description": true
  };

  if (complaintsArr[3]) {
    complaintTextAreaDiv.style.display = "block";
    validationObject["complaint-description"] = complaintDescription.value.trim().length >= 20;
  } else {
    complaintTextAreaDiv.style.display = "none";
  }
  if (solutionsArr[2]) {
    solutionTextAreaDiv.style.display = "block";
    validationObject["solution-description"] = solutionDescription.value.trim().length >= 20;
  } else {
    solutionTextAreaDiv.style.display = "none";
  }

  return validationObject;
};

const isValid = (validationObj) => Object.values(validationObj).every(i => i);

Object.keys(formFields).forEach(key => {
  document.getElementById(key).addEventListener("change", () => {
    const validationObject = validateForm();
    document.getElementById(key).style.borderColor = validationObject[key] ? "green" : "red";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validationObject = validateForm();
  if (!isValid(validationObject)) {
    Object.keys(validationObject).forEach(key => {
      document.getElementById(key).style.borderColor = validationObject[key] ? "green" : "red";
    });
  } else {
    alert("Form successfully submitted.");
  }
});
```

---

## REVISIÓN

Los conceptos clave de este módulo son:
- `checkValidity()` verifica si un campo cumple sus restricciones
- `setCustomValidity(msg)` establece un mensaje de error personalizado
- `validity.valueMissing`, `validity.tooShort`, `validity.typeMismatch` identifican el tipo de error
- `preventDefault()` en el evento `submit` evita que la página recargue
- El evento `submit` se dispara en el elemento `<form>`

---

## QUIZ — Cuestionario de validación de formularios con JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 checkValidity()
| 2 Devuelve false sin mostrar ningún mensaje de error al usuario.
| 3 setCustomValidity()
| 4 El navegador detiene el envío del formulario si los campos requeridos están vacíos.
| 5 Hacer clic en un botón de reinicio.
| 6 true
| 7 El valor no coincide con el atributo pattern.
| 8 El campo inválido se destaca y aparece un mensaje.
| 9 Enviar el formulario manualmente.
| 10 Verificar si todos los elementos input cumplen con sus restricciones especificadas.
| 11 Detener la acción predeterminada de un evento.
| 12 Previene que el formulario sea enviado.
| 13 Al enviar un formulario y prevenir la recarga de la página.
| 14 El formulario se envía y actualiza la página.
| 15 El comportamiento predeterminado causado por el envío de un formulario.
| 16 Cuando se hace clic en el botón de enviar de un formulario o se presiona Enter.
| 17 En el mismo elemento de formulario.
| 18 Envía los datos del formulario al servidor especificado en la acción del formulario.
| 19 "submit"
| 20 "GET"

---

*Fin de la guía — Módulo: Validación de formularios con JavaScript*
