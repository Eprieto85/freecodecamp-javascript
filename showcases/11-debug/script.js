  // ── COLOR CHANGER (lab corregido) ──
  const darkColorsArr = [
    "#2C3E50","#34495E","#2C2C2C","#616A6B",
    "#4A235A","#2F4F4F","#0E4B5A","#36454F","#2C3E50","#800020"
  ];
  function getRandomIndex() {
    return Math.floor(darkColorsArr.length * Math.random());
  }
  const bgPreview = document.getElementById("color-preview");
  document.getElementById("btn").addEventListener("click", function () {
    const color = darkColorsArr[getRandomIndex()];
    bgPreview.style.background = color;
    bgPreview.textContent = color;
  });

  // ── ERROR TABS ──
  document.querySelectorAll(".error-tab").forEach(tab => {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".error-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".error-panel").forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      document.getElementById("panel-" + this.dataset.err).classList.add("active");
    });
  });

  // ── TRY/CATCH DEMO ──
  function runScenario(type) {
    const out = document.getElementById("tc-output");
    out.innerHTML = "";
    const add = (cls, txt) => {
      const s = document.createElement("span");
      s.className = cls;
      s.textContent = txt;
      out.appendChild(s);
    };
    if (type === "safe") {
      add("line-try",    "▶ try  { const x = 10 * 2; }");
      add("line-ok",     "✔ try ejecutado correctamente → x = 20");
      add("line-finally","▶ finally { /* limpieza */ }");
      add("line-finally","✔ finally siempre corre");
    } else if (type === "error") {
      add("line-try",    "▶ try  { null.toString(); }");
      add("line-catch",  "✖ catch(e) → TypeError: Cannot read properties of null");
      add("line-catch",  "✔ Error capturado, el programa continúa");
      add("line-finally","▶ finally { /* limpieza */ }");
      add("line-finally","✔ finally siempre corre");
    } else if (type === "throw") {
      add("line-try",    "▶ try  { throw new Error('División por cero'); }");
      add("line-catch",  "✖ catch(e) → Error: División por cero");
      add("line-catch",  "✔ Excepción manual capturada con throw");
      add("line-finally","▶ finally { /* limpieza */ }");
      add("line-finally","✔ finally siempre corre");
    } else if (type === "nested") {
      add("line-try",    "▶ try  { /* código exterior */ }");
      add("line-try",    "  ▶ try interno { riesgoAlto(); }");
      add("line-catch",  "  ✖ catch interno → maneja error local");
      add("line-finally","  ▶ finally interno → corre");
      add("line-finally","▶ finally exterior → también corre siempre");
      add("line-ok",     "✔ Cada nivel maneja su propio error");
    }
  }

  // ── BUG HUNTER ──
  let found = 0;
  function clickBug(el) {
    if (el.classList.contains("found")) return;
    el.classList.add("found");
    found++;
    const pct = (found / 10) * 100;
    document.getElementById("score-fill").style.width = pct + "%";
    document.getElementById("score-text").textContent = found + " / 10 bugs encontrados";
    const emojis = ["🔍","🔍","🕵️","🕵️","😮","😮","🤯","🤯","🏆","🏆","🎉"];
    document.getElementById("score-emoji").textContent = emojis[found];
    if (found === 10) {
      document.getElementById("score-text").style.color = "var(--accent3)";
    }
  }
  function showHint() {
    alert("Pista: busca líneas donde falta una coma, hay una letra minúscula cuando debería ser mayúscula, falta un # en un selector, o se llama una función cuando debería pasarse como referencia.");
  }
