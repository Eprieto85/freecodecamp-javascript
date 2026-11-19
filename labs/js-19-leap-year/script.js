const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"if/else · Boolean Logic · Lab 19",
    hero_sub:"The Gregorian calendar's leap year rule is a classic compound boolean problem. Used in every scheduling and date library ever written.",
    tl_label:"// isLeapYear(year)",check_btn:"Check →",
    rules_title:"// The three-rule algorithm",
    rule1:"Must be divisible by 4. Base condition for all leap years.",
    rule2:"Century years (1800, 1900) are NOT leap years, unless…",
    rule3:"Exception: years divisible by 400 ARE leap years (2000, 2400).",
    years_title:"// Notable years — click to check",
    ctx_title:"Why it matters",
    ctx_text:"this exact compound boolean logic lives inside JavaScript's Date engine, Python's calendar module, Java's LocalDate, and every scheduling system in the world. Getting it wrong caused the Y2K leap-year bug in many enterprise systems.",
    footer:"Leap Year Calculator · Lab 19 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"if/else · Lógica Booleana · Lab 19",
    hero_sub:"La regla del año bisiesto del calendario gregoriano es un clásico problema booleano compuesto. Usada en toda biblioteca de fechas y programación.",
    tl_label:"// isLeapYear(year)",check_btn:"Verificar →",
    rules_title:"// El algoritmo de tres reglas",
    rule1:"Debe ser divisible por 4. Condición base para todos los años bisiestos.",
    rule2:"Los años centenarios (1800, 1900) NO son bisiestos, a menos que…",
    rule3:"Excepción: los años divisibles por 400 SÍ son bisiestos (2000, 2400).",
    years_title:"// Años notables — haz clic para verificar",
    ctx_title:"Por qué importa",
    ctx_text:"esta lógica booleana vive dentro del motor Date de JavaScript, el módulo calendar de Python, LocalDate de Java y cada sistema de programación del mundo.",
    footer:"Calculadora de Año Bisiesto · Lab 19 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"if/else · Logique Booléenne · Lab 19",
    hero_sub:"La règle de l'année bissextile du calendrier grégorien est un classique problème booléen composé. Utilisée dans toute bibliothèque de dates et de planification.",
    tl_label:"// isLeapYear(year)",check_btn:"Vérifier →",
    rules_title:"// L'algorithme en trois règles",
    rule1:"Doit être divisible par 4. Condition de base pour toutes les années bissextiles.",
    rule2:"Les années centenaires (1800, 1900) ne sont PAS bissextiles, sauf…",
    rule3:"Exception : les années divisibles par 400 SONT bissextiles (2000, 2400).",
    years_title:"// Années notables — cliquez pour vérifier",
    ctx_title:"Pourquoi c'est important",
    ctx_text:"cette logique booléenne vit dans le moteur Date de JavaScript, le module calendar de Python, LocalDate de Java et chaque système de planification au monde.",
    footer:"Calculateur d'Année Bissextile · Lab 19 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

function isLeapYear(year){
  if((year%4===0&&year%100!==0)||(year%400===0))return year+" is a leap year.";
  return year+" is not a leap year.";
}

const notableYears=[2024,2000,1900,1800,2100,2400];
const ygrid=document.getElementById('years-grid');
notableYears.forEach(yr=>{
  const leap=(yr%4===0&&yr%100!==0)||(yr%400===0);
  const c=document.createElement('div');c.className='yr-btn';
  c.innerHTML=`<div class="yr-num">${yr}</div><div class="yr-tag ${leap?'yt-leap':'yt-not'}">${leap?'✓ Leap':'✗ Not'}</div>`;
  c.onclick=()=>{document.getElementById('year-input').value=yr;checkLeap();};
  ygrid.appendChild(c);
});

function checkLeap(){
  const yr=parseInt(document.getElementById('year-input').value)||new Date().getFullYear();
  const leap=(yr%4===0&&yr%100!==0)||(yr%400===0);
  const result=isLeapYear(yr);
  document.getElementById('res-icon').textContent=leap?'🌙✨':'📅';
  document.getElementById('res-text').textContent=result;

  const r1=yr%4===0,r2=yr%100!==0,r3=yr%400===0;
  document.getElementById('r1-status').textContent=r1?'✓ passes':'✗ fails';
  document.getElementById('r1-status').className='rule-status '+(r1?'s-pass':'s-fail');
  document.getElementById('r2-status').textContent=r1?(r2?'✓ passes':'✗ fails (century)'):'— (n/a)';
  document.getElementById('r2-status').className='rule-status '+(r1?(r2?'s-pass':'s-fail'):'s-na');
  document.getElementById('r3-status').textContent=(r1&&!r2)?(r3?'✓ passes (÷400)':'✗ fails'):'— (n/a)';
  document.getElementById('r3-status').className='rule-status '+((r1&&!r2)?(r3?'s-pass':'s-fail'):'s-na');

  let reason='';
  if(r3)reason='divisible by 400 — always leap';
  else if(r1&&r2)reason='divisible by 4 AND not by 100';
  else if(r1&&!r2&&!r3)reason='divisible by 100 but NOT 400 — not a leap year';
  else reason='not divisible by 4';
  document.getElementById('res-reason').textContent=reason;
}
checkLeap();
