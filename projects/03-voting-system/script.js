  // ── DATA ──
  let polls = [
    {id:1, q:'¿Cuál es tu lenguaje de programación favorito?', cat:'Tecnología', open:true,
     opts:['JavaScript','Python','Java','Rust'], votes:[0,0,0,0], myVote:null,
     colors:['#6c63ff','#43e97b','#ff6584','#f5a623']},
    {id:2, q:'¿Qué framework de frontend prefieres?', cat:'Tecnología', open:true,
     opts:['React','Vue','Angular','Svelte'], votes:[0,0,0,0], myVote:null,
     colors:['#61dafb','#42b883','#dd0031','#ff3e00']},
    {id:3, q:'¿Cuántas horas al día dedicas a programar?', cat:'Educación', open:true,
     opts:['Menos de 1','1-3 horas','3-6 horas','Más de 6'], votes:[0,0,0,0], myVote:null,
     colors:['#ffd60a','#f5a623','#ff6584','#6c63ff']},
    {id:4, q:'¿Qué herramienta de control de versiones usas?', cat:'Tecnología', open:false,
     opts:['Git','SVN','Mercurial','Ninguna'], votes:[18,4,2,3], myVote:0,
     colors:['#f5a623','#43e97b','#6c63ff','#ff6584']},
  ];
  let nextId = 5;

  // ── RENDER ──
  function renderPolls() {
    const grid = document.getElementById('polls-grid');
    const open = polls.filter(p=>p.open);
    if(!open.length){ grid.innerHTML='<p style="color:var(--muted);padding:1rem">No hay encuestas abiertas.</p>'; return; }
    grid.innerHTML = open.map(p => `
      <div class="poll-card">
        <h3><span class="poll-status open">Abierta</span>${p.q}</h3>
        <div style="font-size:.7rem;color:var(--muted);margin-bottom:.8rem">${p.cat}</div>
        ${p.myVote===null ? `
          <form onsubmit="submitVote(event,${p.id})">
            ${p.opts.map((o,i)=>`
              <div class="option-row">
                <div class="vote-opt">
                  <input type="radio" name="vote-${p.id}" id="v${p.id}-${i}" value="${i}"/>
                  <label for="v${p.id}-${i}">${o}</label>
                </div>
              </div>`).join('')}
            <button type="submit" class="vote-btn">Votar →</button>
          </form>` : `
          <div>${buildBars(p)}</div>
          <div class="total-votes">Total: ${p.votes.reduce((a,b)=>a+b,0)} votos</div>
          <div style="font-size:.72rem;color:var(--accent3);margin-top:.5rem">✓ Ya votaste</div>
        `}
      </div>`).join('');
  }

  function renderResults() {
    const grid = document.getElementById('results-grid');
    grid.innerHTML = polls.map(p => `
      <div class="poll-card">
        <h3><span class="poll-status ${p.open?'open':'closed'}">${p.open?'Abierta':'Cerrada'}</span>${p.q}</h3>
        <div style="font-size:.7rem;color:var(--muted);margin-bottom:.8rem">${p.cat}</div>
        ${buildBars(p)}
        <div class="total-votes">Total: ${p.votes.reduce((a,b)=>a+b,0)} votos</div>
        ${p.open?`<button onclick="closePoll(${p.id})" style="margin-top:.8rem;background:transparent;border:1px solid var(--border);border-radius:6px;color:var(--muted);cursor:pointer;font-size:.75rem;padding:.3rem .7rem;transition:all .15s" onmouseover="this.style.borderColor='var(--accent2)'" onmouseout="this.style.borderColor='var(--border)'">Cerrar encuesta</button>`:''}
      </div>`).join('');
  }

  function buildBars(p) {
    const total = p.votes.reduce((a,b)=>a+b,0)||1;
    const winner = p.votes.indexOf(Math.max(...p.votes));
    return p.opts.map((o,i)=>{
      const pct = Math.round(p.votes[i]/total*100);
      return `<div class="result-bar-wrap">
        <div class="result-info">
          <span class="opt-name">${o}${i===winner&&total>1?' 🏆':''}</span>
          <span class="opt-pct">${pct}% (${p.votes[i]})</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${p.colors[i]}"></div></div>
      </div>`;
    }).join('');
  }

  function submitVote(e, pollId) {
    e.preventDefault();
    const form = e.target;
    const sel = form.querySelector(`input[name="vote-${pollId}"]:checked`);
    if(!sel){ toast('Selecciona una opción primero'); return; }
    const p = polls.find(x=>x.id===pollId);
    p.votes[+sel.value]++;
    p.myVote = +sel.value;
    toast('¡Voto registrado!');
    renderPolls();
    renderResults();
  }

  function closePoll(pollId) {
    polls.find(p=>p.id===pollId).open = false;
    renderPolls();
    renderResults();
    toast('Encuesta cerrada');
  }

  // ── CREATE ──
  function addOpt() {
    const list = document.getElementById('options-list');
    const count = list.children.length + 1;
    if(count > 6){ toast('Máximo 6 opciones'); return; }
    const row = document.createElement('div'); row.className='opt-input-row';
    row.innerHTML=`<input type="text" placeholder="Opción ${count}"/><button class="btn-rm" onclick="removeOpt(this)">✕</button>`;
    list.appendChild(row);
  }
  function removeOpt(btn) {
    const list = document.getElementById('options-list');
    if(list.children.length<=2){ toast('Mínimo 2 opciones'); return; }
    btn.parentElement.remove();
  }
  function createPoll() {
    const q = document.getElementById('new-question').value.trim();
    const cat = document.getElementById('new-category').value;
    const opts = [...document.querySelectorAll('#options-list input')].map(i=>i.value.trim()).filter(Boolean);
    if(!q){ toast('Escribe una pregunta'); return; }
    if(opts.length<2){ toast('Agrega al menos 2 opciones'); return; }
    const palette = ['#6c63ff','#43e97b','#ff6584','#f5a623','#61dafb','#ff3e00'];
    polls.push({id:nextId++,q,cat,open:true,opts,votes:Array(opts.length).fill(0),myVote:null,colors:palette});
    document.getElementById('new-question').value='';
    document.querySelectorAll('#options-list input').forEach(i=>i.value='');
    toast('¡Encuesta publicada!');
    showTab('polls');
  }

  // ── UI ──
  function showTab(name) {
    document.querySelectorAll('.tab').forEach((t,i)=>t.classList.toggle('active',['polls','results','create'][i]===name));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    document.getElementById('tab-'+name).classList.add('active');
    if(name==='results') renderResults();
    if(name==='polls') renderPolls();
  }

  function toast(msg) {
    const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2200);
  }

  // init
  renderPolls();
