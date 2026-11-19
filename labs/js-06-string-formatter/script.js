const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:".trim() · .toUpperCase() · .toLowerCase() · Lab 06",hero_sub:"Paste messy user input and watch it get cleaned up. These five methods are in every form validator, search engine, and data pipeline.",tl_label:"// Paste any messy string to format it",run_btn:"Format →",c1:"Removes spaces from both ends. Essential for form input cleaning.",c2:"Removes leading whitespace only. Keeps trailing spaces.",c3:"Removes trailing whitespace only. Keeps leading spaces.",c4:"All caps. Used for labels, error codes, and IDs.",c5:"All lowercase. Used for email, slug, and search normalization.",ctx_title:"Real-world use",ctx_text:"every login form calls .trim().toLowerCase() on the email before comparing. Database slugs use .toLowerCase().replace(/ /g,'-'). These are the first line of defense in input sanitization.",footer:"String Formatter · Lab 06 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:".trim() · .toUpperCase() · .toLowerCase() · Lab 06",hero_sub:"Pega entrada sucia y mira cómo se limpia. Estos cinco métodos están en todo validador, motor de búsqueda y pipeline de datos.",tl_label:"// Pega cualquier cadena desordenada para formatearla",run_btn:"Formatear →",c1:"Elimina espacios de ambos extremos. Esencial para limpiar entrada de formularios.",c2:"Elimina solo el espacio inicial. Mantiene los espacios finales.",c3:"Elimina solo el espacio final. Mantiene los espacios iniciales.",c4:"Todo en mayúsculas. Usado para etiquetas, códigos de error e IDs.",c5:"Todo en minúsculas. Usado para normalización de email, slug y búsqueda.",ctx_title:"Uso en el mundo real",ctx_text:"todo formulario de inicio de sesión llama a .trim().toLowerCase() en el email antes de comparar. Los slugs de base de datos usan .toLowerCase().replace(/ /g,'-').",footer:"Formateador de Cadenas · Lab 06 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:".trim() · .toUpperCase() · .toLowerCase() · Lab 06",hero_sub:"Collez une entrée désordonnée et regardez-la se nettoyer. Ces cinq méthodes sont dans chaque validateur, moteur de recherche et pipeline de données.",tl_label:"// Collez une chaîne désordonnée pour la formater",run_btn:"Formater →",c1:"Supprime les espaces des deux côtés. Essentiel pour nettoyer les entrées de formulaire.",c2:"Supprime uniquement l'espace de début. Conserve les espaces de fin.",c3:"Supprime uniquement l'espace de fin. Conserve les espaces de début.",c4:"Tout en majuscules. Utilisé pour les étiquettes, les codes d'erreur et les identifiants.",c5:"Tout en minuscules. Utilisé pour la normalisation des emails, slugs et recherches.",ctx_title:"Usage réel",ctx_text:"chaque formulaire de connexion appelle .trim().toLowerCase() sur l'email avant de comparer. Les slugs de base de données utilisent .toLowerCase().replace(/ /g,'-').",footer:"Formateur de Chaînes · Lab 06 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
function run(){
  const s=document.getElementById('str-inp').value;
  const data=[
    {m:'str.trim()',r:s.trim(),d:'No leading/trailing spaces'},
    {m:'str.trimStart()',r:s.trimStart(),d:'No leading spaces'},
    {m:'str.trimEnd()',r:s.trimEnd(),d:'No trailing spaces'},
    {m:'str.toUpperCase()',r:s.toUpperCase(),d:'All uppercase'},
    {m:'str.toLowerCase()',r:s.toLowerCase(),d:'All lowercase'},
    {m:'str.trim().toLowerCase()',r:s.trim().toLowerCase(),d:'Method chaining — cleaned + normalized'},
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
