// script.js - modo escuro, ajustes de acessibilidade e melhorias
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('btn-theme');

  function setDark(on){
    if(on){
      root.classList.add('dark');
      btn.setAttribute('aria-pressed','true');
    } else {
      root.classList.remove('dark');
      btn.setAttribute('aria-pressed','false');
    }
  }

  // carregar preferência do localStorage
  const stored = localStorage.getItem('theme-dark');
  if(stored === '1') setDark(true);

  btn && btn.addEventListener('click', function(){
    const isDark = root.classList.toggle('dark');
    btn.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem('theme-dark', isDark ? '1' : '0');
  });

  // melhorar navegação por teclado: foco visível
  document.addEventListener('keyup', function(e){
    if(e.key === 'Tab') document.body.classList.add('using-keyboard');
  });

  // evitar outline em clique do mouse
  document.addEventListener('mousedown', function(){ document.body.classList.remove('using-keyboard'); });

  // adicionar role/aria onde faz sentido dinamicamente (exemplo leve)
  const projectList = document.querySelector('.project-list');
  if(projectList) projectList.setAttribute('role','list');

  // pequena melhoria no envio de formulário (simulado)
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Formulário enviado — versão de demonstração.');
      form.reset();
    });
  }
})();
