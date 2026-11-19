  let contactObj = {};
  function updateContact() {
    contactObj = {
      nombre: document.getElementById('c-name').value,
      profesion: document.getElementById('c-job').value,
      ciudad: document.getElementById('c-city').value,
      email: document.getElementById('c-email').value,
      edad: parseInt(document.getElementById('c-age').value)||0,
    };
    const lines = [
      `<span style="color:#6a737d">const</span> contacto = {`,
      ...Object.entries(contactObj).map(([k,v]) =>
        `  <span class="prop-key">${k}</span>: ${typeof v==='string'?`<span class="prop-val">"${v}"</span>`:`<span class="prop-num">${v}</span>`},`
      ),
      `};`
    ];
    document.getElementById('contact-preview').innerHTML = lines.join('\n');
  }
  updateContact();

  function objMethod(m) {
    const out = document.getElementById('obj-output');
    let res;
    switch(m) {
      case 'keys':    res = JSON.stringify(Object.keys(contactObj)); break;
      case 'values':  res = JSON.stringify(Object.values(contactObj)); break;
      case 'entries': res = Object.entries(contactObj).map(([k,v])=>`[${k}, ${v}]`).join('\n'); break;
      case 'assign':  res = JSON.stringify(Object.assign({}, contactObj, { activo: true })); break;
      case 'spread':  res = JSON.stringify({ ...contactObj, timestamp: Date.now() }); break;
      case 'freeze':  res = 'Object.freeze(contacto)\n→ Ya no se pueden agregar, editar ni eliminar propiedades'; break;
    }
    out.textContent = res;
  }
