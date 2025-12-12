// Anotações Clínicas - JavaScript

// Dados de pacientes
const pacientes = [
    {
        id: 1,
        nome: "João Silva",
        avatar: "JS",
        status: "active",
        ultimaSessao: "02/12",
        detalhes: {
            id: "#287",
            status: "Ativo",
            sessoes: 5,
            inicio: "11/11/2024",
            proxima: "09/12/2024",
            foco: "Depressão, Ansiedade"
        },
        anotacoes: [
            {
                id: 1,
                titulo: "Sessão #5 - Avaliação de Progresso",
                tipo: "session",
                data: "02/12/2024 - 14:30",
                conteudo: `
                    <p><strong>Observações:</strong> Paciente demonstra melhora significativa na regulação emocional. Relata que as técnicas de respiração têm sido eficientes em momentos de ansiedade.</p>
                    <p><strong>Intervenções:</strong> Trabalhamos com reestruturação cognitiva dos pensamentos catastróficos. Introduzido conceito de aceitação radical.</p>
                    <p><strong>Plano:</strong> Continuar com exercícios de mindfulness. Próxima sessão focar em habilidades sociais.</p>
                `,
                tags: ["ansiedade", "terapia-cognitiva", "progresso"]
            },
            {
                id: 2,
                titulo: "Sessão #4 - Trabalhando Autocompaixão",
                tipo: "session",
                data: "25/11/2024 - 15:00",
                conteudo: `
                    <p><strong>Tema:</strong> Autocrítica excessiva e perfeccionismo.</p>
                    <p><strong>Atividade:</strong> Exercício da "carta de autocompaixão". Paciente teve dificuldade inicial, mas conseguiu expressar sentimentos de maneira mais gentil consigo mesmo.</p>
                    <p><strong>Homework:</strong> Praticar autofala positiva diariamente.</p>
                `,
                tags: ["autocompaixão", "perfeccionismo", "exercicio"]
            },
            {
                id: 3,
                titulo: "Avaliação Inicial",
                tipo: "assessment",
                data: "11/11/2024 - 10:00",
                conteudo: `
                    <p><strong>Queixa Principal:</strong> Ideação suicida recorrente, isolamento social, perda de interesse.</p>
                    <p><strong>Histórico:</strong> Episódios depressivos anteriores, família com histórico de depressão.</p>
                    <p><strong>Diagnóstico Provisório:</strong> Episódio depressivo moderado.</p>
                    <p><strong>Plano Terapêutico:</strong> Terapia cognitivo-comportamental semanal. Monitoramento de risco.</p>
                `,
                tags: ["avaliação", "depressão", "TCC"]
            }
        ]
    },
    {
        id: 2,
        nome: "Ana Costa",
        avatar: "AC",
        status: "scheduled",
        ultimaSessao: "01/12"
    },
    {
        id: 3,
        nome: "Mariana Oliveira",
        avatar: "MO",
        status: "inactive",
        ultimaSessao: "30/11"
    },
    {
        id: 4,
        nome: "Roberto Santos",
        avatar: "RS",
        status: "active",
        ultimaSessao: "29/11"
    },
    {
        id: 5,
        nome: "Carla Mendes",
        avatar: "CM",
        status: "follow-up",
        ultimaSessao: "28/11"
    }
];

let pacienteAtualId = 1;

// Funções Principais
function selectPatient(patientId) {
    // Remover seleção anterior
    document.querySelectorAll('.patient-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Adicionar seleção atual
    const selectedItem = document.querySelector(`.patient-item:nth-child(${patientId})`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
    
    // Atualizar dados do paciente
    pacienteAtualId = patientId;
    const paciente = pacientes.find(p => p.id === patientId);
    
    if (paciente) {
        // Atualizar nome do paciente
        document.getElementById('selectedPatientName').textContent = paciente.nome;
        
        // Atualizar badges
        const badgesContainer = document.querySelector('.patient-details');
        if (badgesContainer && paciente.detalhes) {
            badgesContainer.innerHTML = `
                <span class="badge-info">ID: ${paciente.detalhes.id}</span>
                <span class="badge-success">${paciente.detalhes.status}</span>
                <span class="badge-warning">${paciente.detalhes.sessoes} sessões</span>
            `;
        }
        
        // Atualizar resumo do paciente
        if (paciente.detalhes) {
            document.querySelector('.summary-grid').innerHTML = `
                <div class="summary-item">
                    <div class="summary-label">Início do Tratamento</div>
                    <div class="summary-value">${paciente.detalhes.inicio}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Sessões Realizadas</div>
                    <div class="summary-value">${paciente.detalhes.sessoes}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Próxima Sessão</div>
                    <div class="summary-value">${paciente.detalhes.proxima}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Foco Principal</div>
                    <div class="summary-value">${paciente.detalhes.foco}</div>
                </div>
            `;
        }
        
        // Atualizar lista de anotações
        atualizarAnotacoes(patientId);
        
        alert(`Paciente selecionado: ${paciente.nome}`);
    }
}

function newNote() {
    const form = document.getElementById('newNoteForm');
    form.style.display = 'block';
    
    // Scroll para o formulário
    form.scrollIntoView({ behavior: 'smooth' });
}

function cancelNote() {
    document.getElementById('newNoteForm').style.display = 'none';
    
    // Limpar campos
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    document.getElementById('noteTags').value = '';
}

function saveNote() {
    const titulo = document.getElementById('noteTitle').value;
    const conteudo = document.getElementById('noteContent').value;
    const tipo = document.getElementById('noteType').value;
    const data = document.getElementById('noteDate').value;
    const tags = document.getElementById('noteTags').value;
    
    if (!titulo || !conteudo) {
        alert('Por favor, preencha título e conteúdo da anotação.');
        return;
    }
    
    // Formatar data
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
    
    // Criar nova anotação
    const novaAnotacao = {
        id: Date.now(),
        titulo: titulo,
        tipo: tipo,
        data: `${dataFormatada} - ${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}`,
        conteudo: `<p>${conteudo.replace(/\n/g, '</p><p>')}</p>`,
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    
    // Adicionar ao paciente atual
    const paciente = pacientes.find(p => p.id === pacienteAtualId);
    if (paciente) {
        if (!paciente.anotacoes) paciente.anotacoes = [];
        paciente.anotacoes.unshift(novaAnotacao); // Adicionar no início
        
        // Atualizar contador de sessões
        if (paciente.detalhes) {
            paciente.detalhes.sessoes++;
        }
    }
    
    // Atualizar lista
    atualizarAnotacoes(pacienteAtualId);
    
    // Fechar formulário
    cancelNote();
    
    alert('Anotação salva com sucesso!');
}

function atualizarAnotacoes(patientId) {
    const paciente = pacientes.find(p => p.id === patientId);
    const notesList = document.getElementById('notesList');
    
    if (!paciente || !paciente.anotacoes || !notesList) return;
    
    notesList.innerHTML = '';
    
    paciente.anotacoes.forEach(anotacao => {
        const tagsHTML = anotacao.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
            <div class="note-header">
                <div class="note-title">${anotacao.titulo}</div>
                <div class="note-type ${anotacao.tipo}">${anotacao.tipo === 'session' ? 'Sessão' : 
                                                         anotacao.tipo === 'assessment' ? 'Avaliação' :
                                                         anotacao.tipo === 'progress' ? 'Progresso' :
                                                         anotacao.tipo === 'incident' ? 'Incidente' : 'Follow-up'}</div>
            </div>
            <div class="note-date">${anotacao.data}</div>
            <div class="note-content">${anotacao.conteudo}</div>
            <div class="note-footer">
                <div class="note-tags">${tagsHTML}</div>
                <div class="note-actions">
                    <button class="btn-action" onclick="editNote(${anotacao.id})">✏️ Editar</button>
                    <button class="btn-action" onclick="deleteNote(${anotacao.id})">🗑️ Excluir</button>
                </div>
            </div>
        `;
        
        notesList.appendChild(noteCard);
    });
}

function editNote(noteId) {
    document.getElementById('editModal').style.display = 'block';
}

function deleteNote(noteId) {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
        const paciente = pacientes.find(p => p.id === pacienteAtualId);
        if (paciente && paciente.anotacoes) {
            paciente.anotacoes = paciente.anotacoes.filter(a => a.id !== noteId);
            atualizarAnotacoes(pacienteAtualId);
            alert('Anotação excluída com sucesso.');
        }
    }
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

function addPatient() {
    alert('Funcionalidade de adicionar paciente disponível na versão completa.');
    // Em produção: abrir formulário de novo paciente
}

function exportNotes() {
    const format = prompt('Exportar anotações como: PDF, Excel ou CSV?');
    if (format) {
        alert(`Exportando anotações em formato ${format.toUpperCase()}...`);
        // Simular exportação
        const link = document.createElement('a');
        link.href = '#';
        link.download = `anotacoes_paciente_${pacienteAtualId}.${format.toLowerCase()}`;
        link.click();
    }
}

// Busca de pacientes
document.getElementById('patientSearch')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const patientItems = document.querySelectorAll('.patient-item');
    
    patientItems.forEach(item => {
        const name = item.querySelector('strong').textContent.toLowerCase();
        if (name.includes(searchTerm) || searchTerm === '') {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar primeiro paciente por padrão
    selectPatient(1);
    
    // Configurar data atual no formulário
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('noteDate').value = today;
    
    // Fechar modal ao clicar fora
    const modal = document.getElementById('editModal');
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
});