// Treinamento - JavaScript

// Dados dos cenários do simulador
const scenarios = [
    {
        id: 1,
        title: "Ideação Suicida",
        description: "Usuário de 25 anos relata que não vê mais sentido na vida e pensa em 'sumir'. Como você responderia?",
        options: [
            {
                id: 1,
                text: "\"Isso é grave. Vou conectar você com um profissional imediatamente.\"",
                feedback: "Resposta muito direta que pode afastar o usuário. É importante primeiro validar os sentimentos antes de encaminhar.",
                rating: 2
            },
            {
                id: 2,
                text: "\"Posso entender que você está passando por um momento difícil. Pode me contar mais sobre como se sente?\"",
                feedback: "Excelente! Essa resposta mostra empatia e cria um espaço seguro para o usuário se abrir.",
                rating: 5
            },
            {
                id: 3,
                text: "\"Não pense assim! A vida é bela e tem muita coisa boa para viver.\"",
                feedback: "Resposta minimizadora. Pode fazer o usuário se sentir incompreendido e desvalorizado.",
                rating: 1
            }
        ]
    },
    {
        id: 2,
        title: "Crise de Ansiedade",
        description: "Usuário relata taquicardia, falta de ar e pensamentos acelerados. Diz que está em pânico.",
        options: [
            {
                id: 1,
                text: "\"Respire fundo comigo: inspire... expire... Vamos fazer isso juntos.\"",
                feedback: "Ótima resposta! Técnicas de respiração são úteis em crises de ansiedade.",
                rating: 5
            },
            {
                id: 2,
                text: "\"Isso vai passar logo, tente se acalmar.\"",
                feedback: "Pode soar como minimização. É melhor validar a experiência do usuário.",
                rating: 2
            },
            {
                id: 3,
                text: "\"Você precisa ir ao hospital imediatamente!\"",
                feedback: "Pode aumentar o pânico. Reserve encaminhamento para emergências médicas reais.",
                rating: 3
            }
        ]
    }
];

let currentScenarioIndex = 0;
let score = 0;

// Funções do Simulador
function selectOption(optionId) {
    const scenario = scenarios[currentScenarioIndex];
    const option = scenario.options.find(opt => opt.id === optionId);
    
    // Remover seleção anterior
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Marcar opção selecionada
    const selectedCard = document.querySelectorAll('.option-card')[optionId - 1];
    selectedCard.classList.add('selected');
    
    // Mostrar feedback
    const feedbackDiv = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedback-text');
    
    feedbackText.innerHTML = `
        <strong>${option.feedback}</strong><br><br>
        <strong>Avaliação:</strong> ${'⭐'.repeat(option.rating)}${'☆'.repeat(5 - option.rating)}<br>
        <strong>Pontuação:</strong> +${option.rating} pontos
    `;
    
    feedbackDiv.style.display = 'block';
    
    // Atualizar pontuação
    score += option.rating;
}

function nextScenario() {
    currentScenarioIndex++;
    
    if (currentScenarioIndex >= scenarios.length) {
        // Fim do simulador
        document.querySelector('.simulator-scenario').innerHTML = `
            <h3>🎉 Simulador Concluído!</h3>
            <p>Sua pontuação final: <strong>${score} pontos</strong> de ${scenarios.length * 5} possíveis</p>
            <div style="background: var(--verde-seguro); color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <strong>📈 Seu desempenho:</strong> ${score >= 8 ? 'Excelente!' : score >= 6 ? 'Bom!' : 'Continue praticando!'}
            </div>
            <button class="btn btn-primary" onclick="resetSimulator()">Refazer Simulador</button>
        `;
    } else {
        // Próximo cenário
        loadScenario(currentScenarioIndex);
    }
}

function loadScenario(index) {
    const scenario = scenarios[index];
    
    document.querySelector('.simulator-scenario h3').textContent = `Cenário: ${scenario.title}`;
    document.querySelector('.simulator-scenario p').textContent = scenario.description;
    
    const optionsContainer = document.querySelector('.simulator-options');
    optionsContainer.innerHTML = '';
    
    scenario.options.forEach((option, i) => {
        optionsContainer.innerHTML += `
            <div class="option-card" onclick="selectOption(${option.id})">
                <h4>Opção ${String.fromCharCode(65 + i)}</h4>
                <p>${option.text}</p>
            </div>
        `;
    });
    
    // Esconder feedback
    document.getElementById('feedback').style.display = 'none';
}

function resetSimulator() {
    currentScenarioIndex = 0;
    score = 0;
    loadScenario(0);
}

// Funções dos Vídeos
function playVideo(videoId) {
    const videoTitles = {
        'crise': 'Manejo de Crises Emocionais',
        'comunicação': 'Comunicação Não-Violenta',
        'burnout': 'Prevenção de Burnout'
    };
    
    document.getElementById('videoTitle').textContent = videoTitles[videoId] || 'Vídeo de Treinamento';
    document.getElementById('videoModal').style.display = 'block';
}

function closeVideo() {
    document.getElementById('videoModal').style.display = 'none';
}

// Funções dos Módulos
function reviewModule(moduleId) {
    alert(`Abrindo módulo ${moduleId} para revisão...`);
    // Em produção: carregar conteúdo do módulo
}

function continueModule(moduleId) {
    alert(`Continuando módulo ${moduleId}...`);
    // Em produção: retomar progresso do módulo
}

function downloadResource(resourceId) {
    alert(`Iniciando download do recurso: ${resourceId}.pdf`);
    // Simular download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${resourceId}.pdf`;
    link.click();
}

// Inicializar o simulador
document.addEventListener('DOMContentLoaded', function() {
    loadScenario(0);
    
    // Fechar modal ao clicar fora
    const modal = document.getElementById('videoModal');
    window.onclick = function(event) {
        if (event.target === modal) {
            closeVideo();
        }
    };
    
    // Atualizar progresso
    const progressFill = document.querySelector('.progress-fill');
    setInterval(() => {
        // Simular pequeno aumento no progresso
        const currentWidth = parseFloat(progressFill.style.width);
        if (currentWidth < 100) {
            progressFill.style.width = (currentWidth + 0.1) + '%';
        }
    }, 5000);
});