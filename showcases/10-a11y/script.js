  // TABLIST
  const tabs = document.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', e => {
      if(e.key==='ArrowRight') { const next = tab.nextElementSibling; if(next) { activateTab(next); next.focus(); } }
      if(e.key==='ArrowLeft') { const prev = tab.previousElementSibling; if(prev) { activateTab(prev); prev.focus(); } }
    });
  });
  function activateTab(selected) {
    tabs.forEach(t => { t.setAttribute('aria-selected','false'); });
    panels.forEach(p => p.setAttribute('hidden',''));
    selected.setAttribute('aria-selected','true');
    document.getElementById(selected.getAttribute('aria-controls')).removeAttribute('hidden');
  }

  // LIVE REGION
  function announce(type, msg) {
    const el = document.getElementById('live-out');
    el.setAttribute('aria-live', type);
    el.textContent = msg;
    document.getElementById('live-code').textContent =
      `aria-live="${type}" → "${msg}"`;
  }

  // KEYBOARD LIST
  const items = ['Ver mi perfil','Configuración','Notificaciones','Cerrar sesión'];
  const list = document.getElementById('kb-list');
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'kb-item';
    li.setAttribute('tabindex','0');
    li.setAttribute('role','menuitem');
    li.textContent = item;
    li.addEventListener('click', () => { li.style.borderColor='var(--accent)'; li.style.color='var(--accent)'; });
    li.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') { e.preventDefault(); li.click(); } });
    list.appendChild(li);
  });
