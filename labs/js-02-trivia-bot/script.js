const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"let · const · Reassignment · Lab 02",hero_sub:"Variable reassignment powers quizzes, score tracking, and state changes in every app. Test your JS knowledge here.",q_label:"// JavaScript variables quiz",fb_idle:"Select an answer",next_btn:"Next →",c1:"let allows reassignment. score = score + 1 is valid. Essential for counters and game state.",c2:"const prevents reassignment. Use for fixed configuration values, API keys, limits.",c3:"Prints the value of a variable to the browser console. Fundamental debugging tool.",ctx_title:"Real-world use",ctx_text:"let score = 0; score++ is in every game, quiz app, and analytics counter ever built. Knowing when to use let vs const is one of the first professional habits a developer builds.",footer:"Trivia Bot · Lab 02 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"let · const · Reasignación · Lab 02",hero_sub:"La reasignación de variables impulsa quizzes, seguimiento de puntuaciones y cambios de estado en toda app.",q_label:"// Quiz de variables JavaScript",fb_idle:"Selecciona una respuesta",next_btn:"Siguiente →",c1:"let permite reasignación. score = score + 1 es válido. Esencial para contadores y estado de juego.",c2:"const previene la reasignación. Usar para valores de configuración fijos, claves API, límites.",c3:"Imprime el valor de una variable en la consola del navegador. Herramienta de depuración fundamental.",ctx_title:"Uso en el mundo real",ctx_text:"let score = 0; score++ está en todo juego, app de quiz y contador de analíticas jamás construido.",footer:"Bot de Trivia · Lab 02 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"let · const · Réaffectation · Lab 02",hero_sub:"La réaffectation de variables alimente les quiz, le suivi des scores et les changements d'état dans chaque application.",q_label:"// Quiz de variables JavaScript",fb_idle:"Sélectionnez une réponse",next_btn:"Suivant →",c1:"let permet la réaffectation. score = score + 1 est valide. Essentiel pour les compteurs et l'état du jeu.",c2:"const empêche la réaffectation. À utiliser pour les valeurs de configuration fixes, les clés API.",c3:"Imprime la valeur d'une variable dans la console du navigateur. Outil de débogage fondamental.",ctx_title:"Usage réel",ctx_text:"let score = 0; score++ est dans chaque jeu, application de quiz et compteur d'analyses jamais créé.",footer:"Bot de Trivia · Lab 02 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
const questions=[
  {q:"Which keyword allows a variable to be reassigned?",code:"let x = 5;\n// later...\nx = 10; // valid?",opts:["let","const","var only","none"],ans:0},
  {q:"Which keyword prevents reassignment after declaration?",code:"const PI = 3.14;\nPI = 3; // ?",opts:["const","let","var","all of them"],ans:0},
  {q:"What does console.log('Hello') do?",code:"console.log('Hello');",opts:["Crashes the app","Prints to console","Saves to database","Sends an email"],ans:1},
  {q:"What is the value of score after this code?",code:"let score = 0;\nscore = score + 5;",opts:["0","5","undefined","Error"],ans:1},
  {q:"Which is a valid const declaration?",code:"",opts:["const x;","const x = 10;","const = 10;","const 10 = x;"],ans:1}
];
let current=0,score=0,answered=false;
function loadQ(){
  const q=questions[current];
  document.getElementById('q-text').textContent=q.q;
  document.getElementById('q-var').textContent=q.code;
  const grid=document.getElementById('options-grid');
  grid.innerHTML='';
  q.opts.forEach((o,i)=>{
    const b=document.createElement('button');b.className='opt-btn';b.textContent=o;
    b.onclick=()=>answer(i,b,q.ans);
    grid.appendChild(b);
  });
  document.getElementById('feedback').textContent='Select an answer';
  document.getElementById('feedback').className='feedback fb-idle';
  answered=false;
}
function answer(i,btn,correct){
  if(answered)return;answered=true;
  const fb=document.getElementById('feedback');
  if(i===correct){score++;btn.classList.add('correct');fb.textContent='✓ Correct!';fb.className='feedback fb-correct';}
  else{btn.classList.add('wrong');document.querySelectorAll('.opt-btn')[correct].classList.add('correct');fb.textContent='✗ Incorrect';fb.className='feedback fb-wrong';}
  document.getElementById('score-display').textContent='Score: '+score+' / '+(current+1);
}
function nextQ(){
  current=(current+1)%questions.length;
  if(current===0)score=0;
  loadQ();
  document.getElementById('score-display').textContent='Score: '+score+' / '+current;
}
loadQ();
