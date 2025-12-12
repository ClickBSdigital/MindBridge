// Relatório Clínico - JavaScript

// Dados dos pacientes
const pacientesData = {
    1: {
        nome: "João Silva",
        id: "#287",
        sessoes: 5,
        duracaoMedia: 18.4,
        melhora: 65,
        metasAlcançadas: "3/5",
        diagnostico: {
            principal: "F32.1 - Episódio depressivo moderado",
            secundario: "F41.1 - Transtorno de ansiedade generalizada",
            inicio: "11/11/2024",
            abordagem: "Terapia Cognitivo-Comportamental (TCC)",
            frequencia: "Semanal"
        },
        escalas: [
            { nome: "PHQ-9", inicial: 15, atual: 8, progresso: 60, interpretacao: "Moderado → Leve" },
            { nome: "GAD-7", inicial: 12, atual: 6, progresso: 50, interpretacao: "Moderado → Leve" },
            { nome: "WHO-5", inicial: 8, atual: 14, progresso: 70, interpretacao: "Baixo → Moderado" }
        ],
        intervencoes: [
            { sessao: "#1", data: "11/11", intervencao: "Avaliação Inicial, Escuta Ativa", objetivo: "Estabelecer vínculo, entender queixa", resultado: "positive", proximos: "Plano terapêutico" },
            { sessao: "#2", data: "18/11", intervencao: "Psicoeducação, Técnicas Respiração", objetivo: "Entendimento sintomas, regulação emocional", resultado: "positive", proximos: "Registro pensamentos" },
            { sessao: "#3", data: "25/11", intervencao: "Reestruturação Cognitiva, Autocompaixão", objetivo: "Modificar pensamentos catastróficos", resultado: "partial", proximos: "Praticar autofala positiva" },
            { sessao: "#4", data: "02/12", intervencao: "Mindfulness, Habilidades Sociais", objetivo: "Reduzir ansiedade, aumentar interações", resultado: "partial", proximos: "Exercícios exposição gradual" }
        ],
        prescricoes: [
            { nome: "Sertralina", detalhes: "50mg - 1x/dia", status: "active" },
            { nome: "Alprazolam", detalhes: "0.5mg - SOS", status: "active" }
        ],
        metas: [
            { texto: "Reduzir ideação suicida", status: "completed" },
            { texto: "Aprender técnicas de respiração", status: "completed" },
            { texto: "Identificar pensamentos automáticos", status: "completed" },
            { texto: "Reduzir isolamento social", status: "in-progress" },
            { texto: "Desenvolver autocompaixão", status: "in-progress" }
        ]
    },
    2: {
        nome: "Ana Costa",
        id: "#156",
        sessoes: 3,
        duracaoMedia: 22.5,
        melhora: 40,
        metasAlcançadas: "1/3"
    },
    3: {
        nome: "Mariana Oliveira",
        id: "#042",
        sessoes: 8,
        duracaoMedia: 16.8,
        melhora: 75,
        metasAlcançadas: "6/8"
    },
    4: {
        nome: "Roberto Santos",
        id: "#103",
        sessoes: 6,
        duracaoMedia: 19.2,
        melhora: 55,
        metasAlcançadas: "4/6"
    }
};

let pacienteAtual = 1;

// Funções Principais
function loadPatientData() {
    const select = document.getElementById('patientSelect');
    pacienteAtual = parseInt(select.value);
    const paciente = pacientesData[pacienteAtual];
    
    if (!paciente) return;
    
    // Atualizar resumo rápido
    updateQuickSummary(paciente);
    
    // Atualizar gráfico de evolução
    updateChart();
    
    // Atualizar diagnóstico
    if (paciente.diagnostico) {
        updateDiagnosis(paciente.diagnostico);
    }
    
    // Atualizar escalas
    if (paciente.escalas) {
        updateScales(paciente.escalas);
    }
    
    // Atualizar intervenções
    if (paciente.intervencoes) {
        updateInterventions(paciente.intervencoes);
    }
    
    // Atualizar prescrições
    if (paciente.prescricoes) {
        updatePrescriptions(paciente.prescricoes);
    }
    
    // Atualizar metas
    if (paciente.metas) {
        updateGoals(paciente.metas);
    }
    
    console.log(`Dados carregados para: ${paciente.nome}`);
}

function updateQuickSummary(paciente) {
    const summaryCards = document.querySelectorAll('.summary-card');
    if (summaryCards.length >= 4) {
        summaryCards[0].querySelector('.summary-value').textContent = paciente.sessoes;
        summaryCards[1].querySelector('.summary-value').textContent = paciente.duracaoMedia;
        summaryCards[2].querySelector('.summary-value').textContent = `+${paciente.melhora}%`;
        summaryCards[3].querySelector('.summary-value').textContent = paciente.metasAlcançadas;
    }
}

function updateChart() {
    const chartContainer = document.getElementById('symptomsChart');
    if (!chartContainer) return;
    
    // Dados simulados para o gráfico
    const sessions = [1, 2, 3, 4, 5];
    const anxiety = [8, 7, 6, 5, 4];
    const depression = [7, 6, 5, 4, 3];
    const functioning = [3, 4, 5, 6, 7];
    
    chartContainer.innerHTML = '';
    
    // Calcular dimensões
    const width = chartContainer.clientWidth;
    const height = chartContainer.clientHeight;
    const padding = 20;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Criar linhas do gráfico
    createChartLine(chartContainer, sessions, anxiety, 'var(--azul-profissional)', chartWidth, chartHeight, padding);
    createChartLine(chartContainer, sessions, depression, 'var(--vermelho-emergencia)', chartWidth, chartHeight, padding);
    createChartLine(chartContainer, sessions, functioning, 'var(--verde-seguro)', chartWidth, chartHeight, padding);
}

function createChartLine(container, sessions, values, color, width, height, padding) {
    const maxValue = Math.max(...values, 10);
    const pointWidth = width / (sessions.length - 1);
    
    // Criar pontos
    values.forEach((value, index) => {
        const point = document.createElement('div');
        point.className = 'chart-point';
        point.style.backgroundColor = color;
        point.style.left = `${padding + index * pointWidth}px`;
        point.style.top = `${padding + height - (value / maxValue) * height}px`;
        container.appendChild(point);
    });
    
    // Criar linhas conectando pontos
    for (let i = 0; i < values.length - 1; i++) {
        const line = document.createElement('div');
        line.className = 'chart-line';
        line.style.backgroundColor = color;
        
        const x1 = padding + i * pointWidth;
        const y1 = padding + height - (values[i] / maxValue) * height;
        const x2 = padding + (i + 1) * pointWidth;
        const y2 = padding + height - (values[i + 1] / maxValue) * height;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = '0 0';
        
        container.appendChild(line);
    }
}

function updateDiagnosis(diagnostico) {
    const diagnosisItems = document.querySelectorAll('.diagnosis-item');
    if (diagnosisItems.length >= 5) {
        diagnosisItems[0].querySelector('.diagnosis-value').textContent = diagnostico.principal;
        diagnosisItems[1].querySelector('.diagnosis-value').textContent = diagnostico.secundario;
        diagnosisItems[2].querySelector('.diagnosis-value').textContent = diagnostico.inicio;
        diagnosisItems[3].querySelector('.diagnosis-value').textContent = diagnostico.abordagem;
        diagnosisItems[4].querySelector('.diagnosis-value').textContent = diagnostico.frequencia;
    }
}

function updateScales(escalas) {
    const scaleCards = document.querySelectorAll('.scale-card');
    escalas.forEach((escala, index) => {
        if (scaleCards[index]) {
            scaleCards[index].querySelector('.scale-name').textContent = escala.nome;
            scaleCards[index].querySelector('.scale-score').textContent = `${escala.inicial} → ${escala.atual}`;
            scaleCards[index].querySelector('.progress-fill').style.width = `${escala.progresso}%`;
            scaleCards[index].querySelector('.scale-interpretation').textContent = escala.interpretacao;
        }
    });
}

function updateInterventions(intervencoes) {
    const tableBody = document.querySelector('.interventions-table tbody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    intervencoes.forEach(intervencao => {
        const resultClass = intervencao.resultado === 'positive' ? 'result-positive' : 'result-partial';
        const resultText = intervencao.resultado === 'positive' ? '✓ Alcançado' : '⏳ Em andamento';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${intervencao.sessao}</td>
            <td>${intervencao.data}</td>
            <td>${intervencao.intervencao}</td>
            <td>${intervencao.objetivo}</td>
            <td><span class="${resultClass}">${resultText}</span></td>
            <td>${intervencao.proximos}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updatePrescriptions(prescricoes) {
    const prescriptionsList = document.querySelector('.prescriptions-list');
    if (!prescriptionsList) return;
    
    prescriptionsList.innerHTML = '';
    
    prescricoes.forEach(prescricao => {
        const item = document.createElement('div');
        item.className = 'prescription-item';
        item.innerHTML = `
            <div class="med-name">${prescricao.nome}</div>
            <div class="med-details">${prescricao.detalhes}</div>
            <div class="med-status ${prescricao.status}">${prescricao.status === 'active' ? 'Ativo' : 'Inativo'}</div>
        `;
        prescriptionsList.appendChild(item);
    });
}

function updateGoals(metas) {
    const goalsList = document.querySelector('.goals-list');
    if (!goalsList) return;
    
    goalsList.innerHTML = '';
    
    metas.forEach(meta => {
        const item = document.createElement('div');
        item.className = `goal-item ${meta.status}`;
        item.innerHTML = `
            <div class="goal-check">${meta.status === 'completed' ? '✓' : '⏳'}</div>
            <div class="goal-text">${meta.texto}</div>
        `;
        goalsList.appendChild(item);
    });
}

function updateReport() {
    // Simular atualização com base nos filtros
    const period = document.getElementById('periodSelect').value;
    const reportType = document.getElementById('reportType').value;
    
    console.log(`Atualizando relatório: Período=${period}, Tipo=${reportType}`);
    
    // Em produção, aqui seria feita uma requisição para o servidor
    alert(`Relatório atualizado para: ${period} - ${reportType}`);
}

// Funções de Ação
function generateFullReport() {
    alert('Gerando relatório clínico completo...');
    // Em produção: fazer requisição para gerar relatório
}

function exportReport() {
    document.getElementById('exportModal').style.display = 'block';
}

function shareReport() {
    const paciente = pacientesData[pacienteAtual];
    if (confirm(`Compartilhar relatório de ${paciente.nome}?`)) {
        alert('Link de compartilhamento gerado. Em produção, esta função enviaria por email ou geraria link seguro.');
    }
}

function printReport() {
    window.print();
}

function closeExportModal() {
    document.getElementById('exportModal').style.display = 'none';
}

function exportAsPDF() {
    alert('Exportando relatório como PDF...');
    closeExportModal();
    // Simular download
    setTimeout(() => {
        alert('PDF gerado com sucesso! Download iniciado.');
    }, 1500);
}

function exportAsDOC() {
    alert('Exportando como documento Word...');
    closeExportModal();
}

function exportAsCSV() {
    alert('Exportando dados como CSV...');
    closeExportModal();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados do primeiro paciente
    loadPatientData();
    
    // Atualizar gráfico quando redimensionar
    window.addEventListener('resize', updateChart);
    
    // Fechar modal ao clicar fora
    const modal = document.getElementById('exportModal');
    window.onclick = function(event) {
        if (event.target === modal) {
            closeExportModal();
        }
    };
    
    // Inicializar gráfico
    setTimeout(updateChart, 100);
});