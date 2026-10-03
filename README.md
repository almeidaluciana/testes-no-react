# Testes em React

Projeto desenvolvido para a aula de **Testes em React**, com o objetivo de apresentar conceitos básicos de testes automatizados em aplicações React.

Os testes são realizados utilizando:

- **Vitest**: execução dos testes.
- **React Testing Library**: testes dos componentes React.
- **User Event**: simulação de ações realizadas pelo usuário.
- **jest-dom**: verificações específicas para elementos do DOM.

## Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/almeidaluciana/testes-no-react.git
```

Acesse a pasta do projeto:

```bash
cd testes-no-react
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

## Executando os testes

Para executar os testes:

```bash
npm run test
```

Para executar os testes uma única vez:

```bash
npm run test -- --run
```

## Cobertura de testes

Para verificar a cobertura:

```bash
npm run test -- --coverage
```

A cobertura apresenta informações sobre:

- **Statements**: instruções executadas.
- **Branches**: caminhos condicionais executados.
- **Functions**: funções executadas.
- **Lines**: linhas executadas.

> **Importante:** 100% de cobertura não significa que a aplicação está livre de erros. A cobertura indica quanto do código foi executado pelos testes, mas não garante que todos os comportamentos estejam corretos.

## Arquivos de testes

Os arquivos de teste podem ser criados próximos aos componentes, utilizando a extensão:

```text
.test.jsx
```

Exemplo:

```text
src/
├── Contador.jsx
└── Contador.test.jsx
```
