# Guía de Respuestas: Revisión de Fundamentos de JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué es un objeto String y en qué se diferencia del primitivo string?

**Pregunta 1:** ¿Cuál es la principal diferencia entre un string primitivo y un objeto de cadena en JavaScript?

**✅ Respuesta:** Los string primitivos son más ligeros y eficientes, mientras que los objetos de cadena proporcionan propiedades adicionales y métodos.

---

**Pregunta 2:** ¿Cuál de las siguientes opciones describe correctamente la propiedad .length de una cadena?

**✅ Respuesta:** Devuelve el número de caracteres de una cadena.

---

**Pregunta 3:** ¿Cuál será la salida del siguiente código?
```js
let str = "JavaScript";
let objStr = new String("JavaScript");
console.log(str.length === objStr.length);
```

**✅ Respuesta:** true

---

### Lectura 2: ¿Qué es el método toString() y cómo funciona?

**Pregunta 1:** ¿Cuál será la salida del siguiente código?
```js
let num = 5.7;
console.log(num.toString());
```

**✅ Respuesta:** "5.7"

---

**Pregunta 2:** ¿Cuál será la salida del siguiente código?
```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.toString());
```

**✅ Respuesta:** "1,2,3,4,5"

---

**Pregunta 3:** ¿Cuál será la salida del siguiente código?
```js
let obj = { name: "John", age: 30 };
console.log(obj.toString());
```

**✅ Respuesta:** "[object Object]"

---

### Lectura 3: ¿Qué es el constructor Number y cómo funciona para la coerción de tipos?

**Pregunta 1:** ¿Cuál es el propósito del constructor Number en JavaScript?

**✅ Respuesta:** Convierte otros tipos de datos a números y crea nuevos valores numéricos.

---

**Pregunta 2:** ¿Cómo creas un objeto número usando el constructor Number en JavaScript?

**✅ Respuesta:** Inicializándolo con la palabra clave new y pasando un número como argumento.

---

**Pregunta 3:** ¿Cuál de estas es una de las formas correctas en las que JavaScript maneja los arreglos al convertirlos a números usando el constructor Number?

**✅ Respuesta:** Un arreglo con un solo número se convierte en ese número, mientras que un arreglo vacío devuelve 0.

---

### Lectura 4: ¿Cuáles son algunas prácticas comunes para nombrar variables y funciones?

**Pregunta 1:** ¿Cuál de las siguientes es un buen nombre para una variable booleana que verifica si un usuario ha iniciado sesión?

**✅ Respuesta:** isLoggedIn

---

**Pregunta 2:** ¿Cuál es una buena convención de nomenclatura para una función que recupera información del producto?

**✅ Respuesta:** getProductInfo

---

**Pregunta 3:** ¿Cuál de las siguientes acciones deberías realizar si estás trabajando en una base de código establecida y/o con un equipo?

**✅ Respuesta:** Adhiérete a las convenciones de nombres para variables y funciones que ya han sido establecidas.

---

### Lectura 5: ¿Cómo obtienes la longitud de un arreglo y cómo puedes crear un arreglo vacío de longitud fija?

**Pregunta 1:** ¿Cuál será la salida del siguiente código?
```js
let arr = [1, 2, 3, , 5];
console.log(arr.length);
```

**✅ Respuesta:** 5

---

**Pregunta 2:** ¿Cuál de las siguientes es una forma de crear un arreglo disperso?

**✅ Respuesta:** new Array(5)

---

**Pregunta 3:** ¿Cuál será la salida del siguiente código?
```js
let arr = new Array(3).fill(1);
console.log(arr);
```

**✅ Respuesta:** [1, 1, 1]

---

### Lectura 6: ¿Qué son los linters y formateadores y cómo te ayudan con la consistencia del código?

**Pregunta 1:** ¿Cuál es el propósito principal de un linter?

**✅ Respuesta:** Señalar posibles errores y problemas de estilo.

---

**Pregunta 2:** ¿Cuál de los siguientes es un beneficio de usar un formateador de código?

**✅ Respuesta:** Asegura un estilo de código consistente en un proyecto.

---

**Pregunta 3:** ¿Dónde en el proceso de desarrollo podrías integrar un linter?

**✅ Respuesta:** Como parte del proceso de compilación, un plugin para tu editor de texto o IDE, un gancho pre-commit antes de que el código pueda ser comprometido al código base, y así sucesivamente.

---

### Lectura 7: ¿Qué es la gestión de memoria y cómo funciona en JavaScript?

**Pregunta 1:** En JavaScript, ¿quién es principalmente responsable de gestionar la memoria?

**✅ Respuesta:** El motor de JavaScript.

---

**Pregunta 2:** ¿Cómo se llama el proceso cuando JavaScript libera automáticamente memoria que ya no se necesita?

**✅ Respuesta:** Recolección de basura.

---

**Pregunta 3:** ¿Cuál de los siguientes es un posible inconveniente de la gestión automática de memoria de JavaScript?

**✅ Respuesta:** A veces puede seguir manteniendo memoria asignada que ya no se necesita.

---

### Lectura 8: ¿Qué son las clausuras y cómo funcionan?

**Pregunta 1:** ¿Cuál será la salida del siguiente código?
```js
function outer(x) {
    return function(y) {
        return x + y;
    };
}

let add5 = outer(5);
console.log(add5(3));
```

**✅ Respuesta:** 8

---

**Pregunta 2:** ¿Qué concepto demuestra el siguiente código?
```js
function createGreeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

let sayHello = createGreeter("Hello");
sayHello("Alice");
```

**✅ Respuesta:** Cierre.

---

**Pregunta 3:** ¿Cuál será la salida del siguiente código?
```js
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
```

**✅ Respuesta:** 1 / 2 / 3

---

### Lectura 9: ¿Qué es la palabra clave var y por qué ya no se sugiere su uso?

**Pregunta 1:** ¿Cuál es el alcance de una variable declarada con var fuera de cualquier función?

**✅ Respuesta:** Alcance global.

---

**Pregunta 2:** ¿Cuál será la salida del siguiente código?
```js
var x = 10;

if (true) {
  var x = 20;
  console.log(x);
}

console.log(x);
```

**✅ Respuesta:** 20 / 20

---

**Pregunta 3:** ¿Cuál de las siguientes no es una razón para evitar el uso de var en JavaScript moderno?

**✅ Respuesta:** var no está soportado en navegadores modernos.

---

### Lectura 10: ¿Qué es el hoisting?

**Pregunta 1:** ¿Qué sucede cuando una variable declarada con var es elevada?

**✅ Respuesta:** Solo la declaración se mueve al inicio.

---

**Pregunta 2:** ¿Cómo difiere la elevación de funciones de la elevación de variables?

**✅ Respuesta:** Tanto el nombre como el cuerpo de la función son elevados.

---

**Pregunta 3:** ¿Cuál es el resultado de intentar acceder a una variable declarada con let antes de su declaración en el código?

**✅ Respuesta:** Genera un ReferenceError.

---

### Lectura 11: ¿Qué es un módulo en JavaScript y cómo puedes importar y exportar módulos en tu programa?

**Pregunta 1:** ¿Qué palabra clave se utiliza para hacer que funciones, variables o clases estén disponibles para otros módulos?

**✅ Respuesta:** export

---

**Pregunta 2:** ¿Cómo importas una exportación por defecto desde un módulo?

**✅ Respuesta:** import anyName from './module.js';

---

**Pregunta 3:** ¿Cuál es el propósito de usar módulos en JavaScript?

**✅ Respuesta:** Para organizar el código en piezas manejables y reutilizables.

---

### Lectura 12: ¿Qué es el objeto arguments?

**Pregunta 1:** ¿Qué es una función variádica?

**✅ Respuesta:** Funciones que aceptan un número variable de argumentos.

---

**Pregunta 2:** ¿Qué es el objeto arguments?

**✅ Respuesta:** Un objeto similar a un arreglo que contiene los valores de los argumentos pasados a una función.

---

**Pregunta 3:** ¿Por qué no puedes usar métodos integrados de Array como includes o push en el objeto arguments?

**✅ Respuesta:** El objeto arguments no es un arreglo real, por lo que no tiene esos métodos incorporados.

---

### Lectura 13: ¿Qué son los parámetros rest y en qué se diferencian del objeto arguments?

**Pregunta 1:** ¿Cuál de las siguientes es la forma correcta de usar la sintaxis del parámetro rest en la definición de una función?

**✅ Respuesta:**
```js
function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
```

---

**Pregunta 2:** ¿Cuál de las siguientes es una restricción al usar la sintaxis del parámetro rest?

**✅ Respuesta:** Solo puedes tener un parámetro rest por definición de función.

---

**Pregunta 3:** ¿Cuál es una diferencia clave entre el objeto arguments y los parámetros rest?

**✅ Respuesta:** El parámetro rest es una instancia de Array mientras que el objeto arguments es similar a un arreglo.

---

## LABS — Soluciones

---

### Lab: Build a String Inverter (Invertir una cadena)

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

> Divide la cadena en caracteres, los invierte y los vuelve a unir.

---

### Lab: Build the Largest Number Finder (Encontrar el mayor número)

```js
function largestOfAll(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr));
}
```

> Usa `map` para recorrer cada subarreglo y `Math.max.apply` para obtener el mayor valor de cada uno.

---

### Lab: Build a First Element Finder (Encontrar el primer elemento)

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}
```

> Filtra el arreglo con la función provista y retorna el primer elemento que la cumple.

---

### Lab: Implement the Slice and Splice Algorithm (Slice y Splice)

```js
function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }
  return result;
}
```

> Copia `arr2` sin modificarlo, luego inserta cada elemento de `arr1` en la posición `n` usando `splice`.

---

### Lab: Build a Pyramid Generator (Generador de pirámide)

```js
function pyramid(char, count, isInverted) {
    const rows = []
    for (let i = 1; i <= count; i++) {
        if (isInverted) {
            rows.unshift(" ".repeat(count - i) + char.repeat(2 * i - 1))
        } else {
            rows.push(" ".repeat(count - i) + char.repeat(2 * i - 1))
        }        
    }
    return "\n" + rows.join("\n") + "\n";
}

console.log(pyramid("#", 10, false))
```

> Genera filas con espacios y caracteres para formar una pirámide. Si `isInverted` es `true`, la agrega al inicio.

---

### Lab: Build a Gradebook App (Aplicación de calificaciones)

```js
function getAverage(scores) {
    let sum = 0;
    for (const score of scores) {
      sum += score;
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
      return "A+";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
    return `Class average: ${average}. Your grade: ${grade}. You ${
      hasPassingGrade(studentScore) ? "passed" : "failed"
    } the course.`;
}
```

> Calcula promedio, asigna letra de calificación, verifica si aprobó y genera el mensaje.

---

### Lab: Restore a Coherent Narrative from Story Fragments (Restauración de historia)

```js
const compactFragments = (fragments) => {
  let compacted = [];
  let numberOfUndefined = 0;

  for (const fragment of fragments) {
    if (fragment === undefined) {
      numberOfUndefined++;
    } else {
      compacted.push(fragment);
    }
  }

  if (numberOfUndefined > 0) {
    console.log(`[COMPACTED] Removed ${numberOfUndefined} undefined fragment(s).`);
  }

  return compacted;
};

const compactedShuffledFragments = compactFragments(shuffledFragments);

const sortFragments = (fragments) => {
  let sorted = [...fragments];

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i; j > 0; j--) {
      if (sorted[j - 1].id > sorted[j].id) {
        swap(sorted, j - 1, j);
      }
    }
  }

  function swap(array, index1, index2) {
    [sorted[index1], sorted[index2]] = [sorted[index2], sorted[index1]];
  }

  return sorted;
};

const sortedFragments = sortFragments(compactedShuffledFragments);

const dedupeFragments = (sortedFragments) => {
  const shallowCopy = [...sortedFragments];
  let deduped = [shallowCopy.shift()];
  let duplicates = [];
  let currentIdOccurrence = 1;

  for (const fragmentToInsert of shallowCopy) {
    const previousFragment = deduped.at(-1);
    if (fragmentToInsert.id === previousFragment.id) {
      currentIdOccurrence++;
    } else {
      deduped.push(fragmentToInsert);
      if (currentIdOccurrence > 1) {
        duplicates.push({ id: previousFragment.id, occurrence: currentIdOccurrence });
      }
      currentIdOccurrence = 1;
    }
  }

  if (currentIdOccurrence > 1) {
    duplicates.push({ id: deduped.at(-1).id, occurrence: currentIdOccurrence });
  }

  for (const duplicate of duplicates) {
    console.log(`[DEDUPED] Fragment #${duplicate.id} appeared ${duplicate.occurrence} times, kept first occurrence.`);
  }

  return deduped;
};

const dedupedFragments = dedupeFragments(sortedFragments);

const fillMissingFragments = (sortedFragments) => {
  const shallowCopy = [...sortedFragments];
  let filled = [shallowCopy.shift()];

  for (const fragmentToInsert of shallowCopy) {
    const previousFragment = filled.at(-1);
    const numberOfMissingIDs = fragmentToInsert.id - 1 - previousFragment.id;
    for (let i = 1; i <= numberOfMissingIDs; i++) {
      const missingId = previousFragment.id + i;
      filled.push({ id: missingId, text: "[...]" });
      console.log(`[FILLED] Fragment #${missingId} missing, placeholder inserted.`)
    }
    filled.push(fragmentToInsert);
  }

  return filled;
};

const filledFragments = fillMissingFragments(dedupedFragments);

const assembleStory = (sortedFragments) => {
  const texts = [];
  for (const fragment of sortedFragments) {
    texts.push(fragment.text);
  }
  return texts.join("\n");
};

console.log("\nHere is the assembled story:\n");
console.log(assembleStory(filledFragments));
```

> Este lab tiene múltiples funciones: elimina `undefined`, ordena por `id`, elimina duplicados, rellena huecos con `[...]`, y finalmente ensambla la historia.

---

### Lab: Build a Title Case Converter (Convertidor a mayúsculas iniciales)

```js
function titleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}
```

> Divide en palabras, pone en mayúscula la primera letra de cada una y el resto en minúscula.

---

### Lab: Implement a Falsy Remover (Eliminar valores falsy)

```js
function bouncer(arr) {
  return arr.filter(e => e);
}
```

> Usa `filter` con la función identidad para eliminar todos los valores falsy (`false`, `null`, `0`, `""`, `undefined`, `NaN`).

---

### Lab: Build an Inventory Management Program (Gestión de inventario)

```js
const inventory = [];

const findProductIndex = (productName) => {
    let productIndex = -1;
    inventory.forEach((element, index) => {
        if (element.name === productName.toLowerCase()) {
            productIndex = index;
        }
    })
    return productIndex;
}

const addProduct = (product) => {
    product.name = product.name.toLowerCase();
    const productIndex = findProductIndex(product.name);
    if (productIndex < 0) {
        inventory.push(product);
        console.log(`${product.name} added to inventory`)
        return;
    }
    inventory[productIndex].quantity += product.quantity;
    console.log(`${product.name} quantity updated`)
}

const removeProduct = (productName, productQuantity) => {
    productName = productName.toLowerCase();
    const productIndex = findProductIndex(productName);
    if (productIndex < 0) {
        console.log(`${productName} not found`);
        return;
    }
    const foundProduct = inventory[productIndex];
    if (foundProduct.quantity >= productQuantity) {
        foundProduct.quantity -= productQuantity;
        console.log(`Remaining ${productName} pieces: ${foundProduct.quantity}`)
        if (!foundProduct.quantity) {
            inventory.splice(productIndex, 1);
        }
        return;
    }
    console.log(`Not enough ${productName} available, remaining pieces: ${foundProduct.quantity}`);
}
```

> Gestiona un inventario con operaciones de agregar y remover productos, con normalización de nombres a minúsculas.

---

### Lab: Implement a Unique Sorted Union (Unión ordenada sin duplicados)

```js
const uniteUnique = (...arrays) => {
  return arrays.reduce((a, b) => {
    return [
      ...a,
      ...b.filter((e, currentIndex) => b.indexOf(e) === currentIndex && a.indexOf(e) === -1)
    ];
  }, []);
};
```

> Usa rest parameters y `reduce` para combinar múltiples arreglos eliminando duplicados.

---

### Lab: Build a Password Generator App (Generador de contraseñas)

```js
const generatePassword = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
};

const password = generatePassword(12);
console.log(`Generated password: ${password}`);
```

> Genera una contraseña aleatoria de la longitud dada usando caracteres de un conjunto predefinido.

---

### Lab: Design a Sum All Numbers Algorithm (Suma de todos los números en un rango)

```js
function sumAll(arr) {
  let sum = 0;
  
  arr.sort((a, b) => a - b);

  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }

  return sum;
}
```

> Ordena el arreglo para encontrar el mínimo y máximo, luego suma todos los números en ese rango.

---

### Lab: Implement a DNA Pair Generator (Generador de pares de ADN)

```js
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```

> Crea un mapa de pares de bases de ADN y usa `map` para devolver cada base con su par complementario.

---

### Lab: Implement an HTML Entity Converter (Convertidor de entidades HTML)

```js
const map = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(char) {
    return map[char];
  });
}
```

> Usa una expresión regular y un mapa de sustitución para convertir caracteres especiales a entidades HTML.

---

### Lab: Build an Odd Fibonacci Sum Calculator (Suma de Fibonacci impares)

```js
function sumFibs(num) {
  let a = 0, b = 1;
  let sum = 0;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b;
    }
    [a, b] = [b, a + b];
  }

  return sum;
}
```

> Genera la secuencia de Fibonacci hasta `num` y suma solo los valores impares.

---

### Lab: Implement an Element Skipper (Saltador de elementos)

```js
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```

> Elimina elementos del inicio del arreglo hasta que el primero cumpla la condición dada.

---

### Lab: Build a Playlist Remix Engine (Motor de remix de playlist)

```js
function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) return [];

  const result = [];

  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];
    if (!Array.isArray(playlist)) continue;

    for (let j = 0; j < playlist.length; j++) {
      const track = playlist[j];
      result.push({
        trackId: track.trackId,
        artist: track.artist,
        title: track.title,
        votes: track.votes,
        bpm: track.bpm,
        source: [i, j]
      });
    }
  }
  return result;
}

function scoreTracks(tracks) {
  const targetBpm = 120;
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];

    result.push({
      trackId: track.trackId,
      artist: track.artist,
      title: track.title,
      votes: track.votes,
      bpm: track.bpm,
      source: track.source,
      score: (track.votes * 10) - Math.abs(track.bpm - targetBpm)
    });
  }
  return result;
}

function dedupeTracks(tracks) {
  const seenTrackIds = [];
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    if (!seenTrackIds.includes(tracks[i].trackId)) {
      seenTrackIds.push(tracks[i].trackId);
      result.push(tracks[i]);
    }
  }
  return result;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const artists = [];
  const artistCounts = [];
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    const artist = tracks[i].artist;
    const artistIndex = artists.indexOf(artist);

    if (artistIndex === -1) {
      artists.push(artist);
      artistCounts.push(1);
      result.push(tracks[i]);
    } else if (artistCounts[artistIndex] < maxPerArtist) {
      artistCounts[artistIndex]++;
      result.push(tracks[i]);
    }
  }

  return result;
}

function buildSchedule(tracks) {
  const schedule = [];

  for (let i = 0; i < tracks.length; i++) {
    schedule.push({
      slot: i + 1,
      trackId: tracks[i].trackId
    });
  }

  return schedule;
}
```

> Lab complejo con múltiples funciones: aplana playlists, puntúa canciones por votos y BPM, elimina duplicados, aplica cuota por artista y construye el horario final.

---

## REVISIÓN — Temas cubiertos

Este módulo es una página de revisión (una sola pantalla). Solo debes leer el contenido y hacer clic en **Enviar** para completarlo. No tiene pasos individuales ni código que escribir.

**Temas que cubre:**

- **Constructor de Cadenas y toString()**: `new String("texto")` crea un objeto cadena. `toString()` convierte números, booleanos, arreglos y objetos a cadena. Acepta radix (base 2–36).
- **Constructor Number**: `new Number("34")` crea objeto Number. `Number('100')` convierte a primitivo número.
- **Mejores Prácticas para Nombrar**: camelCase para variables y funciones. Prefijos `is`, `has`, `can` para booleanos. Prefijos `get`/`set` para funciones de datos. `handle`/`Handler` para manejadores de eventos. `i`, `j`, `k` para iteradores en bucles.
- **Arreglos Dispersos**: arreglos con espacios vacíos (ej: `[1, , , 4]`). Diferente de `undefined`. Longitud incluye los huecos.
- **Linters y Formateadores**: Linter (ESLint) detecta errores. Formateador (Prettier) aplica estilo consistente.
- **Gestión de Memoria**: JavaScript usa gestión automática (recolección de basura). No necesitas liberar memoria manualmente.
- **Clausura**: Función que accede a variables de su ámbito exterior incluso después de que esa función haya retornado.
- **var y Hoisting**: `var` puede redeclararse. `var` tiene ámbito de función (no de bloque). Las declaraciones `var` se elevan e inicializan como `undefined`. `let`/`const` se elevan pero quedan en "zona temporalmente muerta".
- **Módulos, Importaciones y Exportaciones**: `export function` = exportación nombrada. `export default function` = exportación por defecto. `import { name }` = importación nombrada. `import name` = importación por defecto. `import * as alias` = importación de espacio de nombres.

---

## QUIZ — Cuestionario de Fundamentos en JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | `new String("Hello World");` |
| 2 | Con el método `.toString()`. |
| 3 | JavaScript envuelve temporalmente el primitivo de cadena en un objeto String. |
| 4 | `"8,9,10"` |
| 5 | `new Number("123")` |
| 6 | `1` y `0`. |
| 7 | `NaN` y `0`. |
| 8 | `hasPermission` |
| 9 | `handleSubmit` |
| 10 | Un array donde uno o más índices no están asignados a un valor. |
| 11 | `const arr = Array.from({ length: 5 });` |
| 12 | Para detectar posibles errores e incidencias en el código. |
| 13 | Aseguran un estilo de código consistente. |
| 14 | El motor de tiempo de ejecución. |
| 15 | `3` (primera llamada) y luego `6` (segunda llamada) |
| 16 | El proceso de mover las declaraciones de variables a la parte superior de su alcance. |
| 17 | Son accesibles fuera de su bloque. |
| 18 | Para organizar el código en unidades reutilizables. |
| 19 | `<script type="module" src="app.js"></script>` |
| 20 | `export function calculateSum(a, b) { return a + b; }` en utils.js e `import { calculateSum } from './utils.js';` en app.js |

---

*Fin de la guía — Módulo: Revisión de Fundamentos de JavaScript*
