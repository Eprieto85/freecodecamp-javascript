const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:".length · [] · .indexOf() · Lab 04",hero_sub:"String inspection is at the core of search engines, validators, and text processors. Type any string to analyze it live.",tl_label:"// Enter a string to inspect",analyze_btn:"Analyze →",c1:"Returns the number of characters. Used in validation, pagination, and limits.",c2:"Bracket notation accesses a character by position (index). Zero-based.",c3:"Last character — classic pattern used in parsing and validation.",c4:"Returns position of first match, or -1 if not found. Used in search features.",ctx_title:"Real-world use",ctx_text:"str.length powers password validators, str[0] is used for initials/avatars, str.indexOf() is the backbone of search highlighting in every IDE.",footer:"Teacher Chatbot · Lab 04 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:".length · [] · .indexOf() · Lab 04",hero_sub:"La inspección de cadenas es el núcleo de motores de búsqueda, validadores y procesadores de texto.",tl_label:"// Ingresa una cadena para inspeccionar",analyze_btn:"Analizar →",c1:"Retorna el número de caracteres. Usado en validación, paginación y límites.",c2:"La notación de corchetes accede a un carácter por posición (índice). Base cero.",c3:"Último carácter — patrón clásico en análisis y validación.",c4:"Retorna la posición de la primera coincidencia, o -1 si no se encuentra.",ctx_title:"Uso en el mundo real",ctx_text:"str.length impulsa validadores de contraseñas, str[0] se usa para iniciales/avatares, str.indexOf() es la base del resaltado de búsqueda en todo IDE.",footer:"Chatbot Profesor · Lab 04 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:".length · [] · .indexOf() · Lab 04",hero_sub:"L'inspection de chaînes est au cœur des moteurs de recherche, validateurs et processeurs de texte.",tl_label:"// Entrez une chaîne à inspecter",analyze_btn:"Analyser →",c1:"Retourne le nombre de caractères. Utilisé dans la validation, la pagination et les limites.",c2:"La notation entre crochets accède à un caractère par position (index). Base zéro.",c3:"Dernier caractère — modèle classique utilisé dans l'analyse et la validation.",c4:"Retourne la position de la première correspondance, ou -1 si non trouvée.",ctx_title:"Usage réel",ctx_text:"str.length alimente les validateurs de mots de passe, str[0] est utilisé pour les initiales/avatars, str.indexOf() est la base de la mise en évidence de recherche.",footer:"Chatbot Professeur · Lab 04 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
function analyze(){
  const s=document.getElementById('str-inp').value;
  const data=[
    {m:'str.length',r:s.length,d:'Total characters'},
    {m:'str[0]',r:s[0]||'(empty)',d:'First character'},
    {m:'str[str.length-1]',r:s[s.length-1]||'(empty)',d:'Last character'},
    {m:'str.indexOf("o")',r:s.indexOf('o'),d:'-1 means not found'},
    {m:'str.indexOf("l")',r:s.indexOf('l'),d:'First occurrence'},
    {m:'str[Math.floor(str.length/2)]',r:s[Math.floor(s.length/2)]||'(empty)',d:'Middle character'},
  ];
  const grid=document.getElementById('results-grid');
  grid.innerHTML='';
  data.forEach(d=>{
    const c=document.createElement('div');c.className='r-card';
    c.innerHTML=`<div class="r-method">${d.m}</div><div class="r-result">${JSON.stringify(d.r)}</div><div class="r-desc">${d.d}</div>`;
    grid.appendChild(c);
  });
}
analyze();
