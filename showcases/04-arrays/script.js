  let arr = [3, 7, 1, 9, 4, 2, 8];

  function renderArr() {
    const d = document.getElementById('arr-display');
    d.innerHTML = '';
    arr.forEach((v, i) => {
      const el = document.createElement('div');
      el.className = 'arr-item';
      el.innerHTML = `<span class="idx">[${i}]</span>${v}`;
      d.appendChild(el);
    });
  }

  function log(msg) {
    const l = document.getElementById('arr-log');
    l.textContent = msg;
  }

  function arrOp(op) {
    const val = document.getElementById('arr-val').value;
    const v = isNaN(val) ? val : Number(val);
    switch(op) {
      case 'push':    if(val) { arr.push(v); log(`push(${v}) → length: ${arr.length}`); } break;
      case 'pop':     { const r=arr.pop(); log(`pop() → eliminó: ${r}`); } break;
      case 'unshift': if(val) { arr.unshift(v); log(`unshift(${v}) → agregado al inicio`); } break;
      case 'shift':   { const r=arr.shift(); log(`shift() → eliminó: ${r} del inicio`); } break;
      case 'reverse': arr.reverse(); log('reverse() → array invertido'); break;
      case 'sort':    arr.sort((a,b)=>a-b); log('sort() → array ordenado ascendente'); break;
      case 'reset':   arr=[3,7,1,9,4,2,8]; log('Array reiniciado'); break;
    }
    renderArr();
  }

  renderArr();

  // pipeline
  const pipeData = [1,2,3,4,5,6,7,8,9,10];
  const steps = [
    { label:'Original', arr: pipeData, desc:'' },
    { label:'.map(x => x * 2)', arr: pipeData.map(x=>x*2), desc:'multiplica cada elemento' },
    { label:'.filter(x => x > 10)', arr: pipeData.map(x=>x*2).filter(x=>x>10), desc:'filtra los > 10' },
    { label:'.reduce((s,x)=>s+x, 0)', arr: [pipeData.map(x=>x*2).filter(x=>x>10).reduce((s,x)=>s+x,0)], desc:'suma total' },
  ];
  const pc = document.getElementById('pipeline');
  steps.forEach((s,i) => {
    const row = document.createElement('div');
    row.className = 'pipe-step';
    const lbl = document.createElement('div');
    lbl.className = 'pipe-label';
    lbl.textContent = s.label;
    const items = document.createElement('div');
    items.className = 'pipe-arr';
    s.arr.forEach(v => {
      const el = document.createElement('span');
      el.className = 'pipe-item' + (i===3?' hi':'');
      el.textContent = v;
      items.appendChild(el);
    });
    if(i<steps.length-1){ const a=document.createElement('div'); a.className='pipe-arrow'; a.textContent='→'; row.appendChild(lbl); row.appendChild(items); row.appendChild(a); }
    else { const res=document.createElement('div'); res.style.cssText='font-family:var(--mono);font-size:1.1rem;font-weight:700;color:var(--accent2)'; res.textContent='= '+s.arr[0]; row.appendChild(lbl); row.appendChild(items); row.appendChild(res); }
    pc.appendChild(row);
  });

  // methods reference
  const methods = [
    { name:'.push(val)',   desc:'Agrega al final. Muta ✓', mut:true },
    { name:'.pop()',       desc:'Elimina el último. Muta ✓', mut:true },
    { name:'.shift()',     desc:'Elimina el primero. Muta ✓', mut:true },
    { name:'.unshift(val)',desc:'Agrega al inicio. Muta ✓', mut:true },
    { name:'.map(fn)',     desc:'Transforma cada elemento. Nuevo array ✓', mut:false },
    { name:'.filter(fn)',  desc:'Filtra por condición. Nuevo array ✓', mut:false },
    { name:'.reduce(fn)',  desc:'Acumula a un único valor', mut:false },
    { name:'.find(fn)',    desc:'Retorna el primer match', mut:false },
    { name:'.some(fn)',    desc:'true si alguno cumple', mut:false },
    { name:'.every(fn)',   desc:'true si todos cumplen', mut:false },
    { name:'.includes(v)', desc:'true si el valor existe', mut:false },
    { name:'.slice(a,b)',  desc:'Extrae porción. No muta ✓', mut:false },
    { name:'.splice(a,n)', desc:'Elimina/inserta. Muta ✓', mut:true },
    { name:'.flat()',      desc:'Aplana arrays anidados', mut:false },
    { name:'.join(sep)',   desc:'Convierte a string', mut:false },
    { name:'.reverse()',   desc:'Invierte. Muta ✓', mut:true },
  ];
  const ref = document.getElementById('methods-ref');
  methods.forEach(m => {
    const c = document.createElement('div');
    c.className = 'm-card';
    c.innerHTML = `<div class="m-name">${m.name}</div><p>${m.desc}</p>`;
    if(m.mut) c.style.borderLeftColor = 'var(--accent3)';
    ref.appendChild(c);
  });
