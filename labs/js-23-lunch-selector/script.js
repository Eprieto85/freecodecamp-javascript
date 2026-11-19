const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Arrays · Array Methods · Math.random() · Lab 23",
    hero_sub:"A real-world array manager combining 7 functions. The same pattern powers restaurant apps, playlist builders, and recommendation engines.",
    card_label:"// Manage the lunch menu",btn_end:"+ End",btn_start:"+ Start",
    btn_rm_last:"Remove Last",btn_rm_first:"Remove First",btn_random:"🎲 Pick Random Lunch",
    rand_empty:"Click above to pick a random lunch",list_title:"// lunches [ ]",
    empty_state:"Menu is empty — add a lunch item",
    f1:"Uses .push() — adds to the end, logs confirmation, returns updated array.",
    f2:"Uses .unshift() — adds to the start, logs confirmation, returns updated array.",
    f3:"Uses .pop() — removes last, handles empty array guard, returns updated array.",
    f4:"Uses .shift() — removes first, handles empty array guard, returns updated array.",
    f5:"Math.floor(Math.random() * arr.length) — picks a random index, non-destructive.",
    f6:'Uses .join(", ") to display array as a comma-separated readable string.',
    ctx_title:"Pattern: array manager",
    ctx_text:"wrapping array mutations in named functions is exactly how production apps are structured. This pattern — functions that accept an array and return the modified array — is the foundation of reducers and state managers.",
    footer:"Lunch Selector · Lab 23 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Arrays · Métodos de Array · Math.random() · Lab 23",
    hero_sub:"Un gestor de arrays del mundo real combinando 7 funciones. El mismo patrón impulsa apps de restaurantes, listas de reproducción y motores de recomendación.",
    card_label:"// Gestionar el menú de almuerzos",btn_end:"+ Final",btn_start:"+ Inicio",
    btn_rm_last:"Eliminar Último",btn_rm_first:"Eliminar Primero",btn_random:"🎲 Elegir Almuerzo Aleatorio",
    rand_empty:"Haz clic arriba para elegir un almuerzo aleatorio",list_title:"// lunches [ ]",
    empty_state:"Menú vacío — agrega un elemento",
    f1:"Usa .push() — agrega al final, registra confirmación, retorna array actualizado.",
    f2:"Usa .unshift() — agrega al inicio, registra confirmación, retorna array actualizado.",
    f3:"Usa .pop() — elimina el último, maneja array vacío, retorna array actualizado.",
    f4:"Usa .shift() — elimina el primero, maneja array vacío, retorna array actualizado.",
    f5:"Math.floor(Math.random() * arr.length) — elige un índice aleatorio, no destructivo.",
    f6:'Usa .join(", ") para mostrar el array como cadena legible separada por comas.',
    ctx_title:"Patrón: gestor de arrays",
    ctx_text:"envolver mutaciones de arrays en funciones nombradas es exactamente cómo se estructuran las apps en producción. Este patrón es la base de los reducers y gestores de estado.",
    footer:"Selector de Almuerzos · Lab 23 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Tableaux · Méthodes · Math.random() · Lab 23",
    hero_sub:"Un gestionnaire de tableaux réel combinant 7 fonctions. Le même modèle alimente les apps de restaurant, les créateurs de playlists et les moteurs de recommandation.",
    card_label:"// Gérer le menu du déjeuner",btn_end:"+ Fin",btn_start:"+ Début",
    btn_rm_last:"Supprimer Dernier",btn_rm_first:"Supprimer Premier",btn_random:"🎲 Choisir un Déjeuner Aléatoire",
    rand_empty:"Cliquez ci-dessus pour choisir un déjeuner aléatoire",list_title:"// lunches [ ]",
    empty_state:"Menu vide — ajoutez un élément",
    f1:"Utilise .push() — ajoute à la fin, enregistre la confirmation, retourne le tableau mis à jour.",
    f2:"Utilise .unshift() — ajoute au début, retourne le tableau mis à jour.",
    f3:"Utilise .pop() — supprime le dernier, gère le tableau vide, retourne le tableau.",
    f4:"Utilise .shift() — supprime le premier, gère le tableau vide, retourne le tableau.",
    f5:"Math.floor(Math.random() * arr.length) — choisit un index aléatoire, non destructif.",
    f6:'Utilise .join(", ") pour afficher le tableau comme une chaîne lisible.',
    ctx_title:"Modèle : gestionnaire de tableaux",
    ctx_text:"envelopper les mutations de tableaux dans des fonctions nommées est exactement ainsi que les apps en production sont structurées. Ce modèle est la base des reducers et gestionnaires d'état.",
    footer:"Sélecteur de Déjeuner · Lab 23 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

let lunches=[];

function addLunchToEnd(arr,item){arr.push(item);return arr;}
function addLunchToStart(arr,item){arr.unshift(item);return arr;}
function removeLastLunch(arr){if(arr.length>0)arr.pop();return arr;}
function removeFirstLunch(arr){if(arr.length>0)arr.shift();return arr;}
function getRandomLunch(arr){if(!arr.length)return null;return arr[Math.floor(Math.random()*arr.length)];}
function showLunchMenu(arr){return arr.length?arr.join(', '):'(empty)';}

function getInput(){return document.getElementById('lunch-input').value.trim()||'Item';}

function render(){
  const container=document.getElementById('menu-items');
  document.getElementById('item-count').textContent=lunches.length+' item'+(lunches.length!==1?'s':'');
  if(!lunches.length){container.innerHTML='<div class="empty-state">Menu is empty — add a lunch item</div>';return;}
  container.innerHTML='';
  lunches.forEach((item,i)=>{
    const el=document.createElement('div');el.className='menu-item';
    let tag='';
    if(i===0)tag='<span class="pos-tag pt-first">first</span>';
    if(i===lunches.length-1&&lunches.length>1)tag='<span class="pos-tag pt-last">last</span>';
    el.innerHTML=`<span class="mi-idx">${i}</span><span class="mi-name">${item}</span>${tag}`;
    container.appendChild(el);
  });
}

function addEnd(){
  const item=getInput();
  addLunchToEnd(lunches,item);
  render();
}
function addStart(){
  const item=getInput();
  addLunchToStart(lunches,item);
  render();
}
function removeLast(){
  removeLastLunch(lunches);
  render();
  document.getElementById('random-result').innerHTML='<span class="rand-empty">Pick a random lunch</span>';
}
function removeFirst(){
  removeFirstLunch(lunches);
  render();
  document.getElementById('random-result').innerHTML='<span class="rand-empty">Pick a random lunch</span>';
}
function pickRandom(){
  const result=getRandomLunch(lunches);
  const el=document.getElementById('random-result');
  if(!result){el.innerHTML='<span class="rand-empty">Add items first</span>';return;}
  el.innerHTML=`<span class="rand-text">🍽️ ${result}</span>`;
}

['Pizza','Sushi','Tacos','Salad'].forEach(i=>addLunchToEnd(lunches,i));
render();
