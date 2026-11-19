# Guía de Respuestas: Aplicación del clima
## freeCodeCamp JavaScript v9

---

## LABORATORIO — Construir una aplicación del clima

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/build-a-weather-app`

Construye una aplicación que muestre información meteorológica de diferentes ciudades usando la API del clima de freeCodeCamp. Se proporcionan el HTML y el CSS; debes escribir el JavaScript.

---

### Formato de datos de la API

La API retorna JSON con la siguiente forma:

```json
{
  "weather": [
    {
      "main": "Clear",
      "description": "clear sky",
      "icon": "https://cdn.freecodecamp.org/weather-icons/01n.png"
    }
  ],
  "main": {
    "temp": 2.62,
    "feels_like": 0.84,
    "temp_min": 1.72,
    "temp_max": 3.49,
    "pressure": 1010,
    "humidity": 81
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.79,
    "deg": 285,
    "gust": 3.13
  },
  "name": "London"
}
```

Endpoint: `https://weather-proxy.freecodecamp.rocks/api/city/<CITY>` (sistema métrico)

---

### Requisitos — User Stories

1. Debe haber un elemento `button` con `id="get-weather-btn"`.
2. Debe haber un elemento `select` con siete opciones: primera opción vacía, luego `New York`, `Los Angeles`, `Chicago`, `Paris`, `Tokyo`, `London` (valores en minúsculas).
3. Si no se selecciona ciudad, presionar el botón no hace nada.
4. Si se selecciona ciudad, deben aparecer elementos con los siguientes IDs:
   - `weather-icon` — imagen del icono del clima
   - `main-temperature` — temperatura principal
   - `feels-like` — sensación térmica
   - `humidity` — humedad
   - `wind` — velocidad del viento
   - `wind-gust` — velocidad de las ráfagas
   - `weather-main` — tipo de clima principal
   - `location` — nombre de la ciudad
5. Función async `getWeather(city)` que hace fetch a la API y retorna los datos. Maneja errores con `try...catch` y los registra en consola.
6. Función async `showWeather(city)` que llama a `getWeather` y actualiza el DOM. Si `getWeather` falla, muestra `alert('Something went wrong, please try again later')` sin cambiar el clima mostrado. Si algún valor es `undefined`, muestra `N/A`.

---

### ✅ Solución — script.js

```js
const getWeatherBtn = document.getElementById('get-weather-btn');
const selectEl = document.getElementById('location-selector');

const weatherInfoEl = document.getElementById('weather-info');
const iconEl = document.getElementById('weather-icon');
const tempEl = document.getElementById('main-temperature');
const feelEl = document.getElementById('feels-like');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const gustEl = document.getElementById('wind-gust');
const mainEl = document.getElementById('weather-main');
const locationEl = document.getElementById('location');
const arrowEl = document.getElementById('compass-arrow');

getWeatherBtn.addEventListener(
  'click',
  () => selectEl.value && showWeather(selectEl.value)
);

async function showWeather(city) {
  const json = await getWeather(city);
  if (!json) {
    alert('Something went wrong, please try again later');
    return;
  }

  const {
    weather,
    main: { temp, feels_like, humidity },
    wind: { speed, gust, deg = 0 },
    name
  } = json;

  const { main, icon } = weather[0];

  weatherInfoEl.style.display = 'block';

  iconEl.src = icon || '';
  tempEl.innerHTML = temp !== undefined ? `${temp}&deg; C` : 'N/A';
  feelEl.innerHTML = `Feels Like: ${feels_like !== undefined ? `${feels_like}&deg; C` : 'N/A'}`;
  humidityEl.innerHTML = `Humidity: ${humidity !== undefined ? `${humidity}%` : 'N/A'}`;
  windEl.innerHTML = `Wind: ${speed !== undefined ? `${speed} m/s` : 'N/A'}`;
  gustEl.innerHTML = `Gusts: ${gust !== undefined ? `${gust} m/s` : 'N/A'}`;

  mainEl.innerHTML = main || 'N/A';
  locationEl.innerHTML = name || 'N/A';
  arrowEl.style.transform = `rotate(${deg}deg)`;
}

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
```

---

## REVISIÓN — Aplicación del clima

| Concepto | Descripción |
|---|---|
| `async function` | Función que siempre retorna una Promesa; permite usar `await` dentro |
| `await fetch(url)` | Espera la respuesta de la petición HTTP antes de continuar |
| `response.ok` | Propiedad booleana de `Response`; `true` si el status HTTP está entre 200–299 |
| `response.json()` | Método async que parsea el cuerpo de la respuesta como JSON |
| `try...catch` | Bloque para manejar errores en código async |
| `console.error()` | Registra mensajes de error en la consola del navegador |
| Desestructuración anidada | Extrae propiedades de objetos anidados: `const { main: { temp } } = json` |
| Valor predeterminado | En desestructuración: `wind: { deg = 0 }` asigna 0 si `deg` es undefined |
| Operador ternario + N/A | `value !== undefined ? value : 'N/A'` para manejar datos faltantes |
| `innerHTML` con template literals | Permite insertar HTML dinámico con backticks y `${}` |

---

*Fin de la guía — Módulo: Aplicación del clima*
