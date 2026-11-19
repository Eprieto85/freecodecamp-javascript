# Guía de Respuestas: Algoritmos de búsqueda y ordenamiento en JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Cuál es la diferencia entre la búsqueda binaria y la búsqueda lineal?

**Pregunta 1:** ¿Cuál es la principal diferencia entre la búsqueda lineal y la búsqueda binaria?

**✅ Respuesta:** La búsqueda binaria requiere una lista ordenada, mientras que la búsqueda lineal no.

---

**Pregunta 2:** ¿Cuál es la complejidad temporal de la búsqueda lineal?

**✅ Respuesta:** `O(n)`

---

**Pregunta 3:** En la búsqueda binaria, ¿qué ocurre si el valor objetivo no se encuentra en la lista?

**✅ Respuesta:** Devuelve `-1`.

---

### Lectura 2: ¿Qué es dividir y conquistar y cómo funciona el merge sort?

**Pregunta 1:** ¿Qué es el paradigma de dividir y conquistar en ciencias de la computación?

**✅ Respuesta:** Una técnica para dividir recursivamente los problemas en subproblemas más pequeños.

---

**Pregunta 2:** ¿Cuál es la complejidad temporal del algoritmo de merge sort?

**✅ Respuesta:** `O(n log n)`

---

**Pregunta 3:** ¿Cuál es la complejidad espacial del algoritmo de merge sort?

**✅ Respuesta:** `O(n)`

---

## TALLER 1 — Construir un algoritmo de búsqueda binaria

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-binary-search-js/step-N`

En este taller construirás una función de búsqueda binaria mejorada que registra el camino tomado durante la búsqueda.

---

### Fases del taller (16 pasos)

**Fase 1 — Estructura inicial (pasos 1–3):**
Crear la función `binarySearch` con parámetros `searchList` y `value`. Declarar el array `pathToTarget = []` para registrar los valores visitados. Declarar los índices `low = 0` y `high = searchList.length - 1`.

**Fase 2 — Bucle de búsqueda (pasos 4–8):**
Crear el bucle `while (low <= high)`. Calcular el índice medio con `Math.floor((low + high) / 2)`. Obtener el valor en el medio con `searchList[mid]`. Agregar `valueAtMiddle` a `pathToTarget` con `.push()`.

**Fase 3 — Lógica de comparación (pasos 9–13):**
Crear bloque `if (value === valueAtMiddle)` para el caso de encontrar el valor. Agregar `else if (value > valueAtMiddle)` para buscar en la mitad derecha (`low = mid + 1`). Agregar `else` para buscar en la mitad izquierda (`high = mid - 1`).

**Fase 4 — Valor no encontrado y resultado final (pasos 14–16):**
Agregar `return [[], "Value not found"]` fuera del bucle. Actualizar el return del `if` para devolver `[pathToTarget, \`Value found at index ${mid}\`]`.

---

### Solución final completa — script.js

```js
function binarySearch(searchList, value) {
  const pathToTarget = [];
  let low = 0;
  let high = searchList.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const valueAtMiddle = searchList[mid];
    pathToTarget.push(valueAtMiddle);

    if (value === valueAtMiddle) {
      return [pathToTarget, `Value found at index ${mid}`];
    } else if (value > valueAtMiddle) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [[], "Value not found"];
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
console.log(binarySearch([1, 3, 5, 9, 14, 22], 10));
```

**Salidas esperadas:**
- `binarySearch([1,2,3,4,5], 3)` → `[[3], "Value found at index 2"]`
- `binarySearch([1,2,3,4,5,9], 4)` → `[[3,5,4], "Value found at index 3"]`
- `binarySearch([1,3,5,9,14,22], 10)` → `[[], "Value not found"]`

---

## TALLER 2 — Construir un algoritmo de merge sort

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-merge-sort-js/step-N`

En este taller implementarás el algoritmo de ordenamiento merge sort usando el enfoque de dividir y conquistar de manera recursiva.

---

### Fases del taller (25 pasos)

**Fase 1 — Función base y caso base (pasos 1–4):**
Crear la función `mergeSort(array)`. Agregar el caso base: `if (array.length <= 1) { return; }`. Calcular el punto medio con `Math.floor(array.length / 2)`.

**Fase 2 — División del array (pasos 5–9):**
Crear `leftPart = array.slice(0, middlePoint)` y `rightPart = array.slice(middlePoint)`. Llamar recursivamente `mergeSort(leftPart)` y `mergeSort(rightPart)`.

**Fase 3 — Configuración de índices de mezcla (pasos 10–14):**
Declarar `leftArrayIndex = 0`, `rightArrayIndex = 0`, `sortedIndex = 0` para controlar la mezcla.

**Fase 4 — Mezcla ordenada (pasos 15–21):**
Crear bucle `while` que compara `leftPart[leftArrayIndex]` con `rightPart[rightArrayIndex]` y coloca el menor en `array[sortedIndex]`. Incrementar los índices correspondientes.

**Fase 5 — Elementos restantes y prueba (pasos 22–25):**
Agregar dos bucles `while` adicionales para copiar los elementos que quedaron en cada mitad. Declarar `numbers = [4, 10, 6, 14, 2, 1, 8, 5]`, imprimir el array sin ordenar, llamar a `mergeSort(numbers)`, e imprimir el array ordenado.

---

### Solución final completa — script.js

```js
function mergeSort(array) {
  if (array.length <= 1) {
    return;
  }

  const middlePoint = Math.floor(array.length / 2);
  const leftPart = array.slice(0, middlePoint);
  const rightPart = array.slice(middlePoint);

  mergeSort(leftPart);
  mergeSort(rightPart);

  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  let sortedIndex = 0;

  while (leftArrayIndex < leftPart.length && rightArrayIndex < rightPart.length) {
    if (leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
      array[sortedIndex] = leftPart[leftArrayIndex];
      leftArrayIndex += 1;
    } else {
      array[sortedIndex] = rightPart[rightArrayIndex];
      rightArrayIndex += 1;
    }
    sortedIndex += 1;
  }

  while (leftArrayIndex < leftPart.length) {
    array[sortedIndex] = leftPart[leftArrayIndex];
    leftArrayIndex += 1;
    sortedIndex += 1;
  }

  while (rightArrayIndex < rightPart.length) {
    array[sortedIndex] = rightPart[rightArrayIndex];
    rightArrayIndex += 1;
    sortedIndex += 1;
  }
}

const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
console.log('Unsorted array: ');
console.log(numbers);
mergeSort(numbers);
console.log('Sorted array: ');
console.log(numbers);
```

---

## QUIZ — Cuestionario de algoritmos de búsqueda y ordenamiento (10 preguntas)

Necesitas 9/10 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Búsqueda lineal. |
| 2 | Divide-and-conquer. |
| 3 | O(1) |
| 4 | Búsqueda binaria. |
| 5 | O(1) |
| 6 | El índice del elemento objetivo. |
| 7 | -1 |
| 8 | Divide recursivamente la lista en elementos más pequeños, luego los combina en orden. |
| 9 | La lista debe estar ordenada. |
| 10 | Divide-and-conquer. |


las respuestas del quiz estan bien, pero al buscarlas no coinciden porque no se copiaron como estan en el freecodecamp, lo que se hizo fue medio traducciones y en algunos casos se agragaron separadores que no tienen en la web
---

*Fin de la guía — Módulo: Algoritmos de búsqueda y ordenamiento en JavaScript*
