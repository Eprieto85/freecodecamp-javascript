# Guía de Respuestas: Maps y Sets en JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué son los Sets en JavaScript y en qué se diferencian de los WeakSets?

**Pregunta 1:** ¿Cómo se diferencia un `Set` de un `WeakSet` en cuanto a los datos que ambos soportan?

**✅ Respuesta:** Un Set almacena cualquier tipo, incluidos primitivos, mientras que un WeakSet solo permite referencias a objetos mantenidas débilmente.

---

**Pregunta 2:** ¿Cómo se crea un `Set` o un `WeakSet` en JavaScript?

**✅ Respuesta:** Usando el constructor Set o WeakSet con la palabra clave new

---

**Pregunta 3:** ¿Qué métodos están disponibles tanto para un `Set` como para un `WeakSet` en JavaScript?

**✅ Respuesta:** add(), delete(), has()

---

### Lectura 2: ¿Qué es el objeto Map y en qué se diferencia de WeakMaps?

**Pregunta 1:** ¿Cuál de estas diferencia un `Map` de un `WeakMap` en JavaScript?

**✅ Respuesta:** Un Map permite claves de cualquier tipo, mientras que un WeakMap solo permite objetos como claves.

---

**Pregunta 2:** ¿Qué propiedad le permite conocer el número de elementos en un `Map`?

**✅ Respuesta:** size

---

**Pregunta 3:** ¿Qué método le permite agregar un elemento a un `Map` y un `WeakMap`?

**✅ Respuesta:** set()

---

## TALLER — Crear un catálogo de vivero de plantas

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-plant-nursery-catalog/step-N`

En este taller construirás un catálogo de lavandas usando `Map` y `Set`.

---

### Paso 1 — Crear el objeto ballerina

Crea un objeto `ballerina` con tres propiedades: `commonName`, `scientificName` y `cultivar`.

**✅ Respuesta:**
```js
const ballerina = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Ballerina"
};
```

---

### Paso 2 — Crear el objeto prettyPolly

Crea otro objeto para la cultivar Pretty Polly de lavanda española y asígnalo a `prettyPolly`.

**✅ Respuesta:**
```js
const prettyPolly = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Pretty Polly"
};
```

---

### Paso 3 — Crear el mapa catalog

Los demás objetos de plantas ya están definidos. Declara la variable `catalog` y asígnale un objeto `Map` vacío.

**✅ Respuesta:**
```js
const catalog = new Map();
```

---

### Paso 4 — Usar set() con clave de cadena

Usa el método `set()` para agregar el par clave `"ballerina"` → valor `ballerina` en el mapa. Luego imprime `catalog` en la consola.

**✅ Respuesta:**
```js
catalog.set("ballerina", ballerina);
console.log(catalog);
```

---

### Paso 5 — Propiedad size

La propiedad `size` de un Map devuelve el número de elementos. Imprime `catalog.size` en la consola.

**✅ Respuesta:**
```js
console.log(catalog.size);
```

---

### Paso 6 — Usar objeto como clave

Los Maps permiten claves de cualquier tipo, incluyendo objetos. Modifica la llamada a `set()` para usar el objeto `ballerina` como clave y un objeto con propiedades `small`, `medium` y `large` (enteros positivos) como valor.

**✅ Respuesta:**
```js
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
```

---

### Paso 7 — Agregar prettyPolly al mapa

Agrega otro par clave-valor usando el objeto `prettyPolly` como clave y un objeto con `small`, `medium` y `large` como valor.

**✅ Respuesta:**
```js
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
```

---

### Paso 8 — Agregar las plantas restantes

Agrega los objetos `willowVale`, `hidcote`, `imperialGem` y `royalCrown` al catálogo del mismo modo.

**✅ Respuesta:**
```js
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });
```

---

### Paso 9 — Eliminar console.log de size

Elimina la llamada `console.log(catalog.size)` de tu código.

**✅ Respuesta:** Borra esa línea. El código queda sin el `console.log(catalog.size)`.

---

### Paso 10 — Método get()

El método `get()` recibe una clave y devuelve el valor asociado. Usa `get()` para obtener el valor de la clave `ballerina`, asígnalo a una variable `getBallerina` e imprímela en la consola.

**✅ Respuesta:**
```js
const getBallerina = catalog.get(ballerina);
console.log(getBallerina);
```

---

### Paso 11 — Modificar mediante referencia

Cuando el valor es un objeto, `get()` devuelve una referencia. Puedes modificar el objeto directamente. Cambia la propiedad `small` de `getBallerina` a un entero diferente de `20`.

**✅ Respuesta:**
```js
getBallerina.small = 18;
```

---

### Paso 12 — Eliminar getBallerina

Elimina la declaración de `getBallerina` y todas sus referencias del código.

**✅ Respuesta:** Borra las líneas con `getBallerina`.

---

### Paso 13 — Función sellPlants (versión básica)

Crea una función `sellPlants` que reciba una planta, el tamaño del macetero y la cantidad a vender. Si la cantidad pedida supera el stock disponible, devuelve el mensaje:

`Not enough <size> size pots for <scientificName> '<cultivar>'. Only <pots> left.`

Prueba con `sellPlants(ballerina, "small", 25)`.

**✅ Respuesta:**
```js
const sellPlants = (plant, size, potsNo) => {
  const name = `${plant.scientificName} '${plant.cultivar}'`;
  const pots = catalog.get(plant);
  if (pots[size] - potsNo < 0) {
    return `Not enough ${size} size pots for ${name}. Only ${pots[size]} left.`;
  }
};
console.log(sellPlants(ballerina, "small", 25));
```

---

### Paso 14 — Completar sellPlants (actualizar catálogo)

Cuando hay suficiente stock, réstale los maceteros vendidos al registro y devuelve `Catalog successfully updated.` Cambia la llamada de prueba a `10` en lugar de `25`.

**✅ Respuesta:** Agrega dentro de la función (después del `if`):
```js
  pots[size] -= potsNo;
  return `Catalog successfully updated.`;
```
Y cambia el `console.log` a:
```js
console.log(sellPlants(ballerina, "small", 10));
```

---

### Paso 15 — Función removePlant con delete()

El método `delete()` elimina una entrada del mapa y devuelve un booleano. Crea una función `removePlant` que tome una planta y la elimine del catálogo retornando el resultado. Luego imprime `removePlant("ballerina")` en la consola.

**✅ Respuesta:**
```js
const removePlant = plant => catalog.delete(plant);
console.log(removePlant("ballerina"));
```

---

### Paso 16 — Pasar objeto en lugar de cadena

Modifica la llamada a `removePlant` para pasar el objeto `ballerina` en lugar de la cadena `"ballerina"`. Verás un error en la consola que corregirás en el siguiente paso.

**✅ Respuesta:**
```js
console.log(removePlant(ballerina));
```

---

### Paso 17 — Verificar existencia con has()

El método `has()` devuelve un booleano indicando si la clave existe en el mapa. Modifica `sellPlants` para devolver `Item not found.` cuando la planta no esté en el catálogo.

**✅ Respuesta:** Agrega al inicio de `sellPlants`:
```js
  if (!catalog.has(plant)) return "Item not found.";
```

---

### Paso 18 — Limpiar console.log

Elimina los `console.log` de `removePlant(ballerina)`, `sellPlants(ballerina, "small", 10)` y `catalog`.

**✅ Respuesta:** Borra esas tres líneas.

---

### Paso 19 — Función displayCatalog con keys()

El método `keys()` devuelve un iterador sobre las claves del mapa. Crea la función `displayCatalog` con un bucle `for...of` que itere sobre `catalog.keys()` e imprima cada clave. Luego llama a `displayCatalog()`.

**✅ Respuesta:**
```js
const displayCatalog = () => {
  for (const key of catalog.keys()) {
    console.log(key);
  }
};
displayCatalog();
```

---

### Paso 20 — Iterar con values()

Modifica `displayCatalog` para iterar sobre los valores usando `catalog.values()`.

**✅ Respuesta:**
```js
const displayCatalog = () => {
  for (const val of catalog.values()) {
    console.log(val);
  }
};
```

---

### Paso 21 — Iterar con entries()

El método `entries()` devuelve pares `[clave, valor]`. Modifica `displayCatalog` para iterar sobre `catalog.entries()` e imprimir cada entrada.

**✅ Respuesta:**
```js
const displayCatalog = () => {
  for (const entry of catalog.entries()) {
    console.log(entry);
  }
};
```

---

### Paso 22 — Usar forEach() para construir una cadena

El método `forEach()` ejecuta una función para cada par clave-valor. El callback recibe `(valor, clave)`. Modifica `displayCatalog` para devolver una cadena con cada entrada en este formato y luego imprime el resultado:

`<scientificName> '<cultivar>': <small> S, <medium> M, <large> L\n`

**✅ Respuesta:**
```js
const displayCatalog = () => {
  let catalogString = "";
  catalog.forEach((val, key) => {
    catalogString += `${key.scientificName} '${key.cultivar}': ${val.small} S, ${val.medium} M, ${val.large} L\n`;
  });
  return catalogString;
};
console.log(displayCatalog());
```

---

### Paso 23 — Eliminar console.log de displayCatalog

Elimina la llamada `console.log(displayCatalog())` del código.

**✅ Respuesta:** Borra esa línea.

---

### Paso 24 — Crear displayPlantsSet con Set vacío

Un `Set` almacena valores únicos. Se crea con `new Set()`. Crea la función `displayPlantsSet` que devuelva un `Set` vacío.

**✅ Respuesta:**
```js
const displayPlantsSet = () => {
  return new Set();
};
```

---

### Paso 25 — Declarar plantsSet

Declara la variable `plantsSet` asignándola al resultado de llamar `displayPlantsSet()`. Imprime `plantsSet` en la consola.

**✅ Respuesta:**
```js
const plantsSet = displayPlantsSet();
console.log(plantsSet);
```

---

### Paso 26 — Agregar elemento con add()

El método `add()` agrega un elemento al Set solo si no está ya presente. Dentro de `displayPlantsSet`, crea un Set, agrega el objeto `ballerina` y retórnalo.

**✅ Respuesta:**
```js
const displayPlantsSet = () => {
  const catalogSet = new Set();
  catalogSet.add(ballerina);
  return catalogSet;
};
```

---

### Paso 27 — Agregar ballerina una segunda vez

Intenta agregar `ballerina` una segunda vez al Set dentro de la función. Observa que el tamaño no cambia porque los Sets no permiten duplicados.

**✅ Respuesta:**
```js
catalogSet.add(ballerina);
catalogSet.add(ballerina);
```

---

### Paso 28 — Agregar prettyPolly al Set

Agrega el objeto `prettyPolly` al Set dentro de `displayPlantsSet`.

**✅ Respuesta:**
```js
catalogSet.add(prettyPolly);
```

---

### Paso 29 — Verificar existencia con has() en Set

Los Sets también tienen el método `has()`. Usa `has()` para verificar si `ballerina` está en `plantsSet` e imprime el resultado.

**✅ Respuesta:**
```js
console.log(plantsSet.has(ballerina));
```

---

### Paso 30 — Eliminar todos los elementos con clear()

El método `clear()` elimina todos los elementos de un Map o Set. Llama a `clear()` en `plantsSet`.

**✅ Respuesta:**
```js
plantsSet.clear();
```

---

### Paso 31 — Eliminar clear() y has()

Elimina las llamadas a `plantsSet.clear()` y `console.log(plantsSet.has(ballerina))` del código.

**✅ Respuesta:** Borra esas dos líneas.

---

### Paso 32 — Finalizar displayPlantsSet con nombres únicos

El constructor `Set` acepta un iterable. Modifica `displayPlantsSet` para devolver un Set con los `commonName` únicos de todas las plantas del catálogo.

Crea un array con el `commonName` de cada clave del mapa usando `Array.from(catalog.keys()).map(...)` y pásalo al constructor `Set`.

**✅ Respuesta:**
```js
const displayPlantsSet = () => {
  const commonNames = Array.from(catalog.keys()).map(key => key.commonName);
  return new Set(commonNames);
};
```

---

## REVISIÓN — Maps y Sets de JavaScript

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/review-javascript-maps-and-sets/review-javascript-maps-and-sets`

La revisión cubre los conceptos clave del módulo. Repasa los métodos principales:

| Concepto | Map | Set |
|---|---|---|
| Crear | `new Map()` | `new Set()` |
| Agregar | `.set(key, value)` | `.add(value)` |
| Obtener | `.get(key)` | — |
| Verificar | `.has(key)` | `.has(value)` |
| Eliminar uno | `.delete(key)` | `.delete(value)` |
| Eliminar todos | `.clear()` | `.clear()` |
| Tamaño | `.size` | `.size` |
| Iterar claves | `.keys()` | — |
| Iterar valores | `.values()` | — |
| Iterar pares | `.entries()` | `.entries()` |
| Recorrer | `.forEach((val, key) => {})` | `.forEach((val) => {})` |

---

## QUIZ — Cuestionario sobre Maps y Sets de JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Una colección en la que un valor solo puede ocurrir una vez. |
| 2 | `set()` |
| 3 | `.add()` |
| 4 | `.has()` |
| 5 | Eliminar duplicados de un array. |
| 6 | Una colección similar a Set que solo almacena objetos. |
| 7 | Un Set puede contener cualquier tipo de valor, mientras que un WeakSet solo objetos. |
| 8 | Una colección de pares clave-valor de cualquier tipo. |
| 9 | `.set()` |
| 10 | `2` |
| 11 | Los mapas permiten cualquier tipo de clave, pero los objetos solo permiten cadenas y símbolos. |
| 12 | `.delete()` |
| 13 | El número de pares clave-valor en el Map. |
| 14 | Una colección similar a Map con referencias débiles a las claves. |
| 15 | Un Map es iterable, mientras que un WeakMap no lo es. |
| 16 | `.size` |
| 17 | `false` |
| 18 | Usando el método `.forEach()`. |
| 19 | `keys()` y `values()` |
| 20 | `0` |

---

*Fin de la guía — Módulo: Maps y Sets en JavaScript*
