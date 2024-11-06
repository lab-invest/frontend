
# InvestLab

## Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Rodando o projeto](#rodando-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Requisitos

Antes de iniciar, é necessário ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão recomendada: 20 ou superior)
- [Git](https://git-scm.com/) (para clonar o repositório)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seuusuario/seuprojeto.git
   ```

2. **Entre na pasta do projeto:**

   ```bash
   cd frontend
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

## Rodando o Projeto

Após instalar as dependências, você pode rodar o projeto localmente:

```bash
npm run dev
```

- O projeto estará disponível em `http://localhost:3000`.
- O navegador deve abrir automaticamente. Caso contrário, acesse o endereço manualmente.

## Scripts Disponíveis

No projeto, você pode executar alguns scripts adicionais:

- **`npm run dev`**: Inicia o projeto em modo de desenvolvimento.
- **`npm run build`**: Compila o projeto para produção, gerando uma pasta `build` com os arquivos otimizados.

## Estrutura de Pastas

Abaixo está uma estrutura simplificada do projeto:

```
seuprojeto/
├── public/              # Arquivos públicos
├── app/                 # Código-fonte principal
│   ├── icons/          # Icones do aplicativo estáticos
│   ├── components/      # Componentes reutilizáveis
│   ├── routes/           # Páginas principais do projeto
│   ├── services/        # Integrações com APIs e outras funções de serviço
│   └── root.js           # Componente raiz
├── .gitignore           # Arquivos a serem ignorados pelo Git
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto
```

## Tecnologias Utilizadas

- **React Remix**: Biblioteca principal para a construção da interface.
- **Apex Chart**: Biblioteca de gráficos utilizada na aplicação.
- **Shadcn**: Biblioteca em que baseamos nossos componentes.
- **Tailwind CSS**: Biblioteca de estilização utilizada na aplicações.
