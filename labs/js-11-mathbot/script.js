const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Math.random() · Math.floor() · Math.round() · Lab 11",hero_sub:"Generate random numbers and watch all six Math methods work in real time. The Math object is used in every game, animation, and data simulation.",rng_label:"// Math.random() — click Generate",gen_btn:"Generate →",m_title:"// Math methods on the generated value",c1:"Returns a float ≥ 0 and < 1. Multiply and floor to get a range.",c2:"Rounds DOWN to the nearest integer. 4.9 → 4. Used to convert random floats to integers.",c3:"Rounds UP. 4.1 → 5. Useful for pagination: Math.ceil(total/perPage).",c4:"Rounds to nearest. 4.5 → 5, 4.4 → 4. Standard rounding rule.",c5:"Returns the largest. Used for clamping and comparison.",c6:"Returns the smallest. Pair with max to clamp a value in a range.",ctx_title:"Real-world use",ctx_text:"Math.floor(Math.random() * n) is in every shuffle algorithm. Math.ceil(total/perPage) is on every paginated list. Math.max(0, balance) prevents negative balances.",footer:"MathBot · Lab 11 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Math.random() · Math.floor() · Math.round() · Lab 11",hero_sub:"Genera números aleatorios y mira los seis métodos Math trabajar en tiempo real.",rng_label:"// Math.random() — haz clic en Generar",gen_btn:"Generar →",m_title:"// Métodos Math sobre el valor generado",c1:"Retorna un flotante ≥ 0 y < 1. Multiplica y aplica floor para obtener un rango.",c2:"Redondea HACIA ABAJO al entero más cercano. 4.9 → 4.",c3:"Redondea HACIA ARRIBA. 4.1 → 5. Útil para paginación.",c4:"Redondea al más cercano. 4.5 → 5, 4.4 → 4. Regla de redondeo estándar.",c5:"Retorna el mayor. Usado para ajuste y comparación.",c6:"Retorna el menor. Combinar con max para restringir un valor en un rango.",ctx_title:"Uso en el mundo real",ctx_text:"Math.floor(Math.random() * n) está en todo algoritmo de barajado. Math.ceil(total/perPage) está en toda lista paginada. Math.max(0, balance) previene saldos negativos.",footer:"MathBot · Lab 11 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Math.random() · Math.floor() · Math.round() · Lab 11",hero_sub:"Générez des nombres aléatoires et regardez les six méthodes Math fonctionner en temps réel.",rng_label:"// Math.random() — cliquez sur Générer",gen_btn:"Générer →",m_title:"// Méthodes Math sur la valeur générée",c1:"Retourne un flottant ≥ 0 et < 1. Multipliez et appliquez floor pour obtenir une plage.",c2:"Arrondit VERS LE BAS à l'entier le plus proche. 4.9 → 4.",c3:"Arrondit VERS LE HAUT. 4.1 → 5. Utile pour la pagination.",c4:"Arrondit au plus proche. 4.5 → 5, 4.4 → 4. Règle d'arrondi standard.",c5:"Retourne le plus grand. Utilisé pour le clamping et la comparaison.",c6:"Retourne le plus petit. À associer avec max pour restreindre une valeur.",ctx_title:"Usage réel",ctx_text:"Math.floor(Math.random() * n) est dans chaque algorithme de mélange. Math.ceil(total/perPage) est dans chaque liste paginée.",footer:"MathBot · Lab 11 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
let lastRaw=Math.random()*99+1;
function generate(){
  const mn=parseInt(document.getElementById('min-inp').value)||1;
  const mx=parseInt(document.getElementById('max-inp').value)||100;
  lastRaw=Math.random()*(mx-mn)+mn;
  const int=Math.floor(lastRaw);
  document.getElementById('rng-num').textContent=int;
  document.getElementById('rng-formula').textContent=`Math.floor(Math.random() * ${mx-mn} + ${mn}) = ${int}`;
  updateMethods(lastRaw,mn,mx);
}
function updateMethods(v,mn,mx){
  const methods=[
    {m:`Math.floor(${v.toFixed(4)})`,r:Math.floor(v),note:'rounds down'},
    {m:`Math.ceil(${v.toFixed(4)})`,r:Math.ceil(v),note:'rounds up'},
    {m:`Math.round(${v.toFixed(4)})`,r:Math.round(v),note:'nearest integer'},
    {m:`Math.max(${mn}, ${mx})`,r:Math.max(mn,mx),note:'largest of the two'},
    {m:`Math.min(${mn}, ${mx})`,r:Math.min(mn,mx),note:'smallest of the two'},
    {m:`Math.random()`,r:Math.random().toFixed(6),note:'new random 0–1 float'},
  ];
  const rows=document.getElementById('m-rows');
  rows.innerHTML='';
  methods.forEach(m=>{
    const r=document.createElement('div');r.className='m-row';
    r.innerHTML=`<span class="m-label">${m.m}</span><span class="m-val">→ ${m.r}</span><span class="m-note">${m.note}</span>`;
    rows.appendChild(r);
  });
}
generate();
