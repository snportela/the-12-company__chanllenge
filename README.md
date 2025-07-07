# Teste Técnico - Estágio Frontend

## Descrição do Projeto

Este é um teste técnico para candidatos à vaga de estágio frontend. A aplicação consiste em uma página de login funcional baseada em um arquivo JSON com credenciais e uma página de cadastro.

## Funcionalidades

- ✅ **Página de Login**: Autenticação baseada em arquivo JSON
- ✅ **Página de Cadastro**: Formulário de registro de novos usuários
- ✅ **Dashboard**: Página protegida para usuários autenticados
- ✅ **Validação de Formulários**: Validação em tempo real
- ✅ **Feedback Visual**: Animações e estados de loading
- ✅ **Responsividade**: Design responsivo com Tailwind CSS

## Stack Tecnológica

- **React 18** - Biblioteca JavaScript para interfaces
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones

## Como Executar o Projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório** (se aplicável):

```bash
git clone <url-do-repositorio>
cd teste-frontend
```

2. **Instale as dependências**:

```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**:

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Credenciais de Teste

A aplicação vem com algumas credenciais pré-definidas para teste:

| Usuário | Senha    | Email             |
| ------- | -------- | ----------------- |
| admin   | admin123 | admin@example.com |
| user    | user123  | user@example.com  |
| teste   | teste123 | teste@example.com |

## Estrutura do Projeto

```
teste-frontend/
├── app/                    # App Router do Next.js
│   ├── dashboard/         # Página do dashboard
│   ├── signup/           # Página de cadastro
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout raiz
│   └── page.tsx          # Página de login (home)
├── components/            # Componentes reutilizáveis
│   ├── Input.tsx         # Componente de input
│   ├── SubmitButton.tsx  # Componente de botão
│   ├── Loader.tsx        # Componente de loading
│   └── index.ts          # Exportações
├── lib/                  # Utilitários
│   └── auth.ts           # Funções de autenticação
├── public/               # Arquivos estáticos
└── package.json          # Dependências e scripts
```

## Funcionalidades Implementadas

### Página de Login (`/`)

- Formulário de login com validação
- Animações de shake para campos obrigatórios
- Toggle de visibilidade da senha
- Estados de loading durante autenticação
- Redirecionamento automático se já autenticado
- Link para página de cadastro

### Página de Cadastro (`/signup`)

- Formulário completo de registro
- Validação de email
- Confirmação de senha
- Validação de força da senha (mínimo 6 caracteres)
- Verificação de usuário existente
- Feedback de sucesso/erro
- Redirecionamento para login após cadastro

### Dashboard (`/dashboard`)

- Página protegida (requer autenticação)
- Navegação com logout
- Exibição das credenciais de teste
- Redirecionamento para login se não autenticado

## Autenticação

A autenticação é simulada usando:

- **LocalStorage** para persistir o token
- **Credenciais hardcoded** no arquivo `lib/auth.ts`
- **Delay simulado** para simular chamadas de API

## Estilo e Design

O design segue o padrão do arquivo `example_page.tsx` fornecido:

- **Cores**: Gradiente roxo (primary-purple: #4F46E5, secondary-purple: #7C3AED)
- **Tipografia**: Inter (Google Fonts)
- **Animações**: Shake para validação, hover effects
- **Layout**: Centrado, responsivo, com sombras e bordas arredondadas

## Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linting do código
```

## Considerações para o Teste

### O que foi implementado:

- ✅ Login funcional com credenciais JSON
- ✅ Página de cadastro completa
- ✅ Validações de formulário
- ✅ Estados de loading e feedback
- ✅ Design responsivo
- ✅ Navegação entre páginas
- ✅ Proteção de rotas

### Melhorias possíveis:

- 🔄 Integração com API real
- 🔄 Persistência de dados em banco
- 🔄 Testes automatizados
- 🔄 PWA capabilities
- 🔄 Tema escuro/claro

## Contato

Para dúvidas sobre o teste, entre em contato com o recrutador.

---

**Boa sorte no teste! 🚀**
