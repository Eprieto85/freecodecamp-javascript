const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:".replace() · .replaceAll() · .repeat() · Lab 07",hero_sub:"Replace, repeat, and chain — the string mutation toolkit. Used in template engines, data cleaners, and URL builders worldwide.",tl_label:"// Enter a string, what to find, and what to replace with",run_btn:"Transform →",c1:"Replaces only the first match. Returns a new string.",c2:"Replaces every match. The go-to for bulk substitutions.",c3:"Returns the string repeated n times. Used for padding and separators.",c4:"Call multiple methods in sequence. Each returns a string the next can act on.",ctx_title:"Real-world use",ctx_text:"URL slugs: title.toLowerCase().replaceAll(' ', '-'). Log redaction: log.replaceAll(email, '***@***'). These cover 80% of text processing needs in real apps.",footer:"String Transformer · Lab 07 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:".replace() · .replaceAll() · .repeat() · Lab 07",hero_sub:"Reemplazar, repetir y encadenar — el kit de mutación de cadenas. Usado en motores de plantillas, limpiadores de datos y constructores de URLs.",tl_label:"// Ingresa una cadena, qué buscar y con qué reemplazar",run_btn:"Transformar →",c1:"Reemplaza solo la primera coincidencia. Retorna una nueva cadena.",c2:"Reemplaza cada coincidencia. El favorito para sustituciones masivas.",c3:"Retorna la cadena repetida n veces. Usado para relleno y separadores.",c4:"Llama múltiples métodos en secuencia. Cada uno retorna una cadena sobre la que el siguiente puede actuar.",ctx_title:"Uso en el mundo real",ctx_text:"Slugs de URL: title.toLowerCase().replaceAll(' ', '-'). Redacción de logs: log.replaceAll(email, '***@***'). Estos cubren el 80% de las necesidades de procesamiento de texto.",footer:"Transformador de Cadenas · Lab 07 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:".replace() · .replaceAll() · .repeat() · Lab 07",hero_sub:"Remplacer, répéter et enchaîner — la boîte à outils de mutation de chaînes.",tl_label:"// Entrez une chaîne, quoi chercher et par quoi remplacer",run_btn:"Transformer →",c1:"Remplace uniquement la première correspondance. Retourne une nouvelle chaîne.",c2:"Remplace chaque correspondance. Le préféré pour les substitutions en masse.",c3:"Retourne la chaîne répétée n fois. Utilisé pour le rembourrage et les séparateurs.",c4:"Appelle plusieurs méthodes en séquence. Chacune retourne une chaîne sur laquelle la suivante peut agir.",ctx_title:"Usage réel",ctx_text:"Slugs d'URL: title.toLowerCase().replaceAll(' ', '-'). Rédaction de logs: log.replaceAll(email, '***@***').",footer:"Transformateur de Chaînes · Lab 07 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
function run(){
  const s=document.getElementById('str-inp').value||'hello world';
  const f=document.getElementById('find-inp').value||'hello';
  const r=document.getElementById('rep-inp').value||'hi';
  const data=[
    {m:`str.replace("${f}","${r}")`,r:s.replace(f,r),d:'Only first occurrence replaced'},
    {m:`str.replaceAll("${f}","${r}")`,r:s.replaceAll(f,r),d:'All occurrences replaced'},
    {m:'str.repeat(2)',r:s.repeat(2),d:'String repeated twice'},
    {m:'str.replace(" ","-")',r:s.replace(' ','-'),d:'Space → dash (first only)'},
    {m:'str.replaceAll(" ","-")',r:s.replaceAll(' ','-'),d:'All spaces → dashes (URL slug)'},
    {m:'str.toLowerCase().replaceAll(" ","-")',r:s.toLowerCase().replaceAll(' ','-'),d:'Method chaining in action'},
  ];
  const el=document.getElementById('results');
  el.innerHTML='';
  data.forEach(d=>{
    const c=document.createElement('div');c.className='r-card';
    c.innerHTML=`<div class="r-method">${d.m}</div><div class="r-result">"${d.r}"</div><div class="r-desc">${d.d}</div>`;
    el.appendChild(c);
  });
}
run();
