# QuestLab — ESA e EsPCEx (versão offline)

Projeto estático de estudos com banco local de questões autorais. Não usa Anthropic, Gemini, API, chave secreta, backend ou serviço pago para gerar listas.

## Conteúdo incluído

- ESA — Área Geral: 20 questões por matéria em Matemática, Português, História do Brasil, Geografia do Brasil e Inglês (100 questões).
- EsPCEx: 20 questões por matéria em Matemática, Português, Física, Química, História, Geografia e Inglês (140 questões).
- Total: 240 questões cadastradas por concurso/matéria, com cinco alternativas, gabarito e explicação.
- Seleção por concurso, matéria, assunto, dificuldade e quantidade; correção automática e impressão.
- Propostas de redação locais com checklist de revisão, sem correção automática por IA.

## Publicação

O projeto é estático. Pode ser publicado na Vercel ou no GitHub Pages. Não é necessário cadastrar variáveis de ambiente, API Keys ou configurar funções de servidor.

### Vercel
1. Envie todos os arquivos desta pasta para a raiz do repositório GitHub.
2. Na Vercel, importe o repositório.
3. Framework Preset: Other. Build Command e Output Directory podem ficar vazios/padrão.
4. Faça Deploy.

### GitHub Pages
1. Abra Settings do repositório.
2. Entre em Pages.
3. Em Build and deployment, escolha Deploy from a branch.
4. Selecione a branch main e a pasta /(root), depois Save.

## Observações

As questões são autorais e voltadas ao treino; não são questões oficiais nem reproduções de provas. Compare sempre os assuntos com o edital e suas retificações. O nível de dificuldade selecionado organiza a prática, mas o banco não usa IA para variar o nível automaticamente. As propostas de redação e o checklist são orientativos, não uma correção oficial.
