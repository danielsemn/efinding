# E-Finding: Conexão Gamer


## 🎮 Sobre o Projeto
A **E-Finding** é uma plataforma dedicada a conectar jogadores, equipes e organizadores, com o objetivo de fortalecer a cena competitiva amadora de e-sports. O projeto visa democratizar o acesso ao cenário competitivo, oferecendo ferramentas simples e confiáveis para quem deseja competir, assistir ou organizar eventos.

---

## ✨ Funcionalidades
O ecossistema do E-Finding é dividido em áreas principais para facilitar a jornada do usuário:

*   **Página Inicial (Landing Page):** Apresentação da plataforma com um carrossel dinâmico de jogos e atalhos rápidos para as áreas de atuação.
*   **Hub de Competições:** Central para divulgar competições, inscrever times, encontrar equipes ou assistir a transmissões na Twitch.
*   **Sistema de Recrutamento:** Mural de vagas para jogos como *League of Legends, Valorant, Free Fire e Counter Strike*, com filtragem por Elo/Rank e status da vaga.
*   **Inscrição em Torneios:** Painéis por modalidade com dados de campeonatos (datas, vagas, premiação) e um "Hall da Fama" para torneios encerrados.
*   **Formulários em Modais:** Experiência fluida com formulários em modais flutuantes que não recarregam a página.

---

## 🚀 Tecnologias Utilizadas
O projeto foi desenvolvido seguindo o modelo **Vanilla** (sem frameworks):

*   **HTML5:** Estruturação semântica de todo o sistema.
*   **CSS3:** 
    *   Estilização Dark/Neon (roxo e azul).
    *   Animações personalizadas (`@keyframes`).
    *   Layout totalmente responsivo (Media Queries).
    *   Variáveis CSS para consistência de design.
*   **JavaScript:**
    *   Manipulação de carrossel.
    *   Transições de página suaves (fade).
    *   Manipulação do DOM para modais e formulários.

---

## 📂 Estrutura de Arquivos
```text
/
├── index.html              # Landing page principal
├── html/
│   ├── competicoes.html    # Central de torneios
│   ├── modalidades.html    # Lista de campeonatos por jogo
│   └── encontrar-times.html # Mural de recrutamento
├── css/
│   ├── main.css            # Estilos globais e responsividade
│   └── aditional.css       # Estilização de cards e modais
├── js/
│   └── animation.js        # Lógica de interatividade

🛠 Como Executar

O projeto não exige instalação de dependências ou configurações complexas de servidor.

    Clone este repositório para sua máquina local.

    Abra o arquivo index.html diretamente no seu navegador de preferência.

🗺 Próximos Passos (Roadmap)

    [ ] Filtro Global Front-end: Implementar a funcionalidade de filtro por modalidade diretamente pelos ícones do cabeçalho.

    [ ] Desenvolvimento Back-end: Criação de uma API robusta para gerenciamento de banco de dados (usuários, times e vagas).

    [ ] Transição para React: Refatoração do front-end para React, visando melhor componentização, gerenciamento de estado e escalabilidade.