// Script para funcionalidades básicas
document.addEventListener('DOMContentLoaded', function() {
    // Seleção de tipo de usuário no login
    const userTypeButtons = document.querySelectorAll('.user-type-btn');
    
    userTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            userTypeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Login simples (apresentação)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const userType = document.querySelector('.user-type-btn.active').dataset.type;
            
            switch(userType) {
                case 'user':
                    window.location.href = 'dashboard-usuario.html';
                    break;
                case 'monitor':
                    window.location.href = 'dashboard-monitor.html';
                    break;
                case 'professional':
                    window.location.href = 'dashboard-profissional.html';
                    break;
            }
        });
    }
});

// Simulação de dados
const mockData = {
    usuariosOnline: [
        { id: 1, nome: "João Silva", tipo: "user", status: "online" },
        { id: 2, nome: "Maria Santos", tipo: "user", status: "online" }
    ],
    mediadoresOnline: [
        { id: 1, nome: "Carlos Medeiros", especialidade: "Escuta Ativa", status: "online" },
        { id: 2, nome: "Ana Costa", especialidade: "Suporte Emocional", status: "online" }
    ],
    profissionaisOnline: [
        { id: 1, nome: "Dra. Paula Lima", especialidade: "Psicóloga", crp: "12345", status: "online" }
    ]
};