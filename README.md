# 🚀 Lara Group - Projeto Web Completo

> Um projeto web moderno e responsivo desenvolvido com HTML, CSS (Sass), JavaScript e Express.js
- [Link Home](https://lara-group-site.onrender.com/home.html).
-[Link Interna](https://lara-group-site.onrender.com/interna.html).

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura das páginas
- **CSS3/Sass** - Estilização e pré-processamento
- **JavaScript** - Interatividade do frontend
- **Express.js** - Servidor web
- **npm-run-all** - Execução paralela de scripts

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Git](https://git-scm.com/) (para clonar o repositório)

### Como verificar se está tudo instalado:

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Git
git --version
```

## 📥 Instalação

### Passo 1: Clone o repositório
```bash
git clone https://github.com/reinansilveira/Lara-Group.git
```

### Passo 2: Entre na pasta do projeto
```bash
cd Lara-Group
```

### Passo 3: Instale as dependências
```bash
npm install
```

> ⏳ **Aguarde**: Este processo pode demorar alguns minutos na primeira vez.

## 🚀 Como Usar

### Para iniciar o servidor

```bash
npm run dev
```

### Para compilar o Sass

Em outro terminal, execute:

```bash
npm run compile:sass
```

### Acessar o Projeto

Após executar `npm run dev`, abra seu navegador e acesse:
```
http://localhost:3000
```

### Comandos Disponíveis

```bash
# Iniciar o servidor Express
npm run dev

# Compilar Sass (execute em outro terminal)
npm run compile:sass
```

## 📁 Estrutura do Projeto

```
LARA/
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 audio/          # Arquivos de áudio
│   │   ├── 📁 css/            # CSS compilado (gerado automaticamente)
│   │   ├── 📁 fonts/          # Fontes personalizadas
│   │   ├── 📁 img/            # Imagens do projeto
│   │   ├── 📁 js/             # JavaScript
│   │   │   └── 📄 server.js   # Servidor Express
│   │   ├── 📁 lib/            # Bibliotecas externas
│   │   └── 📁 sass/           # Arquivos Sass (fonte)
│   │       ├── 📁 abstract/   # Variáveis, mixins, etc.
│   │       ├── 📁 base/       # Reset, tipografia base
│   │       ├── 📁 components/ # Componentes reutilizáveis
│   │       ├── 📁 layout/     # Layout principal
│   │       └── 📁 pages/      # Estilos específicos de páginas
│   └── 📁 pages/              # Páginas HTML
├── 📄 package.json            # Configurações do projeto
└── 📄 README.md               # Este arquivo
```

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **dev** | `npm run dev` | Inicia o servidor Express |
| **compile:sass** | `npm run compile:sass` | Compilação do Sass com watch |

## 🔧 Configurações do Sass

O projeto está configurado para:
- **Compilar automaticamente** arquivos `.scss` para `.css`
- **Comprimir** o CSS final para produção
- **Gerar source maps** para facilitar o debug
- **Monitorar mudanças** em tempo real

## 🚨 Problemas Comuns

### ❌ Erro: "npm não é reconhecido"
**Solução**: Instale o Node.js pelo site oficial.

### ❌ Erro de permissão no Windows
**Solução**: Execute o terminal como administrador.

### ❌ Porta 3000 já está em uso
**Solução**: Feche outros servidores ou altere a porta no arquivo `server.js`.

### ❌ Sass não está compilando
**Solução**: 
1. Pare os processos (Ctrl+C nos dois terminais)
2. Execute `npm install sass`
3. Execute `npm run dev` e `npm run compile:sass` novamente

## 💡 Dicas para Desenvolvimento

1. **Execute os dois comandos** em terminais separados:
   - Terminal 1: `npm run dev` (servidor)
   - Terminal 2: `npm run compile:sass` (Sass)
2. **Arquivos Sass** ficam em `src/assets/sass/`
3. **CSS compilado** aparece automaticamente em `src/assets/css/`
4. **Não edite** diretamente os arquivos `.css` gerados
5. **Use o navegador** para ver as mudanças em tempo real


