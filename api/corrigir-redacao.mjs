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

    const chave = process.env.GEMINI_API_KEY;
    if (!chave) return res.status(503).json({ error: "A IA ainda não foi configurada no servidor. Cadastre GEMINI_API_KEY na Vercel." });

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

    const resposta = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": chave
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 3500,
          responseMimeType: "application/json",
          temperature: 0.4
        }
      })
    });

    const dados = await resposta.json().catch(() => ({}));
    if (!resposta.ok) {
      if ([400, 401, 403].includes(resposta.status)) {
        return res.status(502).json({ error: `O Google Gemini recusou a solicitação (${resposta.status}). ${dados.error?.message || "Confira a chave GEMINI_API_KEY."}` });
      }
      if (resposta.status === 429) return res.status(429).json({ error: "O limite gratuito de solicitações do Gemini foi atingido. Aguarde e tente novamente." });
      return res.status(502).json({ error: `A API Gemini retornou erro ${resposta.status}. ${dados.error?.message || ""}` });
    }

    const conteudo = (dados.candidates?.[0]?.content?.parts || []).map((parte) => parte.text || "").join("\n");
    if (!conteudo) throw new Error("O Gemini não retornou uma correção. Tente novamente.");
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
