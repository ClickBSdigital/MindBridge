// Painel de Supervisão - JavaScript

function viewConversation(roomId) {
    alert(`Acessando conversa #${roomId}`);
    // Em produção: window.location.href = `chat-monitor.html?room=${roomId}`;
}

function reviewFlag(roomId) {
    if (confirm(`Deseja revisar a conversa #${roomId}?`)) {
        alert(`Abrindo conversa #${roomId} para revisão...`);
        // Em produção: abrir modal ou página de revisão
    }
}

function dismissFlag(roomId) {
    if (confirm(`Tem certeza que deseja descartar a sinalização da conversa #${roomId}?`)) {
        alert(`Sinalização da conversa #${roomId} descartada.`);
        // Simular remoção da linha
        const row = document.querySelector(`tr[data-room="${roomId}"]`);
        if (row) row.remove();
    }
}

function openAnnouncement() {
    const message = prompt("Digite o anúncio para todos os mediadores:");
    if (message) {
        alert(`Anúncio enviado: "${message}"`);
    }
}

function openSupportRequest() {
    alert("Abrindo formulário de solicitação de suporte...");
    // Em produção: abrir modal de solicitação
}

function openEscalation() {
    const roomId = prompt("Digite o número da sala para escalonar:");
    if (roomId) {
        alert(`Caso #${roomId} escalonado para profissional especializado.`);
    }
}

function openTraining() {
    window.location.href = "treinamento.html";
}

function openAnalytics() {
    alert("Abrindo painel de analytics...");
    // Em produção: window.location.href = "relatorios.html";
}

function openSettings() {
    alert("Abrindo configurações do painel...");
    // Em produção: abrir modal de configurações
}

// Simular atualizações em tempo real
let conversationCount = 24;
let mediatorCount = 8;

function updateStats() {
    // Atualizar estatísticas (simulação)
    conversationCount += Math.floor(Math.random() * 3) - 1;
    conversationCount = Math.max(20, Math.min(30, conversationCount));
    
    document.querySelectorAll('.stat-number')[1].textContent = conversationCount;
    
    // Atualizar hora dos registros
    const timeElements = document.querySelectorAll('.conversation-meta span:last-child');
    timeElements.forEach(el => {
        const currentTime = new Date().toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        el.textContent = `⏰ ${currentTime}`;
    });
}

// Atualizar a cada 30 segundos
setInterval(updateStats, 30000);

// Inicializar tooltips
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar eventos de hover nas conversas
    const conversationItems = document.querySelectorAll('.conversation-item');
    conversationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Adicionar data attributes para as linhas da tabela
    const tableRows = document.querySelectorAll('.flagged-table tbody tr');
    tableRows.forEach((row, index) => {
        const roomId = row.querySelector('td:first-child').textContent.replace('#', '');
        row.setAttribute('data-room', roomId);
    });
});