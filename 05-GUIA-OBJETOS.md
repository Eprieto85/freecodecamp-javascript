# MÓDULO: OBJETOS — Respuestas completas
## freeCodeCamp JavaScript v9 · Pasos 21–61

---

## LABORATORIO — Construye un validador de manifiestos de carga

**Código completo:**

```javascript
function normalizeUnits(manifest) {
  const copy = { ...manifest };
  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
  }
  return copy;
}

function validateManifest(manifest) {
  const errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
```

---

## TEORÍA — ¿Qué es JSON?

**Respuestas del quiz (elige la opción marcada):**

1. ► **JSON es un formato de datos ligero utilizado para el intercambio de datos entre servidores y aplicaciones web.**
2. ► **data.name**
3. ► **"first name"** *(contiene espacio → requiere corchetes)*

---

## TEORÍA — JSON.parse() y JSON.stringify()

**Respuestas del quiz:**

1. ► **Convierte un objeto de JavaScript en una cadena JSON.**
2. ► **Convierte una cadena JSON en un objeto de JavaScript.**
3. ► **JSON.parse(jsonString).age**

---

## TEORÍA — Encadenamiento Opcional (?.)

**Respuestas del quiz:**

1. ► **Accede de forma segura a propiedades anidadas y devuelve undefined en lugar de generar un error si falta un valor.**
2. ► **Se lanza un TypeError porque person.address está indefinido.**
3. ► **undefined** *(el objeto tiene "home address", no "address")*

---

## TEORÍA — Desestructuración de Objetos

**Respuestas del quiz:**

1. ► **Para extraer valores de objetos y asignarlos a variables.**
2. ► **{ property = defaultValue } = object**
3. ► **Crea un objeto con propiedades llamadas name y age, asignándoles los valores de las variables con los mismos nombres.**

---

## TALLER — Construye un rastreador de recetas (13 pasos)

### Paso 1
```javascript
const recipes = [];
```

### Paso 2
```javascript
const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
};
```

### Paso 3 — Agregar propiedades a recipe1
```javascript
const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
};
```

### Paso 4 — Crear recipe2
```javascript
const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
};
```

### Paso 5 — Crear recipe3
```javascript
const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};
```

### Paso 6 — Acceder a propiedades
```javascript
const recipe1Name = recipe1.name;
console.log(recipe1Name);
const recipe2CookingTime = recipe2.cookingTime;
console.log(recipe2CookingTime);
const recipe3Ingredients = recipe3.ingredients;
console.log(recipe3Ingredients);
```

### Paso 7 — push() y eliminar variables del paso 6
```javascript
recipes.push(recipe1, recipe2, recipe3);
// Elimina las variables recipe1Name, recipe2CookingTime, recipe3Ingredients y sus console.log
```

### Paso 8 — Función getTotalIngredients
```javascript
function getTotalIngredients(ingredients) {
  return ingredients.length;
}
```

### Paso 9 — Función getDifficultyLevel
```javascript
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}
```

### Paso 10 — Probar funciones con recipe1
```javascript
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);
```

### Paso 11 — Actualizar recipe1
```javascript
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);
```

### Paso 12 — Repetir para recipe2 y recipe3
```javascript
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);
```

### Paso 13 — Registrar el array completo
```javascript
console.log(recipes);
```

---

## LABORATORIO — Construye un juego de quiz

**Código completo:**

```javascript
const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "History",
    question: "Who was the first president of the USA?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "High Text Markup Language", "HyperText Making Language"],
    answer: "HyperText Markup Language"
  }
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
```

---

## LABORATORIO — Construye una colección de discos

**Código completo** *(agrega esta función debajo del objeto recordCollection que ya viene en el editor)*:

```javascript
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    if (!records[id].tracks) {
      records[id].tracks = [];
    }
    records[id].tracks.push(value);
  }
  return records;
}
```

---

## TALLER — Crear un auditor de procedencia de artefactos (20 pasos)

### Paso 1
```javascript
const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
  },
};
```

### Paso 2 — Agregar curator a 101
```javascript
const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
  },
};
```

### Paso 3 — Agregar locations, tags, onDisplay
```javascript
const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
};
```

### Paso 4 — Agregar artefacto 102
```javascript
// Agrega dentro de collection:
102: {
  title: "Bronze Tablet",
  category: "Inscription",
  curator: {
    id: 202,
    name: "Robert Sinclair",
  },
  locations: [{ gallery: "Archive Wing", year: 2019 }],
  tags: ["bronze", "writing"],
  onDisplay: false,
},
```

### Paso 5
```javascript
console.log(collection[101].title);
console.log(collection[101].curator.name);
```

### Paso 6 — Función getArtifactTitle
```javascript
function getArtifactTitle(id) {
  const artifact = collection[id];
  return artifact.title;
}
```

### Paso 7 — Manejar artefacto no encontrado
```javascript
function getArtifactTitle(id) {
  const artifact = collection[id];
  return artifact ? artifact.title : "Artifact not found";
}
```

### Paso 8
```javascript
console.log(getArtifactTitle(102));
```

### Paso 9 — Función addTag
```javascript
function addTag(id, tag) {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}
```

### Paso 10
```javascript
addTag(101, "royal");
console.log(collection[101].tags);
```

### Paso 11 — Función moveArtifact
```javascript
function moveArtifact(id, gallery, year) {
  const artifact = collection[id];
  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}
```

### Paso 12
```javascript
moveArtifact(102, "Hall B", 2026);
console.log(collection[102].locations);
```

### Paso 13 — Función toggleDisplayStatus
```javascript
function toggleDisplayStatus(id) {
  const artifact = collection[id];
  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
}
```

### Paso 14
```javascript
console.log(collection[102].onDisplay);
toggleDisplayStatus(102);
console.log(collection[102].onDisplay);
```

### Paso 15 — Función updateCurator
```javascript
function updateCurator(id, name) {
  const artifact = collection[id];
  if (artifact) {
    artifact.curator.name = name;
  }
}
```

### Paso 16
```javascript
updateCurator(101, "Fran Sinclair");
console.log(collection[101].curator.name);
```

### Paso 17 — Función buildSummary (inicio)
```javascript
function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
}
```

### Paso 18 — Agregar currentLocation
```javascript
function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
  const currentLocation = artifact.locations[artifact.locations.length - 1];
}
```

### Paso 19 — Retornar template literal
```javascript
function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
  const currentLocation = artifact.locations[artifact.locations.length - 1];
  return `${artifact.title}
Category: ${artifact.category}
Curator: ${artifact.curator.name}
Current Gallery: ${currentLocation.gallery}
On Display: ${artifact.onDisplay}`;
}
```

### Paso 20
```javascript
console.log(buildSummary(101));
```

---

## QUIZ — Quiz de objetos de JavaScript (20 preguntas)

| # | Respuesta correcta |
|---|---|
| 1 | Un tipo de dato primitivo. |
| 2 | `const product = { color: blue };` *(blue sin comillas es inválido)* |
| 3 | `person.job` |
| 4 | `person["address"]["street"]` |
| 5 | Una clave de propiedad que es dinámica. |
| 6 | `const { name } = person;` |
| 7 | `const { ingredients: { flour } } = recipe;` |
| 8 | `const { key = "defaultValue" } = object;` |
| 9 | `car.hasOwnProperty("year");` |
| 10 | Una función asociada con un objeto. |
| 11 | `calculator.add(10, 7);` |
| 12 | `delete` |
| 13 | `"score" in player` |
| 14 | `new Object()` |
| 15 | `object?.key` |
| 16 | Utilizado para acceder de manera segura a las propiedades de un objeto que podrían ser null o undefined. |
| 17 | `JSON.stringify()` |
| 18 | `JSON.parse()` |
| 19 | `toy["color"]` |
| 20 | `learner.contact.phone.home` |

---

*Nota: La Revisión de objetos es solo un checklist — no tiene preguntas, solo marca las casillas.*
