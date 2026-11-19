# Guía de Respuestas: Estructuras de Datos
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué son las estructuras de datos?

**Pregunta 1:** ¿Cuál es la diferencia entre una estructura de datos lineal y una no lineal?

**✅ Respuesta:** Una estructura lineal organiza los datos en secuencia (como arrays o listas enlazadas); una no lineal los organiza de forma jerárquica o en red (como árboles o grafos).

---

**Pregunta 2:** ¿Qué es una lista enlazada?

**✅ Respuesta:** Una colección de nodos donde cada nodo contiene un valor y un puntero al siguiente nodo.

---

**Pregunta 3:** ¿Qué ventaja tiene una lista enlazada sobre un array para insertar y eliminar elementos?

**✅ Respuesta:** No requiere desplazar elementos; solo actualiza punteros, lo que lo hace O(1) en el mejor caso.

---

### Lectura 2: Nodos y punteros

**Pregunta 1:** ¿Qué dos propiedades tiene un nodo típico en una lista enlazada?

**✅ Respuesta:** Un valor (element) y un puntero al siguiente nodo (next).

---

**Pregunta 2:** ¿Qué indica que el puntero `next` de un nodo es `null`?

**✅ Respuesta:** Que ese nodo es el último elemento de la lista.

---

**Pregunta 3:** ¿Qué propiedad de la lista apunta al primer nodo?

**✅ Respuesta:** head

---

## TALLER — Implementar una lista enlazada

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-linked-list-js/step-N`

En este taller implementarás una lista enlazada con funciones para inicializar, verificar, agregar y eliminar nodos.

---

### Paso 1 — Crear la función initList

Crea una función llamada `initList`. Dentro de ella, retorna un objeto con una propiedad `head` establecida en `null`, y una propiedad `length` de `0`.

Esta es la función que llamarás para inicializar una lista enlazada. `head` representa el primer elemento de la lista; inicialmente es `null` porque no hay ningún elemento. `length` lleva el conteo de nodos en la lista.

**✅ Respuesta:**
```js
function initList() {
  return {
    head: null,
    length: 0
  };
}
```

---

### Paso 2 — Crear la función isEmpty

Crea una función llamada `isEmpty` que toma un parámetro `list`. Dentro de la función, retorna una verificación de si la propiedad `length` de `list` es estrictamente igual a `0`.

**✅ Respuesta:**
```js
function isEmpty(list) {
  return list.length === 0;
}
```

---

### Paso 3 — Crear la función add (vacía)

Crea una función `add` con los parámetros `list` y `element`.

**✅ Respuesta:**
```js
function add(list, element) {

}
```

---

### Paso 4 — Crear el objeto node

Este nodo necesita dos propiedades: el elemento a agregar y un puntero al siguiente nodo.

Dentro de la función `add`, crea un objeto llamado `node`. Debe tener una propiedad `element` y una propiedad `next` establecida en `null`.

**✅ Respuesta:**
```js
const node = {
  element: element,
  next: null
};
```

---

### Paso 5 — Probar la lista

Crea una variable `myList` y asígnale `initList()`. Debajo, imprime en consola `isEmpty(myList)`. Luego llama a `add` con `myList` y un número de tu elección. Imprime `myList` en consola. Finalmente, imprime `isEmpty(myList)` de nuevo.

**✅ Respuesta:**
```js
const myList = initList();
console.log(isEmpty(myList));
add(myList, 42);
console.log(myList);
console.log(isEmpty(myList));
```

---

### Paso 6 — Asignar node a list.head e incrementar length

Los logs muestran `true`, `{ head: null, length: 0 }` y `true` porque nada se ha asignado aún. Asigna `node` a `list.head` y, debajo, incrementa la propiedad `length` de `list`.

**✅ Respuesta:**
```js
list.head = node;
list.length++;
```

---

### Paso 7 — Usar if para el caso de lista vacía

No es la forma correcta de manejar el primer elemento. Usa un `if` para verificar si la lista está vacía llamando a `isEmpty(list)`. Si es verdadero, mueve la línea `list.head = node` dentro del cuerpo del `if`.

**✅ Respuesta:**
```js
if (isEmpty(list)) {
  list.head = node;
}
```

---

### Paso 8 — Agregar bloque else con variable current

Si la lista no está vacía, debes encontrar su final para agregar el nuevo nodo. Abre un bloque `else`. Dentro de él, usa `let` para crear una variable `current` y asígnala a `list.head`.

**✅ Respuesta:**
```js
} else {
  let current = list.head;
}
```

---

### Paso 9 — Bucle while para recorrer la lista

Dentro del bloque `else`, crea un bucle `while` con la condición `current.next !== null`. El bucle debe seguir ejecutándose mientras el nodo actual tenga otro nodo después.

**✅ Respuesta:**
```js
while (current.next !== null) {
}
```

---

### Paso 10 — Avanzar current dentro del while

Dentro del bucle `while`, actualiza `current` a `current.next` para que el bucle avance por la lista un nodo a la vez.

**✅ Respuesta:**
```js
current = current.next;
```

---

### Paso 11 — Conectar el nuevo nodo al final

Después de encontrar el último nodo, debes conectarle el nuevo nodo. Después del `while` pero dentro del bloque `else`, asigna `current.next = node`.

**✅ Respuesta:**
```js
current.next = node;
```

---

### Paso 12 — Agregar dos números más a la lista

Para ver cómo se ve la lista con más elementos, agrega dos números más de tu elección a `myList`.

**✅ Respuesta:**
```js
add(myList, 43);
add(myList, 44);
```

---

### Paso 13 — Crear la función remove (vacía)

Crea una función `remove` con los parámetros `list` y `element`.

**✅ Respuesta:**
```js
function remove(list, element) {

}
```

---

### Paso 14 — Inicializar previous y current en remove

Dentro de `remove`, usa `let` para crear una variable `previous` establecida en `null`, y usa `let` de nuevo para crear una variable `current` establecida en `list.head`.

`current` rastrea el nodo actual desde el inicio, `previous` rastrea el nodo anterior a `current`, necesario para mantener la lista conectada al eliminar.

**✅ Respuesta:**
```js
let previous = null;
let current = list.head;
```

---

### Paso 15 — Bucle while para buscar el elemento

Crea un bucle `while` que verifique si `current` no es estrictamente `null` Y `current.element` no es estrictamente igual a `element`. Esto recorre la lista hasta llegar al final o encontrar el elemento.

**✅ Respuesta:**
```js
while (current !== null && current.element !== element) {
}
```

---

### Paso 16 — Avanzar previous y current en el bucle

Dentro del bucle, reasigna `previous` a `current`, y `current` a `current.next`. Así `current` avanza al siguiente nodo y `previous` siempre se queda un nodo atrás.

**✅ Respuesta:**
```js
previous = current;
current = current.next;
```

---

### Paso 17 — Verificar si current es null

Si `current` es `null`, significa que se llegó al final de la lista sin encontrar el elemento. Crea un `if` que verifique si `current === null`. Dentro, usa `return` para salir de la función.

**✅ Respuesta:**
```js
if (current === null) {
  return;
}
```

---

### Paso 18 — Eliminar nodo del medio o del final

Si `previous` no es `null`, el elemento no está en la cabeza sino dentro de la lista. Crea un `if` que verifique si `previous !== null`. Si es verdadero, asigna `previous.next = current.next` para omitir el nodo actual.

**✅ Respuesta:**
```js
if (previous !== null) {
  previous.next = current.next;
}
```

---

### Paso 19 — Eliminar nodo de la cabeza

Si `previous` es `null`, el elemento está en la cabeza de la lista. Agrega un bloque `else` y dentro establece `list.head = current.next`.

**✅ Respuesta:**
```js
} else {
  list.head = current.next;
}
```

---

### Paso 20 — Decrementar length

En la función `remove`, decrementa `list.length` para mantener el conteo actualizado después de eliminar un nodo.

**✅ Respuesta:**
```js
list.length--;
```

---

### Paso 21 — Probar remove y mostrar la lista final

Elimina uno de los números de la lista llamando a `remove` con `myList` y el número a eliminar. Luego imprime `myList` en la consola usando `JSON.stringify(myList, null, 2)`.

**✅ Respuesta:**
```js
remove(myList, 43);
console.log(JSON.stringify(myList, null, 2));
```

---


Implementar operaciones de lista enlazada, Completado
Laboratorio

function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;
  while (current !== null) {
    if (current.element === element) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function getAt(list, index) {
  if (index < 0 || index >= list.length) {
    return undefined;
  }

  let current = list.head;
  let count = 0;

  while (count < index) {
    current = current.next;
    count++;
  }

  return current.element;
}

function insertAt(list, index, element) {
  if (index < 0 || index > list.length) {
    return;
  }

  const node = { element, next: null };

  if (index === 0) {
    node.next = list.head;
    list.head = node;
  } else {
    let previous = null;
    let current = list.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    node.next = current;
    previous.next = node;
  }

  list.length++;
}

function removeAt(list, index) {
  if (index < 0 || index >= list.length) {
    return;
  }

  if (index === 0) {
    list.head = list.head.next;
  } else {
    let previous = null;
    let current = list.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
  }

  list.length--;
}

function clear(list) {
  list.head = null;
  list.length = 0;
}




Implementar una pila, No iniciado
Laboratorio



function initStack() {
  return {
    collection: []
  };
}

function push(stack, element) {
  stack.collection.push(element);
}

function pop(stack) {
  return stack.collection.pop();
}

function peek(stack) {
  return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
  return stack.collection.length === 0;
}

function clear(stack) {
  stack.collection.length = 0;
}






Implementar una cola, No iniciado
Laboratorio



function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  queue.collection.push(element);
}

function dequeue(queue) {
  return queue.collection.shift();
}

function front(queue) {
  return queue.collection[0];
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return queue.collection.length === 0;
}








## REVISIÓN — Estructuras de Datos

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/review-data-structures/review-data-structures`

| Función | Descripción |
|---|---|
| `initList()` | Crea una lista enlazada vacía `{ head: null, length: 0 }` |
| `isEmpty(list)` | Verifica si `list.length === 0` |
| `add(list, element)` | Agrega un nodo al final (o como head si está vacía) |
| `remove(list, element)` | Elimina el primer nodo con ese elemento |
| Nodo | Objeto con propiedades `element` y `next` |

---

## QUIZ — Cuestionario de Estructuras de Datos (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Una colección de nodos donde cada nodo tiene un valor y un puntero al siguiente. |
| 2 | { head: null, length: 0 } |
| 3 | Un valor (element) y un puntero al siguiente nodo (next). |
| 4 | Que es el último nodo de la lista. |
| 5 | list.length === 0 |
| 6 | Si la lista está vacía, el nuevo nodo se convierte en la cabeza. |
| 7 | Recorrer la lista hasta encontrar current.next === null. |
| 8 | list.length++ |
| 9 | previous rastrea el nodo anterior a current para mantener la lista conectada. |
| 10 | while (current !== null && current.element !== element) |
| 11 | Que el elemento no existe en la lista. |
| 12 | previous.next = current.next |
| 13 | list.head = current.next |
| 14 | list.length-- |
| 15 | JSON.stringify(myList, null, 2) |
| 16 | O(n) en el peor caso (recorrido completo). |
| 17 | No requiere desplazar elementos; solo actualiza punteros. |
| 18 | Una lista doblemente enlazada tiene punteros tanto al nodo anterior como al siguiente. |
| 19 | head |
| 20 | null |

---

*Fin de la guía — Módulo: Estructuras de Datos*
las respuestas estan mal, son las siguientes

Aquí tienes las respuestas correctas para cada una de las 20 preguntas del cuestionario de estructuras de datos:

1. **¿Qué describe la notación Big O en el análisis de algoritmos?**
* **Cómo crece el tiempo o el espacio en relación con el tamaño de la entrada (un límite superior).**


2. **Al comenzar un desafío algorítmico, ¿cuál es el mejor primer paso?**
* **Aclara el problema y las restricciones con ejemplos y casos límite.**


3. **¿Cuál es la diferencia clave entre los arreglos dinámicos y los arreglos estáticos?**
* **Los arreglos dinámicos pueden crecer o reducirse cambiando su tamaño; los arreglos estáticos tienen un tamaño fijo.**


4. **¿Cuál es la complejidad temporal de agregar un elemento al final de un arreglo dinámico cuando no se necesita redimensionar?**
* **O(1)**


5. **¿Por qué acceder al elemento k-ésimo por índice en una lista enlazada simple toma tiempo O(n)?**
* **Debes recorrer desde el nodo cabeza hasta el nodo k-ésimo uno por uno.**


6. **¿Qué característica tiene una lista doblemente enlazada que una lista simplemente enlazada no tiene?**
* **Punteros tanto al siguiente como al nodo anterior que permiten la navegación hacia atrás.**


7. **¿Cuál de las siguientes opciones describe mejor una pila?**
* **Último en entrar, primero en salir (LIFO) con push y pop en la parte superior.**


8. **¿Qué operación elimina el elemento al frente de una cola?**
* **dequeue**


9. **¿Qué son los casos límite en el diseño de algoritmos?**
* **Entradas específicas y válidas en los límites de lo que un algoritmo debe manejar.**


10. **¿Qué es el nodo cabeza en una lista enlazada simple?**
* **El primer nodo en la lista, usualmente el único nodo accesible directamente.**


11. **En un arreglo dinámico, ¿cuál es la complejidad temporal en el peor caso de insertar un elemento en el índice i (no al final)?**
* **O(n)**


12. **¿Cuál es la complejidad temporal de insertar un nuevo nodo al inicio de una lista enlazada simple?**
* **O(1)**


13. **¿Qué operación devuelve el elemento superior de una pila sin eliminarlo?**
* **peek**


14. **¿Cuál de las siguientes opciones describe mejor una queue?**
* **Primero en entrar, primero en salir (FIFO) con enqueue en la parte trasera y dequeue en la parte delantera.**


15. **¿Cómo se llama una descripción de alto nivel de la lógica del algoritmo que es independiente del lenguaje?**
* **Pseudocódigo**


16. **¿Cuál es una de las cosas que debes hacer para entender un problema?**
* **Lee la declaración del problema varias veces.**


17. **¿Qué dos componentes debes identificar al resolver un problema?**
* **La entrada y la salida esperada.**


18. **¿Qué complejidad temporal crece más rápido que O(n log n) cuando n se vuelve grande?**
* **O(n^2)**


19. **Después de implementar una solución de fuerza bruta, ¿cuál es un buen siguiente paso?**
* **Analiza su complejidad de tiempo/espacio y optimiza los cuellos de botella identificados.**


20. **¿Qué mide la complejidad espacial?**
* **Cómo crece el uso de memoria en relación con el tamaño de la entrada.**


las respuestas de los primeros capitulos de teoria



¿Qué es un algoritmo y cómo funciona la notación Big O?



Aquí tienes las respuestas correctas para cada una de las tres preguntas de la lección:

¿Cuál de las siguientes opciones describe mejor un algoritmo?

Un conjunto de instrucciones paso a paso diseñadas para resolver un problema o realizar una tarea.

¿Cuál es el propósito principal de la notación Big O en el contexto de los algoritmos?

Para describir cómo el uso de recursos de un algoritmo crece a medida que aumenta el tamaño de la entrada.

Si un algoritmo tiene una complejidad temporal de O(n), ¿qué significa esto sobre su rendimiento?

El tiempo de ejecución del algoritmo aumenta proporcionalmente con el tamaño de la entrada.




¿Cuáles son buenas técnicas para resolver problemas y formas de abordar desafíos algorítmicos?

¿Cuál de los siguientes es el primer paso más importante al abordar cualquier desafío de resolución de problemas?

Entiende la declaración del problema, las entradas y las restricciones.

¿Cuál es el propósito principal de escribir pseudocódigo al resolver un desafío algorítmico?

Para describir la lógica del algoritmo de una manera legible para humanos y sin depender del lenguaje.

Antes de escribir el código final para un desafío algorítmico, ¿por qué es importante considerar los casos límite?

Ayudan a garantizar que el algoritmo funcione correctamente para todas las entradas válidas.



¿Cómo difieren los arreglos dinámicos de los arreglos estáticos?

¿Cuál es la diferencia principal en tamaño entre un arreglo estático y un arreglo dinámico?

Los arrays estáticos tienen un tamaño fijo, mientras que los arrays dinámicos pueden cambiar de tamaño durante la ejecución.

Si necesitas agregar más elementos a un arreglo estático que ya está lleno, ¿cuál es el proceso típico involucrado?

Debes crear un nuevo arreglo más grande y copiar todos los elementos existentes a él.

¿En qué escenario una matriz estática sería típicamente una opción más adecuada que una matriz dinámica?

Cuando el tamaño de los datos es fijo y conocido en el momento en que se escribe el programa.



¿Cómo funcionan las pilas y las colas?


¿Cuál es la diferencia principal entre una pila y una cola?

Las pilas son LIFO, mientras que las colas son FIFO.

¿Qué operación se usa para agregar un elemento a una pila?

push

¿Qué operación se usa para eliminar un elemento de una cola?

dequeue




¿Cómo funcionan las listas enlazadas simples y en qué se diferencian de las listas enlazadas dobles?




¿Qué es una lista enlazada?

Una estructura de datos donde los nodos están conectados usando referencias.

¿Cuál es la diferencia entre una lista enlazada simple y una lista enlazada doble?

Las listas enlazadas simples solo pueden recorrerse en una dirección, mientras que las listas doblemente enlazadas pueden recorrerse en ambas direcciones.

¿Cuál es la complejidad temporal de insertar un nodo al principio de una lista enlazada simple?

O(1)



