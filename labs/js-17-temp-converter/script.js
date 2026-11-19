const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Functions · Math · Lab 17",
    hero_sub:"convertCtoF is used in weather apps, IoT sensors and scientific software worldwide. Drag the slider to convert any temperature.",
    fahr_label:"convertCtoF(celsius) →",ref_title:"// Famous temperatures — click to set",
    ctx_title:"convertCtoF(celsius)",
    ctx_text:"this formula (C × 9/5 + 32) is a pure function: same input always gives the same output, no side effects. That predictability is why it appears in weather APIs, medical devices, industrial sensors and cooking apps globally.",
    footer:"Temp Converter · Lab 17 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Funciones · Matemáticas · Lab 17",
    hero_sub:"convertCtoF se usa en apps del clima, sensores IoT y software científico en todo el mundo. Arrastra el slider para convertir cualquier temperatura.",
    fahr_label:"convertCtoF(celsius) →",ref_title:"// Temperaturas famosas — haz clic para establecer",
    ctx_title:"convertCtoF(celsius)",
    ctx_text:"esta fórmula (C × 9/5 + 32) es una función pura: la misma entrada siempre da la misma salida, sin efectos secundarios. Por eso aparece en APIs del clima, dispositivos médicos, sensores industriales y apps de cocina.",
    footer:"Convertidor de Temperatura · Lab 17 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Fonctions · Maths · Lab 17",
    hero_sub:"convertCtoF est utilisé dans les apps météo, capteurs IoT et logiciels scientifiques partout dans le monde. Faites glisser pour convertir n'importe quelle température.",
    fahr_label:"convertCtoF(celsius) →",ref_title:"// Températures célèbres — cliquez pour définir",
    ctx_title:"convertCtoF(celsius)",
    ctx_text:"cette formule (C × 9/5 + 32) est une fonction pure : la même entrée donne toujours la même sortie, sans effets de bord. C'est pourquoi elle apparaît dans les API météo, appareils médicaux et apps de cuisine.",
    footer:"Convertisseur de Température · Lab 17 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

function convertCtoF(celsius){return celsius*(9/5)+32;}

const refs=[
  {emoji:'❄️',name:'Freezing',c:0},{emoji:'🌡️',name:'Body temp',c:37},
  {emoji:'☀️',name:'Hot day',c:40},{emoji:'💧',name:'Boiling',c:100},
  {emoji:'🧊',name:'Antarctic',c:-50}
];
const grid=document.getElementById('ref-grid');
refs.forEach(r=>{
  const f=convertCtoF(r.c);
  const c=document.createElement('div');c.className='ref-card';
  c.innerHTML=`<div class="ref-emoji">${r.emoji}</div><div class="ref-name">${r.name}</div><div class="ref-c">${r.c}°C</div><div class="ref-f">${f}°F</div>`;
  c.onclick=()=>{document.getElementById('temp-slider').value=r.c;update();};
  grid.appendChild(c);
});

function getColor(c){
  if(c<0)return'#60a5fa';
  if(c<20)return'#34d399';
  if(c<35)return'#fbbf24';
  return'#f87171';
}
function getEmoji(c){
  if(c<0)return'🧊';if(c<20)return'🌤️';if(c<35)return'☀️';return'🔥';
}

function update(){
  const c=parseInt(document.getElementById('temp-slider').value);
  const f=convertCtoF(c);
  document.getElementById('c-display').innerHTML=`${c} <span>°C</span>`;
  document.getElementById('f-display').textContent=Math.round(f*10)/10+'°F';
  document.getElementById('formula-line').textContent=`${c} × (9/5) + 32 = ${Math.round(f*10)/10}`;
  const pct=((c+50)/200)*100;
  const col=getColor(c);
  document.getElementById('thermo-fill').style.height=pct+'%';
  document.getElementById('thermo-fill').style.background=`linear-gradient(to top,${col},${col}88)`;
  document.getElementById('thermo-bulb').style.background=col+'33';
  document.getElementById('thermo-bulb').style.borderColor=col+'66';
  document.getElementById('thermo-bulb').textContent=getEmoji(c);
}
update();
