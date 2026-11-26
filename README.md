# QuestLab — ESA e EsPCEx

Plataforma de treino organizada para:

- **ESA — Área Geral**, edital para matrícula em 2027.
- **EsPCEx — Concurso de Admissão 2026/2027**.

O projeto permite escolher a prova, matéria, assunto do edital, dificuldade e quantidade. A geração por IA ocorre no servidor, com a chave guardada em variável de ambiente. Há também um banco offline com questões autorais fixas.

## Estrutura

```text
questlab-esa-espcex/
├── api/
│   ├── gerar.mjs
│   └── corrigir-redacao.mjs
├── banco.js
├── edital.js
├── gerador.js
├── gerador-offline.js
├── index.html
├── script.js
├── style.css
├── package.json
├── vercel.json
└── .env.example
```

## Como ativar a IA na publicação

**Importante:** este projeto usa funções de servidor (`/api/gerar` e `/api/corrigir-redacao`). Por isso, não basta publicar os arquivos no GitHub Pages. Publique pelo Vercel conectado ao repositório do GitHub.

1. Crie ou entre em uma conta da Anthropic e gere uma chave de API. O uso da API pode exigir configuração de faturamento na conta da Anthropic.
2. Coloque os arquivos deste projeto em um repositório GitHub.
3. Entre em <https://vercel.com/>, importe o repositório e faça o deploy.
4. No projeto da Vercel, abra **Settings → Environment Variables**.
5. Crie a variável com o nome `ANTHROPIC_API_KEY` e cole o valor da sua chave como valor. Marque Production (e Preview, se quiser testar prévias).
6. Salve e faça um novo deploy para aplicar a variável.
7. Abra o endereço publicado pela Vercel. O botão **Gerar questões com IA** passa a chamar a função no servidor.

O backend usa o identificador `claude-sonnet-5-5` na API da Anthropic.

A chave não deve ser colocada em `index.html`, `script.js`, `gerador.js`, `edital.js`, `banco.js` ou em qualquer arquivo enviado ao GitHub. Não compartilhe sua chave em conversas, prints ou repositórios.

**Atenção aos custos:** se o endereço do site ficar público, qualquer pessoa que o acessar poderá tentar gerar questões e consumir sua cota da API. Para uso pessoal, mantenha o endereço restrito ou adicione autenticação antes de divulgar o link.

## Como executar localmente

É necessário Node.js 20 ou superior e a CLI da Vercel:

```bash
npm install -g vercel
```

1. Faça uma cópia de `.env.example` com o nome `.env`.
2. No arquivo `.env`, substitua o texto de exemplo pela sua chave real.
3. Abra o terminal na pasta do projeto e execute:

```bash
vercel dev
```

Acesse o endereço local informado pela CLI. Abrir `index.html` diretamente com `file://` não executa as funções de servidor e, portanto, não ativa a geração por IA.

## Banco offline

O botão **Treinar com o banco offline** não usa API nem chave. Para Matemática, Física e Química, ele tenta primeiro montar questões automaticamente com números variados; Física e Química só aparecem na EsPCEx, conforme o edital. Nas demais matérias, usa as questões fixas de `banco.js`, por isso o número pode ser menor que o escolhido e alguns assuntos podem não estar cobertos. O banco inclui questões de Inglês para ESA e EsPCEx, mas não substitui a geração por IA.

## Redação

A opção **Redação** gera uma proposta com tema e textos motivadores. Depois, é possível escrever no próprio site e solicitar uma análise pedagógica por IA. A correção é orientativa e não representa nota oficial. Para a EsPCEx, a orientação do edital de referência informa o formato dissertativo-argumentativo em terceira pessoa e 25 a 30 linhas.

## Conteúdo programático

Os tópicos de `edital.js` são resumos organizados a partir dos conteúdos programáticos. Confira sempre o edital completo e eventuais retificações:

- ESA — Edital nº 1/SCA, de 26 de março de 2026: <https://cursounipre.com.br/wp-content/uploads/2026/03/Edital-Concurso-ESA-2026.pdf>
- EsPCEx — Edital nº 2 S Conc Adms, de 22 de abril de 2026: <https://www.acheconcursos.com.br/imagens/anexo/62392/edital-espcex-2026.pdf>

A ESA está configurada exclusivamente para a Área Geral. As áreas Música e Saúde não estão incluídas nesta versão.

## Aviso sobre uso da IA

As questões são geradas automaticamente e devem ser tratadas como material de treino. Revise cálculos, respostas e explicações e compare o conteúdo com o edital oficial. O modelo pode cometer erros.
