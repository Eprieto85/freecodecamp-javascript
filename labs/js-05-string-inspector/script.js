const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:".includes() · .slice() · Lab 05",hero_sub:"Slice any string visually. See includes(), slice(start, end), and slice(-n) in action — the same methods used in search engines and content parsers.",tl_label:"// Enter a string and slice parameters",run_btn:"Inspect →",c1:"Returns true/false. Used in search filters, feature detection, and permission checks.",c2:"Extracts from index 2 up to (not including) index 5. Non-destructive — original unchanged.",c3:"Negative index counts from the end. slice(-3) returns the last 3 characters.",ctx_title:"Real-world use",ctx_text:"email validation uses includes('@'), preview cards use slice(0,160)+'...', file extensions use slice(-4), and URL parsers use slice constantly.",footer:"String Inspector · Lab 05 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:".includes() · .slice() · Lab 05",hero_sub:"Corta cualquier cadena visualmente. Ve includes(), slice(inicio, fin) y slice(-n) en acción — los mismos métodos usados en motores de búsqueda.",tl_label:"// Ingresa una cadena y parámetros de corte",run_btn:"Inspeccionar →",c1:"Retorna verdadero/falso. Usado en filtros de búsqueda, detección de características y controles de permisos.",c2:"Extrae desde el índice 2 hasta (sin incluir) el índice 5. No destructivo — el original no cambia.",c3:"El índice negativo cuenta desde el final. slice(-3) retorna los últimos 3 caracteres.",ctx_title:"Uso en el mundo real",ctx_text:"La validación de email usa includes('@'), las tarjetas de vista previa usan slice(0,160)+'...', las extensiones de archivo usan slice(-4).",footer:"Inspector de Cadenas · Lab 05 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:".includes() · .slice() · Lab 05",hero_sub:"Découpez n'importe quelle chaîne visuellement. Voyez includes(), slice(début, fin) et slice(-n) en action.",tl_label:"// Entrez une chaîne et des paramètres de découpe",run_btn:"Inspecter →",c1:"Retourne vrai/faux. Utilisé dans les filtres de recherche, la détection de fonctionnalités et les vérifications de permissions.",c2:"Extrait de l'index 2 jusqu'à (sans inclure) l'index 5. Non destructif — l'original est inchangé.",c3:"L'index négatif compte depuis la fin. slice(-3) retourne les 3 derniers caractères.",ctx_title:"Usage réel",ctx_text:"La validation d'email utilise includes('@'), les cartes de prévisualisation utilisent slice(0,160)+'...', les extensions de fichier utilisent slice(-4).",footer:"Inspecteur de Chaînes · Lab 05 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
function run(){
  const s=document.getElementById('str-inp').value;
  const st=parseInt(document.getElementById('start-inp').value)||0;
  const en=parseInt(document.getElementById('end-inp').value)||s.length;
  const data=[
    {m:`str.includes("o")`,r:s.includes('o'),d:'Search for "o"'},
    {m:`str.slice(${st}, ${en})`,r:s.slice(st,en),d:`From index ${st} to ${en}`},
    {m:'str.slice(-5)',r:s.slice(-5),d:'Last 5 characters'},
    {m:'str.slice(0,1)',r:s.slice(0,1),d:'Only first character'},
    {m:'str.slice(str.indexOf(" ")+1)',r:s.slice(s.indexOf(' ')+1),d:'After first space'},
    {m:`str.includes("${s.slice(0,3)}")`,r:s.includes(s.slice(0,3)),d:`Does it include "${s.slice(0,3)}"?`},
  ];
  const el=document.getElementById('results');
  el.innerHTML='';
  data.forEach(d=>{
    const c=document.createElement('div');c.className='r-card';
    c.innerHTML=`<div class="r-method">${d.m}</div><div class="r-result">${JSON.stringify(d.r)}</div><div class="r-desc">${d.d}</div>`;
    el.appendChild(c);
  });
}
run();
