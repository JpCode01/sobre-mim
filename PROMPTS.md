# PROMPTS.md

Registro cronológico dos prompts e comandos fornecidos durante o desenvolvimento da página pessoal "Sobre Mim".

---

## 1. Prompt Inicial — Desenvolvimento da página pessoal "Sobre Mim"

**Finalidade:** Solicitação completa para criação da página pessoal com todos os requisitos, diretrizes visuais, organização de arquivos, princípios técnicos e processo de desenvolvimento.

**Conteúdo:**
> Atue como um **desenvolvedor front-end experiente**, com domínio de HTML5, CSS3, Clean Code, acessibilidade e organização de projetos web. Sua responsabilidade é desenvolver uma página pessoal simples, bem estruturada e fácil de manter, tomando decisões técnicas fundamentadas e evitando complexidade desnecessária.
>
> [Prompt completo com 9 seções detalhando: contexto do projeto, informações pessoais/profissionais, projetos existentes, requisitos obrigatórios, organização de arquivos, princípios técnicos, diretrizes visuais, processo de desenvolvimento, Git/commits semânticos, arquivo PROMPTS.md e critério de conclusão]

---

## 2. Prompt de Continuidade (Implícito)

**Finalidade:** Após a criação dos arquivos iniciais (index.html, css/style.css, README.md), dar continuidade ao desenvolvimento verificando a estrutura, validando os requisitos e criando a documentação final (PROMPTS.md).

**Ações realizadas:**
- Criação do `index.html` com HTML semântico, acessível e responsivo
- Criação do `css/style.css` com design system baseado em variáveis CSS, layout dark mode minimalista
- Atualização do `README.md` com documentação completa do projeto
- Criação deste arquivo `PROMPTS.md`

---

## Verificações Realizadas

✅ **Nome e apresentação presentes** — "João Pedro Vaz Garbin" + tagline profissional no hero
✅ **Seção "Sobre" com duas linhas** — Dois parágrafos sobre interesses e objetivos profissionais
✅ **Lista com três tecnologias** — Kubernetes, AWS, Microsserviços (alinhadas ao perfil backend)
✅ **Link funcional para GitHub** — No header (nav fixa) e no footer
✅ **CSS separado em `css/style.css`** — Organizado em seções lógicas com variáveis CSS
✅ **Código organizado e sem complexidade desnecessária** — HTML semântico, CSS modular, sem JS
✅ **Responsividade básica verificada** — Breakpoints em 640px e 1024px, clamp() para tipografia fluida
✅ **Commits semânticos** — Comandos fornecidos para execução manual
✅ **PROMPTS.md criado** — Este arquivo com registro dos prompts
✅ **README.md adequado** — Documentação completa do projeto

---

## Comandos Git Sugeridos (para execução manual)

```bash
# Inicializar repositório (se não existir)
git init

# Adicionar arquivos
git add index.html css/style.css README.md PROMPTS.md

# Commits semânticos
git commit -m "feat: cria a página pessoal com HTML semântico e estrutura base"
git commit -m "style: define layout dark mode, tipografia Space Grotesk e design system"
git commit -m "refactor: organiza CSS em seções lógicas com variáveis CSS"
git commit -m "docs: adiciona README.md com documentação do projeto"
git commit -m "docs: registra prompts utilizados no PROMPTS.md"

# Conectar ao repositório remoto (se aplicável)
git remote add origin https://github.com/JpCode01/sobre-mim.git
git branch -M main
git push -u origin main
```

---

## Limitações

- Não foi possível executar comandos Git diretamente (sem acesso ao terminal/git no ambiente)
- Os commits acima são sugestões para execução manual pelo usuário
- O deploy no GitHub Pages requer configuração manual nas Settings do repositório