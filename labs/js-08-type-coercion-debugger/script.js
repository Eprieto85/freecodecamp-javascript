const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Type Coercion · Boolean → Number · Lab 08",hero_sub:"Click any expression to see exactly why JavaScript produces that result. Understanding coercion separates beginners from professional developers.",ex_title:"// Step-by-step coercion trace",c1:"Boolean true coerces to 1 in numeric context. false → 0.",c2:"null coerces to 0 numerically but evaluates as falsy in boolean context.",c3:"Numeric strings coerce to numbers with the unary + or when compared with ==.",c4:"Use === always. It compares type AND value, never coerces.",ctx_title:"Why this matters",ctx_text:"coercion bugs are among the most common bugs in JS interviews and production code. '0 == false' is true. Use === everywhere.",footer:"Type Coercion Debugger · Lab 08 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Coerción de Tipos · Boolean → Number · Lab 08",hero_sub:"Haz clic en cualquier expresión para ver exactamente por qué JavaScript produce ese resultado.",ex_title:"// Traza de coerción paso a paso",c1:"El booleano true se convierte a 1 en contexto numérico. false → 0.",c2:"null se convierte a 0 numéricamente pero evalúa como falsy en contexto booleano.",c3:"Las cadenas numéricas se convierten a números con + unario o cuando se comparan con ==.",c4:"Usa === siempre. Compara tipo Y valor, nunca coerciona.",ctx_title:"Por qué importa",ctx_text:"Los errores de coerción están entre los más comunes en entrevistas JS y código de producción. '0 == false' es verdadero. Usa === en todas partes.",footer:"Depurador de Coerción · Lab 08 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Coercition de Type · Boolean → Number · Lab 08",hero_sub:"Cliquez sur n'importe quelle expression pour voir exactement pourquoi JavaScript produit ce résultat.",ex_title:"// Trace de coercition étape par étape",c1:"Le booléen true se coerce en 1 dans un contexte numérique. false → 0.",c2:"null se coerce en 0 numériquement mais s'évalue comme falsy dans le contexte booléen.",c3:"Les chaînes numériques se coercent en nombres avec le + unaire ou lors d'une comparaison avec ==.",c4:"Utilisez toujours ===. Il compare le type ET la valeur, sans jamais coercer.",ctx_title:"Pourquoi cela compte",ctx_text:"Les bugs de coercition font partie des plus courants dans les entretiens JS et le code de production. '0 == false' est vrai. Utilisez === partout.",footer:"Débogueur de Coercition · Lab 08 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
const cases=[
  {expr:'true + true',result:'2',why:'Both booleans coerce to 1; 1+1=2',steps:['true → 1 (boolean to number)','true → 1','1 + 1 = 2']},
  {expr:'true + 1',result:'2',why:'true coerces to 1',steps:['true → 1 (boolean to number)','1 + 1 = 2']},
  {expr:'false + 1',result:'1',why:'false coerces to 0',steps:['false → 0 (boolean to number)','0 + 1 = 1']},
  {expr:'null + 1',result:'1',why:'null coerces to 0 numerically',steps:['null → 0 (null to number)','0 + 1 = 1']},
  {expr:'"5" + 3',result:'"53"',why:'+ with string = concatenation',steps:['"5" is a string','+ with string forces concatenation','"5" + "3" = "53"']},
  {expr:'"5" - 3',result:'2',why:'- forces numeric conversion',steps:['"5" → 5 (string to number)','5 - 3 = 2']},
  {expr:'0 == false',result:'true',why:'Both coerce to 0 — use ===',steps:['false → 0','0 == 0 → true','⚠ Use === to avoid this']},
  {expr:'0 === false',result:'false',why:'=== checks type too: number ≠ boolean',steps:['typeof 0 = "number"','typeof false = "boolean"','Different types → false']},
];
const wrap=document.getElementById('cases-wrap');
cases.forEach((c,i)=>{
  const el=document.createElement('div');
  el.className='case-card'+(i===0?' active':'');
  el.innerHTML=`<div class="case-expr">${c.expr}</div><div class="case-result">→ ${c.result}</div><div class="case-why">${c.why}</div>`;
  el.onclick=()=>{document.querySelectorAll('.case-card').forEach(x=>x.classList.remove('active'));el.classList.add('active');showSteps(c);};
  wrap.appendChild(el);
});
function showSteps(c){
  const ul=document.getElementById('ex-steps');
  ul.innerHTML='';
  c.steps.forEach((s,i)=>{
    const li=document.createElement('li');
    li.innerHTML=`<span>${i+1}.</span> ${s}`;
    ul.appendChild(li);
  });
}
showSteps(cases[0]);
