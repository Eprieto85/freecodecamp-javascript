const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"if · else · boolean conditions · Lab 10",hero_sub:"Build boolean conditions and see which branch executes. The if/else pattern is the foundation of every decision in every program.",tl_label:"// Build your condition: if (a [op] b)",c1:"Executes the block only when the condition is truthy.",c2:"Executes when the if condition is falsy. Always paired with if.",c3:"Comparison operators return true or false. The result is a boolean.",c4:"Strict equality checks type AND value. Always prefer over == and !=.",ctx_title:"Real-world use",ctx_text:"if (user.isLoggedIn), if (score >= passingGrade), if (stock > 0) — every business rule in every app is an if/else at its core.",footer:"Logic Verifier · Lab 10 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"if · else · condiciones booleanas · Lab 10",hero_sub:"Construye condiciones booleanas y ve qué rama se ejecuta. El patrón if/else es la base de cada decisión en todo programa.",tl_label:"// Construye tu condición: if (a [op] b)",c1:"Ejecuta el bloque solo cuando la condición es verdadera.",c2:"Ejecuta cuando la condición if es falsa. Siempre va en par con if.",c3:"Los operadores de comparación retornan verdadero o falso. El resultado es un booleano.",c4:"La igualdad estricta verifica tipo Y valor. Siempre preferir sobre == y !=.",ctx_title:"Uso en el mundo real",ctx_text:"if (user.isLoggedIn), if (score >= passingGrade), if (stock > 0) — cada regla de negocio en toda app es un if/else en su núcleo.",footer:"Verificador Lógico · Lab 10 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"if · else · conditions booléennes · Lab 10",hero_sub:"Construisez des conditions booléennes et voyez quelle branche s'exécute.",tl_label:"// Construisez votre condition: if (a [op] b)",c1:"Exécute le bloc uniquement lorsque la condition est vraie.",c2:"Exécute quand la condition if est fausse. Toujours associé à if.",c3:"Les opérateurs de comparaison retournent vrai ou faux. Le résultat est un booléen.",c4:"L'égalité stricte vérifie le type ET la valeur. Toujours préférer à == et !=.",ctx_title:"Usage réel",ctx_text:"if (user.isLoggedIn), if (score >= passingGrade), if (stock > 0) — chaque règle métier dans chaque application est un if/else en son cœur.",footer:"Vérificateur Logique · Lab 10 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
function preset(a,op,b){document.getElementById('val-a').value=a;document.getElementById('val-b').value=b;const sel=document.getElementById('op-sel');for(let i=0;i<sel.options.length;i++){if(sel.options[i].value===op){sel.selectedIndex=i;break;}}eval_();}
function eval_(){
  const a=parseFloat(document.getElementById('val-a').value)||0;
  const b=parseFloat(document.getElementById('val-b').value)||0;
  const op=document.getElementById('op-sel').value;
  let res;
  if(op==='>') res=a>b;
  else if(op==='>=') res=a>=b;
  else if(op==='<') res=a<b;
  else if(op==='<=') res=a<=b;
  else if(op==='===') res=a===b;
  else res=a!==b;
  const exprMap={'>':`${a} > ${b}`,'>=': `${a} >= ${b}`,'<':`${a} < ${b}`,'<=':`${a} <= ${b}`,'===':`${a} === ${b}`,'!==':`${a} !== ${b}`};
  document.getElementById('res-expr').textContent=`if (${exprMap[op]})`;
  const bool=document.getElementById('res-bool');
  bool.textContent=res?'true':'false';
  bool.className='res-bool '+(res?'true':'false');
  document.getElementById('res-branch').textContent=res?'→ if block executes':'→ else block executes';
}
eval_();
