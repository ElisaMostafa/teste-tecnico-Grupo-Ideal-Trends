(function(){
  const slider = document.querySelector('.hero-slider .slider');
  if(!slider) return;
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.carousel-btn.prev');
  const nextBtn = slider.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.hero-slider .carousel-dots');

  let index = 0;
  const intervalMs = 3000; // 3s
  let timer = null;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Ir para o slide ${i+1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.querySelectorAll('button'));

  function update() {
    slides.forEach((s, i) => {
      s.style.opacity = i === index ? '1' : '0';
      s.style.pointerEvents = i === index ? 'auto' : 'none';
      s.style.transition = 'opacity 400ms ease';
    });
    dots.forEach((d, i) => {
      d.setAttribute('aria-selected', String(i === index));
    });
  }

  function goTo(i){
    index = (i + slides.length) % slides.length;
    update();
  }

  function next(){ goTo(index + 1); }
  function prev(){ goTo(index - 1); }

  function start(){
    stop();
    timer = setInterval(next, intervalMs);
  }
  function stop(){ if(timer){ clearInterval(timer); timer = null; } }

  // Button events
  nextBtn?.addEventListener('click', () => { next(); start(); });
  prevBtn?.addEventListener('click', () => { prev(); start(); });

  // Pause on hover/focus
  const hero = document.querySelector('.hero-slider');
  hero?.addEventListener('mouseenter', stop);
  hero?.addEventListener('mouseleave', start);
  hero?.addEventListener('focusin', stop);
  hero?.addEventListener('focusout', start);

  // Initialize
  goTo(0);
  start();
})();
