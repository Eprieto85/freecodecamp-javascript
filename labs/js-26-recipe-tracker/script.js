const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Objects · Arrays · Functions · Workshop Lab 26",hero_sub:"Add recipes and watch two functions automatically calculate total ingredients and difficulty level based on cooking time.",add_title:"// Add a new recipe",name_label:"name",time_label:"cookingTime (min)",add_btn:"Add →",ing_label:"ingredients (comma-separated)",list_title:"// recipes[] — live collection",c1:"Returns ingredients.length. A function that reads an object property and returns a derived value.",c2:"if/else if chain: ≤30min=easy, ≤60min=medium, else hard. Maps a number to a string category.",c3:"Adds one or more items to the end of an array in place. Used to build the recipes[] collection.",ctx_title:"Real-world use",ctx_text:"computing derived properties from raw data (difficulty, risk score, price tier) is one of the most common patterns in backend services.",footer:"Recipe Tracker · Lab 26 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Objetos · Arrays · Funciones · Taller Lab 26",hero_sub:"Agrega recetas y observa dos funciones calcular automáticamente ingredientes totales y nivel de dificultad.",add_title:"// Agregar nueva receta",name_label:"nombre",time_label:"tiempo de cocción (min)",add_btn:"Agregar →",ing_label:"ingredientes (separados por coma)",list_title:"// recipes[] — colección en vivo",c1:"Retorna ingredients.length. Función que lee una propiedad del objeto y retorna un valor derivado.",c2:"Cadena if/else if: ≤30min=easy, ≤60min=medium, else hard. Mapea número a categoría de texto.",c3:"Agrega uno o más ítems al final de un array en su lugar. Usado para construir recipes[].",ctx_title:"Uso en el mundo real",ctx_text:"calcular propiedades derivadas de datos crudos (dificultad, puntaje de riesgo, nivel de precio) es uno de los patrones más comunes en servicios backend.",footer:"Rastreador de Recetas · Lab 26 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Objets · Tableaux · Fonctions · Atelier Lab 26",hero_sub:"Ajoutez des recettes et regardez deux fonctions calculer automatiquement les ingrédients totaux et le niveau de difficulté.",add_title:"// Ajouter une nouvelle recette",name_label:"nom",time_label:"temps de cuisson (min)",add_btn:"Ajouter →",ing_label:"ingrédients (séparés par virgule)",list_title:"// recipes[] — collection en direct",c1:"Retourne ingredients.length. Une fonction qui lit une propriété d'objet et retourne une valeur dérivée.",c2:"Chaîne if/else if : ≤30min=easy, ≤60min=medium, sinon hard.",c3:"Ajoute un ou plusieurs éléments à la fin d'un tableau. Utilisé pour construire recipes[].",ctx_title:"Usage réel",ctx_text:"calculer des propriétés dérivées de données brutes est l'un des modèles les plus courants dans les services backend.",footer:"Suivi de Recettes · Lab 26 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
function getTotalIngredients(ingredients){return ingredients.length;}
function getDifficultyLevel(cookingTime){if(cookingTime<=30)return'easy';else if(cookingTime<=60)return'medium';else return'hard';}
const recipes=[
  {name:"Spaghetti Carbonara",ingredients:["spaghetti","Parmesan cheese","pancetta","black pepper"],cookingTime:22},
  {name:"Chicken Curry",ingredients:["chicken breast","coconut milk","curry powder","onion","garlic"],cookingTime:42},
  {name:"Vegetable Stir Fry",ingredients:["broccoli","carrot","bell pepper"],cookingTime:15}
];
recipes.forEach(r=>{r.totalIngredients=getTotalIngredients(r.ingredients);r.difficultyLevel=getDifficultyLevel(r.cookingTime);});
function renderRecipes(){
  const grid=document.getElementById('r-grid');
  grid.innerHTML=recipes.map(r=>`<div class="r-card">
    <div class="r-name">${r.name}</div>
    <div class="r-badge ${r.difficultyLevel}">${r.difficultyLevel}</div>
    <div class="r-meta">⏱ ${r.cookingTime} min &nbsp;·&nbsp; 🧂 ${r.totalIngredients} ingredients</div>
    <div class="r-ings">${r.ingredients.map(i=>`<span>${i}</span>`).join('')}</div>
  </div>`).join('');
}
function addRecipe(){
  const name=document.getElementById('r-name').value.trim();
  const time=parseInt(document.getElementById('r-time').value)||20;
  const ingsRaw=document.getElementById('r-ings').value;
  if(!name)return;
  const ingredients=ingsRaw?ingsRaw.split(',').map(s=>s.trim()).filter(Boolean):['ingredient'];
  const r={name,ingredients,cookingTime:time};
  r.totalIngredients=getTotalIngredients(r.ingredients);
  r.difficultyLevel=getDifficultyLevel(r.cookingTime);
  recipes.push(r);
  renderRecipes();
  document.getElementById('r-name').value='';
  document.getElementById('r-ings').value='';
}
renderRecipes();
