const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Objects · validateManifest · normalizeUnits · Lab 25",hero_sub:"Fill out a cargo manifest and see three object-oriented functions validate, normalize, and process it in real time.",form_title:"// Enter manifest data",validate_btn:"Validate Manifest →",result_title:"// processManifest() output",status_idle:"Click Validate to run",c1:"Checks every required property. Returns {} if valid, or an object with \"Missing\"/\"Invalid\" per failing key.",c2:"Returns a new object with weight converted to kg (×0.45) without mutating the original. Uses spread {...obj}.",c3:"Strict integer check — rejects floats and NaN. Paired with > 0 to validate containerId.",ctx_title:"Real-world use",ctx_text:"this exact pattern (validate → normalize → process) is used in every logistics API, e-commerce checkout and form submission pipeline.",footer:"Cargo Manifest Validator · Lab 25 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Objetos · validateManifest · normalizeUnits · Lab 25",hero_sub:"Completa un manifiesto de carga y observa tres funciones orientadas a objetos validar, normalizar y procesar en tiempo real.",form_title:"// Ingresa los datos del manifiesto",validate_btn:"Validar Manifiesto →",result_title:"// Salida de processManifest()",status_idle:"Haz clic en Validar para ejecutar",c1:"Verifica cada propiedad requerida. Retorna {} si es válido, u objeto con \"Missing\"/\"Invalid\" por cada clave fallida.",c2:"Retorna nuevo objeto con peso convertido a kg (×0.45) sin mutar el original. Usa spread {...obj}.",c3:"Verificación estricta de entero — rechaza flotantes y NaN. Combinado con > 0 para validar containerId.",ctx_title:"Uso en el mundo real",ctx_text:"este patrón exacto (validar → normalizar → procesar) se usa en toda API logística, checkout de e-commerce y pipeline de formularios.",footer:"Validador de Manifiestos · Lab 25 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Objets · validateManifest · normalizeUnits · Lab 25",hero_sub:"Remplissez un manifeste de cargo et observez trois fonctions orientées objet valider, normaliser et traiter en temps réel.",form_title:"// Entrez les données du manifeste",validate_btn:"Valider le Manifeste →",result_title:"// Sortie de processManifest()",status_idle:"Cliquez sur Valider pour exécuter",c1:"Vérifie chaque propriété requise. Retourne {} si valide, ou un objet avec \"Missing\"/\"Invalid\" par clé échouée.",c2:"Retourne un nouvel objet avec le poids converti en kg (×0.45) sans muter l'original.",c3:"Vérification stricte d'entier — rejette les flottants et NaN. Couplé à > 0 pour valider containerId.",ctx_title:"Usage réel",ctx_text:"ce modèle exact (valider → normaliser → traiter) est utilisé dans chaque API logistique et pipeline de soumission de formulaire.",footer:"Validateur de Manifeste · Lab 25 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
function normalizeUnits(manifest){const copy={...manifest};if(copy.unit==='lb'){copy.weight=Math.round(copy.weight*0.45*100)/100;copy.unit='kg';}return copy;}
function validateManifest(manifest){const errors={};if(!('containerId' in manifest)){errors.containerId='Missing';}else if(!Number.isInteger(manifest.containerId)||manifest.containerId<=0){errors.containerId='Invalid';}if(!('destination' in manifest)){errors.destination='Missing';}else if(typeof manifest.destination!=='string'||manifest.destination.trim()===''){errors.destination='Invalid';}if(!('weight' in manifest)){errors.weight='Missing';}else if(typeof manifest.weight!=='number'||Number.isNaN(manifest.weight)||manifest.weight<=0){errors.weight='Invalid';}if(!('unit' in manifest)){errors.unit='Missing';}else if(manifest.unit!=='kg'&&manifest.unit!=='lb'){errors.unit='Invalid';}if(!('hazmat' in manifest)){errors.hazmat='Missing';}else if(typeof manifest.hazmat!=='boolean'){errors.hazmat='Invalid';}return errors;}
function runValidation(){
  const id=parseInt(document.getElementById('f-id').value);
  const dest=document.getElementById('f-dest').value;
  const weight=parseFloat(document.getElementById('f-weight').value);
  const unit=document.getElementById('f-unit').value;
  const hazmat=document.getElementById('f-hazmat').value==='true';
  const manifest={containerId:id,destination:dest,weight:weight,unit:unit,hazmat:hazmat};
  const errors=validateManifest(manifest);
  const box=document.getElementById('status-box');
  const msg=document.getElementById('status-msg');
  const normBox=document.getElementById('norm-box');
  const errList=document.getElementById('errors-list');
  if(Object.keys(errors).length===0){
    box.className='status-box success';
    msg.textContent=`Validation success: ${manifest.containerId}`;
    const norm=normalizeUnits(manifest);
    normBox.style.display='block';
    document.getElementById('norm-rows').innerHTML=Object.entries(norm).map(([k,v])=>`<div class="n-row"><span class="n-key">${k}</span><span class="n-val">${typeof v==='boolean'?String(v):v}</span></div>`).join('');
    errList.innerHTML='';
  }else{
    box.className='status-box error';
    msg.textContent=`Validation error: ${manifest.containerId}`;
    normBox.style.display='none';
    errList.innerHTML=Object.entries(errors).map(([k,v])=>`<div>⚠ ${k}: <span style="color:#f87171">${v}</span></div>`).join('');
  }
}
