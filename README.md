# 🚀 BetterAI CRM

**Sistema de CRM completo e moderno com foco em automação de vendas, gestão de leads e atendimento multicanal.**

![BetterAI CRM](https://img.shields.io/badge/BetterAI-CRM-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Node.js](https://img.shields.io/badge/node.js-18.0+-brightgreen)
![React](https://img.shields.io/badge/react-18.0+-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.0+-blue)

## 🚀 Quick Start

### Pré-requisitos
- **Node.js** 18.0+
- **PostgreSQL** 14+
- **Redis** (opcional)
- **Docker** (opcional)

### ⚡ Instalação Rápida

1. **Clone o repositório**
```bash
git clone https://github.com/Rruiz270/betterai-crm.git
cd betterai-crmdocker-compose up postgres redis -d
cd backend
npm install
cp .env.example .env
# Edite o .env com suas configurações
npm run prisma:migrate
npm run prisma:seed
npm run dev
cd ../frontend
npm install
npm run dev
nano .gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
dist/
build/
*.tsbuildinfo

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Database
*.sqlite
*.sqlite3
*.db

# Uploads
uploads/
public/uploads/

# Docker
.dockerignore

# Prisma
prisma/migrations/
!prisma/migrations/.gitkeep
