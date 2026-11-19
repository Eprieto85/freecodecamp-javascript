const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Nested Objects · Optional Chaining · Functions · Workshop Lab 29",hero_sub:"Manage a museum artifact collection using five functions that add tags, move artifacts, toggle display status, update curators, and generate audit summaries.",ctrl_title:"// Run a function",fn_label:"function",id_label:"id",run_btn:"Run →",summary_idle:"Output will appear here",coll_title:"// collection live state",c1:"artifact?.title returns undefined instead of throwing if artifact is undefined — safe access to nested objects.",c2:"Used in addTag to prevent duplicates: if (!artifact.tags.includes(tag)) before pushing.",c3:"buildSummary() returns a multi-line string using backticks — a pattern used for every formatted log, email, and report.",ctx_title:"Real-world use",ctx_text:"this architecture (nested object + small single-purpose functions) is exactly how state is managed in museums, inventory systems, and CMS platforms.",footer:"Artifact Provenance Auditor · Lab 29 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Objetos Anidados · Encadenamiento Opcional · Funciones · Taller Lab 29",hero_sub:"Gestiona una colección de artefactos de museo usando cinco funciones para agregar etiquetas, mover artefactos, cambiar estado de exhibición, actualizar curadores y generar resúmenes.",ctrl_title:"// Ejecutar una función",fn_label:"función",id_label:"id",run_btn:"Ejecutar →",summary_idle:"La salida aparecerá aquí",coll_title:"// estado en vivo de collection",c1:"artifact?.title retorna undefined en vez de lanzar error si artifact es undefined — acceso seguro a objetos anidados.",c2:"Usado en addTag para prevenir duplicados: if (!artifact.tags.includes(tag)) antes del push.",c3:"buildSummary() retorna un string multilínea usando backticks — patrón para logs, emails e informes formateados.",ctx_title:"Uso en el mundo real",ctx_text:"esta arquitectura (objeto anidado + funciones pequeñas de propósito único) es exactamente cómo se gestiona el estado en museos, sistemas de inventario y CMS.",footer:"Auditor de Artefactos · Lab 29 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Objets Imbriqués · Chaînage Optionnel · Fonctions · Atelier Lab 29",hero_sub:"Gérez une collection d'artefacts de musée avec cinq fonctions pour ajouter des étiquettes, déplacer des artefacts, basculer l'état d'exposition, mettre à jour les conservateurs et générer des résumés.",ctrl_title:"// Exécuter une fonction",fn_label:"fonction",id_label:"id",run_btn:"Exécuter →",summary_idle:"La sortie apparaîtra ici",coll_title:"// état en direct de collection",c1:"artifact?.title retourne undefined au lieu de lancer une erreur — accès sécurisé aux objets imbriqués.",c2:"Utilisé dans addTag pour éviter les doublons: if (!artifact.tags.includes(tag)) avant le push.",c3:"buildSummary() retourne une chaîne multi-lignes avec des backticks — modèle pour logs, emails et rapports formatés.",ctx_title:"Usage réel",ctx_text:"cette architecture (objet imbriqué + petites fonctions à usage unique) est exactement la façon dont l'état est géré dans les musées et les CMS.",footer:"Auditeur de Provenance · Lab 29 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
const collection={101:{title:"Golden Mask",category:"Ceremonial",curator:{id:201,name:"Earl Sinclair"},locations:[{gallery:"Hall A",year:2020},{gallery:"Hall C",year:2024}],tags:["gold","egypt"],onDisplay:true},102:{title:"Bronze Tablet",category:"Inscription",curator:{id:202,name:"Robert Sinclair"},locations:[{gallery:"Archive Wing",year:2019}],tags:["bronze","writing"],onDisplay:false}};
function getArtifactTitle(id){const a=collection[id];return a?a.title:"Artifact not found";}
function addTag(id,tag){const a=collection[id];if(a&&!a.tags.includes(tag)){a.tags.push(tag);}}
function moveArtifact(id,gallery,year){const a=collection[id];if(a){a.locations.push({gallery,year});}}
function toggleDisplayStatus(id){const a=collection[id];if(a){a.onDisplay=!a.onDisplay;}}
function updateCurator(id,name){const a=collection[id];if(a){a.curator.name=name;}}
function buildSummary(id){const a=collection[id];if(!a)return"Artifact not found";const loc=a.locations[a.locations.length-1];return`${a.title}\nCategory: ${a.category}\nCurator: ${a.curator.name}\nCurrent Gallery: ${loc.gallery}\nOn Display: ${a.onDisplay}`;}
function renderCollection(){
  document.getElementById('coll-view').innerHTML=Object.entries(collection).map(([id,a])=>`
    <div class="art-row">
      <div class="art-header">
        <div class="art-id">#${id}</div>
        <div class="art-display ${a.onDisplay?'on':'off'}">${a.onDisplay?'On Display':'Off Display'}</div>
      </div>
      <div class="art-title">${a.title}</div>
      <div class="art-cat">${a.category}</div>
      <div class="art-curator">🏛 ${a.curator.name}</div>
      <div class="art-tags">${a.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="art-locations">${a.locations.map(l=>`${l.gallery} (${l.year})`).join(' → ')}</div>
    </div>`).join('');
}
function updateFields(){
  const fn=document.getElementById('fn-sel').value;
  const a2g=document.getElementById('arg2-group');
  const a3g=document.getElementById('arg3-group');
  const a2l=document.getElementById('arg2-label');
  const a2i=document.getElementById('fn-arg2');
  const a3l=document.getElementById('arg3-label');
  if(fn==='addTag'){a2g.style.display='block';a3g.style.display='none';a2l.textContent='tag';a2i.placeholder='e.g. ancient';}
  else if(fn==='moveArtifact'){a2g.style.display='block';a3g.style.display='block';a2l.textContent='gallery';a3l.textContent='year';a2i.placeholder='e.g. Hall D';}
  else if(fn==='updateCurator'){a2g.style.display='block';a3g.style.display='none';a2l.textContent='name';a2i.placeholder='e.g. Jane Smith';}
  else{a2g.style.display='none';a3g.style.display='none';}
}
function runFn(){
  const fn=document.getElementById('fn-sel').value;
  const id=parseInt(document.getElementById('fn-id').value);
  const arg2=document.getElementById('fn-arg2').value.trim();
  const arg3=parseInt(document.getElementById('fn-arg3').value)||2026;
  let output='';
  if(fn==='addTag'){if(arg2){addTag(id,arg2);output=`addTag(${id}, "${arg2}") → tags: ${JSON.stringify(collection[id]?.tags)}`;}else{output='⚠ Please enter a tag';}}
  else if(fn==='moveArtifact'){if(arg2){moveArtifact(id,arg2,arg3);output=`moveArtifact(${id}, "${arg2}", ${arg3}) → locations updated`;}else{output='⚠ Please enter a gallery name';}}
  else if(fn==='toggleDisplay'){toggleDisplayStatus(id);output=`toggleDisplayStatus(${id}) → onDisplay: ${collection[id]?.onDisplay}`;}
  else if(fn==='updateCurator'){if(arg2){updateCurator(id,arg2);output=`updateCurator(${id}, "${arg2}") → curator: ${collection[id]?.curator.name}`;}else{output='⚠ Please enter a name';}}
  else if(fn==='buildSummary'){output=buildSummary(id);}
  document.getElementById('summary-box').textContent=output;
  renderCollection();
}
renderCollection();
updateFields();
