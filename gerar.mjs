import EDITAIS from "../edital.js";

const MODELO = "claude-sonnet-5-5";
const MAX_QUESTOES = 20;
const MAX_TOKENS = 8000;

function enviarErro(res, status, mensagem) {
  return res.status(status).json({ error: mensagem });
}

function extrairJson(texto) {
  const inicio = texto.indexOf("{");
  const fim = texto.lastIndexOf("}");
  if (inicio < 0 || fim < inicio) throw new Error("A IA não retornou um JSON válido.");
  return JSON.parse(texto.slice(inicio, fim + 1));
}

async function chamarAnthropic(prompt, maxTokens = MAX_TOKENS) {
  const chave = process.env.ANTHROPIC_API_KEY;
  if (!chave) {
    const erro = new Error("A IA ainda não foi configurada no servidor. Cadastre ANTHROPIC_API_KEY nas variáveis de ambiente da Vercel.");
    erro.status = 503;
    throw erro;
  }

  const resposta = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": chave,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: MODELO,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const dados = await resposta.json().catch(() => ({}));
  if (!resposta.ok) {
    if (resposta.status === 401) {
      const erro = new Error("A chave Anthropic configurada no servidor foi recusada. Confira ANTHROPIC_API_KEY na Vercel.");
      erro.status = 502;
      throw erro;
    }
    if (resposta.status === 429) {
      const erro = new Error("O limite de uso da API foi atingido. Aguarde um pouco e tente novamente.");
      erro.status = 429;
      throw erro;
    }
    const detalhe = dados.error && dados.error.message ? ` (${dados.error.message})` : "";
    const erro = new Error(`A API de IA retornou erro ${resposta.status}${detalhe}`);
    erro.status = 502;
    throw erro;
  }

  const texto = (dados.content || [])
    .filter((bloco) => bloco.type === "text")
    .map((bloco) => bloco.text)
    .join("\n");

  if (!texto) throw new Error("A resposta da IA veio vazia. Tente novamente.");
  return extrairJson(texto);
}

function obterMaterias(prova) {
  const edital = EDITAIS[prova];
  if (!edital) throw new Error("Selecione ESA ou EsPCEx.");
  return edital.materias;
}

function construirPromptQuestoes({ exam, subject, topic, level, quantity }) {
  const edital = EDITAIS[exam];
  const materias = edital.materias;
  const materiasDisponiveis = Object.keys(materias);
  const todas = subject === "Todas as matérias";
  const materiasPedido = todas ? materiasDisponiveis : [subject];
  const programa = materiasPedido.map((materia) => {
    if (!materias[materia]) throw new Error(`A matéria ${materia} não pertence ao edital selecionado.`);
    return `${materia}: ${materias[materia].join("; ")}`;
  }).join("\n");

  let instrucaoAssunto;
  if (topic && topic !== "__ALEATORIO__") {
    const permitido = materiasPedido.some((materia) => materias[materia].includes(topic));
    if (!permitido) throw new Error("O assunto escolhido não pertence à matéria e ao edital selecionados.");
    instrucaoAssunto = `Todas as questões devem cobrar este assunto: ${topic}. Preencha o campo assunto com exatamente esse nome.`;
  } else {
    instrucaoAssunto = "Distribua as questões entre os tópicos fornecidos. Para cada questão, preencha assunto com o nome exato de um tópico da lista que ela está cobrando.";
  }

  const padrao = exam === "ESA"
    ? "Padrão ESA Área Geral: questões objetivas com cinco alternativas, abordagem de nível médio e cobrança direta de conteúdo, interpretação e aplicação."
    : "Padrão EsPCEx: questões objetivas com cinco alternativas, nível médio a alto, enunciados contextualizados e integração de conceitos quando adequado.";

  const materiaIngles = materiasPedido.includes("Inglês");
  return [
    `Crie ${quantity} questões inéditas de múltipla escolha para o concurso ${exam}.`,
    `Edição de referência: ${edital.edicao}. ${exam === "ESA" ? "Considere exclusivamente a Área Geral." : ""}`,
    `Matérias permitidas: ${materiasPedido.join(", ")}.`,
    `Dificuldade solicitada: ${level}.`,
    padrao,
    "Use somente o conteúdo programático listado abaixo. Não inclua temas externos ao edital.",
    "CONTEÚDO PROGRAMÁTICO AUTORIZADO:",
    programa,
    instrucaoAssunto,
    `Cada questão deve ter exatamente 5 alternativas, identificadas pela ordem A, B, C, D e E, e somente uma alternativa correta.`,
    "Crie distratores plausíveis e evite alternativas ambíguas. Confira a resposta correta e a explicação antes de devolver.",
    materiaIngles ? "Quando a matéria for Inglês, escreva o enunciado e as alternativas em inglês. A explicação do gabarito deve ser em português." : "Escreva os enunciados e as alternativas em português, exceto quando o conteúdo exigir termos estrangeiros.",
    "Não copie questões de provas anteriores. Escreva itens originais e variados.",
    "Retorne somente JSON válido, sem Markdown ou texto antes/depois, exatamente neste formato:",
    '{"questoes":[{"materia":"nome exato da matéria","assunto":"nome exato de um tópico autorizado","enunciado":"texto da questão","alternativas":["alternativa A","alternativa B","alternativa C","alternativa D","alternativa E"],"correta":0,"explicacao":"explicação didática em português"}]}',
    "O campo correta é um índice numérico: 0 para A, 1 para B, 2 para C, 3 para D e 4 para E.",
    "Distribua os gabaritos entre A, B, C, D e E. Não use sempre a mesma letra."
  ].join("\n\n");
}

function validarQuestoes(lista, { exam, subject, topic, quantity }) {
  const edital = EDITAIS[exam];
  const materiasValidas = Object.keys(edital.materias);
  if (!Array.isArray(lista) || lista.length !== quantity) {
    throw new Error("A IA não retornou a quantidade solicitada. Tente gerar novamente ou escolha menos questões.");
  }

  return lista.map((q, indice) => {
    const materia = subject === "Todas as matérias" ? q.materia : subject;
    if (!materiasValidas.includes(materia) || (subject !== "Todas as matérias" && q.materia && q.materia !== subject)) {
      throw new Error(`A questão ${indice + 1} veio com uma matéria fora do edital selecionado.`);
    }
    if (!Array.isArray(q.alternativas) || q.alternativas.length !== 5 ||
        !Number.isInteger(q.correta) || q.correta < 0 || q.correta > 4 ||
        typeof q.enunciado !== "string" || !q.enunciado.trim()) {
      throw new Error(`A questão ${indice + 1} veio em formato inválido. Tente gerar novamente.`);
    }

    const topicosValidos = edital.materias[materia];
    const normalizar = (valor) => String(valor || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
    let assunto = typeof q.assunto === "string" ? q.assunto.trim() : "";
    if (topic && topic !== "__ALEATORIO__") {
      assunto = topicosValidos.find((topico) => normalizar(topico) === normalizar(topic)) || "";
    } else {
      assunto = topicosValidos.find((topico) => normalizar(topico) === normalizar(assunto)) || "";
    }
    if (!assunto) {
      throw new Error(`A questão ${indice + 1} veio sem um assunto válido do edital. Gere a lista novamente.`);
    }

    return {
      materia,
      assunto,
      enunciado: q.enunciado.trim(),
      alternativas: q.alternativas.map((alternativa) => String(alternativa)),
      correta: q.correta,
      explicacao: String(q.explicacao || "Consulte o conteúdo programático e revise o conceito utilizado.")
    };
  });
}

function construirPromptRedacao(exam) {
  const edital = EDITAIS[exam];
  const linhas = exam === "EsPCEx"
    ? "A EsPCEx solicita texto dissertativo-argumentativo em terceira pessoa, com 25 a 30 linhas."
    : "Elabore uma proposta de treino dissertativo compatível com a prova de Redação da ESA, sem inventar uma quantidade oficial de linhas.";
  return [
    `Crie uma proposta inédita de redação para quem estuda para ${exam}.`,
    `Referência: ${edital.edicao}. ${linhas}`,
    "A proposta deve trazer tema claro, comando de produção, dois pequenos textos motivadores originais e uma lista de aspectos que o candidato deve observar.",
    "Não copie tema nem texto de prova anterior. Evite tema que dependa de notícias do dia.",
    'Retorne apenas JSON válido: {"tema":"...","comando":"...","textosApoio":["...","..."],"orientacoes":["...","..."]}'
  ].join("\n\n");
}

export default async function handler(req, res) {
  if (req.method !== "POST") return enviarErro(res, 405, "Método não permitido.");

  try {
    const { exam, subject, topic = "__ALEATORIO__", level = "nível de prova", quantity = 10 } = req.body || {};
    const materias = obterMaterias(exam);

    if (subject === "Redação") {
      const proposta = await chamarAnthropic(construirPromptRedacao(exam), 3000);
      if (!proposta.tema || !proposta.comando || !Array.isArray(proposta.textosApoio)) {
        throw new Error("A proposta de redação veio incompleta. Tente novamente.");
      }
      return res.status(200).json({ tipo: "redacao", proposta });
    }

    if (subject !== "Todas as matérias" && !materias[subject]) {
      return enviarErro(res, 400, "A matéria selecionada não existe no conteúdo programático desta prova.");
    }
    if (!Number.isInteger(Number(quantity)) || Number(quantity) < 1 || Number(quantity) > MAX_QUESTOES) {
      return enviarErro(res, 400, `Escolha entre 1 e ${MAX_QUESTOES} questões por lista.`);
    }
    const nivelValido = ["fácil", "média", "difícil", "nível de prova"].includes(level);
    if (!nivelValido) return enviarErro(res, 400, "Selecione uma dificuldade válida.");

    const prompt = construirPromptQuestoes({ exam, subject, topic, level, quantity: Number(quantity) });
    const resultado = await chamarAnthropic(prompt);
    const questoes = validarQuestoes(resultado.questoes, {
      exam,
      subject,
      topic,
      quantity: Number(quantity)
    });

    return res.status(200).json({ tipo: "questoes", questoes, origem: "IA" });
  } catch (erro) {
    console.error("Erro ao gerar conteúdo:", erro.message);
    return enviarErro(res, erro.status || 500, erro.message || "Não foi possível gerar o conteúdo.");
  }
};
