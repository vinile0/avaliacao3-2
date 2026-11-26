/*
 * Conteúdo organizado a partir dos editais de admissão 2026/2027.
 * ESA: Área Geral (matrícula em 2027).
 * EsPCEx: Concurso de Admissão 2026/27.
 * Os nomes dos tópicos são resumos fiéis das seções do conteúdo programático.
 */
const EDITAIS = {
  ESA: {
    nome: "ESA",
    edicao: "Edital nº 1/SCA, de 26/03/2026 — matrícula em 2027",
    area: "Área Geral",
    alternativas: 5,
    materias: {
      "Matemática": [
        "Noções de conjuntos",
        "Conjuntos numéricos, razões e proporções",
        "Funções e gráficos",
        "Progressões aritméticas e geométricas",
        "Equações e inequações",
        "Polinômios e fatoração",
        "Exponenciais e logaritmos",
        "Trigonometria",
        "Geometria plana",
        "Geometria espacial",
        "Geometria analítica",
        "Análise combinatória",
        "Probabilidade e estatística",
        "Matemática financeira",
        "Noções de lógica"
      ],
      "Português": [
        "Leitura, interpretação e análise de textos",
        "Fonética, ortografia e pontuação",
        "Morfologia e formação de palavras",
        "Morfossintaxe",
        "Noções de versificação",
        "Teoria da linguagem e semântica",
        "Introdução à literatura",
        "Literatura brasileira"
      ],
      "História do Brasil": [
        "Povos indígenas e Brasil antes da chegada dos europeus",
        "Período pré-colonial",
        "Brasil Colônia: administração, economia e sociedade",
        "Consolidação territorial e invasões estrangeiras",
        "Rebeliões nativistas",
        "Movimentos pró-independência",
        "Brasil Império",
        "Proclamação da República e Primeira República",
        "Era Vargas",
        "Brasil na Segunda Guerra Mundial e participação da FEB",
        "República Brasileira entre 1945 e 1985",
        "Nova República (1985 até os dias atuais)"
      ],
      "Geografia do Brasil": [
        "Espaço natural, recursos estratégicos e impactos ambientais",
        "Território, relevo, solos, clima e biomas brasileiros",
        "Recursos hídricos e bacias hidrográficas",
        "Espaço econômico: agricultura, indústria e comércio",
        "Espaço político: território, fronteiras e divisão regional",
        "Espaço humano: população, migrações e mercado de trabalho",
        "Urbanização brasileira e problemas urbanos"
      ],
      "Inglês": [
        "Compreensão leitora e interpretação de textos",
        "Substantivos (nouns): gênero, número e caso possessivo",
        "Pronomes (pronouns): pessoais, reflexivos, demonstrativos e possessivos",
        "Question words, pronomes indefinidos e quantificadores",
        "Artigos definidos e indefinidos (the, a/an)",
        "Adjetivos e advérbios: formas, usos e graus",
        "Verbo to be (formas verbais e tempos)",
        "Simple Present e Present Continuous",
        "Past Simple e Past Continuous",
        "Future with going to e Simple Future (will/shall)",
        "Present Perfect",
        "Verbos modais: can, could, must, may, might, would, should e ought to",
        "Imperativo, infinitivo e gerúndio",
        "Phrasal verbs",
        "Tag questions",
        "Preposições de tempo, lugar, movimento e transporte"
      ]
    },
    redacao: {
      tipo: "Produção de texto dissertativo para treino da prova de Redação da ESA.",
      linhas: "Siga as orientações e os critérios do edital vigente da sua área."
    }
  },
  EsPCEx: {
    nome: "EsPCEx",
    edicao: "Edital nº 2 S Conc Adms, de 22/04/2026 — concurso 2026/27",
    alternativas: 5,
    materias: {
      "Matemática": [
        "Teoria dos conjuntos e conjuntos numéricos",
        "Funções e relações",
        "Função linear, afim e quadrática",
        "Função modular",
        "Função exponencial",
        "Função logarítmica",
        "Trigonometria",
        "Contagem e análise combinatória",
        "Probabilidade",
        "Matrizes, determinantes e sistemas lineares",
        "Sequências numéricas, PA e PG",
        "Geometria espacial de posição",
        "Geometria espacial métrica",
        "Geometria analítica plana",
        "Geometria plana",
        "Polinômios",
        "Equações polinomiais"
      ],
      "Português": [
        "Leitura, interpretação e análise de textos",
        "Fonética, ortografia e acentuação",
        "Morfologia e formação de palavras",
        "Semântica",
        "Sintaxe, concordância, regência e colocação",
        "Teoria da linguagem",
        "Estilística e figuras de linguagem",
        "Acordo ortográfico",
        "Literatura brasileira e escolas literárias"
      ],
      "Física": [
        "Mecânica: cinemática, dinâmica, energia e gravitação",
        "Estática e hidrostática",
        "Termologia, termometria e calorimetria",
        "Mudanças de fase e dilatação térmica",
        "Gases ideais e termodinâmica",
        "Óptica geométrica, espelhos e lentes",
        "Ondas, movimento harmônico e efeito Doppler",
        "Eletrostática e campo elétrico",
        "Corrente elétrica, resistores e circuitos",
        "Magnetismo e indução eletromagnética"
      ],
      "Química": [
        "Matéria, substâncias e misturas",
        "Estrutura atômica moderna",
        "Classificação periódica e propriedades dos elementos",
        "Ligações químicas",
        "Compostos iônicos e moleculares",
        "Funções inorgânicas",
        "Reações químicas e balanceamento",
        "Grandezas químicas, mol e massa molar",
        "Estequiometria e rendimento de reações",
        "Gases",
        "Termoquímica",
        "Cinética química",
        "Equilíbrio químico",
        "Química orgânica e funções orgânicas"
      ],
      "Geografia": [
        "Localização geográfica, coordenadas e fusos horários",
        "Cartografia, escalas e projeções",
        "Espaço natural: estrutura geológica, relevo e solos",
        "Clima, atmosfera e domínios naturais",
        "Hidrografia, oceanos e recursos hídricos",
        "Impactos ambientais e biodiversidade",
        "Espaço político e econômico",
        "Geografia do Brasil: território, população e economia",
        "Espaço humano, urbanização e migrações"
      ],
      "História": [
        "Sociedade feudal e Renascimento Comercial e Urbano",
        "Estados Nacionais, Absolutismo e Mercantilismo",
        "Expansão Marítima Europeia",
        "Renascimento Cultural, Humanismo e Reformas Religiosas",
        "Colonização europeia na América",
        "Sistema Colonial Português na América",
        "Iluminismo e Despotismo Esclarecido",
        "Revoluções Inglesas e Revolução Industrial",
        "Independência dos Estados Unidos",
        "Revolução Francesa e Restauração",
        "Brasil Imperial e Proclamação da República",
        "Pensamento e ideologias dos séculos XIX e XX",
        "Primeira Guerra Mundial e República Velha no Brasil",
        "Segunda Guerra Mundial e Era Vargas",
        "Guerra Fria e República Brasileira entre 1945 e 1991",
        "Mundo no final do século XX e início do século XXI"
      ],
      "Inglês": [
        "Compreensão geral e interpretação de textos",
        "Adjectives: adjetivos",
        "Adverbs: advérbios",
        "Nouns: substantivos",
        "Word formation: formação de palavras",
        "Articles: artigos",
        "Conjunctions: conjunções",
        "Modal auxiliaries: verbos modais",
        "Prepositions: preposições",
        "Pronouns: pronomes",
        "Possessive adjectives: adjetivos possessivos",
        "Determiners e quantifiers",
        "Verb forms: formas verbais, incluindo verbo to be",
        "Verb tenses: tempos verbais",
        "Active and passive voice: voz ativa e passiva",
        "Wh-questions: perguntas com palavras interrogativas"
      ]
    },
    redacao: {
      tipo: "Texto dissertativo-argumentativo em terceira pessoa, conforme o edital da EsPCEx.",
      linhas: "A redação da EsPCEx deve ter de 25 a 30 linhas, conforme o edital 2026/27."
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = EDITAIS;
} else if (typeof window !== "undefined") {
  window.EDITAIS = EDITAIS;
}
