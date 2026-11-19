const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Functions · typeof · Lab 14",
    hero_sub:"Type checking is the foundation of data validation. Every user form, API and authentication system verifies types before processing. Try any value below.",
    input_label:"// Enter any JavaScript value to inspect",check_btn:"Inspect →",
    grid_title:"// JavaScript type examples — click to inspect",
    context_text:" uses typeof to check if a value is strictly a boolean. This pattern is used in form validators, API response parsers and permission systems — where the difference between true and \"true\" can break an entire app.",
    footer:"Type Detective · Lab 14 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Funciones · typeof · Lab 14",
    hero_sub:"La verificación de tipos es la base de la validación de datos. Todo formulario, API y sistema de autenticación verifica los tipos antes de procesar.",
    input_label:"// Ingresa cualquier valor de JavaScript para inspeccionar",check_btn:"Inspeccionar →",
    grid_title:"// Ejemplos de tipos JavaScript — haz clic para inspeccionar",
    context_text:" usa typeof para verificar si un valor es estrictamente un booleano. Este patrón se usa en validadores de formularios y sistemas de permisos.",
    footer:"Detective de Tipos · Lab 14 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Fonctions · typeof · Lab 14",
    hero_sub:"La vérification des types est la base de la validation des données. Chaque formulaire, API et système d'authentification vérifie les types avant de traiter.",
    input_label:"// Entrez n'importe quelle valeur JavaScript à inspecter",check_btn:"Inspecter →",
    grid_title:"// Exemples de types JavaScript — cliquez pour inspecter",
    context_text:" utilise typeof pour vérifier si une valeur est strictement un booléen. Ce modèle est utilisé dans les validateurs de formulaires et les systèmes de permissions.",
    footer:"Détective de Types · Lab 14 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

function booWho(bool){return typeof bool==="boolean";}

const typeData=[
  {ex:"true",raw:true,type:"boolean",color:"type-boolean",bw:true},
  {ex:"false",raw:false,type:"boolean",color:"type-boolean",bw:true},
  {ex:'"hello"',raw:"hello",type:"string",color:"type-string",bw:false},
  {ex:"42",raw:42,type:"number",color:"type-number",bw:false},
  {ex:"null",raw:null,type:"object",color:"type-object",bw:false},
  {ex:"[1,2,3]",raw:[1,2,3],type:"object",color:"type-object",bw:false},
  {ex:'NaN',raw:NaN,type:"number",color:"type-number",bw:false},
  {ex:'undefined',raw:undefined,type:"undefined",color:"type-undefined",bw:false},
  {ex:'function(){}',raw:function(){},type:"function",color:"type-function",bw:false}
];

const grid=document.getElementById('types-grid');
typeData.forEach(d=>{
  const c=document.createElement('div');c.className='tg-card';
  const bwResult=booWho(d.raw);
  c.innerHTML=`<div class="tg-type ${d.color}">${d.type}</div><div class="tg-example">${d.ex}</div><div class="tg-boowho ${bwResult?'bw-true':'bw-false'}">booWho → ${bwResult}</div>`;
  c.onclick=()=>showResult(d.raw,d.type,d.ex,d.color,bwResult);
  grid.appendChild(c);
});

function showResult(val,type,display,colorClass,bwResult){
  const area=document.getElementById('result-area');
  area.innerHTML=`<div class="result-card">
    <div class="type-badge ${colorClass}">${type}</div>
    <div class="result-text">
      <strong style="color:#fff">${display}</strong> → typeof = <code style="color:#64ffda">"${type}"</code><br>
      booWho(${display}) → <span class="result-bool ${bwResult?'bool-yes':'bool-no'}">${bwResult}</span>
    </div>
  </div>`;
}

function checkType(){
  const raw=document.getElementById('val-input').value.trim();
  if(!raw)return;
  let val,type,display=raw;
  try{val=Function('"use strict";return ('+raw+')')();type=typeof val;}catch(e){type='SyntaxError';val=undefined;}
  const colorMap={boolean:'type-boolean',number:'type-number',string:'type-string',object:'type-object',undefined:'type-undefined',function:'type-function'};
  const bw=type==='boolean'?booWho(val):false;
  showResult(val,type,display,colorMap[type]||'type-undefined',bw);
}
