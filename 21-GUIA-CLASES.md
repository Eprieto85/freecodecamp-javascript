# Guía de Respuestas: Cómo trabajar con clases en JavaScript
## freeCodeCamp JavaScript v9

---

## TEORÍA — Lecturas con preguntas

---

### Lectura 1: ¿Qué son las clases y cómo funcionan en JavaScript?

**Pregunta 1:** ¿Cuál es el propósito principal de un constructor en una clase de JavaScript?

**✅ Respuesta:** Para inicializar las propiedades de un objeto cuando se crea.

---

**Pregunta 2:** ¿Cuál es la forma correcta de crear una instancia de una clase de JavaScript?

**✅ Respuesta:** Usando la palabra clave new seguida del nombre de la clase y argumentos.

---

**Pregunta 3:** ¿Cuál es la diferencia entre una clase y un objeto en JavaScript?

**✅ Respuesta:** Una clase es un plano para un objeto, mientras que el objeto es una instancia específica de esa clase.

---

### Lectura 2: ¿Cómo funciona la palabra clave This?

**Pregunta 1:** ¿Cuál es el propósito principal de la palabra clave `this` en JavaScript?

**✅ Respuesta:** Para acceder a propiedades y métodos del objeto actual.

---

**Pregunta 2:** ¿Cuál de las siguientes afirmaciones es verdadera sobre `this` en los métodos de JavaScript?

**✅ Respuesta:** this puede referirse a diferentes objetos dependiendo del contexto en el que se use.

---

**Pregunta 3:** ¿En cuál de los siguientes escenarios usarías típicamente la palabra clave `this`?

**✅ Respuesta:** Al acceder a propiedades y métodos de un objeto.

---

### Lectura 3: ¿Qué es la herencia de clases y cómo funciona?

**Pregunta 1:** ¿Cuál es el propósito principal de la herencia en la programación orientada a objetos?

**✅ Respuesta:** Para reutilizar el código y crear relaciones jerárquicas entre clases.

---

**Pregunta 2:** ¿Cuál es la palabra clave utilizada para heredar de una clase padre en JavaScript?

**✅ Respuesta:** extends

---

**Pregunta 3:** ¿Cuál es la diferencia entre una clase padre y una clase hija?

**✅ Respuesta:** Una clase hija es una versión especializada de una clase padre.

---

### Lectura 4: ¿Cuáles son las propiedades y métodos estáticos en las clases?

**Pregunta 1:** ¿Cuál es el propósito principal de un método estático en una clase JavaScript?

**✅ Respuesta:** Para definir métodos que se puedan acceder sin crear una instancia de la clase.

---

**Pregunta 2:** ¿Cuál es la principal diferencia entre un método estático y un método de instancia en JavaScript?

**✅ Respuesta:** Los métodos estáticos están asociados con la clase en sí, mientras que los métodos de instancia están asociados con instancias específicas de la clase.

---

**Pregunta 3:** ¿Cómo se puede acceder a una propiedad estática de una clase en JavaScript?

**✅ Respuesta:** Usando directamente el nombre de la clase y el nombre de la propiedad.

---

## TALLER — Crear un carrito de compras de postres

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/workshop-shopping-cart/step-N`

En este taller construirás un carrito de compras de postres interactivo usando clases de JavaScript, manipulación del DOM y manejo de eventos.

---

### Paso 1 — Obtener elementos del DOM (contenedores)

Declara tres variables usando `getElementById()`: asigna el elemento `"cart-container"` a `cartContainer`, el elemento `"products-container"` a `productsContainer` y el elemento `"dessert-card-container"` a `dessertCards`.

**✅ Respuesta:**
```js
const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
```

---

### Paso 2 — Obtener botones del carrito

Declara `cartBtn` asignándole el elemento con id `"cart-btn"` y `clearCartBtn` con el id `"clear-cart-btn"`.

**✅ Respuesta:**
```js
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
```

---

### Paso 3 — Obtener elementos de totales

Declara cuatro variables: `totalNumberOfItems` (id `"total-items"`), `cartSubTotal` (id `"subtotal"`), `cartTaxes` (id `"taxes"`) y `cartTotal` (id `"total"`).

**✅ Respuesta:**
```js
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
```

---

### Paso 4 — Elemento show/hide y estado del carrito

Obtén el elemento con id `"show-hide-cart"` y asígnalo a `showHideCartSpan`. Luego declara `isCartShowing` con `let` e inicialízalo en `false`.

**✅ Respuesta:**
```js
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;
```

---

### Paso 5 — Declarar el array de productos

Declara una variable `products` y asígnale un array vacío.

**✅ Respuesta:**
```js
const products = [];
```

---

### Paso 6 — Crear la clase Dessert

Crea una clase `Dessert` con un constructor que reciba `id`, `name`, `price` y `category`, y los asigne a las propiedades correspondientes usando `this`.

**✅ Respuesta:**
```js
class Dessert {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
```

---

### Paso 7 — Agregar el primer producto

Dentro del array `products`, agrega el primer objeto `Dessert` usando `new Dessert()` con los valores: id `1`, nombre `"Vanilla Cupcakes (6 Pack)"`, precio `12.99` y categoría `"Cupcake"`.

**✅ Respuesta:**
```js
const products = [
  new Dessert(1, "Vanilla Cupcakes (6 Pack)", 12.99, "Cupcake"),
];
```

---

### Paso 8 — Agregar los productos restantes

Agrega los 11 productos restantes al array `products`.

**✅ Respuesta:**
```js
const products = [
  new Dessert(1, "Vanilla Cupcakes (6 Pack)", 12.99, "Cupcake"),
  new Dessert(2, "French Macaron", 3.99, "Macaron"),
  new Dessert(3, "Pumpkin Cupcake", 3.99, "Cupcake"),
  new Dessert(4, "Chocolate Cupcake", 5.99, "Cupcake"),
  new Dessert(5, "Chocolate Pretzels (4 Pack)", 10.99, "Pretzel"),
  new Dessert(6, "Strawberry Ice Cream", 2.99, "Ice Cream"),
  new Dessert(7, "Chocolate Macarons (4 Pack)", 9.99, "Macaron"),
  new Dessert(8, "Strawberry Pretzel", 4.99, "Pretzel"),
  new Dessert(9, "Butter Pecan Ice Cream", 2.99, "Ice Cream"),
  new Dessert(10, "Rocky Road Ice Cream", 2.99, "Ice Cream"),
  new Dessert(11, "Vanilla Macarons (5 Pack)", 11.99, "Macaron"),
  new Dessert(12, "Lemon Cupcakes (4 Pack)", 12.99, "Cupcake"),
];
```

---

### Paso 9 — Iterar el array de productos con forEach

Llama al método `forEach()` en el array `products`, pasando una función flecha vacía como callback.

**✅ Respuesta:**
```js
products.forEach(() => {});
```

---

### Paso 10 — Desestructurar el parámetro del callback

Actualiza el callback de `forEach` para desestructurar `{ name, id, price, category }` del elemento del array.

**✅ Respuesta:**
```js
products.forEach(({ name, id, price, category }) => {});
```

---

### Paso 11 — Agregar innerHTML con template literal vacío

Dentro del callback, usa `+=` para agregar un template literal vacío al `innerHTML` de `dessertCards`.

**✅ Respuesta:**
```js
products.forEach(({ name, id, price, category }) => {
  dessertCards.innerHTML += ``;
});
```

---

### Paso 12 — Agregar la tarjeta con título

Dentro del template literal, agrega un `<div class="dessert-card">` con un `<h2>` que muestre el nombre del postre.

**✅ Respuesta:**
```js
dessertCards.innerHTML += `
  <div class="dessert-card">
    <h2>${name}</h2>
  </div>
`;
```

---

### Paso 13 — Agregar precio y categoría

Dentro del div de la tarjeta, agrega un párrafo con clase `"dessert-price"` que muestre `$${price}` y otro con clase `"product-category"` que muestre `Category: ${category}`.

**✅ Respuesta:**
```js
dessertCards.innerHTML += `
  <div class="dessert-card">
    <h2>${name}</h2>
    <p class="dessert-price">$${price}</p>
    <p class="product-category">Category: ${category}</p>
  </div>
`;
```

---

### Paso 14 — Agregar el botón "Add to cart"

Agrega un `<button>` con id `${id}` y clases `"btn add-to-cart-btn"` que muestre el texto `Add to cart`.

**✅ Respuesta:**
```js
dessertCards.innerHTML += `
  <div class="dessert-card">
    <h2>${name}</h2>
    <p class="dessert-price">$${price}</p>
    <p class="product-category">Category: ${category}</p>
    <button id="${id}" class="btn add-to-cart-btn">Add to cart</button>
  </div>
`;
```

---

### Paso 15 — Crear la clase ShoppingCart

Crea una clase `ShoppingCart` vacía.

**✅ Respuesta:**
```js
class ShoppingCart {}
```

---

### Paso 16 — Agregar constructor vacío

Agrega un método `constructor()` vacío dentro de `ShoppingCart`.

**✅ Respuesta:**
```js
class ShoppingCart {
  constructor() {}
}
```

---

### Paso 17 — Inicializar propiedades del carrito

Dentro del constructor, inicializa `this.items` como un array vacío, `this.total` en `0` y `this.taxRate` en `8.25`.

**✅ Respuesta:**
```js
constructor() {
  this.items = [];
  this.total = 0;
  this.taxRate = 8.25;
}
```

---

### Paso 18 — Agregar el método addItem

Agrega el método `addItem(id, products)` con cuerpo vacío.

**✅ Respuesta:**
```js
addItem(id, products) {}
```

---

### Paso 19 — Buscar el producto por id

Dentro de `addItem`, usa `products.find()` para buscar el elemento cuyo `id` coincida con el parámetro `id` y asígnalo a `product`.

**✅ Respuesta:**
```js
const product = products.find((item) => item.id === id);
```

---

### Paso 20 — Desestructurar nombre y precio

Desestructura `{ name, price }` del objeto `product`.

**✅ Respuesta:**
```js
const { name, price } = product;
```

---

### Paso 21 — Agregar el producto al carrito

Usa `this.items.push()` para agregar el `product` al array del carrito.

**✅ Respuesta:**
```js
this.items.push(product);
```

---

### Paso 22 — Declarar objeto contador por producto

Declara la variable `totalCountPerProduct` como un objeto vacío `{}`.

**✅ Respuesta:**
```js
const totalCountPerProduct = {};
```

---

### Paso 23 — Iterar items con forEach

Llama a `this.items.forEach()` pasando `(dessert) => {}` como callback.

**✅ Respuesta:**
```js
this.items.forEach((dessert) => {});
```

---

### Paso 24 — Inicializar el contador con operador OR

Dentro del callback de `forEach`, usa el operador `||` para asignar el conteo actual o `0` a `totalCountPerProduct[dessert.id]`.

**✅ Respuesta:**
```js
this.items.forEach((dessert) => {
  totalCountPerProduct[dessert.id] = totalCountPerProduct[dessert.id] || 0;
});
```

---

### Paso 25 — Incrementar el contador

Actualiza la asignación para incrementar el contador en `1` usando el patrón `(valor || 0) + 1`.

**✅ Respuesta:**
```js
this.items.forEach((dessert) => {
  totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
});
```

---

### Paso 26 — Obtener el conteo actual del producto

Declara `currentProductCount` asignándole el valor de `totalCountPerProduct[product.id]`.

**✅ Respuesta:**
```js
const currentProductCount = totalCountPerProduct[product.id];
```

---

### Paso 27 — Obtener el span del contador

Usa `getElementById` para obtener el elemento con id `` `product-count-for-id${id}` `` y asígnalo a `currentProductCountSpan`.

**✅ Respuesta:**
```js
const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);
```

---

### Paso 28 — Agregar expresión ternaria base

Escribe una expresión ternaria que evalúe `currentProductCount > 1`, con `undefined` como valor para ambas ramas.

**✅ Respuesta:**
```js
currentProductCount > 1 ? undefined : undefined;
```

---

### Paso 29 — Actualizar textContent en rama verdadera

Reemplaza el primer `undefined` para que actualice el `textContent` del span con `` `${currentProductCount}x` ``.

**✅ Respuesta:**
```js
currentProductCount > 1 
  ? currentProductCountSpan.textContent = `${currentProductCount}x`
  : undefined;
```

---

### Paso 30 — Agregar div del producto en rama falsa

Reemplaza el segundo `undefined` para agregar al `innerHTML` de `productsContainer` un `<div>` con id `dessert${id}` y clase `"product"`.

**✅ Respuesta:**
```js
currentProductCount > 1 
  ? currentProductCountSpan.textContent = `${currentProductCount}x`
  : productsContainer.innerHTML += `<div id="dessert${id}" class="product"></div>`;
```

---

### Paso 31 — Agregar párrafos al div del producto

Dentro del div del producto, agrega dos elementos `<p>`: el primero vacío y el segundo con `$${price}`.

**✅ Respuesta:**
```js
currentProductCount > 1 
  ? currentProductCountSpan.textContent = `${currentProductCount}x`
  : productsContainer.innerHTML += `
  <div id="dessert${id}" class="product">
    <p></p>
    <p>$${price}</p>
  </div>
  `;
```

---

### Paso 32 — Agregar span y nombre en el primer párrafo

Dentro del primer `<p>`, agrega un `<span>` con clase `"product-count"` e id `` `product-count-for-id${id}` ``, seguido del nombre del producto.

**✅ Respuesta:**
```js
currentProductCount > 1 
  ? currentProductCountSpan.textContent = `${currentProductCount}x`
  : productsContainer.innerHTML += `
  <div id="dessert${id}" class="product">
    <p>
      <span class="product-count" id="product-count-for-id${id}"></span>${name}
    </p>
    <p>$${price}</p>
  </div>
  `;
```

---

### Paso 33 — Instanciar ShoppingCart

Crea una instancia de `ShoppingCart` y asígnala a la variable `cart`.

**✅ Respuesta:**
```js
const cart = new ShoppingCart();
```

---

### Paso 34 — Obtener botones "Add to cart"

Usa `getElementsByClassName()` para obtener todos los elementos con clase `"add-to-cart-btn"` y asígnalo a `addToCartBtns`.

**✅ Respuesta:**
```js
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");
```

---

### Paso 35 — Convertir HTMLCollection a array con spread

Usa el operador spread `[...addToCartBtns]` para convertir la colección a un array y llama a `forEach()` con una función flecha vacía.

**✅ Respuesta:**
```js
[...addToCartBtns].forEach(() => {});
```

---

### Paso 36 — Agregar event listener de click a cada botón

Actualiza el callback de `forEach` para recibir `btn` y registrar un event listener para el evento `"click"` con un callback vacío que reciba `event`.

**✅ Respuesta:**
```js
[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {});
  }
);
```

---

### Paso 37 — Llamar a addItem en el click

Dentro del callback de click, llama a `cart.addItem()` pasando el `id` del botón clickeado (convertido a número) y el array `products`.

**✅ Respuesta:**
```js
btn.addEventListener("click", (event) => {
  cart.addItem(Number(event.target.id), products);
});
```

---

### Paso 38 — Agregar event listener al botón del carrito

Registra un event listener para el evento `"click"` en `cartBtn`, con una función flecha vacía como callback.

**✅ Respuesta:**
```js
cartBtn.addEventListener("click", () => {});
```

---

### Paso 39 — Alternar estado del carrito

Dentro del callback, actualiza `isCartShowing` asignándole su valor negado con `!`.

**✅ Respuesta:**
```js
cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
});
```

---

### Paso 40 — Actualizar texto show/hide con ternario

Actualiza el `textContent` de `showHideCartSpan` usando un ternario: si `isCartShowing` es verdadero muestra `"Hide"`, si no muestra `"Show"`.

**✅ Respuesta:**
```js
showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
```

---

### Paso 41 — Mostrar u ocultar el carrito con ternario

Actualiza la propiedad `display` del estilo de `cartContainer` usando un ternario: `"block"` si el carrito se muestra, `"none"` si no.

**✅ Respuesta:**
```js
cartContainer.style.display = isCartShowing ? "block" : "none";
```

---

### Paso 42 — Agregar el método getCounts

Dentro de `ShoppingCart`, agrega el método `getCounts()` que retorne la longitud del array `this.items`.

**✅ Respuesta:**
```js
getCounts() {
  return this.items.length;
}
```

---

### Paso 43 — Mostrar conteo de artículos

Dentro del callback del event listener de cada botón "Add to cart", actualiza el `textContent` de `totalNumberOfItems` con el resultado de `cart.getCounts()`.

**✅ Respuesta:**
```js
btn.addEventListener("click", (event) => {
  cart.addItem(Number(event.target.id), products);
  totalNumberOfItems.textContent = cart.getCounts();
});
```

---

### Paso 44 — Agregar el método calculateTotal con reduce

Agrega el método `calculateTotal()` a `ShoppingCart`. Dentro, declara `subTotal` usando `this.items.reduce()` para sumar los precios de todos los items.

**✅ Respuesta:**
```js
calculateTotal() {
  const subTotal = this.items.reduce((total, item) => total + item.price, 0);
}
```

---

### Paso 45 — Agregar el método calculateTaxes

Agrega el método `calculateTaxes(amount)` con cuerpo vacío.

**✅ Respuesta:**
```js
calculateTaxes(amount) {}
```

---

### Paso 46 — Calcular el impuesto

Dentro de `calculateTaxes`, retorna el resultado de `(this.taxRate / 100) * amount`.

**✅ Respuesta:**
```js
calculateTaxes(amount) {
  return (this.taxRate / 100) * amount;
}
```

---

### Paso 47 — Redondear con toFixed(2)

Envuelve el cálculo del impuesto con `.toFixed(2)` para limitar a 2 decimales.

**✅ Respuesta:**
```js
calculateTaxes(amount) {
  return ((this.taxRate / 100) * amount).toFixed(2);
}
```

---

### Paso 48 — Convertir a número con parseFloat

Envuelve la expresión con `parseFloat()` para convertir el string de `.toFixed()` de vuelta a un número.

**✅ Respuesta:**
```js
calculateTaxes(amount) {
  return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
}
```

---

### Paso 49 — Calcular el impuesto en calculateTotal

Dentro de `calculateTotal`, declara `tax` asignándole el resultado de `this.calculateTaxes(subTotal)`.

**✅ Respuesta:**
```js
calculateTotal() {
  const subTotal = this.items.reduce((total, item) => total + item.price, 0);
  const tax = this.calculateTaxes(subTotal);
}
```

---

### Paso 50 — Actualizar la propiedad total

Asigna a `this.total` la suma de `subTotal` más `tax`.

**✅ Respuesta:**
```js
this.total = subTotal + tax;
```

---

### Paso 51 — Mostrar el subtotal en el DOM

Actualiza el `textContent` de `cartSubTotal` con el template literal `` `$${subTotal.toFixed(2)}` ``.

**✅ Respuesta:**
```js
cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
```

---

### Paso 52 — Mostrar impuestos y total en el DOM

Siguiendo el mismo patrón, actualiza el `textContent` de `cartTaxes` con `` `$${tax.toFixed(2)}` `` y el de `cartTotal` con `` `$${this.total.toFixed(2)}` ``.

**✅ Respuesta:**
```js
cartTaxes.textContent = `$${tax.toFixed(2)}`;
cartTotal.textContent = `$${this.total.toFixed(2)}`;
```

---

### Paso 53 — Retornar el total

Como paso final del método `calculateTotal`, retorna el valor de `this.total`.

**✅ Respuesta:**
```js
return this.total;
```

---

### Paso 54 — Llamar a calculateTotal en el click

Dentro del callback del event listener de cada botón "Add to cart", llama a `cart.calculateTotal()` después de actualizar el conteo.

**✅ Respuesta:**
```js
btn.addEventListener("click", (event) => {
  cart.addItem(Number(event.target.id), products);
  totalNumberOfItems.textContent = cart.getCounts();
  cart.calculateTotal();
});
```

---

### Paso 55 — Agregar el método clearCart

Agrega el método `clearCart()` con cuerpo vacío a la clase `ShoppingCart`.

**✅ Respuesta:**
```js
clearCart() {}
```

---

### Paso 56 — Verificar si el carrito está vacío

Dentro de `clearCart`, agrega un bloque `if` que verifique si `this.items` está vacío usando `!this.items.length`. Si lo está, muestra una alerta con el mensaje `"Your shopping cart is already empty"` y termina la función con `return`.

**✅ Respuesta:**
```js
clearCart() {
  if (!this.items.length) {
    alert("Your shopping cart is already empty");
    return;
  }
}
```

---

### Paso 57 — Pedir confirmación al usuario

Declara `isCartCleared` y asígnale el resultado de `confirm()` con la pregunta de confirmación para borrar el carrito.

**✅ Respuesta:**
```js
const isCartCleared = confirm(
  "Are you sure you want to clear all items from your shopping cart?"
);
```

---

### Paso 58 — Resetear items y total si el usuario confirma

Agrega un bloque `if (isCartCleared)` que reinicie `this.items` a un array vacío y `this.total` a `0`.

**✅ Respuesta:**
```js
if (isCartCleared) {
  this.items = [];
  this.total = 0;
}
```

---

### Paso 59 — Limpiar el HTML de productsContainer

Dentro del bloque `if`, reinicia el `innerHTML` de `productsContainer` a una cadena vacía.

**✅ Respuesta:**
```js
if (isCartCleared) {
  this.items = [];
  this.total = 0;
  productsContainer.innerHTML = "";
}
```

---

### Paso 60 — Reiniciar todos los contadores en pantalla

Dentro del bloque `if`, actualiza el `textContent` de `totalNumberOfItems` a `0` y el de `cartSubTotal`, `cartTaxes` y `cartTotal` a `"$0"`.

**✅ Respuesta:**
```js
if (isCartCleared) {
  this.items = [];
  this.total = 0;
  productsContainer.innerHTML = "";
  totalNumberOfItems.textContent = 0;
  cartSubTotal.textContent = "$0";
  cartTaxes.textContent = "$0";
  cartTotal.textContent = "$0";
}
```

---

### Paso 61 — Conectar el botón "Clear Cart"

Agrega un event listener de `"click"` a `clearCartBtn`. Como callback, pasa `cart.clearCart.bind(cart)` para que `this` apunte correctamente a la instancia del carrito.

**✅ Respuesta:**
```js
clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
```

---

## LABORATORIO — Construir un tablero de ideas de proyectos

**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-project-idea-board`

Construye un tablero de ideas de proyectos usando clases de JavaScript. Debes definir objetos de estado, dos clases y sus métodos.

---

### Requisitos

1. Define una constante `projectStatus` con tres claves: `PENDING` (`description: "Pending Execution"`), `SUCCESS` (`description: "Executed Successfully"`) y `FAILURE` (`description: "Execution Failed"`).
2. Define una clase `ProjectIdea` con `constructor(title, description)` que inicialice `title`, `description` y `status = projectStatus.PENDING`.
3. `ProjectIdea` debe tener un método `updateProjectStatus(newStatus)` que actualice la propiedad `status`.
4. Define una clase `ProjectIdeaBoard` con `constructor(title)` que inicialice `title` e `ideas = []`.
5. `ProjectIdeaBoard` debe tener un método `pin(idea)` que agregue una `ProjectIdea` al array `ideas`.
6. `ProjectIdeaBoard` debe tener un método `unpin(idea)` que elimine una `ProjectIdea` del array `ideas`.
7. `ProjectIdeaBoard` debe tener un método `count()` que devuelva el número de ideas.
8. `ProjectIdeaBoard` debe tener un método `formatToString()` que devuelva:
```
<título del tablero> has <cantidad> idea(s)
<título idea> (<estado description>) - <descripción idea>
...
```

---

### ✅ Solución — script.js

```js
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    this.ideas = this.ideas.filter(i => i !== idea);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return result;
  }
}
```

---

### Verificación de tests clave

| Test | Verificación |
|---|---|
| 11 | `new ProjectIdea("Smart Window Locks", "...")` → status = `{ description: "Pending Execution" }` |
| 12 | Llamar `updateProjectStatus(projectStatus.SUCCESS)` → status = `{ description: "Executed Successfully" }` |
| 13 | Llamar `updateProjectStatus(projectStatus.FAILURE)` → status = `{ description: "Execution Failed" }` |
| 17 | `emptyBoard.formatToString()` → `"Empty Board has 0 idea(s)\n"` |
| 18 | Tablero con 1 idea → `"Tech Projects Board has 1 idea(s)\nSmart Home System (Pending Execution) - ...\n"` |

---

## QUIZ — Cuestionario sobre clases de JavaScript (20 preguntas)

Necesitas 18/20 correctas para pasar.

| # | Respuesta correcta |
|---|---|
| 1 | Para crear planos reutilizables para objetos. |
| 2 | Usando la palabra clave class. |
| 3 | constructor |
| 4 | Una instancia de la clase. |
| 5 | Heredará el valor de this del entorno donde está definida. |
| 6 | Para crear una subclase que hereda de una clase padre. |
| 7 | class Car extends Vehicle {} |
| 8 | Dog barks |
| 9 | Para llamar al constructor o métodos de la clase padre. |
| 10 | Un método que pertenece a la clase misma, no a ninguna instancia. |
| 11 | 7 |
| 12 | Usando ClassName.propertyName. |
| 13 | Cuando el método opera en datos compartidos por todas las instancias de la clase. |
| 14 | Lanza un error. |
| 15 | extends |
| 16 | Human |
| 17 | Permite que una clase adquiera propiedades y métodos de otra clase. |
| 18 | El constructor de la superclase se usará por defecto. |
| 19 | La instancia de Animal. |
| 20 | Para almacenar datos a nivel de clase compartidos entre instancias. |

---

*Fin de la guía — Módulo: Cómo trabajar con clases en JavaScript*
