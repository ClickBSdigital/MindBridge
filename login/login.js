// Abrir modais
document.getElementById("abrirCadastro").addEventListener("click", () => {
  document.getElementById("modalCadastro").style.display = "flex";
});

document.getElementById("abrirRecuperar").addEventListener("click", () => {
  document.getElementById("modalRecuperar").style.display = "flex";
});

// Fechar modais
document.querySelectorAll(".fechar").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.getAttribute("data-close");
    document.getElementById(modal).style.display = "none";
  });
});

// Fechar clicando fora
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// Login + direcionamento por tipo de usuário
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const tipo = document.getElementById("tipoUsuario").value;

  if (tipo === "usuario") {
      window.location.href = "dashboard-user.html";
  }
  if (tipo === "profissional") {
      window.location.href = "dashboard-pro.html";
  }
  if (tipo === "admin") {
      window.location.href = "dashboard-admin.html";
  }
});
