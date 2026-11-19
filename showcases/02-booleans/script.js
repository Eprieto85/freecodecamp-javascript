  // comparison table
  const rows = [
    ['5 == "5"',   true,  false, 'coerción: string → number'],
    ['0 == false', true,  false, 'coerción: false → 0'],
    ['null == undefined', true, false, 'caso especial'],
    ['null === undefined',false,false,'tipos distintos'],
    ['NaN == NaN', false, false,'NaN no es igual a nada'],
    ['1 === 1',    true,  true, 'mismo tipo y valor'],
    ['"a" === "a"',true,  true, 'strings idénticos'],
  ];
  const tbody = document.getElementById('cmp-body');
  rows.forEach(([expr, loose, strict, reason]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${expr}</td><td class="${loose?'true':'false'}">${loose}</td><td class="${strict?'true':'false'}">${strict}</td><td style="color:var(--muted);font-size:.8rem">${reason}</td>`;
    tbody.appendChild(tr);
  });

  // bool tester
  function calcBool() {
    const a = document.getElementById('val-a').value;
    const b = document.getElementById('val-b').value;
    const op = document.getElementById('op-sel').value;
    let res;
    try { res = eval(`(${a}) ${op} (${b})`); } catch(e) { res = 'error'; }
    const el = document.getElementById('bool-result');
    el.textContent = String(res);
    el.className = 'bool-result ' + (res === true ? 't' : res === false ? 'f' : '');
  }
  calcBool();

  // math methods
  const mathMethods = [
    { label: 'Math.round(n)', fn: n => Math.round(n) },
    { label: 'Math.floor(n)', fn: n => Math.floor(n) },
    { label: 'Math.ceil(n)',  fn: n => Math.ceil(n) },
    { label: 'Math.abs(n)',   fn: n => Math.abs(n) },
    { label: 'Math.sqrt(n)',  fn: n => Math.sqrt(n).toFixed(4) },
    { label: 'Math.pow(n,e)', fn: (n,e) => Math.pow(n,e) },
    { label: 'Math.max(n,0)', fn: n => Math.max(n,0) },
    { label: 'Math.min(n,0)', fn: n => Math.min(n,0) },
    { label: 'Math.trunc(n)', fn: n => Math.trunc(n) },
    { label: 'Math.sign(n)',  fn: n => Math.sign(n) },
    { label: 'Math.random()', fn: () => Math.random().toFixed(6) },
    { label: 'Math.PI',       fn: () => Math.PI.toFixed(6) },
  ];
  const grid = document.getElementById('calc-grid');
  function calcMath() {
    const n = parseFloat(document.getElementById('math-num').value) || 0;
    const e = parseFloat(document.getElementById('math-exp').value) || 2;
    grid.innerHTML = '';
    mathMethods.forEach(m => {
      const val = m.fn(n, e);
      const d = document.createElement('div');
      d.className = 'calc-card';
      d.innerHTML = `<div class="label">${m.label}</div><div class="value">${val}</div>`;
      grid.appendChild(d);
    });
  }
  calcMath();
