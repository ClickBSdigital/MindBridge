document.addEventListener("DOMContentLoaded", () => {
  const btnCheckin = document.getElementById("btnCheckin");
  const btnAjuda = document.getElementById("btnAjuda");
  const humorEl = document.getElementById("humor");

  btnCheckin.addEventListener("click", () => {
    const humores = ["😀 Feliz", "😐 Neutro", "😞 Triste", "😠 Irritado", "😌 Tranquilo"];
    const humorAleatorio = humores[Math.floor(Math.random() * humores.length)];
    humorEl.textContent = humorAleatorio;
    alert(`Check-in registrado: ${humorAleatorio}`);
  });

  btnAjuda.addEventListener("click", () => {
    alert("Conectando você a um profissional disponível...");
  });

  // Simulação de gráfico de humor
  const ctx = document.getElementById("graficoHumor").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [{
        label: 'Nível de Humor',
        data: [4, 3, 5, 2, 4, 5, 3],
        borderColor: '#9a6cff',
        backgroundColor: '#9a6cff33',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 5 }
      },
      plugins: {
        legend: { labels: { color: '#ccc' } }
      }
    }
  });
});
