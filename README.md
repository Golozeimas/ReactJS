# 🐉 Dragon Ball Wiki — Repositório de Estudos em React JS

Este projeto foi desenvolvido com fins de aprendizado e reúne os principais conceitos fundamentais do **React JS** com **Vite**, desde componentes básicos até consumo de APIs e roteamento.

---

## 🚀 Tecnologias Utilizadas

- [React 19](https://react.dev/) — Biblioteca principal para construção de interfaces
- [Vite 8](https://vitejs.dev/) — Ferramenta de build e servidor de desenvolvimento
- [React Router DOM v7](https://reactrouter.com/) — Roteamento entre páginas
- [ESLint](https://eslint.org/) — Linting de código

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── header.jsx          # Componente de cabeçalho reutilizável
├── pages/
│   ├── Api.jsx             # Consumo de API — Dragon Ball
│   ├── App.jsx             # Exemplos de useState e Props
│   ├── App2.jsx            # Formulário com estados controlados
│   ├── ToDoList.jsx        # Lista de tarefas com localStorage
│   ├── style.css           # Estilos globais das páginas
│   └── Vendas/
│       └── Venda.jsx       # Página de detalhe de produto (useParams)
└── routes/
    └── AppRoutes.jsx       # Configuração das rotas da aplicação
```

---

## 📚 Conceitos Abordados

### 🔷 Componentes e Props
Criação de componentes funcionais e passagem de dados via `props`.
> Exemplos em: `App.jsx`, `header.jsx`

### 🔷 useState
Gerenciamento de estado local com o hook `useState` — nomes, contadores e objetos.
> Exemplos em: `App.jsx`, `App2.jsx`

### 🔷 useEffect
Execução de efeitos colaterais, como chamadas a APIs no carregamento do componente.
> Exemplos em: `Api.jsx`, `ToDoList.jsx`, `Venda.jsx`

### 🔷 Consumo de API com fetch
Busca de dados externos com `fetch` e tratamento de respostas JSON.
> APIs utilizadas:
> - [Dragon Ball API](https://dragonball-api.com/) — lista de personagens
> - [Fake Store API](https://fakestoreapi.com/) — detalhe de produto por ID

### 🔷 Formulários Controlados
Controle de inputs com `useState` e captura de submissão com `onSubmit`.
> Exemplos em: `App2.jsx`, `ToDoList.jsx`

### 🔷 Persistência com localStorage
Salvamento e recuperação de dados no navegador.
> Exemplo em: `ToDoList.jsx`

### 🔷 React Router DOM
Configuração de rotas, navegação entre páginas e uso de parâmetros dinâmicos na URL.
> Rotas configuradas em: `AppRoutes.jsx`

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Api.jsx` | Lista de personagens Dragon Ball |
| `/app` | `App.jsx` | Exemplos de componentes e hooks |
| `/produtos/:id` | `Venda.jsx` | Detalhe de produto por ID |
| `*` | — | Página 404 |

### 🔷 useParams
Captura de parâmetros dinâmicos da URL para busca de recursos específicos em API.
> Exemplo em: `Venda.jsx`

---

## ▶️ Como Executar

**Pré-requisito:** Node.js `>= 20.19.0`

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 🎯 Objetivo

Este repositório serve como caderno de estudos progressivo, onde cada página representa um conceito novo aprendido na jornada com React JS.
