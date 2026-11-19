# Guía de Respuestas: JavaScript asíncrono
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué es JavaScript asíncrono?

**Pregunta 1:** ¿Cuál es la mejor definición de código asíncrono?

**✅ Respuesta:** El código síncrono se ejecuta secuencialmente, mientras que el código asíncrono se ejecuta de forma concurrente.

---

**Pregunta 2:** ¿Cuál de las siguientes es una ventaja del código asíncrono?

**✅ Respuesta:** Todas las anteriores.

---

**Pregunta 3:** ¿Por qué se usa el código asíncrono en el desarrollo web?

**✅ Respuesta:** Mayor capacidad de respuesta de las aplicaciones.

---

### Lectura 2: Atributos async y defer

**Pregunta 1:** ¿Por qué se recomienda cargar scripts de JavaScript de forma asíncrona?

**✅ Respuesta:** Puede mejorar el rendimiento general de carga de la página.

---

**Pregunta 2:** ¿Qué ocurre cuando se cargan múltiples scripts con el atributo `async`?

**✅ Respuesta:** El orden es impredecible.

---

**Pregunta 3:** ¿Cuál es la diferencia clave entre `async` y `defer`?

**✅ Respuesta:** Los scripts con `async` pueden ejecutarse antes de que el HTML esté completamente analizado.

---

### Lectura 3: La API Fetch

**Pregunta 1:** ¿Para qué se utiliza la API Fetch en JavaScript?

**✅ Respuesta:** Para hacer solicitudes de red y obtener recursos.

---

**Pregunta 2:** ¿En qué formato se suelen recibir los datos de una API REST?

**✅ Respuesta:** JSON

---

**Pregunta 3:** En el contexto de la API Fetch, ¿qué son los callbacks?

**✅ Respuesta:** Funciones de JavaScript.

---

### Lectura 4: La API Fetch con métodos HTTP

**Pregunta 1:** ¿Cuál es el método HTTP predeterminado de la API Fetch?

**✅ Respuesta:** `GET`

---

**Pregunta 2:** Cuando se envían datos al servidor con un método `POST`, ¿qué debe hacerse con el cuerpo de la solicitud?

**✅ Respuesta:** Convertirlo a una cadena JSON.

---

**Pregunta 3:** ¿Qué hace el método `.json()` de la API Fetch?

**✅ Respuesta:** Analiza el cuerpo de la respuesta como JSON.

---

### Lectura 5: Promesas

**Pregunta 1:** ¿Cuáles son los tres estados posibles de una Promesa en JavaScript?

**✅ Respuesta:** Pendiente (Pending), Cumplida (Fulfilled) o Rechazada (Rejected).

---

**Pregunta 2:** ¿Para qué se usa el método `.then()` en una Promesa?

**✅ Respuesta:** Para especificar qué ocurre cuando una Promesa se cumple.

---

**Pregunta 3:** ¿Dónde debe colocarse `.catch()` en una cadena de Promesas?

**✅ Respuesta:** Al final de la cadena.

---

### Lectura 6: Async/Await

**Pregunta 1:** ¿Para qué sirve la palabra clave `async` antes de una función?

**✅ Respuesta:** Para indicar que una función siempre retornará una Promesa.

---

**Pregunta 2:** ¿Dónde puede usarse la palabra clave `await`?

**✅ Respuesta:** Dentro de funciones `async`.

---

**Pregunta 3:** ¿Qué ocurre cuando una función async lanza un error?

**✅ Respuesta:** El error puede capturarse usando un bloque `try...catch`.

---

### Lectura 7: El motor JavaScript

**Pregunta 1:** ¿Cuál es el propósito del motor de JavaScript?

**✅ Respuesta:** Leer, interpretar y ejecutar código JavaScript.

---

**Pregunta 2:** ¿Qué representa el código fuente en el contexto del motor de JavaScript?

**✅ Respuesta:** El código JavaScript que escribes.

---

**Pregunta 3:** ¿Cuál es la diferencia entre el motor de JavaScript y el runtime de JavaScript?

**✅ Respuesta:** El motor analiza y ejecuta el código; el runtime proporciona el motor más características adicionales como la API Fetch y el DOM.

---

### Lectura 8: La API de Geolocalización

**Pregunta 1:** ¿Para qué se usa la API de Geolocalización?

**✅ Respuesta:** Para obtener la ubicación geográfica actual del usuario.

---

**Pregunta 2:** ¿Cómo se accede a la API de Geolocalización en el navegador?

**✅ Respuesta:** `navigator.geolocation`

---

**Pregunta 3:** ¿Cuál es un aspecto ético importante al usar la API de Geolocalización?

**✅ Respuesta:** Obtener el permiso del usuario antes de acceder a su ubicación.

---

## TALLER — Construir una página de autores de freeCodeCamp

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-fcc-authors-page/step-N`

En este taller construirás una página de autores que obtiene datos desde un endpoint JSON externo usando la API Fetch con async/await, y muestra las tarjetas de autor con un botón para cargar más resultados.

---

### Fases del taller (29 pasos)

**Fase 1 — Estructura HTML y referencias DOM (pasos 1–6):**
Crear el HTML con un `div#author-container` y un `button#load-more-btn`. Obtener referencias con `getElementById` para ambos elementos. Declarar las variables `startingIndex = 0`, `endingIndex = 8` y `authorDataArr = []`.

**Fase 2 — Función de visualización (pasos 7–13):**
Crear la función `displayAuthors(authors)` que itera con `.forEach()` sobre los autores desestructurando `{ author, image, url, bio }`. Construir el HTML de cada tarjeta con `authorContainer.innerHTML +=`. Recortar la bio a 50 caracteres si es más larga, agregando `...`.

**Fase 3 — Carga inicial con fetch (pasos 14–20):**
Crear la función async `initialFetch()` que hace `fetch` a la URL de autores. Convertir la respuesta con `.json()`. Guardar los datos en `authorDataArr`. Llamar a `displayAuthors` con el slice inicial `[startingIndex, endingIndex]`. Envolver todo en `try...catch` para mostrar mensaje de error en el contenedor.

**Fase 4 — Cargar más autores (pasos 21–26):**
Crear la función `fetchMoreAuthors()` que incrementa `startingIndex += 8` y `endingIndex += 8`. Llamar a `displayAuthors` con el nuevo slice. Si `authorDataArr.length <= endingIndex`, deshabilitar el botón, cambiar cursor y texto.

**Fase 5 — Inicialización y eventos (pasos 27–29):**
Llamar a `initialFetch()`. Agregar listener al botón: `loadMoreBtn.addEventListener('click', fetchMoreAuthors)`.

---

### Solución final completa — script.js

```js
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

const initialFetch = async () => {
  try {
    const res = await fetch(
      'https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json'
    );
    authorDataArr = await res.json();
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  } catch (err) {
    authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  }
};

const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;

  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = 'not-allowed';
    loadMoreBtn.textContent = 'No more data to load';
  }
};

const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar" />
        <div class="purple-divider"></div>
        <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
      </div>
    `;
  });
};

initialFetch();
loadMoreBtn.addEventListener('click', fetchMoreAuthors);
```

---

## LABORATORIO — Tabla de clasificación del foro de freeCodeCamp

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/build-an-fcc-forum-leaderboard`

Construye una tabla de clasificación del foro de freeCodeCamp que muestre los temas más recientes, usuarios y respuestas obtenidos desde la API del foro.

**Requisitos principales:**
1. Función `timeAgo(timestamp)` que calcula el tiempo transcurrido y retorna: `Xm ago` (minutos < 60), `Xh ago` (horas < 24), o `Xd ago`.
2. Función `viewCount(views)` que si views >= 1000, retorna `Xk`; de lo contrario retorna el número.
3. Función `forumCategory(id)` que retorna un elemento `<a>` con la clase y URL de la categoría del foro. Si el id no existe en `allCategories`, usa `General/general`.
4. Función `avatars(posters, users)` que retorna `<img>` para cada poster reemplazando `{size}` por `30` en la URL del avatar.
5. Función `showLatestPosts(data)` que construye las filas de la tabla con toda la información.
6. Función async `fetchData()` que obtiene los datos del foro y llama a `showLatestPosts`.

**✅ Solución — script.js:**

```js
const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const postsContainer = document.getElementById('posts-container');

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

const forumCategory = id => {
  let selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];
    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = 'general';
    selectedCategory.category = 'General';
    selectedCategory.id = 1;
  }

  const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
  const linkText = selectedCategory.category;
  const linkClass = `category ${selectedCategory.className}`;

  return `<a href="${url}" class="${linkClass}" target="_blank">
    ${linkText}
  </a>`;
};

const timeAgo = time => {
  const currentTime = new Date();
  const lastPost = new Date(time);
  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;
  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) return `${minutesAgo}m ago`;
  if (hoursAgo < 24) return `${hoursAgo}h ago`;
  return `${daysAgo}d ago`;
};

const viewCount = views => {
  const thousands = Math.floor(views / 1000);
  if (views >= 1000) return `${thousands}k`;
  return views;
};

const avatars = (posters, users) => {
  return posters
    .map(poster => {
      const user = users.find(user => user.id === poster.user_id);
      if (user) {
        const avatar = user.avatar_template.replace(/{size}/, 30);
        const userAvatarUrl = avatar.startsWith('/user_avatar/')
          ? avatarUrl.concat(avatar)
          : avatar;
        return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
      }
    })
    .join('');
};

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

const showLatestPosts = data => {
  const { topic_list, users } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics
    .map(item => {
      const {
        id, title, views, posts_count,
        slug, posters, category_id, bumped_at
      } = item;

      return `
    <tr>
      <td>
       <a class="post-title" target="_blank" href="${forumTopicUrl}${slug}/${id}">
        ${title}
       </a>
        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`;
    })
    .join('');
};
```

---

## REVISIÓN — JavaScript asíncrono

| Concepto | Descripción |
|---|---|
| Código asíncrono | Código que no bloquea el hilo principal; permite ejecutar otras tareas mientras espera |
| Thread (hilo) | Secuencia de instrucciones que puede ejecutarse de manera independiente |
| Atributo `async` | Descarga el script de forma asíncrona; lo ejecuta tan pronto como está listo (orden impredecible) |
| Atributo `defer` | Descarga el script de forma asíncrona pero espera a que el HTML esté completamente parseado |
| API Fetch | Interfaz para hacer peticiones de red; retorna una Promesa que resuelve a un objeto `Response` |
| Promesa (Promise) | Objeto que representa el resultado eventual (éxito o fallo) de una operación asíncrona |
| `.then()` | Método para manejar el cumplimiento de una Promesa |
| `.catch()` | Método para manejar errores en una cadena de Promesas |
| async/await | Sintaxis para escribir código asíncrono de forma más legible; `await` pausa la ejecución hasta que la Promesa se resuelve |
| Motor JS (Engine) | Lee, interpreta y ejecuta el código JavaScript |
| Runtime JS | Motor + APIs adicionales como Fetch, DOM, Timers |
| API de Geolocalización | Permite a los sitios web solicitar la ubicación geográfica del usuario vía `navigator.geolocation` |
| `getCurrentPosition()` | Método del API de Geolocalización para obtener la posición actual del dispositivo |

---

## QUIZ — Cuestionario de JavaScript asíncrono (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Pregunta | Respuesta correcta |
|---|---|---|
| 1 | ¿Qué es la programación asíncrona? | Un método para ejecutar código de forma concurrente sin bloquear el hilo principal. |
| 2 | ¿Qué es un hilo (thread)? | Una secuencia de instrucciones que puede ejecutarse de forma independiente del flujo principal del programa. |
| 3 | ¿Cuál es el propósito de la API Fetch en JavaScript? | Hacer solicitudes de red a servidores. |
| 4 | ¿Qué método HTTP se usa para enviar datos a un servidor? | `POST` |
| 5 | ¿Cuál es la forma correcta de obtener datos de una API con Fetch? | `fetch('https://api.example.com/data').then(response => response.json()).then(data => console.log(data))` |
| 6 | ¿Qué es una promesa en JavaScript? | Un objeto que representa la eventual finalización (o fallo) de una operación asíncrona. |
| 7 | ¿Qué permite hacer el encadenamiento de promesas? | Realizar una secuencia de operaciones asíncronas una tras otra. |
| 8 | ¿Qué método se usa para manejar la finalización exitosa de una promesa? | `.then()` |
| 9 | ¿Qué método se usa para manejar errores en una cadena de promesas? | `.catch()` |
| 10 | ¿Cuál de los siguientes NO es un método HTTP válido? | `SEND` |
| 11 | ¿Cuál es la sintaxis correcta para crear una función async? | `async function myFunction() {}` |
| 12 | ¿Qué hace la palabra clave `await` en una función async? | Pausa la ejecución de la función hasta que la promesa se resuelva. |
| 13 | ¿Qué API permite a los sitios web solicitar la ubicación del usuario? | API de Geolocalización |
| 14 | ¿Qué atributo descarga el script de forma asíncrona pero espera a que el HTML esté completamente analizado antes de ejecutarlo? | `defer` |
| 15 | ¿Qué retorna `fetch('https://api.example.com/data')`? | Una `Promise` que se resuelve a un objeto `Response`. |
| 16 | ¿Cuál es el método HTTP predeterminado de la API Fetch? | `GET` |
| 17 | ¿Qué método HTTP se usa para eliminar recursos en el servidor? | `DELETE` |
| 18 | ¿Cuál es la forma correcta de crear una promesa? | `const promise = new Promise((resolve, reject) => { setTimeout(() => { resolve('Data received successfully'); }, 2000); });` |
| 19 | ¿Qué atributo le indica al navegador que descargue el script de forma asíncrona mientras continúa analizando el HTML? | `async` |
| 20 | ¿Qué método de la API de Geolocalización se usa para obtener la posición actual de un dispositivo? | `getCurrentPosition()` |

---

*Fin de la guía — Módulo: JavaScript asíncrono*
