# Guía de Respuestas: Construir un Sistema de Votación
## freeCodeCamp JavaScript v9 — Proyecto de Certificación

---

## DESCRIPCIÓN DEL PROYECTO

**Tipo:** Laboratorio / Proyecto de certificación  
**Título:** Construir un sistema de votación  
**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-voting-system/build-a-voting-system`

Este proyecto es **solo JavaScript** (script.js). Usa `Map` para la encuesta y `Set` para evitar votos duplicados.

---

## CONCEPTOS REQUERIDOS

| Estructura | Uso |
|---|---|
| `new Map()` | Almacena opciones → Set de votantes |
| `new Set()` | Almacena votantes únicos (sin duplicados) |
| `map.has(key)` | Verifica si una opción existe |
| `map.get(key)` | Obtiene el Set de votantes de una opción |
| `map.set(key, value)` | Añade/actualiza una opción en el Map |
| `set.has(value)` | Verifica si un votante ya votó |
| `set.add(value)` | Añade un votante al Set |
| `set.size` | Número de votantes únicos |
| `map.forEach((value, key) => ...)` | Itera todas las opciones |

---

## SOLUCIÓN COMPLETA — script.js

```js
// 1. Variable poll inicializada como Map
const poll = new Map();

// 2. Función addOption
function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3. Función vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Función displayResults
function displayResults() {
  let result = "Poll Results:\n";
  poll.forEach((voters, option) => {
    result += `${option}: ${voters.size} votes\n`;
  });
  return result.trim();
}

// 5. Al menos 3 opciones en el poll
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

// 6. Al menos 3 votos
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
```

---

## DESGLOSE LÍNEA A LÍNEA

### `const poll = new Map()`
Crea un Map vacío. Las claves serán los nombres de las opciones (strings), los valores serán Sets de votantes.

### `addOption(option)`
1. Si `option` es falsy (vacía o `""`): retorna `"Option cannot be empty."`
2. Si `poll.has(option)` es true (ya existe): retorna `Option "${option}" already exists.`
3. Si no existe: `poll.set(option, new Set())` la añade con Set vacío y retorna `Option "${option}" added to the poll.`

### `vote(option, voterId)`
1. Si `!poll.has(option)`: retorna `Option "${option}" does not exist.`
2. Obtiene los votantes: `const voters = poll.get(option)`
3. Si `voters.has(voterId)`: retorna `Voter ${voterId} has already voted for "${option}".`
4. Si no ha votado: `voters.add(voterId)` y retorna `Voter ${voterId} voted for "${option}".`

### `displayResults()`
Itera el Map con `forEach((voters, option) => ...)` y construye el string con `voters.size` (número de votantes únicos).

---

## LOS 18 TESTS — Verificación

### Test 1 — Variable poll es un Map
**✅ Respuesta:** `const poll = new Map();`

---

### Test 2 — Función addOption con parámetro option
**✅ Respuesta:** `function addOption(option) { ... }`

---

### Test 3 — Función vote con parámetros option y voterId
**✅ Respuesta:** `function vote(option, voterId) { ... }`

---

### Test 4 — Función displayResults existe
**✅ Respuesta:** `function displayResults() { ... }`

---

### Test 5 — Al menos 3 opciones en el poll
**✅ Respuesta:** Llama a `addOption(...)` al menos 3 veces con opciones distintas.

---

### Test 6 — Al menos 3 votos en el poll
**✅ Respuesta:** Llama a `vote(...)` al menos 3 veces.

---

### Test 7 — Cada opción mapea a un Set
**✅ Respuesta:** Al añadir una opción: `poll.set(option, new Set())` — el valor es siempre un `new Set()`.

---

### Test 8 — addOption("Egypt") devuelve mensaje correcto
**Input:** `addOption("Egypt")`  
**✅ Respuesta:** `Option "Egypt" added to the poll.`

---

### Test 9 — Opción vacía devuelve error
**Input:** `addOption("")`  
**✅ Respuesta:** `Option cannot be empty.`

---

### Test 10 — Opción duplicada devuelve mensaje correcto
**Input:** `addOption("Turkey")` cuando Turkey ya existe  
**✅ Respuesta:** `Option "Turkey" already exists.`

---

### Test 11 — vote con opción existente y votante nuevo
**Input:** `vote("Malaysia", "traveler1")` cuando Malaysia existe  
**✅ Respuesta:** `Voter traveler1 voted for "Malaysia".`

---

### Test 12 — vote actualiza el Set de votantes
**✅ Respuesta:** `voters.add(voterId)` agrega el votante al Set. El Set crece en 1.

---

### Test 13 — Voto duplicado devuelve mensaje correcto
**Input:** `vote("Algeria", "traveler1")` cuando traveler1 ya votó por Algeria  
**✅ Respuesta:** `Voter traveler1 has already voted for "Algeria".`

---

### Test 14 — Voto duplicado NO aumenta el tamaño del Set
**✅ Respuesta:** Como se usa `Set`, si el votante ya existe, `set.add()` no duplica. El size no cambia.

---

### Test 15 — vote con opción inexistente
**Input:** `vote("Nigeria", "traveler2")` cuando Nigeria no existe  
**✅ Respuesta:** `Option "Nigeria" does not exist.`

---

### Test 16 — Una opción puede recibir múltiples votos de personas distintas
**✅ Respuesta:** Distintos voterIds se pueden añadir al mismo Set. Ejemplo:
```js
vote("Turkey", "traveler1"); // Set: {"traveler1"}
vote("Turkey", "traveler2"); // Set: {"traveler1", "traveler2"}
```

---

### Test 17 — displayResults devuelve formato correcto
**Escenario:** Turkey=2 votos, Morocco=1 voto, Spain=0 votos  
**✅ Respuesta:** `"Poll Results:\nTurkey: 2 votes\nMorocco: 1 votes\nSpain: 0 votes"`

---

### Test 18 — displayResults formato general
**✅ Respuesta:** El resultado siempre empieza con `"Poll Results:\n"` y cada línea es `"NombreOpción: N votes"`.

---

## PUNTOS CRÍTICOS

**¿Por qué usar Set para los votantes y no un array?**  
Un `Set` automáticamente ignora duplicados. Si `travelers1` intenta votar dos veces, `set.add("traveler1")` no hace nada la segunda vez. Con un array necesitarías buscar manualmente con `includes()`.

**¿Por qué `voters.size` y no `voters.length`?**  
Los `Set` usan `.size`, no `.length`. Los arrays usan `.length`.

**Formato exacto de los mensajes — sin errores tipográficos:**
- `Option "${option}" added to the poll.` ← punto al final
- `Option "${option}" already exists.` ← punto al final
- `Option cannot be empty.` ← punto al final
- `Voter ${voterId} voted for "${option}".` ← punto al final
- `Voter ${voterId} has already voted for "${option}".` ← punto al final
- `Option "${option}" does not exist.` ← punto al final

---

*Fin de la guía — Módulo: Sistema de Votación (Proyecto de Certificación #19)*
