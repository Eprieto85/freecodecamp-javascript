# Guía de Respuestas: Crea una Batería Electrónica
## freeCodeCamp JavaScript v9 — Proyecto de Certificación

---

## DESCRIPCIÓN DEL PROYECTO

**Tipo:** Laboratorio / Proyecto de certificación  
**Título:** Crea una batería electrónica (Drum Machine)  
**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-drum-machine/build-drum-machine`

Este proyecto usa **HTML + CSS + JavaScript** completos escritos por ti. No hay archivos provistos.

---

## ESTRUCTURA HTML REQUERIDA

La plataforma verifica IDs y clases específicas. Debes tener exactamente esta estructura:

```
#drum-machine
  ├── #pad-bank
  │     ├── button.drum-pad  (id="Heater-1", innerText="Q")
  │     │     └── audio.clip  (id="Q", src="...")
  │     ├── button.drum-pad  (id="Heater-2", innerText="W")
  │     │     └── audio.clip  (id="W", src="...")
  │     └── ... (9 pads en total: Q W E A S D Z X C)
  └── p#display
```

---

## AUDIOS DISPONIBLES (CDN de freeCodeCamp)

Base URL: `https://cdn.freecodecamp.org/curriculum/drum/`

| Tecla | ID del pad | Nombre | Archivo |
|---|---|---|---|
| Q | Heater-1 | Heater 1 | Heater-1.mp3 |
| W | Heater-2 | Heater 2 | Heater-2.mp3 |
| E | Heater-3 | Heater 3 | Heater-3.mp3 |
| A | Heater-4 | Heater 4 | Heater-4_1.mp3 |
| S | Clap | Clap | Heater-6.mp3 |
| D | Open-HH | Open-HH | Dsc_Oh.mp3 |
| Z | Kick-n-Hat | Kick-n'-Hat | Kick_n_Hat.mp3 |
| X | Kick | Kick | RP4_KICK_1.mp3 |
| C | Closed-HH | Closed-HH | Cev_H2.mp3 |

---

## SOLUCIÓN COMPLETA

### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Drum Machine</title>
  <link rel="stylesheet" href="styles.css"/>
</head>
<body>
  <div id="drum-machine">
    <div id="pad-bank">
      <button class="drum-pad" id="Heater-1">Q
        <audio class="clip" id="Q" src="https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3"></audio>
      </button>
      <button class="drum-pad" id="Heater-2">W
        <audio class="clip" id="W" src="https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3"></audio>
      </button>
      <button class="drum-pad" id="Heater-3">E
        <audio class="clip" id="E" src="https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3"></audio>
      </button>
      <button class="drum-pad" id="Heater-4">A
        <audio class="clip" id="A" src="https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3"></audio>
      </button>
      <button class="drum-pad" id="Clap">S
        <audio class="clip" id="S" src="https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3"></audio>
      </button>
      <button class="drum-pad" id="Open-HH">D
        <audio class="clip" id="D" src="https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3"></audio>
      </button>
      <button class="drum-pad" id="Kick-n-Hat">Z
        <audio class="clip" id="Z" src="https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3"></audio>
      </button>
      <button class="drum-pad" id="Kick">X
        <audio class="clip" id="X" src="https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3"></audio>
      </button>
      <button class="drum-pad" id="Closed-HH">C
        <audio class="clip" id="C" src="https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3"></audio>
      </button>
    </div>
    <p id="display"></p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

---

### script.js

```js
const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

// Mapa de tecla → nombre del sonido para mostrar en #display
const padNames = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH"
};

function playPad(key) {
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    display.innerText = padNames[key];
  }
}

// Clic en cada pad
pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.innerText.trim();
    playPad(key);
  });
});

// Teclas del teclado
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (padNames[key]) {
    playPad(key);
    // Efecto visual
    const pad = document.getElementById(document.querySelector(`#${key}`).parentElement.id);
    pad.classList.add("active");
    setTimeout(() => pad.classList.remove("active"), 100);
  }
});
```

---

### styles.css (opcional, puedes personalizar)

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background: #1a1a2e;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}
#drum-machine {
  background: #16213e;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
}
#pad-bank {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 1.5rem;
}
.drum-pad {
  background: #0f3460;
  border: 2px solid #533483;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  height: 70px;
  width: 70px;
  transition: all 0.1s;
}
.drum-pad:hover, .drum-pad.active {
  background: #533483;
  transform: scale(0.95);
}
#display {
  background: #0f3460;
  border-radius: 6px;
  color: #e94560;
  font-size: 1rem;
  font-weight: 600;
  min-height: 2rem;
  padding: 0.5rem;
}
```

---

## LOS 10 TESTS — Verificación

### Test 1 — Div #drum-machine existe
**✅ Respuesta:** Debes tener `<div id="drum-machine">` que contenga todos los demás elementos.

---

### Test 2 — Div #pad-bank dentro de #drum-machine
**✅ Respuesta:** Dentro de `#drum-machine` debe existir `<div id="pad-bank">`.

---

### Test 3 — Párrafo #display dentro de #drum-machine
**✅ Respuesta:** Dentro de `#drum-machine` debe existir `<p id="display">`.

---

### Test 4 — Nueve .drum-pad dentro de #pad-bank
**✅ Respuesta:** `#pad-bank` debe contener exactamente 9 elementos con la clase `drum-pad`.

---

### Test 5 — Cada .drum-pad debe ser un `<button>`
**✅ Respuesta:** Usa `<button class="drum-pad">` (no `<div>` ni otro elemento).

---

### Test 6 — innerText de cada pad: Q W E A S D Z X C (en ese orden)
**✅ Respuesta:** El texto visible de cada botón debe ser exactamente `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C` en ese orden.

---

### Test 7 — Cada .drum-pad tiene audio.clip con src e id correcto
**✅ Respuesta:** Cada `button.drum-pad` debe contener un `<audio class="clip" id="[LETRA]" src="...">` donde el id del audio coincide con el innerText del botón padre.

Ejemplo: el pad con `Q` tiene `<audio class="clip" id="Q" src="...Heater-1.mp3">`.

---

### Test 8 — Clic en .drum-pad reproduce el audio
**✅ Respuesta:** El event listener de `click` llama a `audio.play()` usando `audio.currentTime = 0` primero para permitir reproducción repetida.

---

### Test 9 — Teclas Q W E A S D Z X C reproducen sonido
**✅ Respuesta:** El event listener de `keydown` detecta `e.key.toUpperCase()` y llama a `playPad(key)`.

---

### Test 10 — Al activar un pad, #display muestra nombre único del clip
**✅ Respuesta:** Al reproducir, `display.innerText = padNames[key]` muestra el nombre del sonido (ej: "Heater 1", "Clap", "Kick"). Cada nombre es único.

---

## CONCEPTOS CLAVE DE ESTE PROYECTO

| Concepto | Uso |
|---|---|
| `audio.currentTime = 0` | Reinicia el audio para permitir repetición rápida |
| `audio.play()` | Reproduce el audio |
| `e.key.toUpperCase()` | Detecta la tecla presionada en mayúscula |
| `document.getElementById(key)` | Busca el elemento `<audio>` por su id (la letra) |
| `querySelectorAll(".drum-pad")` | Selecciona todos los botones del pad |
| `classList.add/remove("active")` | Efecto visual al presionar tecla |

---

*Fin de la guía — Módulo: Crea una batería electrónica (Proyecto de Certificación #17)*
