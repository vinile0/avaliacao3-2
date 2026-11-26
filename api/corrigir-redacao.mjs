import EDITAIS from "../edital.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido." });

  try {
    const { exam, tema, texto } = req.body || {};
    if (!EDITAIS[exam]) return res.status(400).json({ error: "Concurso inválido." });
    if (typeof texto !== "string" || texto.trim().length < 80) {
      return res.status(400).json({ error: "Escreva sua redação antes de solicitar a correção. O texto precisa ter pelo menos 80 caracteres." });
    }
    if (texto.length > 12000) return res.status(400).json({ error: "O texto ultrapassou o limite permitido para correção." });

    const chave = process.env.ANTHROPIC_API_KEY;
    if (!chave) return res.status(503).json({ error: "A IA ainda não foi configurada no servidor. Cadastre ANTHROPIC_API_KEY na Vercel." });

    const regra = exam === "EsPCEx"
      ? "Considere os critérios do edital: tema e estrutura dissertativo-argumentativa; introdução, desenvolvimento e conclusão; tese clara, pelo menos duas ideias-força; gramática da norma culta; coerência, coesão, clareza, concisão, precisão, naturalidade, originalidade e impessoalidade. O edital prevê 25 a 30 linhas."
      : "Avalie adequação ao tema, estrutura dissertativa, clareza da tese, desenvolvimento dos argumentos, coerência, coesão, gramática e domínio da norma-padrão, sem atribuir uma nota oficial.";

    const prompt = [
      `Faça uma correção pedagógica da redação de treino para ${exam}.`,
      `Tema proposto: ${String(tema || "Não informado")}`,
      regra,
      "Não afirme que esta é uma correção oficial nem invente uma nota oficial. Seja específico e respeitoso.",
      "Retorne somente JSON válido com: avaliacao (resumo), pontosFortes (lista), pontosMelhorar (lista), observacoesGramaticais (lista), sugestaoReescrita (um exemplo curto de melhoria para um trecho, sem reescrever toda a redação).",
      "REDAÇÃO DO CANDIDATO:",
      texto
    ].join("\n\n");

    const resposta = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": chave,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-5-5",
        max_tokens: 3500,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const dados = await resposta.json().catch(() => ({}));
    if (!resposta.ok) {
      if (resposta.status === 401) return res.status(502).json({ error: "A chave Anthropic configurada no servidor foi recusada." });
      if (resposta.status === 429) return res.status(429).json({ error: "O limite de uso da API foi atingido. Aguarde e tente novamente." });
      const detalhe = dados.error?.message ? ` (${dados.error.message})` : "";
      return res.status(502).json({ error: `A API de IA retornou erro ${resposta.status}${detalhe}` });
    }

    const conteudo = (dados.content || []).filter((bloco) => bloco.type === "text").map((bloco) => bloco.text).join("\n");
    const inicio = conteudo.indexOf("{");
    const fim = conteudo.lastIndexOf("}");
    if (inicio < 0 || fim < inicio) throw new Error("A IA não retornou uma correção válida.");
    const correcao = JSON.parse(conteudo.slice(inicio, fim + 1));
    return res.status(200).json({ correcao });
  } catch (erro) {
    console.error("Erro ao corrigir redação:", erro.message);
    return res.status(500).json({ error: erro.message || "Não foi possível corrigir a redação." });
  }
};
