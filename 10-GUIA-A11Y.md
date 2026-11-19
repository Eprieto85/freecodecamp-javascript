# Guía de Respuestas: JavaScript y Accesibilidad
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Cómo haces que el contenido dinámico e interactivo sea accesible?

**Pregunta 1:** ¿Por qué es importante actualizar el HTML cuando JavaScript cambia el estado de un elemento de la página?

**✅ Respuesta:** Para que las tecnologías de asistencia puedan comunicar con precisión el estado actual a los usuarios.

---

**Pregunta 2:** ¿Qué especifica el atributo `aria-controls` en el botón del menú?

**✅ Respuesta:** El id del elemento que controla el botón.

---

**Pregunta 3:** ¿Qué indica el atributo `aria-expanded` en el botón del menú?

**✅ Respuesta:** Si el menú está abierto o cerrado.

---

### Lectura 2: ¿Qué es el atributo aria-expanded y cómo funciona?

**Pregunta 1:** ¿Cuál es el propósito principal del atributo `aria-expanded`?

**✅ Respuesta:** Indicar si un elemento está expandido o colapsado.

---

**Pregunta 2:** ¿Cuándo se debe usar el atributo `aria-expanded`?

**✅ Respuesta:** Para elementos colapsables como menús y acordeones.

---

**Pregunta 3:** ¿Cuáles son los valores posibles para el atributo `aria-expanded`?

**✅ Respuesta:** true, false.

---

### Lectura 3: ¿Qué es el atributo aria-live y cómo funciona?

**Pregunta 1:** ¿Cuál es el propósito principal del atributo `aria-live`?

**✅ Respuesta:** Indicar que el contenido de un elemento está cambiando dinámicamente.

---

**Pregunta 2:** ¿Cuáles de los siguientes valores se pueden usar para el atributo `aria-live`?

**✅ Respuesta:** assertive, polite, off.

---

**Pregunta 3:** ¿Cuál es la diferencia entre los valores `polite` y `assertive` del atributo `aria-live`?

**✅ Respuesta:** polite anuncia actualizaciones después de que se termine la tarea actual, mientras que assertive anuncia actualizaciones de inmediato.

---

### Lectura 4: ¿Cuáles son algunos estados ARIA comunes usados en elementos de control personalizados?

**Pregunta 1:** ¿Qué estado ARIA usarías para indicar que una pestaña está seleccionada actualmente?

**✅ Respuesta:** aria-selected

---

**Pregunta 2:** En el contexto de controles personalizados, ¿qué estado ARIA se usa para indicar que un elemento está deshabilitado actualmente?

**✅ Respuesta:** aria-disabled

---

**Pregunta 3:** Cuando quieres indicar que un elemento de menú tiene un submenú, ¿qué estado ARIA debes usar?

**✅ Respuesta:** aria-haspopup

---

### Lectura 5: ¿Qué es el atributo aria-controls y cómo funciona?

**Pregunta 1:** ¿Cuál es el propósito del atributo `aria-controls` en el contexto de pestañas?

**✅ Respuesta:** Para asociar una pestaña con la sección que controla.

---

**Pregunta 2:** ¿Cómo afecta el atributo `aria-controls` a las secciones de contenido en el ejemplo?

**✅ Respuesta:** Oculta o muestra secciones según qué pestaña esté seleccionada.

---

**Pregunta 3:** En el ejemplo dado, ¿cómo se usa el atributo `aria-labelledby`?

**✅ Respuesta:** Para identificar la sección de contenido que una pestaña controla.

---

## TALLERES

### TALLER 1: Planets Tablist
**Proyecto:** Interfaz de pestañas accesible con datos de planetas (Tierra, Saturno, Marte)
**Archivos:** index.html · styles.css (ya dado) · script.js

---

#### Paso 1
**Qué hacer:** Dentro del elemento `.tabs`, agregar un `div` con `role="tablist"` y `aria-labelledby="tabs-title"`.
**Archivo:** `index.html`

**Solución — agrega dentro de `.tabs`, después del `<h2>`:**
```html
<div role="tablist" aria-labelledby="tabs-title">

</div>
```

---

#### Paso 2
**Qué hacer:** Dentro del `tablist`, agregar tres botones con `role="tab"`: 🌍 Earth, 🪐 Saturn, 🔴 Mars.
**Archivo:** `index.html`

**Solución — agrega dentro del div[role="tablist"]:**
```html
<button role="tab">🌍 Earth</button>
<button role="tab">🪐 Saturn</button>
<button role="tab">🔴 Mars</button>
```

---

#### Paso 3
**Qué hacer:** Agregar el atributo `aria-controls` a cada botón: `panel-earth`, `panel-saturn`, `panel-mars`.
**Archivo:** `index.html`

**Solución — actualiza los tres botones:**
```html
<button role="tab" aria-controls="panel-earth">🌍 Earth</button>
<button role="tab" aria-controls="panel-saturn">🪐 Saturn</button>
<button role="tab" aria-controls="panel-mars">🔴 Mars</button>
```

---

#### Paso 4
**Qué hacer:** Agregar `aria-selected="true"` al primer botón (seleccionado por defecto).
**Archivo:** `index.html`

**Solución — solo el primer botón cambia:**
```html
<button role="tab" aria-controls="panel-earth" aria-selected="true">🌍 Earth</button>
```

---

#### Paso 5
**Qué hacer:** Agregar `aria-selected="false"` al segundo y tercer botón.
**Archivo:** `index.html`

**Solución — actualiza el segundo y tercer botón:**
```html
<button role="tab" aria-controls="panel-saturn" aria-selected="false">🪐 Saturn</button>
<button role="tab" aria-controls="panel-mars" aria-selected="false">🔴 Mars</button>
```

---

#### Paso 6
**Qué hacer:** Agregar atributo `id` a cada botón: `tab-earth`, `tab-saturn`, `tab-mars`.
**Archivo:** `index.html`

**Solución — estado completo del tablist:**
```html
<div role="tablist" aria-labelledby="tabs-title">
  <button role="tab" aria-controls="panel-earth" aria-selected="true" id="tab-earth">🌍 Earth</button>
  <button role="tab" aria-controls="panel-saturn" aria-selected="false" id="tab-saturn">🪐 Saturn</button>
  <button role="tab" aria-controls="panel-mars" aria-selected="false" id="tab-mars">🔴 Mars</button>
</div>
```

---

#### Paso 7
**Qué hacer:** Agregar tres elementos `div` con `role="tabpanel"` después del tablist. Cada uno con un elemento `p` vacío.
**Archivo:** `index.html`

**Solución — agrega después del div[role="tablist"]:**
```html
<div role="tabpanel">
  <p></p>
</div>
<div role="tabpanel">
  <p></p>
</div>
<div role="tabpanel">
  <p></p>
</div>
```

---

#### Paso 8
**Qué hacer:** Agregar los textos de cada planeta dentro de los elementos `p`.
**Archivo:** `index.html`

**Solución — rellena los tres párrafos:**
```html
<div role="tabpanel">
  <p>Earth is our home planet, known for its abundant water, diverse ecosystems, and life-supporting atmosphere. It's the only planet in the solar system known to harbor life.</p>
</div>
<div role="tabpanel">
  <p>Saturn is famous for its beautiful and extensive ring system made of ice and rock particles. It's a gas giant with dozens of moons orbiting it.</p>
</div>
<div role="tabpanel">
  <p>Mars, the red planet, is a rocky world with the tallest volcano and deepest canyon in the solar system. It's a key focus for exploration in the search for past or present life.</p>
</div>
```

---

#### Paso 9
**Qué hacer:** Al primer tabpanel, agregar `id="panel-earth"` y `aria-labelledby="tab-earth"`.
**Archivo:** `index.html`

**Solución — actualiza la etiqueta del primer div:**
```html
<div id="panel-earth" role="tabpanel" aria-labelledby="tab-earth">
```

---

#### Paso 10
**Qué hacer:** Al segundo tabpanel agregar `id="panel-saturn"` y `aria-labelledby="tab-saturn"`. Al tercero agregar `id="panel-mars"` y `aria-labelledby="tab-mars"`.
**Archivo:** `index.html`

**Solución — actualiza las etiquetas del segundo y tercer div:**
```html
<div id="panel-saturn" role="tabpanel" aria-labelledby="tab-saturn">
<div id="panel-mars" role="tabpanel" aria-labelledby="tab-mars">
```

---

#### Paso 11
**Qué hacer:** Agregar el atributo `hidden` al segundo y tercer tabpanel para que solo sea visible el primero.
**Archivo:** `index.html`

**Solución — estado final del index.html completo:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Planets Facts</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="tabs">
      <h2 id="tabs-title">Planets</h2>
      <div role="tablist" aria-labelledby="tabs-title">
        <button role="tab" aria-controls="panel-earth" aria-selected="true" id="tab-earth">🌍 Earth</button>
        <button role="tab" aria-controls="panel-saturn" aria-selected="false" id="tab-saturn">🪐 Saturn</button>
        <button role="tab" aria-controls="panel-mars" aria-selected="false" id="tab-mars">🔴 Mars</button>
      </div>

      <div id="panel-earth" role="tabpanel" aria-labelledby="tab-earth">
        <p>Earth is our home planet, known for its abundant water, diverse ecosystems, and life-supporting atmosphere. It's the only planet in the solar system known to harbor life.</p>
      </div>
      <div id="panel-saturn" role="tabpanel" aria-labelledby="tab-saturn" hidden>
        <p>Saturn is famous for its beautiful and extensive ring system made of ice and rock particles. It's a gas giant with dozens of moons orbiting it.</p>
      </div>
      <div id="panel-mars" role="tabpanel" aria-labelledby="tab-mars" hidden>
        <p>Mars, the red planet, is a rocky world with the tallest volcano and deepest canyon in the solar system. It's a key focus for exploration in the search for past or present life.</p>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

---

#### Paso 12
**Qué hacer:** En `script.js`, crear las variables `tabs` y `panels` usando `querySelectorAll`.
**Archivo:** `script.js`

**Solución:**
```js
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
```

---

#### Paso 13
**Qué hacer:** Usar el método `forEach` en `tabs` con una función flecha que reciba `tab` como parámetro.
**Archivo:** `script.js`

**Solución:**
```js
tabs.forEach(tab => {

});
```

---

#### Paso 14
**Qué hacer:** Dentro del `forEach`, usar `addEventListener` para escuchar el evento `"click"` en cada `tab`. La función callback debe ser una función flecha vacía.
**Archivo:** `script.js`

**Solución:**
```js
tabs.forEach(tab => {
  tab.addEventListener("click", () => {

  });
});
```

---

#### Paso 15
**Qué hacer:** Dentro del listener de click, usar `forEach` en `tabs` para poner `aria-selected="false"` en todos los tabs.
**Archivo:** `script.js`

**Solución — agrega dentro del callback del click:**
```js
tabs.forEach(t => t.setAttribute("aria-selected", "false"));
```

---

#### Paso 16
**Qué hacer:** Usar `forEach` en `panels` para poner `hidden = true` en todos los paneles.
**Archivo:** `script.js`

**Solución — agrega después de la línea anterior:**
```js
panels.forEach(p => p.hidden = true);
```

---

#### Paso 17
**Qué hacer:** Poner `aria-selected="true"` en el tab que fue clicado.
**Archivo:** `script.js`

**Solución — agrega después:**
```js
tab.setAttribute("aria-selected", "true");
```

---

#### Paso 18
**Qué hacer:** Crear una variable `associatedPanel` que guarde el valor del atributo `aria-controls` del tab clicado.
**Archivo:** `script.js`

**Solución:**
```js
const associatedPanel = tab.getAttribute("aria-controls");
```

---

#### Paso 19
**Qué hacer:** Crear una variable `panel` que seleccione el elemento del DOM con el id correspondiente a `associatedPanel`.
**Archivo:** `script.js`

**Solución:**
```js
const panel = document.getElementById(associatedPanel);
```

---

#### Paso 20 (último)
**Qué hacer:** Poner `panel.hidden = false` para mostrar el panel correspondiente al tab clicado.
**Archivo:** `script.js`

**Solución — script.js completo final:**
```js
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    panels.forEach(p => p.hidden = true);

    tab.setAttribute("aria-selected", "true");
    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);
    panel.hidden = false;
  });
});
```

---

---

### TALLER 2: Note Taking App
**Proyecto:** Aplicación de toma de notas accesible con `aria-live` y `contenteditable`
**Archivos:** index.html · styles.css (ya dado) · script.js

---

#### Paso 1
**Qué hacer:** En el `div` con id `"note"`, agregar el atributo `contenteditable="true"` para que sea editable.
**Archivo:** `index.html`

**Solución:**
```html
<div id="note" class="note" contenteditable="true">
```

---

#### Paso 2
**Qué hacer:** En el mismo `div`, agregar `aria-label="Note editor"` para que los lectores de pantalla lo identifiquen.
**Archivo:** `index.html`

**Solución:**
```html
<div id="note" class="note" contenteditable="true" aria-label="Note editor">
```

---

#### Paso 3
**Qué hacer:** Agregar un segundo `div` con `id="status"` después del div de la nota.
**Archivo:** `index.html`

**Solución — agrega después del cierre del div#note:**
```html
<div id="status"></div>
```

---

#### Paso 4
**Qué hacer:** En el `div#status`, agregar `aria-live="polite"` para que sea una región activa accesible.
**Archivo:** `index.html`

**Solución — estado final del index.html:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Note taking app</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <p class="helper-text">Click or tap on the card to edit your note.</p>

    <div id="note" class="note" contenteditable="true" aria-label="Note editor">
      Many languages have words that carry meanings so specific or culturally rooted that they can't be neatly translated into English. 
        
      One example is the Japanese word "tsundoku", which refers to the habit of acquiring books and letting them pile up unread, something many book lovers can relate to. Another is the Portuguese word "saudade", describing a deep, bittersweet longing for something or someone that is absent. Meanwhile, the French word "Dépaysement" captures the disorienting yet exciting feeling of being in a new place, far from home.
        
      These unique words remind us that language is more than vocabulary: it's a window into the values, habits, and emotions of the cultures that create it.
    </div>

    <div id="status" aria-live="polite"></div>
    
    <script src="script.js"></script>
  </body>
</html>
```

---

#### Paso 5
**Qué hacer:** En `script.js`, crear las variables `noteEl` y `statusEl` apuntando a sus respectivos elementos del DOM.
**Archivo:** `script.js`

**Solución:**
```js
const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");
```

---

#### Paso 6
**Qué hacer:** Crear la variable `let currentContent = ""` para rastrear el contenido actual de la nota.
**Archivo:** `script.js`

**Solución — agrega después de las variables:**
```js
let currentContent = "";
```

---

#### Paso 7
**Qué hacer:** Agregar `window.addEventListener("DOMContentLoaded", ...)` que asigne `noteEl.textContent` a `currentContent` cuando la página cargue.
**Archivo:** `script.js`

**Solución:**
```js
window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});
```

---

#### Paso 8
**Qué hacer:** Agregar `noteEl.addEventListener("blur", ...)` con una función que cree `const newContent = noteEl.innerHTML` cuando la nota pierde el foco.
**Archivo:** `script.js`

**Solución:**
```js
noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;
});
```

---

#### Paso 9
**Qué hacer:** Dentro del listener de blur, asignar `newContent` a `currentContent`.
**Archivo:** `script.js`

**Solución — agrega dentro del blur listener:**
```js
currentContent = newContent;
```

---

#### Paso 10
**Qué hacer:** Agregar `console.log(currentContent)` después de la asignación para ver el contenido actualizado en la consola.
**Archivo:** `script.js`

**Solución:**
```js
currentContent = newContent;
console.log(currentContent);
```

---

#### Paso 11
**Qué hacer:** Agregar `statusEl.textContent = "Note saved successfully!"` para mostrar el mensaje de guardado.
**Archivo:** `script.js`

**Solución:**
```js
currentContent = newContent;
console.log(currentContent);
statusEl.textContent = "Note saved successfully!";
```

---

#### Paso 12
**Qué hacer:** Agregar una condición `if (currentContent === newContent) { return; }` antes de `currentContent = newContent` para evitar actualizar si no hay cambios.
**Archivo:** `script.js`

**Solución — estado del blur listener:**
```js
noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {
    return;
  }

  currentContent = newContent;
  console.log(currentContent);
  statusEl.textContent = "Note saved successfully!";
});
```

---

#### Paso 13 (último)
**Qué hacer:** Agregar `noteEl.addEventListener("focus", ...)` que limpie el mensaje de estado (`statusEl.textContent = ''`) cuando la nota recibe el foco de nuevo.
**Archivo:** `script.js`

**Solución — script.js completo final:**
```js
const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = "";

noteEl.addEventListener("focus", () => {
  statusEl.textContent = '';
});

noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {
    return;
  }

  currentContent = newContent;
  console.log(currentContent);
  statusEl.textContent = "Note saved successfully!";
});

window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});
```

---

---

## LABORATORIOS

### LAB: Theme Switcher
**Proyecto:** Aplicación que cambia entre temas de color con menú desplegable accesible
**Archivos:** index.html · styles.css · script.js

Este es un laboratorio libre — debes cumplir todos los requisitos de usuario. A continuación se muestra una solución de referencia completa.

**Solución — index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme Switcher</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body class="theme-light">  
  <button
    id="theme-switcher-button"
    aria-haspopup="true"
    aria-expanded="false"
    aria-controls="theme-dropdown"
  >
    Switch Theme
  </button>

  <ul
    id="theme-dropdown"
    role="menu"
    aria-labelledby="theme-switcher-button"
    hidden
  >
    <li id="theme-light" role="menuitem">Light</li>
    <li id="theme-dark" role="menuitem">Dark</li>
    <li id="theme-ocean" role="menuitem">Ocean</li>
    <li id="theme-nord" role="menuitem">Nord</li>
  </ul>
  
  <div id="status" aria-live="polite"></div>
  
  <script src="./script.js"></script>
</body>
</html>
```

**Solución — script.js:**
```js
const themes = [
  { name: "light", message: "Modo claro activado." },
  { name: "dark", message: "Modo oscuro activado." },
  { name: "ocean", message: "Tema océano activado." },
  { name: "nord", message: "Tema nord activado." }
];

const setTheme = (theme) => {
  document.body.className = `theme-${theme.name}`;
};

const updateStatus = (theme) => {
  document.getElementById("status").textContent = theme.message;
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-switcher-button");
  const menu = document.getElementById("theme-dropdown");

  themes.forEach((theme) => {
    const item = document.getElementById(`theme-${theme.name}`);
    if (item) {
      item.addEventListener("click", () => {
        setTheme(theme);
        updateStatus(theme);
        closeMenu();
      });
    }
  });

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("click", (e) => {
    if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });

  function closeMenu() {
    menu.setAttribute("hidden", "");
    toggleButton.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    menu.removeAttribute("hidden");
    toggleButton.setAttribute("aria-expanded", "true");
  }
});
```

**Requisitos que debes cumplir (12 historias de usuario):**
1. `button` con texto `Switch Theme`
2. El botón tiene: `id="theme-switcher-button"`, `aria-haspopup="true"`, `aria-expanded="false"`, `aria-controls="theme-dropdown"`
3. `ul` con: `id="theme-dropdown"`, `role="menu"`, `aria-labelledby="theme-switcher-button"`, atributo `hidden`
4. Al menos 2 `li` con `role="menuitem"` y texto de tema
5. Cada `li` tiene `id="theme-<nombre>"` (todo en minúsculas)
6. Elemento con `aria-live="polite"`
7. Array `themes` con al menos 2 objetos con propiedades `name` y `message`
8. Click en botón → muestra el menú (quita `hidden`)
9. Cuando menú está visible → `aria-expanded="true"` en el botón
10. Click en botón con menú visible → cierra menú (`hidden` de vuelta, `aria-expanded="false"`)
11. Click en un tema → agrega clase `theme-<nombre>` al `body` y muestra el `message`
12. Cambiar de tema → actualiza la clase del `body` y el mensaje

---

## REVISIÓN — Temas cubiertos

Este módulo es una página de revisión (una sola pantalla). Solo debes leer el contenido y hacer clic en **Enviar** para completarlo.

**Temas que cubre:**

**Atributos comunes de accesibilidad ARIA:**
- `aria-expanded`: Comunica el estado de un control de alternancia (expandido/colapsado) a lectores de pantalla.
- `aria-haspopup`: Indica que un elemento interactivo activará un elemento emergente al ser activado. Valores válidos: `menu`, `listbox`, `tree`, `grid`, `dialog`, o `true`.
- `aria-checked`: Indica si un elemento está en estado marcado. Usado en casillas de verificación, botones de opción, interruptores y cuadros de lista personalizados.
- `aria-disabled`: Indica que un elemento está deshabilitado solo para tecnologías asistivas. No deshabilita el elemento funcionalmente.
- `aria-selected`: Indica que un elemento está seleccionado. Usado en interfaces con pestañas, cuadros de lista o cuadrículas.
- `aria-controls`: Asocia un elemento con otro elemento que controla programáticamente.
- `hidden`: Oculta paneles inactivos tanto para usuarios visuales como para tecnologías de asistencia.

**Trabajando con Live Regions y Contenido Dinámico:**
- `aria-live="polite"`: La actualización no es urgente; el lector espera hasta que termina el anuncio actual.
- `aria-live="assertive"`: La actualización es muy importante y tiene la máxima prioridad.
- `contenteditable`: Convierte un elemento en un editor en vivo. Usar `aria-label` si no hay etiqueta visible.

**Eventos focus y blur:**
- `blur`: Se activa cuando un elemento pierde el foco.
- `focus`: Se activa cuando un elemento recibe el foco.

---

## QUIZ — Cuestionario de JavaScript y Accesibilidad (10 preguntas)

Necesitas 9/10 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | `aria-expanded` |
| 2 | `aria-controls` y `aria-owns` |
| 3 | `aria-live` |
| 4 | `<div role="button" tabindex="-1" aria-disabled="true">Edit</div>` |
| 5 | `<button aria-expanded="true">Menu</button>` |
| 6 | `aria-controls` |
| 7 | Mensajes que se muestran antes de que se haya realizado una acción (como un cuadro de diálogo de confirmación). |
| 8 | `<div role="tablist"><button role="tab" aria-selected="true">Tab 1</button><button role="tab" aria-selected="false">Tab 2</button><button role="tab" aria-selected="false">Tab 3</button></div>` |
| 9 | `on` |
| 10 | `assertive` |

---

*Fin de la guía — Módulo: JavaScript y Accesibilidad*
