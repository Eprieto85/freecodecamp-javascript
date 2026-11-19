const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"if/else · .slice() · Lab 20",
    hero_sub:"Truncation is in every product card, tweet preview, and mobile UI ever built. Type a string and set the max length to see it cut live.",
    tl_label:"// truncateString(str, num)",num_label:"max length (num):",
    vis_title:"// Character-by-character preview",
    rw1:"Product cards limit titles to ~40 chars to keep grid layouts consistent.",
    rw2:"Tweet previews, bio excerpts, and notification texts all truncate to fit.",
    rw3:"File browsers shorten long path names and document titles for readability.",
    ctx_title:"truncateString(str, num)",
    ctx_text:'this two-line function (if str.length > num: return str.slice(0, num) + "...") is one of the most-used utilities in frontend development. It lives in every design system, every UI library, and every content management platform.',
    footer:"String Truncator · Lab 20 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"if/else · .slice() · Lab 20",
    hero_sub:"El truncado aparece en cada tarjeta de producto, vista previa de tweet y UI móvil jamás construida. Escribe un texto y ajusta la longitud máxima.",
    tl_label:"// truncateString(str, num)",num_label:"longitud máxima (num):",
    vis_title:"// Vista carácter por carácter",
    rw1:"Las tarjetas de producto limitan títulos a ~40 caracteres para mantener layouts consistentes.",
    rw2:"Las vistas previas de tweets, extractos de bios y textos de notificación se truncan para ajustarse.",
    rw3:"Los exploradores de archivos acortan nombres de ruta largos para legibilidad.",
    ctx_title:"truncateString(str, num)",
    ctx_text:'esta función de dos líneas es una de las utilidades más usadas en desarrollo frontend. Vive en cada sistema de diseño, biblioteca UI y plataforma de gestión de contenido.',
    footer:"Truncador de Cadenas · Lab 20 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"if/else · .slice() · Lab 20",
    hero_sub:"La troncature est présente dans chaque carte produit, aperçu de tweet et UI mobile jamais construit. Tapez une chaîne et définissez la longueur maximale.",
    tl_label:"// truncateString(str, num)",num_label:"longueur max (num):",
    vis_title:"// Aperçu caractère par caractère",
    rw1:"Les cartes produit limitent les titres à ~40 caractères pour garder les grilles cohérentes.",
    rw2:"Les aperçus de tweets, extraits de bios et textes de notification sont tous tronqués.",
    rw3:"Les explorateurs de fichiers raccourcissent les longs chemins pour la lisibilité.",
    ctx_title:"truncateString(str, num)",
    ctx_text:"cette fonction de deux lignes est l'un des utilitaires les plus utilisés en développement frontend. Elle vit dans chaque système de design, bibliothèque UI et plateforme CMS.",
    footer:"Tronqueur de Chaînes · Lab 20 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

function truncateString(str,num){
  if(str.length>num)return str.slice(0,num)+"...";
  return str;
}

function syncSlider(){document.getElementById('num-slider').value=document.getElementById('num-input').value;update();}
function syncNum(){document.getElementById('num-input').value=document.getElementById('num-slider').value;update();}

function update(){
  const str=document.getElementById('str-input').value;
  const num=parseInt(document.getElementById('num-input').value)||0;
  const result=truncateString(str,num);
  document.getElementById('out-len').textContent=str.length;
  document.getElementById('out-num').textContent=num;
  document.getElementById('out-trunc').textContent=result;
  renderViz(str,num,str.length>num);
}

function renderViz(str,num,willTrunc){
  const container=document.getElementById('vis-chars');
  container.innerHTML='';
  const maxShow=Math.min(str.length,80);
  for(let i=0;i<maxShow;i++){
    const ch=document.createElement('span');
    ch.className='ch '+(i<num||!willTrunc?'ch-keep':'ch-cut');
    ch.textContent=str[i]===' '?'·':str[i];
    container.appendChild(ch);
  }
  if(willTrunc){
    const dots=document.createElement('span');dots.className='ch ch-dots';dots.textContent='...';
    container.appendChild(dots);
  }
  if(str.length>maxShow){
    const more=document.createElement('span');more.className='ch ch-cut';more.textContent=`+${str.length-maxShow} more`;
    container.appendChild(more);
  }
}
update();
