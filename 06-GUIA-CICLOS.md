# GUÍA DE RESPUESTAS — Módulo: Ciclos (Loops)
## freeCodeCamp JavaScript v9

---

## ÍNDICE

1. [Teorías (5 lecciones)](#teorías)
2. [Taller: Word Counter (11 pasos)](#taller-word-counter)
3. [Lab: Factorial Calculator](#lab-factorial-calculator)
4. [Lab: Repeat a String](#lab-repeat-a-string)
5. [Taller: Sentence Analyzer (8 pasos)](#taller-sentence-analyzer)
6. [Lab: Longest Word in a String](#lab-longest-word)
7. [Lab: Mutations](#lab-mutations)
8. [Lab: Missing Letter Detector](#lab-missing-letter-detector)
9. [Lab: Profile Lookup](#lab-profile-lookup)
10. [Lab: Data Sanitizer Sweep](#lab-data-sanitizer-sweep)
11. [Taller: Space Mission Roster (32 pasos)](#taller-space-mission-roster)
12. [Lab: Chunky Monkey](#lab-chunky-monkey)
13. [Lab: Device Loan Ledger](#lab-device-loan-ledger)
14. [Taller: Heritage Library Catalog (30 pasos)](#taller-heritage-library-catalog)
15. [Lab: Smart Pantry Restocker](#lab-smart-pantry-restocker)
16. [Taller: Festival Crowd Flow Simulator (33 pasos)](#taller-festival-crowd-flow-simulator)
17. [Lab: Traffic Light Sequencer](#lab-traffic-light-sequencer)
18. [Taller: Campus Directory Normalizer (52 pasos)](#taller-campus-directory-normalizer)
19. [Lab: Proofreading Tool](#lab-proofreading-tool)
20. [Quiz: JavaScript Loops (20 preguntas)](#quiz-javascript-loops)

---

## TEORÍAS

### T1 — ¿Cómo funcionan los bucles for?

**Pregunta 1:** ¿Qué debe hacerse antes de que comience un bucle for?
► **Configurar una variable contador antes de que comience el bucle.** (opción 3)

**Pregunta 2:** ¿Qué ocurre si la condición de un bucle for nunca se vuelve falsa?
► **El bucle se ejecutará indefinidamente y puede hacer que el programa se bloquee.** (opción 4)

**Pregunta 3:** ¿Qué imprimiría `for (let i=2; i<=6; i+=2) console.log(i)`?
► **2, 4, 6** (opción 1)

---

### T2 — ¿Cómo funciona el bucle For...of?

**Pregunta 1:** ¿Qué imprime `for (const color of ["red","green","blue"]) console.log(color)`?
► **red, green, blue** (opción 1)

**Pregunta 2:** ¿Qué ocurre si se usa for...of sobre un objeto no iterable?
► **Ocurrirá un error.** (opción 3)

**Pregunta 3:** ¿Qué imprime `for (const f of ["apple","banana","cherry"]) console.log(f.toUpperCase())`?
► **APPLE, BANANA, CHERRY** (opción 3)

---

### T3 — ¿Qué es el bucle For...in?

**Pregunta 1:** ¿Qué imprime `for (const key in {name:"apple", color:"red", price:0.99}) console.log(obj[key])`?
► **apple, red, 0.99** (opción 3)

**Pregunta 2:** ¿Por qué puede ser problemático usar for...in en arrays?
► **for...in itera sobre todas las propiedades enumerables, incluyendo las propiedades heredadas y no numéricas, lo que puede conducir a resultados inesperados.** (opción 2)

**Pregunta 3:** ¿Para qué sirve la verificación `typeof obj === "object" && obj !== null`?
► **Para asegurar que el valor no sea una matriz ni null.** (opción 2)

---

### T4 — While vs Do...While

**Pregunta 1:** ¿Cuál es la principal diferencia entre while y do...while?
► **Un bucle do...while ejecuta el bloque de código al menos una vez, mientras que un bucle while no lo hace.** (opción 2)

**Pregunta 2:** ¿Cuándo es más apropiado usar do...while?
► **Cuando necesitas ejecutar un bloque de código al menos una vez antes de verificar la condición.** (opción 2)

**Pregunta 3:** Si la condición de un bucle while es false desde el inicio, ¿qué ocurre?
► **El bloque de código dentro del bucle no se ejecutará en absoluto.** (opción 2)

---

### T5 — Break y Continue

**Pregunta 1:** ¿Para qué sirve la sentencia `break` en un bucle?
► **Para salir del bucle inmediatamente.** (opción 2)

**Pregunta 2:** ¿Qué ocurre cuando se ejecuta `continue` en un bucle?
► **La iteración actual se omite y comienza la siguiente iteración.** (opción 3)

**Pregunta 3:** ¿Para qué sirven las etiquetas (labels) con break/continue?
► **Para especificar qué bucle salir o saltar cuando se trata de bucles anidados.** (opción 1)

---

## TALLER: WORD COUNTER

### Código acumulativo (lo que se agrega en cada paso)

**Step 1:** Declara función vacía
```javascript
function printCharacters(str) {}
```

**Step 2:** Agrega bucle for...of dentro de printCharacters
```javascript
function printCharacters(str) {
  for (const char of str) {}
}
```

**Step 3:** Agrega console.log dentro del bucle
```javascript
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
```

**Step 4:** Agrega llamada a la función
```javascript
printCharacters("hello");
```

**Step 5:** Declara segunda función vacía
```javascript
function getMatchedWordCount(sentence, match) {}
```

**Step 6:** Agrega contador y return
```javascript
function getMatchedWordCount(sentence, match) {
  let count = 0;
  return count;
}
```

**Step 7:** Agrega console.log de prueba
```javascript
console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"], "really"));
```

**Step 8:** Agrega bucle for...of (antes del return)
```javascript
for (const word of sentence) {}
```

**Step 9:** Agrega log dentro del bucle
```javascript
console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
```

**Step 10:** Agrega condicional dentro del bucle (antes del console.log)
```javascript
if (word === match) { count++; }
```

**Step 11:** Agrega segunda prueba
```javascript
console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"));
```

---

## LAB: FACTORIAL CALCULATOR

**URL:** `build-a-factorial-calculator`

```javascript
let num = 5;

function factorialCalculator(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
```

---

## LAB: REPEAT A STRING

**URL:** `build-a-string-repeating-function`

```javascript
function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
```

---

## TALLER: SENTENCE ANALYZER

### Código acumulativo (lo que se agrega en cada paso)

**Step 1:** función getVowelCount
```javascript
function getVowelCount(sentence) {
  let count = 0;
  for (const char of sentence) {
    if ("aeiouAEIOU".includes(char)) count++;
  }
  return count;
}
```

**Step 2:** prueba de getVowelCount
```javascript
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);
```

**Step 3:** función getConsonantCount
```javascript
function getConsonantCount(sentence) {
  let count = 0;
  for (const char of sentence) {
    if (char !== " " && char.match(/[a-zA-Z]/) && !"aeiouAEIOU".includes(char)) count++;
  }
  return count;
}
```

**Step 4:** prueba de getConsonantCount
```javascript
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);
```

**Step 5:** función getPunctuationCount
```javascript
function getPunctuationCount(sentence) {
  let count = 0;
  for (const char of sentence) {
    if (char !== " " && !char.match(/[a-zA-Z]/)) count++;
  }
  return count;
}
```

**Step 6:** prueba de getPunctuationCount
```javascript
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);
```

**Step 7:** función getWordCount
```javascript
function getWordCount(sentence) {
  let count = 0;
  for (const char of sentence) {
    if (char === " ") count++;
  }
  return count + 1;
}
```

**Step 8:** prueba de getWordCount
```javascript
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
```

---

## LAB: LONGEST WORD IN A STRING

**URL:** `build-a-longest-word-finder-app`

```javascript
function findLongestWordLength(str) {
  const words = str.split(" ");
  let maxLen = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLen) maxLen = words[i].length;
  }
  return maxLen;
}
```

---

## LAB: MUTATIONS

**URL:** `implement-the-mutations-algorithm`

```javascript
function mutation(arr) {
  const target = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) return false;
  }
  return true;
}
```

---

## LAB: MISSING LETTER DETECTOR

**URL:** `build-a-missing-letter-detector`

```javascript
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}
```

---

## LAB: PROFILE LOOKUP

**URL:** `lab-profile-lookup`

```javascript
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
```

---

## LAB: DATA SANITIZER SWEEP

**URL:** `lab-data-sanitizer-sweep`

```javascript
function sanitizeLog(entry, disallowedCharacters) {
  let result = "";
  for (let i = 0; i < entry.length; i++) {
    if (disallowedCharacters.includes(entry[i])) {
      result += "#";
    } else {
      result += entry[i];
    }
  }
  return result;
}

function cleanLogs(logs, disallowedCharacters) {
  let sanitizedCount = 0;
  let infoCount = 0;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i].includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    }
    if (logs[i][0] === "/") {
      infoCount++;
    } else {
      sanitizeLog(logs[i], disallowedCharacters);
      sanitizedCount++;
    }
  }
  return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${sanitizedCount}. Informational Entry Count: ${infoCount}. Finished sanitizing logs.`;
}
```

---

## TALLER: SPACE MISSION ROSTER

### Código acumulativo completo (32 pasos)

**Step 1:**
```javascript
const squad = [];
```

**Step 2:**
```javascript
const firstAstronaut = { id: 1, name: "Andy", role: "Commander", isEVAEligible: true, priority: 3 };
```

**Step 3:**
```javascript
function addCrewMember(crew, astronaut) {}
```

**Step 4:** (dentro de addCrewMember)
```javascript
for (let i = 0; i < crew.length; i++) {
  if (crew[i].id === astronaut.id) {
    console.log("Duplicate ID: " + astronaut.id);
    return;
  }
}
```

**Step 5:** (después del loop)
```javascript
crew.push(astronaut);
console.log(`Added ${astronaut.name} as ${astronaut.role}`);
```

**Step 6:**
```javascript
addCrewMember(squad, firstAstronaut);
```

**Step 7:** (fCC proporciona `remainingCrew`)
```javascript
for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}
```

**Step 8:** Eliminar el `console.log(...)` de dentro de addCrewMember (mantener `crew.push(astronaut)`)

**Step 9:**
```javascript
function swapCrewMembers(crew, fromIndex, toIndex) {}
```

**Step 10:**
```javascript
if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
  console.log("Invalid crew indices");
  return;
}
```

**Step 11:**
```javascript
const updatedCrew = crew.slice();
```

**Step 12:**
```javascript
updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
```

**Step 13:**
```javascript
for (let i = 0; i < updatedCrew.length; i++) {
  console.log(updatedCrew[i].name);
}
return updatedCrew;
```

**Step 14:**
```javascript
const updatedSquad = swapCrewMembers(squad, 2, 5);
```

**Step 15:** Eliminar el for loop que imprime nombres de swapCrewMembers

**Step 16:**
```javascript
function getEVAReadyCrew(crew) {}
```

**Step 17:**
```javascript
const eligible = [];
for (const astronaut of crew) {
  if (astronaut.isEVAEligible) eligible.push(astronaut);
}
return eligible;
```

**Step 18:** (bubble sort — sin return)
```javascript
function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}
```

**Step 19:** (dentro de getEVAReadyCrew, antes de return eligible)
```javascript
sortByPriorityDescending(eligible);
```

**Step 20:**
```javascript
const EVAReadySquad = getEVAReadyCrew(updatedSquad);
for (let i = 0; i < EVAReadySquad.length; i++) {
  console.log(EVAReadySquad[i].name);
}
```

**Step 21:** Eliminar el for loop que imprime EVAReadySquad

**Step 22:**
```javascript
function chunkCrew(crew, size) {}
```

**Step 23:**
```javascript
if (size < 1) {
  console.log("Chunk size must be >= 1");
  return;
}
```

**Step 24:**
```javascript
const chunks = [];
for (let i = 0; i < crew.length; i += size) {
  chunks.push(crew.slice(i, i + size));
}
return chunks;
```

**Step 25:**
```javascript
const EVAChunks = chunkCrew(EVAReadySquad, 3);
```

**Step 26:**
```javascript
for (let i = 0; i < EVAChunks.length; i++) {
  console.log(`Chunk ${i + 1}:`);
  for (let j = 0; j < EVAChunks[i].length; j++) {
    console.log(EVAChunks[i][j].name);
  }
}
```

**Step 27:** Eliminar el nested for loop que imprime EVAChunks

**Step 28:**
```javascript
function printCrewSummary(crew) {}
```

**Step 29:**
```javascript
const sorted = crew.slice();
```

**Step 30:**
```javascript
sortByPriorityDescending(sorted);
```

**Step 31:**
```javascript
for (const astronaut of sorted) {
  console.log(astronaut.name);
}
```

**Step 32:**
```javascript
printCrewSummary(updatedSquad);
```

---

## LAB: CHUNKY MONKEY

**URL:** `implement-the-chunky-monkey-algorithm`

```javascript
function chunkArrayInGroups(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
```

---

## LAB: DEVICE LOAN LEDGER

**URL:** `lab-device-loan-ledger`

```javascript
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

function checkoutDevice(ledger, assetTag, borrower) {
  const updatedLedger = loadLedger(serializeLedger(ledger));
  const device = updatedLedger.find(d => d.assetTag === assetTag);
  if (!device) return { ledger: updatedLedger, message: "Device not found." };
  if (device.status === "CheckedOut") return { ledger: updatedLedger, message: "Device already checked out." };
  device.borrower.name = borrower.name;
  device.borrower.email = borrower.email;
  device.status = "CheckedOut";
  return { ledger: updatedLedger, message: `${assetTag} checked out to ${borrower.name}.` };
}

function checkinDevice(ledger, assetTag) {
  const updatedLedger = loadLedger(serializeLedger(ledger));
  const device = updatedLedger.find(d => d.assetTag === assetTag);
  if (!device) return { ledger: updatedLedger, message: "Device not found." };
  device.borrower.name = "";
  device.borrower.email = "";
  device.dueDate = "";
  device.status = "CheckedIn";
  return { ledger: updatedLedger, message: `${assetTag} checked in.` };
}

function listOverdueDevices(ledger, today) {
  const overdue = [];
  for (let i = 0; i < ledger.length; i++) {
    const device = ledger[i];
    if (device.status === "CheckedOut" && device.dueDate) {
      // Parse dates manually: format month/day/year
      const [tm, td, ty] = device.dueDate.split("/").map(Number);
      const [cm, cd, cy] = today.split("/").map(Number);
      const dueVal = ty * 10000 + tm * 100 + td;
      const todayVal = cy * 10000 + cm * 100 + cd;
      if (dueVal < todayVal) overdue.push(device);
    }
  }
  overdue.sort((a, b) => {
    const [am, ad, ay] = a.dueDate.split("/").map(Number);
    const [bm, bd, by] = b.dueDate.split("/").map(Number);
    return (ay * 10000 + am * 100 + ad) - (by * 10000 + bm * 100 + bd);
  });
  return overdue;
}
```

---

## TALLER: HERITAGE LIBRARY CATALOG

### Código acumulativo (30 pasos)

**Step 1:** Variable rawCatalogCards (fCC la provee con más entradas en step 2)
```javascript
const rawCatalogCards = ["From a Buick 8 | King, Stephen | 2002 | Shelf K7", "The Shining | King, Stephen | 1977 | Shelf K1"];
```

**Step 2:** fCC agrega más entradas al array

**Step 3:**
```javascript
function parseCard(rawString) {}
const cardResult = parseCard(rawCatalogCards[2]);
console.log(cardResult);
```

**Step 4:** (dentro de parseCard)
```javascript
return rawString.split("|");
```

**Step 5:** (reemplaza return)
```javascript
const parts = rawString.split("|");
const trimmedParts = [];
for (let i = 0; i < parts.length; i++) {}
return parts;
```

**Step 6:** (dentro del loop + cambiar return)
```javascript
trimmedParts.push(parts[i].trim());
// cambiar: return trimmedParts;
```

**Step 7:** (reemplaza return)
```javascript
const title = trimmedParts[0];
const author = trimmedParts[1];
const year = trimmedParts[2];
const location = trimmedParts[3];
return { title, author, year, location };
```

**Step 8:** (actualiza return para valores vacíos)
```javascript
return {
  title: title || "Unknown",
  author: author || "Unknown",
  year: year,
  location: location || "Unknown"
};
```

**Step 9:** (actualiza year)
```javascript
year: year ? parseInt(year) : "Unknown"
```

**Step 10:** Elimina cardResult. Agrega:
```javascript
function parseCatalog(rawCards) {
  const catalog = [];
  return catalog;
}
const catalog = parseCatalog(rawCatalogCards);
console.log(catalog.length);
```

**Step 11:** (dentro de parseCatalog, antes del return)
```javascript
for (let i = 0; i < rawCards.length; i++) {
  catalog.push(parseCard(rawCards[i]));
}
```

**Step 12:** Elimina console.log. Agrega:
```javascript
function findByAuthor(catalog, author) {
  const searchTerm = author.toLowerCase();
  const results = [];
}
```

**Step 13:** Loop vacío dentro de findByAuthor
```javascript
for (let i = 0; i < catalog.length; i++) {}
```

**Step 14:**
```javascript
// dentro del loop:
if (catalog[i].author.toLowerCase().includes(searchTerm)) {
  results.push(catalog[i]);
}
// después del loop:
return results;
```

**Step 15:**
```javascript
const kingBooks = findByAuthor(catalog, "king");
console.log(kingBooks.length);
for (let i = 0; i < kingBooks.length; i++) {
  console.log(`${kingBooks[i].title} (${kingBooks[i].year})`);
}
```

**Step 16:** Elimina código de kingBooks

**Step 17:**
```javascript
function groupByDecade(catalog) {
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
  }
}
```

**Step 18:** (dentro del loop, después de `const book`)
```javascript
if (book.year === "Unknown") {
  if (!grouped["Unknown"]) { grouped["Unknown"] = []; }
  grouped["Unknown"].push(book);
  continue;
}
```

**Step 19:** (después del bloque Unknown)
```javascript
const decade = Math.floor(book.year / 10) * 10;
const decadeKey = `${decade}s`;
if (!grouped[decadeKey]) { grouped[decadeKey] = []; }
grouped[decadeKey].push(book);
```

**Step 20:** (después de función)
```javascript
return grouped;
```
```javascript
const byDecade = groupByDecade(catalog);
console.log(byDecade);
```

**Step 21:** Elimina console.log(byDecade). Agrega:
```javascript
function renderEntry(entry) {}
console.log(renderEntry(catalog[0]));
```

**Step 22:**
```javascript
function renderEntry(entry) {
  const title = entry.title || "Unknown";
  const author = entry.author || "Unknown";
  const year = entry.year || "Unknown";
  const location = entry.location || "Unknown";
  return `${"-".repeat(25)}\nTitle: ${title}\nAuthor: ${author}\nYear: ${year}\nLocation: ${location}\n${"-".repeat(25)}`;
}
```

**Step 23:**
```javascript
function validateEntry(entry) {
  let isValid = true;
  if (!("title" in entry) || !entry.title || entry.title === "Unknown") { isValid = false; }
  return isValid;
}
```

**Step 24:** Agrega chequeos iguales para author, year, location

**Step 25:**
```javascript
console.log(validateEntry(catalog[0]));
console.log(validateEntry(catalog[16]));
```

**Step 26:** Elimina logs de validateEntry. Agrega:
```javascript
function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
}
console.log(exportToJSON(catalog.slice(0, 2)));
```

**Step 27:** Elimina console.log de exportToJSON. Agrega:
```javascript
function exportToCSV(catalog) {
  const header = "Title,Author,Year,Location";
  const rows = [];
}
```

**Step 28:** (dentro de exportToCSV)
```javascript
for (let i = 0; i < catalog.length; i++) {
  const entry = catalog[i];
  rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
}
```

**Step 29:** (después del primer loop)
```javascript
let csv = header;
for (let i = 0; i < rows.length; i++) {
  csv = csv + "\n" + rows[i];
}
return csv;
```
```javascript
console.log(exportToCSV(catalog));
```

**Step 30:** Elimina console.log(exportToCSV(catalog))

---

## LAB: SMART PANTRY RESTOCKER

**URL:** `lab-smart-pantry-restocker`

```javascript
function parseShipment(rawData) {
  const shipment = [];
  const seenSkus = [];
  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    const sku = parts[0].trim();
    if (seenSkus.includes(sku)) continue;
    seenSkus.push(sku);
    shipment.push({
      sku: sku,
      name: parts[1].trim(),
      qty: Number(parts[2].trim()),
      expires: parts[3].trim(),
      zone: parts[4] ? parts[4].trim() : "general"
    });
  }
  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];
  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    if (item.qty <= 0) {
      actions.push({ type: "discard", item: item });
      continue;
    }
    let inPantry = false;
    for (let j = 0; j < pantry.length; j++) {
      if (pantry[j].sku === item.sku) {
        inPantry = true;
        break;
      }
    }
    if (inPantry) {
      actions.push({ type: "restock", item: item });
    } else {
      actions.push({ type: "donate", item: item });
    }
  }
  return actions;
}

function groupByZone(actions) {
  const grouped = {};
  for (let i = 0; i < actions.length; i++) {
    const zone = actions[i].item.zone;
    if (!grouped[zone]) grouped[zone] = [];
    grouped[zone].push(actions[i]);
  }
  return grouped;
}

function clonePantry(pantry) {
  const copy = [];
  for (let i = 0; i < pantry.length; i++) {
    copy.push({ ...pantry[i] });
  }
  return copy;
}

// Usar todas juntas:
const shipment = parseShipment(rawData);
const pantryClone = clonePantry(pantry);
const actions = planRestock(pantryClone, shipment);
const grouped = groupByZone(actions);
console.log(grouped);
```

---

## TALLER: FESTIVAL CROWD FLOW SIMULATOR

### Código acumulativo completo (33 pasos)

**Step 1:** función initializeThroughput vacía
```javascript
function initializeThroughput(gates) {}
```

**Step 2:** (dentro)
```javascript
const summary = {};
```

**Step 3:**
```javascript
function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  }
  return summary;
}
```

**Step 4:** función processGateFlow vacía
```javascript
function processGateFlow(gate, tickIndex) {}
```

**Step 5:**
```javascript
let currentTickQueue = gate.queue[tickIndex];
```

**Step 6:**
```javascript
let processed = 0;
```

**Step 7:**
```javascript
while (currentTickQueue > 0 && processed < gate.capacity) {}
```

**Step 8:**
```javascript
currentTickQueue--;
processed++;
```

**Step 9:**
```javascript
return {
  processed: processed,
  overflow: currentTickQueue
};
```

**Step 10:** función rerouteOverflow vacía
```javascript
function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {}
```

**Step 11:**
```javascript
const currentIndex = gates.indexOf(currentGate);
```

**Step 12:**
```javascript
const nextGateIndex = (currentIndex + 1) % gates.length;
```

**Step 13:**
```javascript
gates[nextGateIndex].queue[tickIndex] += overflowAmount;
```

**Step 14:**
```javascript
console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
```

**Step 15:** función handleGateAtTick vacía
```javascript
function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {}
```

**Step 16:**
```javascript
console.log("\nProcessing " + gate.id + "...");
```

**Step 17:**
```javascript
console.log(gate.queue[tickIndex] + " attendees arriving.");
```

**Step 18:**
```javascript
const result = processGateFlow(gate, tickIndex);
```

**Step 19:**
```javascript
throughputSummary[gate.id] += result.processed;
```

**Step 20:**
```javascript
if (result.overflow > 0) {
  console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
  rerouteOverflow(gates, gate, tickIndex, result.overflow);
}
```

**Step 21:** función printSummary vacía
```javascript
function printSummary(summary) {}
```

**Step 22:**
```javascript
console.log("\nThroughput Summary");
```

**Step 23:**
```javascript
for (const gateId in summary) {
  console.log(gateId + ": " + summary[gateId] + " attendees processed");
}
```

**Step 24:** función simulateFestival vacía
```javascript
function simulateFestival(gates, timeBlock) {}
```

**Step 25:**
```javascript
console.log("\n" + timeBlock + " Simulation");
```

**Step 26:**
```javascript
const throughputSummary = initializeThroughput(gates);
```

**Step 27:**
```javascript
const maxTicks = gates[0].queue.length;
```

**Step 28:**
```javascript
let tickIndex = 0;
```

**Step 29:**
```javascript
while (tickIndex < maxTicks) {}
```

**Step 30:**
```javascript
while (tickIndex < maxTicks) {
  console.log("\nTick " + (tickIndex + 1));
  for (const gate of gates) {
    handleGateAtTick(gates, gate, tickIndex, throughputSummary);
  }
  tickIndex++;
}
```

**Step 31:**
```javascript
printSummary(throughputSummary);
```

**Step 32:**
```javascript
simulateFestival(morningGates, "Morning");
```

**Step 33:**
```javascript
simulateFestival(nightGates, "Night");
```

---

## LAB: TRAFFIC LIGHT SEQUENCER

**URL:** `lab-traffic-light-sequencer`

```javascript
function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }
  for (let c = 0; c < cycles; c++) {
    if (config.fault) {
      console.log("Faulted phase!");
      return;
    }
    for (let i = 0; i < config.phases.length; i++) {
      const phase = config.phases[i];
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timestamps = [];
  let elapsed = 0;
  for (let c = 0; c < cycles; c++) {
    for (let i = 0; i < config.phases.length; i++) {
      elapsed += config.phases[i].duration;
      timestamps.push(elapsed);
    }
  }
  return timestamps;
}
```

---

## TALLER: CAMPUS DIRECTORY NORMALIZER

### Paso 1
Registra `rawData` en la consola:
```js
console.log(rawData);
```

---

### Paso 2
Elimina el `console.log(rawData)` y declara la función `getInstructorByEmail`:
```js
function getInstructorByEmail(email) {
  return null;
}
```

---

### Paso 3
Agrega una llamada a la función y muestra el resultado:
```js
console.log(getInstructorByEmail("fatima@example.com"));
```

---

### Paso 4
Dentro de la función, antes de `return null`, agrega un `for...in` sobre `rawData`:
```js
for (const dept in rawData) {
  console.log(dept);
}
```

---

### Paso 5
Dentro del `for...in`, reemplaza `console.log(dept)` con:
```js
const programs = rawData[dept].programs;
console.log(programs);
```

---

### Paso 6
Reemplaza `console.log(programs)` con un `for...of` sobre `programs`:
```js
for (const program of programs) {
  console.log(program);
}
```

---

### Paso 7
Reemplaza `console.log(program)` con un `for...of` sobre los instructores:
```js
for (const instructor of program["instructors"]) {
  console.log(instructor);
}
```

---

### Paso 8
Reemplaza `console.log(instructor)` con un `if` que retorna el nombre:
```js
if (instructor.email === email) {
  return instructor.name;
}
```

---

### Paso 9
Agrega dos llamadas más a `getInstructorByEmail` debajo del console.log existente:
```js
console.log(getInstructorByEmail("alejandro@example.com"));
console.log(getInstructorByEmail("sofia@example.com"));
```

---

### Paso 10
Elimina la función `getInstructorByEmail` completa y los tres `console.log` que la llaman.

---

### Paso 11
Declara la función `normalizeDirectory` vacía y llámala:
```js
function normalizeDirectory(rawData) {
}
normalizeDirectory(rawData);
```

---

### Paso 12
Dentro de `normalizeDirectory`, declara los 4 objetos de lookup:
```js
const departmentsById = {};
const programsById = {};
const instructorsById = {};
const instructorsByEmail = {};
```

---

### Paso 13
Después de los 4 objetos, usa `Object.entries` y registra el resultado:
```js
const departmentEntries = Object.entries(rawData);
console.log(departmentEntries);
```

---

### Paso 14
Reemplaza `console.log(departmentEntries)` con un `for` loop:
```js
for (let i = 0; i < departmentEntries.length; i++) {
}
```

---

### Paso 15
Dentro del `for`, desestructura `departmentEntries[i]` y registra ambas variables:
```js
const [departmentName, departmentData] = departmentEntries[i];
console.log(departmentName);
console.log(departmentData);
```

---

### Paso 16
Elimina los dos `console.log` y declara `departmentId`:
```js
const departmentId = departmentData.Dept_code;
```

---

### Paso 17
Actualiza `departmentId` para usar `||` como fallback:
```js
const departmentId = departmentData.Dept_code || `dept-${i + 1}`;
```

---

### Paso 18
Asigna el objeto del departamento a `departmentsById[departmentId]` y regístralo:
```js
departmentsById[departmentId] = {
  id: departmentId,
  code: departmentData.Dept_code,
  name: departmentName,
  programIds: [],
};
console.log(departmentsById[departmentId]);
```

---

### Paso 19
Reemplaza `console.log(departmentsById[departmentId])` con un loop `j` sobre `programs`:
```js
for (let j = 0; j < departmentData.programs.length; j++) {
  const program = departmentData.programs[j];
  console.log(program);
}
```

---

### Paso 20
Dentro del loop `j`, reemplaza `console.log(program)` con la asignación a `programsById`:
```js
programsById[program.id] = {
  ...program,
  departmentId,
};
console.log(programsById[program.id]);
```

---

### Paso 21
Reemplaza `console.log(programsById[program.id])` con push al array `programIds`:
```js
departmentsById[departmentId].programIds.push(program.id);
```

---

### Paso 22
Elimina `console.log(departmentsById[departmentId])` y agrega loop `k` sobre instructores dentro del loop `j`:
```js
for (let k = 0; k < program.instructors.length; k++) {
  const instructor = program.instructors[k];
  console.log(instructor);
}
```

---

### Paso 23
Reemplaza `console.log(instructor)` con la asignación a `instructorsById`:
```js
instructorsById[instructor.id] = {
  ...instructor,
  programId: program.id,
  departmentId,
};
console.log(instructorsById[instructor.id]);
```

---

### Paso 24
Reemplaza `console.log(instructorsById[instructor.id])` con un `if` que asigna por email:
```js
if (instructor.email) {
  instructorsByEmail[instructor.email] = instructor.id;
}
```

---

### Paso 25
Después de todos los loops, agrega el `return` con los 4 objetos:
```js
return { departmentsById, programsById, instructorsById, instructorsByEmail };
```

---

### Paso 26
Reemplaza `normalizeDirectory(rawData)` con una asignación a `normalizedData` y un console.log:
```js
const normalizedData = normalizeDirectory(rawData);
console.log(normalizedData);
```

---

### Paso 27
Reemplaza `console.log(normalizedData)` con la función `getInstructorByEmail` que retorna `null`:
```js
function getInstructorByEmail(email, normalizedData) {
  return null;
}
```

---

### Paso 28
Agrega una llamada a la función y registra el resultado:
```js
console.log(getInstructorByEmail("fatima@example.com", normalizedData));
```

---

### Paso 29
Dentro de la función, antes de `return null`, declara `instructorId` y regístralo:
```js
const instructorId = normalizedData.instructorsByEmail[email];
console.log(instructorId);
```

---

### Paso 30
Reemplaza `console.log(instructorId)` con un guard clause:
```js
if (!instructorId) {
  return "Instructor not found";
}
```

---

### Paso 31
Después del guard clause, declara `instructor` y regístralo:
```js
const instructor = normalizedData.instructorsById[instructorId];
console.log(instructor);
```

---

### Paso 32
Reemplaza `console.log(instructor)` con la declaración de `department` y regístralo:
```js
const department = normalizedData.departmentsById[instructor.departmentId];
console.log(department);
```

---

### Paso 33
Reemplaza `console.log(department)` y `return null` con el objeto de retorno usando `??`:
```js
return {
  name: instructor.name ?? "Unknown Instructor",
  officeHours: instructor.officeHours ?? "Not Available",
  department: department.name ?? "Unknown Department",
};
```

---

### Paso 34
Después del `console.log` existente, agrega dos llamadas más:
```js
console.log(getInstructorByEmail("alejandro@example.com", normalizedData));
console.log(getInstructorByEmail("not_found@example.com", normalizedData));
```

---

### Paso 35
Elimina los 3 `console.log` de `getInstructorByEmail` y declara `listRoomsByBuilding` vacía:
```js
function listRoomsByBuilding(buildingCode, normalizedData) {
}
```

---

### Paso 36
Dentro de `listRoomsByBuilding`, obtén los valores de `programsById`:
```js
const programValues = Object.values(normalizedData.programsById);
```

---

### Paso 37
Declara el array `rooms` vacío:
```js
const rooms = [];
```

---

### Paso 38
Agrega un `for` loop sobre `programValues`:
```js
for (let i = 0; i < programValues.length; i++) {
}
```

---

### Paso 39
Dentro del loop, declara `program` y `department`:
```js
const program = programValues[i];
const department = normalizedData.departmentsById[program.departmentId];
```

---

### Paso 40
Agrega el `if` que verifica building code y room, luego push:
```js
if (department.code === buildingCode && program.room != null) {
  rooms.push(program.room);
}
```

---

### Paso 41
Después del loop, ordena y retorna `rooms`:
```js
rooms.sort();
return rooms;
```

---

### Paso 42
Llama a `listRoomsByBuilding` con "CSE" y "BBA" y registra ambos resultados:
```js
console.log(listRoomsByBuilding("CSE", normalizedData));
console.log(listRoomsByBuilding("BBA", normalizedData));
```

---

### Paso 43
Elimina los 2 `console.log` de `listRoomsByBuilding` y declara `renderDirectorySummary` vacía:
```js
function renderDirectorySummary(normalizedData) {
}
```

---

### Paso 44
Dentro de `renderDirectorySummary`, declara `departments`, `programs` e `instructors`:
```js
const departments = Object.keys(normalizedData.departmentsById).length;
const programs = Object.keys(normalizedData.programsById).length;
const instructors = Object.keys(normalizedData.instructorsById).length;
```

---

### Paso 45
Declara `instructorValues` y `missingOfficeHours`:
```js
const instructorValues = Object.values(normalizedData.instructorsById);
let missingOfficeHours = 0;
```

---

### Paso 46
Agrega un `for` loop sobre `instructorValues`:
```js
for (let i = 0; i < instructorValues.length; i++) {
}
```

---

### Paso 47
Dentro del loop, verifica si `officeHours == null` y cuenta:
```js
if (instructorValues[i].officeHours == null) {
  missingOfficeHours++;
}
```

---

### Paso 48
Después del primer loop, declara `programValues` y `programsWithoutRooms`:
```js
const programValues = Object.values(normalizedData.programsById);
let programsWithoutRooms = 0;
```

---

### Paso 49
Agrega un `for` loop sobre `programValues`:
```js
for (let i = 0; i < programValues.length; i++) {
}
```

---

### Paso 50
Dentro del loop, verifica si `room === null` y cuenta:
```js
if (programValues[i].room === null) {
  programsWithoutRooms++;
}
```

---

### Paso 51
Después del loop, retorna el template literal con el resumen:
```js
return `
Campus Directory Summary
------------------------
Departments: ${departments}
Programs: ${programs}
Instructors: ${instructors}
Missing Office Hours: ${missingOfficeHours}
Programs Without Rooms: ${programsWithoutRooms}
`;
```

---

### Paso 52
Llama a `renderDirectorySummary` y registra el resultado:
```js
console.log(renderDirectorySummary(normalizedData));
```

---

## LAB: PROOFREADING TOOL

**URL:** `build-a-proofreading-tool`

```javascript
function isPalindrome(word) {
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

function findPalindromeBreaks(words) {
  if (words.length === 0) return [];
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) breaks.push(i);
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];
  const seen = {};
  const repeatedIndices = [];
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (seen[phrase] !== undefined) {
      if (seen[phrase] !== -1) {
        repeatedIndices.push(seen[phrase]);
        seen[phrase] = -1;
      }
      repeatedIndices.push(i);
    } else {
      seen[phrase] = i;
    }
  }
  return repeatedIndices;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) return [];
  const results = [];
  for (let i = 0; i < texts.length; i++) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    });
  }
  return results;
}
```

---

## QUIZ: JAVASCRIPT LOOPS

**Instrucciones:** Responde al menos 18/20 correctamente.

| # | Pregunta | Respuesta |
|---|----------|-----------|
| 1 | ¿Qué define mejor la iteración? | Es el proceso de repetir un conjunto de instrucciones múltiples veces. |
| 2 | ¿Qué técnica se usa para iteraciones? | **Bucle** |
| 3 | ¿Cuál es un objeto iterable? | **Cadena** |
| 4 | ¿Cuál NO es un bucle en JavaScript? | **Bucle if...else** |
| 5 | Orden correcto de la declaración for: | `for (initialization; condition; increment/decrement)` |
| 6 | ¿Qué bucle ejecuta el código al menos una vez? | **Bucle do...while** |
| 7 | ¿Cuál recorre los valores de un iterable? | **Bucle for...of** |
| 8 | ¿Qué define mejor un bucle infinito? | Un bucle cuya condición de finalización nunca se cumple o está ausente. |
| 9 | ¿Cuántas veces: `for(let i=2; i<10; i+=2)`? | **4** (imprime 2,4,6,8) |
| 10 | ¿Qué bucle es mejor para iterar objetos? | **Bucle for...in** |
| 11 | Diferencia for...in vs for...of: | for...in itera sobre nombres de propiedades (claves), for...of itera sobre valores. |
| 12 | ¿Qué causaría un bucle infinito? | Una condición de bucle que siempre devuelve verdadero. |
| 13 | ¿Qué sentencia sale completamente del bucle? | **break** |
| 14 | ¿Qué sentencia salta la iteración actual? | **continue** |
| 15 | `for(i=0;i<25;i+=2)` con continue si `i%5===0` y break si `i%13===0`: | **2, 4, 6, 8, 12, 14, 16, 18, 22, 24** |
| 16 | `for(i=1;i<6;i++)` con `if(i===4) break`: | **1, 2, 3** |
| 17 | `for(const item in {tomatoes:4, apples:10}) console.log(item)`: | **tomates, manzanas** (las claves) |
| 18 | `for(i=2;i<=13;i++)` con `if(i%2===0) continue`: | **3, 5, 7, 9, 11, 13** |
| 19 | `for(const fruit of ["Mango","Pineapple","Oranges"])`: | **Mango, Piña, Naranjas** |
| 20 | `while(x<5)` sin incrementar x: | **Veces infinitas** |

---

*Guía compilada para el módulo Ciclos (Loops) — freeCodeCamp JavaScript v9*
