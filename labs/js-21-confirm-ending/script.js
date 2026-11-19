const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:".slice() · String Comparison · Lab 21",
    hero_sub:"Checking if a string ends with a target is used in file type validation, URL routing and input sanitization. Without .endsWith() — pure slice logic.",
    tl_label:"// confirmEnding(str, target)",label_str:"str (main string)",label_tgt:"target (ending to check)",
    viz_title:"// Visual breakdown — str.slice(-target.length) === target",sv_full:"str (full string)",
    ex_title:"// Click an example",
    ctx_title:"Why not .endsWith()?",
    ctx_text:"freeCodeCamp specifically bans it here to teach you that .endsWith() is just sugar for str.slice(-target.length) === target. Understanding what a built-in method does under the hood separates a junior from a senior developer.",
    footer:"Confirm Ending · Lab 21 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:".slice() · Comparación de Cadenas · Lab 21",
    hero_sub:"Verificar si una cadena termina con un objetivo se usa en validación de tipos de archivo, enrutamiento de URL y saneamiento de entradas.",
    tl_label:"// confirmEnding(str, target)",label_str:"str (cadena principal)",label_tgt:"target (final a verificar)",
    viz_title:"// Desglose visual — str.slice(-target.length) === target",sv_full:"str (cadena completa)",
    ex_title:"// Haz clic en un ejemplo",
    ctx_title:"¿Por qué no .endsWith()?",
    ctx_text:"freeCodeCamp lo prohíbe específicamente para enseñarte que .endsWith() es solo azúcar sintáctico para str.slice(-target.length) === target. Entender qué hace un método integrado es lo que separa a un junior de un senior.",
    footer:"Confirmar Final · Lab 21 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:".slice() · Comparaison de Chaînes · Lab 21",
    hero_sub:"Vérifier si une chaîne se termine par une cible est utilisé dans la validation de type de fichier, le routage d'URL et la désinfection des entrées.",
    tl_label:"// confirmEnding(str, target)",label_str:"str (chaîne principale)",label_tgt:"target (fin à vérifier)",
    viz_title:"// Décomposition visuelle — str.slice(-target.length) === target",sv_full:"str (chaîne complète)",
    ex_title:"// Cliquez sur un exemple",
    ctx_title:"Pourquoi pas .endsWith()?",
    ctx_text:"freeCodeCamp l'interdit spécifiquement pour vous apprendre que .endsWith() est du sucre syntaxique pour str.slice(-target.length) === target. Comprendre ce que fait une méthode intégrée sépare un junior d'un senior.",
    footer:"Confirmer la Fin · Lab 21 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

function confirmEnding(str,target){return str.slice(-target.length)===target;}

const examples=[
  {str:"Bastian",tgt:"in"},{str:"Congratulation",tgt:"on"},{str:"Open sesame",tgt:"same"},
  {str:"Abstraction",tgt:"action"},{str:"Open sesame",tgt:"game"},{str:"Walking on water",tgt:"Walking on water"}
];
const grid=document.getElementById('ex-grid');
examples.forEach(e=>{
  const r=confirmEnding(e.str,e.tgt);
  const c=document.createElement('div');c.className='ex-card';
  c.innerHTML=`<div class="ex-str">"${e.str}"</div><div class="ex-tgt">ends with "${e.tgt}"?</div><div class="ex-bool ${r?'ex-t':'ex-f'}">${r}</div>`;
  c.onclick=()=>{document.getElementById('str-input').value=e.str;document.getElementById('tgt-input').value=e.tgt;update();};
  grid.appendChild(c);
});

function update(){
  const str=document.getElementById('str-input').value;
  const tgt=document.getElementById('tgt-input').value;
  if(!str||!tgt)return;
  const result=confirmEnding(str,tgt);
  const boolEl=document.getElementById('res-bool');
  boolEl.textContent=result.toString();
  boolEl.className='res-bool '+(result?'res-true':'res-false');
  document.getElementById('res-line').textContent=`confirmEnding("${str}", "${tgt}") → ${result}`;

  // Visualize
  const container=document.getElementById('sv-full');
  container.innerHTML='';
  const sliceStart=str.length-tgt.length;
  const sliced=str.slice(-tgt.length);
  for(let i=0;i<str.length&&i<60;i++){
    const ch=document.createElement('span');
    let cls='sv-ch sv-normal';
    if(i>=sliceStart){cls='sv-ch '+(result?'sv-match':'sv-mismatch');}
    ch.className=cls;
    ch.textContent=str[i];
    container.appendChild(ch);
  }
  const info=document.getElementById('sv-slice-info');
  info.innerHTML=`str.slice(-${tgt.length}) → <strong>"${sliced}"</strong> ${result?'=== ✓':'!== ✗'} target <strong>"${tgt}"</strong>`;
}
update();
