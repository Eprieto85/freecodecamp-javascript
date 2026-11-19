# Guía de Respuestas: Manipulación del DOM y eventos de clic con JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué es una API y qué son las API Web?

**Pregunta 1:** ¿Cuál es el propósito principal de las API en el software moderno?

**✅ Respuesta:** Para permitir la comunicación entre diferentes aplicaciones de software.

---

**Pregunta 2:** ¿Qué distingue a las API web de otros tipos de API?

**✅ Respuesta:** Las API web están diseñadas específicamente para interactuar con navegadores web y servidores.

---

**Pregunta 3:** ¿Cómo simplifican las API web el proceso de desarrollo web?

**✅ Respuesta:** Ofreciendo formas estandarizadas de acceder a datos y funciones, y manipularlos.

---

### Lectura 2: ¿Qué es el DOM y cómo accedes a los elementos?

**Pregunta 1:** ¿Qué es el DOM?

**✅ Respuesta:** Una representación con estructura de árbol de un documento HTML.

---

**Pregunta 2:** ¿Cuál de los siguientes métodos te permite acceder a un elemento HTML por su ID único?

**✅ Respuesta:** getElementById()

---

**Pregunta 3:** ¿Para qué se utiliza el método querySelector()?

**✅ Respuesta:** Para seleccionar un elemento basado en un selector CSS.

---

### Lectura 3: ¿Cómo existen los nodos DOM en relación unos con otros en el árbol DOM?

**Pregunta 1:** ¿Cuál es el nodo raíz del árbol DOM en un documento HTML?

**✅ Respuesta:** html

---

**Pregunta 2:** ¿Cómo se llaman dos nodos que comparten el mismo padre en el árbol DOM?

**✅ Respuesta:** Nodos hermanos.

---

**Pregunta 3:** Dado `<div><p>Hello</p></div>`, ¿cómo se relaciona el elemento `<p>` con el elemento `<div>`?

**✅ Respuesta:** Nodo hijo del div.

---

### Lectura 4: ¿Qué es el método querySelectorAll() y cuándo deberías usarlo?

**Pregunta 1:** ¿Para qué se utiliza el método querySelectorAll()?

**✅ Respuesta:** Para seleccionar múltiples elementos basados en un selector CSS.

---

**Pregunta 2:** ¿Qué tipo de objeto devuelve querySelectorAll()?

**✅ Respuesta:** NodeList

---

**Pregunta 3:** ¿Qué devuelve querySelectorAll() si ningún elemento coincide con el selector?

**✅ Respuesta:** Se devuelve un NodeList vacío.

---

### Lectura 5: ¿Cómo creas nuevos nodos utilizando innerHTML y createElement()?

**Pregunta 1:** ¿Para qué se usa principalmente innerHTML?

**✅ Respuesta:** Para inyectar contenido HTML dinámicamente en un elemento.

---

**Pregunta 2:** ¿Qué método se usa para crear un nuevo elemento HTML sin insertarlo en el DOM?

**✅ Respuesta:** createElement()

---

**Pregunta 3:** ¿Cuál es un riesgo de seguridad al usar innerHTML con entrada de usuario?

**✅ Respuesta:** Inserción de contenido malicioso.

---

### Lectura 6: ¿Cuál es la diferencia entre innerText, textContent y innerHTML?

**Pregunta 1:** ¿Qué propiedad respeta el estilo CSS y solo devuelve el texto visible?

**✅ Respuesta:** innerText

---

**Pregunta 2:** ¿Qué propiedad puedes usar para insertar HTML en un elemento?

**✅ Respuesta:** innerHTML

---

**Pregunta 3:** ¿Qué propiedad devuelve todo el texto del elemento, incluyendo el texto oculto?

**✅ Respuesta:** textContent

---

### Lectura 7: ¿Cómo agregas y eliminas nodos del DOM con appendChild() y removeChild()?

**Pregunta 1:** ¿Qué hace el método appendChild()?

**✅ Respuesta:** Agrega un nodo al final de la lista de hijos de un nodo padre especificado.

---

**Pregunta 2:** ¿Cómo puedes establecer el texto de un nuevo nodo antes de agregarlo al DOM?

**✅ Respuesta:** Establece la propiedad textContent del nuevo nodo a la cadena deseada.

---

**Pregunta 3:** Si tienes una sección con varios párrafos y deseas eliminar el último, ¿qué deberías hacer?

**✅ Respuesta:** Usa removeChild() en el elemento de la sección con la referencia al último elemento del párrafo.

---

### Lectura 8: ¿Cómo funcionan el navegador, la ventana y el documento?

**Pregunta 1:** ¿Qué es navigator.userAgent?

**✅ Respuesta:** Una cadena que identifica el navegador y el sistema operativo.

---

**Pregunta 2:** ¿Qué propiedad del objeto window se puede usar para ver o cambiar la URL actual?

**✅ Respuesta:** window.location

---

**Pregunta 3:** ¿Cómo accedes al objeto document desde JavaScript?

**✅ Respuesta:** Usando document.

---

### Lectura 9: ¿Cómo añades atributos con setAttribute()?

**Pregunta 1:** ¿Qué hace el método setAttribute()?

**✅ Respuesta:** Añade un nuevo atributo o actualiza el valor de un atributo existente en un elemento HTML.

---

**Pregunta 2:** ¿Cómo puedes actualizar el valor del atributo class de un elemento HTML usando JavaScript?

**✅ Respuesta:** Usando getElementById() y luego estableciendo el valor del atributo con setAttribute().

---

**Pregunta 3:** ¿Cuándo es más útil setAttribute()?

**✅ Respuesta:** Para actualizar el atributo src de un elemento de imagen cuando un usuario interactúa con una miniatura.

---

### Lectura 10: ¿Qué es el objeto de evento?

**Pregunta 1:** ¿Cuál es el propósito del objeto de evento en JavaScript?

**✅ Respuesta:** Para proporcionar información sobre las interacciones del usuario con una página web.

---

**Pregunta 2:** ¿Qué propiedad del objeto de evento te dice qué tipo de evento ocurrió?

**✅ Respuesta:** type

---

**Pregunta 3:** ¿Qué hace event.preventDefault()?

**✅ Respuesta:** Previene el comportamiento predeterminado del evento.

---

### Lectura 11: ¿Cómo funciona el método addEventListener?

**Pregunta 1:** ¿Para qué se usa el método addEventListener()?

**✅ Respuesta:** Para escuchar eventos en un elemento HTML.

---

**Pregunta 2:** ¿Qué proporciona el método addEventListener() para el manejo de eventos?

**✅ Respuesta:** La estructura para el manejo de eventos.

---

**Pregunta 3:** ¿Qué tipo de evento puedes escuchar para detectar cambios en un campo de formulario en tiempo real?

**✅ Respuesta:** input

---

### Lectura 12: ¿Cómo funciona el método removeEventListener?

**Pregunta 1:** ¿Para qué se usa removeEventListener()?

**✅ Respuesta:** Para remover un listener de eventos que fue previamente agregado a un elemento.

---

**Pregunta 2:** ¿Qué necesitas proporcionar a removeEventListener() para eliminar correctamente un listener?

**✅ Respuesta:** El tipo de evento y la función listener.

---

**Pregunta 3:** ¿Cuándo usarías removeEventListener()?

**✅ Respuesta:** Cuando se cierra un modal o cuando un usuario cierra sesión.

---

### Lectura 13: ¿Qué son los manejadores de eventos en línea, y por qué es una mejor práctica usar addEventListener() en su lugar?

**Pregunta 1:** ¿Qué es un manejador de eventos en línea?

**✅ Respuesta:** Un atributo en un elemento HTML que ejecuta código JavaScript cuando ocurre un evento.

---

**Pregunta 2:** ¿Cuál es una limitación de los manejadores de eventos en línea en comparación con addEventListener()?

**✅ Respuesta:** Los manejadores de eventos en línea solo pueden adjuntar un escuchador de eventos a un elemento.

---

**Pregunta 3:** ¿Por qué los manejadores de eventos en línea se consideran una mala práctica?

**✅ Respuesta:** Dificultan la lectura y el mantenimiento del código al mezclar HTML y JavaScript.

---

### Lectura 14: ¿Cómo manipulas estilos usando Element.style y Element.classList?

**Pregunta 1:** ¿Qué propiedad usas para aplicar estilos directamente a un elemento con JavaScript?

**✅ Respuesta:** Element.style

---

**Pregunta 2:** ¿Cómo agregas múltiples clases a un elemento con classList?

**✅ Respuesta:** classList.add("class1", "class2", "class3")

---

**Pregunta 3:** Si tienes un botón que alterna la visibilidad de un menú usando classList.toggle("visible"), ¿qué sucede?

**✅ Respuesta:** El menú alternará entre visible y oculto cada vez que se haga clic en el botón.

---

### Lectura 15: ¿Qué es el evento DOMContentLoaded y cómo funciona?

**Pregunta 1:** ¿Cuándo se activa el evento DOMContentLoaded?

**✅ Respuesta:** El documento HTML ha sido completamente cargado y analizado.

---

**Pregunta 2:** ¿Cuál es la diferencia entre el evento DOMContentLoaded y el evento load?

**✅ Respuesta:** DOMContentLoaded se activa antes de que se carguen todos los recursos, mientras que load espera a que todo esté cargado.

---

**Pregunta 3:** ¿Qué sucede si llamas a una función que modifica el DOM antes de que el DOM esté completamente cargado?

**✅ Respuesta:** La función changeImg será llamada directamente.

---

### Lectura 16: ¿Cómo funcionan los métodos setTimeout y setInterval?

**Pregunta 1:** ¿Cuáles son los dos parámetros requeridos por setTimeout?

**✅ Respuesta:** Una función y un retardo.

---

**Pregunta 2:** ¿Cuál es la mejor analogía para setInterval?

**✅ Respuesta:** Repite una función a un intervalo establecido, como una alarma que suena cada pocos segundos.

---

**Pregunta 3:** ¿Qué hace setTimeout?

**✅ Respuesta:** Retrasa una acción durante un tiempo especificado y luego ejecuta una función.

---

### Lectura 17: ¿Qué es la API requestAnimationFrame(), y cómo se puede usar para configurar un bucle de animación?

**Pregunta 1:** ¿Qué hace requestAnimationFrame()?

**✅ Respuesta:** Programa el siguiente paso de una animación antes del próximo repintado de pantalla para una visualización más fluida.

---

**Pregunta 2:** ¿Cómo inicias un bucle de animación continuo usando requestAnimationFrame()?

**✅ Respuesta:** Llamar a requestAnimationFrame() y pasarle la función animate fuera de la función animate.

---

**Pregunta 3:** ¿Qué es un "frame" en el contexto de la animación web?

**✅ Respuesta:** El momento en que el navegador actualiza la visualización de la página web, generalmente alrededor de 60 veces por segundo.

---

### Lectura 18: ¿Qué es la API de Animaciones Web y cómo se relaciona con las propiedades de animación CSS?

**Pregunta 1:** ¿Qué método de la Web Animations API se utiliza para aplicar animaciones a elementos?

**✅ Respuesta:** animate()

---

**Pregunta 2:** ¿Cuál NO es un método válido de la Web Animations API?

**✅ Respuesta:** stop()

---

**Pregunta 3:** ¿Cuándo deberías usar la Web Animations API sobre las animaciones CSS?

**✅ Respuesta:** Cuando necesites que las animaciones respondan a interacciones de usuario como clics, desplazamientos o permitir control dinámico como pausar o invertir.

---

### Lectura 19: ¿Qué es la API de Canvas y cómo funciona?

**Pregunta 1:** ¿Qué métodos se utilizan para dibujar rectángulos rellenos en el Canvas?

**✅ Respuesta:** fillRect() y fillStyle.

---

**Pregunta 2:** ¿Cuál NO es una propiedad válida del contexto 2D del canvas?

**✅ Respuesta:** backgroundColor

---

**Pregunta 3:** ¿Cómo renderizas texto en el canvas?

**✅ Respuesta:** Pasa el texto, seguido de los valores para el eje x y el eje y.

---

### Lectura 20: ¿Cómo abres y cierras elementos de diálogo usando JavaScript?

**Pregunta 1:** ¿Cuál es la diferencia entre un diálogo modal y uno no modal?

**✅ Respuesta:** Un diálogo modal deshabilita la interacción con el resto de la página, mientras que un diálogo no modal lo permite.

---

**Pregunta 2:** ¿Qué métodos se usan para abrir un diálogo modal y un diálogo no modal respectivamente?

**✅ Respuesta:** showModal() y show().

---

**Pregunta 3:** ¿Cómo puedes abrir un elemento de diálogo en respuesta a un clic de botón?

**✅ Respuesta:** Agregando un listener de evento de clic a un botón y usando el método apropiado.

---

## TALLERES — Pasos guiados

---

### Taller 1: Storytelling App (16 pasos)

**Objetivo:** Crear una app de cuentos que muestre historias según el género seleccionado y cambie el color del borde del contenedor.

**Archivos:** `index.html`, `styles.css` (proporcionado — no modificar), `script.js`

#### Paso 1
Dentro de `<body>`, agrega el encabezado de la aplicación.

**En `index.html`**, dentro de `<body>`:
```html
<h1>Want to hear a short story?</h1>
```

#### Paso 2
Agrega el contenedor principal y el div para los botones.

**En `index.html`**, debajo del `<h1>`:
```html
<main class="story-container">
  <div class="btn-container"></div>
</main>
```

#### Paso 3
Dentro del div `.btn-container`, agrega los tres botones de género.

**En `index.html`**, dentro de `<div class="btn-container">`:
```html
<button class="btn" id="scary-btn">Scary Story</button>
<button class="btn" id="funny-btn">Funny Story</button>
<button class="btn" id="adventure-btn">Adventure Story</button>
```

#### Paso 4
Después del div `.btn-container`, agrega el párrafo de resultado.

**En `index.html`**, después de `</div>` y antes de `</main>`:
```html
<p id="result"></p>
```

#### Paso 5
Enlaza el archivo JavaScript antes de cerrar `</body>`.

**En `index.html`**, justo antes de `</body>`:
```html
<script src="./script.js"></script>
```

**Estado del `index.html` al finalizar el Paso 5:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Story App</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Want to hear a short story?</h1>
    <main class="story-container">
      <div class="btn-container">
        <button class="btn" id="scary-btn">Scary Story</button>
        <button class="btn" id="funny-btn">Funny Story</button>
        <button class="btn" id="adventure-btn">Adventure Story</button>
      </div>
      <p id="result"></p>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

#### Paso 6
En `script.js`, selecciona el contenedor principal de la historia.

**En `script.js`:**
```js
const storyContainer = document.querySelector(".story-container");
```

#### Paso 7
Selecciona los tres botones de género por su `id`.

**En `script.js`**, debajo de la línea anterior:
```js
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");
```

#### Paso 8
Selecciona el párrafo donde se mostrará la historia.

**En `script.js`**, debajo de las líneas anteriores:
```js
const resultParagraph = document.getElementById("result");
```

#### Paso 9
Crea el objeto `storyObj` con los datos de cada historia (texto y color de borde).

**En `script.js`**, debajo de las variables:
```js
const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b"
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32"
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157"
  }
};
```

#### Paso 10
Crea la función `displayStory` con un `console.log` de prueba.

**En `script.js`**, debajo del objeto `storyObj`:
```js
function displayStory() {
  console.log("You clicked the button");
}
```

#### Paso 11
Adjunta un event listener al botón `scaryStoryBtn` para probar la función.

**En `script.js`**, debajo de la función:
```js
scaryStoryBtn.addEventListener("click", displayStory);
```

#### Paso 12
Elimina el `console.log` de `displayStory`, dejándola vacía.

**En `script.js`**, modifica la función así:
```js
function displayStory() {
}
```

#### Paso 13
Agrega el parámetro `genre` a `displayStory`.

**En `script.js`**, modifica la firma:
```js
function displayStory(genre) {
}
```

#### Paso 14
Implementa el cuerpo de la función y agrega una llamada de prueba al final.

**En `script.js`**, completa la función y agrega la prueba:
```js
function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}
displayStory("scary");
```

#### Paso 15
Elimina la llamada de prueba `displayStory("scary")`. La función queda sin la última línea:

```js
function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}
```

#### Paso 16
Reemplaza `scaryStoryBtn.addEventListener("click", displayStory)` con los tres event listeners con funciones flecha.

**En `script.js`**, reemplaza el event listener del Paso 11 con:
```js
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
```

**Estado final de `script.js`:**
```js
const storyContainer = document.querySelector(".story-container");
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");
const resultParagraph = document.getElementById("result");

const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b"
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32"
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157"
  }
};

function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
```

---

### Taller 2: Emoji Reactor (15 pasos)

**Objetivo:** Crear botones de emojis con un contador individual que llega máximo a 10 reacciones por emoji.

**Archivos:** `index.html`, `styles.css` (proporcionado — no modificar), `script.js`

#### Paso 1
Dentro de `<body>`, agrega el elemento `<main>` con el título de la app.

**En `index.html`**, dentro de `<body>`:
```html
<main>
  <h1 class="title">How are you feeling today?</h1>
</main>
```

#### Paso 2
Debajo del `<h1>`, agrega el párrafo de descripción.

**En `index.html`**, dentro de `<main>`, después del `<h1>`:
```html
<p class="description">Click on the buttons below to rate your emotions.</p>
```

#### Paso 3
Debajo del párrafo, agrega el contenedor de botones con el primer botón vacío.

**En `index.html`**, después del `<p>`:
```html
<div class="btn-container">
  <button id="happy-btn" class="emoji-btn" aria-label="Happy face emoji">
  </button>
</div>
```

#### Paso 4
Dentro del botón `happy-btn`, agrega el emoji y el contador.

**En `index.html`**, dentro del `<button id="happy-btn">`:
```html
<span role="img" aria-hidden="true">😊</span>
<span class="count">0/10</span>
```

#### Paso 5
Enlaza el archivo JavaScript antes de cerrar `</body>`.

**En `index.html`**, justo antes de `</body>`:
```html
<script src="./script.js"></script>
```

**Estado del `index.html` al finalizar el Paso 5:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Emoji Reactions</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <h1 class="title">How are you feeling today?</h1>
      <p class="description">Click on the buttons below to rate your emotions.</p>
      <div class="btn-container">
        <button id="happy-btn" class="emoji-btn" aria-label="Happy face emoji">
          <span role="img" aria-hidden="true">😊</span>
          <span class="count">0/10</span>
        </button>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

#### Paso 6
En `script.js`, selecciona el botón happy por su `id`.

**En `script.js`:**
```js
const happyBtn = document.querySelector("#happy-btn");
```

#### Paso 7
Adjunta un event listener al botón con un `console.log` de prueba.

**En `script.js`**, debajo de la variable:
```js
happyBtn.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

#### Paso 8
Dentro del event listener, selecciona el elemento `.count` y muéstralo.

**En `script.js`**, reemplaza el contenido del event listener:
```js
happyBtn.addEventListener("click", () => {
  const countEl = happyBtn.querySelector(".count");
  console.log(countEl.textContent);
});
```

#### Paso 9
Extrae el número actual del texto del contador.

**En `script.js`**, reemplaza el contenido del event listener:
```js
happyBtn.addEventListener("click", () => {
  const countEl = happyBtn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  console.log("Current count:", currCount);
});
```

#### Paso 10
Elimina el `console.log` e implementa la lógica del contador (límite 10).

**En `script.js`**, reemplaza el contenido del event listener:
```js
happyBtn.addEventListener("click", () => {
  const countEl = happyBtn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  if (currCount === 10) return;
  currCount++;
  countEl.textContent = `${currCount}/10`;
});
```

#### Paso 11
Refactoriza: crea la función `updateCount(btn)` y actualiza el event listener para usarla.

**En `script.js`**, reemplaza todo el código con:
```js
function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  if (currCount === 10) return;
  currCount++;
  countEl.textContent = `${currCount}/10`;
}

const happyBtn = document.querySelector("#happy-btn");
happyBtn.addEventListener("click", () => updateCount(happyBtn));
```

#### Paso 12
Agrega los 3 botones restantes al HTML y sus variables y event listeners en JavaScript.

**En `index.html`**, dentro de `.btn-container`, después del botón `happy-btn`:
```html
<button id="confused-btn" class="emoji-btn" aria-label="Confused face emoji">
  <span role="img" aria-hidden="true">😕</span>
  <span class="count">0/10</span>
</button>
<button id="sad-btn" class="emoji-btn" aria-label="Sad face emoji">
  <span role="img" aria-hidden="true">😠</span>
  <span class="count">0/10</span>
</button>
<button id="loving-btn" class="emoji-btn" aria-label="Loving face emoji">
  <span role="img" aria-hidden="true">😍</span>
  <span class="count">0/10</span>
</button>
```

**En `script.js`**, debajo del event listener de `happyBtn`:
```js
const confusedBtn = document.querySelector("#confused-btn");
const sadBtn = document.querySelector("#sad-btn");
const lovingBtn = document.querySelector("#loving-btn");
confusedBtn.addEventListener("click", () => updateCount(confusedBtn));
sadBtn.addEventListener("click", () => updateCount(sadBtn));
lovingBtn.addEventListener("click", () => updateCount(lovingBtn));
```

#### Paso 13
Selecciona todos los botones emoji con `querySelectorAll`. Agrega esta línea **antes** de las variables individuales de botones.

**En `script.js`**, antes de `const happyBtn`:
```js
const btns = document.querySelectorAll(".emoji-btn");
```

#### Paso 14
Elimina las 4 variables individuales de botones y sus 4 event listeners. El código queda así:

```js
function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  if (currCount === 10) return;
  currCount++;
  countEl.textContent = `${currCount}/10`;
}

const btns = document.querySelectorAll(".emoji-btn");
```

#### Paso 15
Usa `forEach` para agregar el event listener a todos los botones de una vez.

**En `script.js`**, debajo de `const btns`:
```js
btns.forEach((btn) => btn.addEventListener("click", () => updateCount(btn)));
```

**Estado final de `script.js`:**
```js
function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  if (currCount === 10) return;
  currCount++;
  countEl.textContent = `${currCount}/10`;
}

const btns = document.querySelectorAll(".emoji-btn");
btns.forEach((btn) => btn.addEventListener("click", () => updateCount(btn)));
```

---

### Taller 3: Music Instrument Filter (14 pasos)

**Objetivo:** Mostrar tarjetas de instrumentos musicales filtradas por categoría usando un menú desplegable `<select>`.

**Archivos:** `index.html`, `styles.css` (proporcionado — no modificar), `script.js`

**Nota:** El HTML inicial ya tiene las 10 tarjetas de instrumentos estáticas dentro de `.products-container`.

#### Paso 1
Dentro de `<main>`, antes de `.products-container`, agrega el elemento `<select>`.

**En `index.html`**, antes del `<div class="products-container">`:
```html
<select class="select-container">
</select>
```

#### Paso 2
Agrega las 4 opciones dentro del `<select>`.

**En `index.html`**, dentro del `<select class="select-container">`:
```html
<option id="all" value="all">All</option>
<option id="woodwinds" value="woodwinds">Woodwinds</option>
<option id="brass" value="brass">Brass</option>
<option id="percussion" value="percussion">Percussion</option>
```

#### Paso 3
Enlaza el archivo JavaScript antes de cerrar `</body>`.

**En `index.html`**, justo antes de `</body>`:
```html
<script src="./script.js"></script>
```

#### Paso 4
En `script.js`, declara el array vacío de instrumentos.

**En `script.js`:**
```js
const instrumentsArr = [];
```

#### Paso 5
Agrega el primer instrumento al array.

**En `script.js`**, reemplaza el array vacío con:
```js
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 }
];
```

#### Paso 6
Agrega el Clarinet y el Oboe al array.

**En `script.js`**, actualiza el array:
```js
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 }
];
```

#### Paso 7
Los 7 instrumentos restantes aparecen automáticamente en el código. Agrega las variables DOM en la región editable.

**En `script.js`**, en la región editable (después del array completo con 10 instrumentos):
```js
const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");
```

**Estado de `script.js` al finalizar el Paso 7:**
```js
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");
```

#### Paso 8
Adjunta un event listener al `selectContainer` con un `console.log` de prueba.

**En `script.js`**, debajo de las variables DOM:
```js
selectContainer.addEventListener("change", () => {
  console.log("this is a test");
});
```

#### Paso 9
Reemplaza el `console.log` con uno que muestre el valor seleccionado.

**En `script.js`**, actualiza el event listener:
```js
selectContainer.addEventListener("change", () => {
  console.log(selectContainer.value);
});
```

#### Paso 10
Crea la función vacía `instrumentCards` antes del event listener.

**En `script.js`**, antes del event listener, agrega:
```js
function instrumentCards(instrumentCategory) {
}
```

#### Paso 11
Implementa la lógica de filtrado en `instrumentCards` y actualiza el event listener para mostrar el resultado.

**En `script.js`**, actualiza la función y el event listener:
```js
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  return instruments;
}

selectContainer.addEventListener("change", () => {
  console.log(instrumentCards(selectContainer.value));
});
```

#### Paso 12
Modifica la función para que retorne HTML strings con `.map()`.

**En `script.js`**, actualiza `instrumentCards`:
```js
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  return instruments
    .map(({ instrument, price }) => `
        <div class="card">
          <h2>${instrument}</h2>
          <p>$${price}</p>
        </div>
      `);
}
```

#### Paso 13
Elimina el `console.log` del event listener y asigna el resultado al `innerHTML` del contenedor.

**En `script.js`**, actualiza el event listener:
```js
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
```

#### Paso 14
Agrega `.join("")` al final del `.map()` en `instrumentCards` para eliminar las comas entre tarjetas.

**En `script.js`**, actualiza la función para agregar `.join("")`:
```js
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  return instruments
    .map(({ instrument, price }) => `
        <div class="card">
          <h2>${instrument}</h2>
          <p>$${price}</p>
        </div>
      `)
    .join("");
}
```

**Estado final de `script.js`:**
```js
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  return instruments
    .map(({ instrument, price }) => `
        <div class="card">
          <h2>${instrument}</h2>
          <p>$${price}</p>
        </div>
      `)
    .join("");
}

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
```

---

### Taller 4: Rock Paper Scissors Game (14 pasos)

**Objetivo:** Implementar el juego Piedra, Papel o Tijera contra la computadora, con marcador y mensaje de ganador.

**Archivos:** `index.html` (proporcionado — no modificar), `styles.css` (proporcionado — no modificar), `script.js`

**Nota:** El HTML y CSS están completamente listos desde el inicio. Todo el trabajo es en `script.js`.

#### Paso 1
Revisa el HTML proporcionado. No hay código que escribir; haz clic en "Check your code" para continuar.

#### Paso 2
Declara el array `options` con las tres opciones del juego.

**En `script.js`:**
```js
const options = ["Rock", "Paper", "Scissors"];
```

#### Paso 3
Crea la función `getRandomComputerResult` que retorna una opción aleatoria del array.

**En `script.js`**, debajo del array:
```js
function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
```

#### Paso 4
Crea la función `hasPlayerWonTheRound` que determina si el jugador gana la ronda.

**En `script.js`**, debajo de la función anterior:
```js
function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}
```

#### Paso 5
Declara las variables de puntaje del jugador y la computadora.

**En `script.js`**, debajo de `hasPlayerWonTheRound`:
```js
let playerScore = 0;
let computerScore = 0;
```

#### Paso 6
Completa la función `getRoundResults` (ya existe en el código con la región editable). Implementa los tres casos posibles.

**En `script.js`**, dentro de `getRoundResults`, en la región editable:
```js
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
```

**Estado de `script.js` al finalizar el Paso 6:**
```js
const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}
```

#### Paso 7
Selecciona los tres elementos DOM para mostrar los puntajes y los resultados de ronda.

**En `script.js`**, en la región editable (después de `getRoundResults`):
```js
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
```

#### Paso 8
Crea la función `showResults` que actualiza el mensaje de ronda y los marcadores.

**En `script.js`**, en la región editable (después de los elementos DOM):
```js
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
}
```

#### Paso 9
Declara las variables para los tres botones de opciones.

**En `script.js`**, en la región editable (después de `showResults`):
```js
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
```

#### Paso 10
Adjunta event listeners a los tres botones para llamar a `showResults`.

**En `script.js`**, en la región editable (después de las variables de botones):
```js
rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
```

#### Paso 11
Selecciona los elementos DOM para el mensaje de ganador, el contenedor de opciones y el botón de reinicio. La región editable está **entre** `roundResultsMsg` y la función `showResults`.

**En `script.js`**, en la región editable entre `roundResultsMsg` y `showResults`:
```js
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
```

#### Paso 12
Agrega el chequeo de ganador final **dentro** de `showResults`, después de las tres líneas de actualización existentes.

**En `script.js`**, en la región editable dentro de `showResults`:
```js
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
```

**Estado de `showResults` al finalizar el Paso 12:**
```js
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}
```

#### Paso 13
Adjunta el event listener al botón de reinicio. La región editable está **después** de `showResults` y **antes** de las variables de botones.

**En `script.js`**, en la región editable entre `showResults` y `const rockBtn`:
```js
resetGameBtn.addEventListener("click", resetGame);
```

#### Paso 14
Crea la función `resetGame`. La región editable está **después** de `showResults` y **antes** de `resetGameBtn.addEventListener`.

**En `script.js`**, en la región editable:
```js
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
  optionsContainer.style.display = "block";
  resetGameBtn.style.display = "none";
}
```

**Estado final de `script.js`:**
```js
const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
  optionsContainer.style.display = "block";
  resetGameBtn.style.display = "none";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
```

---

## LABS — Soluciones

---

### Lab 1: Favorite Icon Toggler

**Objetivo:** Al hacer clic en un ícono de favorito, alternar entre el ícono vacío (♡) y el relleno (❤️), gestionando la clase `filled`.

**Solución (JavaScript):**

```js
document.addEventListener("DOMContentLoaded", () => {
  const favoriteIcons = document.querySelectorAll(".favorite-icon");
  favoriteIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("filled")) {
        icon.classList.remove("filled");
        icon.innerHTML = "&#9825;";
      } else {
        icon.classList.add("filled");
        icon.innerHTML = "&#10084;";
      }
    });
  });
});
```

---

### Lab 2: Real Time Counter

**Objetivo:** Mostrar en tiempo real el conteo de caracteres de un campo de texto, con límite de 50 caracteres y color rojo al llegar al máximo.

**Solución (JavaScript):**

```js
document.getElementById("text-input").addEventListener("input", function () {
  let textInput = document.getElementById("text-input");
  let charCount = textInput.value.length;
  if (charCount > 50) {
    textInput.value = textInput.value.substring(0, 50);
    charCount = 50;
  }
  let charCountDisplay = document.getElementById("char-count");
  charCountDisplay.innerHTML = `Character Count: ${charCount}/50`;
  if (charCount === 50) {
    charCountDisplay.style.color = "red";
  }
});
```

---

### Lab 3: Lightbox Viewer

**Objetivo:** Al hacer clic en una miniatura de galería, mostrar la imagen en tamaño completo en un lightbox; al hacer clic en el fondo o en el botón de cerrar, ocultar el lightbox.

**Solución (JavaScript):**

```js
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

const closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) { closeLightbox(); }
});

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    openLightbox(item.src.replace("-thumbnail", ""));
  });
});
```

---

### Lab 4: Football Team Cards

**Objetivo:** Mostrar tarjetas de jugadores del equipo de fútbol Argentina 1986, con filtrado por posición usando un menú desplegable.

**Solución (JavaScript):**

```js
const teamName = document.getElementById("team");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Sergio Almirón", position: "forward", isCaptain: false },
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Ricardo Bochini", position: "midfielder", isCaptain: false },
    { name: "Claudio Borghi", position: "midfielder", isCaptain: false },
    { name: "José Luis Brown", position: "defender", isCaptain: false },
    { name: "Daniel Passarella", position: "defender", isCaptain: false },
    { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
    { name: "Néstor Clausen", position: "defender", isCaptain: false },
    { name: "José Luis Cuciuffo", position: "defender", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Héctor Enrique", position: "midfielder", isCaptain: false },
    { name: "Oscar Garré", position: "defender", isCaptain: false },
    { name: "Ricardo Giusti", position: "midfielder", isCaptain: false },
    { name: "Luis Islas", position: "goalkeeper", isCaptain: false },
    { name: "Julio Olarticoechea", position: "defender", isCaptain: false },
    { name: "Pedro Pasculli", position: "forward", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Carlos Tapia", position: "midfielder", isCaptain: false },
    { name: "Marcelo Trobbiani", position: "midfielder", isCaptain: false },
    { name: "Héctor Zelada", position: "goalkeeper", isCaptain: false }
  ]
};

const { team, year, players } = footballTeam;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = footballTeam.headCoach;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr.map(({ name, position, isCaptain }) =>
    `<div class="player-card"><h2>${isCaptain ? "(Captain)" : ""} ${name}</h2><p>Position: ${position}</p></div>`
  ).join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";
  switch (e.target.value) {
    case "forward": setPlayerCards(players.filter(p => p.position === "forward")); break;
    case "midfielder": setPlayerCards(players.filter(p => p.position === "midfielder")); break;
    case "defender": setPlayerCards(players.filter(p => p.position === "defender")); break;
    case "goalkeeper": setPlayerCards(players.filter(p => p.position === "goalkeeper")); break;
    default: setPlayerCards();
  }
});

setPlayerCards();
```

---

## REVISIÓN — Temas cubiertos

---

### APIs y Web APIs

- **API:** Conjunto de reglas y protocolos que permiten la comunicación entre aplicaciones de software.
- **Web API:** APIs diseñadas para aplicaciones web, divididas en dos categorías: APIs del navegador y APIs de terceros.
- **APIs del navegador:** Exponen datos del navegador que puedes acceder y manipular con JavaScript.
- **APIs de terceros:** No están integradas en el navegador por defecto (ej. Google Maps API).

### El DOM

- **DOM (Document Object Model):** Interfaz de programación que permite interactuar con documentos HTML. La raíz del árbol DOM es el elemento `html`. Los nodos padre contienen nodos hijo; los nodos al mismo nivel son nodos hermanos.
- **Interfaz `navigator`:** Proporciona información sobre el entorno del navegador (user agent, plataforma, versión).
- **Interfaz `window`:** Representa la ventana del navegador; ofrece métodos para redimensionar ventanas, abrir nuevas ventanas y navegar a URLs.

### Métodos de selección del DOM

- **`getElementById(id)`:** Retorna el elemento con el `id` especificado (único en el documento).
- **`querySelector(selector)`:** Retorna el primer elemento que coincide con el selector CSS.
- **`querySelectorAll(selector)`:** Retorna un `NodeList` con todos los elementos que coinciden con el selector CSS.

### Manipulación de contenido

- **`innerHTML`:** Propiedad para leer o establecer el marcado HTML de un elemento.
- **`createElement(tag)`:** Crea un nuevo elemento HTML sin insertarlo en el DOM.
- **`innerText`:** Texto visible del elemento, respeta estilos CSS.
- **`textContent`:** Texto plano del elemento y sus descendientes, incluyendo texto oculto.

### Manipulación del árbol DOM

- **`appendChild(nodo)`:** Agrega un nodo al final de la lista de hijos del nodo padre especificado.
- **`removeChild(nodo)`:** Elimina un nodo del DOM.
- **`setAttribute(nombre, valor)`:** Establece o actualiza un atributo en el elemento; si no existe, lo crea.

### Eventos

- **Objeto Event:** Carga útil que se activa cuando el usuario interactúa con la página. Siempre tiene la propiedad `type`.
- **`addEventListener(evento, función)`:** Escucha eventos en un elemento. Eventos comunes: `click`, `input`, `change`.
- **`removeEventListener(evento, función)`:** Elimina un listener previamente agregado; requiere el mismo tipo de evento y la misma referencia de función.
- **Manejadores de eventos en línea:** Atributos HTML que ejecutan JS (ej. `onclick`). No son buena práctica; se prefiere `addEventListener`.
- **Evento `change`:** Se activa cuando el usuario modifica el valor de inputs como checkboxes, radio buttons o selectores.

### Propagación de eventos

- **Event Bubbling:** Los eventos "burbujean" hacia los elementos padre cuando se activan.
- **`stopPropagation()`:** Detiene la propagación del evento hacia los padres.
- **Event Delegation:** Escuchar eventos en un padre en lugar de en cada elemento hijo individualmente.

### DOMContentLoaded

- **`DOMContentLoaded`:** Se activa cuando el HTML ha sido completamente cargado y analizado, sin esperar imágenes ni hojas de estilo externas.

### Estilos y clases

- **`Element.style`:** Propiedad de solo lectura para obtener o establecer el estilo en línea de un elemento (ej. `element.style.color = "red"`).
- **`Element.classList`:** Permite agregar (`add`), eliminar (`remove`) o alternar (`toggle`) clases en un elemento.

### Temporizadores

- **`setTimeout(fn, ms)`:** Ejecuta una función una vez después del tiempo especificado en milisegundos.
- **`setInterval(fn, ms)`:** Ejecuta una función repetidamente cada cierto intervalo; se detiene con `clearInterval()`.

### Animaciones

- **`requestAnimationFrame(fn)`:** Programa el siguiente paso de una animación antes del próximo repintado de pantalla (~60 fps).
- **Web Animations API:** Permite crear y controlar animaciones directamente en JavaScript con el método `animate()`.

### Canvas API

- **Canvas API:** Permite manipular gráficos en JavaScript usando el elemento `<canvas>`. Accedes al contexto de dibujo con `getContext("2d")`.

### Diálogos

- **`showModal()`:** Abre un diálogo modal (bloquea el resto de la página).
- **`show()`:** Abre un diálogo no modal (no bloquea la página).
- **`close()`:** Cierra el diálogo.

---

## QUIZ — Manipulación del DOM y eventos de clic con JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Una interfaz de programación que te permite interactuar con documentos HTML. |
| 2 | Interfaz de Programación de Aplicaciones. |
| 3 | `document.querySelectorAll("a:not([href])");` |
| 4 | Devuelve el contenido de texto plano de un elemento. |
| 5 | Es una propiedad del Element utilizada para establecer o actualizar partes del marcado HTML. |
| 6 | `btn.addEventListener("click", () => alert("You clicked the button"));` |
| 7 | `addElementToDOM()` |
| 8 | `const para = document.getElementById("para"); para.setAttribute("class", "my-class");` |
| 9 | Es una carga útil que se activa cuando un usuario interactúa con tu página web de alguna manera. |
| 10 | `removeEventListener()` |
| 11 | Atributos especiales en un elemento HTML que se utilizan para ejecutar código JavaScript cuando ocurre un evento. |
| 12 | APIs del navegador y APIs de terceros. |
| 13 | `DOMContentLoaded` |
| 14 | `style` |
| 15 | `<button onclick="validate()">Validate</button>` |
| 16 | `setTimeout()` |
| 17 | API de Animaciones Web |
| 18 | Se utiliza para manipular gráficos a través de tu archivo JavaScript. |
| 19 | El proceso de escuchar eventos que se han propagado hasta un padre. |
| 20 | `removeModal()` |

---

*Fin de la guía — Módulo: Manipulación del DOM y eventos de clic con JavaScript*
