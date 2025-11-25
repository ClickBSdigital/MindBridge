🧠 MindBridge - Primeiros Socorros Emocionais Inteligentes
📋 Sobre o Projeto
O MindBridge é uma plataforma digital inovadora desenvolvida para oferecer suporte emocional imediato através de tecnologia inteligente e acolhimento humano. A plataforma conecta usuários em sofrimento emocional com mediadores treinados e profissionais de saúde mental, funcionando como uma ponte entre o momento de crise e o atendimento especializado.

🎯 Objetivo Principal: Democratizar o acesso à saúde mental e prevenir casos de suicídio através de intervenção digital imediata.

🚀 Funcionalidades Principais
👤 Para Usuários
Acesso 24/7 a suporte emocional

Conexão instantânea com mediadores treinados

Chat em tempo real com profissionais

Botão de emergência para crises imediatas

Recursos de autoajuda e psicoeducação

Encaminhamento inteligente para profissionais

🛡️ Para Mediadores
Dashboard de monitoramento em tempo real

Sistema de alertas para situações de risco

Ferramentas de suporte e protocolos

Supervisão profissional integrada

Histórico de atendimentos

👨‍⚕️ Para Profissionais
Gestão de pacientes e encaminhamentos

Agenda de teleatendimentos

Ferramentas clínicas integradas (PHQ-9, GAD-7, etc.)

Relatórios automáticos

Integração com rede de saúde

🏗️ Arquitetura do Sistema
Estrutura de Arquivos:
mindbridge/
│
├── 📄 home.html                    # Landing Page
├── 📄 index.html                   # Sistema de Login
├── 📄 dashboard-usuario.html       # Dashboard do Usuário
├── 📄 dashboard-monitor.html       # Dashboard do Monitor
├── 📄 dashboard-profissional.html  # Dashboard do Profissional
├── 📄 chat.html                    # Sistema de Chat
├── 📄 emergencia.html              # Página de Emergência
│
├── 📁 css/
│   ├── 🎨 style.css               # Estilos do Sistema
│   └── 🎨 home.css                # Estilos da Landing Page
│
├── 📁 js/
│   ├── ⚡ script.js               # Funcionalidades do Sistema
│   └── ⚡ home.js                 # Funcionalidades da Home
│
└── 📁 assets/                     # Imagens e recursos

Tecnologias Utilizadas
Frontend: HTML5, CSS3, JavaScript (ES6+)

Design System: CSS Variables, Flexbox, Grid Layout

Fontes: Google Fonts (Inter, Bebas Neue)

Ícones: Emojis nativos (performance)

Responsividade: Mobile-first approach

🎨 Design System
Paleta de Cores:
:root {
  --azul-primario: #4A90E2;     /* Confiança, calma */
  --verde-esperanca: #2E8B57;   /* Esperança, crescimento */
  --vermelho-emergencia: #DC3545; /* Urgência, atenção */
  --cinza-claro: #F8F9FA;       /* Fundos, neutralidade */
  --cinza-escuro: #212529;      /* Textos principais */
  --branco: #FFFFFF;            /* Elementos claros */
}

Tipografia
Inter: Textos corporativos e conteúdo

Bebas Neue: Títulos e elementos de destaque

🔐 Sistema de Segurança
Recursos Implementados
✅ Criptografia de conversas

✅ Sistema de sinalização automática

✅ Protocolos de emergência

✅ Moderação supervisionada

✅ Backup de dados críticos

✅ Conformidade com LGPD

Níveis de Risco
🟡 Baixo: Linguagem preocupante

🟠 Médio: Menção a autoflagelo

🔴 Alto: Ideação suicida explícita

📱 Fluxos de Usuário
1. Fluxo do Usuário em Crise:

Acesso → Triagem → Chat com Mediador → Avaliação → 
[Baixo Risco: Recursos de Autoajuda] 
[Médio Risco: Acompanhamento Contínuo]
[Alto Risco: Encaminhamento Profissional]

2. Fluxo do Mediador:

Login → Dashboard → Monitorar Salas → Intervir → 
Sinalizar → Encaminhar → Documentar

3. Fluxo do Profissional:

🚀 Como Executar o Projeto
Requisitos
Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+)

Servidor web local (opcional)

Instalação Local
1. Clone o repositório:
git clone https://github.com/seu-usuario/mindbridge.git

2. Acesse a pasta:
cd mindbridge

3. Execute com servidor local:

# Com Python
python -m http.server 8000

# Com Node.js
npx http-server

# Com PHP
php -S localhost:8000

4. Acesse no navegador:

http://localhost:8000/home.html

Deploy em Produção
Hospedagem em qualquer servidor web estático

CDN para assets

SSL obrigatório para segurança

👥 Público-Alvo
🤝 Usuários Finais
Pessoas em sofrimento emocional

Indivíduos com dificuldade de acesso a saúde mental

População de regiões com escassez de profissionais

Jovens e adultos em situações de crise

🎓 Mediadores
Voluntários com treinamento em escuta ativa

Estudantes de psicologia e áreas afins

Profissionais com interesse em saúde mental comunitária

💼 Profissionais
Psicólogos clínicos

Psiquiatras

Assistentes sociais

Terapeutas

📊 Métricas e Impacto
Indicadores de Sucesso
Tempo de resposta < 2 minutos

Taxa de satisfação > 90%

Redução de encaminhamentos desnecessários

Aumento no acesso a saúde mental

Prevenção de crises graves

Dados Regionais (MS)
+23 municípios sem psicólogos no SUS

Tempo de espera por consulta: até 6 meses

Prevalência de depressão: 15% acima da média nacional

🔮 Roadmap de Desenvolvimento
Fase 1 ✅
Protótipo funcional

Sistema de chat básico

Dashboards para todos os perfis

Landing page explicativa

Fase 2 🚧
Integração com banco de dados

Sistema de notificações em tempo real

Autenticação segura

API para integrações

Fase 3 📅
Aplicativo móvel nativo

Inteligência Artificial para triagem

Integração com SUS

Analytics avançado

🤝 Contribuição
Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

Padrões de Código
HTML: Semântico e acessível

CSS: BEM methodology

JS: ES6+ modules

Commits: Conventional commits

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

🆘 Suporte e Contato
Canais de Atendimento
Email: suporte@mindbridge.com.br

Telefone: (67) 99999-9999

Emergência: CVV 188

Desenvolvedores
Eliandro Aparecido Elias da Silva

Heinrich Belfort Feltrin

Jowilson Ribas Nunes

Orientação
Prof. Me. Ederson Roberto Da Costa

💚 "Cuidar da mente é atravessar pontes interiores."
MindBridge © 2025 - Desenvolvido com 💚 em Campo Grande-MS