/* Interface do QuestLab: ESA Área Geral e EsPCEx. */
(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const LETTERS = ["A", "B", "C", "D", "E"];
  const form = $("#practice-form");
  const result = $("#result");
  const sheet = $("#sheet");
  const generateButton = $("#generate-btn");
  const offlineButton = $("#offline-btn");
  const subjectButtons = $("#subject-buttons");
  const topicSelect = $("#topic");
  const topicField = $("#topic-field");
  const quantityField = $("#quantity");

  let exam = "ESA";
  let subject = "Inglês";
  let level = "difícil";
  let lastParams = null;

  $("#year").textContent = new Date().getFullYear();

  function showMessage(message, isError = false) {
    result.hidden = false;
    result.classList.toggle("error", isError);
    result.classList.toggle("success", !isError);
    result.textContent = message;
  }

  function setBusy(busy, label = "Gerando...") {
    generateButton.disabled = busy;
    offlineButton.disabled = busy;
    generateButton.textContent = busy
      ? label
      : (subject === "Redação" ? "Gerar proposta de redação com IA" : "Gerar questões com IA");
  }

  function makeButton(text, attributes = {}) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = text;
    Object.entries(attributes).forEach(([key, value]) => button.setAttribute(key, value));
    return button;
  }

  function renderExamHint() {
    const edital = EDITAIS[exam];
    $("#exam-hint").textContent = exam === "ESA"
      ? "ESA • Área Geral • matrícula em 2027."
      : "EsPCEx • Concurso de Admissão 2026/2027.";
  }

  function renderSubjects() {
    subjectButtons.replaceChildren();
    const subjects = Object.keys(EDITAIS[exam].materias);
    const options = [...subjects, "Todas as matérias", "Redação"];
    options.forEach((name) => {
      const button = makeButton(name, {
        "data-subject": name,
        "aria-pressed": String(name === subject)
      });
      if (name === subject) button.classList.add("active");
      button.addEventListener("click", () => {
        subject = name;
        result.hidden = true;
        renderSubjects();
        renderTopics();
        updateSpecialFields();
      });
      subjectButtons.append(button);
    });
  }

  function renderTopics() {
    topicSelect.replaceChildren();
    const random = document.createElement("option");
    random.value = "__ALEATORIO__";
    random.textContent = "Sortear assunto do edital";
    topicSelect.append(random);

    if (subject !== "Todas as matérias" && subject !== "Redação") {
      EDITAIS[exam].materias[subject].forEach((topic) => {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        topicSelect.append(option);
      });
      const preferred = EDITAIS[exam].materias[subject].find((item) => /verbo to be/i.test(item));
      if (preferred) topicSelect.value = preferred;
    }
  }

  function updateSpecialFields() {
    const isEssay = subject === "Redação";
    const isAll = subject === "Todas as matérias";
    topicField.hidden = isEssay || isAll;
    $("#quantity").disabled = isEssay;
    document.querySelectorAll("[data-level]").forEach((button) => {
      button.disabled = isEssay;
    });
    generateButton.textContent = isEssay ? "Gerar proposta de redação com IA" : "Gerar questões com IA";
    offlineButton.hidden = isEssay;
    if (isEssay) {
      showMessage(`${EDITAIS[exam].redacao.tipo} ${EDITAIS[exam].redacao.linhas}`, false);
    } else if (result.textContent.includes("proposta de redação")) {
      result.hidden = true;
    }
  }

  function selectExam(nextExam) {
    exam = nextExam;
    subject = "Inglês";
    result.hidden = true;
    document.querySelectorAll("[data-exam]").forEach((button) => {
      const active = button.dataset.exam === exam;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderExamHint();
    renderSubjects();
    renderTopics();
    updateSpecialFields();
    sheet.hidden = true;
  }

  function selectLevel(nextLevel) {
    level = nextLevel;
    document.querySelectorAll("[data-level]").forEach((button) => {
      const active = button.dataset.level === level;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderQuestions(questions, params, origin) {
    sheet.replaceChildren();
    const heading = createElement("div", "sheet-head");
    heading.append(
      createElement("h2", "", `${params.exam}: ${params.subject}`),
      createElement("p", "", `${questions.length} questão(ões) • ${params.level} • ${origin}`)
    );
    sheet.append(heading);

    questions.forEach((question, index) => {
      const card = createElement("article", "q");
      card.dataset.correct = String(question.correta);
      card.dataset.topic = question.assunto || "Assunto do edital";
      const topicLabel = createElement("div", "q-topic", question.assunto || "Assunto do edital");
      card.append(topicLabel);
      if (params.subject === "Todas as matérias" && question.materia) {
        card.append(createElement("p", "field-hint", question.materia));
      }
      card.append(
        createElement("h3", "", `Questão ${index + 1}`),
        createElement("p", "q-text", question.enunciado)
      );

      const fieldset = document.createElement("fieldset");
      question.alternativas.forEach((alternative, alternativeIndex) => {
        const label = createElement("label", "opt");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `question-${index}`;
        radio.value = String(alternativeIndex);
        label.append(
          radio,
          createElement("span", "letter", `${LETTERS[alternativeIndex]})`),
          createElement("span", "", alternative)
        );
        fieldset.append(label);
      });

      const explanation = createElement("div", "explain");
      explanation.append(
        createElement("strong", "", `Gabarito: ${LETTERS[question.correta]}. `),
        document.createTextNode(question.explicacao || "Revise o conteúdo programático deste assunto.")
      );
      card.append(fieldset, explanation);
      sheet.append(card);
    });

    const actions = createElement("div", "sheet-actions");
    const gradeButton = createElement("button", "primary-button", "Corrigir lista");
    gradeButton.type = "button";
    gradeButton.addEventListener("click", () => gradeQuestions(questions.length));
    const againButton = createElement("button", "ghost-button", "Gerar outra lista");
    againButton.type = "button";
    againButton.addEventListener("click", () => form.requestSubmit());
    const printButton = createElement("button", "ghost-button", "Imprimir");
    printButton.type = "button";
    printButton.addEventListener("click", () => window.print());
    actions.append(gradeButton, againButton, printButton);
    sheet.append(actions);
    sheet.hidden = false;
    sheet.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function gradeQuestions(total) {
    let hits = 0;
    let answered = 0;
    const missed = {};
    sheet.querySelectorAll(".q").forEach((card) => {
      const correct = Number(card.dataset.correct);
      const selected = card.querySelector("input:checked");
      card.classList.add("graded");
      card.querySelectorAll(".opt").forEach((option, index) => {
        option.classList.toggle("correct", index === correct);
        option.classList.toggle("wrong", Boolean(selected && Number(selected.value) === index && index !== correct));
        option.querySelector("input").disabled = true;
      });
      if (selected) {
        answered += 1;
        if (Number(selected.value) === correct) hits += 1;
      }
      if (!selected || Number(selected.value) !== correct) {
        const topic = card.dataset.topic;
        missed[topic] = (missed[topic] || 0) + 1;
      }
    });

    sheet.querySelector(".score")?.remove();
    const score = createElement("div", "score", `Você acertou ${hits} de ${total} questão(ões).`);
    if (answered < total) score.append(createElement("div", "score-review", `${total - answered} questão(ões) sem resposta.`));
    const review = Object.entries(missed).sort((a, b) => b[1] - a[1]);
    if (review.length) score.append(createElement("div", "score-review", `Para revisar: ${review.map(([topic, count]) => `${topic} (${count})`).join(", ")}.`));
    sheet.querySelector(".sheet-actions").before(score);
    score.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function renderEssay(proposal, params) {
    sheet.replaceChildren();
    const heading = createElement("div", "sheet-head");
    heading.append(
      createElement("h2", "", `${params.exam}: proposta de Redação`),
      createElement("p", "", EDITAIS[params.exam].redacao.linhas)
    );
    sheet.append(heading);

    const promptBox = createElement("div", "essay-prompt");
    promptBox.append(
      createElement("h3", "", proposal.tema),
      createElement("p", "", proposal.comando)
    );
    if (Array.isArray(proposal.textosApoio)) {
      proposal.textosApoio.forEach((text, index) => {
        promptBox.append(createElement("p", "", `Texto motivador ${index + 1}: ${text}`));
      });
    }
    if (Array.isArray(proposal.orientacoes)) {
      const list = document.createElement("ul");
      proposal.orientacoes.forEach((item) => list.append(createElement("li", "", item)));
      promptBox.append(list);
    }
    sheet.append(promptBox);

    const editor = createElement("div", "essay-editor");
    const label = createElement("label", "field-title", "Escreva sua redação");
    const textarea = document.createElement("textarea");
    textarea.id = "essay-text";
    textarea.placeholder = params.exam === "EsPCEx"
      ? "Escreva em terceira pessoa. A redação da EsPCEx deve ter de 25 a 30 linhas."
      : "Digite sua redação aqui...";
    label.append(textarea);
    const correctionButton = createElement("button", "primary-button", "Corrigir minha redação com IA");
    correctionButton.type = "button";
    correctionButton.addEventListener("click", async () => {
      const text = textarea.value.trim();
      if (text.length < 80) {
        showMessage("Escreva pelo menos 80 caracteres antes de solicitar a correção.", true);
        return;
      }
      correctionButton.disabled = true;
      correctionButton.textContent = "Analisando redação...";
      try {
        const response = await corrigirRedacao({ exam: params.exam, tema: proposal.tema, texto: text });
        renderEssayFeedback(response.correcao, sheet);
        showMessage("Correção pedagógica concluída. Ela não substitui a avaliação oficial.");
      } catch (error) {
        showMessage(error.message, true);
      } finally {
        correctionButton.disabled = false;
        correctionButton.textContent = "Corrigir minha redação com IA";
      }
    });
    editor.append(label, correctionButton);
    sheet.append(editor);
    sheet.hidden = false;
    sheet.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderEssayFeedback(feedback, container) {
    container.querySelector(".essay-feedback")?.remove();
    const box = createElement("section", "essay-feedback");
    box.append(createElement("h3", "", "Análise da redação"));
    box.append(createElement("p", "", feedback.avaliacao || "Análise concluída."));
    const groups = [
      ["Pontos fortes", feedback.pontosFortes],
      ["Pontos para melhorar", feedback.pontosMelhorar],
      ["Observações gramaticais", feedback.observacoesGramaticais]
    ];
    groups.forEach(([title, items]) => {
      if (!Array.isArray(items) || !items.length) return;
      box.append(createElement("h4", "", title));
      const list = document.createElement("ul");
      items.forEach((item) => list.append(createElement("li", "", item)));
      box.append(list);
    });
    if (feedback.sugestaoReescrita) {
      box.append(createElement("h4", "", "Exemplo de melhoria"));
      box.append(createElement("p", "", feedback.sugestaoReescrita));
    }
    container.append(box);
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function bankSubjectMatches(questionSubject, selectedSubject) {
    if (questionSubject === selectedSubject) return true;
    const aliases = {
      "História do Brasil": ["História", "História do Brasil"],
      "Geografia do Brasil": ["Geografia", "Geografia do Brasil"],
      "História": ["História do Brasil", "História"],
      "Geografia": ["Geografia do Brasil", "Geografia"]
    };
    return (aliases[selectedSubject] || []).includes(questionSubject);
  }

  function fromOfflineBank(params) {
    if (typeof BANCO === "undefined" || !Array.isArray(BANCO[params.exam])) {
      throw new Error("O banco offline desta prova não foi carregado.");
    }
    let questions = BANCO[params.exam].filter((question) => {
      return params.subject === "Todas as matérias" || bankSubjectMatches(question.materia, params.subject);
    });
    if (params.topic && params.topic !== "__ALEATORIO__") {
      const target = normalize(params.topic);
      const tokens = target.split(/[^a-z0-9]+/).filter((token) => token.length > 3);
      const filtered = questions.filter((question) => {
        const text = normalize(`${question.assunto} ${question.enunciado}`);
        return text.includes(target) || tokens.some((token) => text.includes(token));
      });
      if (!filtered.length) {
        throw new Error(`O banco offline ainda não tem questões de “${params.topic}”. Use “Gerar questões com IA” para criar questões deste assunto.`);
      }
      questions = filtered;
    }
    if (!questions.length) throw new Error("Ainda não há questões offline para esta matéria. Use a geração por IA.");

    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, params.quantity);
    return shuffled.map((question) => {
      const order = [...question.alternativas.keys()].sort(() => Math.random() - 0.5);
      return {
        materia: question.materia,
        assunto: question.assunto,
        enunciado: question.enunciado,
        alternativas: order.map((index) => question.alternativas[index]),
        correta: order.indexOf(question.correta),
        explicacao: question.explicacao
      };
    });
  }

  function readParams() {
    return {
      exam,
      subject,
      topic: subject === "Redação" || subject === "Todas as matérias" ? "__ALEATORIO__" : topicSelect.value,
      level,
      quantity: Number(quantityField.value)
    };
  }

  async function handleGenerate(useAI) {
    const params = readParams();
    lastParams = params;
    setBusy(true, useAI ? (subject === "Redação" ? "Preparando redação..." : "Gerando questões... ") : "Carregando banco...");
    result.hidden = true;
    sheet.hidden = true;
    try {
      if (params.subject === "Redação") {
        if (!useAI) throw new Error("A proposta de redação é gerada com IA. Configure a chave no servidor para usar este recurso.");
        const response = await gerarComIA(params);
        if (response.tipo !== "redacao" || !response.proposta) throw new Error("O servidor não retornou uma proposta de redação válida.");
        renderEssay(response.proposta, params);
      } else if (useAI) {
        const response = await gerarComIA(params);
        if (!Array.isArray(response.questoes)) throw new Error("O servidor não retornou uma lista válida de questões.");
        renderQuestions(response.questoes, params, "Geradas com IA");
      } else {
        let questions = null;
        const materiasComGeradorAutomatico = ["Matemática", "Física", "Química"];
        const materiaExisteNaProva = materiasComGeradorAutomatico.includes(params.subject) &&
          Object.prototype.hasOwnProperty.call(EDITAIS[params.exam].materias, params.subject);

        if (materiaExisteNaProva && typeof gerarLista === "function") {
          questions = gerarLista(
            params.subject,
            params.topic === "__ALEATORIO__" ? "" : params.topic,
            params.level,
            params.exam,
            params.quantity,
            5
          );
        }

        const origin = questions && questions.length
          ? "Geradas automaticamente offline"
          : "Banco offline (questões fixas)";
        if (!questions || !questions.length) questions = fromOfflineBank(params);
        renderQuestions(questions, params, origin);
        if (questions.length < params.quantity) {
          showMessage(`Foram encontradas ${questions.length} questão(ões) para este filtro. O banco offline é limitado; a IA pode criar novas.`, false);
        }
      }
    } catch (error) {
      showMessage(error.message || "Ocorreu um erro ao gerar o treino.", true);
    } finally {
      setBusy(false);
    }
  }

  document.querySelectorAll("[data-exam]").forEach((button) => {
    button.addEventListener("click", () => selectExam(button.dataset.exam));
  });
  document.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => selectLevel(button.dataset.level));
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleGenerate(true);
  });
  offlineButton.addEventListener("click", () => handleGenerate(false));

  renderExamHint();
  renderSubjects();
  renderTopics();
  updateSpecialFields();
  selectLevel(level);
})();
