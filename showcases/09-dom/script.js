const DEMOS=[
  {id:'storytelling',type:'taller',title:'Storytelling App',icon:'📖',
   desc:'Construye historias dinámicas cambiando elementos de la narrativa con manipulación directa del DOM.',
   concepts:['innerHTML','querySelector','addEventListener'],num:'T1',
   code:[
    {id:'st1',t:'<span class="kw">const</span> <span class="var">settings</span> <span class="op">=</span> [<span class="str">"bosque encantado"</span>, <span class="str">"ciudad futurista"</span>, <span class="str">"fondo marino"</span>];'},
    {id:'st2',t:'<span class="kw">const</span> <span class="var">heroes</span>   <span class="op">=</span> [<span class="str">"guerrera valiente"</span>, <span class="str">"joven inventor"</span>, <span class="str">"detective astuto"</span>];'},
    {id:'st3',t:'<span class="kw">const</span> <span class="var">items</span>    <span class="op">=</span> [<span class="str">"llave mágica"</span>, <span class="str">"mapa antiguo"</span>, <span class="str">"cristal roto"</span>];'},
    {id:'st4',t:''},
    {id:'st5',t:'<span class="kw">function</span> <span class="fn">buildStory</span>() {'},
    {id:'st6',t:'  <span class="kw">const</span> <span class="var">txt</span> <span class="op">=</span> <span class="str">`En un <strong>&lt;strong&gt;\${s}&lt;/strong&gt;</strong>, `</span>'},
    {id:'st7',t:'               <span class="op">+</span> <span class="str">`una <strong>&lt;strong&gt;\${h}&lt;/strong&gt;</strong> `</span>'},
    {id:'st8',t:'               <span class="op">+</span> <span class="str">`encontró <strong>&lt;strong&gt;\${i}&lt;/strong&gt;</strong>.`</span>;'},
    {id:'st9',t:'  <span class="cmt">// Aquí actualizamos el DOM:</span>'},
    {id:'st10',t:'  <span class="var">display</span>.<span class="fn">innerHTML</span> <span class="op">=</span> <span class="var">txt</span>;'},
    {id:'st11',t:'}'},
    {id:'st12',t:''},
    {id:'st13',t:'<span class="var">btnSetting</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="op">=></span> {'},
    {id:'st14',t:'  <span class="var">si</span> <span class="op">=</span> (<span class="var">si</span> <span class="op">+</span> <span class="num">1</span>) <span class="op">%</span> <span class="var">settings</span>.<span class="fn">length</span>;'},
    {id:'st15',t:'  <span class="fn">buildStory</span>();'},
    {id:'st16',t:'});'},
   ]},
  {id:'emojireactor',type:'taller',title:'Emoji Reactor',icon:'💬',
   desc:'Sistema de reacciones tipo red social. Demuestra delegación de eventos y manipulación de dataset.',
   concepts:['addEventListener','event delegation','dataset'],num:'T2',
   code:[
    {id:'er1',t:'<span class="kw">const</span> <span class="var">container</span> <span class="op">=</span> <span class="var">document</span>.<span class="fn">querySelector</span>(<span class="str">".reactions-row"</span>);'},
    {id:'er2',t:''},
    {id:'er3',t:'<span class="cmt">// Delegación: un solo listener para todos los botones</span>'},
    {id:'er4',t:'<span class="var">container</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (<span class="var">event</span>) <span class="op">=></span> {'},
    {id:'er5',t:'  <span class="kw">const</span> <span class="var">btn</span> <span class="op">=</span> <span class="var">event</span>.<span class="var">target</span>.<span class="fn">closest</span>(<span class="str">".react-btn"</span>);'},
    {id:'er6',t:'  <span class="kw">if</span> (<span class="op">!</span><span class="var">btn</span>) <span class="kw">return</span>;'},
    {id:'er7',t:''},
    {id:'er8',t:'  <span class="cmt">// Leemos el contador del atributo dataset</span>'},
    {id:'er9',t:'  <span class="kw">const</span> <span class="var">count</span> <span class="op">=</span> <span class="fn">parseInt</span>(<span class="var">btn</span>.<span class="var">dataset</span>.<span class="var">count</span>) <span class="op">||</span> <span class="num">0</span>;'},
    {id:'er10',t:''},
    {id:'er11',t:'  <span class="cmt">// Actualizamos el dataset y el DOM</span>'},
    {id:'er12',t:'  <span class="var">btn</span>.<span class="var">dataset</span>.<span class="var">count</span> <span class="op">=</span> <span class="var">count</span> <span class="op">+</span> <span class="num">1</span>;'},
    {id:'er13',t:'  <span class="var">btn</span>.<span class="fn">querySelector</span>(<span class="str">".react-count"</span>)'},
    {id:'er14',t:'      .<span class="var">textContent</span> <span class="op">=</span> <span class="var">count</span> <span class="op">+</span> <span class="num">1</span>;'},
    {id:'er15',t:'  <span class="var">btn</span>.<span class="var">classList</span>.<span class="fn">toggle</span>(<span class="str">"reacted"</span>);'},
    {id:'er16',t:'});'},
   ]},
  {id:'musicfilter',type:'taller',title:'Music Instrument Filter',icon:'🎵',
   desc:'Tienda de instrumentos con filtros dinámicos por categoría usando classList y querySelectorAll.',
   concepts:['querySelectorAll','classList.toggle','filtering'],num:'T3',
   code:[
    {id:'mf1',t:'<span class="kw">const</span> <span class="var">filterBtns</span>  <span class="op">=</span> <span class="var">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".mf-btn"</span>);'},
    {id:'mf2',t:'<span class="kw">const</span> <span class="var">instruments</span> <span class="op">=</span> <span class="var">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".instrument-card"</span>);'},
    {id:'mf3',t:''},
    {id:'mf4',t:'<span class="var">filterBtns</span>.<span class="fn">forEach</span>((<span class="var">btn</span>) <span class="op">=></span> {'},
    {id:'mf5',t:'  <span class="var">btn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="op">=></span> {'},
    {id:'mf6',t:'    <span class="cmt">// Actualizamos el botón activo</span>'},
    {id:'mf7',t:'    <span class="var">filterBtns</span>.<span class="fn">forEach</span>(<span class="var">b</span> <span class="op">=></span> <span class="var">b</span>.<span class="var">classList</span>.<span class="fn">remove</span>(<span class="str">"active"</span>));'},
    {id:'mf8',t:'    <span class="var">btn</span>.<span class="var">classList</span>.<span class="fn">add</span>(<span class="str">"active"</span>);'},
    {id:'mf9',t:''},
    {id:'mf10',t:'    <span class="kw">const</span> <span class="var">cat</span> <span class="op">=</span> <span class="var">btn</span>.<span class="var">dataset</span>.<span class="var">filter</span>;'},
    {id:'mf11',t:''},
    {id:'mf12',t:'    <span class="var">instruments</span>.<span class="fn">forEach</span>((<span class="var">card</span>) <span class="op">=></span> {'},
    {id:'mf13',t:'      <span class="kw">const</span> <span class="var">show</span> <span class="op">=</span> <span class="var">cat</span> <span class="op">===</span> <span class="str">"all"</span>'},
    {id:'mf14',t:'                 <span class="op">||</span> <span class="var">card</span>.<span class="var">dataset</span>.<span class="var">category</span> <span class="op">===</span> <span class="var">cat</span>;'},
    {id:'mf15',t:'      <span class="var">card</span>.<span class="var">classList</span>.<span class="fn">toggle</span>(<span class="str">"hidden"</span>, <span class="op">!</span><span class="var">show</span>);'},
    {id:'mf16',t:'    });'},
    {id:'mf17',t:'  });'},
    {id:'mf18',t:'});'},
   ]},
  {id:'rps',type:'taller',title:'Rock Paper Scissors',icon:'🪨',
   desc:'Juego clásico contra la computadora. Demuestra eventos de clic, lógica condicional y actualización del DOM.',
   concepts:['Math.random()','textContent','comparisons'],num:'T4',
   code:[
    {id:'rp1',t:'<span class="kw">const</span> <span class="var">opciones</span> <span class="op">=</span> [<span class="str">"🪨"</span>, <span class="str">"📄"</span>, <span class="str">"✂️"</span>];'},
    {id:'rp2',t:''},
    {id:'rp3',t:'<span class="kw">function</span> <span class="fn">jugar</span>(<span class="var">playerIdx</span>) {'},
    {id:'rp4',t:'  <span class="cmt">// La computadora elige al azar</span>'},
    {id:'rp5',t:'  <span class="kw">const</span> <span class="var">compIdx</span> <span class="op">=</span> <span class="fn">Math.floor</span>(<span class="fn">Math.random</span>() <span class="op">*</span> <span class="num">3</span>);'},
    {id:'rp6',t:''},
    {id:'rp7',t:'  <span class="cmt">// Actualizamos el DOM con las elecciones</span>'},
    {id:'rp8',t:'  <span class="var">playerPick</span>.<span class="var">textContent</span> <span class="op">=</span> <span class="var">opciones</span>[<span class="var">playerIdx</span>];'},
    {id:'rp9',t:'  <span class="var">compPick</span>.<span class="var">textContent</span>   <span class="op">=</span> <span class="var">opciones</span>[<span class="var">compIdx</span>];'},
    {id:'rp10',t:''},
    {id:'rp11',t:'  <span class="cmt">// Calculamos el resultado</span>'},
    {id:'rp12',t:'  <span class="kw">const</span> <span class="var">res</span> <span class="op">=</span> <span class="fn">getResult</span>(<span class="var">playerIdx</span>, <span class="var">compIdx</span>);'},
    {id:'rp13',t:'  <span class="var">resultEl</span>.<span class="var">textContent</span> <span class="op">=</span> <span class="var">res</span>;'},
    {id:'rp14',t:'}'},
    {id:'rp15',t:''},
    {id:'rp16',t:'<span class="kw">function</span> <span class="fn">getResult</span>(<span class="var">p</span>, <span class="var">c</span>) {'},
    {id:'rp17',t:'  <span class="kw">if</span> (<span class="var">p</span> <span class="op">===</span> <span class="var">c</span>) <span class="kw">return</span> <span class="str">"¡Empate!"</span>;'},
    {id:'rp18',t:'  <span class="kw">if</span> ((<span class="var">p</span> <span class="op">-</span> <span class="var">c</span> <span class="op">+</span> <span class="num">3</span>) <span class="op">%</span> <span class="num">3</span> <span class="op">===</span> <span class="num">1</span>) <span class="kw">return</span> <span class="str">"¡Ganaste! 🎉"</span>;'},
    {id:'rp19',t:'  <span class="kw">return</span> <span class="str">"¡Perdiste! 😔"</span>;'},
    {id:'rp20',t:'}'},
   ]},
  {id:'favorites',type:'lab',title:'Favorite Icon Toggler',icon:'❤️',
   desc:'Tarjetas con botón de favorito. Demuestra classList.toggle, setAttribute y estado visual reactivo.',
   concepts:['classList.toggle','setAttribute','aria'],num:'L1',
   code:[
    {id:'fv1',t:'<span class="kw">const</span> <span class="var">cards</span> <span class="op">=</span> <span class="var">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".photo-card"</span>);'},
    {id:'fv2',t:''},
    {id:'fv3',t:'<span class="var">cards</span>.<span class="fn">forEach</span>((<span class="var">card</span>) <span class="op">=></span> {'},
    {id:'fv4',t:'  <span class="kw">const</span> <span class="var">btn</span> <span class="op">=</span> <span class="var">card</span>.<span class="fn">querySelector</span>(<span class="str">".heart-btn"</span>);'},
    {id:'fv5',t:''},
    {id:'fv6',t:'  <span class="var">btn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="op">=></span> {'},
    {id:'fv7',t:'    <span class="cmt">// toggle devuelve true si la clase fue agregada</span>'},
    {id:'fv8',t:'    <span class="kw">const</span> <span class="var">isFav</span> <span class="op">=</span> <span class="var">card</span>.<span class="var">classList</span>.<span class="fn">toggle</span>(<span class="str">"favorited"</span>);'},
    {id:'fv9',t:''},
    {id:'fv10',t:'    <span class="cmt">// Actualizamos el aria-label para accesibilidad</span>'},
    {id:'fv11',t:'    <span class="var">btn</span>.<span class="fn">setAttribute</span>(<span class="str">"aria-label"</span>,'},
    {id:'fv12',t:'      <span class="var">isFav</span> <span class="op">?</span> <span class="str">"Quitar favorito"</span> <span class="op">:</span> <span class="str">"Agregar favorito"</span>'},
    {id:'fv13',t:'    );'},
    {id:'fv14',t:'    <span class="var">btn</span>.<span class="var">textContent</span> <span class="op">=</span> <span class="var">isFav</span> <span class="op">?</span> <span class="str">"❤️"</span> <span class="op">:</span> <span class="str">"🤍"</span>;'},
    {id:'fv15',t:'  });'},
    {id:'fv16',t:'});'},
   ]},
  {id:'counter',type:'lab',title:'Real-Time Counter',icon:'🔢',
   desc:'Contador en tiempo real con feedback visual de color según el valor. Demuestra manipulación de textContent.',
   concepts:['textContent','className','state'],num:'L2',
   code:[
    {id:'ct1',t:'<span class="kw">let</span> <span class="var">count</span> <span class="op">=</span> <span class="num">0</span>;'},
    {id:'ct2',t:'<span class="kw">const</span> <span class="var">display</span> <span class="op">=</span> <span class="var">document</span>.<span class="fn">getElementById</span>(<span class="str">"count-display"</span>);'},
    {id:'ct3',t:''},
    {id:'ct4',t:'<span class="var">incrementBtn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="op">=></span> {'},
    {id:'ct5',t:'  <span class="var">count</span><span class="op">++</span>;'},
    {id:'ct6',t:'  <span class="fn">updateDisplay</span>();'},
    {id:'ct7',t:'});'},
    {id:'ct8',t:''},
    {id:'ct9',t:'<span class="var">decrementBtn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="op">=></span> {'},
    {id:'ct10',t:'  <span class="var">count</span><span class="op">--</span>;'},
    {id:'ct11',t:'  <span class="fn">updateDisplay</span>();'},
    {id:'ct12',t:'});'},
    {id:'ct13',t:''},
    {id:'ct14',t:'<span class="kw">function</span> <span class="fn">updateDisplay</span>() {'},
    {id:'ct15',t:'  <span class="cmt">// Actualizamos el texto</span>'},
    {id:'ct16',t:'  <span class="var">display</span>.<span class="var">textContent</span> <span class="op">=</span> <span class="var">count</span>;'},
    {id:'ct17',t:'  <span class="cmt">// Clase según el valor para cambiar el color</span>'},
    {id:'ct18',t:'  <span class="var">display</span>.<span class="var">className</span> <span class="op">=</span> <span class="str">"counter-num "</span>'},
    {id:'ct19',t:'    <span class="op">+</span> (<span class="var">count</span> <span class="op">></span> <span class="num">0</span> <span class="op">?</span> <span class="str">"pos"</span> <span class="op">:</span> <span class="var">count</span> <span class="op"><</span> <span class="num">0</span> <span class="op">?</span> <span class="str">"neg"</span> <span class="op">:</span> <span class="str">"zero"</span>);'},
    {id:'ct20',t:'}'},
   ]},
  {id:'lightbox',type:'lab',title:'Lightbox Viewer',icon:'🖼️',
   desc:'Galería con vista ampliada al hacer clic. Demuestra delegación de eventos y manipulación de style.display.',
   concepts:['event delegation','style.display','closest()'],num:'L3',
   code:[
    {id:'lb1',t:'<span class="kw">const</span> <span class="var">gallery</span>  <span class="op">=</span> <span class="var">document</span>.<span class="fn">querySelector</span>(<span class="str">".gallery-grid"</span>);'},
    {id:'lb2',t:'<span class="kw">const</span> <span class="var">lightbox</span> <span class="op">=</span> <span class="var">document</span>.<span class="fn">getElementById</span>(<span class="str">"lightbox"</span>);'},
    {id:'lb3',t:''},
    {id:'lb4',t:'<span class="cmt">// Un solo listener en el contenedor padre</span>'},
    {id:'lb5',t:'<span class="var">gallery</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (<span class="var">event</span>) <span class="op">=></span> {'},
    {id:'lb6',t:'  <span class="kw">const</span> <span class="var">item</span> <span class="op">=</span> <span class="var">event</span>.<span class="var">target</span>.<span class="fn">closest</span>(<span class="str">".gal-item"</span>);'},
    {id:'lb7',t:'  <span class="kw">if</span> (<span class="op">!</span><span class="var">item</span>) <span class="kw">return</span>;'},
    {id:'lb8',t:''},
    {id:'lb9',t:'  <span class="cmt">// Pasamos los datos al lightbox</span>'},
    {id:'lb10',t:'  <span class="var">document</span>.<span class="fn">getElementById</span>(<span class="str">"lb-emoji"</span>)'},
    {id:'lb11',t:'         .<span class="var">textContent</span> <span class="op">=</span> <span class="var">item</span>.<span class="var">dataset</span>.<span class="var">emoji</span>;'},
    {id:'lb12',t:''},
    {id:'lb13',t:'  <span class="cmt">// Mostramos el lightbox</span>'},
    {id:'lb14',t:'  <span class="var">lightbox</span>.<span class="var">classList</span>.<span class="fn">add</span>(<span class="str">"open"</span>);'},
    {id:'lb15',t:'});'},
   ]},
  {id:'football',type:'lab',title:'Football Team Cards',icon:'⚽',
   desc:'Tarjetas del equipo de fútbol Colombia con filtro por posición. Demuestra .filter() e innerHTML dinámico.',
   concepts:['Array.filter()','innerHTML','change event'],num:'L4',
   code:[
    {id:'ft1',t:'<span class="kw">const</span> <span class="var">players</span> <span class="op">=</span> ['},
    {id:'ft2',t:'  { <span class="var">name</span>: <span class="str">"David Ospina"</span>,   <span class="var">pos</span>: <span class="str">"Portero"</span>,        <span class="var">num</span>: <span class="num">1</span> },'},
    {id:'ft3',t:'  { <span class="var">name</span>: "Falcao García"</span>, <span class="var">pos</span>: <span class="str">"Delantero"</span>,       <span class="var">num</span>: <span class="num">9</span> },'},
    {id:'ft4',t:'  <span class="cmt">// ... más jugadores</span>'},
    {id:'ft5',t:'];'},
    {id:'ft6',t:''},
    {id:'ft7',t:'<span class="kw">function</span> <span class="fn">renderCards</span>(<span class="var">filter</span>) {'},
    {id:'ft8',t:'  <span class="cmt">// Filtramos el arreglo</span>'},
    {id:'ft9',t:'  <span class="kw">const</span> <span class="var">filtered</span> <span class="op">=</span> <span class="var">filter</span> <span class="op">===</span> <span class="str">"all"</span>'},
    {id:'ft10',t:'    <span class="op">?</span> <span class="var">players</span>'},
    {id:'ft11',t:'    <span class="op">:</span> <span class="var">players</span>.<span class="fn">filter</span>(<span class="var">p</span> <span class="op">=></span> <span class="var">p</span>.<span class="var">pos</span> <span class="op">===</span> <span class="var">filter</span>);'},
    {id:'ft12',t:''},
    {id:'ft13',t:'  <span class="cmt">// Generamos el HTML dinámicamente</span>'},
    {id:'ft14',t:'  <span class="var">grid</span>.<span class="var">innerHTML</span> <span class="op">=</span> <span class="var">filtered</span>.<span class="fn">map</span>((<span class="var">p</span>) <span class="op">=></span> <span class="str">`'},
    {id:'ft15',t:'    &lt;div class="player-card"&gt;'},
    {id:'ft16',t:'      &lt;div class="jersey"&gt;#\${p.num}&lt;/div&gt;'},
    {id:'ft17',t:'      &lt;div&gt;&lt;div class="player-name"&gt;\${p.name}&lt;/div&gt;&lt;/div&gt;'},
    {id:'ft18',t:'    &lt;/div&gt;`</span>).<span class="fn">join</span>(<span class="str">""</span>);'},
    {id:'ft19',t:'}'},
    {id:'ft20',t:''},
    {id:'ft21',t:'<span class="var">select</span>.<span class="fn">addEventListener</span>(<span class="str">"change"</span>, (<span class="var">e</span>) <span class="op">=></span>'},
    {id:'ft22',t:'  <span class="fn">renderCards</span>(<span class="var">e</span>.<span class="var">target</span>.<span class="var">value</span>)'},
    {id:'ft23',t=');'},
   ]},
];

function trace(lineId, msg, type=''){
  const el=document.getElementById(lineId);
  if(el){
    document.querySelectorAll('.cl.active').forEach(e=>e.classList.remove('active'));
    el.classList.add('active');
    el.scrollIntoView({block:'nearest',behavior:'smooth'});
    setTimeout(()=>el.classList.remove('active'),1200);
  }
  const log=document.getElementById('trace-log');
  if(log){
    const line=document.createElement('div');
    line.className='trace-line'+(type?' '+type:'');
    line.textContent='› '+msg;
    log.prepend(line);
    while(log.children.length>12)log.removeChild(log.lastChild);
  }
}

function renderCards(){
  const tg=document.getElementById('talleres-grid');
  const lg=document.getElementById('labs-grid');
  tg.innerHTML='';lg.innerHTML='';
  DEMOS.forEach(d=>{
    const isTaller=d.type==='taller';
    const color=isTaller?'#7c3aed':'#0d9488';
    const card=document.createElement('div');
    card.className='card '+(isTaller?'taller-card':'lab-card');
    card.setAttribute('data-type',d.type);
    card.innerHTML=`<div class="card-accent" style="background:${color}"></div>
      <div class="card-icon-row">
        <span class="card-icon">${d.icon}</span>
        <span class="card-num" style="color:${color};border-color:${color}30">${d.num}</span>
      </div>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
      <div class="concepts">${d.concepts.map(c=>`<span class="concept">${c}</span>`).join('')}</div>
      <button class="card-cta ${isTaller?'taller-cta':'lab-cta'}">
        ▶&nbsp; Ver demo interactivo
      </button>`;
    card.addEventListener('click',()=>openDemo(d.id));
    (isTaller?tg:lg).appendChild(card);
  });
}

function filterCards(type, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>{b.classList.remove('active','active-lab')});
  if(type==='lab')btn.classList.add('active-lab');
  else btn.classList.add('active');
  document.querySelectorAll('.card').forEach(c=>{
    c.style.display=(type==='all'||c.dataset.type===type)?'':'none';
  });
  document.getElementById('sec-taller').style.display=(type==='lab')?'none':'';
  document.getElementById('sec-lab').style.display=(type==='taller')?'none':'';
}

function openDemo(id){
  const d=DEMOS.find(x=>x.id===id);
  if(!d)return;
  document.getElementById('dt-title').textContent=d.title;
  document.getElementById('dt-sub').textContent=d.concepts.join(' · ');
  const pill=document.getElementById('dt-pill');
  pill.textContent=d.type==='taller'?'Workshop':'Lab';
  pill.className='type-pill '+(d.type==='taller'?'taller':'lab');
  document.getElementById('code-display').innerHTML=d.code.map(l=>`<span class="cl" id="${l.id}"><span class="ln">${d.code.indexOf(l)+1}</span>${l.t}</span>`).join('\n');
  document.getElementById('trace-log').innerHTML='';
  document.getElementById('demo-content').innerHTML=buildDemoHTML(id);
  document.getElementById('demo-view').classList.add('open');
  document.getElementById('main-view').style.display='none';
  setTimeout(()=>initDemo(id),80);
}

function closeDemo(){
  document.getElementById('demo-view').classList.remove('open');
  document.getElementById('main-view').style.display='';
}

function buildDemoHTML(id){
  const d=DEMOS.find(x=>x.id===id);
  const isTaller=d.type==='taller';
  const accent=isTaller?'#7c3aed':'#0d9488';
  const header=`<div class="demo-title">${d.icon} ${d.title}</div>
    <div class="demo-desc">${d.desc}</div>`;
  if(id==='storytelling') return header+`
    <div class="card-box">
      <div id="story-display" class="story-display">Había una vez en un <strong id="s-setting">bosque encantado</strong>, una <strong id="s-hero">guerrera valiente</strong> que encontró una <strong id="s-item">llave mágica</strong>.</div>
      <div class="story-btns">
        <button class="s-btn" id="btn-setting">🏔 Cambiar escenario</button>
        <button class="s-btn" id="btn-hero">🧑 Cambiar personaje</button>
        <button class="s-btn" id="btn-item">✨ Cambiar objeto</button>
      </div>
    </div>`;
  if(id==='emojireactor') return header+`
    <div class="card-box">
      <div class="post-header"><div class="post-avatar">EP</div><div><div class="post-name">Edisson Prieto</div><div class="post-time">hace 2 minutos</div></div></div>
      <div class="post-body">Acabo de terminar el módulo de DOM 🎉 Manipular elementos con JavaScript es más intuitivo de lo que pensaba. ¡Listo para el siguiente módulo!</div>
      <div class="reactions-row" id="reactions-row">
        ${[['👍','12'],['❤️','8'],['😂','5'],['🔥','3'],['🙌','7']].map(([e,c])=>`<button class="react-btn" data-count="${c}"><span>${e}</span><span class="react-count">${c}</span></button>`).join('')}
      </div>
    </div>`;
  if(id==='musicfilter') return header+`
    <div class="card-box">
      <div class="filter-row">
        <button class="mf-btn active" data-filter="all">Todos</button>
        <button class="mf-btn" data-filter="cuerdas">🎸 Cuerdas</button>
        <button class="mf-btn" data-filter="viento">🎺 Viento</button>
        <button class="mf-btn" data-filter="percusion">🥁 Percusión</button>
      </div>
      <div class="instruments-grid">
        ${[['🎸','Guitarra','cuerdas'],['🎻','Violín','cuerdas'],['🎺','Trompeta','viento'],['🥁','Batería','percusion'],['🪗','Acordeón','viento'],['🎵','Maracas','percusion'],['🎷','Saxofón','viento'],['🪘','Conga','percusion'],['🎼','Arpa','cuerdas']].map(([ic,nm,ct])=>`<div class="instrument-card" data-category="${ct}"><div class="instrument-icon">${ic}</div><div class="instrument-name">${nm}</div><span class="instrument-cat">${ct}</span></div>`).join('')}
      </div>
    </div>`;
  if(id==='rps') return header+`
    <div class="card-box">
      <div class="rps-arena">
        <div class="rps-side"><div class="rps-label">Tú</div><div class="rps-pick" id="player-pick">❓</div></div>
        <div class="rps-vs">VS</div>
        <div class="rps-side"><div class="rps-label">PC</div><div class="rps-pick" id="comp-pick">❓</div></div>
      </div>
      <div class="rps-result" id="rps-result">Elige tu opción</div>
      <div class="rps-btns">
        <button class="rps-btn" onclick="playRPS(0)">🪨<br><small>Piedra</small></button>
        <button class="rps-btn" onclick="playRPS(1)">📄<br><small>Papel</small></button>
        <button class="rps-btn" onclick="playRPS(2)">✂️<br><small>Tijeras</small></button>
      </div>
      <div class="score-row">
        <div class="score-item"><div class="score-num" id="score-w" style="color:#34d399">0</div><div class="score-name">Victorias</div></div>
        <div class="score-item"><div class="score-num" id="score-t" style="color:var(--muted)">0</div><div class="score-name">Empates</div></div>
        <div class="score-item"><div class="score-num" id="score-l" style="color:#f87171">0</div><div class="score-name">Derrotas</div></div>
      </div>
    </div>`;
  if(id==='favorites') return header+`
    <div class="card-box">
      <div class="photos-grid">
        ${[['#4f46e5','Cali, Colombia','🌆'],['#0891b2','Cartagena','🏖'],['#059669','Eje Cafetero','☕'],['#dc2626','Festival Flores','🌸'],['#7c3aed','Bogotá','🏙'],['#d97706','Amazon','🌿']].map(([bg,name,ic])=>`<div class="photo-card"><div class="photo-bg" style="background:${bg}20;border:1px solid ${bg}40"><span style="font-size:1.5rem">${ic}</span><span style="margin-top:.3rem;font-size:.72rem;color:var(--muted)">${name}</span></div><button class="heart-btn" aria-label="Agregar favorito">🤍</button></div>`).join('')}
      </div>
      <div class="fav-count" id="fav-count">0 favoritos seleccionados</div>
    </div>`;
  if(id==='counter') return header+`
    <div class="card-box">
      <div class="counter-display">
        <div class="counter-num zero" id="count-display">0</div>
        <div class="counter-label">valor actual</div>
      </div>
      <div class="counter-btns">
        <button class="c-btn minus" id="decrement-btn">−</button>
        <button class="c-btn" id="reset-btn" onclick="resetCounter()">↺</button>
        <button class="c-btn plus" id="increment-btn">+</button>
      </div>
    </div>`;
  if(id==='lightbox') return header+`
    <div class="card-box">
      <div class="gallery-grid" id="gallery">
        ${[['🌅','Amanecer'],['🌊','Mar'],['🏔','Montaña'],['🌸','Flores'],['🦋','Mariposa'],['🌿','Selva']].map(([e,c])=>`<div class="gal-item" style="background:var(--surface2)" data-emoji="${e}" data-caption="${c}">${e}</div>`).join('')}
      </div>
    </div>`;
  if(id==='football') return header+`
    <div class="card-box">
      <div class="position-select-wrap">
        <label>Filtrar por posición:</label>
        <select class="pos-select" id="pos-filter" onchange="filterFootball(this.value)">
          <option value="all">Todos los jugadores</option>
          <option value="Portero">Portero</option>
          <option value="Defensa">Defensa</option>
          <option value="Mediocampista">Mediocampista</option>
          <option value="Delantero">Delantero</option>
        </select>
      </div>
      <div class="players-grid" id="players-grid"></div>
    </div>`;
  return header+'<p style="color:var(--muted)">Demo próximamente</p>';
}

function initDemo(id){
  if(id==='storytelling') initStorytelling();
  if(id==='emojireactor') initEmojiReactor();
  if(id==='musicfilter') initMusicFilter();
  if(id==='favorites') initFavorites();
  if(id==='counter') initCounter();
  if(id==='lightbox') initLightbox();
  if(id==='football') initFootball();
}

function initStorytelling(){
  const settings=['bosque encantado','ciudad futurista','fondo marino','montaña nevada'];
  const heroes=['guerrera valiente','joven inventor','detective astuto','mago anciano'];
  const items=['llave mágica','mapa antiguo','cristal roto','espada dorada'];
  let si=0,hi=0,ii=0;
  function build(){
    const d=document.getElementById('story-display');
    if(!d)return;
    trace('st9','display.innerHTML = buildStory()');
    trace('st10','Asignando HTML al elemento del DOM');
    d.innerHTML=`Había una vez en un <strong style="color:#a78bfa">${settings[si]}</strong>, una <strong style="color:#a78bfa">${heroes[hi]}</strong> que encontró una <strong style="color:#a78bfa">${items[ii]}</strong>.`;
  }
  document.getElementById('btn-setting').addEventListener('click',()=>{
    si=(si+1)%settings.length;
    trace('st13','btn-setting click detectado');
    trace('st14',`si = (${si-1<0?settings.length-1:si-1} + 1) % ${settings.length} = ${si}`);
    build();
  });
  document.getElementById('btn-hero').addEventListener('click',()=>{
    hi=(hi+1)%heroes.length;
    trace('st13','btn-hero click detectado');
    trace('st14',`hi actualizado → "${heroes[hi]}"`);
    build();
  });
  document.getElementById('btn-item').addEventListener('click',()=>{
    ii=(ii+1)%items.length;
    trace('st13','btn-item click detectado');
    trace('st14',`ii actualizado → "${items[ii]}"`);
    build();
  });
}

function initEmojiReactor(){
  const container=document.getElementById('reactions-row');
  if(!container)return;
  container.addEventListener('click',(event)=>{
    trace('er4','click en el contenedor de reacciones');
    const btn=event.target.closest('.react-btn');
    trace('er5',`event.target.closest(".react-btn") → ${btn?'encontrado':'null'}`);
    if(!btn)return;
    trace('er6','Pasamos la validación');
    const count=parseInt(btn.dataset.count)||0;
    trace('er9',`dataset.count leído: ${count}`);
    btn.dataset.count=count+1;
    btn.querySelector('.react-count').textContent=count+1;
    trace('er12',`dataset.count actualizado → ${count+1}`);
    btn.classList.toggle('reacted');
    trace('er15','classList.toggle("reacted") ejecutado');
  });
}

function initMusicFilter(){
  const btns=document.querySelectorAll('.mf-btn');
  const cards=document.querySelectorAll('.instrument-card');
  btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      trace('mf7','forEach: removiendo clase "active" de todos');
      btns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      trace('mf8',`"active" añadido a botón: ${btn.dataset.filter}`);
      const cat=btn.dataset.filter;
      trace('mf10',`cat = "${cat}"`);
      let shown=0;
      cards.forEach(c=>{
        const show=cat==='all'||c.dataset.category===cat;
        c.classList.toggle('hidden',!show);
        if(show)shown++;
      });
      trace('mf15',`${shown} instrumentos visibles`);
    });
  });
}

const rpsScore={w:0,t:0,l:0};
function playRPS(playerIdx){
  const opciones=['🪨','📄','✂️'];
  const compIdx=Math.floor(Math.random()*3);
  trace('rp5',`Math.random() → compIdx = ${compIdx} (${opciones[compIdx]})`);
  document.getElementById('player-pick').textContent=opciones[playerIdx];
  document.getElementById('comp-pick').textContent=opciones[compIdx];
  trace('rp8',`playerPick.textContent = "${opciones[playerIdx]}"`);
  trace('rp9',`compPick.textContent = "${opciones[compIdx]}"`);
  let res;
  if(playerIdx===compIdx){res='¡Empate! 🤝';rpsScore.t++;trace('rp17','p === c → Empate');}
  else if((playerIdx-compIdx+3)%3===1){res='¡Ganaste! 🎉';rpsScore.w++;trace('rp18',`(${playerIdx}-${compIdx}+3)%3 === 1 → Ganaste`);}
  else{res='¡Perdiste! 😔';rpsScore.l++;trace('rp19','ninguna condición anterior → Perdiste');}
  document.getElementById('rps-result').textContent=res;
  trace('rp13',`resultEl.textContent = "${res}"`);
  document.getElementById('score-w').textContent=rpsScore.w;
  document.getElementById('score-t').textContent=rpsScore.t;
  document.getElementById('score-l').textContent=rpsScore.l;
}

function initFavorites(){
  const cards=document.querySelectorAll('.photo-card');
  function updateFavCount(){
    const n=document.querySelectorAll('.photo-card.favorited').length;
    const el=document.getElementById('fav-count');
    if(el)el.textContent=`${n} favorito${n!==1?'s':''} seleccionado${n!==1?'s':''}`;
  }
  trace('fv1','querySelectorAll(".photo-card") ejecutado','info');
  cards.forEach((card,i)=>{
    const btn=card.querySelector('.heart-btn');
    trace('fv3',`forEach card[${i}] procesada`,'info');
    btn.addEventListener('click',()=>{
      trace('fv6','click en heart-btn detectado');
      const isFav=card.classList.toggle('favorited');
      trace('fv8',`classList.toggle("favorited") → isFav = ${isFav}`);
      btn.setAttribute('aria-label',isFav?'Quitar favorito':'Agregar favorito');
      trace('fv11','setAttribute aria-label actualizado');
      btn.textContent=isFav?'❤️':'🤍';
      trace('fv14',`textContent = "${isFav?'❤️':'🤍'}"`);
      updateFavCount();
    });
  });
}

let countVal=0;
function initCounter(){
  const display=document.getElementById('count-display');
  const incBtn=document.getElementById('increment-btn');
  const decBtn=document.getElementById('decrement-btn');
  if(!display||!incBtn||!decBtn)return;
  trace('ct2','getElementById("count-display") encontrado','info');
  function updateDisplay(){
    trace('ct16',`display.textContent = ${countVal}`);
    display.textContent=countVal;
    const cls='counter-num '+(countVal>0?'pos':countVal<0?'neg':'zero');
    display.className=cls;
    trace('ct18',`className = "${cls}"`);
  }
  incBtn.addEventListener('click',()=>{
    trace('ct4','incrementBtn click detectado');
    countVal++;
    trace('ct5',`count++ → count = ${countVal}`);
    updateDisplay();
  });
  decBtn.addEventListener('click',()=>{
    trace('ct9','decrementBtn click detectado');
    countVal--;
    trace('ct10',`count-- → count = ${countVal}`);
    updateDisplay();
  });
}
function resetCounter(){
  countVal=0;
  const d=document.getElementById('count-display');
  if(d){d.textContent='0';d.className='counter-num zero';}
  trace('ct1','count = 0 (reset)');
}

function initLightbox(){
  const gallery=document.getElementById('gallery');
  if(!gallery)return;
  trace('lb1','querySelector(".gallery-grid") encontrado','info');
  gallery.addEventListener('click',(event)=>{
    trace('lb5','click detectado en gallery');
    const item=event.target.closest('.gal-item');
    trace('lb6',`event.target.closest(".gal-item") → ${item?'encontrado':'null'}`);
    if(!item)return;
    document.getElementById('lb-emoji').textContent=item.dataset.emoji;
    document.getElementById('lb-caption').textContent=item.dataset.caption;
    trace('lb10','lb-emoji y lb-caption actualizados');
    document.getElementById('lightbox').classList.add('open');
    trace('lb14','lightbox.classList.add("open")');
  });
}
function closeLightbox(e){
  if(e.target===document.getElementById('lightbox'))
    document.getElementById('lightbox').classList.remove('open');
}

const footballPlayers=[
  {name:'David Ospina',pos:'Portero',num:1,color:'#f59e0b'},{name:'Camilo Vargas',pos:'Portero',num:22,color:'#f59e0b'},
  {name:'Yerry Mina',pos:'Defensa',num:13,color:'#3b82f6'},{name:'Dávinson Sánchez',pos:'Defensa',num:12,color:'#3b82f6'},
  {name:'Juan Cuadrado',pos:'Mediocampista',num:11,color:'#8b5cf6'},{name:'James Rodríguez',pos:'Mediocampista',num:10,color:'#8b5cf6'},
  {name:'Falcao García',pos:'Delantero',num:9,color:'#ef4444'},{name:'Luis Díaz',pos:'Delantero',num:7,color:'#ef4444'},
];
const posColors={Portero:'#f59e0b',Defensa:'#3b82f6',Mediocampista:'#8b5cf6',Delantero:'#ef4444'};
function filterFootball(filter){
  trace('ft9',`filter = "${filter}"`);
  const list=filter==='all'?footballPlayers:footballPlayers.filter(p=>p.pos===filter);
  trace('ft11',`Array.filter() → ${list.length} jugadores`);
  const grid=document.getElementById('players-grid');
  if(!grid)return;
  grid.innerHTML=list.map(p=>`<div class="player-card">
    <div class="jersey" style="background:${p.color}">#${p.num}</div>
    <div>
      <div class="player-name">${p.name}</div>
      <span class="player-pos" style="background:${p.color}20;color:${p.color}">${p.pos}</span>
    </div>
  </div>`).join('');
  trace('ft14','innerHTML generado con Array.map().join()');
}
function initFootball(){
  trace('ft1','players array definido','info');
  filterFootball('all');
}

renderCards();
