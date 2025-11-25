// Botão de login redireciona para o sistema
document.getElementById("btnLogin").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Animação de aparecimento ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".passo, .publico-card, .recurso").forEach((el) => {
  observer.observe(el);
});

// Efeito na navbar ao rolar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    navbar.style.background = "#fffffff0";
  } else {
    navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    navbar.style.background = "white";
  }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contador animado (opcional)
function animateCounter(element, target, duration) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Iniciar contadores quando visíveis
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numberElement = entry.target.querySelector('.number');
      if (numberElement && !numberElement.classList.contains('animated')) {
        numberElement.classList.add('animated');
        const target = parseInt(numberElement.textContent);
        animateCounter(numberElement, target, 2000);
      }
    }
  });
});

document.querySelectorAll('.stat').forEach(stat => {
  counterObserver.observe(stat);
});