const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Switch Statement · Global Scope · Lab 18",
    hero_sub:"Card counting is a real strategy used in blackjack. The switch statement tracks a running count across all cards dealt.",
    deck_label:"// Click a card to deal it",deck_hint:"Green = count+1 · Gray = no change · Red = count-1",
    count_label:"Running Count",last_card_init:"— deal a card to begin —",reset_btn:"↺ Reset Count",
    history_title:"// Cards dealt this round",
    leg_low_title:"Low cards",leg_mid_title:"Neutral cards",leg_high_title:"High cards",
    ctx_title:"switch vs if/else",
    ctx_text:"a switch statement is cleaner than chained if/else when matching a single value against many cases. Here the global variable count persists across function calls — a key lesson about scope, state management and how closures work in real apps.",
    footer:"Card Counter · Lab 18 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Switch · Alcance Global · Lab 18",
    hero_sub:"Contar cartas es una estrategia real del blackjack. El switch rastrea un conteo acumulado a través de todas las cartas repartidas.",
    deck_label:"// Haz clic en una carta para repartirla",deck_hint:"Verde = conteo+1 · Gris = sin cambio · Rojo = conteo-1",
    count_label:"Conteo Acumulado",last_card_init:"— reparte una carta para comenzar —",reset_btn:"↺ Reiniciar Conteo",
    history_title:"// Cartas repartidas en esta ronda",
    leg_low_title:"Cartas bajas",leg_mid_title:"Cartas neutras",leg_high_title:"Cartas altas",
    ctx_title:"switch vs if/else",
    ctx_text:"un switch es más limpio que cadenas if/else cuando se compara un único valor con muchos casos. La variable global count persiste entre llamadas — lección clave sobre alcance y gestión de estado.",
    footer:"Contador de Cartas · Lab 18 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Switch · Portée Globale · Lab 18",
    hero_sub:"Compter les cartes est une vraie stratégie de blackjack. Le switch suit un comptage courant sur toutes les cartes distribuées.",
    deck_label:"// Cliquez sur une carte pour la distribuer",deck_hint:"Vert = comptage+1 · Gris = aucun changement · Rouge = comptage-1",
    count_label:"Comptage Courant",last_card_init:"— distribuez une carte pour commencer —",reset_btn:"↺ Réinitialiser",
    history_title:"// Cartes distribuées ce tour",
    leg_low_title:"Cartes basses",leg_mid_title:"Cartes neutres",leg_high_title:"Cartes hautes",
    ctx_title:"switch vs if/else",
    ctx_text:"un switch est plus lisible que des if/else chaînés pour faire correspondre une valeur unique à de nombreux cas. La variable globale count persiste entre les appels — leçon clé sur la portée et la gestion d'état.",
    footer:"Compteur de Cartes · Lab 18 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

let count=0;
const history=[];

function cardCounter(card){
  switch(card){
    case 2:case 3:case 4:case 5:case 6: count+=1; break;
    case 7:case 8:case 9: break;
    case 10:case"J":case"Q":case"K":case"A": count-=1; break;
  }
  return count>0?count+" Bet":count+" Hold";
}

const cardDefs=[
  {val:2,label:'2',cls:'low'},{val:3,label:'3',cls:'low'},{val:4,label:'4',cls:'low'},
  {val:5,label:'5',cls:'low'},{val:6,label:'6',cls:'low'},
  {val:7,label:'7',cls:'mid'},{val:8,label:'8',cls:'mid'},{val:9,label:'9',cls:'mid'},
  {val:10,label:'10',cls:'high'},{val:'J',label:'J',cls:'high'},
  {val:'Q',label:'Q',cls:'high'},{val:'K',label:'K',cls:'high'},{val:'A',label:'A',cls:'high'}
];

const grid=document.getElementById('cards-grid');
cardDefs.forEach(d=>{
  const b=document.createElement('button');b.className='card-btn '+d.cls;
  b.innerHTML=d.label+'<div class="card-label">'+(d.cls==='low'?'+1':d.cls==='mid'?'±0':'-1')+'</div>';
  b.onclick=()=>dealCard(d);
  grid.appendChild(b);
});

function dealCard(d){
  history.push(d);
  const result=cardCounter(d.val);
  document.getElementById('count-num').textContent=count;
  document.getElementById('count-num').style.color=count>0?'#34d399':count<0?'#f87171':'#fbbf24';
  const badge=document.getElementById('decision-badge');
  badge.textContent=count>0?'BET':'HOLD';
  badge.className='decision-badge '+(count>0?'dec-bet':'dec-hold');
  document.getElementById('last-card').textContent=`cardCounter(${typeof d.val==='string'?'"'+d.val+'"':d.val}) → "${result}"`;
  renderHistory();
}

function renderHistory(){
  const row=document.getElementById('history-row');
  row.innerHTML=history.map(d=>`<span class="h-chip h-${d.cls}">${d.label}</span>`).join('');
}

function resetCount(){
  count=0;history.length=0;
  document.getElementById('count-num').textContent='0';
  document.getElementById('count-num').style.color='#fbbf24';
  document.getElementById('decision-badge').textContent='HOLD';
  document.getElementById('decision-badge').className='decision-badge dec-hold';
  document.getElementById('last-card').innerHTML='<span data-i18n="last_card_init">— deal a card to begin —</span>';
  document.getElementById('history-row').innerHTML='<span style="font-size:0.75rem;color:rgba(254,243,199,0.2)">None yet</span>';
}
