// Relatórios - JavaScript

// Dados para os gráficos
const chartData = {
    volume: [45, 52, 48, 61, 55, 58, 65],
    risk: [12, 8, 15, 10, 9, 11, 14],
    rating: [4.9, 4.5, 4.9, 4.3, 4.8, 4.6, 4.7],
    peak: [15, 28, 45, 62, 58, 42, 31, 25, 18, 22, 35, 48]
};

const labels = {
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    hours: ['6h', '8h', '10h', '12h', '14h', '16h', '18h', '20h', '22h', '0h', '2h', '4h'],
    riskLevels: ['Baixo', 'Médio', 'Alto', 'Crítico']
};

// Função para renderizar gráficos simples
function renderCharts() {
    renderBarChart('volumeChart', chartData.volume, labels.days, 'Sessões', 'var(--azul-primario)');
    renderPieChart('riskChart', [45, 30, 20, 5], labels.riskLevels, ['#28a745', '#ffc107', '#fd7e14', '#dc3545']);
    renderLineChart('ratingChart', chartData.rating, labels.days, 'Avaliação', 'var(--laranja-atencao)');
    renderBarChart('peakChart', chartData.peak, labels.hours, 'Sessões', 'var(--roxo-mental)');
}

function renderBarChart(containerId, data, labels, label, color) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const maxValue = Math.max(...data);
    const barWidth = (100 / data.length) - 2;
    
    data.forEach((value, index) => {
        const barHeight = (value / maxValue) * 200;
        const leftPosition = index * (100 / data.length);
        
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.width = `${barWidth}%`;
        bar.style.height = `${barHeight}px`;
        bar.style.left = `${leftPosition}%`;
        bar.style.backgroundColor = color;
        
        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = labels[index];
        label.style.left = `${leftPosition}%`;
        label.style.width = `${barWidth}%`;
        
        container.appendChild(bar);
        container.appendChild(label);
    });
}

function renderPieChart(containerId, data, labels, colors) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const total = data.reduce((sum, value) => sum + value, 0);
    let currentAngle = 0;
    
    data.forEach((value, index) => {
        const percentage = (value / total) * 100;
        const angle = (percentage / 100) * 360;
        
        if (percentage > 0) {
            const slice = document.createElement('div');
            slice.className = 'pie-slice';
            slice.style.position = 'absolute';
            slice.style.width = '160px';
            slice.style.height = '160px';
            slice.style.borderRadius = '50%';
            slice.style.clipPath = `polygon(50% 50%, 50% 0%, ${50 + Math.cos(currentAngle * Math.PI/180) * 50}% ${50 + Math.sin(currentAngle * Math.PI/180) * 50}%)`;
            slice.style.backgroundColor = colors[index];
            slice.style.transformOrigin = '50% 50%';
            slice.style.transform = `rotate(${currentAngle}deg)`;
            
            const label = document.createElement('div');
            label.className = 'pie-label';
            label.textContent = `${labels[index]}: ${percentage.toFixed(1)}%`;
            label.style.position = 'absolute';
            label.style.left = `${50 + Math.cos((currentAngle + angle/2) * Math.PI/180) * 70}%`;
            label.style.top = `${50 + Math.sin((currentAngle + angle/2) * Math.PI/180) * 70}%`;
            label.style.fontSize = '12px';
            label.style.color = colors[index];
            label.style.fontWeight = 'bold';
            
            container.appendChild(slice);
            container.appendChild(label);
            
            currentAngle += angle;
        }
    });
}

function renderLineChart(containerId, data, labels, label, color) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const maxValue = Math.max(...data);
    const pointWidth = 100 / (data.length - 1);
    
    // Criar pontos
    data.forEach((value, index) => {
        const point = document.createElement('div');
        point.style.position = 'absolute';
        point.style.width = '8px';
        point.style.height = '8px';
        point.style.borderRadius = '50%';
        point.style.backgroundColor = color;
        point.style.left = `${index * pointWidth}%`;
        point.style.bottom = `${(value / maxValue) * 180}px`;
        
        container.appendChild(point);
    });
    
    // Criar linha conectando os pontos
    for (let i = 0; i < data.length - 1; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.backgroundColor = color;
        line.style.height = '2px';
        
        const x1 = i * pointWidth;
        const y1 = (data[i] / maxValue) * 180;
        const x2 = (i + 1) * pointWidth;
        const y2 = (data[i + 1] / maxValue) * 180;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = `${length}%`;
        line.style.left = `${x1}%`;
        line.style.bottom = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = '0 0';
        
        container.appendChild(line);
    }
}

// Funções de Exportação
function exportPDF() {
    showExportModal('PDF', 'Relatório MindBridge - ' + new Date().toLocaleDateString('pt-BR'));
    simulateExport('pdf');
}

function exportExcel() {
    showExportModal('Excel', 'Relatório MindBridge - ' + new Date().toLocaleDateString('pt-BR'));
    simulateExport('excel');
}

function exportCSV() {
    showExportModal('CSV', 'Relatório MindBridge - ' + new Date().toLocaleDateString('pt-BR'));
    simulateExport('csv');
}

function showExportModal(format, title) {
    document.getElementById('exportTitle').textContent = `Exportando ${format}`;
    document.getElementById('exportDetails').innerHTML = `
        <strong>Detalhes do Relatório:</strong>
        <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Período: ${document.getElementById('periodFilter').value}</li>
            <li>Tipo: ${document.getElementById('reportType').value}</li>
            <li>Formato: ${format.toUpperCase()}</li>
            <li>Tamanho estimado: ${format === 'pdf' ? '1.2MB' : format === 'excel' ? '850KB' : '450KB'}</li>
        </ul>
    `;
    document.getElementById('exportModal').style.display = 'block';
}

function simulateExport(format) {
    let progress = 0;
    const progressBar = document.getElementById('exportProgress');
    const progressText = document.getElementById('progressText');
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = getProgressMessage(progress, format);
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progressText.innerHTML = `<span style="color: var(--verde-seguro);">✅ Exportação concluída!</span>`;
                setTimeout(() => {
                    closeExportModal();
                    alert(`Relatório exportado em ${format.toUpperCase()} com sucesso!`);
                }, 1000);
            }, 500);
        }
    }, 200);
}

function getProgressMessage(progress, format) {
    if (progress < 20) return 'Coletando dados...';
    if (progress < 40) return 'Processando informações...';
    if (progress < 60) return `Gerando arquivo ${format.toUpperCase()}...`;
    if (progress < 80) return 'Formatando layout...';
    if (progress < 100) return 'Finalizando exportação...';
    return 'Concluído!';
}

function closeExportModal() {
    document.getElementById('exportModal').style.display = 'none';
    document.getElementById('exportProgress').style.width = '0%';
    document.getElementById('progressText').textContent = 'Preparando dados...';
}

// Funções de Geração de Relatórios
function generateReport(type) {
    const reports = {
        weekly: { title: 'Relatório Semanal', duration: '7 dias', sections: 8 },
        monthly: { title: 'Relatório Mensal', duration: '30 dias', sections: 12 },
        mediator: { title: 'Relatório por Mediador', duration: 'Período atual', sections: 6 },
        risk: { title: 'Análise de Riscos', duration: '15 dias', sections: 5 }
    };
    
    const report = reports[type];
    if (!report) return;
    
    if (confirm(`Gerar ${report.title}? Isso pode levar alguns segundos.`)) {
        showExportModal('Relatório', report.title);
        simulateReportGeneration(report);
    }
}

function simulateReportGeneration(report) {
    let progress = 0;
    const progressBar = document.getElementById('exportProgress');
    const progressText = document.getElementById('progressText');
    
    document.getElementById('exportDetails').innerHTML = `
        <strong>Detalhes do Relatório:</strong>
        <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Título: ${report.title}</li>
            <li>Período: ${report.duration}</li>
            <li>Seções: ${report.sections}</li>
            <li>Inclui gráficos e tabelas</li>
        </ul>
    `;
    
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        
        if (progress < 25) {
            progressText.textContent = 'Coletando dados estatísticos...';
        } else if (progress < 50) {
            progressText.textContent = 'Analisando desempenho...';
        } else if (progress < 75) {
            progressText.textContent = 'Gerando visualizações...';
        } else if (progress < 100) {
            progressText.textContent = 'Formatando relatório...';
        } else {
            clearInterval(interval);
            progressText.innerHTML = `<span style="color: var(--verde-seguro);">✅ Relatório gerado com sucesso!</span>`;
            setTimeout(() => {
                closeExportModal();
                alert(`${report.title} gerado e disponível para exportação.`);
            }, 1000);
        }
    }, 300);
}

// Filtros
document.getElementById('periodFilter').addEventListener('change', function() {
    updateReportData(this.value);
});

document.getElementById('reportType').addEventListener('change', function() {
    updateReportView(this.value);
});

function updateReportData(period) {
    console.log(`Atualizando dados para período: ${period}`);
    // Em produção: fazer requisição para atualizar dados
    alert(`Relatórios filtrados para: ${period}`);
}

function updateReportView(type) {
    console.log(`Alterando visão para: ${type}`);
    // Em produção: mostrar/ocultar seções baseadas no tipo
    alert(`Mostrando relatório: ${type}`);
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    renderCharts();
    
    // Atualizar KPIs periodicamente
    setInterval(() => {
        updateKPIs();
    }, 30000);
    
    // Fechar modal ao clicar fora
    const modal = document.getElementById('exportModal');
    window.onclick = function(event) {
        if (event.target === modal) {
            closeExportModal();
        }
    };
});

function updateKPIs() {
    // Simular atualização de KPIs
    const kpiValues = document.querySelectorAll('.kpi-value');
    kpiValues.forEach((kpi, index) => {
        const current = parseInt(kpi.textContent.replace(/,/g, ''));
        const variation = Math.floor(Math.random() * 5) - 2;
        const newValue = Math.max(0, current + variation);
        
        kpi.textContent = newValue.toLocaleString();
        
        // Atualizar tendência
        const trend = kpi.parentElement.querySelector('.kpi-trend');
        if (variation > 0) {
            trend.textContent = `↑ ${variation}% vs anterior`;
            trend.className = 'kpi-trend positive';
        } else if (variation < 0) {
            trend.textContent = `↓ ${Math.abs(variation)}% vs anterior`;
            trend.className = 'kpi-trend negative';
        } else {
            trend.textContent = `→ Estável`;
            trend.className = 'kpi-trend';
        }
    });
}