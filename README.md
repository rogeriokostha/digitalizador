# 🚀 Digitalizador — Landing Page de Vendas & Portfólio de Elite

> "Sua ideia transformada em plataforma de elite."

Bem-vindo ao repositório oficial do **Digitalizador**! Este ecossistema digital representa a Landing Page comercial e o portfólio profissional de **Rogerio Kostha** (Arquiteto de Soluções). 

Projetada com foco em **alta conversão, estética premium e experiência do usuário (UX) excepcional**, esta aplicação demonstra como materializar visões complexas em ativos de software escaláveis e de alto impacto comercial.

---

## 🌟 Diferenciais de Experiência do Usuário (UX) & Design

A interface foi projetada para encantar o usuário no primeiro olhar e guiá-lo suavemente até a conversão:
* **Rich Aesthetics (Visual Premium)**: Design escuro sofisticado com paleta de cores HSL cuidadosamente selecionada e gradientes suaves.
* **Sistema Orbital 3D**: Efeitos visuais dinâmicos em camadas no plano de fundo, incluindo orbes luminosos animados, scanlines cibernéticos e malhas de ruído estético.
* **Micro-animações de Elite**: Transições e efeitos de hover customizados em curvas Bézier para todos os elementos interativos e botões com contorno duplo (*Double-Bezel*).
* **Foco em Conversão**:
  - Fluxo de contato direto via abas interativas (*Contact Tabs*).
  - Formulário inteligente de captura e botão flutuante flutuante de WhatsApp estrategicamente posicionado.
  - Indicadores de confiança minimalistas baseados em dados reais.

---

## 🛠 Stack Tecnológica

O projeto adota a arquitetura de **Monorepo** com comunicação assíncrona baseada em APIs RESTful seguras:

* **Frontend (Next.js 15+)**:
  - Roteamento nativo baseado no diretório `/app` (App Router).
  - Componentização modular voltada a alto desempenho e SEO.
  - Carregamento instantâneo com otimização avançada de imagens e fontes do Google.
* **Backend (Django 5+ & DRF)**:
  - Estrutura corporativa e API escalável com Django REST Framework.
  - Autenticação blindada por tokens JWT para possíveis painéis administrativos futuros.
  - Qualidade de código mantida via linting acelerado por Rust com `Ruff`.
* **Banco de Dados & Cache**:
  - **PostgreSQL**: Banco relacional robusto para armazenamento seguro de mensagens e leads.
  - **Redis**: Sistema em memória para cache ultra-rápido e enfileiramento de tarefas em segundo plano.
* **Infraestrutura Local**:
  - Orquestração completa via **Docker Compose** e utilitários em **PowerShell** (`cli.ps1`).

---

## 🏗 Estrutura do Sistema

```text
/
├── backend/          -> APIs Django, modelos de banco de dados e lógica de leads.
├── frontend/         -> Next.js 15, interface rica, formulários e componentes interativos.
├── cli.ps1           -> Poderoso Wrapper CLI em PowerShell para automatizar comandos locais.
└── docker-compose.yml-> Provisionamento local de containers (Postgres, Redis, Backend).
```

---

## ⚙️ Inicialização Local (Ambiente de Desenvolvimento)

Para executar o projeto em sua máquina local utilizando o prático utilitário `cli.ps1` PowerShell, garanta que possui o **Docker Desktop** e o **Node.js** instalados.

### 1️⃣ Setup Completo e Automático
O comando setup cria seus arquivos `.env`, levanta os contêineres Docker de banco de dados, aplica migrações e instala todas as dependências do Node.js:
```powershell
.\cli.ps1 setup
```

### 2️⃣ Criar seu Superusuário (Painel Administrativo)
```powershell
.\cli.ps1 superuser
```

### 3️⃣ Iniciar o Frontend em Dev
Com o Docker de banco rodando, inicie o Next.js localmente para maior velocidade de hot-reload:
```powershell
cd frontend
npm run dev
```

Acesse o sistema localmente em:
* **Frontend UI**: [http://localhost:3000](http://localhost:3000)
* **Backend API REST**: [http://localhost:8000/api](http://localhost:8000/api)
* **Swagger Docs**: [http://localhost:8000/api/docs/](http://localhost:8000/api/docs/)

---

## 🚀 Guia de Deploy Profissional no Easypanel (VPS)

O **Easypanel** é um painel de controle espetacular baseado em Docker que simplifica o gerenciamento de servidores VPS de alta performance. Segue o guia passo a passo para colocar a aplicação do **Digitalizador** no ar.

### 📋 1. Criar um Novo Projeto no Easypanel
1. Acesse o dashboard do seu Easypanel.
2. Clique em **"Create Project"** e defina o nome do projeto como `digitalizador`.

### 🗄️ 2. Provisionar o Banco de Dados (PostgreSQL)
1. Dentro do projeto, clique em **"Create Service"** e selecione **"Database"** -> **"Postgres"**.
2. Defina o nome como `postgres-db`.
3. O Easypanel irá gerar automaticamente as variáveis de ambiente com as credenciais. Anote-as:
   - `POSTGRES_DB`
   - `POSTGRES_USER`
   - `POSTGRES_PASSWORD`

### 🐍 3. Deploy do Backend (Django API)
Como o projeto está estruturado em monorepo, podemos usar o Easypanel para fazer o build a partir do subdiretório `/backend` usando o Dockerfile integrado.

1. Clique em **"Create Service"** -> **"App"** e dê o nome de `backend-api`.
2. Em **Source**, selecione **"Git"** e conecte seu repositório público: `https://github.com/rogeriokostha/digitalizador`.
3. Configure as opções do Git:
   - **Branch**: `main`
   - **Build Path**: `/backend`
4. Em **Build**, defina para usar o **Dockerfile** (o Easypanel lerá o `backend/Dockerfile` automaticamente).
5. Em **Environment**, adicione as variáveis de ambiente necessárias (conectando com o banco `postgres-db` criado acima):
   - `DEBUG=False`
   - `DATABASE_URL=postgres://<usuario>:<senha>@<host-do-postgres>:5432/<nome-do-banco>`
   - `SECRET_KEY=sua-chave-secreta-segura`
   - `ALLOWED_HOSTS=api.seudominio.com,backend-api`
6. O Easypanel fornecerá um domínio padrão ou você pode apontar o seu subdomínio customizado (ex: `api.seudominio.com`). O SSL (Let's Encrypt) é ativado automaticamente!

### ⚛️ 4. Deploy do Frontend (Next.js)
1. Clique em **"Create Service"** -> **"App"** e dê o nome de `frontend-web`.
2. Conecte ao mesmo repositório Git, mas defina:
   - **Build Path**: `/frontend`
3. O Easypanel detectará automaticamente o Next.js e utilizará o buildpack do **Node.js** para rodar `npm run build` e `npm run start`.
4. Em **Environment**, insira as variáveis públicas exigidas pelo Next.js:
   - `NEXT_PUBLIC_API_URL=https://api.seudominio.com` (apontando para a url de produção do backend criada no passo 3)
5. Aponte seu domínio principal (ex: `seudominio.com` ou `www.seudominio.com`) para este serviço. O Easypanel cuidará do roteamento e SSL de forma transparente.

---

> _"Materializando visões complexas em ecossistemas digitais de elite." — Rogerio Kostha, Arquiteto de Soluções._
