  const methods = [
    { name: '.toUpperCase()', fn: s => s.toUpperCase() },
    { name: '.toLowerCase()', fn: s => s.toLowerCase() },
    { name: '.trim()',         fn: s => s.trim() },
    { name: '.length',         fn: s => String(s.length) },
    { name: '.split(",")',     fn: s => JSON.stringify(s.split(',')) },
    { name: '.includes("a")',  fn: s => String(s.includes('a')) },
    { name: '.replace("o","0")',fn:s => s.replace(/o/g,'0') },
    { name: '.slice(0,5)',     fn: s => s.slice(0,5) },
    { name: '.indexOf("C")',   fn: s => String(s.indexOf('C')) },
    { name: '.repeat(2)',      fn: s => s.repeat(2) },
    { name: '.startsWith("H")',fn: s => String(s.startsWith('H')) },
    { name: '.charAt(0)',      fn: s => s.charAt(0) },
  ];
  const grid = document.getElementById('methods-grid');
  methods.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'method-btn';
    btn.textContent = m.name;
    btn.onclick = () => {
      const val = document.getElementById('str-input').value;
      try { document.getElementById('str-result').textContent = '→ ' + m.fn(val); }
      catch(e) { document.getElementById('str-result').textContent = 'Error: ' + e.message; }
    };
    grid.appendChild(btn);
  });
  function updateTL() {
    const n = document.getElementById('tl-name').value;
    const j = document.getElementById('tl-job').value;
    const c = document.getElementById('tl-city').value;
    const s = document.getElementById('tl-skill').value;
    document.getElementById('tl-output').textContent =
      `Hola, mi nombre es ${n}. Soy ${j} de ${c} y mi lenguaje favorito es ${s}. Tengo ${n.length} letras en mi nombre.`;
  }
  updateTL();
