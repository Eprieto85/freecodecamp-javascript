const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Arrays · push · pop · shift · unshift · Lab 22",
    hero_sub:"Array mutation methods are the foundation of every dynamic list in every app. Add items to either end, remove from either end — live.",
    ctrl_label:"// Array methods — try them live",
    btn_push:".push() → add to end",btn_unshift:".unshift() → add to start",
    btn_pop:".pop() → remove last",btn_shift:".shift() → remove first",
    list_title:"// shoppingList [ ]",empty_msg:"List is empty — add an item",
    m_push:"Adds item to the END. Returns new array length.",
    m_unshift:"Adds item to the START. Returns new array length.",
    m_pop:"Removes & returns LAST item. Mutates the array.",
    m_shift:"Removes & returns FIRST item. Mutates the array.",
    ctx_title:"Real-world use",
    ctx_text:"these 4 methods power every dynamic list UI: cart items (push/pop), notification queues (push + shift for FIFO), undo stacks (push + pop for LIFO), playlist management and task boards.",
    footer:"Shopping List · Lab 22 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Arrays · push · pop · shift · unshift · Lab 22",
    hero_sub:"Los métodos de mutación de arrays son la base de cada lista dinámica en toda aplicación.",
    ctrl_label:"// Métodos de array — pruébalos en vivo",
    btn_push:".push() → agregar al final",btn_unshift:".unshift() → agregar al inicio",
    btn_pop:".pop() → eliminar último",btn_shift:".shift() → eliminar primero",
    list_title:"// shoppingList [ ]",empty_msg:"Lista vacía — agrega un elemento",
    m_push:"Agrega al FINAL. Retorna la nueva longitud.",
    m_unshift:"Agrega al INICIO. Retorna la nueva longitud.",
    m_pop:"Elimina y retorna el ÚLTIMO elemento.",
    m_shift:"Elimina y retorna el PRIMER elemento.",
    ctx_title:"Uso en el mundo real",
    ctx_text:"estos 4 métodos impulsan toda UI de lista dinámica: carritos de compra, colas de notificaciones (FIFO), pilas de deshacer (LIFO), listas de reproducción y tableros de tareas.",
    footer:"Lista de Compras · Lab 22 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Tableaux · push · pop · shift · unshift · Lab 22",
    hero_sub:"Les méthodes de mutation de tableaux sont la base de chaque liste dynamique dans toute application.",
    ctrl_label:"// Méthodes de tableau — essayez-les en direct",
    btn_push:".push() → ajouter à la fin",btn_unshift:".unshift() → ajouter au début",
    btn_pop:".pop() → supprimer le dernier",btn_shift:".shift() → supprimer le premier",
    list_title:"// shoppingList [ ]",empty_msg:"Liste vide — ajoutez un élément",
    m_push:"Ajoute à la FIN. Retourne la nouvelle longueur.",
    m_unshift:"Ajoute au DÉBUT. Retourne la nouvelle longueur.",
    m_pop:"Supprime et retourne le DERNIER élément.",
    m_shift:"Supprime et retourne le PREMIER élément.",
    ctx_title:"Usage réel",
    ctx_text:"ces 4 méthodes alimentent toute UI de liste dynamique : paniers d'achat, files de notifications (FIFO), piles d'annulation (LIFO), listes de lecture et tableaux de tâches.",
    footer:"Liste de Courses · Lab 22 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

const shoppingList=[];

function getShoppingListMsg(arr){return`Current Shopping List: ${arr}`;}

function log(msg,color){
  const area=document.getElementById('log-area');
  const line=document.createElement('div');line.className='log-line';
  line.style.color=color||'rgba(220,252,231,0.6)';
  line.textContent='› '+msg;
  area.appendChild(line);
  area.scrollTop=area.scrollHeight;
}

function renderList(){
  const container=document.getElementById('items-list');
  document.getElementById('list-count').textContent=shoppingList.length+' item'+(shoppingList.length!==1?'s':'');
  if(shoppingList.length===0){container.innerHTML='<div class="empty-msg">List is empty — add an item</div>';return;}
  container.innerHTML='';
  shoppingList.forEach((item,i)=>{
    const el=document.createElement('div');el.className='list-item';
    let posTag='';
    if(i===0)posTag='<span class="item-pos pos-first">[0] start</span>';
    if(i===shoppingList.length-1&&shoppingList.length>1)posTag='<span class="item-pos pos-last">['+i+'] end</span>';
    el.innerHTML=`<span class="item-index">${i}</span><span class="item-name">${item}</span>${posTag}`;
    container.appendChild(el);
  });
}

function getInput(){return document.getElementById('item-input').value.trim()||'Item';}

function pushItem(){
  const item=getInput();
  shoppingList.push(item);
  log(`push("${item}") → length: ${shoppingList.length}`,'#4ade80');
  log(getShoppingListMsg(shoppingList));
  renderList();
}
function unshiftItem(){
  const item=getInput();
  shoppingList.unshift(item);
  log(`unshift("${item}") → length: ${shoppingList.length}`,'#60a5fa');
  log(getShoppingListMsg(shoppingList));
  renderList();
}
function popItem(){
  if(!shoppingList.length){log('Array is empty','#f87171');return;}
  const removed=shoppingList.pop();
  log(`pop() → removed: "${removed}"`, '#f87171');
  log(getShoppingListMsg(shoppingList));
  renderList();
}
function shiftItem(){
  if(!shoppingList.length){log('Array is empty','#f87171');return;}
  const removed=shoppingList.shift();
  log(`shift() → removed: "${removed}"`, '#fbbf24');
  log(getShoppingListMsg(shoppingList));
  renderList();
}

// Seed with lab data
['Apples','Grapes','Vegetable Oil'].forEach(i=>shoppingList.push(i));
renderList();
log('shoppingList initialized with 3 items','#4ade80');
