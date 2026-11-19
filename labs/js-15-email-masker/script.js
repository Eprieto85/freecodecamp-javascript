const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Functions · String Methods · Lab 15",
    hero_sub:"Email masking protects user privacy in logs, confirmations and dashboards. Type any email to see it masked in real time.",
    tool_label:"// maskEmail(email) — live demo",mask_btn:"Mask →",
    algo_title:"// How the algorithm works",
    step1:"Find the @ position to split username from domain",
    step2:"Extract the username part before the @ symbol",
    step3:"Build the asterisk middle — length minus first and last characters",
    step4:"Concatenate first char + asterisks + last char + domain",
    ex_title:"// Click an example to try it",
    ctx_title:"Real-world use",
    ctx_text:'email masking appears in confirmation pages ("We sent a code to a*****e@gmail.com"), user logs, and admin dashboards. It is built from the same string methods you use every day: .indexOf(), .slice(), and .repeat().',
    footer:"Privacy Shield · Lab 15 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Funciones · Métodos de Cadena · Lab 15",
    hero_sub:"El enmascaramiento de email protege la privacidad del usuario en logs, confirmaciones y paneles. Escribe cualquier email para verlo enmascarado en tiempo real.",
    tool_label:"// maskEmail(email) — demo en vivo",mask_btn:"Enmascarar →",
    algo_title:"// Cómo funciona el algoritmo",
    step1:"Encontrar la posición del @ para separar el usuario del dominio",
    step2:"Extraer la parte del usuario antes del símbolo @",
    step3:"Construir los asteriscos del medio — longitud menos primer y último carácter",
    step4:"Concatenar primer carácter + asteriscos + último carácter + dominio",
    ex_title:"// Haz clic en un ejemplo para probarlo",
    ctx_title:"Uso en el mundo real",
    ctx_text:'El enmascaramiento de email aparece en páginas de confirmación, logs de usuario y paneles de administración. Se construye con los mismos métodos de cadena: .indexOf(), .slice() y .repeat().',
    footer:"Privacy Shield · Lab 15 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Fonctions · Méthodes de Chaîne · Lab 15",
    hero_sub:"Le masquage d'email protège la confidentialité des utilisateurs dans les logs et les tableaux de bord. Tapez n'importe quel email pour le voir masqué en temps réel.",
    tool_label:"// maskEmail(email) — démo en direct",mask_btn:"Masquer →",
    algo_title:"// Comment l'algorithme fonctionne",
    step1:"Trouver la position du @ pour séparer le nom d'utilisateur du domaine",
    step2:"Extraire la partie nom d'utilisateur avant le symbole @",
    step3:"Construire les astérisques du milieu — longueur moins le premier et dernier caractère",
    step4:"Concaténer premier caractère + astérisques + dernier caractère + domaine",
    ex_title:"// Cliquez sur un exemple pour l'essayer",
    ctx_title:"Usage réel",
    ctx_text:"Le masquage d'email apparaît dans les pages de confirmation, les logs utilisateur et les tableaux de bord. Il est construit avec les mêmes méthodes de chaîne : .indexOf(), .slice() et .repeat().",
    footer:"Privacy Shield · Lab 15 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

function maskEmail(email){
  const atIndex=email.indexOf("@");
  const username=email.slice(0,atIndex);
  const domain=email.slice(atIndex);
  if(username.length<=2){return username[0]+"*"+domain;}
  const firstChar=username[0];
  const lastChar=username[username.length-1];
  const asterisks="*".repeat(username.length-2);
  return firstChar+asterisks+lastChar+domain;
}

const examples=[
  "apple.pie@example.com","john.doe@gmail.com","ed@domain.com",
  "contact@company.org","x@y.com","hello.world@dev.io"
];
const grid=document.getElementById('ex-grid');
examples.forEach(em=>{
  const c=document.createElement('div');c.className='ex-card';
  c.innerHTML=`<div class="ex-in">${em}</div><div class="ex-out">${maskEmail(em)}</div>`;
  c.onclick=()=>setEmail(em);
  grid.appendChild(c);
});

function setEmail(em){
  document.getElementById('email-input').value=em;
  updateOutput(em);
}

function updateOutput(email){
  const atIdx=email.indexOf("@");
  if(atIdx<1){return;}
  const user=email.slice(0,atIdx);
  const domain=email.slice(atIdx);
  const masked=maskEmail(email);
  document.getElementById('out-input').textContent=email;
  document.getElementById('out-user').textContent=user;
  document.getElementById('out-domain').textContent=domain;
  document.getElementById('out-masked').textContent=masked;
}

function onType(){
  const v=document.getElementById('email-input').value;
  if(v.includes('@')&&v.indexOf('@')>0)updateOutput(v);
}
function runMask(){
  const v=document.getElementById('email-input').value.trim();
  if(v)updateOutput(v);
}
// Init with default
updateOutput("apple.pie@example.com");
