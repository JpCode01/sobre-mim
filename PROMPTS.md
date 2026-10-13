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

## 3. Prompt — Expandir a página pessoal sem alterar sua identidade visual

**Finalidade:** Evoluir a página existente preservando a identidade visual aprovada, adicionando seções de Tech Stack, Projetos, Contato e atualizando a documentação.

**Conteúdo:**
> Atue como um **desenvolvedor front-end experiente**, com domínio de HTML5, CSS3, Clean Code, acessibilidade e organização de projetos web.
>
> Analise a implementação atual e evolua a página existente, preservando sua identidade visual. O projeto já possui tipografia, cores e design aprovados: **não redesenhe a página nem substitua o estilo atual**. O objetivo é corrigir a falta de conteúdo, acrescentar seções relevantes e atualizar a documentação.
>
> [Prompt completo com 8 seções detalhando: contexto pessoal/profissional, stack e nível de conhecimento, projetos a incluir, o que falta na página atual, design aprovado, organização e Clean Code, atualização da documentação, validação e entrega]

---

## Verificações Realizadas (após expansão)

✅ **Nome e apresentação presentes** — "João Pedro Vaz Garbin" + tagline profissional no hero
✅ **Seção "Sobre" com duas linhas** — Dois parágrafos sobre interesses e objetivos profissionais
✅ **Tech Stack** — 5 categorias (Backend, Bancos de Dados, Frontend, DevOps/Cloud, Testes) com 13 tecnologias e níveis prudentes
✅ **Projetos** — 4 projetos (L'Privillege, ScreenTrack, ScreenMatch, Screensound) com descrição, tecnologias e links funcionais
✅ **Tecnologias para aprofundar** — Kubernetes, AWS, Microsserviços (diferenciadas do stack conhecido)
✅ **Contato** — GitHub e LinkedIn no header (nav fixa) e footer
✅ **CSS separado em `css/style.css`** — Organizado em seções lógicas com variáveis CSS, novos estilos para stack e projects
✅ **Código organizado e sem complexidade desnecessária** — HTML semântico, CSS modular, sem JS
✅ **Responsividade verificada** — Breakpoints em 640px e 1024px, grid auto-fit, clamp() para tipografia fluida
✅ **Identidade visual preservada** — Fonte Space Grotesk, paleta dark mode, espaçamentos, bordas, animações
✅ **README.md atualizado** — Documentação completa refletindo o conteúdo expandido
✅ **PROMPTS.md atualizado** — Registro cronológico incluindo este prompt

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
git commit -m "feat: adiciona seções Tech Stack, Projetos e Contato"
git commit -m "style: implementa cards de projetos e grid de tecnologias"
git commit -m "docs: atualiza README.md e PROMPTS.md com expansão do projeto"

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