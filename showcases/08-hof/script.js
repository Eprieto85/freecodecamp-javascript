  const empleados = [
    { nombre:'Ana', salario:2800 },
    { nombre:'Luis', salario:3200 },
    { nombre:'Sara', salario:2500 },
    { nombre:'Juan', salario:4100 },
    { nombre:'Paula', salario:2900 },
  ];
  let pipeActive = { map:true, filter:true, reduce:true };

  function togglePipe(stage) {
    pipeActive[stage] = !pipeActive[stage];
    document.getElementById('toggle-'+stage).classList.toggle('on', pipeActive[stage]);
    renderPipeline();
  }

  function renderPipeline() {
    let data = empleados;
    const visual = document.getElementById('pipe-visual');
    visual.innerHTML = '';

    // Original
    const orig = makeStage('Original', data.map(e=>e.nombre+' $'+e.salario));
    visual.appendChild(orig);

    if(pipeActive.map) {
      data = data.map(e => ({ ...e, salario: Math.round(e.salario*1.1) }));
      visual.appendChild(makeArrow());
      visual.appendChild(makeStage('map (+10%)', data.map(e=>e.nombre+' $'+e.salario)));
    }
    if(pipeActive.filter) {
      data = data.filter(e => e.salario > 3000);
      visual.appendChild(makeArrow());
      visual.appendChild(makeStage('filter (>3000)', data.map(e=>e.nombre+' $'+e.salario)));
    }

    let result;
    if(pipeActive.reduce) {
      result = data.reduce((s,e)=>s+e.salario, 0);
      visual.appendChild(makeArrow());
      document.getElementById('pipe-result').textContent = `Total nómina: $${result.toLocaleString()}`;
    } else {
      document.getElementById('pipe-result').textContent = `Empleados: ${data.length} · Sin reduce activo`;
    }
  }

  function makeStage(label, items) {
    const d = document.createElement('div');
    d.className = 'pipe-stage';
    d.innerHTML = `<h4>${label}</h4><div class="pipe-items">${items.map(i=>`<div class="p-item">${i}</div>`).join('')}</div>`;
    return d;
  }
  function makeArrow() {
    const a = document.createElement('div');
    a.className = 'pipe-arrow';
    a.textContent = '→';
    return a;
  }

  renderPipeline();

  // COMPOSE
  const composeFns = [
    { name:'double', fn: x => x*2, label:'x × 2' },
    { name:'addTen', fn: x => x+10, label:'x + 10' },
    { name:'square', fn: x => x*x, label:'x²' },
    { name:'half',   fn: x => x/2, label:'x ÷ 2' },
  ];
  function updateCompose() {
    let val = parseFloat(document.getElementById('c-input').value)||0;
    const flow = document.getElementById('compose-flow');
    flow.innerHTML = '';
    const start = document.createElement('div');
    start.className = 'c-step';
    start.innerHTML = `<div class="fn-name">input</div><div class="c-val">${val}</div>`;
    flow.appendChild(start);
    composeFns.forEach(f => {
      const a = document.createElement('div');
      a.className = 'c-arrow';
      a.textContent = '→';
      val = f.fn(val);
      const step = document.createElement('div');
      step.className = 'c-step';
      step.innerHTML = `<div class="fn-name">${f.name}()</div><div style="font-size:.7rem;color:var(--muted)">${f.label}</div><div class="c-val">${Number(val.toFixed(4))}</div>`;
      flow.appendChild(a);
      flow.appendChild(step);
    });
  }
  updateCompose();
