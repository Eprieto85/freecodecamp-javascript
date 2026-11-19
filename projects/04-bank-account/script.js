  const CAT_ICONS = {Salario:'💼',Freelance:'💻',Alimentación:'🍔',Transporte:'🚌',Vivienda:'🏠',Educación:'📚',Entretenimiento:'🎬',Salud:'💊',Ropa:'👕',Otros:'📌'};
  const CAT_COLORS = {Salario:'#22c55e',Freelance:'#3b82f6',Alimentación:'#f59e0b',Transporte:'#8b5cf6',Vivienda:'#06b6d4',Educación:'#ec4899',Entretenimiento:'#f97316',Salud:'#ef4444',Ropa:'#a78bfa',Otros:'#64748b'};

  let txns = [
    {id:1,type:'income',desc:'Salario mensual',amount:3500,cat:'Salario',date:'2026-11-01'},
    {id:2,type:'expense',desc:'Arriendo',amount:900,cat:'Vivienda',date:'2026-11-01'},
    {id:3,type:'expense',desc:'Supermercado',amount:220,cat:'Alimentación',date:'2026-11-05'},
    {id:4,type:'income',desc:'Proyecto freelance',amount:650,cat:'Freelance',date:'2026-11-08'},
    {id:5,type:'expense',desc:'Transporte mensual',amount:80,cat:'Transporte',date:'2026-11-10'},
    {id:6,type:'expense',desc:'Curso online',amount:49,cat:'Educación',date:'2026-11-12'},
    {id:7,type:'expense',desc:'Restaurante',amount:35,cat:'Alimentación',date:'2026-11-14'},
  ];
  let nextId = 8;
  let currentType = 'income';
  let currentFilter = 'all';

  // set today as default date
  document.getElementById('f-date').value = new Date().toISOString().split('T')[0];

  function setType(t) {
    currentType = t;
    document.getElementById('type-inc').classList.toggle('active', t==='income');
    document.getElementById('type-exp').classList.toggle('active', t==='expense');
    // update category defaults
    const sel = document.getElementById('f-cat');
    if(t==='income') { sel.value='Salario'; }
    else { sel.value='Alimentación'; }
  }

  function setFilter(f, btn) {
    currentFilter = f;
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderList();
  }

  function addTransaction() {
    const desc = document.getElementById('f-desc').value.trim();
    const amount = parseFloat(document.getElementById('f-amount').value);
    const cat = document.getElementById('f-cat').value;
    const date = document.getElementById('f-date').value;
    if(!desc){ toast('Escribe una descripción'); return; }
    if(!amount||amount<=0){ toast('Monto inválido'); return; }
    txns.unshift({id:nextId++,type:currentType,desc,amount,cat,date});
    document.getElementById('f-desc').value='';
    document.getElementById('f-amount').value='';
    toast(currentType==='income'?'Ingreso agregado ✓':'Gasto agregado ✓');
    render();
  }

  function deleteTransaction(id) {
    txns = txns.filter(t=>t.id!==id);
    render();
    toast('Eliminado');
  }

  function render() { renderSummary(); renderList(); renderChart(); }

  function renderSummary() {
    const income = txns.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const expense = txns.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    const balance = income - expense;
    const fmt = n => '$' + n.toLocaleString('es-CO',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.getElementById('card-balance').textContent = fmt(balance);
    document.getElementById('card-balance').style.color = balance>=0?'var(--income)':'var(--expense)';
    document.getElementById('card-income').textContent = fmt(income);
    document.getElementById('card-expense').textContent = fmt(expense);
    document.getElementById('card-txn-count').textContent = txns.length + ' transacciones';
    document.getElementById('card-income-count').textContent = txns.filter(t=>t.type==='income').length + ' registros';
    document.getElementById('card-expense-count').textContent = txns.filter(t=>t.type==='expense').length + ' registros';
  }

  function renderList() {
    const list = document.getElementById('txn-list');
    let filtered = txns;
    if(currentFilter==='income') filtered = txns.filter(t=>t.type==='income');
    else if(currentFilter==='expense') filtered = txns.filter(t=>t.type==='expense');
    else if(currentFilter!=='all') filtered = txns.filter(t=>t.cat===currentFilter);
    document.getElementById('txn-count-label').textContent = filtered.length + ' registros';
    if(!filtered.length){ list.innerHTML='<div class="empty">No hay transacciones</div>'; return; }
    const fmt = (t,n) => (t==='income'?'+':'-') + '$' + n.toLocaleString('es-CO',{minimumFractionDigits:2});
    list.innerHTML = filtered.map(t=>`
      <div class="txn-item">
        <div class="txn-icon" style="background:${CAT_COLORS[t.cat]||'#64748b'}22">${CAT_ICONS[t.cat]||'📌'}</div>
        <div class="txn-info">
          <div class="txn-desc">${t.desc}</div>
          <div class="txn-meta">${t.cat} · ${formatDate(t.date)}</div>
        </div>
        <div class="txn-amount ${t.type==='income'?'inc':'exp'}">${fmt(t.type,t.amount)}</div>
        <button class="txn-del" onclick="deleteTransaction(${t.id})" title="Eliminar">✕</button>
      </div>`).join('');
  }

  function renderChart() {
    const chart = document.getElementById('cat-chart');
    const expenses = txns.filter(t=>t.type==='expense');
    const catMap = {};
    expenses.forEach(t=>{ catMap[t.cat]=(catMap[t.cat]||0)+t.amount; });
    const sorted = Object.entries(catMap).sort((a,b)=>b[1]-a[1]).slice(0,6);
    const max = sorted[0]?.[1]||1;
    const fmt = n => '$'+n.toLocaleString('es-CO',{minimumFractionDigits:0});
    if(!sorted.length){ chart.innerHTML='<div class="empty">Sin gastos aún</div>'; return; }
    chart.innerHTML = sorted.map(([cat,amt])=>`
      <div class="cat-row">
        <div class="cat-name">${CAT_ICONS[cat]||''} ${cat}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${(amt/max*100)}%;background:${CAT_COLORS[cat]||'#64748b'}"></div></div>
        <div class="cat-amount">${fmt(amt)}</div>
      </div>`).join('');
  }

  function formatDate(d) {
    if(!d) return '';
    const [y,m,day] = d.split('-');
    const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    return `${day} ${months[+m-1]} ${y}`;
  }

  function toast(msg) {
    const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2200);
  }

  render();
