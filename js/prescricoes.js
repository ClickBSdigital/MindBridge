// Prescrições e Encaminhamentos - JavaScript

let currentTab = 'prescriptions';

// Funções das Tabs
function switchTab(tabName) {
    // Atualizar tabs ativas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Ativar nova tab
    document.querySelector(`.tab-btn:nth-child(${getTabIndex(tabName)})`).classList.add('active');
    document.getElementById(`${tabName}Tab`).classList.add('active');
    
    currentTab = tabName;
}

function getTabIndex(tabName) {
    const tabs = ['prescriptions', 'referrals', 'templates', 'history'];
    return tabs.indexOf(tabName) + 1;
}

// Funções de Prescrição
function newPrescription() {
    document.getElementById('newPrescriptionForm').style.display = 'block';
    document.getElementById('newPrescriptionForm').scrollIntoView({ behavior: 'smooth' });
    
    // Preencher data atual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').value = today;
}

function cancelPrescription() {
    document.getElementById('newPrescriptionForm').style.display = 'none';
    
    // Limpar campos
    document.getElementById('medicationName').value = '';
    document.getElementById('medicationDosage').value = '';
    document.getElementById('prescriptionInstructions').value = '';
}

function savePrescription() {
    const patient = document.getElementById('prescriptionPatient').value;
    const medication = document.getElementById('medicationName').value;
    const dosage = document.getElementById('medicationDosage').value;
    const frequency = document.getElementById('medicationFrequency').value;
    const startDate = document.getElementById('startDate').value;
    const duration = document.getElementById('prescriptionDuration').value;
    const instructions = document.getElementById('prescriptionInstructions').value;
    
    if (!patient || !medication || !dosage) {
        alert('Por favor, preencha os campos obrigatórios: Paciente, Medicamento e Dosagem.');
        return;
    }
    
    // Formatar data
    const startDateFormatted = new Date(startDate).toLocaleDateString('pt-BR');
    
    // Criar novo cartão de prescrição
    const prescriptionsGrid = document.querySelector('.prescriptions-grid');
    if (prescriptionsGrid) {
        const patientName = getPatientName(patient);
        const patientAvatar = patientName.split(' ').map(n => n[0]).join('').toUpperCase();
        
        const newCard = document.createElement('div');
        newCard.className = 'prescription-card';
        newCard.innerHTML = `
            <div class="prescription-header">
                <div class="medication-info">
                    <h4>${medication}</h4>
                    <div class="medication-details">
                        <span class="dosage">${dosage}</span>
                        <span class="frequency">${getFrequencyText(frequency)}</span>
                    </div>
                </div>
                <div class="patient-info">
                    <div class="patient-avatar-small">${patientAvatar}</div>
                    <div>${patientName}</div>
                </div>
            </div>
            <div class="prescription-body">
                <div class="prescription-meta">
                    <div class="meta-item">
                        <span class="meta-label">Início:</span>
                        <span class="meta-value">${startDateFormatted}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Duração:</span>
                        <span class="meta-value">${duration} dias</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Status:</span>
                        <span class="status-active">Ativo</span>
                    </div>
                </div>
                <div class="prescription-instructions">
                    <strong>Instruções:</strong> ${instructions || 'Seguir orientações do profissional.'}
                </div>
            </div>
            <div class="prescription-footer">
                <div class="actions">
                    <button class="btn-action" onclick="renewPrescription(${Date.now()})">🔄 Renovar</button>
                    <button class="btn-action" onclick="printPrescription(${Date.now()})">🖨️ Imprimir</button>
                    <button class="btn-action" onclick="editPrescription(${Date.now()})">✏️ Editar</button>
                </div>
            </div>
        `;
        
        // Adicionar no início
        prescriptionsGrid.insertBefore(newCard, prescriptionsGrid.firstChild);
    }
    
    // Fechar formulário
    cancelPrescription();
    
    // Atualizar estatísticas
    updateStats();
    
    alert('Prescrição salva com sucesso!');
}

function getPatientName(patientId) {
    const patients = {
        '1': 'João Silva',
        '2': 'Ana Costa',
        '3': 'Mariana Oliveira'
    };
    return patients[patientId] || 'Paciente';
}

function getFrequencyText(frequency) {
    const frequencies = {
        '1x': '1x ao dia',
        '2x': '2x ao dia',
        '3x': '3x ao dia',
        'sos': 'SOS',
        'weekly': 'Semanal'
    };
    return frequencies[frequency] || frequency;
}

function renewPrescription(prescriptionId) {
    if (confirm('Deseja renovar esta prescrição por mais 30 dias?')) {
        alert('Prescrição renovada com sucesso!');
        // Em produção: atualizar data de validade
    }
}

function printPrescription(prescriptionId) {
    document.getElementById('printModal').style.display = 'block';
}

function editPrescription(prescriptionId) {
    alert('Funcionalidade de edição disponível na versão completa.');
}

// Funções de Encaminhamento
function newReferral() {
    alert('Funcionalidade de novo encaminhamento disponível na versão completa.');
}

function sendReminder(referralId) {
    if (confirm('Enviar lembrete para o paciente sobre este encaminhamento?')) {
        alert('Lembrete enviado com sucesso!');
    }
}

function printReferral(referralId) {
    alert('Imprimindo encaminhamento...');
    // Em produção: abrir modal de impressão específico
}

function viewReport(referralId) {
    alert('Abrindo relatório do especialista...');
    // Em produção: mostrar relatório em modal
}

// Funções do Modal
function closePrintModal() {
    document.getElementById('printModal').style.display = 'none';
}

function updateStats() {
    // Atualizar contador de prescrições ativas
    const prescriptionCards = document.querySelectorAll('.prescription-card').length;
    const statNumber = document.querySelector('.stat-number');
    if (statNumber) {
        statNumber.textContent = prescriptionCards;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Configurar data atual nos formulários
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = document.getElementById('startDate');
    if (startDateInput) {
        startDateInput.value = today;
        startDateInput.min = today;
    }
    
    // Fechar modais ao clicar fora
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    });
    
    // Atualizar estatísticas iniciais
    updateStats();
});