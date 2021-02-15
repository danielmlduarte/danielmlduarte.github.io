const mainProjects = [
  {
    name: 'App Recipes',
    description: `App de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API ou Redux.
    Nele será possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks.    
    A base de dados foram 2 APIs distintas, uma para comidas e outra para bebidas.    
    O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.`,
    stacks: ['React Bootstrap', 'React Hooks', 'Redux', 'RTL', 'Kanban', 'Requisições a APIs'],
    team: true,
    time: '10 dias',
    git: 'https://github.com/danielmlduarte/app-recipes',
    run: 'https://danielmlduarte.github.io/app-recipes/',
  },
  {
    name: 'Trivia React Redux',
    description: 'Um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão americano) utilizando React e Redux, desenvolvendo em equipe suas funcionalidades de acordo com as demandas definidas em um quadro Kanban.',
    stacks: ['React', 'Redux', 'Kanban', 'Requisições a API'],
    team: true,
    time: '5 dias',
    git: 'https://github.com/danielmlduarte/trivia-react-redux',
    run: 'https://danielmlduarte.github.io/trivia-react-redux',
  },
  {
    name: 'React Testing Library',
    description: 'Nesse projeto foram escritos testes para uma aplicação React. Com base em uma aplicação pronta, elaborei teste que verificavam se as funcionalidades se comportavam como o esperado',
    stacks: ['Jest', 'RTL'],
    team: false,
    time: '2 dias',
    git: 'https://github.com/danielmlduarte/react-testing-library-practice',
    run: 'https://danielmlduarte.github.io/react-testing-library-practice',
  },
  {
    name: 'Starwars Datatable Hooks',
    description: 'Uma lista com filtros de planetas do universo de StarWars usando Context API e Hooks para controlar os estados globais.',
    stacks: ['React', 'React Hooks', 'ContexAPI', 'Requisições a API'],
    team: false,
    time: '2 dias',
    git: 'https://github.com/danielmlduarte/starwars-datatable-hooks',
    run: 'https://danielmlduarte.github.io/starwars-datatable-hooks',
  },
  {
    name: 'Trybe Wallet',
    description: 'Carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de: Adicionar, remover e editar um gasto, Visualizar uma tabelas com seus gastos, Visualizar o total de gastos convertidos para uma moeda de escolhe',
    stacks: ['React', 'Redux', 'Requisições a API'],
    team: false,
    time: '2 dias',
    git: 'https://github.com/danielmlduarte/trybe-wallet',
    run: 'https://danielmlduarte.github.io/trybe-wallet',
  },
  {
    name: 'Frontend Online Store',
    description: 'Criar uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvendo em suas funcionalidades de acordo com demandas definidas em um quadro Kanban, em um cenário mais próximo ao do mercado de trabalho',
    stacks: ['React', 'Kanban', 'Requisições a API'],
    team: true,
    time: '3 dias',
    git: 'https://github.com/danielmlduarte/frontend-online-store',
    run: 'https://danielmlduarte.github.io/frontend-online-store',
  },
];

export default mainProjects;
