  const input = document.getElementById('md-input');
  const preview = document.getElementById('preview-pane');
  const htmlOut = document.getElementById('html-output');
  let showingHTML = false;

  // ── MARKDOWN PARSER ──
  function parseMarkdown(md) {
    let html = md
      // Escape HTML entities first
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      // Code blocks (before inline)
      .replace(/```([\s\S]*?)```/g, (_,c) => `<pre><code>${c.trim()}</code></pre>`)
      // Headings
      .replace(/^#{6}\s+(.+)$/gm,'<h6>$1</h6>')
      .replace(/^#{5}\s+(.+)$/gm,'<h5>$1</h5>')
      .replace(/^#{4}\s+(.+)$/gm,'<h4>$1</h4>')
      .replace(/^#{3}\s+(.+)$/gm,'<h3>$1</h3>')
      .replace(/^#{2}\s+(.+)$/gm,'<h2>$1</h2>')
      .replace(/^#{1}\s+(.+)$/gm,'<h1>$1</h1>')
      // Blockquote
      .replace(/^&gt;\s+(.+)$/gm,'<blockquote>$1</blockquote>')
      // HR
      .replace(/^---$/gm,'<hr/>')
      // Bold + Italic
      .replace(/\*\*\*(.+?)\*\*\*/g,'<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,'<em>$1</em>')
      .replace(/~~(.+?)~~/g,'<del>$1</del>')
      // Inline code
      .replace(/`([^`]+)`/g,'<code>$1</code>')
      // Links & images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img alt="$1" src="$2"/>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>')
      // Unordered list
      .replace(/(^- .+$(\n^- .+$)*)/gm, m => '<ul>' + m.replace(/^- (.+)$/gm,'<li>$1</li>') + '</ul>')
      // Ordered list
      .replace(/(^\d+\. .+$(\n^\d+\. .+$)*)/gm, m => '<ol>' + m.replace(/^\d+\. (.+)$/gm,'<li>$1</li>') + '</ol>')
      // Paragraphs
      .replace(/^([^<\n].+)$/gm,'<p>$1</p>')
      // Clean up empty p tags
      .replace(/<p><\/p>/g,'')
      .replace(/<p>(<(?:h[1-6]|ul|ol|blockquote|hr|pre)[^>]*>)/g,'$1')
      .replace(/(<\/(?:h[1-6]|ul|ol|blockquote|pre)>)<\/p>/g,'$1');
    return html;
  }

  function render() {
    const md = input.value;
    const html = parseMarkdown(md);
    preview.innerHTML = html;
    htmlOut.textContent = html;
    // stats
    const words = md.trim() ? md.trim().split(/\s+/).length : 0;
    document.getElementById('stat-chars').textContent = md.length + ' caracteres';
    document.getElementById('stat-words').textContent = words + ' palabras';
    document.getElementById('stat-lines').textContent = md.split('\n').length + ' líneas';
    document.getElementById('stat-time').textContent = '~' + Math.max(1, Math.round(words/200)) + ' min lectura';
  }

  input.addEventListener('input', render);

  // ── FORMAT HELPERS ──
  function fmt(before, after) {
    const s = input.selectionStart, e = input.selectionEnd;
    const sel = input.value.slice(s, e) || 'texto';
    const rep = before + sel + after;
    input.setRangeText(rep, s, e, 'select');
    input.focus(); render();
  }
  function fmtLine(prefix) {
    const s = input.selectionStart;
    const lineStart = input.value.lastIndexOf('\n', s - 1) + 1;
    input.setRangeText(prefix, lineStart, lineStart, 'end');
    input.focus(); render();
  }
  function insertLink() {
    const url = prompt('URL del enlace:') || 'https://ejemplo.com';
    const s = input.selectionStart, e = input.selectionEnd;
    const txt = input.value.slice(s,e) || 'texto del enlace';
    input.setRangeText(`[${txt}](${url})`, s, e, 'end');
    input.focus(); render();
  }
  function insertCode() {
    const s = input.selectionStart, e = input.selectionEnd;
    const sel = input.value.slice(s,e) || 'código aquí';
    input.setRangeText('```\n' + sel + '\n```', s, e, 'end');
    input.focus(); render();
  }

  // ── VIEW TOGGLE ──
  function toggleView() {
    showingHTML = !showingHTML;
    preview.style.display = showingHTML ? 'none' : 'block';
    htmlOut.style.display = showingHTML ? 'block' : 'none';
    document.querySelector('.tb-actions .tb-btn').textContent = showingHTML ? 'Vista Previa' : 'Vista HTML';
    document.getElementById('preview-label').innerHTML = showingHTML
      ? '<span class="dot" style="background:var(--accent3)"></span>HTML Generado'
      : '<span class="dot green"></span>Vista Previa';
  }

  // ── COPY / DOWNLOAD ──
  function getFullHTML() {
    const title = (input.value.match(/^#\s+(.+)$/m) || ['','Documento'])[1];
    return `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8"/>\n  <title>${title}</title>\n  <style>body{max-width:800px;margin:2rem auto;font-family:Georgia,serif;line-height:1.7;padding:0 1rem}h1,h2{border-bottom:1px solid #eee;padding-bottom:.3em}code{background:#f4f4f4;padding:.1em .3em;border-radius:3px}pre{background:#2d2d2d;color:#f8f8f2;padding:1em;border-radius:6px;overflow-x:auto}blockquote{border-left:4px solid #3498db;padding:.5em 1em;background:#f0f8ff;margin:1em 0}</style>\n</head>\n<body>\n${parseMarkdown(input.value)}\n</body>\n</html>`;
  }
  function copyHTML() {
    navigator.clipboard.writeText(getFullHTML()).then(() => toast('HTML copiado al portapapeles ✓'));
  }
  function downloadHTML() {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([getFullHTML()], {type:'text/html'}));
    a.download = 'documento.html';
    a.click();
    toast('Archivo descargado ✓');
  }
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }
  function clearAll() { if(confirm('¿Limpiar todo el contenido?')) { input.value=''; render(); } }

  function loadExample() {
    input.value = `# Bienvenido a Markdown Studio

## ¿Qué es Markdown?

Markdown es un lenguaje de marcado **ligero** que se convierte fácilmente a *HTML*. Fue creado para que el texto sea ~~complicado~~ fácil de leer y escribir.

## Características principales

- Sintaxis simple e intuitiva
- Compatible con HTML
- Ampliamente usado en documentación
- Soportado por GitHub, Notion, etc.

## Ejemplo de código

\`\`\`
const convertir = (md) => {
  return parseMarkdown(md);
};
\`\`\`

También puedes usar \`código inline\` dentro del texto.

## Cita destacada

> "La simplicidad es la máxima sofisticación." — Leonardo da Vinci

## Enlace

Visita [freeCodeCamp](https://www.freecodecamp.org) para aprender más.

---

*Generado con Markdown Studio*`;
    render();
  }

  // init
  loadExample();
