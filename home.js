// Botão de login
document.getElementById("btnLogin").addEventListener("click", () => {
  window.location.href = "login/login.html";
});


// Animação de aparecimento ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".secao, .card, .videos-container").forEach((el) => {
  observer.observe(el);
});


// Efeito na navbar ao rolar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 2px 12px #0003";
    navbar.style.background = "#ffffffee";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.background = "white";
  }
});


// Abre modal
document.querySelectorAll("#btnLogin, #btnLogin2").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("modalLogin").style.display = "block";
    });
});

// Fecha modal ao clicar no X
document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-close");
        document.getElementById(modalId).style.display = "none";
    });
});

// Troca entre modais
document.querySelectorAll("[data-open]").forEach(link => {
    link.addEventListener("click", () => {
        let open = link.getAttribute("data-open");
        let close = link.getAttribute("data-close");

        document.getElementById(close).style.display = "none";
        document.getElementById(open).style.display = "block";
    });
});

// Fechar modal clicando no fundo
window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});
