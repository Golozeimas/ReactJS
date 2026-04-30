# ReactJS — Estudos e Prática

Repositório dedicado ao aprendizado prático de **React JS**, abordando conceitos fundamentais como gerenciamento de estado, ciclo de vida de componentes, consumo de APIs externas e navegação entre rotas.

---

## Descrição

Este projeto foi desenvolvido com fins exclusivamente educacionais, servindo como base de estudo para os principais recursos do ecossistema React. Ao longo do desenvolvimento, foram explorados padrões como `useState`, `useEffect`, componentização, roteamento com React Router DOM e integração com APIs REST públicas — incluindo a [Dragon Ball API](https://dragonball-api.com) e a [Fake Store API](https://fakestoreapi.com).

---

## Funcionalidades

- Listagem de personagens da Dragon Ball com imagem e descrição, consumidos via API
- Navegação entre páginas utilizando React Router DOM
- Formulário de cadastro de usuário com controle de estado via `useState`
- Lista de tarefas (To-Do List) com persistência via `localStorage`
- Visualização de produto individual por parâmetro de rota dinâmica (`useParams`)
- Exemplos isolados de componentes funcionais com props e estado

---

## Tecnologias Utilizadas

| Tecnologia        | Versão / Observação              |
|-------------------|----------------------------------|
| JavaScript (ES6+) | Linguagem principal              |
| HTML5 / CSS3      | Estrutura e estilização          |
| React JS          | Biblioteca de interface (UI)     |
| React Router DOM  | Roteamento client-side           |
| Vite              | Ferramenta de build e dev server |

---

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a passo

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/reactjs-estudos.git
cd reactjs-estudos
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

---

## Uso

Após iniciar o servidor de desenvolvimento, as seguintes rotas estarão disponíveis:

| Rota            | Componente       | Descrição                                      |
|-----------------|------------------|------------------------------------------------|
| `/`             | `Api.jsx`        | Listagem de personagens da Dragon Ball         |
| `/app`          | `App.jsx`        | Exemplos de `useState` e componentes           |
| `/produtos/:id` | `Venda.jsx`      | Detalhes de um produto pelo ID (Fake Store API)|
| `*`             | —                | Página 404 para rotas não encontradas          |

> Para navegar entre as páginas, utilize o link presente na página principal ou edite a URL diretamente.

---

## Estrutura do Projeto

```
src/
├── components/
│   └── header.jsx          # Componente de cabeçalho global
├── pages/
│   ├── Api.jsx             # Consumo da Dragon Ball API
│   ├── App.jsx             # Exemplos de useState e props
│   ├── App2.jsx            # Formulário de cadastro com estado
│   ├── ToDoList.jsx        # Lista de tarefas com localStorage
│   ├── style.css           # Estilos globais das páginas
│   └── Vendas/
│       └── Venda.jsx       # Detalhe de produto via useParams
├── routes/
│   └── AppRoutes.jsx       # Definição de rotas com React Router
└── main.jsx                # Ponto de entrada da aplicação
```

---

## APIs Utilizadas

### Dragon Ball API

- **Base URL:** `https://dragonball-api.com/api`
- **Endpoint:** `GET /characters`
- **Retorno:** Lista de personagens com `id`, `name`, `image` e `description`

### Fake Store API

- **Base URL:** `https://fakestoreapi.com`
- **Endpoint:** `GET /products/:id`
- **Retorno:** Objeto de produto com `title`, `image` e `price`

> Ambas as APIs são públicas e gratuitas, não requerendo autenticação.

---

## Autor

**João Matheus Ramos Araújo**

Desenvolvedor em formação, focado no aprendizado de tecnologias front-end modernas.

---

## Licença

Este projeto está sob **Licença de Estudos**. O conteúdo é de uso exclusivamente educacional e não deve ser utilizado em ambiente de produção sem as devidas adaptações e revisões.
