const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Arrays · if/else if · Array Indexing · Lab 24",
    hero_sub:"Arrays as lookup tables — a classic pattern that replaces complex switch statements. Adjust par and strokes to see the score name live.",
    par_label:"PAR (hole target)",strokes_label:"STROKES (shots taken)",
    t_title:"// names[] array — all 7 score categories",
    ctx_title:"Array as lookup table",
    ctx_text:"instead of returning string literals inside each if/else branch, we store them in an array and return names[index]. This pattern is used in translation systems, state machines, scoring engines, HTTP status code maps and everywhere else a value needs to be mapped to a label.",
    footer:"Golf Score Translator · Lab 24 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Arrays · if/else if · Indexación · Lab 24",
    hero_sub:"Arrays como tablas de búsqueda — un patrón clásico que reemplaza switch complejos. Ajusta par y golpes para ver el nombre de la puntuación en vivo.",
    par_label:"PAR (objetivo del hoyo)",strokes_label:"GOLPES (tiros realizados)",
    t_title:"// array names[] — las 7 categorías de puntuación",
    ctx_title:"Array como tabla de búsqueda",
    ctx_text:"en lugar de retornar literales de cadena dentro de cada rama if/else, los almacenamos en un array y retornamos names[índice]. Este patrón se usa en sistemas de traducción, máquinas de estado, motores de puntuación y mapas de códigos HTTP.",
    footer:"Traductor de Puntuaciones · Lab 24 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Tableaux · if/else if · Indexation · Lab 24",
    hero_sub:"Tableaux comme tables de recherche — un modèle classique qui remplace les switch complexes. Ajustez le par et les coups pour voir le nom du score en direct.",
    par_label:"PAR (objectif du trou)",strokes_label:"COUPS (tirs effectués)",
    t_title:"// tableau names[] — les 7 catégories de score",
    ctx_title:"Tableau comme table de recherche",
    ctx_text:"au lieu de retourner des littéraux de chaîne dans chaque branche if/else, on les stocke dans un tableau et retourne names[index]. Ce modèle est utilisé dans les systèmes de traduction, machines d'état, moteurs de score et cartes de codes HTTP.",
    footer:"Traducteur de Score de Golf · Lab 24 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

const names=["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];
const scoreData=[
  {emoji:'🏆',name:'Hole-in-one!',cond:'strokes === 1',color:'#fbbf24'},
  {emoji:'🦅',name:'Eagle',cond:'strokes ≤ par-2',color:'#60a5fa'},
  {emoji:'🐦',name:'Birdie',cond:'strokes === par-1',color:'#34d399'},
  {emoji:'⛳',name:'Par',cond:'strokes === par',color:'#86efac'},
  {emoji:'😅',name:'Bogey',cond:'strokes === par+1',color:'#fb923c'},
  {emoji:'😬',name:'Double Bogey',cond:'strokes === par+2',color:'#f87171'},
  {emoji:'🏠',name:'Go Home!',cond:'strokes > par+2',color:'#c084fc'}
];

const grid=document.getElementById('scores-grid');
scoreData.forEach((s,i)=>{
  const c=document.createElement('div');c.className='sc-card';c.id='sc-'+i;
  c.innerHTML=`<div class="sc-emoji">${s.emoji}</div><div class="sc-name">${s.name}</div><div class="sc-cond">${s.cond}</div>`;
  grid.appendChild(c);
});

const descMap={
  0:'A single shot to sink the ball!',
  1:'2+ under par — exceptional play',
  2:'1 under par — great shot',
  3:'Exactly on par — steady play',
  4:'1 over par — close',
  5:'2 over par — needs work',
  6:'More than 2 over par — time to go home'
};

function golfScore(par,strokes){
  if(strokes===1)return 0;
  else if(strokes<=par-2)return 1;
  else if(strokes===par-1)return 2;
  else if(strokes===par)return 3;
  else if(strokes===par+1)return 4;
  else if(strokes===par+2)return 5;
  else return 6;
}

function update(){
  const par=parseInt(document.getElementById('par-slider').value);
  const strokes=parseInt(document.getElementById('strokes-slider').value);
  document.getElementById('par-val').textContent=par;
  document.getElementById('strokes-val').textContent=strokes;
  const idx=golfScore(par,strokes);
  const s=scoreData[idx];
  document.getElementById('res-emoji').textContent=s.emoji;
  document.getElementById('res-name').textContent=s.name;
  document.getElementById('res-name').style.color=s.color;
  document.getElementById('res-desc').textContent=descMap[idx];
  document.getElementById('res-formula').textContent=`golfScore(${par}, ${strokes}) → names[${idx}] → "${names[idx]}"`;
  document.querySelectorAll('.sc-card').forEach((c,i)=>c.classList.toggle('active',i===idx));
}
update();
