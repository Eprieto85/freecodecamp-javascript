  // TERNARY
  function updateTern() {
    const v = document.getElementById('t-var').value;
    const op = document.getElementById('t-op').value;
    const val = document.getElementById('t-val').value;
    const tr = document.getElementById('t-true').value;
    const fa = document.getElementById('t-false').value;
    document.getElementById('t-code-out').innerHTML =
      `<span style="color:#f97583">const</span> resultado = <span style="color:#79b8ff">${v}</span> <span style="color:#f39c12">${op} ${val}</span> ? <span style="color:#9ecbff">${tr}</span> : <span style="color:#9ecbff">${fa}</span>;`;
    testTern();
  }
  function testTern() {
    const edad = parseInt(document.getElementById('t-test').value)||0;
    const op = document.getElementById('t-op').value;
    const val = parseInt(document.getElementById('t-val').value)||0;
    const tr = document.getElementById('t-true').value.replace(/"/g,'');
    const fa = document.getElementById('t-false').value.replace(/"/g,'');
    let cond;
    switch(op){
      case '>=': cond=edad>=val; break; case '>': cond=edad>val; break;
      case '===': cond=edad===val; break; case '!=': cond=edad!=val; break;
      case '<=': cond=edad<=val; break; case '<': cond=edad<val; break;
    }
    document.getElementById('t-result').textContent = `→ resultado = "${cond?tr:fa}"`;
  }
  updateTern();

  // QUIZ
  const questions = [
    { q:'¿Qué imprime console.log(typeof null)?', opts:['null','object','undefined','string'], ans:1 },
    { q:'¿Cuál de estas es falsy en JavaScript?', opts:['1','[]','{}','""'], ans:3 },
    { q:'¿Qué devuelve 0 || "default"?', opts:['0','false','default','""'], ans:2 },
    { q:'¿Qué devuelve null ?? "fallback"?', opts:['null','undefined','fallback','false'], ans:2 },
  ];
  const container = document.getElementById('quiz-container');
  questions.forEach((q,qi) => {
    const div = document.createElement('div');
    div.className = 'q-item';
    div.innerHTML = `<div class="q-text"><strong>Q${qi+1}:</strong> ${q.q}</div><div class="q-options" id="opts-${qi}"></div>`;
    container.appendChild(div);
    q.opts.forEach((opt,oi) => {
      const btn = document.createElement('button');
      btn.className = 'q-opt';
      btn.textContent = opt;
      btn.onclick = function() {
        const opts = document.querySelectorAll(`#opts-${qi} .q-opt`);
        opts.forEach((o,i) => {
          o.classList.remove('correct','wrong');
          if(i===q.ans) o.classList.add('correct');
          else if(o===this && i!==q.ans) o.classList.add('wrong');
          o.onclick=null;
        });
      };
      document.getElementById(`opts-${qi}`).appendChild(btn);
    });
  });
