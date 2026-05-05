// app.js

// ─── ANIMAÇÃO DE ENTRADA AO SCROLL ───────────────────
// Observa os elementos .fade-in e os torna visíveis quando entram na tela
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Delay escalonado para cada elemento — cria efeito cascata
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);

      // Para de observar após animar — não precisa repetir
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ─── ANIMAÇÃO DAS BARRAS DE SKILL ────────────────────
// Lê o data-width de cada barra e anima quando entrar na tela
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute('data-width');

      // Aplica a largura — o CSS faz a transição suave
      fill.style.width = width + '%';

      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));
