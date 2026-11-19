const T = {
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Functions · Arithmetic · Lab 13",hero_title:"JS Calculator",
    hero_sub:"Every e-commerce checkout, financial dashboard and scientific app runs on these six math functions. Try them live.",
    trace_title:"Live Function Trace",fns_title:"Functions Reference",f1:"addition",f2:"subtraction",f3:"multiplication",f4:"division (÷0 safe)",f5:"exponentiation",f6:"Math.sqrt()",
    context_bold:"Real-world applications:",context_text:"These 6 functions power e-commerce carts, currency converters, mortgage calculators and scientific tools. Notice how calculateQuotient handles division by zero — that's production-ready defensive programming.",
    footer:"JS Calculator · Lab 13 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Funciones · Aritmética · Lab 13",hero_title:"Calculadora JS",
    hero_sub:"Cada checkout de e-commerce, dashboard financiero y app científica usa estas seis funciones matemáticas. Pruébalas en vivo.",
    trace_title:"Traza de Funciones en Vivo",fns_title:"Referencia de Funciones",f1:"suma",f2:"resta",f3:"multiplicación",f4:"división (÷0 segura)",f5:"exponenciación",f6:"Math.sqrt()",
    context_bold:"Aplicaciones reales:",context_text:"Estas 6 funciones impulsan carritos de e-commerce, conversores de divisas, calculadoras de hipotecas y herramientas científicas. Nota cómo calculateQuotient maneja la división por cero.",
    footer:"Calculadora JS · Lab 13 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Fonctions · Arithmétique · Lab 13",hero_title:"Calculatrice JS",
    hero_sub:"Chaque caisse e-commerce, tableau de bord financier et application scientifique utilise ces six fonctions mathématiques. Essayez-les.",
    trace_title:"Trace de Fonctions en Direct",fns_title:"Référence des Fonctions",f1:"addition",f2:"soustraction",f3:"multiplication",f4:"division (÷0 sûre)",f5:"exponentiation",f6:"Math.sqrt()",
    context_bold:"Applications réelles:",context_text:"Ces 6 fonctions alimentent les paniers e-commerce, les convertisseurs de devises et les calculateurs hypothécaires. Remarquez comment calculateQuotient gère la division par zéro.",
    footer:"Calculatrice JS · Lab 13 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
  document.documentElement.lang=l;
}
setLang('en');

// JS functions from the lab
function calculateSum(a,b){return a+b;}
function calculateDifference(a,b){return a-b;}
function calculateProduct(a,b){return a*b;}
function calculateQuotient(a,b){return b===0?"Error: ÷ 0":a/b;}
function calculateSquare(n){return n**2;}
function calculateSquareRoot(n){return Math.sqrt(n);}

let current='',op=null,prev=null,dotUsed=false;

function inp(v){
  if(v==='.'&&dotUsed)return;
  if(v==='.')dotUsed=true;
  if(current==='0'&&v!=='.')current='';
  current+=v;
  document.getElementById('display').textContent=current||'0';
}
function setOp(o){
  if(current==='')return;
  prev=parseFloat(current);op=o;current='';dotUsed=false;
  document.getElementById('expr').textContent=prev+' '+o;
  document.getElementById('fn-tag').textContent='';
}
function clearCalc(){
  current='';op=null;prev=null;dotUsed=false;
  document.getElementById('display').textContent='0';
  document.getElementById('expr').textContent='';
  document.getElementById('fn-tag').textContent='';
  document.querySelectorAll('.trace-line').forEach(l=>l.classList.remove('active'));
}
function resetTrace(){document.querySelectorAll('.trace-line').forEach(l=>l.classList.remove('active'));}

function updateTrace(id,args,ret){
  resetTrace();
  const el=document.getElementById(id);
  el.classList.add('active');
  el.innerHTML=el.innerHTML.replace(/\(.*?\)/,`<span class="tl-args">(${args})</span>`).replace(/→.*/,`→ <span class="tl-ret">${ret}</span>`);
}

function calculate(){
  if(op===null){
    // Single arg ops already handled
    return;
  }
  const b=parseFloat(current);
  if(isNaN(b))return;
  let result,fnId,fnName;
  document.getElementById('expr').textContent=prev+' '+op+' '+b+' =';
  if(op==='+'){result=calculateSum(prev,b);fnId='tl-sum';fnName='calculateSum';}
  else if(op==='−'){result=calculateDifference(prev,b);fnId='tl-diff';fnName='calculateDifference';}
  else if(op==='×'){result=calculateProduct(prev,b);fnId='tl-prod';fnName='calculateProduct';}
  else if(op==='÷'){result=calculateQuotient(prev,b);fnId='tl-quot';fnName='calculateQuotient';}
  document.getElementById('display').textContent=typeof result==='number'?parseFloat(result.toFixed(10)).toString():result;
  document.getElementById('fn-tag').textContent=fnName+'('+prev+', '+b+')';
  resetTrace();
  document.getElementById(fnId).classList.add('active');
  current=typeof result==='number'?result.toString():'0';
  op=null;prev=null;dotUsed=false;
}
function calcSq(){
  const n=parseFloat(current||document.getElementById('display').textContent);
  if(isNaN(n))return;
  const r=calculateSquare(n);
  document.getElementById('expr').textContent=n+'²';
  document.getElementById('display').textContent=r;
  document.getElementById('fn-tag').textContent='calculateSquare('+n+')';
  resetTrace();document.getElementById('tl-sq').classList.add('active');
  current=r.toString();
}
function calcSqrt(){
  const n=parseFloat(current||document.getElementById('display').textContent);
  if(isNaN(n)||n<0)return;
  const r=parseFloat(calculateSquareRoot(n).toFixed(8));
  document.getElementById('expr').textContent='√'+n;
  document.getElementById('display').textContent=r;
  document.getElementById('fn-tag').textContent='calculateSquareRoot('+n+')';
  resetTrace();document.getElementById('tl-sqrt').classList.add('active');
  current=r.toString();
}
