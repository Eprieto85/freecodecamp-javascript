# Guía de Respuestas: Fechas en JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Cómo funciona el objeto Date de JavaScript y cuáles son algunos métodos comunes?

**Pregunta 1:** ¿Qué devuelve el método Date.now()?

**✅ Respuesta:** El número de milisegundos desde el 1 de enero de 1970, 00:00:00 UTC.

---

**Pregunta 2:** Si usas el método getMonth y te devuelve 4, ¿qué mes está siendo representado?

**✅ Respuesta:** May

---

**Pregunta 3:** ¿Cómo crearías un objeto Date para el 4 de julio de 1776 a las 12:00:00 PM?

**✅ Respuesta:** const specificDate = new Date("July 4, 1776 12:00:00")

---

### Lectura 2: ¿Cuáles son las diferentes formas de formatear fechas?

**Pregunta 1:** ¿Qué método usarías para formatear una fecha en el formato ISO 8601?

**✅ Respuesta:** toISOString()

---

**Pregunta 2:** ¿Qué método formatea la fecha según la configuración regional del usuario?

**✅ Respuesta:** toLocaleDateString()

---

**Pregunta 3:** ¿Qué parámetros opcionales puedes proporcionar al método toLocaleDateString()?

**✅ Respuesta:** locales y options.

---

---

## LAB — Laboratorio: Programa de Conversión de Fechas

**Objetivo:** Crear un programa que convierta la fecha actual a dos formatos diferentes.

**Requisitos:**
1. Variable `currentDate` con `new Date()`
2. Variable `currentDateFormat` con el string `Current Date and Time: [fecha actual]`
3. Registrar `currentDateFormat` en consola
4. Función `formatDateMMDDYYYY(date)` que retorna `Formatted Date (MM/DD/YYYY): M/D/YYYY`
5. Función `formatDateLong(date)` que retorna `Formatted Date (Month Day, Year): Mes Día, Año` (usar locale `en-US`)

**Solución:**

```js
const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

function formatDateLong(date) {
  const longDateFormat = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return `Formatted Date (Month Day, Year): ${longDateFormat}`;
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
```

---

## REVISIÓN — Resumen del módulo Fechas

| Concepto | Descripción |
|---|---|
| `new Date()` | Crea objeto con fecha/hora actual |
| `new Date("July 4, 1776")` | Crea fecha específica |
| `Date.now()` | Milisegundos desde el 1 ene 1970 |
| `getFullYear()` | Retorna el año (4 dígitos) |
| `getMonth()` | Retorna el mes (0=enero, 11=diciembre) |
| `getDate()` | Retorna el día del mes (1-31) |
| `toISOString()` | Formato ISO 8601: `YYYY-MM-DDTHH:mm:ss.sssZ` |
| `toLocaleDateString()` | Formato según configuración regional |
| `toLocaleDateString('en-US', options)` | Formato localizado con opciones |
| `toString()` | Representación en texto completo |

---

## LABS — Soluciones

---

### Lab: Date Conversion

```js
function getFormattedDate(dateStr) {
  const date = new Date(dateStr);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const pad = (n) => String(n).padStart(2, "0");

  return `${pad(month)}/${pad(day)}/${year}`;
}
```

> Convierte una cadena de fecha (formato ISO `YYYY-MM-DD`) en formato `MM/DD/YYYY`. Usa métodos UTC del objeto `Date` para evitar problemas de zona horaria, y `padStart` para garantizar dos dígitos en mes y día.

---

## QUIZ — Cuestionario de Fechas JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Trabajar tanto con fechas como con horas. |
| 2 | `new Date()` |
| 3 | Devuelve la hora actual en milisegundos desde el 1 de enero de 1970. |
| 4 | `getFullYear()` |
| 5 | `getMonth()` |
| 6 | `toString()` |
| 7 | `"2022"` |
| 8 | Un locale francés. |
| 9 | `15` |
| 10 | Un formato de cadena ISO-8601. |
| 11 | AAAA-MM-DDTHH:mm:ss.sssZ |
| 12 | Julio |
| 13 | `.toLocaleDateString()` |
| 14 | El locale del sistema del usuario. |
| 15 | La fecha y hora actual en función del reloj del sistema de su computadora. |
| 16 | `2003` |
| 17 | `NaN` |
| 18 | `9` |
| 19 | `console.log(d.getFullYear())` |
| 20 | `console.log(d.toISOString())` |

---

*Fin de la guía — Módulo: Fechas en JavaScript*
