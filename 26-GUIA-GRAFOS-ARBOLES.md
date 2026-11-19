# Guía de Respuestas: Grafos y árboles en JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué son los grafos en informática?

**Pregunta 1:** ¿Qué es un grafo en informática?

**✅ Respuesta:** Una estructura de datos usada para representar relaciones entre objetos.

---

**Pregunta 2:** ¿Cuáles son los dos componentes principales de un grafo?

**✅ Respuesta:** Nodos y aristas

---

**Pregunta 3:** ¿Qué es un grafo dirigido?

**✅ Respuesta:** Un grafo donde las aristas tienen una dirección.

---

### Lectura 2: ¿Cómo funcionan la búsqueda en profundidad y en amplitud?

**Pregunta 1:** ¿Qué estructura de datos se usa comúnmente para implementar el algoritmo BFS estándar?

**✅ Respuesta:** Cola (Queue)

---

**Pregunta 2:** ¿Cuál de las siguientes afirmaciones sobre DFS es verdadera?

**✅ Respuesta:** La búsqueda en profundidad generalmente se implementa usando recursión o una pila.

---

**Pregunta 3:** Si quisieras encontrar el camino más corto en un grafo no ponderado, ¿qué algoritmo sería más adecuado?

**✅ Respuesta:** Búsqueda en amplitud (BFS)

---

### Lectura 3: ¿Cómo funcionan las matrices y listas de adyacencia?

**Pregunta 1:** ¿Para qué escenario es más eficiente una matriz de adyacencia?

**✅ Respuesta:** Un grafo denso donde cada nodo está conectado a la mayoría de los otros nodos.

---

**Pregunta 2:** ¿Cuándo sería más eficiente usar una lista de adyacencia en lugar de una matriz?

**✅ Respuesta:** Cuando el grafo es disperso, con un alto número de vértices y un bajo número de aristas.

---

**Pregunta 3:** ¿Qué operación es más rápida en una matriz de adyacencia que en una lista?

**✅ Respuesta:** Verificar si existe una arista directa entre dos nodos específicos.

---

### Lectura 4: ¿Qué son los árboles y los tries y cómo funcionan?

**Pregunta 1:** ¿Qué afirmación sobre un árbol de búsqueda binaria (BST) es siempre verdadera?

**✅ Respuesta:** Todos los valores en el subárbol izquierdo de un nodo son menores que el valor del nodo.

---

**Pregunta 2:** ¿Para qué tarea es más efectivo un trie o árbol de prefijos?

**✅ Respuesta:** Implementar una función de autocompletado.

---

**Pregunta 3:** ¿Cuál es la diferencia fundamental entre un árbol general y un árbol binario?

**✅ Respuesta:** Un árbol binario restringe cada nodo a un máximo de dos hijos, mientras que un árbol general no.

---

### Lectura 5: ¿Cómo funcionan las colas de prioridad y los montículos?

**Pregunta 1:** ¿Cuál es la característica principal que distingue una cola de prioridad de una cola estándar?

**✅ Respuesta:** Recupera elementos según una prioridad asignada.

---

**Pregunta 2:** ¿Cuál es una aplicación real común donde una cola de prioridad sería útil?

**✅ Respuesta:** Programar tareas en un sistema operativo donde algunas son más urgentes.

---

**Pregunta 3:** ¿Por qué los montículos (heaps) se implementan como arrays en la práctica?

**✅ Respuesta:** Los arreglos simplifican la lógica para acceder a nodos padre e hijo usando fórmulas matemáticas.

---

## TALLER 1 — Construir un algoritmo de camino más corto

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-shortest-path-algorithm-js/step-N`

En este taller implementarás el algoritmo de Dijkstra para encontrar el camino más corto en un grafo representado con una matriz de adyacencia.

---

### Fases del taller (26 pasos)

**Fase 1 — Configuración inicial (pasos 1–4):**
Definir `const INF = Infinity` y la matriz de adyacencia `adjMatrix` de 6×6. Crear la función `shortestPath(matrix, startNode, targetNode)`. Dar valor por defecto `null` al parámetro `targetNode`.

**Fase 2 — Inicialización de distancias y rutas (pasos 5–10):**
Obtener `n = matrix.length`. Inicializar `distances` con `new Array(n).fill(INF)`. Asignar `distances[startNode] = 0`. Crear el array `paths` con `Array.from({ length: n }, (_, i) => [i])`. Crear el array `visited` con `new Array(n).fill(false)`.

**Fase 3 — Bucle principal de Dijkstra (pasos 11–18):**
Crear el bucle `for (let i = 0; i < n; i++)`. Dentro, encontrar el nodo no visitado con menor distancia (`minDistance`, `current`). Si `current === -1`, hacer `break`. Marcar `visited[current] = true`.

**Fase 4 — Actualizar distancias vecinas (pasos 19–24):**
Recorrer todos los nodos vecinos. Verificar que la arista existe (`!== INF`) y no fue visitada. Calcular `newDistance = distances[current] + distance`. Si es menor, actualizar `distances[nodeNo]` y `paths[nodeNo] = [...paths[current], nodeNo]`.

**Fase 5 — Resultado y llamada final (pasos 25–26):**
Calcular `targets` según si `targetNode` es nulo o no. Imprimir la distancia y ruta de cada nodo destino con `console.log`. Retornar `[distances, paths]`. Llamar `shortestPath(adjMatrix, 0, 5)`.

---

### Solución final completa — script.js

```js
const INF = Infinity;
const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];

function shortestPath(matrix, startNode, targetNode = null) {
  const n = matrix.length;
  const distances = new Array(n).fill(INF);
  distances[startNode] = 0;
  const paths = Array.from({ length: n }, (_, i) => [i]);
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    let minDistance = INF;
    let current = -1;
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      if (!visited[nodeNo] && distances[nodeNo] < minDistance) {
        minDistance = distances[nodeNo];
        current = nodeNo;
      }
    }
    if (current === -1) {
      break;
    }
    visited[current] = true;

    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      const distance = matrix[current][nodeNo];
      if (distance !== INF && !visited[nodeNo]) {
        const newDistance = distances[current] + distance;
        if (newDistance < distances[nodeNo]) {
          distances[nodeNo] = newDistance;
          paths[nodeNo] = [...paths[current], nodeNo];
        }
      }
    }
  }

  const targets = targetNode !== null ? [targetNode] : [...Array(n).keys()];
  for (const nodeNo of targets) {
    if (nodeNo === startNode| distances[nodeNo] === INF) {
      continue;
    }
    const path = paths[nodeNo].join(' -> ');
    console.log(`\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`);
  }
  return [distances, paths];
}

shortestPath(adjMatrix, 0, 5);
```

---

## LABORATORIO 1 — Convertidor de lista de adyacencia a matriz

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-adjacency-list-to-matrix-converter-js`

Construye una función `adjacencyListToMatrix` que convierte un objeto de lista de adyacencia a una matriz 2D donde `[i][j] = 1` si existe una arista de nodo `i` a nodo `j`.

**Requisitos:**
1. Definir una función `adjacencyListToMatrix` que recibe un objeto con la lista de adyacencia.
2. Convertir la lista a matriz de adyacencia.
3. Imprimir cada fila de la matriz.
4. Retornar la matriz de adyacencia.

**Ejemplo:** `adjacencyListToMatrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]})` imprime:
```
[0, 0, 1, 0]
[0, 0, 1, 1]
[1, 1, 0, 1]
[0, 1, 1, 0]
```

**✅ Solución:**
```js
function adjacencyListToMatrix(adjList) {
  const n = Object.keys(adjList).length;

  const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (const [srcStr, neighbors] of Object.entries(adjList)) {
    const srcNode = Number(srcStr);
    for (const destNode of neighbors) {
      adjMatrix[srcNode][destNode] = 1;
    }
  }

  for (const row of adjMatrix) {
    console.log(row);
  }

  return adjMatrix;
}

const adjList = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
};

const matrix = adjacencyListToMatrix(adjList);
```

---

## TALLER 2 — Construir un generador de paréntesis válidos con BFS

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-breadth-first-search-js/step-N`

En este taller implementarás una función que genera todas las combinaciones válidas de paréntesis usando el enfoque de búsqueda en amplitud (BFS).

---

### Fases del taller (14 pasos)

**Fase 1 — Estructura inicial (pasos 1–4):**
Crear la función `genParentheses(pairs)` que por ahora retorna un array vacío. Agregar validaciones: si `pairs` no es entero, retornar mensaje de error; si `pairs < 1`, retornar mensaje de error.

**Fase 2 — Configurar la cola BFS (pasos 5–8):**
Declarar `let queue = [['', 0, 0]]` donde cada elemento es `[combinación_actual, opens_usados, closes_usados]`. Declarar `let result = []`.

**Fase 3 — Bucle BFS y construcción de combinaciones (pasos 9–13):**
Crear el bucle `while (queue.length > 0)`. Extraer el primer elemento con `queue.shift()`. Si la longitud de `current` es `2 * pairs`, agregar al `result`. Si `opensUsed < pairs`, agregar `current + '('` a la cola. Si `closesUsed < opensUsed`, agregar `current + ')'` a la cola.

**Fase 4 — Resultado final (paso 14):**
Retornar `result`. Llamar `console.log(genParentheses(2))` y `console.log(genParentheses(3))`.

---

### Solución final completa — script.js

```js
function genParentheses(pairs) {
  if (!Number.isInteger(pairs)) {
    return 'The number of pairs should be an integer';
  }
  if (pairs < 1) {
    return 'The number of pairs should be at least 1';
  }

  let queue = [['', 0, 0]];
  let result = [];

  while (queue.length > 0) {
    let [current, opensUsed, closesUsed] = queue.shift();
    if (current.length === 2 * pairs) {
      result.push(current);
    } else {
      if (opensUsed < pairs) {
        queue.push([current + '(', opensUsed + 1, closesUsed]);
      }
      if (closesUsed < opensUsed) {
        queue.push([current + ')', opensUsed, closesUsed + 1]);
      }
    }
  }
  return result;
}

console.log(genParentheses(2));
console.log(genParentheses(3));
```

**Salidas esperadas:**
- `genParentheses(2)` → `['(())', '()()']`
- `genParentheses(3)` → `['((()))', '(()())', '(())()', '()(())', '()()()']`

---

## LABORATORIO 2 — Búsqueda en profundidad (DFS)

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-depth-first-search-js`

Implementa una función `dfs` que realiza una búsqueda en profundidad en un grafo representado como matriz de adyacencia, usando una pila (stack).

**Requisitos:**
1. Definir una función `dfs(graph, root)`.
2. `graph`: matriz de adyacencia (array de arrays).
3. `root`: etiqueta numérica del nodo inicial (entre `0` y `n-1`).
4. La función retorna un array con todas las etiquetas de nodos alcanzables desde `root`.

**✅ Solución:**
```js
function dfs(graph, root) {
  let stack = [root];
  let visited = [];

  while (stack.length > 0) {
    let current = stack.pop();

    if (!visited.includes(current)) {
      visited.push(current);
      let neighbors = graph[current];

      for (let i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === 1) {
          stack.push(i);
        }
      }
    }
  }
  return visited;
}
```

---

## LABORATORIO 3 — Problema de las N Reinas

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-n-queens-problem-js`

Implementa una función `dfsNQueens(n)` que resuelve el problema de las N reinas usando búsqueda en profundidad (DFS). El problema consiste en colocar N reinas en un tablero N×N sin que ninguna ataque a otra.

**Requisitos:**
1. Definir una función `dfsNQueens(n)`.
2. Si `n < 1`, retornar array vacío `[]`.
3. Retornar una lista de soluciones, donde cada solución es un array de longitud `n`; el elemento en el índice `i` es la columna donde se coloca la reina en la fila `i`.

**Ejemplo:** Para n=4, una solución válida es `[1, 3, 0, 2]` que representa:
```
. Q . .
. . . Q
Q . . .
. . Q .
```

**✅ Solución:**
```js
function dfsNQueens(n) {
  if (n < 1) return [];

  const results = [];

  function isSafe(queens, row, col) {
    for (let r = 0; r < queens.length; r++) {
      const c = queens[r];
      if (c === col| Math.abs(row - r) === Math.abs(col - c)) {
        return false;
      }
    }
    return true;
  }

  function dfs(queens) {
    const row = queens.length;
    if (row === n) {
      results.push(queens.slice());
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(queens, row, col)) {
        queens.push(col);
        dfs(queens);
        queens.pop();
      }
    }
  }

  dfs([]);
  return results;
}
```

---

## REVISIÓN — Grafos y árboles en JavaScript

| Concepto Descripción
|---|---|
| Grafo Estructura de datos para representar relaciones entre objetos (nodos y aristas)
| Grafo dirigido Grafo donde las aristas tienen una dirección específica
| Grafo no dirigido Grafo donde las aristas no tienen dirección
| Grafo ponderado Grafo donde las aristas tienen valores numéricos (pesos)
| BFS Búsqueda en amplitud — explora vecinos nivel por nivel usando una cola
| DFS Búsqueda en profundidad — sigue cada rama al máximo antes de retroceder (pila o recursión)
| Matriz de adyacencia Tabla 2D donde `[i][j] = 1` si existe arista de `i` a `j`
| Lista de adyacencia Objeto/array donde cada nodo lista sus vecinos
| Árbol Grafo sin ciclos con nodos en jerarquía
| Árbol binario Árbol donde cada nodo tiene máximo 2 hijos
| BST Árbol de búsqueda binaria — subtree izquierdo menor, derecho mayor
| Trie Árbol de prefijos optimizado para almacenar y buscar cadenas
| Cola de prioridad Estructura donde elementos se procesan según su prioridad
| Montículo (Heap) Implementación de cola de prioridad como árbol (max-heap o min-heap), usualmente representado como array
| Algoritmo de Dijkstra Algoritmo de camino más corto en grafos con pesos no negativos

---

## QUIZ — Cuestionario de grafos y árboles en JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # Respuesta correcta
|---|---|
| 1 Una estructura de datos usada para representar conexiones o relaciones entre objetos o entidades.
| 2 Medición de temperatura a lo largo del tiempo
| 3 Nodo
| 4 Aristas
| 5 Un grafo donde las aristas no tienen una dirección específica.
| 6 Grafo etiquetado por vértices
| 7 Grafo cíclico
| 8 Un tipo específico de grafo etiquetado por aristas en el que las etiquetas representan valores que se pueden comparar y usar para realizar operaciones aritméticas.
| 9 Un grafo dirigido sin ciclos.
| 10 Grafo desconectado
| 11 Un algoritmo que visita todos los nodos vecinos antes de pasar al siguiente nivel del grafo.
| 12 Búsqueda en profundidad (DFS)
| 13 Matriz de adyacencia
| 14 Lista de adyacencia
| 15 No puede tener bucles ni ciclos.
| 16 Árbol binario
| 17 Una estructura de árbol usada para almacenar un conjunto de cadenas de texto.
| 18 Una cola de prioridad procesa elementos según su prioridad.
| 19 Montículo máximo (Max-heap) y montículo mínimo (Min-heap)
| 20 En una cola estándar, los elementos se procesan en el orden en que se agregaron (FIFO), mientras que una cola de prioridad procesa los elementos según su prioridad en lugar del orden de inserción.

---

*Fin de la guía — Módulo: Grafos y árboles en JavaScript*
