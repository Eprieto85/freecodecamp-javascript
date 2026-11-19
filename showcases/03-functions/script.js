  const fns = [
    { name:'sumar(a,b)',     fn:(a,b)=>a+b,       code:'const sumar = (a,b) => a + b;' },
    { name:'restar(a,b)',    fn:(a,b)=>a-b,       code:'const restar = (a,b) => a - b;' },
    { name:'multiplicar(a,b)',fn:(a,b)=>a*b,      code:'const multiplicar = (a,b) => a * b;' },
    { name:'dividir(a,b)',   fn:(a,b)=>b!==0?a/b:'∞', code:'const dividir = (a,b) => b !== 0 ? a/b : "∞";' },
    { name:'potencia(a,b)',  fn:(a,b)=>Math.pow(a,b), code:'const potencia = (a,b) => Math.pow(a,b);' },
    { name:'modulo(a,b)',    fn:(a,b)=>a%b,       code:'const modulo = (a,b) => a % b;' },
    { name:'max(a,b)',       fn:(a,b)=>Math.max(a,b), code:'const max = (a,b) => Math.max(a,b);' },
    { name:'promedio(a,b)',  fn:(a,b)=>(a+b)/2,  code:'const promedio = (a,b) => (a+b) / 2;' },
  ];
  const grid = document.getElementById('fn-btns');
  fns.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'fn-btn';
    btn.textContent = f.name;
    btn.onclick = () => {
      const a = parseFloat(document.getElementById('num-a').value)||0;
      const b = parseFloat(document.getElementById('num-b').value)||0;
      const res = f.fn(a,b);
      const out = document.getElementById('fn-output');
      out.innerHTML = `<span style="color:var(--muted);font-size:.75rem">Código:</span><span style="color:var(--accent)">${f.code}</span><span style="color:var(--muted);font-size:.75rem;margin-top:.5rem">Resultado:</span><span style="font-size:1.3rem;font-weight:700;color:var(--accent2)">${f.name.replace('a,b',`${a},${b}`)} = ${res}</span>`;
    };
    grid.appendChild(btn);
  });
  function updateCalc(){ /* inputs just update on click */ }
