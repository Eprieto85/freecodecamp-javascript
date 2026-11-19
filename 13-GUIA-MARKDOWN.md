# Guía de Respuestas: Convertidor de Markdown a HTML
## freeCodeCamp JavaScript v9 — Proyecto de Certificación

---

## DESCRIPCIÓN DEL PROYECTO

**Tipo:** Laboratorio / Proyecto de certificación  
**Título:** Construir un Convertidor de Markdown a HTML  
**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-markdown-to-html-converter/build-a-markdown-to-html-converter`

El HTML y CSS ya están provistos por freeCodeCamp. Solo debes escribir el archivo **script.js** (y enlazarlo en el HTML).

---

## ELEMENTOS HTML CLAVE

Los IDs que usa el proyecto y que necesitas en tu JavaScript:

| ID | Descripción |
|---|---|
| `#markdown-input` | Textarea donde el usuario escribe Markdown |
| `#html-output` | Div que muestra el HTML en texto plano (raw) |
| `#preview` | Div que renderiza el HTML como vista previa |

---

## TABLA DE CONVERSIONES REQUERIDAS

| Markdown | HTML esperado |
|---|---|
| `# heading 1` | `<h1>heading 1</h1>` |
| `## heading 2` | `<h2>heading 2</h2>` |
| `### heading 3` | `<h3>heading 3</h3>` |
| `**bold text**` o `__bold text__` | `<strong>bold text</strong>` |
| `*italic text*` o `_italic text_` | `<em>italic text</em>` |
| `![alt-text](image-source)` | `<img alt="alt-text" src="image-source">` |
| `[link text](URL)` | `<a href="URL">link text</a>` |
| `> quote` | `<blockquote>quote</blockquote>` |

**Reglas importantes:**
- Los `#` para encabezados deben estar **al inicio de la línea** (pueden tener espacios antes, pero no otros caracteres)
- El `>` para citas debe estar **al inicio de la línea**
- El evento a usar es **`input`** (no `change` ni `submit`)
- Debe haber **solo un elemento `<script>`** en el HTML

---

## SOLUCIÓN COMPLETA — script.js

```js
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value;

  // 1. Imágenes (antes que links para no entrar en conflicto con [])
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

  // 2. Links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // 3. Negrita con cursiva anidada: **...*...*** (cierra *** = italic * + bold **)
  text = text.replace(/\*\*(.+?)\*\*\*/g, (match, content) => {
    const processed = content.replace(/\*([^*]+)$/, '<em>$1</em>');
    return `<strong>${processed}</strong>`;
  });

  // 4. Negrita normal (** o __)
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.+?)__/g, '<strong>$1</strong>');

  // 5. Cursiva (* o _) — después de negrita
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  text = text.replace(/_(.+?)_/g, '<em>$1</em>');

  // 6. Encabezados (h3 antes de h2, h2 antes de h1 para evitar coincidencias parciales)
  text = text.replace(/^ *### (.+)$/gm, '<h3>$1</h3>');
  text = text.replace(/^ *## (.+)$/gm, '<h2>$1</h2>');
  text = text.replace(/^ *# (.+)$/gm, '<h1>$1</h1>');

  // 7. Citas (blockquote)
  text = text.replace(/^ *> (.+)$/gm, '<blockquote>$1</blockquote>');

  // 8. Eliminar saltos de línea entre elementos
  text = text.replace(/\n/g, '');

  return text;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();
  htmlOutput.innerText = html;
  preview.innerHTML = html;
});
```

---

## POR QUÉ ESTE ORDEN IMPORTA

**Imágenes antes que links:** `![alt](src)` contiene `[]()` igual que los links — si procesas links primero, puede entrar en conflicto.

**Paso 3 antes de negrita normal:** `> **this is a *quote***` — el patrón `\*\*(.+?)\*\*\*` detecta el cierre triple `***` (donde `*` cierra italic y `**` cierra bold) y procesa la cursiva interna antes de envolver en `<strong>`. Sin este paso, el lazy `\*\*(.+?)\*\*` dejaría un `*` suelto que el regex de cursiva capturaría mal.

**Negrita normal después del caso anidado:** una vez procesado `***`, el regex `\*\*(.+?)\*\*` maneja todos los demás casos de negrita sin riesgo.

**h3 antes de h2 antes de h1:** Si procesas `^# ` primero, `### heading` lo capturaría erróneamente como `<h1>## heading</h1>`.

---

## LOS 51 TESTS — Verificación paso a paso

### Tests 1 — Función existe
**✅ Respuesta:** Debes tener una función llamada convertMarkdown.

---

### Tests 2-4 — Encabezado H1
**Input:** `# title 1`

**✅ Test 2:** convertMarkdown() devuelve `<h1>title 1</h1>`

**✅ Test 3:** `<h1>title 1</h1>` se muestra dentro de `#html-output`

**✅ Test 4:** Un elemento h1 con texto "title 1" se añade como hijo de `#preview`

---

### Test 5 — H1 NO en medio de línea
**Input:** `some text # title 1`

**✅ Respuesta:** convertMarkdown() NO convierte `# title 1` en h1 porque el `#` no está al inicio de línea.

---

### Test 6 — Dos H1 en líneas separadas
**Input:** `# title 1` seguido de `# alternate title` en nueva línea

**✅ Respuesta:** `<h1>title 1</h1><h1>alternate title</h1>`

---

### Tests 7-9 — Encabezado H2
**Input:** `## title 2`

**✅ Test 7:** convertMarkdown() devuelve `<h2>title 2</h2>`

**✅ Test 8:** `<h2>title 2</h2>` se muestra dentro de `#html-output`

**✅ Test 9:** Un elemento h2 con texto "title 2" se añade como hijo de `#preview`

---

### Test 10 — H2 NO en medio de línea
**Input:** `some text ## title 2`

**✅ Respuesta:** No convierte `## title 2` en h2.

---

### Test 11 — Dos H2 en líneas separadas
**Input:** `## title 2` seguido de `## title 2 alt`

**✅ Respuesta:** `<h2>title 2</h2><h2>title 2 alt</h2>`

---

### Tests 12-14 — Encabezado H3
**Input:** `### title 3`

**✅ Test 12:** convertMarkdown() devuelve `<h3>title 3</h3>`

**✅ Test 13:** `<h3>title 3</h3>` se muestra dentro de `#html-output`

**✅ Test 14:** Un elemento h3 con texto "title 3" se añade como hijo de `#preview`

---

### Test 15 — H3 NO en medio de línea
**Input:** `some text ### title 3`

**✅ Respuesta:** No convierte en h3.

---

### Test 16 — Dos H3 en líneas separadas
**Input:** `### title 3` seguido de `### third title`

**✅ Respuesta:** `<h3>title 3</h3><h3>third title</h3>`

---

### Tests 17-20 — Negrita con `**`
**Input:** `**this is bold**`

**✅ Test 17:** convertMarkdown() devuelve `<strong>this is bold</strong>`

**✅ Test 18:** `<strong>this is bold</strong>` se muestra dentro de `#html-output`

**✅ Test 19:** Un elemento strong con texto "this is bold" se añade como hijo de `#preview`

**✅ Test 20:** `**this is bold**` seguido de `**this is also bold**` → `<strong>this is bold</strong><strong>this is also bold</strong>`

---

### Tests 21-23 — Negrita con `__`
**Input:** `__this is bold__`

**✅ Test 21:** `<strong>this is bold</strong>` se muestra dentro de `#html-output`

**✅ Test 22:** Un elemento strong con texto "this is bold" se añade como hijo de `#preview`

**✅ Test 23:** `__this is bold__` seguido de `__this is also bold__` → `<strong>this is bold</strong><strong>this is also bold</strong>`

---

### Tests 24-27 — Cursiva con `*`
**Input:** `*this is italic*`

**✅ Test 24:** convertMarkdown() devuelve `<em>this is italic</em>`

**✅ Test 25:** `<em>this is italic</em>` se muestra dentro de `#html-output`

**✅ Test 26:** Un elemento em con texto "this is italic" se añade como hijo de `#preview`

**✅ Test 27:** `*this is italic*` seguido de `*this is also italic*` → `<em>this is italic</em><em>this is also italic</em>`

---

### Tests 28-31 — Cursiva con `_`
**Input:** `_this is italic_`

**✅ Test 28:** convertMarkdown() devuelve `<em>this is italic</em>`

**✅ Test 29:** `<em>this is italic</em>` se muestra dentro de `#html-output`

**✅ Test 30:** Un elemento em con texto "this is italic" se añade como hijo de `#preview`

**✅ Test 31:** `_this is italic_` seguido de `_this is also italic_` → `<em>this is italic</em><em>this is also italic</em>`

---

### Tests 32-34 — Negrita dentro de encabezado H1
**Input:** `# **title 1**` o `# __title 1__`

**✅ Test 32:** convertMarkdown() devuelve `<h1><strong>title 1</strong></h1>`

**✅ Test 33:** `<h1><strong>title 1</strong></h1>` se muestra dentro de `#html-output`

**✅ Test 34:** Se establece el innerHTML de `#preview` a `<h1><strong>title 1</strong></h1>`

---

### Tests 35-38 — Imágenes
**Input:** `![alt-text](image-source)`

**✅ Test 35:** convertMarkdown() devuelve `<img alt="alt-text" src="image-source">`

**✅ Test 36:** `<img alt="alt-text" src="image-source">` se muestra dentro de `#html-output`

**✅ Test 37:** `<img alt="alt-text" src="image-source">` se añade como hijo de `#preview`

**✅ Test 38:** `![alt-text](image-source)` seguido de `![alt-text-2](image-source-2)` → `<img alt="alt-text" src="image-source"><img alt="alt-text-2" src="image-source-2">`

---

### Tests 39-42 — Links
**Input:** `[link text](URL)`

**✅ Test 39:** convertMarkdown() devuelve `<a href="URL">link text</a>`

**✅ Test 40:** `<a href="URL">link text</a>` se muestra dentro de `#html-output`

**✅ Test 41:** `<a href="URL">link text</a>` se añade como hijo de `#preview`

**✅ Test 42:** `[link text](URL)` seguido de `[link text 2](URL2)` → `<a href="URL">link text</a><a href="URL2">link text 2</a>`

---

### Tests 43-46 — Citas (blockquote)
**Input:** `> this is a quote`

**✅ Test 43:** convertMarkdown() devuelve `<blockquote>this is a quote</blockquote>`

**✅ Test 44:** `<blockquote>this is a quote</blockquote>` se muestra dentro de `#html-output`

**✅ Test 45:** `<blockquote>this is a quote</blockquote>` se añade como hijo de `#preview`

**✅ Test 46:** `> this is a quote` seguido de `> this is another quote` → `<blockquote>this is a quote</blockquote><blockquote>this is another quote</blockquote>`

---

### Test 47 — Cita NO en medio de línea
**Input:** `some text > not a quote anymore`

**✅ Respuesta:** No convierte `> not a quote anymore` en blockquote porque el `>` no está al inicio de línea.

---

### Tests 48-50 — Cita con negrita e cursiva anidadas
**Input:** `> **this is a *quote***`

**✅ Test 48:** convertMarkdown() devuelve `<blockquote><strong>this is a <em>quote</em></strong></blockquote>`

**✅ Test 49:** `<blockquote><strong>this is a <em>quote</em></strong></blockquote>` se muestra dentro de `#html-output`

**✅ Test 50:** Se establece el innerHTML de `#preview` a `<blockquote><strong>this is a <em>quote</em></strong></blockquote>`

> **¿Por qué funciona?** El paso 3 detecta `\*\*(.+?)\*\*\*` (cierre con triple `***`). Captura `this is a *quote` y aplica `\*([^*]+)$` al contenido: encuentra `*quote` al final → `this is a <em>quote</em>`. Envuelve en `<strong>` → `<strong>this is a <em>quote</em></strong>`. Finalmente el blockquote envuelve todo.

---

### Test 51 — Solo un elemento `<script>`
**✅ Respuesta:** Debes tener solo un elemento `<script>` en tu HTML. Enlaza el script.js así:

```html
<script src="script.js"></script>
```

---

## RESUMEN DE CONCEPTOS CLAVE

| Concepto | Uso en este proyecto |
|---|---|
| `document.getElementById()` | Obtener los 3 elementos del DOM |
| `addEventListener("input", fn)` | Detectar cambios en tiempo real |
| `String.replace(regex, replacement)` | Convertir Markdown a HTML |
| `/^ *# (.+)$/gm` | `^` al inicio de línea, `m` multiline, `g` todas las coincidencias |
| `/\*\*(.+?)\*\*/g` | Lazy `.+?` para negrita anidada |
| `element.innerText = html` | Muestra el HTML como texto plano en `#html-output` |
| `element.innerHTML = html` | Renderiza el HTML en `#preview` |

---

*Fin de la guía — Módulo: Convertidor de Markdown a HTML (Proyecto de Certificación #13)*
