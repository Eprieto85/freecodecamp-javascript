# Guía de Respuestas: Almacenamiento del lado del cliente y operaciones CRUD
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué significa CRUD y cómo funcionan las operaciones básicas?

**Pregunta 1:** ¿Qué significa la `C` en CRUD?

**✅ Respuesta:** Create

---

**Pregunta 2:** ¿Cuál método HTTP se utiliza generalmente para la operación `Read` en CRUD?

**✅ Respuesta:** GET

---

**Pregunta 3:** ¿Cuál es el propósito de la operación `Delete` en CRUD?

**✅ Respuesta:** Eliminar datos.

---

### Lectura 2: ¿Qué es localStorage y cuáles son algunos métodos comunes?

**Pregunta 1:** ¿Cuál es el propósito del API de Almacenamiento Web?

**✅ Respuesta:** Para almacenar pares clave-valor en el navegador.

---

**Pregunta 2:** ¿Qué método se utiliza para guardar datos en el almacenamiento local?

**✅ Respuesta:** localStorage.setItem()

---

**Pregunta 3:** ¿Cómo se diferencia `localStorage` de `sessionStorage`?

**✅ Respuesta:** localStorage persiste a través de sesiones del navegador, mientras que sessionStorage se borra cuando se cierra el navegador o la pestaña.

---

### Lectura 3: ¿Qué es sessionStorage y cuáles son algunos métodos comunes?

**Pregunta 1:** ¿Qué ocurre con los datos almacenados en `sessionStorage` cuando se cierra la pestaña del navegador?

**✅ Respuesta:** Los datos se eliminan cuando se cierra la pestaña o ventana.

---

**Pregunta 2:** ¿Cuál de los siguientes métodos se utiliza para eliminar un solo par clave-valor de `sessionStorage`?

**✅ Respuesta:** sessionStorage.removeItem()

---

**Pregunta 3:** ¿En cuál de los siguientes escenarios sería `sessionStorage` más apropiado que `localStorage`?

**✅ Respuesta:** Almacenar datos de formularios que solo se necesitan durante la sesión actual del navegador.

---

### Lectura 4: ¿Qué son las cookies y cómo funcionan?

**Pregunta 1:** ¿Cuál es el propósito principal de las cookies en las aplicaciones web?

**✅ Respuesta:** Para almacenar datos que ayudan a mantener el estado y recordar información del usuario entre solicitudes.

---

**Pregunta 2:** ¿Cuál de los siguientes atributos asegura que una cookie solo se envíe a través de HTTPS?

**✅ Respuesta:** Secure

---

**Pregunta 3:** ¿Cómo puede eliminar una cookie utilizando JavaScript?

**✅ Respuesta:** Estableciendo su fecha de expiración en una fecha pasada.

---

### Lectura 5: ¿Qué es la API de caché y cómo funciona?

**Pregunta 1:** ¿Cuál es el propósito principal de la API de caché en las aplicaciones web?

**✅ Respuesta:** Para almacenar y gestionar solicitudes y respuestas de red para acceso sin conexión.

---

**Pregunta 2:** ¿Cuál de las siguientes describe mejor el papel de un service worker en una aplicación web?

**✅ Respuesta:** Un archivo JavaScript especial que se ejecuta en segundo plano, gestionando solicitudes de red y almacenando recursos en caché.

---

**Pregunta 3:** ¿Qué es una solicitud de red en el contexto de una aplicación web?

**✅ Respuesta:** Una solicitud realizada por un navegador web o aplicación a un servidor para recuperar datos o recursos a través de Internet.

---

### Lectura 6: ¿Cuáles son algunos patrones negativos asociados con el almacenamiento del lado del cliente?

**Pregunta 1:** ¿Cuál es un uso potencialmente negativo de las cookies en el desarrollo web?

**✅ Respuesta:** Rastrear el comportamiento del usuario en múltiples sitios web.

---

**Pregunta 2:** ¿Qué es la huella digital del navegador?

**✅ Respuesta:** Una forma de identificar usuarios basándose en las características del navegador y del sistema.

---

**Pregunta 3:** ¿Por qué almacenar información sensible como contraseñas en `localStorage` es un riesgo de seguridad?

**✅ Respuesta:** Los datos en localStorage no están cifrados.

---

### Lectura 7: ¿Cómo puedes usar cookies para almacenar datos arbitrarios, normalmente controlados por encabezados HTTP?

**Pregunta 1:** ¿Cuál es el propósito del parámetro 'expires' al establecer una cookie?

**✅ Respuesta:** Le dice al navegador cuándo eliminar la cookie.

---

**Pregunta 2:** ¿Cómo puedes almacenar una estructura de datos compleja como un objeto en una cookie?

**✅ Respuesta:** Convirtiendo el objeto a una cadena JSON.

---

**Pregunta 3:** ¿Cuál es una posible desventaja de almacenar grandes cantidades de datos en cookies?

**✅ Respuesta:** Puede ralentizar tu aplicación web.

---

### Lectura 8: ¿Qué es IndexedDB y cómo funciona?

**Pregunta 1:** ¿Cuál es una característica clave de las operaciones de `IndexedDB`?

**✅ Respuesta:** Siempre son asincrónicos.

---

**Pregunta 2:** ¿Cuál es la principal ventaja de usar `IndexedDB` sobre `localStorage`?

**✅ Respuesta:** IndexedDB admite almacenar objetos complejos de JavaScript directamente.

---

**Pregunta 3:** En `IndexedDB`, ¿a qué se parece más un almacén de objetos en las bases de datos relacionales tradicionales?

**✅ Respuesta:** Una tabla.

---

### Lectura 9: ¿Qué son las cachés y los trabajadores de servicio, y cómo funcionan?

**Pregunta 1:** ¿Cuál es el propósito principal de un trabajador de servicio en una aplicación progresiva?

**✅ Respuesta:** Para interceptar solicitudes de red y gestionar el almacenamiento en caché.

---

**Pregunta 2:** En el contexto de las PWAs, ¿con qué ayuda principalmente el almacenamiento en caché?

**✅ Respuesta:** Mejorar la funcionalidad y la velocidad sin conexión.

---

**Pregunta 3:** ¿Cuál es una característica clave de las Progressive Web Apps (PWAs)?

**✅ Respuesta:** Pueden funcionar sin conexión y ser instaladas en las pantallas de inicio.

---

## TALLER — Crear una aplicación de tareas con localStorage

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-todo-app/step-N`

En este taller construirás una aplicación de tareas que persiste datos usando `localStorage` y operaciones CRUD.

---

### Paso 1 — Obtener el formulario de tareas y el diálogo de confirmación

Usa `getElementById` para obtener el elemento con el id `task-form` y asígnalo a `taskForm`. Luego haz lo mismo para `confirm-close-dialog` asignándolo a `confirmCloseDialog`. Por último, obtén el botón con id `open-task-form-btn` y asígnalo a `openTaskFormBtn`.

**✅ Respuesta:**
```js
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
```

---

### Paso 2 — Obtener los botones del formulario

Obtén los elementos con los ids `close-task-form-btn`, `add-or-update-task-btn` y `cancel-btn` y asígnalos a `closeTaskFormBtn`, `addOrUpdateTaskBtn` y `cancelBtn`.

**✅ Respuesta:**
```js
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
```

---

### Paso 3 — Obtener el botón descartar, el contenedor y el campo de título

Obtén los elementos con los ids `discard-btn`, `tasks-container` y `title-input` y asígnalos a `discardBtn`, `tasksContainer` y `titleInput`.

**✅ Respuesta:**
```js
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
```

---

### Paso 4 — Obtener los campos de fecha y descripción

Obtén los elementos con los ids `date-input` y `description-input` y asígnalos a `dateInput` y `descriptionInput`.

**✅ Respuesta:**
```js
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
```

---

### Paso 5 — Declarar el array taskData y la variable currentTask

Declara un array vacío llamado `taskData` con `const` y una variable `currentTask` inicializada como objeto vacío con `let`.

**✅ Respuesta:**
```js
const taskData = [];
let currentTask = {};
```

---

### Paso 6 — Agregar evento al botón "Add New Task"

Agrega un event listener de clic a `openTaskFormBtn` que alterne la clase `hidden` en `taskForm`.

**✅ Respuesta:**
```js
openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"));
```

---

### Paso 7 — Agregar evento al botón de cerrar el formulario

Agrega un event listener de clic a `closeTaskFormBtn` que muestre el diálogo de confirmación con `showModal()`.

**✅ Respuesta:**
```js
closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});
```

---

### Paso 8 — Agregar evento al botón Cancelar

Agrega un event listener de clic a `cancelBtn` que cierre el diálogo de confirmación con `close()`.

**✅ Respuesta:**
```js
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
```

---

### Paso 9 — Agregar evento al botón Descartar

Agrega un event listener de clic a `discardBtn` que cierre el diálogo de confirmación y alterne la clase `hidden` en `taskForm`.

**✅ Respuesta:**
```js
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});
```

---

### Paso 10 — Agregar evento submit al formulario

Agrega un event listener de tipo `submit` a `taskForm` que prevenga el comportamiento por defecto con `e.preventDefault()`.

**✅ Respuesta:**
```js
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

---

### Paso 11 — Buscar el índice de la tarea actual

Dentro del manejador de `submit`, usa `findIndex` para buscar en `taskData` el elemento cuyo `id` coincide con `currentTask.id`. Asigna el resultado a `dataArrIndex`.

**✅ Respuesta:**
```js
const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
```

---

### Paso 12 — Crear el objeto taskObj vacío

Dentro del manejador de `submit`, crea `taskObj` con `const` asignándole un objeto vacío. Luego imprime `taskObj` en la consola.

**✅ Respuesta:**
```js
const taskObj = {};
console.log(taskObj);
```

---

### Paso 13 — Agregar la propiedad id con titleInput.value

Agrega la propiedad `id` a `taskObj` y asígnale el valor de `titleInput.value`.

**✅ Respuesta:**
```js
const taskObj = {
  id: titleInput.value
};
```

---

### Paso 14 — Convertir el id a minúsculas

Actualiza el valor de `id` para convertirlo a minúsculas usando `.toLowerCase()`.

**✅ Respuesta:**
```js
id: titleInput.value.toLowerCase()
```

---

### Paso 15 — Dividir el id en palabras con split()

Encadena `.split(" ")` a `titleInput.value.toLowerCase()` para dividir la cadena en un array de palabras.

**✅ Respuesta:**
```js
id: titleInput.value.toLowerCase().split(" ")
```

---

### Paso 16 — Unir las palabras con guiones usando join()

Encadena `.join("-")` al resultado anterior para unir las palabras con guiones.

**✅ Respuesta:**
```js
id: titleInput.value.toLowerCase().split(" ").join("-")
```

---

### Paso 17 — Convertir el id a template literal

Envuelve la expresión completa en un template literal usando `${}`.

**✅ Respuesta:**
```js
id: `${titleInput.value.toLowerCase().split(" ").join("-")}`
```

---

### Paso 18 — Agregar Date.now() al id

Agrega `-${Date.now()}` al final del template literal para hacer el `id` único usando milisegundos desde epoch.

**✅ Respuesta:**
```js
id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`
```

---

### Paso 19 — Agregar title, date y description al taskObj

Agrega las propiedades `title`, `date` y `description` al objeto `taskObj` con los valores de los respectivos inputs.

**✅ Respuesta:**
```js
title: titleInput.value,
date: dateInput.value,
description: descriptionInput.value,
```

---

### Paso 20 — Eliminar console.log(taskObj)

Elimina la declaración `console.log(taskObj)` del código.

**✅ Respuesta:** Borra la línea `console.log(taskObj)`.

---

### Paso 21 — Agregar taskObj al array si es nuevo

Verifica si `dataArrIndex` es `-1` y, en ese caso, usa `unshift()` para agregar `taskObj` al inicio del array `taskData`.

**✅ Respuesta:**
```js
if (dataArrIndex === -1) {
  taskData.unshift(taskObj);
}
```

---

### Paso 22 — Iterar sobre taskData con forEach

Llama a `forEach` sobre `taskData` usando destructuring para extraer `id`, `title`, `date` y `description` de cada elemento.

**✅ Respuesta:**
```js
taskData.forEach(({id, title, date, description}) => {
});
```

---

### Paso 23 — Agregar contenido HTML al contenedor

Dentro del `forEach`, usa `+=` para concatenar al `innerHTML` de `tasksContainer` un template literal vacío.

**✅ Respuesta:**
```js
tasksContainer.innerHTML += ``;
```

---

### Paso 24 — Crear el div con la clase task

Dentro del template literal, crea un `div` con `class="task"` e `id="${id}"`.

**✅ Respuesta:**
```js
tasksContainer.innerHTML += `
  <div class="task" id="${id}">
  </div>
`;
```

---

### Paso 25 — Mostrar el título de la tarea

Dentro del div `.task`, agrega un párrafo con `<strong>Title:</strong>` y el valor de `${title}`.

**✅ Respuesta:**
```html
<p><strong>Title:</strong> ${title}</p>
```

---

### Paso 26 — Mostrar la fecha de la tarea

Agrega otro párrafo con `<strong>Date:</strong>` y el valor de `${date}`.

**✅ Respuesta:**
```html
<p><strong>Date:</strong> ${date}</p>
```

---

### Paso 27 — Mostrar la descripción de la tarea

Agrega un párrafo con `<strong>Description:</strong>` y el valor de `${description}`.

**✅ Respuesta:**
```html
<p><strong>Description:</strong> ${description}</p>
```

---

### Paso 28 — Agregar los botones Edit y Delete

Agrega dos botones dentro del div `.task`: uno con texto `Edit` y otro con texto `Delete`, ambos de `type="button"` y `class="btn"`.

**✅ Respuesta:**
```html
<button type="button" class="btn">Edit</button>
<button type="button" class="btn">Delete</button>
```

---

### Paso 29 — Ocultar el formulario tras enviar

Después del `forEach` en el manejador de `submit`, alterna la clase `hidden` en `taskForm`.

**✅ Respuesta:**
```js
taskForm.classList.toggle("hidden");
```

---

### Paso 30 — Crear la función reset

Crea una función flecha llamada `reset` y asígnala a una variable `const` con cuerpo vacío.

**✅ Respuesta:**
```js
const reset = () => {};
```

---

### Paso 31 — Limpiar los campos dentro de reset

Dentro de `reset`, limpia los valores de los tres inputs, alterna la clase `hidden` del formulario y reinicia `currentTask` a un objeto vacío.

**✅ Respuesta:**
```js
titleInput.value = "";
dateInput.value = "";
descriptionInput.value = "";
taskForm.classList.toggle("hidden");
currentTask = {};
```

---

### Paso 32 — Reemplazar toggle por reset en submit

En el manejador de `submit`, reemplaza `taskForm.classList.toggle("hidden")` por una llamada a `reset()`.

**✅ Respuesta:**
```js
reset();
```

---

### Paso 33 — Reemplazar toggle por reset en discardBtn

En el listener de `discardBtn`, reemplaza `taskForm.classList.toggle("hidden")` por una llamada a `reset()`.

**✅ Respuesta:**
```js
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});
```

---

### Paso 34 — Mostrar diálogo solo si hay valores en el formulario

Modifica el listener de `closeTaskFormBtn`: crea `formInputsContainValues` verificando si algún input tiene valor. Si los hay, muestra el diálogo; si no, llama a `reset()`.

**✅ Respuesta:**
```js
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});
```

---

### Paso 35 — Crear la función addOrUpdateTask

Crea una función flecha `addOrUpdateTask` que mueva el `dataArrIndex`, el `taskObj` y el bloque `if` del manejador `submit` dentro de ella.

**✅ Respuesta:**
```js
const addOrUpdateTask = () => {
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }
};
```

---

### Paso 36 — Crear la función updateTaskContainer

Crea una función flecha `updateTaskContainer` y mueve el bucle `forEach` dentro de ella. Antes del `forEach`, asigna `""` a `tasksContainer.innerHTML`.

**✅ Respuesta:**
```js
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";
  taskData.forEach(({id, title, date, description}) => {
    tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn">Edit</button>
        <button type="button" class="btn">Delete</button>
      </div>
    `;
  });
};
```

---

### Paso 37 — Llamar updateTaskContainer y reset en addOrUpdateTask

Dentro de `addOrUpdateTask`, después del bloque `if`, llama a `updateTaskContainer()` y a `reset()`.

**✅ Respuesta:**
```js
updateTaskContainer();
reset();
```

---

### Paso 38 — Llamar addOrUpdateTask en el submit

En el manejador de `submit`, reemplaza `reset()` por una llamada a `addOrUpdateTask()`.

**✅ Respuesta:**
```js
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});
```

---

### Paso 39 — Limpiar el contenedor antes del forEach

Dentro de `updateTaskContainer`, añade `tasksContainer.innerHTML = "";` antes del `forEach`.

**✅ Respuesta:**
```js
tasksContainer.innerHTML = "";
```

---

### Paso 40 — Agregar onclick a los botones Edit y Delete

En el template del `forEach`, agrega `onclick="editTask(this)"` al botón Edit y `onclick="deleteTask(this)"` al botón Delete.

**✅ Respuesta:**
```html
<button onclick="editTask(this)" type="button" class="btn">Edit</button>
<button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
```

---

### Paso 41 — Crear la función deleteTask

Crea una función flecha `deleteTask` que reciba `buttonEl` como parámetro con cuerpo vacío.

**✅ Respuesta:**
```js
const deleteTask = (buttonEl) => {};
```

---

### Paso 42 — Encontrar el índice del elemento a eliminar

Dentro de `deleteTask`, usa `findIndex` para encontrar en `taskData` el elemento cuyo `id` coincide con `buttonEl.parentElement.id`.

**✅ Respuesta:**
```js
const dataArrIndex = taskData.findIndex(
  (item) => item.id === buttonEl.parentElement.id
);
```

---

### Paso 43 — Eliminar el elemento del DOM y del array

Dentro de `deleteTask`, elimina el elemento padre del botón con `.remove()` y luego elimina el elemento del array `taskData` usando `.splice(dataArrIndex, 1)`.

**✅ Respuesta:**
```js
buttonEl.parentElement.remove();
taskData.splice(dataArrIndex, 1);
```

---

### Paso 44 — Crear la función editTask

Crea una función flecha `editTask` que reciba `buttonEl` como parámetro con cuerpo vacío.

**✅ Respuesta:**
```js
const editTask = (buttonEl) => {};
```

---

### Paso 45 — Encontrar el índice de la tarea a editar

Dentro de `editTask`, usa `findIndex` para encontrar en `taskData` el elemento cuyo `id` coincide con `buttonEl.parentElement.id`.

**✅ Respuesta:**
```js
const dataArrIndex = taskData.findIndex(
  (item) => item.id === buttonEl.parentElement.id
);
```

---

### Paso 46 — Asignar la tarea actual a currentTask

Dentro de `editTask`, asigna `taskData[dataArrIndex]` a `currentTask`.

**✅ Respuesta:**
```js
currentTask = taskData[dataArrIndex];
```

---

### Paso 47 — Rellenar los inputs con los valores de la tarea

Dentro de `editTask`, asigna los valores de `currentTask` a los campos `titleInput.value`, `dateInput.value` y `descriptionInput.value`.

**✅ Respuesta:**
```js
titleInput.value = currentTask.title;
dateInput.value = currentTask.date;
descriptionInput.value = currentTask.description;
```

---

### Paso 48 — Cambiar el texto del botón a "Update Task"

Dentro de `editTask`, cambia el `innerText` de `addOrUpdateTaskBtn` a `"Update Task"`.

**✅ Respuesta:**
```js
addOrUpdateTaskBtn.innerText = "Update Task";
```

---

### Paso 49 — Mostrar el formulario al editar

Dentro de `editTask`, alterna la clase `hidden` en `taskForm`.

**✅ Respuesta:**
```js
taskForm.classList.toggle("hidden");
```

---

### Paso 50 — Actualizar tarea existente con else

Dentro de `addOrUpdateTask`, añade un bloque `else` que asigne `taskObj` a `taskData[dataArrIndex]` cuando el índice no sea `-1`.

**✅ Respuesta:**
```js
} else {
  taskData[dataArrIndex] = taskObj;
}
```

---

### Paso 51 — Verificar si los valores del formulario cambiaron

En el listener de `closeTaskFormBtn`, añade `formInputValuesUpdated` que verifica si algún campo del formulario es distinto al valor de `currentTask`. Actualiza la condición del `if` para requerir ambas variables con `&&`.

**✅ Respuesta:**
```js
const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;
if (formInputsContainValues && formInputValuesUpdated) {
```

---

### Paso 52 — Guardar datos en localStorage con setItem()

Usa `localStorage.setItem("data", myTaskArr)` para guardar el array `myTaskArr` directamente en `localStorage` y observa el resultado en DevTools.

**✅ Respuesta:**
```js
localStorage.setItem("data", myTaskArr);
```

---

### Paso 53 — Inspeccionar localStorage en DevTools

Abre las herramientas de desarrollo del navegador y navega a `Application > Local Storage` para ver el valor almacenado con la clave `data`. Observa cómo aparece `[object Object],[object Object],[object Object]` porque `localStorage` solo almacena cadenas.

**✅ Respuesta:** No se requiere código. Haz clic en "Check Your Code" para continuar.

---

### Paso 54 — Convertir a JSON con JSON.stringify()

Envuelve `myTaskArr` en `JSON.stringify()` antes de guardarlo en `localStorage` para que se almacene como cadena JSON legible.

**✅ Respuesta:**
```js
localStorage.setItem("data", JSON.stringify(myTaskArr));
```

---

### Paso 55 — Recuperar datos con getItem()

Usa `localStorage.getItem("data")` para recuperar el array y asígnalo a `getTaskArr`. Luego imprime `getTaskArr` en la consola.

**✅ Respuesta:**
```js
const getTaskArr = localStorage.getItem("data");
console.log(getTaskArr);
```

---

### Paso 56 — Parsear JSON con JSON.parse()

Usa `JSON.parse(localStorage.getItem("data"))` para recuperar los datos en su forma original. Asígnalo a `getTaskArrObj` e imprímelo en la consola.

**✅ Respuesta:**
```js
const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);
```

---

### Paso 57 — Eliminar un elemento con removeItem()

Usa `localStorage.removeItem("data")` para eliminar el elemento con clave `data`. Abre la consola y verás `null`.

**✅ Respuesta:**
```js
localStorage.removeItem("data");
```

---

### Paso 58 — Limpiar el código de práctica

Elimina el array `myTaskArr` y todo el código de práctica de `localStorage` añadido en los pasos anteriores.

**✅ Respuesta:** Elimina las líneas con `myTaskArr`, `localStorage.setItem`, `localStorage.removeItem`, `getTaskArr`, `getTaskArrObj` y los `console.log` relacionados.

---

### Paso 59 — Guardar taskData en localStorage al añadir/actualizar

Dentro de `addOrUpdateTask`, antes de llamar a `updateTaskContainer()`, usa `localStorage.setItem("data", JSON.stringify(taskData))` para persistir las tareas.

**✅ Respuesta:**
```js
localStorage.setItem("data", JSON.stringify(taskData));
```

---

### Paso 60 — Guardar taskData en localStorage al eliminar

Dentro de `deleteTask`, después de `taskData.splice(dataArrIndex, 1)`, vuelve a guardar `taskData` en `localStorage`.

**✅ Respuesta:**
```js
localStorage.setItem("data", JSON.stringify(taskData));
```

---

### Paso 61 — Inicializar taskData desde localStorage

Cambia la declaración de `taskData` para que cargue los datos de `localStorage` al iniciar. Si no hay datos, usa un array vacío como valor por defecto.

**✅ Respuesta:**
```js
const taskData = JSON.parse(localStorage.getItem("data")) || [];
```

---

### Paso 62 — Mostrar tareas al cargar la página

Verifica si `taskData` tiene elementos usando su longitud y, si es así, llama a `updateTaskContainer()`.

**✅ Respuesta:**
```js
if (taskData.length) {
  updateTaskContainer();
}
```

---

### Paso 63 — Restablecer el texto del botón en reset

Dentro de la función `reset`, añade `addOrUpdateTaskBtn.innerText = "Add Task"` para corregir el bug que mostraba "Update Task" al abrir el formulario de nueva tarea.

**✅ Respuesta:**
```js
addOrUpdateTaskBtn.innerText = "Add Task";
```

---

### Paso 64 — Validar que el título no esté vacío

Al inicio de `addOrUpdateTask`, añade una verificación con `!titleInput.value.trim()`. Si es verdadera, muestra una alerta con `"Please provide a title"` y retorna.

**✅ Respuesta:**
```js
if (!titleInput.value.trim()) {
  alert("Please provide a title");
  return;
}
```

---

### Paso 65 — Crear la función removeSpecialChars

Crea una función flecha `removeSpecialChars` que reciba un string y elimine los caracteres especiales (comillas simples, dobles, guiones bajos, etc.) usando una expresión regular.

**✅ Respuesta:**
```js
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};
```

---

### Paso 66 — Aplicar removeSpecialChars al id

En la propiedad `id` de `taskObj`, llama a `removeSpecialChars(titleInput.value)` antes de encadenar `.toLowerCase()` para evitar problemas con caracteres especiales en los ids HTML.

**✅ Respuesta:**
```js
id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
```

---

## LABORATORIO — Construir una aplicación de Administrador de Marcadores

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-bookmark-manager`

Construye una app de administración de marcadores que almacene una colección de marcadores en `localStorage`. El HTML y CSS ya están provistos; debes escribir el JavaScript.

**Requisitos principales:**
1. Función `getBookmarks()` que devuelva el array `bookmarks` de `localStorage`. Si la clave no existe o no contiene un array válido de objetos con `name`, `category` y `url`, devuelve `[]`.
2. Función `displayOrCloseForm()` que alterne la clase `hidden` entre `#main-section` y `#form-section`.
3. Al hacer clic en `#add-bookmark-button`: actualiza `.category-name` con la categoría seleccionada y llama a `displayOrCloseForm`.
4. Al hacer clic en `#close-form-button`: llama a `displayOrCloseForm`.
5. Al hacer clic en `#add-bookmark-button-form`: agrega el marcador a `localStorage`, limpia los inputs y llama a `displayOrCloseForm`.
6. Función `displayOrHideCategory()` que alterne la clase `hidden` entre `#main-section` y `#bookmark-list-section`.
7. Al hacer clic en `#view-category-button`: actualiza `.category-name`, rellena `#category-list` (mensaje "No Bookmarks Found" o radio buttons con labels/links), y llama a `displayOrHideCategory`.
8. Al hacer clic en `#close-list-button`: llama a `displayOrHideCategory`.
9. Al hacer clic en `#delete-bookmark-button`: elimina el marcador del radio seleccionado de `localStorage` y actualiza la lista.

**✅ Solución — script.js:**

```js
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryNames = document.querySelectorAll(".category-name");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const categoryList = document.getElementById("category-list");

function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks");
  if (!bookmarks) return [];
  try {
    const parsed = JSON.parse(bookmarks);
    if (
      Array.isArray(parsed) &&
      parsed.every(
        (item) =>
          item &&
          typeof item === "object" &&
          "name" in item &&
          "category" in item &&
          "url" in item
      )
    ) {
      return parsed;
    }
  } catch (e) {}
  return [];
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function updateCategoryList() {
  const selectedCategory = categoryDropdown.value;
  const filtered = getBookmarks().filter(b => b.category === selectedCategory);
  categoryList.innerHTML = "";

  if (filtered.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    filtered.forEach(bookmark => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.id = bookmark.name;
      radio.name = "bookmark-radio";
      radio.value = bookmark.name;

      const label = document.createElement("label");
      label.setAttribute("for", bookmark.name);

      const anchor = document.createElement("a");
      anchor.href = bookmark.url;
      anchor.textContent = bookmark.name;
      anchor.target = "_blank";

      label.appendChild(anchor);
      categoryList.appendChild(radio);
      categoryList.appendChild(label);
    });
  }
}

addBookmarkButton.addEventListener("click", () => {
  categoryNames.forEach(el => { el.textContent = categoryDropdown.value; });
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => { displayOrCloseForm(); });

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  bookmarks.push({ name: nameInput.value, category: categoryDropdown.value, url: urlInput.value });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  nameInput.value = "";
  urlInput.value = "";
  displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", () => {
  categoryNames.forEach(el => { el.textContent = categoryDropdown.value; });
  updateCategoryList();
  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => { displayOrHideCategory(); });

deleteBookmarkButton.addEventListener("click", () => {
  const selected = document.querySelector('input[name="bookmark-radio"]:checked');
  if (!selected) return;
  const currentCategory = categoryDropdown.value;
  const updated = getBookmarks().filter(b => !(b.name === selected.value && b.category === currentCategory));
  localStorage.setItem("bookmarks", JSON.stringify(updated));
  updateCategoryList();
});
```

---

## QUIZ — Cuestionario de almacenamiento del lado del cliente y CRUD (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Crear, Leer, Actualizar, Eliminar. |
| 2 | POST |
| 3 | Actualizar |
| 4 | Los datos de localStorage persisten hasta que se eliminan explícitamente, mientras que los datos de sessionStorage se borran al finalizar la sesión de la página. |
| 5 | localStorage.setItem() |
| 6 | sessionStorage.removeItem('key') |
| 7 | PUT reemplaza toda la fuente, mientras que PATCH actualiza campos específicos. |
| 8 | El almacenamiento en caché se usa para almacenar recursos de red solicitados frecuentemente, reduciendo los tiempos de carga y mejorando el rendimiento. |
| 9 | Un pequeño fragmento de datos almacenado por el navegador web del usuario. |
| 10 | document.cookie |
| 11 | document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; |
| 12 | Las cookies solo pueden ser establecidas por el servidor. |
| 13 | Una forma de rastrear a usuarios mediante atributos de navegador y dispositivo. |
| 14 | El almacenamiento local no está cifrado y puede ser accedido fácilmente. |
| 15 | El almacenamiento del lado del cliente permite a los sitios web almacenar datos en el dispositivo del usuario. |
| 16 | IndexedDB puede manejar mayores cantidades de datos y consultas más complejas. |
| 17 | Usando get() en la referencia del almacén. |
| 18 | Transacciones de lectura y escritura. |
| 19 | Un Service Worker puede interceptar solicitudes de red después de haber sido activado. |
| 20 | Las PWAs proporcionan funcionalidad sin conexión a través de Service Workers. |

---

*Fin de la guía — Módulo: Almacenamiento del lado del cliente y operaciones CRUD*
