const T={en:{badge:"freeCodeCamp · JS Certification",hero_label:"Objects · Math.random() · Arrays · Lab 27",hero_sub:"The computer picks a random question and a random answer. See if it gets lucky — or watch getResults() catch its mistakes.",q_idle:"Press Play to start a round",play_btn:"▶ Play Round",result_idle:"—",score_wins:"Computer wins",score_rounds:"Rounds",score_losses:"Computer losses",c1:"Uses Math.floor(Math.random() * array.length) to return a uniformly random element from an array.",c2:"Same pattern applied to the question's choices array. Each option has equal probability of selection.",c3:"Compares computerChoice === question.answer. Returns a descriptive string — does not log, stays pure.",ctx_title:"Real-world use",ctx_text:"random selection from arrays powers recommendation engines, A/B test variant assignment, shuffle playlists, and load balancing.",footer:"Quiz Game · Lab 27 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Objetos · Math.random() · Arrays · Lab 27",hero_sub:"El computador elige una pregunta y una respuesta aleatoria. Mira si tiene suerte — o ve a getResults() atrapar sus errores.",q_idle:"Presiona Jugar para iniciar una ronda",play_btn:"▶ Jugar Ronda",result_idle:"—",score_wins:"Victorias del computador",score_rounds:"Rondas",score_losses:"Derrotas del computador",c1:"Usa Math.floor(Math.random() * array.length) para retornar un elemento uniformemente aleatorio.",c2:"Mismo patrón aplicado al array choices de la pregunta. Cada opción tiene igual probabilidad.",c3:"Compara computerChoice === question.answer. Retorna un string descriptivo — no loguea, se mantiene pura.",ctx_title:"Uso en el mundo real",ctx_text:"la selección aleatoria de arrays impulsa motores de recomendación, asignación de variantes A/B y listas de reproducción.",footer:"Juego de Quiz · Lab 27 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Objets · Math.random() · Tableaux · Lab 27",hero_sub:"L'ordinateur choisit une question et une réponse au hasard. Voyez s'il a de la chance — ou regardez getResults() attraper ses erreurs.",q_idle:"Appuyez sur Jouer pour commencer",play_btn:"▶ Jouer un Tour",result_idle:"—",score_wins:"Victoires de l'ordi",score_rounds:"Tours",score_losses:"Défaites de l'ordi",c1:"Utilise Math.floor(Math.random() * array.length) pour retourner un élément uniformément aléatoire.",c2:"Même modèle appliqué au tableau choices de la question.",c3:"Compare computerChoice === question.answer. Retourne une chaîne descriptive — ne logue pas, reste pure.",ctx_title:"Usage réel",ctx_text:"la sélection aléatoire dans les tableaux alimente les moteurs de recommandation et l'assignation de variantes A/B.",footer:"Jeu de Quiz · Lab 27 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}};
function setLang(l){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+l).classList.add('active');}
setLang('en');
const questions=[
  {category:"Science",question:"What is the chemical symbol for water?",choices:["H2O","CO2","O2","NaCl"],answer:"H2O"},
  {category:"Math",question:"What is the square root of 144?",choices:["10","11","12","14"],answer:"12"},
  {category:"History",question:"Who was the first president of the USA?",choices:["Abraham Lincoln","George Washington","Thomas Jefferson","John Adams"],answer:"George Washington"},
  {category:"Geography",question:"What is the capital of France?",choices:["London","Madrid","Berlin","Paris"],answer:"Paris"},
  {category:"Technology",question:"What does HTML stand for?",choices:["HyperText Markup Language","High Text Markup Language","HyperText Making Language","Hyper Tool Markup Language"],answer:"HyperText Markup Language"},
  {category:"Science",question:"How many planets are in the Solar System?",choices:["7","8","9","10"],answer:"8"},
  {category:"Geography",question:"What is the largest ocean on Earth?",choices:["Atlantic","Indian","Arctic","Pacific"],answer:"Pacific"},
  {category:"Math",question:"What is 15% of 200?",choices:["20","25","30","35"],answer:"30"}
];
function getRandomQuestion(qs){return qs[Math.floor(Math.random()*qs.length)];}
function getRandomComputerChoice(choices){return choices[Math.floor(Math.random()*choices.length)];}
function getResults(question,computerChoice){if(computerChoice===question.answer)return"The computer's choice is correct!";return`The computer's choice is wrong. The correct answer is: ${question.answer}`;}
let wins=0,losses=0,rounds=0;
function playRound(){
  const q=getRandomQuestion(questions);
  const cc=getRandomComputerChoice(q.choices);
  const result=getResults(q,cc);
  const isWin=cc===q.answer;
  document.getElementById('cat-tag').textContent=q.category;
  document.getElementById('q-text').textContent=q.question;
  const grid=document.getElementById('choices-grid');
  grid.innerHTML=q.choices.map(c=>`<div class="choice-btn ${c===cc?(isWin?'correct computer':'wrong computer'):''}">${c===cc?'🤖 ':''} ${c}</div>`).join('');
  const rt=document.getElementById('result-txt');
  rt.textContent=result;
  rt.className='result-txt '+(isWin?'win':'lose');
  rounds++;
  if(isWin)wins++;else losses++;
  document.getElementById('wins').textContent=wins;
  document.getElementById('losses').textContent=losses;
  document.getElementById('rounds').textContent=rounds;
}
