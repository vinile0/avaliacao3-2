/* Funções de comunicação com o backend seguro da aplicação. */
async function chamarApi(caminho, dados) {
  let resposta;
  try {
    resposta = await fetch(caminho, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
  } catch {
    throw new Error("Não foi possível acessar o servidor. Abra o site publicado na Vercel e confira sua conexão.");
  }

  const conteudo = await resposta.json().catch(() => ({}));
  if (!resposta.ok) {
    throw new Error(conteudo.error || `O servidor respondeu com erro ${resposta.status}.`);
  }
  return conteudo;
}

async function gerarComIA(params) {
  return chamarApi("/api/gerar", params);
}

async function corrigirRedacao(params) {
  return chamarApi("/api/corrigir-redacao", params);
}
