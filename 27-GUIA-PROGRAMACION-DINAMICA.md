# Guía de Respuestas: Programación dinámica en JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué es la programación dinámica?

**Pregunta 1:** ¿Cuál es la idea principal detrás de la programación dinámica?

**✅ Respuesta:** Resolver problemas dividiéndolos en subproblemas más pequeños y almacenando los resultados para evitar cálculos repetidos.

---

**Pregunta 2:** ¿Cuáles son los dos enfoques principales de la programación dinámica?

**✅ Respuesta:** Memoización (top-down) y tabulación (bottom-up).

---

**Pregunta 3:** ¿Qué propiedad debe tener un problema para que la programación dinámica sea aplicable?

**✅ Respuesta:** Subestructura óptima y subproblemas superpuestos.

---

### Lectura 2: ¿Cuál es la diferencia entre memoización y tabulación?

**Pregunta 1:** ¿Qué es la memoización en programación dinámica?

**✅ Respuesta:** Almacenar los resultados de llamadas a funciones costosas y reutilizarlos cuando los mismos inputs se repiten.

---

**Pregunta 2:** ¿Cómo implementa JavaScript la memoización de forma nativa?

**✅ Respuesta:** Usando objetos o Map para almacenar resultados previamente calculados.

---

**Pregunta 3:** ¿Cuál es la ventaja de la tabulación frente a la memoización?

**✅ Respuesta:** Evita la sobrecarga de llamadas recursivas al resolver subproblemas de forma iterativa de abajo hacia arriba.

---

### Lectura 3: ¿Cómo aplicar programación dinámica al problema de Fibonacci?

**Pregunta 1:** ¿Cuál es la complejidad de tiempo del algoritmo de Fibonacci sin programación dinámica?

**✅ Respuesta:** O(2^n) — exponencial.

---

**Pregunta 2:** ¿Cuál es la complejidad de tiempo del Fibonacci con memoización?

**✅ Respuesta:** O(n) — lineal.

---

**Pregunta 3:** ¿Qué devuelve `fibonacci(0)` según el caso base?

**✅ Respuesta:** 0

---

## REVISIÓN — Programación dinámica en JavaScript

La revisión cubre los conceptos clave del módulo. Repasa los conceptos principales:

| Concepto | Descripción |
|---|---|
| Programación dinámica | Técnica para resolver problemas complejos dividiéndolos en subproblemas más simples |
| Memoización | Almacenar resultados de llamadas previas para evitar recálculos (top-down) |
| Tabulación | Construir la solución iterativamente desde los subproblemas más pequeños (bottom-up) |
| Subestructura óptima | La solución óptima del problema contiene soluciones óptimas de sus subproblemas |
| Subproblemas superpuestos | Los mismos subproblemas se resuelven múltiples veces |
| Fibonacci con DP | De O(2^n) a O(n) usando memoización o tabulación |
| Cache/Memo | Objeto o Map que almacena resultados calculados |

---

## QUIZ — Cuestionario de Programación dinámica en JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Resolver problemas dividiéndolos en subproblemas y almacenando los resultados. |
| 2 | Subestructura óptima y subproblemas superpuestos. |
| 3 | Memoización (top-down) y tabulación (bottom-up). |
| 4 | Almacenar los resultados de llamadas a funciones para reutilizarlos. |
| 5 | O(2^n) |
| 6 | O(n) |
| 7 | Construir la solución iterativamente desde los subproblemas más pequeños. |
| 8 | Un objeto o Map. |
| 9 | Cuando los mismos subproblemas se calculan repetidamente. |
| 10 | El problema de la mochila (knapsack problem). |
| 11 | Memoización — porque resuelve solo los subproblemas necesarios. |
| 12 | Tabulación — porque evita la sobrecarga de llamadas recursivas. |
| 13 | La longitud de la subsecuencia común más larga. |
| 14 | 0 y 1 |
| 15 | La solución óptima del problema contiene soluciones óptimas de sus subproblemas. |
| 16 | Usando un array donde cada índice representa un subproblema. |
| 17 | O(n * m) donde n y m son las longitudes de las dos cadenas. |
| 18 | El número mínimo de monedas para dar cierto cambio. |
| 19 | Cuando el espacio de subproblemas es pequeño y todos deben resolverse. |
| 20 | Dividir y vencerás no almacena resultados; la programación dinámica sí. |

---

*Fin de la guía — Módulo: Programación dinámica en JavaScript*




Basado en la lectura proporcionada, aquí tienes las respuestas correctas para cada una de las preguntas:

¿Cuáles son las dos condiciones clave que deben estar presentes para que la programación dinámica sea aplicable?

Respuesta: Subproblemas superpuestos y estructura óptima.

¿Cuál es la diferencia principal entre los enfoques de memoización y tabulación en programación dinámica?

Respuesta: La memoización es de arriba hacia abajo mientras que la tabulación es de abajo hacia arriba.

En la implementación ingenua recursiva para subir escaleras, ¿cuál es la complejidad temporal y por qué es ineficiente?

Respuesta: O(2^n) porque recalcula los mismos subproblemas múltiples veces.









function fibonacci(n) {
  const sequence = [0, 1];

  if (n === 0) {
    return sequence[0];
  }
  if (n === 1) {
    return sequence[1];
  }

  for (let i = 2; i <= n; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence[n];
}







function sumPrimes(num) {
  if (num < 2) {
    return 0;
  }

  // Función auxiliar para verificar si un número es primo
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}



Aquí tienes las respuestas correctas para cada una de las 10 preguntas del cuestionario de Programación Dinámica:

1. ¿Cuáles son las dos propiedades esenciales que deben estar presentes en un problema para que la programación dinámica sea un enfoque de solución efectivo?
Respuesta: Subproblemas superpuestos y estructura óptima.

2. ¿Cuál es la diferencia principal entre los enfoques de memoización y tabulación en programación dinámica?
Respuesta: La memoización es un enfoque de arriba hacia abajo que usa recursión, mientras que la tabulación es un enfoque de abajo hacia arriba que usa iteración.

3. ¿Por qué las soluciones recursivas ingenuas a problemas de programación dinámica típicamente tienen complejidad de tiempo exponencial?
Respuesta: Debido a que cada llamada recursiva se ramifica múltiples veces, causando que los mismos subproblemas se recalculen repetidamente.

4. ¿Qué significa estructura óptima en el contexto de la programación dinámica?
Respuesta: La solución óptima puede ser estructurada a partir de soluciones óptimas a sus subproblemas.

5. Al implementar memoización, ¿qué sucede cuando se llama a una función con argumentos que ya han sido calculados?
Respuesta: El resultado en caché se devuelve inmediatamente sin volver a calcular.

6. ¿Cuál es una ventaja clave de usar tabulación en lugar de memoización?
Respuesta: La tabulación evita la sobrecarga de la recursión y proporciona una ejecución secuencial predecible.

7. En una solución de programación dinámica de abajo hacia arriba, ¿por qué se inicializan primero los casos base?
Respuesta: Para proporcionar valores fundamentales sobre los cuales se construyen todos los subproblemas más grandes.

8. ¿Cómo transforma la programación dinámica la complejidad temporal de problemas que presentan subproblemas superpuestos?
Respuesta: De exponencial a polinomial almacenando y reutilizando soluciones de subproblemas.

9. ¿Qué compromiso suele hacer la programación dinámica para lograr una mejor complejidad temporal?
Respuesta: Utiliza espacio adicional para almacenar resultados intermedios.

10. ¿En qué escenario la programación dinámica NO sería el enfoque algorítmico apropiado?
Respuesta: Cuando los subproblemas son independientes y no se superponen.












