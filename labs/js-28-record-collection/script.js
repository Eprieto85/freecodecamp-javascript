const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Objects · delete · bracket notation · Lab 28",hero_sub:"Use updateRecords() to add, update, or delete properties on a music collection. Watch the object change in real time.",ctrl_title:"// updateRecords(id, prop, value)",id_label:"id",prop_label:"prop",val_label:"value (empty string = delete)",update_btn:"Update Record →",coll_title:"// recordCollection live state",c1:"The delete operator removes a property entirely. Called when value is an empty string — the \"clear\" operation.",c2:"records[id][prop] uses variables as keys — essential when the property name is not known at write time.",c3:"When prop is \"tracks\" and a tracks array exists, push appends. If not, create [value] first.",ctx_title:"Real-world use",ctx_text:"this exact function pattern is the core of every CRUD operation in a REST API and every Redux reducer in a React app.",footer:"Record Collection · Lab 28 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Objetos · delete · notación de corchetes · Lab 28",hero_sub:"Usa updateRecords() para agregar, actualizar o eliminar propiedades en una colección musical. Observa el objeto cambiar en tiempo real.",ctrl_title:"// updateRecords(id, prop, value)",id_label:"id",prop_label:"prop",val_label:"value (cadena vacía = eliminar)",update_btn:"Actualizar Registro →",coll_title:"// recordCollection estado en vivo",c1:"El operador delete elimina una propiedad completamente. Se llama cuando value es cadena vacía.",c2:"records[id][prop] usa variables como claves — esencial cuando el nombre de propiedad no se conoce al escribir.",c3:"Cuando prop es \"tracks\" y ya existe el array, push agrega. Si no, crea [value] primero.",ctx_title:"Uso en el mundo real",ctx_text:"este patrón exacto es el núcleo de cada operación CRUD en una API REST y cada reducer de Redux en React.",footer:"Colección de Discos · Lab 28 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Objets · delete · notation par crochets · Lab 28",hero_sub:"Utilisez updateRecords() pour ajouter, mettre à jour ou supprimer des propriétés dans une collection musicale.",ctrl_title:"// updateRecords(id, prop, value)",id_label:"id",prop_label:"prop",val_label:"value (chaîne vide = supprimer)",update_btn:"Mettre à jour l'Enregistrement →",coll_title:"// recordCollection état en direct",c1:"L'opérateur delete supprime entièrement une propriété. Appelé quand value est une chaîne vide.",c2:"records[id][prop] utilise des variables comme clés — essentiel quand le nom de propriété n'est pas connu à l'écriture.",c3:"Quand prop est \"tracks\" et qu'un tableau tracks existe, push ajoute. Sinon, créez [value] d'abord.",ctx_title:"Usage réel",ctx_text:"ce modèle de fonction exact est le cœur de chaque opération CRUD dans une API REST et chaque réducteur Redux dans React.",footer:"Collection de Disques · Lab 28 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
const recordCollection={2548:{albumTitle:"Sgt. Pepper's Lonely Hearts Club Band",artist:"The Beatles",tracks:["Drive My Car","Norwegian Wood"]},2468:{albumTitle:"1999",artist:"Prince",tracks:["1999","Little Red Corvette"]},1245:{albumTitle:"Thriller",artist:"Michael Jackson",tracks:["Wanna Be Startin' Somethin'","Thriller","Beat It"]},5439:{albumTitle:"ABBA Gold"}};
function updateRecords(records,id,prop,value){if(value===''){delete records[id][prop];}else if(prop!=='tracks'){records[id][prop]=value;}else{if(!records[id].tracks){records[id].tracks=[];}records[id].tracks.push(value);}return records;}
function renderCollection(){
  const view=document.getElementById('coll-view');
  view.innerHTML=Object.entries(recordCollection).map(([id,rec])=>`
    <div class="album-row">
      <div class="album-id">#${id}</div>
      <div class="album-name">${rec.albumTitle||'<em style="opacity:.4">no title</em>'}</div>
      ${rec.artist?`<div class="album-artist">${rec.artist}</div>`:''}
      ${rec.tracks?`<div class="album-tracks">${rec.tracks.map(t=>`<span class="t-tag">${t}</span>`).join('')}</div>`:''}
    </div>`).join('');
}
function runUpdate(){
  const id=parseInt(document.getElementById('u-id').value);
  const prop=document.getElementById('u-prop').value.trim();
  const val=document.getElementById('u-val').value.trim();
  if(!prop)return;
  if(!recordCollection[id])return;
  updateRecords(recordCollection,id,prop,val);
  const log=document.getElementById('log-entries');
  const entry=document.createElement('div');
  entry.className='log-entry '+(val===''?'del':'ok');
  entry.textContent=val===''?`delete [${id}].${prop}`:`set [${id}].${prop} = "${val}"`;
  log.prepend(entry);
  renderCollection();
  document.getElementById('u-prop').value='';
  document.getElementById('u-val').value='';
}
renderCollection();
