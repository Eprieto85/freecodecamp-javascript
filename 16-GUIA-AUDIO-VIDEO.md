# Guía de Respuestas: Audio y Video con JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Cómo funciona el constructor Audio? ¿Cuáles son algunos métodos comunes?

**Pregunta 1:** ¿Qué devuelve el constructor Audio cuando se llama con la palabra clave new?

**✅ Respuesta:** Un HTMLAudioElement.

---

**Pregunta 2:** ¿Cómo puedes establecer la fuente de un archivo de audio para un objeto Audio?

**✅ Respuesta:** Ya sea pasando una URL al constructor o estableciendo la propiedad src.

---

**Pregunta 3:** ¿Qué método debes usar para pausar la reproducción de audio y reiniciar la pista desde el principio?

**✅ Respuesta:** Llama al método pause(), y luego establece la propiedad currentTime.

---

### Lectura 2: ¿Cuáles son los diferentes tipos de formatos de video y audio?

**Pregunta 1:** ¿Qué significa MIME en el contexto de los tipos de archivo?

**✅ Respuesta:** Extensiones Multipropósito de Correo de Internet.

---

**Pregunta 2:** ¿Cuál es el propósito principal de un tipo MIME?

**✅ Respuesta:** Para estandarizar la forma en que los tipos de archivo se indican programáticamente.

---

**Pregunta 3:** ¿Cuál es el tipo MIME para un archivo MP3?

**✅ Respuesta:** audio/mpeg

---

### Lectura 3: ¿Qué son los codecs y cómo funcionan?

**Pregunta 1:** ¿Qué significa el término "codec" en el contexto de multimedia?

**✅ Respuesta:** Codificador/Decodificador

---

**Pregunta 2:** ¿Cómo se especifican los codecs como parte del tipo MIME?

**✅ Respuesta:** Añadiendo un punto y coma después del tipo de medio, seguido de codecs= y el nombre del codec.

---

**Pregunta 3:** ¿Cuál es el propósito del método MediaSource.isTypeSupported()?

**✅ Respuesta:** Para verificar si un tipo MIME y codec específicos son probablemente compatibles en el entorno actual.

---

### Lectura 4: ¿Qué es la API de HTMLMediaElement y cómo funciona?

**Pregunta 1:** ¿Qué hace el método addTextTrack()?

**✅ Respuesta:** Permite especificar una pista de texto para asociar con el elemento multimedia.

---

**Pregunta 2:** ¿Qué evento se dispara cuando el medio se puede reproducir en su totalidad sin interrupciones?

**✅ Respuesta:** canplaythrough

---

**Pregunta 3:** ¿Qué evento se dispara cuando la reproducción se pausa automáticamente debido a la carga de datos?

**✅ Respuesta:** waiting

---

### Lectura 5: ¿Cómo puedes trabajar con las transmisiones de medios para capturar video y audio de un dispositivo local?

**Pregunta 1:** ¿Qué método se utiliza para acceder a los dispositivos de medios del usuario?

**✅ Respuesta:** getUserMedia()

---

**Pregunta 2:** En el objeto de restricciones para video, ¿qué representa la propiedad ideal?

**✅ Respuesta:** La resolución preferida.

---

**Pregunta 3:** ¿Qué devuelve el método getUserMedia()?

**✅ Respuesta:** Una Promesa.

---

### Lectura 6: ¿Cuáles son algunos otros ejemplos de APIs de video y audio?

**Pregunta 1:** ¿Cuál es la función principal de la API de Captura de Pantalla?

**✅ Respuesta:** Para grabar la pantalla de un usuario.

---

**Pregunta 2:** ¿Qué método se utiliza para acceder a la API de Captura de Pantalla?

**✅ Respuesta:** getDisplayMedia()

---

**Pregunta 3:** ¿Qué API te permite pasar el flujo de la cámara web de un usuario directamente a la propiedad srcObject de un elemento video?

**✅ Respuesta:** Extensiones de Fuente de Medios API

---

## TALLER — workshop-music-player (46 pasos)

Construyes un reproductor de música con controles de play/pause, navegación entre canciones y resaltado de la canción activa en la lista.

> **Archivos:** index.html (provisto) + styles.css (provisto) + script.js (tú construyes)

---

**index.html (provisto — no modificar):**
html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Player</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="player-container">
      <div id="player-song-background-image"></div>
      <p class="player-song-title">Song Title</p>
      <p class="player-song-artist">Song Artist</p>
      <div class="player-controls">
        <button class="previous" id="previous" aria-label="Previous">
          &#9664;&#9664;
        </button>
        <button class="play" id="play" aria-label="Play">
          &#9654;
        </button>
        <button class="pause" id="pause" aria-label="Pause">
          &#9646;&#9646;
        </button>
        <button class="next" id="next" aria-label="Next">
          &#9654;&#9654;
        </button>
      </div>
      <div class="playlist" id="playlist-songs"></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>


**styles.css (provisto — no modificar):**
css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary: #110f0e;
  --secondary: #feac45;
  --secondary-light: #ffd27d;
}

body {
  background-color: var(--primary);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2rem;
}

.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: #1a1a1a;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 420px;
}

#player-song-background-image {
  width: 180px;
  height: 180px;
  background: var(--secondary);
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.player-song-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--secondary-light);
  text-align: center;
}

.player-song-artist {
  font-size: 0.9rem;
  color: #aaa;
  text-align: center;
  margin-bottom: 0.5rem;
}

.player-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.player-controls button {
  background: var(--secondary);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1rem;
  cursor: pointer;
  color: var(--primary);
  font-weight: 700;
  transition: background 0.2s;
}

.player-controls button:hover {
  background: var(--secondary-light);
}

.playlist {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-height: 260px;
  overflow-y: auto;
}

.playlist-song {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.playlist-song:hover {
  background: rgba(254, 172, 69, 0.15);
}

.playlist-song.playing {
  background: rgba(254, 172, 69, 0.25);
  border-left: 3px solid var(--secondary);
}

.playlist-song-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.playlist-song-title {
  font-size: 0.88rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.playlist-song-artist {
  font-size: 0.75rem;
  color: #aaa;
}

.playlist-song-duration {
  font-size: 0.78rem;
  color: #aaa;
  white-space: nowrap;
}

button.playlist-song-delete {
  background: transparent;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

button.playlist-song-delete:hover {
  background: rgba(231, 76, 60, 0.15);
}


---

### Paso 1 — Seleccionar elementos del DOM (play, pause, playlist)

js
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");


---

### Paso 2 — Seleccionar botones next y previous

js
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");


---

### Paso 3 — Crear array vacío allSongs

js
const allSongs = [];


---

### Paso 4 — Agregar la primera canción al array

js
const allSongs = [
  { id: 0, title: "Scratching The Surface", artist: "Quincy Larson", duration: "4:25", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3" },
];


---

### Pasos 5–6 — Agregar más canciones (una por paso)

Cada paso agrega un objeto canción más al array.

---

### Paso 7 — Array completo (10 canciones) + crear objeto Audio

js
const allSongs = [
  { id: 0, title: "Scratching The Surface", artist: "Quincy Larson", duration: "4:25", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3" },
  { id: 1, title: "Can't Stay Down", artist: "Quincy Larson", duration: "4:15", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3" },
  { id: 2, title: "Still Learning", artist: "Quincy Larson", duration: "3:51", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3" },
  { id: 3, title: "Cruising for a Musing", artist: "Quincy Larson", duration: "3:34", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3" },
  { id: 4, title: "Never Not Favored", artist: "Quincy Larson", duration: "3:35", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3" },
  { id: 5, title: "From the Ground Up", artist: "Quincy Larson", duration: "3:12", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3" },
  { id: 6, title: "Walking on Air", artist: "Quincy Larson", duration: "3:25", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3" },
  { id: 7, title: "Can't Stop Me. Can't Even Slow Me Down.", artist: "Quincy Larson", duration: "3:52", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3" },
  { id: 8, title: "The Surest Way Out is Through", artist: "Quincy Larson", duration: "3:10", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3" },
  { id: 9, title: "Chasing That Feeling", artist: "Quincy Larson", duration: "2:43", src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3" },
];

const audio = new Audio();


---

### Paso 8 — Crear objeto userData vacío

js
const userData = {};


---

### Paso 9 — Agregar propiedades a userData

js
const userData = {
  songs: allSongs,
  currentSong: null,
  songCurrentTime: 0,
};


---

### Paso 10 — Crear función playSong vacía

js
const playSong = id => {};


---

### Paso 11 — Encontrar canción con find()

js
const playSong = id => {
  const song = userData.songs.find((song) => song.id === id);
};


---

### Paso 12 — Asignar src y title al objeto audio

js
const playSong = id => {
  const song = userData.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
};


---

### Paso 13 — Agregar if para verificar si no hay canción actual

Si userData.currentSong es null, reiniciar currentTime a 0.

js
  if (userData.currentSong === null) {
    audio.currentTime = 0;
  }


---

### Paso 14 — Agregar else para reanudar desde la posición guardada

js
  if (userData.currentSong === null) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }


---

### Paso 15 — Completar playSong: actualizar estado y reproducir

js
const playSong = id => {
  const song = userData.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
  if (userData.currentSong === null) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");
  audio.play();
};


---

### Paso 16 — Agregar listener al botón play (primera versión)

js
playButton.addEventListener("click", () => { playSong(0); });


---

### Paso 17 — Reemplazar con lógica: si no hay canción, reproducir la primera

js
playButton.addEventListener("click", () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
  }
});


---

### Paso 18 — Agregar else: reproducir la canción actual

js
playButton.addEventListener("click", () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
  } else {
    playSong(userData.currentSong.id);
  }
});


---

### Paso 19 — Seleccionar canciones del DOM con querySelectorAll y recorrerlas

js
const songs = document.querySelectorAll(".playlist-song");
songs.forEach((song) => {
  // editable
});


---

### Paso 20 — Completar forEach: extraer ID y agregar listener de click

js
const songs = document.querySelectorAll(".playlist-song");
songs.forEach((song) => {
  const id = song.getAttribute("id").slice(5);
  const songBtn = song.querySelector("button");
  songBtn.addEventListener("click", () => {
    playSong(Number(id));
  });
});


---

### Paso 21 — Crear función pauseSong: guardar tiempo actual

js
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
};


---

### Paso 22 — Completar pauseSong: quitar clase y pausar

js
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
};


---

### Paso 23 — Agregar listener al botón pause

js
pauseButton.addEventListener("click", pauseSong);


---

### Paso 24 — Crear getCurrentSongIndex con indexOf

js
const getCurrentSongIndex = () => userData.songs.indexOf(userData.currentSong);


---

### Paso 25 — Crear getNextSong

js
const getNextSong = () => userData.songs[getCurrentSongIndex() + 1];


---

### Paso 26 — Crear playNextSong con guard para estado vacío

js
const playNextSong = () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
    return;
  }
};


---

### Paso 27 — Completar playNextSong: avanzar o reiniciar playlist

js
const playNextSong = () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
    return;
  }
  const nextSong = getNextSong();
  if (nextSong) {
    playSong(nextSong.id);
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
  }
};


---

### Paso 28 — Agregar listener al botón next

js
nextButton.addEventListener("click", playNextSong);


---

### Paso 29 — Crear getPreviousSong

js
const getPreviousSong = () => userData.songs[getCurrentSongIndex() - 1];


---

### Paso 30 — Crear playPreviousSong

js
const playPreviousSong = () => {
  const previousSong = getPreviousSong();
  if (previousSong) {
    playSong(previousSong.id);
  } else {
    playSong(userData.songs[0].id);
  }
};


---

### Paso 31 — Agregar listener al botón previous

js
previousButton.addEventListener("click", playPreviousSong);


---

### Paso 32 — Agregar parámetro start = true a playSong

Esto permite controlar si la canción empieza desde el principio o desde donde se pausó.

js
const playSong = (id, start = true) => { ... };


---

### Paso 33 — Agregar| start a la condición del if

js
  if (userData.currentSong === null| start) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }


---

### Paso 34 — Pasar false al reanudar la canción actual

Cuando el usuario pulsa play y ya hay canción, se reanuda desde donde estaba.

js
playButton.addEventListener("click", () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
  } else {
    playSong(userData.currentSong.id, false);
  }
});


---

### Paso 35 — Agregar guard a playPreviousSong para estado sin canción

js
const playPreviousSong = () => {
  if (userData.currentSong === null) return;
  const previousSong = getPreviousSong();
  if (previousSong) {
    playSong(previousSong.id);
  } else {
    playSong(userData.songs[0].id);
  }
};


---

### Paso 36 — Crear highlightCurrentSong: quitar aria-current anterior

js
const highlightCurrentSong = () => {
  const previousCurrentSong = document.querySelector('.playlist-song[aria-current="true"]');
  previousCurrentSong?.removeAttribute("aria-current");
};


---

### Paso 37 — Agregar songToHighlight con getElementById y optional chaining

js
const highlightCurrentSong = () => {
  const previousCurrentSong = document.querySelector('.playlist-song[aria-current="true"]');
  previousCurrentSong?.removeAttribute("aria-current");
  const songToHighlight = document.getElementById(song-${userData.currentSong?.id});
};


---

### Paso 38 — Marcar la canción activa con setAttribute

js
const highlightCurrentSong = () => {
  const previousCurrentSong = document.querySelector('.playlist-song[aria-current="true"]');
  previousCurrentSong?.removeAttribute("aria-current");
  const songToHighlight = document.getElementById(song-${userData.currentSong?.id});
  songToHighlight?.setAttribute("aria-current", "true");
};


---

### Paso 39 — Llamar highlightCurrentSong() dentro de playSong

js
const playSong = (id, start = true) => {
  ...
  userData.currentSong = song;
  playButton.classList.add("playing");
  highlightCurrentSong();
  audio.play();
};


---

### Paso 40 — Agregar variables para el display del reproductor

js
const playingSong = document.getElementById("player-song-title");
const songArtist = document.getElementById("player-song-artist");


---

### Paso 41 — Crear función setPlayerDisplay

Muestra el título y artista de la canción actual en el reproductor.

js
const setPlayerDisplay = () => {
  const currentTitle = userData.currentSong?.title;
  const currentArtist = userData.currentSong?.artist;
  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};


---

### Paso 42 — Llamar setPlayerDisplay() dentro de playSong

js
const playSong = (id, start = true) => {
  ...
  userData.currentSong = song;
  playButton.classList.add("playing");
  setPlayerDisplay();
  highlightCurrentSong();
  audio.play();
};


---

### Paso 43 — Crear setPlayButtonAccessibleText para accesibilidad

js
const setPlayButtonAccessibleText = () => {
  const song = userData.currentSong;
  playButton.setAttribute("aria-label", userData.currentSong ? Play ${song.title} : "Play");
};


---

### Paso 44 — Llamar setPlayButtonAccessibleText() dentro de playSong

js
const playSong = (id, start = true) => {
  ...
  setPlayerDisplay();
  highlightCurrentSong();
  setPlayButtonAccessibleText();
  audio.play();
};


---

### Paso 45 — Actualizar playNextSong: limpiar display al terminar la playlist

Cuando no hay siguiente canción, llamar las tres funciones de actualización antes de pausar.

js
const playNextSong = () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
    return;
  }
  const nextSong = getNextSong();
  if (nextSong) {
    playSong(nextSong.id);
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
    pauseSong();
  }
};


---

### Paso 46 — Reproducir automáticamente la siguiente canción al terminar

js
audio.addEventListener("ended", playNextSong);


El reproductor ya avanza solo cuando cada canción llega a su fin.

---

## QUIZ — Cuestionario de Audio y Video de JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # Respuesta correcta
|---|---|
| 1 Crear un nuevo elemento audio.
| 2 play()
| 3 pause() detiene la reproducción pero mantiene la posición actual mientras que play() inicia la reproducción.
| 4 MP3
| 5 Especificar múltiples fuentes de medios para diferentes formatos.
| 6 audio/mp4 y video/mp4
| 7 Convierte medios entre formatos analógicos y digitales.
| 8 API de Audio Web.
| 9 Acceder a la cámara del usuario y/o al micrófono.
| 10 currentTime
| 11 Configura el audio para que se repita indefinidamente.
| 12 Multipurpose Internet Mail Extensions
| 13 Determinar si es probable que un navegador pueda reproducir tu formato de audio específico.
| 14 stopped
| 15 waiting
| 16 AudioContext
| 17 Te permite pasar directamente la transmisión de la cámara web de un usuario a un elemento de video
| 18 Cuando se ha alcanzado el final del medio.
| 19 Llamando al método getDisplayMedia().
| 20 Windows Media Player

---

*Fin de la guía — Módulo: Audio y Video con JavaScript*
