  // TABS
  const outputs = {
    for:     ['0','1','2','3','4'],
    while:   ['0','1','2','3','4'],
    dowhile: ['0','1','2'],
    forof:   ['🍎','🍊','🍋'],
    forin:   ['a → 1','b → 2','c → 3'],
  };
  document.querySelectorAll('.l-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.l-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.loop-panel').forEach(p=>p.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('tab-'+this.dataset.tab).classList.add('active');
      const lines = outputs[this.dataset.tab];
      document.getElementById('loop-output').innerHTML = lines.map(l=>`<span>> ${l}</span>`).join('\n');
    });
  });
  document.getElementById('loop-output').innerHTML = outputs.for.map(l=>`<span>> ${l}</span>`).join('\n');

  // TABLE GENERATOR
  function genTable() {
    const n = parseInt(document.getElementById('mult-num').value)||7;
    const bars = document.getElementById('bar-wrap');
    const tableOut = document.getElementById('table-out');
    bars.innerHTML = '';
    tableOut.innerHTML = '';
    for(let i=1; i<=10; i++) {
      const result = n*i;
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = Math.min(result*3,120)+'px';
      bar.textContent = result;
      bars.appendChild(bar);
      const line = document.createElement('div');
      line.textContent = `${n} × ${i} = ${result}`;
      tableOut.appendChild(line);
    }
  }
  genTable();
