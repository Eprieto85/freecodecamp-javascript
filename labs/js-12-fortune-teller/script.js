const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Math.random() · if / else if · Lab 12",hero_sub:"Random numbers + if/else if chains = every classification engine. Click the crystal ball and see the if/else branch that fired.",fortune_idle:"Ask your question…",ask_btn:"Ask the Oracle →",h_title:"// Fortune history",code_title:"// The function behind the oracle",c1:"Returns [0, 1). Used to map random floats to categories with if/else if.",c2:"Chained conditions check ranges in order. First truthy branch wins, rest are skipped.",c3:"Returns a value from a function. After return the function stops.",ctx_title:"Real-world use",ctx_text:"this exact pattern powers A/B testing, random content suggestions, loot drop systems in games, and traffic load balancers.",footer:"Fortune Teller · Lab 12 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Math.random() · if / else if · Lab 12",hero_sub:"Números aleatorios + cadenas if/else if = todo motor de clasificación. Haz clic en la bola de cristal.",fortune_idle:"Haz tu pregunta…",ask_btn:"Preguntar al Oráculo →",h_title:"// Historial de fortunas",code_title:"// La función detrás del oráculo",c1:"Retorna [0, 1). Usado para mapear flotantes aleatorios a categorías con if/else if.",c2:"Las condiciones encadenadas verifican rangos en orden. La primera rama verdadera gana.",c3:"Retorna un valor de una función. Después de return la función se detiene.",ctx_title:"Uso en el mundo real",ctx_text:"este patrón exacto impulsa pruebas A/B, sugerencias de contenido aleatorio, sistemas de botín en juegos y balanceadores de carga de tráfico.",footer:"Adivino · Lab 12 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Math.random() · if / else if · Lab 12",hero_sub:"Nombres aléatoires + chaînes if/else if = chaque moteur de classification. Cliquez sur la boule de cristal.",fortune_idle:"Posez votre question…",ask_btn:"Demander à l'Oracle →",h_title:"// Historique des fortunes",code_title:"// La fonction derrière l'oracle",c1:"Retourne [0, 1). Utilisé pour mapper des flottants aléatoires à des catégories avec if/else if.",c2:"Les conditions enchaînées vérifient les plages dans l'ordre. La première branche vraie gagne.",c3:"Retourne une valeur d'une fonction. Après return, la fonction s'arrête.",ctx_title:"Usage réel",ctx_text:"ce modèle exact alimente les tests A/B, les suggestions de contenu aléatoires, les systèmes de butin dans les jeux et les équilibreurs de charge de trafic.",footer:"Diseur de Bonne Aventure · Lab 12 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
const fortunes=[
  {text:'🌟 Great things ahead!',range:'n < 0.15',color:'#fbbf24'},
  {text:'⚠️ Proceed with caution.',range:'n < 0.30',color:'#f87171'},
  {text:'💡 A new idea approaches.',range:'n < 0.50',color:'#60a5fa'},
  {text:'🔄 Change is coming.',range:'n < 0.70',color:'#34d399'},
  {text:'🤝 Trust someone today.',range:'n < 0.85',color:'#a78bfa'},
  {text:'✨ Your moment is now.',range:'n >= 0.85',color:'#e879f9'},
];
function tell(){
  const n=Math.random();
  let idx;
  if(n<0.15)idx=0;
  else if(n<0.30)idx=1;
  else if(n<0.50)idx=2;
  else if(n<0.70)idx=3;
  else if(n<0.85)idx=4;
  else idx=5;
  const f=fortunes[idx];
  const ft=document.getElementById('fortune-text');
  ft.style.color=f.color;
  ft.textContent=f.text;
  document.getElementById('fortune-code').textContent=`n = ${n.toFixed(4)} → branch: if (${f.range})`;
  const li=document.createElement('li');
  li.textContent=`${f.text} [n=${n.toFixed(3)}]`;
  document.getElementById('h-list').prepend(li);
}
