/* Banco offline QuestLab: 20 questões autorais por matéria e concurso. */
const BANCO = {
  "ESA": [
    {
      "materia": "Matemática",
      "assunto": "Razão e proporção",
      "enunciado": "Uma equipe de 12 militares conclui uma tarefa em 15 horas. Mantido o mesmo ritmo, quanto tempo 18 militares levariam?",
      "alternativas": [
        "8 h",
        "9 h",
        "10 h",
        "12 h",
        "14 h"
      ],
      "correta": 2,
      "explicacao": "Grandezas inversamente proporcionais: 12·15 = 18·t; t = 10 horas.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Porcentagem",
      "enunciado": "Um material de R$ 400 recebe desconto de 15%. Qual é o preço final?",
      "alternativas": [
        "R$ 320",
        "R$ 330",
        "R$ 340",
        "R$ 350",
        "R$ 360"
      ],
      "correta": 2,
      "explicacao": "15% de 400 = 60; 400 − 60 = R$ 340.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Equação do 1º grau",
      "enunciado": "A soma de um número com seu triplo é 52. Qual é esse número?",
      "alternativas": [
        "10",
        "11",
        "12",
        "13",
        "14"
      ],
      "correta": 3,
      "explicacao": "x + 3x = 52; 4x = 52; x = 13.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Equação do 2º grau",
      "enunciado": "As raízes de x² − 9x + 20 = 0 são:",
      "alternativas": [
        "2 e 10",
        "4 e 5",
        "3 e 6",
        "−4 e −5",
        "1 e 20"
      ],
      "correta": 1,
      "explicacao": "Fatorando: (x − 4)(x − 5) = 0.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Função afim",
      "enunciado": "Se f(x) = 2x + 7, então f(6) é:",
      "alternativas": [
        "12",
        "13",
        "17",
        "19",
        "21"
      ],
      "correta": 3,
      "explicacao": "f(6) = 2·6 + 7 = 19.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Sistema linear",
      "enunciado": "A solução do sistema x + y = 11 e x − y = 3 é:",
      "alternativas": [
        "x=6, y=5",
        "x=7, y=4",
        "x=8, y=3",
        "x=5, y=6",
        "x=4, y=7"
      ],
      "correta": 1,
      "explicacao": "Somando as equações: 2x = 14, x = 7; então y = 4.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Progressão aritmética",
      "enunciado": "Em uma PA, a₁ = 7 e razão 3. O 12º termo é:",
      "alternativas": [
        "37",
        "40",
        "43",
        "46",
        "49"
      ],
      "correta": 1,
      "explicacao": "a₁₂ = 7 + 11·3 = 40.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Progressão geométrica",
      "enunciado": "Na PG (2, 6, 18, ...), o sexto termo é:",
      "alternativas": [
        "162",
        "243",
        "324",
        "486",
        "729"
      ],
      "correta": 3,
      "explicacao": "a₆ = 2·3⁵ = 486.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Geometria plana",
      "enunciado": "Um retângulo tem lados 8 cm e 5 cm. Seu perímetro é:",
      "alternativas": [
        "13 cm",
        "26 cm",
        "32 cm",
        "40 cm",
        "45 cm"
      ],
      "correta": 1,
      "explicacao": "P = 2(8 + 5) = 26 cm.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Teorema de Pitágoras",
      "enunciado": "Os catetos de um triângulo retângulo medem 9 cm e 12 cm. A hipotenusa mede:",
      "alternativas": [
        "13 cm",
        "14 cm",
        "15 cm",
        "16 cm",
        "18 cm"
      ],
      "correta": 2,
      "explicacao": "h² = 9² + 12² = 225; h = 15 cm.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Áreas",
      "enunciado": "A área de um círculo de raio 4 cm é:",
      "alternativas": [
        "4π cm²",
        "8π cm²",
        "12π cm²",
        "16π cm²",
        "32π cm²"
      ],
      "correta": 3,
      "explicacao": "A = πr² = 16π cm².",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Trigonometria",
      "enunciado": "Em um triângulo retângulo, para um ângulo agudo, seno é a razão entre:",
      "alternativas": [
        "cateto adjacente e hipotenusa",
        "cateto oposto e hipotenusa",
        "catetos",
        "hipotenusa e cateto oposto",
        "cateto oposto e adjacente"
      ],
      "correta": 1,
      "explicacao": "sen θ = cateto oposto/hipotenusa.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Análise combinatória",
      "enunciado": "Quantos anagramas distintos podem ser formados com as letras de SOL?",
      "alternativas": [
        "3",
        "4",
        "5",
        "6",
        "9"
      ],
      "correta": 3,
      "explicacao": "As três letras são distintas: 3! = 6.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Probabilidade",
      "enunciado": "Em uma urna há 3 bolas verdes e 7 amarelas. A probabilidade de retirar uma verde é:",
      "alternativas": [
        "10%",
        "20%",
        "30%",
        "40%",
        "70%"
      ],
      "correta": 2,
      "explicacao": "Há 3 casos favoráveis em 10 possíveis: 3/10 = 30%.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Estatística",
      "enunciado": "As notas 5, 7, 8 e 10 têm média aritmética igual a:",
      "alternativas": [
        "6",
        "7",
        "7,5",
        "8",
        "8,5"
      ],
      "correta": 2,
      "explicacao": "(5 + 7 + 8 + 10)/4 = 30/4 = 7,5.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Conjuntos",
      "enunciado": "Se A={1,2,3,4} e B={3,4,5}, então A∩B é:",
      "alternativas": [
        "{1,2}",
        "{3,4}",
        "{1,2,3,4,5}",
        "{5}",
        "vazio"
      ],
      "correta": 1,
      "explicacao": "A interseção reúne os elementos comuns aos dois conjuntos: 3 e 4.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Potenciação",
      "enunciado": "O valor de 2⁵ · 2³ é:",
      "alternativas": [
        "64",
        "128",
        "256",
        "512",
        "1 024"
      ],
      "correta": 2,
      "explicacao": "Na multiplicação de potências de mesma base, somam-se os expoentes: 2⁸ = 256.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Radiciação",
      "enunciado": "A simplificação de √72 é:",
      "alternativas": [
        "2√6",
        "3√8",
        "6√2",
        "8√2",
        "12√2"
      ],
      "correta": 2,
      "explicacao": "√72 = √(36·2) = 6√2.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Matemática financeira",
      "enunciado": "Um capital de R$ 500 é aplicado a juros simples de 2% ao mês por 3 meses. O juro é:",
      "alternativas": [
        "R$ 20",
        "R$ 25",
        "R$ 30",
        "R$ 35",
        "R$ 40"
      ],
      "correta": 2,
      "explicacao": "J = C·i·t = 500·0,02·3 = R$ 30.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Polinômios",
      "enunciado": "O valor de (x + 2)(x − 2) é:",
      "alternativas": [
        "x² + 4",
        "x² − 4",
        "x² − 2x + 4",
        "x² + 2x − 4",
        "x² − 4x"
      ],
      "correta": 1,
      "explicacao": "Produto da soma pela diferença: x² − 2² = x² − 4.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Interpretação de texto",
      "enunciado": "Em um texto argumentativo, a tese corresponde:",
      "alternativas": [
        "ao exemplo final",
        "à ideia central defendida",
        "à lista de referências",
        "à descrição do cenário",
        "à fala de uma personagem"
      ],
      "correta": 1,
      "explicacao": "A tese é o posicionamento central que o autor procura defender.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Classes de palavras",
      "enunciado": "Na frase “O candidato respondeu rapidamente”, a palavra “rapidamente” é:",
      "alternativas": [
        "substantivo",
        "adjetivo",
        "advérbio",
        "pronome",
        "preposição"
      ],
      "correta": 2,
      "explicacao": "O termo modifica o verbo “respondeu” e indica modo.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Concordância verbal",
      "enunciado": "Assinale a frase correta:",
      "alternativas": [
        "Houveram dúvidas na prova.",
        "Fazem três meses que estudo.",
        "Existem bons motivos para revisar.",
        "Deve haverem candidatos.",
        "Aconteceu muitas mudanças."
      ],
      "correta": 2,
      "explicacao": "O verbo existir concorda com o sujeito plural: “bons motivos”.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Concordância nominal",
      "enunciado": "Assinale a alternativa correta:",
      "alternativas": [
        "É proibido a entrada.",
        "Seguem anexo os documentos.",
        "As alunas estavam bastante preparadas.",
        "Meio-dia e meia.",
        "Muito obrigada, disse o rapaz."
      ],
      "correta": 2,
      "explicacao": "“Bastante”, como advérbio de intensidade, permanece invariável.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Regência verbal",
      "enunciado": "Assinale a construção de acordo com a norma-padrão:",
      "alternativas": [
        "Assisti o filme ontem.",
        "Obedeço o regulamento.",
        "Prefiro estudar a improvisar.",
        "Cheguei no quartel cedo.",
        "Aspiro ao ar puro (no sentido de desejar)."
      ],
      "correta": 2,
      "explicacao": "Preferir rege a estrutura “preferir uma coisa a outra”, sem “mais/ do que”.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Crase",
      "enunciado": "O emprego da crase está correto em:",
      "alternativas": [
        "Saiu à cavalo.",
        "Entregou o formulário à candidata.",
        "Começou à estudar.",
        "Referiu-se à pessoas ausentes.",
        "Ficou cara à cara."
      ],
      "correta": 1,
      "explicacao": "O verbo entregar pede preposição “a” e “candidata” admite artigo feminino.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Pontuação",
      "enunciado": "A vírgula está corretamente empregada em:",
      "alternativas": [
        "Os alunos, chegaram cedo.",
        "Durante a prova, todos permaneceram em silêncio.",
        "O instrutor explicou, o exercício.",
        "A equipe treinou, e venceu.",
        "O candidato que estudou, foi aprovado."
      ],
      "correta": 1,
      "explicacao": "A vírgula separa adjunto adverbial deslocado no início da oração.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Colocação pronominal",
      "enunciado": "Assinale a frase correta:",
      "alternativas": [
        "Nunca disseram-me isso.",
        "Não me disseram isso.",
        "Me avisaram ontem.",
        "Jamais contaram-me a verdade.",
        "Quem contou-me?"
      ],
      "correta": 1,
      "explicacao": "A palavra negativa “não” atrai o pronome: próclise.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Pronomes",
      "enunciado": "Em “Entreguei-lhe o documento”, o pronome “lhe” exerce função de:",
      "alternativas": [
        "sujeito",
        "objeto direto",
        "objeto indireto",
        "predicativo",
        "adjunto adnominal"
      ],
      "correta": 2,
      "explicacao": "“Lhe” funciona como complemento indireto do verbo entregar.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Vozes verbais",
      "enunciado": "A forma passiva de “A comissão analisou os recursos” é:",
      "alternativas": [
        "Os recursos analisaram a comissão.",
        "A comissão foi analisada pelos recursos.",
        "Os recursos foram analisados pela comissão.",
        "Analisaram-se a comissão.",
        "Os recursos são analisar."
      ],
      "correta": 2,
      "explicacao": "O objeto direto passa a sujeito paciente: “foram analisados”.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Período composto",
      "enunciado": "Em “Estudou bastante, portanto foi aprovado”, a conjunção expressa:",
      "alternativas": [
        "oposição",
        "conclusão",
        "explicação",
        "alternância",
        "condição"
      ],
      "correta": 1,
      "explicacao": "“Portanto” é conjunção coordenativa conclusiva.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Figuras de linguagem",
      "enunciado": "Em “A cidade acordou apressada”, ocorre:",
      "alternativas": [
        "hipérbole",
        "prosopopeia",
        "eufemismo",
        "antítese",
        "onomatopeia"
      ],
      "correta": 1,
      "explicacao": "Atribui-se ação humana (“acordou”) à cidade: personificação.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Ortografia",
      "enunciado": "Assinale a palavra escrita corretamente:",
      "alternativas": [
        "excessão",
        "previlégio",
        "empecilho",
        "beneficiente",
        "paralização"
      ],
      "correta": 2,
      "explicacao": "A grafia correta é “empecilho”.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Acentuação",
      "enunciado": "A palavra “herói” é acentuada porque é:",
      "alternativas": [
        "paroxítona terminada em a",
        "oxítona com ditongo aberto tônico",
        "proparoxítona",
        "monossílabo átono",
        "paroxítona terminada em l"
      ],
      "correta": 1,
      "explicacao": "“Herói” é oxítona com ditongo aberto “ói”.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Formação de palavras",
      "enunciado": "A palavra “infelizmente” é formada por:",
      "alternativas": [
        "composição por justaposição",
        "derivação prefixal e sufixal",
        "derivação regressiva",
        "abreviação",
        "hibridismo"
      ],
      "correta": 1,
      "explicacao": "Há prefixo “in-” e sufixo “-mente” agregados a “feliz”.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Semântica",
      "enunciado": "A palavra “iminente” significa:",
      "alternativas": [
        "ilustre",
        "que está prestes a acontecer",
        "que não tem importância",
        "muito distante",
        "que foi eliminado"
      ],
      "correta": 1,
      "explicacao": "Iminente indica algo próximo de ocorrer; não confundir com “eminente”.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Tipos textuais",
      "enunciado": "Um texto que apresenta etapas para executar uma tarefa é predominantemente:",
      "alternativas": [
        "narrativo",
        "descritivo",
        "injuntivo",
        "lírico",
        "dialogal"
      ],
      "correta": 2,
      "explicacao": "O tipo injuntivo instrui, orienta ou ordena ações.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Coesão textual",
      "enunciado": "A expressão “Além disso” estabelece relação de:",
      "alternativas": [
        "oposição",
        "adição",
        "conclusão",
        "causa",
        "concessão"
      ],
      "correta": 1,
      "explicacao": "“Além disso” acrescenta uma informação ao que foi dito.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Sujeito e predicado",
      "enunciado": "Em “Chegaram os reforços”, o sujeito é:",
      "alternativas": [
        "oculto",
        "indeterminado",
        "os reforços",
        "inexistente",
        "chegaram"
      ],
      "correta": 2,
      "explicacao": "O sujeito simples é “os reforços”, posposto ao verbo.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Orações subordinadas",
      "enunciado": "Em “Espero que você consiga”, a oração “que você consiga” é:",
      "alternativas": [
        "subordinada substantiva objetiva direta",
        "subordinada adverbial causal",
        "coordenada explicativa",
        "subordinada adjetiva restritiva",
        "subordinada temporal"
      ],
      "correta": 0,
      "explicacao": "Completa o sentido do verbo “espero” sem preposição: objeto direto.",
      "nivel": "difícil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Brasil Colonial",
      "enunciado": "O sistema de capitanias hereditárias foi implantado pela Coroa portuguesa principalmente para:",
      "alternativas": [
        "abolir a escravidão",
        "promover a ocupação e defesa do território",
        "declarar a independência",
        "criar universidades",
        "transferir a capital para Salvador"
      ],
      "correta": 1,
      "explicacao": "A Coroa delegou a particulares a colonização, defesa e exploração de parcelas do território.",
      "nivel": "fácil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Economia colonial",
      "enunciado": "A principal atividade econômica do Nordeste açucareiro nos séculos XVI e XVII baseava-se:",
      "alternativas": [
        "na mineração de ouro",
        "na produção de açúcar em engenhos",
        "na cafeicultura",
        "na borracha",
        "na indústria automobilística"
      ],
      "correta": 1,
      "explicacao": "A produção açucareira, baseada no latifúndio e no trabalho escravizado, marcou a economia colonial.",
      "nivel": "fácil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Invasões holandesas",
      "enunciado": "A ocupação holandesa de Pernambuco no século XVII esteve ligada ao interesse no comércio de:",
      "alternativas": [
        "café",
        "açúcar",
        "borracha",
        "ouro amazônico",
        "charque"
      ],
      "correta": 1,
      "explicacao": "Os holandeses buscavam controlar a produção e o comércio do açúcar.",
      "nivel": "fácil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Bandeirismo",
      "enunciado": "As bandeiras paulistas contribuíram para:",
      "alternativas": [
        "reduzir o território português",
        "expandir a ocupação para o interior",
        "proclamar a República",
        "abolir o tráfico negreiro",
        "fundar Brasília"
      ],
      "correta": 1,
      "explicacao": "As expedições penetraram o interior em busca de indígenas, metais e pedras preciosas.",
      "nivel": "fácil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Inconfidência Mineira",
      "enunciado": "A Inconfidência Mineira de 1789 foi influenciada por ideias:",
      "alternativas": [
        "absolutistas",
        "iluministas",
        "fascistas",
        "corporativistas",
        "medievais"
      ],
      "correta": 1,
      "explicacao": "Ideias iluministas e exemplos de independência atlântica influenciaram os conspiradores.",
      "nivel": "fácil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Independência",
      "enunciado": "A Independência do Brasil foi proclamada em:",
      "alternativas": [
        "7 de setembro de 1822",
        "15 de novembro de 1889",
        "21 de abril de 1792",
        "13 de maio de 1888",
        "9 de janeiro de 1822"
      ],
      "correta": 0,
      "explicacao": "O 7 de setembro de 1822 é a data tradicional da proclamação da Independência.",
      "nivel": "fácil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Primeiro Reinado",
      "enunciado": "A Constituição de 1824 estabeleceu, além dos três poderes tradicionais, o Poder:",
      "alternativas": [
        "Moderador",
        "Popular",
        "Sindical",
        "Militar",
        "Provincial"
      ],
      "correta": 0,
      "explicacao": "A Carta de 1824 instituiu o Poder Moderador, exercido pelo imperador.",
      "nivel": "média"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Período Regencial",
      "enunciado": "A Cabanagem ocorreu principalmente na província do:",
      "alternativas": [
        "Pará",
        "Rio Grande do Sul",
        "Maranhão",
        "Pernambuco",
        "Rio de Janeiro"
      ],
      "correta": 0,
      "explicacao": "A Cabanagem (1835–1840) foi uma revolta popular ocorrida no Grão-Pará.",
      "nivel": "média"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Segundo Reinado",
      "enunciado": "A Lei Eusébio de Queirós, de 1850, determinou:",
      "alternativas": [
        "o fim imediato da escravidão",
        "a proibição do tráfico transatlântico de escravizados",
        "a proclamação da República",
        "a criação do voto feminino",
        "a abolição da monarquia"
      ],
      "correta": 1,
      "explicacao": "A lei reprimiu o tráfico transatlântico de africanos escravizados.",
      "nivel": "média"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Abolicionismo",
      "enunciado": "A Lei Áurea, assinada em 1888, foi responsável por:",
      "alternativas": [
        "instituir o voto secreto",
        "abolir juridicamente a escravidão no Brasil",
        "criar a República",
        "proibir a imigração",
        "criar a CLT"
      ],
      "correta": 1,
      "explicacao": "A Lei Áurea declarou extinta a escravidão, sem estabelecer políticas amplas de integração.",
      "nivel": "média"
    },
    {
      "materia": "História do Brasil",
      "assunto": "República Velha",
      "enunciado": "A política dos governadores caracterizou-se por:",
      "alternativas": [
        "centralização democrática plena",
        "alianças entre governo federal e oligarquias estaduais",
        "fim do poder dos coronéis",
        "voto universal secreto",
        "industrialização socialista"
      ],
      "correta": 1,
      "explicacao": "O arranjo sustentava a estabilidade política por meio de acordos com oligarquias estaduais.",
      "nivel": "média"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Revoltas da República",
      "enunciado": "A Guerra de Canudos ocorreu no atual estado da:",
      "alternativas": [
        "Bahia",
        "Paraíba",
        "Amazonas",
        "São Paulo",
        "Santa Catarina"
      ],
      "correta": 0,
      "explicacao": "Canudos foi um arraial no sertão baiano, destruído pelo Exército em 1897.",
      "nivel": "média"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Era Vargas",
      "enunciado": "A Revolução de 1930 levou ao poder:",
      "alternativas": [
        "Juscelino Kubitschek",
        "Getúlio Vargas",
        "Jânio Quadros",
        "Deodoro da Fonseca",
        "Floriano Peixoto"
      ],
      "correta": 1,
      "explicacao": "O movimento de 1930 encerrou a Primeira República e levou Vargas ao governo.",
      "nivel": "média"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Estado Novo",
      "enunciado": "O Estado Novo (1937–1945) foi marcado por:",
      "alternativas": [
        "ampla autonomia partidária",
        "autoritarismo e centralização do poder",
        "parlamentarismo estável",
        "fim da censura",
        "eleições presidenciais anuais"
      ],
      "correta": 1,
      "explicacao": "Vargas fechou o Congresso, reprimiu opositores e estabeleceu censura.",
      "nivel": "difícil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Segunda Guerra",
      "enunciado": "A Força Expedicionária Brasileira combateu na Segunda Guerra Mundial principalmente:",
      "alternativas": [
        "na Itália",
        "no Japão",
        "na Noruega",
        "na Rússia",
        "no Egito"
      ],
      "correta": 0,
      "explicacao": "A FEB integrou a campanha aliada na Itália.",
      "nivel": "difícil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Ditadura Militar",
      "enunciado": "O golpe de 1964 resultou na instalação de um regime:",
      "alternativas": [
        "monárquico",
        "militar autoritário",
        "parlamentarista",
        "anarquista",
        "colonial"
      ],
      "correta": 1,
      "explicacao": "As Forças Armadas assumiram o poder e instauraram um regime autoritário.",
      "nivel": "difícil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "AI-5",
      "enunciado": "O Ato Institucional nº 5, de 1968, ampliou:",
      "alternativas": [
        "as liberdades civis",
        "os poderes repressivos do regime",
        "a autonomia sindical irrestrita",
        "o voto direto para presidente",
        "a liberdade de imprensa"
      ],
      "correta": 1,
      "explicacao": "O AI-5 permitiu medidas como cassações, fechamento do Congresso e suspensão de garantias.",
      "nivel": "difícil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Redemocratização",
      "enunciado": "A Constituição Federal atualmente em vigor foi promulgada em:",
      "alternativas": [
        "1967",
        "1979",
        "1985",
        "1988",
        "1992"
      ],
      "correta": 3,
      "explicacao": "A Constituição Cidadã foi promulgada em 5 de outubro de 1988.",
      "nivel": "difícil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "República",
      "enunciado": "A Proclamação da República, em 15 de novembro de 1889, encerrou:",
      "alternativas": [
        "o período colonial",
        "o Império brasileiro",
        "o Estado Novo",
        "a ditadura militar",
        "a Regência"
      ],
      "correta": 1,
      "explicacao": "O movimento militar de 1889 derrubou a monarquia e instituiu a República.",
      "nivel": "difícil"
    },
    {
      "materia": "História do Brasil",
      "assunto": "Movimentos sociais",
      "enunciado": "A Revolta da Vacina, em 1904, ocorreu na cidade do Rio de Janeiro e esteve relacionada:",
      "alternativas": [
        "à vacinação obrigatória e reformas urbanas",
        "à abolição da escravidão",
        "à Guerra do Paraguai",
        "à criação da Petrobras",
        "à transferência da capital"
      ],
      "correta": 0,
      "explicacao": "A imposição da vacinação, em contexto de reformas urbanas autoritárias, desencadeou a revolta.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Cartografia",
      "enunciado": "A escala 1:100 000 significa que 1 cm no mapa representa, no terreno:",
      "alternativas": [
        "100 m",
        "500 m",
        "1 km",
        "10 km",
        "100 km"
      ],
      "correta": 2,
      "explicacao": "100 000 cm correspondem a 1 000 m, ou 1 km.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Coordenadas geográficas",
      "enunciado": "A latitude é medida a partir:",
      "alternativas": [
        "do Meridiano de Greenwich",
        "da Linha do Equador",
        "do Trópico de Capricórnio",
        "do Círculo Polar Ártico",
        "da Linha Internacional de Data"
      ],
      "correta": 1,
      "explicacao": "A latitude é a distância angular ao norte ou ao sul do Equador.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Fusos horários",
      "enunciado": "A Terra gira 360° em aproximadamente 24 horas. Assim, cada fuso teórico corresponde a:",
      "alternativas": [
        "5°",
        "10°",
        "15°",
        "20°",
        "30°"
      ],
      "correta": 2,
      "explicacao": "360° ÷ 24 = 15° por hora.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Relevo brasileiro",
      "enunciado": "As planícies são formas de relevo caracterizadas predominantemente por:",
      "alternativas": [
        "processos de sedimentação",
        "dobramentos modernos",
        "vulcanismo ativo",
        "altitudes sempre superiores a 2 000 m",
        "ausência de rios"
      ],
      "correta": 0,
      "explicacao": "Planícies são áreas relativamente planas onde predomina a deposição de sedimentos.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Clima",
      "enunciado": "O clima equatorial brasileiro apresenta, em geral:",
      "alternativas": [
        "baixas temperaturas o ano todo",
        "elevadas temperaturas e chuvas abundantes",
        "longa estação seca e frio intenso",
        "neve frequente",
        "chuvas apenas no inverno"
      ],
      "correta": 1,
      "explicacao": "A baixa latitude e a umidade amazônica favorecem calor e precipitação elevada.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Biomas",
      "enunciado": "A vegetação típica da Caatinga apresenta adaptações:",
      "alternativas": [
        "à elevada salinidade marinha",
        "à escassez de água",
        "ao frio polar",
        "às inundações permanentes",
        "à altitude alpina"
      ],
      "correta": 1,
      "explicacao": "Plantas xerófitas possuem adaptações para sobreviver à irregularidade das chuvas.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Amazônia",
      "enunciado": "Uma função ambiental importante da Floresta Amazônica é:",
      "alternativas": [
        "impedir qualquer evaporação",
        "participar dos ciclos de água e carbono",
        "eliminar os ventos alísios",
        "produzir correntes oceânicas",
        "reduzir a biodiversidade global"
      ],
      "correta": 1,
      "explicacao": "A floresta armazena carbono e influencia a evapotranspiração e os regimes de chuva.",
      "nivel": "média"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "População",
      "enunciado": "O crescimento vegetativo corresponde à diferença entre:",
      "alternativas": [
        "imigração e emigração",
        "natalidade e mortalidade",
        "população urbana e rural",
        "exportação e importação",
        "nascimentos e migração"
      ],
      "correta": 1,
      "explicacao": "Crescimento vegetativo = taxa de natalidade menos taxa de mortalidade.",
      "nivel": "média"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Urbanização",
      "enunciado": "A conurbação ocorre quando:",
      "alternativas": [
        "uma cidade perde toda a população",
        "manchas urbanas de municípios vizinhos se unem fisicamente",
        "a população retorna ao campo",
        "uma cidade deixa de ter serviços",
        "há redução da malha viária"
      ],
      "correta": 1,
      "explicacao": "Conurbação é a integração física de áreas urbanizadas contíguas.",
      "nivel": "média"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Industrialização",
      "enunciado": "A concentração industrial histórica no Sudeste brasileiro relaciona-se, entre outros fatores:",
      "alternativas": [
        "à inexistência de mercado consumidor",
        "à infraestrutura, capital e mercado consumidor",
        "à ausência de ferrovias",
        "à proibição da energia elétrica",
        "ao clima polar"
      ],
      "correta": 1,
      "explicacao": "Infraestrutura, capital acumulado e mercado consumidor favoreceram a concentração industrial.",
      "nivel": "média"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Agropecuária",
      "enunciado": "A expansão da fronteira agrícola no Cerrado foi favorecida por:",
      "alternativas": [
        "correção de solos e mecanização",
        "ausência de tecnologia",
        "clima polar",
        "proibição de fertilizantes",
        "relevo exclusivamente montanhoso"
      ],
      "correta": 0,
      "explicacao": "Tecnologias de correção da acidez do solo e mecanização ampliaram a produção agrícola.",
      "nivel": "média"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Hidrografia",
      "enunciado": "A Bacia Amazônica destaca-se por apresentar:",
      "alternativas": [
        "pequena extensão e baixo volume",
        "grande extensão e elevada disponibilidade hídrica",
        "rios temporários em toda a área",
        "ausência de afluentes",
        "drenagem exclusivamente endorreica"
      ],
      "correta": 1,
      "explicacao": "É a maior bacia hidrográfica do mundo em volume de água.",
      "nivel": "média"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Energia",
      "enunciado": "A fonte renovável que historicamente possui grande participação na matriz elétrica brasileira é:",
      "alternativas": [
        "carvão mineral",
        "energia hidrelétrica",
        "xisto betuminoso",
        "turfa",
        "urânio exclusivamente"
      ],
      "correta": 1,
      "explicacao": "A geração hidrelétrica tem participação histórica relevante na eletricidade brasileira.",
      "nivel": "média"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Globalização",
      "enunciado": "Uma característica da globalização econômica é:",
      "alternativas": [
        "isolamento completo dos mercados",
        "integração de fluxos de mercadorias, capitais e informações",
        "fim das redes de transporte",
        "eliminação das empresas transnacionais",
        "ausência de comércio internacional"
      ],
      "correta": 1,
      "explicacao": "A globalização intensifica conexões econômicas, financeiras, tecnológicas e culturais.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Geopolítica",
      "enunciado": "O Mercosul é um bloco de integração regional criado inicialmente pelo:",
      "alternativas": [
        "Tratado de Assunção",
        "Tratado de Versalhes",
        "Acordo de Bretton Woods",
        "Tratado de Tordesilhas",
        "Pacto de Varsóvia"
      ],
      "correta": 0,
      "explicacao": "O Tratado de Assunção, de 1991, instituiu o Mercosul.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Regiões brasileiras",
      "enunciado": "O estado de Santa Catarina pertence à região:",
      "alternativas": [
        "Norte",
        "Nordeste",
        "Centro-Oeste",
        "Sudeste",
        "Sul"
      ],
      "correta": 4,
      "explicacao": "Santa Catarina integra a Região Sul, junto com Paraná e Rio Grande do Sul.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Migrações",
      "enunciado": "Êxodo rural é o deslocamento:",
      "alternativas": [
        "da cidade para o exterior",
        "do campo para a cidade",
        "entre países vizinhos",
        "da cidade para o campo",
        "entre capitais"
      ],
      "correta": 1,
      "explicacao": "Êxodo rural é a migração da população do campo para áreas urbanas.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Problemas ambientais",
      "enunciado": "O desmatamento pode contribuir diretamente para:",
      "alternativas": [
        "aumento da biodiversidade local",
        "erosão do solo e perda de habitats",
        "redução da emissão de carbono",
        "estabilização de todas as nascentes",
        "fim das ilhas de calor"
      ],
      "correta": 1,
      "explicacao": "A retirada da cobertura vegetal expõe o solo e reduz habitats naturais.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Climatologia",
      "enunciado": "O fenômeno El Niño está associado ao aquecimento anormal das águas superficiais do:",
      "alternativas": [
        "Atlântico Norte",
        "Pacífico Equatorial",
        "Oceano Índico Sul",
        "Mar Mediterrâneo",
        "Ártico"
      ],
      "correta": 1,
      "explicacao": "El Niño envolve aquecimento anormal das águas do Pacífico Equatorial central e oriental.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia do Brasil",
      "assunto": "Território brasileiro",
      "enunciado": "O Brasil é atravessado pelos paralelos:",
      "alternativas": [
        "Equador e Trópico de Capricórnio",
        "Greenwich e Círculo Polar Ártico",
        "Trópico de Câncer e Círculo Polar Antártico",
        "Equador e Trópico de Câncer",
        "Greenwich e Equador"
      ],
      "correta": 0,
      "explicacao": "A Linha do Equador atravessa o norte do país e o Trópico de Capricórnio atravessa a porção sul.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Verb to be",
      "enunciado": "Choose the correct option: “The soldiers ___ ready.”",
      "alternativas": [
        "am",
        "is",
        "are",
        "be",
        "was"
      ],
      "correta": 2,
      "explicacao": "The subject “soldiers” is plural, so the correct form is “are”.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Simple Present",
      "enunciado": "Choose the correct option: “She ___ English every day.”",
      "alternativas": [
        "study",
        "studies",
        "studying",
        "studied",
        "is study"
      ],
      "correta": 1,
      "explicacao": "With he/she/it, the simple present usually takes -s or -es.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Present Continuous",
      "enunciado": "Complete: “They ___ training now.”",
      "alternativas": [
        "is",
        "am",
        "are",
        "be",
        "was"
      ],
      "correta": 2,
      "explicacao": "Present continuous uses am/is/are + verb-ing; “they are training”.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Simple Past",
      "enunciado": "Complete: “We ___ the museum yesterday.”",
      "alternativas": [
        "visit",
        "visits",
        "visited",
        "visiting",
        "are visit"
      ],
      "correta": 2,
      "explicacao": "“Yesterday” indicates past time; the regular past form is “visited”.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Future",
      "enunciado": "Choose the correct form: “I think it ___ rain tomorrow.”",
      "alternativas": [
        "will",
        "was",
        "has",
        "did",
        "would have"
      ],
      "correta": 0,
      "explicacao": "“Will” is commonly used for predictions about the future.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Pronouns",
      "enunciado": "Complete: “This is Maria. ___ is my sister.”",
      "alternativas": [
        "He",
        "She",
        "It",
        "They",
        "We"
      ],
      "correta": 1,
      "explicacao": "“She” is the subject pronoun used for a female person.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Possessive adjectives",
      "enunciado": "Complete: “The cadet forgot ___ notebook.”",
      "alternativas": [
        "he",
        "him",
        "his",
        "hers",
        "they"
      ],
      "correta": 2,
      "explicacao": "“His” is the possessive adjective referring to a male owner.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Articles",
      "enunciado": "Choose the correct article: “He is ___ honest man.”",
      "alternativas": [
        "a",
        "an",
        "the",
        "no article",
        "some"
      ],
      "correta": 1,
      "explicacao": "“Honest” begins with a vowel sound, so “an” is used.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Prepositions",
      "enunciado": "Complete: “The class starts ___ 8 o’clock.”",
      "alternativas": [
        "in",
        "on",
        "at",
        "by",
        "from"
      ],
      "correta": 2,
      "explicacao": "Use “at” with specific clock times.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Comparatives",
      "enunciado": "Choose the correct form: “This exercise is ___ than the previous one.”",
      "alternativas": [
        "easy",
        "easier",
        "easiest",
        "more easy",
        "most easy"
      ],
      "correta": 1,
      "explicacao": "For a short adjective ending in consonant + y, change y to i and add -er.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Superlatives",
      "enunciado": "Complete: “Mount Everest is the ___ mountain above sea level.”",
      "alternativas": [
        "high",
        "higher",
        "highest",
        "most high",
        "more high"
      ],
      "correta": 2,
      "explicacao": "The superlative form of “high” is “highest”.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Modal verbs",
      "enunciado": "Choose the best option: “You ___ wear a helmet; it is mandatory.”",
      "alternativas": [
        "might",
        "must",
        "could",
        "would",
        "may"
      ],
      "correta": 1,
      "explicacao": "“Must” expresses obligation or necessity.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "There is / There are",
      "enunciado": "Complete: “___ many books on the table.”",
      "alternativas": [
        "There is",
        "There are",
        "It is",
        "They is",
        "There be"
      ],
      "correta": 1,
      "explicacao": "Use “there are” with the plural noun “books”.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Quantifiers",
      "enunciado": "Complete: “There isn’t ___ water left.”",
      "alternativas": [
        "many",
        "a few",
        "much",
        "several",
        "few"
      ],
      "correta": 2,
      "explicacao": "“Much” is used with uncountable nouns such as “water”.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Conditionals",
      "enunciado": "Complete: “If it rains, we ___ at home.”",
      "alternativas": [
        "stay",
        "stayed",
        "will stay",
        "would stayed",
        "staying"
      ],
      "correta": 2,
      "explicacao": "First conditional: if + present simple, will + base verb.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Passive voice",
      "enunciado": "Choose the correct passive form: “The orders ___ by the officer.”",
      "alternativas": [
        "gave",
        "was give",
        "were given",
        "are giving",
        "has gave"
      ],
      "correta": 2,
      "explicacao": "Past simple passive: was/were + past participle; “orders” is plural.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Relative pronouns",
      "enunciado": "Complete: “The man ___ teaches us is from Brazil.”",
      "alternativas": [
        "which",
        "where",
        "who",
        "when",
        "whose"
      ],
      "correta": 2,
      "explicacao": "“Who” refers to a person functioning as the subject of the relative clause.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Reading comprehension",
      "enunciado": "Read: “The library closes at 6 p.m.” What time does it close?",
      "alternativas": [
        "At 4 p.m.",
        "At 5 p.m.",
        "At 6 p.m.",
        "At 7 p.m.",
        "At 8 p.m."
      ],
      "correta": 2,
      "explicacao": "The sentence explicitly states that the library closes at 6 p.m.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Adverbs",
      "enunciado": "Choose the correct word: “She speaks English ___.”",
      "alternativas": [
        "fluent",
        "fluently",
        "fluency",
        "more fluent",
        "fluentest"
      ],
      "correta": 1,
      "explicacao": "An adverb of manner modifies “speaks”; “fluently” is the adverb.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Phrasal verbs",
      "enunciado": "In “Please turn off the lights”, “turn off” means:",
      "alternativas": [
        "increase",
        "switch off",
        "look for",
        "put on",
        "take after"
      ],
      "correta": 1,
      "explicacao": "“Turn off” means to switch a device or light off.",
      "nivel": "difícil"
    }
  ],
  "EsPCEx": [
    {
      "materia": "Matemática",
      "assunto": "Razão e proporção",
      "enunciado": "Uma equipe de 12 militares conclui uma tarefa em 15 horas. Mantido o mesmo ritmo, quanto tempo 18 militares levariam?",
      "alternativas": [
        "8 h",
        "9 h",
        "10 h",
        "12 h",
        "14 h"
      ],
      "correta": 2,
      "explicacao": "Grandezas inversamente proporcionais: 12·15 = 18·t; t = 10 horas.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Porcentagem",
      "enunciado": "Um material de R$ 400 recebe desconto de 15%. Qual é o preço final?",
      "alternativas": [
        "R$ 320",
        "R$ 330",
        "R$ 340",
        "R$ 350",
        "R$ 360"
      ],
      "correta": 2,
      "explicacao": "15% de 400 = 60; 400 − 60 = R$ 340.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Equação do 1º grau",
      "enunciado": "A soma de um número com seu triplo é 52. Qual é esse número?",
      "alternativas": [
        "10",
        "11",
        "12",
        "13",
        "14"
      ],
      "correta": 3,
      "explicacao": "x + 3x = 52; 4x = 52; x = 13.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Equação do 2º grau",
      "enunciado": "As raízes de x² − 9x + 20 = 0 são:",
      "alternativas": [
        "2 e 10",
        "4 e 5",
        "3 e 6",
        "−4 e −5",
        "1 e 20"
      ],
      "correta": 1,
      "explicacao": "Fatorando: (x − 4)(x − 5) = 0.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Função afim",
      "enunciado": "Se f(x) = 2x + 7, então f(6) é:",
      "alternativas": [
        "12",
        "13",
        "17",
        "19",
        "21"
      ],
      "correta": 3,
      "explicacao": "f(6) = 2·6 + 7 = 19.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Sistema linear",
      "enunciado": "A solução do sistema x + y = 11 e x − y = 3 é:",
      "alternativas": [
        "x=6, y=5",
        "x=7, y=4",
        "x=8, y=3",
        "x=5, y=6",
        "x=4, y=7"
      ],
      "correta": 1,
      "explicacao": "Somando as equações: 2x = 14, x = 7; então y = 4.",
      "nivel": "fácil"
    },
    {
      "materia": "Matemática",
      "assunto": "Progressão aritmética",
      "enunciado": "Em uma PA, a₁ = 7 e razão 3. O 12º termo é:",
      "alternativas": [
        "37",
        "40",
        "43",
        "46",
        "49"
      ],
      "correta": 1,
      "explicacao": "a₁₂ = 7 + 11·3 = 40.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Progressão geométrica",
      "enunciado": "Na PG (2, 6, 18, ...), o sexto termo é:",
      "alternativas": [
        "162",
        "243",
        "324",
        "486",
        "729"
      ],
      "correta": 3,
      "explicacao": "a₆ = 2·3⁵ = 486.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Geometria plana",
      "enunciado": "Um retângulo tem lados 8 cm e 5 cm. Seu perímetro é:",
      "alternativas": [
        "13 cm",
        "26 cm",
        "32 cm",
        "40 cm",
        "45 cm"
      ],
      "correta": 1,
      "explicacao": "P = 2(8 + 5) = 26 cm.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Teorema de Pitágoras",
      "enunciado": "Os catetos de um triângulo retângulo medem 9 cm e 12 cm. A hipotenusa mede:",
      "alternativas": [
        "13 cm",
        "14 cm",
        "15 cm",
        "16 cm",
        "18 cm"
      ],
      "correta": 2,
      "explicacao": "h² = 9² + 12² = 225; h = 15 cm.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Áreas",
      "enunciado": "A área de um círculo de raio 4 cm é:",
      "alternativas": [
        "4π cm²",
        "8π cm²",
        "12π cm²",
        "16π cm²",
        "32π cm²"
      ],
      "correta": 3,
      "explicacao": "A = πr² = 16π cm².",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Trigonometria",
      "enunciado": "Em um triângulo retângulo, para um ângulo agudo, seno é a razão entre:",
      "alternativas": [
        "cateto adjacente e hipotenusa",
        "cateto oposto e hipotenusa",
        "catetos",
        "hipotenusa e cateto oposto",
        "cateto oposto e adjacente"
      ],
      "correta": 1,
      "explicacao": "sen θ = cateto oposto/hipotenusa.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Análise combinatória",
      "enunciado": "Quantos anagramas distintos podem ser formados com as letras de SOL?",
      "alternativas": [
        "3",
        "4",
        "5",
        "6",
        "9"
      ],
      "correta": 3,
      "explicacao": "As três letras são distintas: 3! = 6.",
      "nivel": "média"
    },
    {
      "materia": "Matemática",
      "assunto": "Probabilidade",
      "enunciado": "Em uma urna há 3 bolas verdes e 7 amarelas. A probabilidade de retirar uma verde é:",
      "alternativas": [
        "10%",
        "20%",
        "30%",
        "40%",
        "70%"
      ],
      "correta": 2,
      "explicacao": "Há 3 casos favoráveis em 10 possíveis: 3/10 = 30%.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Estatística",
      "enunciado": "As notas 5, 7, 8 e 10 têm média aritmética igual a:",
      "alternativas": [
        "6",
        "7",
        "7,5",
        "8",
        "8,5"
      ],
      "correta": 2,
      "explicacao": "(5 + 7 + 8 + 10)/4 = 30/4 = 7,5.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Conjuntos",
      "enunciado": "Se A={1,2,3,4} e B={3,4,5}, então A∩B é:",
      "alternativas": [
        "{1,2}",
        "{3,4}",
        "{1,2,3,4,5}",
        "{5}",
        "vazio"
      ],
      "correta": 1,
      "explicacao": "A interseção reúne os elementos comuns aos dois conjuntos: 3 e 4.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Potenciação",
      "enunciado": "O valor de 2⁵ · 2³ é:",
      "alternativas": [
        "64",
        "128",
        "256",
        "512",
        "1 024"
      ],
      "correta": 2,
      "explicacao": "Na multiplicação de potências de mesma base, somam-se os expoentes: 2⁸ = 256.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Radiciação",
      "enunciado": "A simplificação de √72 é:",
      "alternativas": [
        "2√6",
        "3√8",
        "6√2",
        "8√2",
        "12√2"
      ],
      "correta": 2,
      "explicacao": "√72 = √(36·2) = 6√2.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Matemática financeira",
      "enunciado": "Um capital de R$ 500 é aplicado a juros simples de 2% ao mês por 3 meses. O juro é:",
      "alternativas": [
        "R$ 20",
        "R$ 25",
        "R$ 30",
        "R$ 35",
        "R$ 40"
      ],
      "correta": 2,
      "explicacao": "J = C·i·t = 500·0,02·3 = R$ 30.",
      "nivel": "difícil"
    },
    {
      "materia": "Matemática",
      "assunto": "Polinômios",
      "enunciado": "O valor de (x + 2)(x − 2) é:",
      "alternativas": [
        "x² + 4",
        "x² − 4",
        "x² − 2x + 4",
        "x² + 2x − 4",
        "x² − 4x"
      ],
      "correta": 1,
      "explicacao": "Produto da soma pela diferença: x² − 2² = x² − 4.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Interpretação de texto",
      "enunciado": "Em um texto argumentativo, a tese corresponde:",
      "alternativas": [
        "ao exemplo final",
        "à ideia central defendida",
        "à lista de referências",
        "à descrição do cenário",
        "à fala de uma personagem"
      ],
      "correta": 1,
      "explicacao": "A tese é o posicionamento central que o autor procura defender.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Classes de palavras",
      "enunciado": "Na frase “O candidato respondeu rapidamente”, a palavra “rapidamente” é:",
      "alternativas": [
        "substantivo",
        "adjetivo",
        "advérbio",
        "pronome",
        "preposição"
      ],
      "correta": 2,
      "explicacao": "O termo modifica o verbo “respondeu” e indica modo.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Concordância verbal",
      "enunciado": "Assinale a frase correta:",
      "alternativas": [
        "Houveram dúvidas na prova.",
        "Fazem três meses que estudo.",
        "Existem bons motivos para revisar.",
        "Deve haverem candidatos.",
        "Aconteceu muitas mudanças."
      ],
      "correta": 2,
      "explicacao": "O verbo existir concorda com o sujeito plural: “bons motivos”.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Concordância nominal",
      "enunciado": "Assinale a alternativa correta:",
      "alternativas": [
        "É proibido a entrada.",
        "Seguem anexo os documentos.",
        "As alunas estavam bastante preparadas.",
        "Meio-dia e meia.",
        "Muito obrigada, disse o rapaz."
      ],
      "correta": 2,
      "explicacao": "“Bastante”, como advérbio de intensidade, permanece invariável.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Regência verbal",
      "enunciado": "Assinale a construção de acordo com a norma-padrão:",
      "alternativas": [
        "Assisti o filme ontem.",
        "Obedeço o regulamento.",
        "Prefiro estudar a improvisar.",
        "Cheguei no quartel cedo.",
        "Aspiro ao ar puro (no sentido de desejar)."
      ],
      "correta": 2,
      "explicacao": "Preferir rege a estrutura “preferir uma coisa a outra”, sem “mais/ do que”.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Crase",
      "enunciado": "O emprego da crase está correto em:",
      "alternativas": [
        "Saiu à cavalo.",
        "Entregou o formulário à candidata.",
        "Começou à estudar.",
        "Referiu-se à pessoas ausentes.",
        "Ficou cara à cara."
      ],
      "correta": 1,
      "explicacao": "O verbo entregar pede preposição “a” e “candidata” admite artigo feminino.",
      "nivel": "fácil"
    },
    {
      "materia": "Português",
      "assunto": "Pontuação",
      "enunciado": "A vírgula está corretamente empregada em:",
      "alternativas": [
        "Os alunos, chegaram cedo.",
        "Durante a prova, todos permaneceram em silêncio.",
        "O instrutor explicou, o exercício.",
        "A equipe treinou, e venceu.",
        "O candidato que estudou, foi aprovado."
      ],
      "correta": 1,
      "explicacao": "A vírgula separa adjunto adverbial deslocado no início da oração.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Colocação pronominal",
      "enunciado": "Assinale a frase correta:",
      "alternativas": [
        "Nunca disseram-me isso.",
        "Não me disseram isso.",
        "Me avisaram ontem.",
        "Jamais contaram-me a verdade.",
        "Quem contou-me?"
      ],
      "correta": 1,
      "explicacao": "A palavra negativa “não” atrai o pronome: próclise.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Pronomes",
      "enunciado": "Em “Entreguei-lhe o documento”, o pronome “lhe” exerce função de:",
      "alternativas": [
        "sujeito",
        "objeto direto",
        "objeto indireto",
        "predicativo",
        "adjunto adnominal"
      ],
      "correta": 2,
      "explicacao": "“Lhe” funciona como complemento indireto do verbo entregar.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Vozes verbais",
      "enunciado": "A forma passiva de “A comissão analisou os recursos” é:",
      "alternativas": [
        "Os recursos analisaram a comissão.",
        "A comissão foi analisada pelos recursos.",
        "Os recursos foram analisados pela comissão.",
        "Analisaram-se a comissão.",
        "Os recursos são analisar."
      ],
      "correta": 2,
      "explicacao": "O objeto direto passa a sujeito paciente: “foram analisados”.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Período composto",
      "enunciado": "Em “Estudou bastante, portanto foi aprovado”, a conjunção expressa:",
      "alternativas": [
        "oposição",
        "conclusão",
        "explicação",
        "alternância",
        "condição"
      ],
      "correta": 1,
      "explicacao": "“Portanto” é conjunção coordenativa conclusiva.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Figuras de linguagem",
      "enunciado": "Em “A cidade acordou apressada”, ocorre:",
      "alternativas": [
        "hipérbole",
        "prosopopeia",
        "eufemismo",
        "antítese",
        "onomatopeia"
      ],
      "correta": 1,
      "explicacao": "Atribui-se ação humana (“acordou”) à cidade: personificação.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Ortografia",
      "enunciado": "Assinale a palavra escrita corretamente:",
      "alternativas": [
        "excessão",
        "previlégio",
        "empecilho",
        "beneficiente",
        "paralização"
      ],
      "correta": 2,
      "explicacao": "A grafia correta é “empecilho”.",
      "nivel": "média"
    },
    {
      "materia": "Português",
      "assunto": "Acentuação",
      "enunciado": "A palavra “herói” é acentuada porque é:",
      "alternativas": [
        "paroxítona terminada em a",
        "oxítona com ditongo aberto tônico",
        "proparoxítona",
        "monossílabo átono",
        "paroxítona terminada em l"
      ],
      "correta": 1,
      "explicacao": "“Herói” é oxítona com ditongo aberto “ói”.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Formação de palavras",
      "enunciado": "A palavra “infelizmente” é formada por:",
      "alternativas": [
        "composição por justaposição",
        "derivação prefixal e sufixal",
        "derivação regressiva",
        "abreviação",
        "hibridismo"
      ],
      "correta": 1,
      "explicacao": "Há prefixo “in-” e sufixo “-mente” agregados a “feliz”.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Semântica",
      "enunciado": "A palavra “iminente” significa:",
      "alternativas": [
        "ilustre",
        "que está prestes a acontecer",
        "que não tem importância",
        "muito distante",
        "que foi eliminado"
      ],
      "correta": 1,
      "explicacao": "Iminente indica algo próximo de ocorrer; não confundir com “eminente”.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Tipos textuais",
      "enunciado": "Um texto que apresenta etapas para executar uma tarefa é predominantemente:",
      "alternativas": [
        "narrativo",
        "descritivo",
        "injuntivo",
        "lírico",
        "dialogal"
      ],
      "correta": 2,
      "explicacao": "O tipo injuntivo instrui, orienta ou ordena ações.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Coesão textual",
      "enunciado": "A expressão “Além disso” estabelece relação de:",
      "alternativas": [
        "oposição",
        "adição",
        "conclusão",
        "causa",
        "concessão"
      ],
      "correta": 1,
      "explicacao": "“Além disso” acrescenta uma informação ao que foi dito.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Sujeito e predicado",
      "enunciado": "Em “Chegaram os reforços”, o sujeito é:",
      "alternativas": [
        "oculto",
        "indeterminado",
        "os reforços",
        "inexistente",
        "chegaram"
      ],
      "correta": 2,
      "explicacao": "O sujeito simples é “os reforços”, posposto ao verbo.",
      "nivel": "difícil"
    },
    {
      "materia": "Português",
      "assunto": "Orações subordinadas",
      "enunciado": "Em “Espero que você consiga”, a oração “que você consiga” é:",
      "alternativas": [
        "subordinada substantiva objetiva direta",
        "subordinada adverbial causal",
        "coordenada explicativa",
        "subordinada adjetiva restritiva",
        "subordinada temporal"
      ],
      "correta": 0,
      "explicacao": "Completa o sentido do verbo “espero” sem preposição: objeto direto.",
      "nivel": "difícil"
    },
    {
      "materia": "Física",
      "assunto": "Cinemática",
      "enunciado": "Um móvel percorre 150 km em 3 horas, com velocidade escalar média de:",
      "alternativas": [
        "30 km/h",
        "40 km/h",
        "50 km/h",
        "60 km/h",
        "75 km/h"
      ],
      "correta": 2,
      "explicacao": "v = Δs/Δt = 150/3 = 50 km/h.",
      "nivel": "fácil"
    },
    {
      "materia": "Física",
      "assunto": "Movimento uniforme",
      "enunciado": "Um carro a 20 m/s mantém essa velocidade por 15 s. A distância percorrida é:",
      "alternativas": [
        "150 m",
        "200 m",
        "250 m",
        "300 m",
        "350 m"
      ],
      "correta": 3,
      "explicacao": "Δs = v·t = 20·15 = 300 m.",
      "nivel": "fácil"
    },
    {
      "materia": "Física",
      "assunto": "Aceleração",
      "enunciado": "A velocidade aumenta de 5 m/s para 25 m/s em 4 s. A aceleração média é:",
      "alternativas": [
        "2 m/s²",
        "4 m/s²",
        "5 m/s²",
        "6 m/s²",
        "8 m/s²"
      ],
      "correta": 2,
      "explicacao": "a = (25 − 5)/4 = 5 m/s².",
      "nivel": "fácil"
    },
    {
      "materia": "Física",
      "assunto": "Leis de Newton",
      "enunciado": "A força resultante sobre um corpo de 4 kg que adquire aceleração de 3 m/s² é:",
      "alternativas": [
        "7 N",
        "12 N",
        "16 N",
        "24 N",
        "32 N"
      ],
      "correta": 1,
      "explicacao": "Pela segunda lei de Newton, F = m·a = 4·3 = 12 N.",
      "nivel": "fácil"
    },
    {
      "materia": "Física",
      "assunto": "Peso",
      "enunciado": "Adote g = 10 m/s². O peso de um corpo de massa 8 kg é:",
      "alternativas": [
        "8 N",
        "18 N",
        "40 N",
        "80 N",
        "800 N"
      ],
      "correta": 3,
      "explicacao": "P = m·g = 8·10 = 80 N.",
      "nivel": "fácil"
    },
    {
      "materia": "Física",
      "assunto": "Atrito",
      "enunciado": "A força de atrito cinético, em condições usuais, atua:",
      "alternativas": [
        "no mesmo sentido do deslizamento",
        "em sentido contrário ao movimento relativo",
        "sempre verticalmente",
        "sempre como força centrípeta",
        "apenas no vácuo"
      ],
      "correta": 1,
      "explicacao": "O atrito cinético se opõe ao movimento relativo entre as superfícies.",
      "nivel": "fácil"
    },
    {
      "materia": "Física",
      "assunto": "Trabalho",
      "enunciado": "Uma força constante de 10 N desloca um objeto 5 m na mesma direção. O trabalho é:",
      "alternativas": [
        "2 J",
        "15 J",
        "25 J",
        "50 J",
        "100 J"
      ],
      "correta": 3,
      "explicacao": "W = F·d·cos 0° = 10·5 = 50 J.",
      "nivel": "média"
    },
    {
      "materia": "Física",
      "assunto": "Energia cinética",
      "enunciado": "A energia cinética de um corpo de 2 kg que se move a 6 m/s é:",
      "alternativas": [
        "12 J",
        "18 J",
        "36 J",
        "48 J",
        "72 J"
      ],
      "correta": 2,
      "explicacao": "Ec = mv²/2 = 2·36/2 = 36 J.",
      "nivel": "média"
    },
    {
      "materia": "Física",
      "assunto": "Energia potencial",
      "enunciado": "Um objeto de 3 kg está a 4 m de altura. Com g = 10 m/s², sua energia potencial gravitacional é:",
      "alternativas": [
        "30 J",
        "60 J",
        "90 J",
        "120 J",
        "150 J"
      ],
      "correta": 3,
      "explicacao": "Ep = mgh = 3·10·4 = 120 J.",
      "nivel": "média"
    },
    {
      "materia": "Física",
      "assunto": "Quantidade de movimento",
      "enunciado": "Um corpo de 5 kg move-se a 4 m/s. Seu momento linear é:",
      "alternativas": [
        "9 kg·m/s",
        "15 kg·m/s",
        "20 kg·m/s",
        "25 kg·m/s",
        "40 kg·m/s"
      ],
      "correta": 2,
      "explicacao": "p = m·v = 5·4 = 20 kg·m/s.",
      "nivel": "média"
    },
    {
      "materia": "Física",
      "assunto": "Hidrostática",
      "enunciado": "A pressão hidrostática a 2 m de profundidade na água (ρ=1000 kg/m³, g=10 m/s²) é:",
      "alternativas": [
        "2 000 Pa",
        "5 000 Pa",
        "10 000 Pa",
        "20 000 Pa",
        "40 000 Pa"
      ],
      "correta": 3,
      "explicacao": "p = ρgh = 1000·10·2 = 20 000 Pa.",
      "nivel": "média"
    },
    {
      "materia": "Física",
      "assunto": "Empuxo",
      "enunciado": "O empuxo sobre um corpo imerso em fluido equivale ao peso:",
      "alternativas": [
        "do corpo",
        "do fluido deslocado",
        "do recipiente",
        "da coluna de ar",
        "da parte emersa"
      ],
      "correta": 1,
      "explicacao": "Princípio de Arquimedes: empuxo igual ao peso do fluido deslocado.",
      "nivel": "média"
    },
    {
      "materia": "Física",
      "assunto": "Calorimetria",
      "enunciado": "Para aquecer 100 g de água em 20 °C, usando c=1 cal/(g·°C), o calor necessário é:",
      "alternativas": [
        "500 cal",
        "1 000 cal",
        "2 000 cal",
        "4 000 cal",
        "5 000 cal"
      ],
      "correta": 2,
      "explicacao": "Q = m·c·ΔT = 100·1·20 = 2 000 cal.",
      "nivel": "média"
    },
    {
      "materia": "Física",
      "assunto": "Termodinâmica",
      "enunciado": "Em uma transformação isotérmica de um gás ideal, permanece constante:",
      "alternativas": [
        "a pressão",
        "o volume",
        "a temperatura",
        "a quantidade de calor",
        "a energia cinética total sempre nula"
      ],
      "correta": 2,
      "explicacao": "Isotérmica significa temperatura constante.",
      "nivel": "difícil"
    },
    {
      "materia": "Física",
      "assunto": "Ondulatória",
      "enunciado": "A frequência de uma onda é 5 Hz. Seu período é:",
      "alternativas": [
        "0,1 s",
        "0,2 s",
        "0,5 s",
        "2 s",
        "5 s"
      ],
      "correta": 1,
      "explicacao": "T = 1/f = 1/5 = 0,2 s.",
      "nivel": "difícil"
    },
    {
      "materia": "Física",
      "assunto": "Som",
      "enunciado": "A altura (grave ou agudo) de um som está relacionada principalmente à:",
      "alternativas": [
        "amplitude",
        "frequência",
        "velocidade da luz",
        "intensidade luminosa",
        "massa do instrumento"
      ],
      "correta": 1,
      "explicacao": "A frequência determina a percepção de sons graves ou agudos.",
      "nivel": "difícil"
    },
    {
      "materia": "Física",
      "assunto": "Óptica",
      "enunciado": "Em um espelho plano, a imagem formada é:",
      "alternativas": [
        "real e invertida",
        "virtual e do mesmo tamanho",
        "real e ampliada",
        "virtual e sempre menor",
        "real e sempre maior"
      ],
      "correta": 1,
      "explicacao": "Espelhos planos formam imagem virtual, direita e de mesmo tamanho.",
      "nivel": "difícil"
    },
    {
      "materia": "Física",
      "assunto": "Eletricidade",
      "enunciado": "Uma resistência de 6 Ω é submetida a 12 V. A corrente é:",
      "alternativas": [
        "0,5 A",
        "1 A",
        "2 A",
        "3 A",
        "6 A"
      ],
      "correta": 2,
      "explicacao": "Lei de Ohm: I = U/R = 12/6 = 2 A.",
      "nivel": "difícil"
    },
    {
      "materia": "Física",
      "assunto": "Potência elétrica",
      "enunciado": "Um aparelho ligado a 120 V consome corrente de 2 A. Sua potência é:",
      "alternativas": [
        "60 W",
        "120 W",
        "180 W",
        "240 W",
        "360 W"
      ],
      "correta": 3,
      "explicacao": "P = U·I = 120·2 = 240 W.",
      "nivel": "difícil"
    },
    {
      "materia": "Física",
      "assunto": "Magnetismo",
      "enunciado": "Polos magnéticos iguais:",
      "alternativas": [
        "se atraem",
        "se repelem",
        "não interagem",
        "perdem o magnetismo",
        "se transformam em cargas"
      ],
      "correta": 1,
      "explicacao": "Polos de mesmo nome se repelem; polos opostos se atraem.",
      "nivel": "difícil"
    },
    {
      "materia": "Química",
      "assunto": "Estrutura atômica",
      "enunciado": "O número atômico de um elemento corresponde ao número de:",
      "alternativas": [
        "nêutrons",
        "prótons",
        "prótons mais nêutrons",
        "elétrons mais nêutrons",
        "camadas eletrônicas"
      ],
      "correta": 1,
      "explicacao": "O número atômico Z é a quantidade de prótons no núcleo.",
      "nivel": "fácil"
    },
    {
      "materia": "Química",
      "assunto": "Tabela periódica",
      "enunciado": "Elementos de uma mesma família da tabela periódica tendem a apresentar:",
      "alternativas": [
        "mesmo número de camadas",
        "propriedades químicas semelhantes",
        "mesma massa atômica",
        "mesmo número de nêutrons",
        "mesmo período"
      ],
      "correta": 1,
      "explicacao": "Elementos de uma família possuem configuração semelhante na camada de valência.",
      "nivel": "fácil"
    },
    {
      "materia": "Química",
      "assunto": "Ligações químicas",
      "enunciado": "A ligação predominante entre sódio e cloro no NaCl é:",
      "alternativas": [
        "metálica",
        "covalente apolar",
        "iônica",
        "ponte de hidrogênio",
        "nuclear"
      ],
      "correta": 2,
      "explicacao": "O sódio transfere elétron ao cloro, formando íons de cargas opostas.",
      "nivel": "fácil"
    },
    {
      "materia": "Química",
      "assunto": "Funções inorgânicas",
      "enunciado": "A substância HCl, em solução aquosa, é classificada como:",
      "alternativas": [
        "base",
        "ácido",
        "sal",
        "óxido básico",
        "hidreto metálico"
      ],
      "correta": 1,
      "explicacao": "HCl libera H⁺ em água, sendo um ácido.",
      "nivel": "fácil"
    },
    {
      "materia": "Química",
      "assunto": "pH",
      "enunciado": "Uma solução com pH = 3 é:",
      "alternativas": [
        "básica",
        "neutra",
        "ácida",
        "sempre saturada",
        "metálica"
      ],
      "correta": 2,
      "explicacao": "Valores de pH inferiores a 7 indicam meio ácido a 25 °C.",
      "nivel": "fácil"
    },
    {
      "materia": "Química",
      "assunto": "Reações químicas",
      "enunciado": "Na reação 2H₂ + O₂ → 2H₂O, o coeficiente estequiométrico do oxigênio é:",
      "alternativas": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "correta": 0,
      "explicacao": "A equação balanceada apresenta coeficiente 1 para O₂.",
      "nivel": "fácil"
    },
    {
      "materia": "Química",
      "assunto": "Mol",
      "enunciado": "A quantidade de matéria em 18 g de água (M=18 g/mol) é:",
      "alternativas": [
        "0,5 mol",
        "1 mol",
        "2 mol",
        "18 mol",
        "36 mol"
      ],
      "correta": 1,
      "explicacao": "n = m/M = 18/18 = 1 mol.",
      "nivel": "média"
    },
    {
      "materia": "Química",
      "assunto": "Gases",
      "enunciado": "Mantida a temperatura, se o volume de um gás ideal diminui à metade, sua pressão:",
      "alternativas": [
        "diminui à metade",
        "dobra",
        "permanece constante",
        "quadruplica",
        "torna-se nula"
      ],
      "correta": 1,
      "explicacao": "Lei de Boyle: P·V constante; reduzindo V à metade, P dobra.",
      "nivel": "média"
    },
    {
      "materia": "Química",
      "assunto": "Soluções",
      "enunciado": "Uma solução contém 20 g de soluto em 2 L. Sua concentração comum é:",
      "alternativas": [
        "5 g/L",
        "10 g/L",
        "20 g/L",
        "40 g/L",
        "80 g/L"
      ],
      "correta": 1,
      "explicacao": "C = m/V = 20/2 = 10 g/L.",
      "nivel": "média"
    },
    {
      "materia": "Química",
      "assunto": "Separação de misturas",
      "enunciado": "Para separar areia de água, o método simples mais adequado é:",
      "alternativas": [
        "destilação fracionada",
        "filtração",
        "cromatografia",
        "liquefação",
        "fusão"
      ],
      "correta": 1,
      "explicacao": "A areia é insolúvel e fica retida no filtro.",
      "nivel": "média"
    },
    {
      "materia": "Química",
      "assunto": "Estequiometria",
      "enunciado": "Na reação 2H₂ + O₂ → 2H₂O, 2 mol de H₂ reagem completamente com:",
      "alternativas": [
        "0,5 mol de O₂",
        "1 mol de O₂",
        "2 mol de O₂",
        "3 mol de O₂",
        "4 mol de O₂"
      ],
      "correta": 1,
      "explicacao": "A proporção estequiométrica H₂:O₂ é 2:1.",
      "nivel": "média"
    },
    {
      "materia": "Química",
      "assunto": "Termoquímica",
      "enunciado": "Uma reação exotérmica apresenta variação de entalpia:",
      "alternativas": [
        "positiva",
        "negativa",
        "sempre nula",
        "igual à temperatura",
        "infinita"
      ],
      "correta": 1,
      "explicacao": "Reações exotérmicas liberam calor e têm ΔH negativo.",
      "nivel": "média"
    },
    {
      "materia": "Química",
      "assunto": "Cinética química",
      "enunciado": "Aumentar a temperatura geralmente aumenta a velocidade de reação porque:",
      "alternativas": [
        "diminui todas as colisões",
        "aumenta a energia cinética e colisões eficazes",
        "elimina a energia de ativação",
        "reduz a concentração a zero",
        "impede colisões"
      ],
      "correta": 1,
      "explicacao": "Mais partículas atingem energia suficiente para superar a energia de ativação.",
      "nivel": "média"
    },
    {
      "materia": "Química",
      "assunto": "Equilíbrio químico",
      "enunciado": "Em um sistema em equilíbrio químico dinâmico:",
      "alternativas": [
        "a reação para completamente",
        "as velocidades direta e inversa são iguais",
        "as concentrações são necessariamente iguais",
        "não há moléculas reagindo",
        "a temperatura é sempre zero"
      ],
      "correta": 1,
      "explicacao": "No equilíbrio, as velocidades das reações direta e inversa se igualam.",
      "nivel": "difícil"
    },
    {
      "materia": "Química",
      "assunto": "Oxirredução",
      "enunciado": "Oxidação é o processo em que uma espécie química:",
      "alternativas": [
        "ganha elétrons",
        "perde elétrons",
        "ganha nêutrons",
        "perde prótons",
        "não altera elétrons"
      ],
      "correta": 1,
      "explicacao": "Oxidação corresponde à perda de elétrons e aumento do número de oxidação.",
      "nivel": "difícil"
    },
    {
      "materia": "Química",
      "assunto": "Química orgânica",
      "enunciado": "O grupo funcional característico dos álcoois é:",
      "alternativas": [
        "–COOH",
        "–OH ligado a carbono saturado",
        "–CHO",
        "–CO–",
        "–NH₂"
      ],
      "correta": 1,
      "explicacao": "Álcoois apresentam grupo hidroxila ligado a carbono saturado.",
      "nivel": "difícil"
    },
    {
      "materia": "Química",
      "assunto": "Hidrocarbonetos",
      "enunciado": "O metano (CH₄) pertence à classe dos:",
      "alternativas": [
        "alcenos",
        "alcinos",
        "alcanos",
        "aromáticos",
        "álcoois"
      ],
      "correta": 2,
      "explicacao": "O metano é um hidrocarboneto saturado, da classe dos alcanos.",
      "nivel": "difícil"
    },
    {
      "materia": "Química",
      "assunto": "Isomeria",
      "enunciado": "Isômeros são substâncias que apresentam:",
      "alternativas": [
        "fórmulas moleculares diferentes e estrutura igual",
        "mesma fórmula molecular e estruturas diferentes",
        "mesma massa e mesmo nome",
        "sempre as mesmas propriedades",
        "apenas elementos diferentes"
      ],
      "correta": 1,
      "explicacao": "Isômeros têm a mesma fórmula molecular, mas diferentes arranjos estruturais.",
      "nivel": "difícil"
    },
    {
      "materia": "Química",
      "assunto": "Polímeros",
      "enunciado": "O polietileno é produzido pela polimerização do:",
      "alternativas": [
        "eteno",
        "metano",
        "etanol",
        "ácido etanoico",
        "benzeno"
      ],
      "correta": 0,
      "explicacao": "A adição de unidades de eteno forma a cadeia do polietileno.",
      "nivel": "difícil"
    },
    {
      "materia": "Química",
      "assunto": "Química ambiental",
      "enunciado": "A emissão excessiva de dióxido de carbono contribui para:",
      "alternativas": [
        "redução do efeito estufa",
        "intensificação do efeito estufa",
        "fim da chuva",
        "eliminação do ozônio estratosférico",
        "resfriamento absoluto"
      ],
      "correta": 1,
      "explicacao": "O CO₂ é gás de efeito estufa e seu aumento intensifica o aquecimento global.",
      "nivel": "difícil"
    },
    {
      "materia": "História",
      "assunto": "Brasil Colonial",
      "enunciado": "O sistema de capitanias hereditárias foi implantado pela Coroa portuguesa principalmente para:",
      "alternativas": [
        "abolir a escravidão",
        "promover a ocupação e defesa do território",
        "declarar a independência",
        "criar universidades",
        "transferir a capital para Salvador"
      ],
      "correta": 1,
      "explicacao": "A Coroa delegou a particulares a colonização, defesa e exploração de parcelas do território.",
      "nivel": "fácil"
    },
    {
      "materia": "História",
      "assunto": "Economia colonial",
      "enunciado": "A principal atividade econômica do Nordeste açucareiro nos séculos XVI e XVII baseava-se:",
      "alternativas": [
        "na mineração de ouro",
        "na produção de açúcar em engenhos",
        "na cafeicultura",
        "na borracha",
        "na indústria automobilística"
      ],
      "correta": 1,
      "explicacao": "A produção açucareira, baseada no latifúndio e no trabalho escravizado, marcou a economia colonial.",
      "nivel": "fácil"
    },
    {
      "materia": "História",
      "assunto": "Invasões holandesas",
      "enunciado": "A ocupação holandesa de Pernambuco no século XVII esteve ligada ao interesse no comércio de:",
      "alternativas": [
        "café",
        "açúcar",
        "borracha",
        "ouro amazônico",
        "charque"
      ],
      "correta": 1,
      "explicacao": "Os holandeses buscavam controlar a produção e o comércio do açúcar.",
      "nivel": "fácil"
    },
    {
      "materia": "História",
      "assunto": "Bandeirismo",
      "enunciado": "As bandeiras paulistas contribuíram para:",
      "alternativas": [
        "reduzir o território português",
        "expandir a ocupação para o interior",
        "proclamar a República",
        "abolir o tráfico negreiro",
        "fundar Brasília"
      ],
      "correta": 1,
      "explicacao": "As expedições penetraram o interior em busca de indígenas, metais e pedras preciosas.",
      "nivel": "fácil"
    },
    {
      "materia": "História",
      "assunto": "Inconfidência Mineira",
      "enunciado": "A Inconfidência Mineira de 1789 foi influenciada por ideias:",
      "alternativas": [
        "absolutistas",
        "iluministas",
        "fascistas",
        "corporativistas",
        "medievais"
      ],
      "correta": 1,
      "explicacao": "Ideias iluministas e exemplos de independência atlântica influenciaram os conspiradores.",
      "nivel": "fácil"
    },
    {
      "materia": "História",
      "assunto": "Independência",
      "enunciado": "A Independência do Brasil foi proclamada em:",
      "alternativas": [
        "7 de setembro de 1822",
        "15 de novembro de 1889",
        "21 de abril de 1792",
        "13 de maio de 1888",
        "9 de janeiro de 1822"
      ],
      "correta": 0,
      "explicacao": "O 7 de setembro de 1822 é a data tradicional da proclamação da Independência.",
      "nivel": "fácil"
    },
    {
      "materia": "História",
      "assunto": "Primeiro Reinado",
      "enunciado": "A Constituição de 1824 estabeleceu, além dos três poderes tradicionais, o Poder:",
      "alternativas": [
        "Moderador",
        "Popular",
        "Sindical",
        "Militar",
        "Provincial"
      ],
      "correta": 0,
      "explicacao": "A Carta de 1824 instituiu o Poder Moderador, exercido pelo imperador.",
      "nivel": "média"
    },
    {
      "materia": "História",
      "assunto": "Período Regencial",
      "enunciado": "A Cabanagem ocorreu principalmente na província do:",
      "alternativas": [
        "Pará",
        "Rio Grande do Sul",
        "Maranhão",
        "Pernambuco",
        "Rio de Janeiro"
      ],
      "correta": 0,
      "explicacao": "A Cabanagem (1835–1840) foi uma revolta popular ocorrida no Grão-Pará.",
      "nivel": "média"
    },
    {
      "materia": "História",
      "assunto": "Segundo Reinado",
      "enunciado": "A Lei Eusébio de Queirós, de 1850, determinou:",
      "alternativas": [
        "o fim imediato da escravidão",
        "a proibição do tráfico transatlântico de escravizados",
        "a proclamação da República",
        "a criação do voto feminino",
        "a abolição da monarquia"
      ],
      "correta": 1,
      "explicacao": "A lei reprimiu o tráfico transatlântico de africanos escravizados.",
      "nivel": "média"
    },
    {
      "materia": "História",
      "assunto": "Abolicionismo",
      "enunciado": "A Lei Áurea, assinada em 1888, foi responsável por:",
      "alternativas": [
        "instituir o voto secreto",
        "abolir juridicamente a escravidão no Brasil",
        "criar a República",
        "proibir a imigração",
        "criar a CLT"
      ],
      "correta": 1,
      "explicacao": "A Lei Áurea declarou extinta a escravidão, sem estabelecer políticas amplas de integração.",
      "nivel": "média"
    },
    {
      "materia": "História",
      "assunto": "República Velha",
      "enunciado": "A política dos governadores caracterizou-se por:",
      "alternativas": [
        "centralização democrática plena",
        "alianças entre governo federal e oligarquias estaduais",
        "fim do poder dos coronéis",
        "voto universal secreto",
        "industrialização socialista"
      ],
      "correta": 1,
      "explicacao": "O arranjo sustentava a estabilidade política por meio de acordos com oligarquias estaduais.",
      "nivel": "média"
    },
    {
      "materia": "História",
      "assunto": "Revoltas da República",
      "enunciado": "A Guerra de Canudos ocorreu no atual estado da:",
      "alternativas": [
        "Bahia",
        "Paraíba",
        "Amazonas",
        "São Paulo",
        "Santa Catarina"
      ],
      "correta": 0,
      "explicacao": "Canudos foi um arraial no sertão baiano, destruído pelo Exército em 1897.",
      "nivel": "média"
    },
    {
      "materia": "História",
      "assunto": "Era Vargas",
      "enunciado": "A Revolução de 1930 levou ao poder:",
      "alternativas": [
        "Juscelino Kubitschek",
        "Getúlio Vargas",
        "Jânio Quadros",
        "Deodoro da Fonseca",
        "Floriano Peixoto"
      ],
      "correta": 1,
      "explicacao": "O movimento de 1930 encerrou a Primeira República e levou Vargas ao governo.",
      "nivel": "média"
    },
    {
      "materia": "História",
      "assunto": "Estado Novo",
      "enunciado": "O Estado Novo (1937–1945) foi marcado por:",
      "alternativas": [
        "ampla autonomia partidária",
        "autoritarismo e centralização do poder",
        "parlamentarismo estável",
        "fim da censura",
        "eleições presidenciais anuais"
      ],
      "correta": 1,
      "explicacao": "Vargas fechou o Congresso, reprimiu opositores e estabeleceu censura.",
      "nivel": "difícil"
    },
    {
      "materia": "História",
      "assunto": "Segunda Guerra",
      "enunciado": "A Força Expedicionária Brasileira combateu na Segunda Guerra Mundial principalmente:",
      "alternativas": [
        "na Itália",
        "no Japão",
        "na Noruega",
        "na Rússia",
        "no Egito"
      ],
      "correta": 0,
      "explicacao": "A FEB integrou a campanha aliada na Itália.",
      "nivel": "difícil"
    },
    {
      "materia": "História",
      "assunto": "Ditadura Militar",
      "enunciado": "O golpe de 1964 resultou na instalação de um regime:",
      "alternativas": [
        "monárquico",
        "militar autoritário",
        "parlamentarista",
        "anarquista",
        "colonial"
      ],
      "correta": 1,
      "explicacao": "As Forças Armadas assumiram o poder e instauraram um regime autoritário.",
      "nivel": "difícil"
    },
    {
      "materia": "História",
      "assunto": "AI-5",
      "enunciado": "O Ato Institucional nº 5, de 1968, ampliou:",
      "alternativas": [
        "as liberdades civis",
        "os poderes repressivos do regime",
        "a autonomia sindical irrestrita",
        "o voto direto para presidente",
        "a liberdade de imprensa"
      ],
      "correta": 1,
      "explicacao": "O AI-5 permitiu medidas como cassações, fechamento do Congresso e suspensão de garantias.",
      "nivel": "difícil"
    },
    {
      "materia": "História",
      "assunto": "Redemocratização",
      "enunciado": "A Constituição Federal atualmente em vigor foi promulgada em:",
      "alternativas": [
        "1967",
        "1979",
        "1985",
        "1988",
        "1992"
      ],
      "correta": 3,
      "explicacao": "A Constituição Cidadã foi promulgada em 5 de outubro de 1988.",
      "nivel": "difícil"
    },
    {
      "materia": "História",
      "assunto": "República",
      "enunciado": "A Proclamação da República, em 15 de novembro de 1889, encerrou:",
      "alternativas": [
        "o período colonial",
        "o Império brasileiro",
        "o Estado Novo",
        "a ditadura militar",
        "a Regência"
      ],
      "correta": 1,
      "explicacao": "O movimento militar de 1889 derrubou a monarquia e instituiu a República.",
      "nivel": "difícil"
    },
    {
      "materia": "História",
      "assunto": "Movimentos sociais",
      "enunciado": "A Revolta da Vacina, em 1904, ocorreu na cidade do Rio de Janeiro e esteve relacionada:",
      "alternativas": [
        "à vacinação obrigatória e reformas urbanas",
        "à abolição da escravidão",
        "à Guerra do Paraguai",
        "à criação da Petrobras",
        "à transferência da capital"
      ],
      "correta": 0,
      "explicacao": "A imposição da vacinação, em contexto de reformas urbanas autoritárias, desencadeou a revolta.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia",
      "assunto": "Cartografia",
      "enunciado": "A escala 1:100 000 significa que 1 cm no mapa representa, no terreno:",
      "alternativas": [
        "100 m",
        "500 m",
        "1 km",
        "10 km",
        "100 km"
      ],
      "correta": 2,
      "explicacao": "100 000 cm correspondem a 1 000 m, ou 1 km.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia",
      "assunto": "Coordenadas geográficas",
      "enunciado": "A latitude é medida a partir:",
      "alternativas": [
        "do Meridiano de Greenwich",
        "da Linha do Equador",
        "do Trópico de Capricórnio",
        "do Círculo Polar Ártico",
        "da Linha Internacional de Data"
      ],
      "correta": 1,
      "explicacao": "A latitude é a distância angular ao norte ou ao sul do Equador.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia",
      "assunto": "Fusos horários",
      "enunciado": "A Terra gira 360° em aproximadamente 24 horas. Assim, cada fuso teórico corresponde a:",
      "alternativas": [
        "5°",
        "10°",
        "15°",
        "20°",
        "30°"
      ],
      "correta": 2,
      "explicacao": "360° ÷ 24 = 15° por hora.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia",
      "assunto": "Relevo brasileiro",
      "enunciado": "As planícies são formas de relevo caracterizadas predominantemente por:",
      "alternativas": [
        "processos de sedimentação",
        "dobramentos modernos",
        "vulcanismo ativo",
        "altitudes sempre superiores a 2 000 m",
        "ausência de rios"
      ],
      "correta": 0,
      "explicacao": "Planícies são áreas relativamente planas onde predomina a deposição de sedimentos.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia",
      "assunto": "Clima",
      "enunciado": "O clima equatorial brasileiro apresenta, em geral:",
      "alternativas": [
        "baixas temperaturas o ano todo",
        "elevadas temperaturas e chuvas abundantes",
        "longa estação seca e frio intenso",
        "neve frequente",
        "chuvas apenas no inverno"
      ],
      "correta": 1,
      "explicacao": "A baixa latitude e a umidade amazônica favorecem calor e precipitação elevada.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia",
      "assunto": "Biomas",
      "enunciado": "A vegetação típica da Caatinga apresenta adaptações:",
      "alternativas": [
        "à elevada salinidade marinha",
        "à escassez de água",
        "ao frio polar",
        "às inundações permanentes",
        "à altitude alpina"
      ],
      "correta": 1,
      "explicacao": "Plantas xerófitas possuem adaptações para sobreviver à irregularidade das chuvas.",
      "nivel": "fácil"
    },
    {
      "materia": "Geografia",
      "assunto": "Amazônia",
      "enunciado": "Uma função ambiental importante da Floresta Amazônica é:",
      "alternativas": [
        "impedir qualquer evaporação",
        "participar dos ciclos de água e carbono",
        "eliminar os ventos alísios",
        "produzir correntes oceânicas",
        "reduzir a biodiversidade global"
      ],
      "correta": 1,
      "explicacao": "A floresta armazena carbono e influencia a evapotranspiração e os regimes de chuva.",
      "nivel": "média"
    },
    {
      "materia": "Geografia",
      "assunto": "População",
      "enunciado": "O crescimento vegetativo corresponde à diferença entre:",
      "alternativas": [
        "imigração e emigração",
        "natalidade e mortalidade",
        "população urbana e rural",
        "exportação e importação",
        "nascimentos e migração"
      ],
      "correta": 1,
      "explicacao": "Crescimento vegetativo = taxa de natalidade menos taxa de mortalidade.",
      "nivel": "média"
    },
    {
      "materia": "Geografia",
      "assunto": "Urbanização",
      "enunciado": "A conurbação ocorre quando:",
      "alternativas": [
        "uma cidade perde toda a população",
        "manchas urbanas de municípios vizinhos se unem fisicamente",
        "a população retorna ao campo",
        "uma cidade deixa de ter serviços",
        "há redução da malha viária"
      ],
      "correta": 1,
      "explicacao": "Conurbação é a integração física de áreas urbanizadas contíguas.",
      "nivel": "média"
    },
    {
      "materia": "Geografia",
      "assunto": "Industrialização",
      "enunciado": "A concentração industrial histórica no Sudeste brasileiro relaciona-se, entre outros fatores:",
      "alternativas": [
        "à inexistência de mercado consumidor",
        "à infraestrutura, capital e mercado consumidor",
        "à ausência de ferrovias",
        "à proibição da energia elétrica",
        "ao clima polar"
      ],
      "correta": 1,
      "explicacao": "Infraestrutura, capital acumulado e mercado consumidor favoreceram a concentração industrial.",
      "nivel": "média"
    },
    {
      "materia": "Geografia",
      "assunto": "Agropecuária",
      "enunciado": "A expansão da fronteira agrícola no Cerrado foi favorecida por:",
      "alternativas": [
        "correção de solos e mecanização",
        "ausência de tecnologia",
        "clima polar",
        "proibição de fertilizantes",
        "relevo exclusivamente montanhoso"
      ],
      "correta": 0,
      "explicacao": "Tecnologias de correção da acidez do solo e mecanização ampliaram a produção agrícola.",
      "nivel": "média"
    },
    {
      "materia": "Geografia",
      "assunto": "Hidrografia",
      "enunciado": "A Bacia Amazônica destaca-se por apresentar:",
      "alternativas": [
        "pequena extensão e baixo volume",
        "grande extensão e elevada disponibilidade hídrica",
        "rios temporários em toda a área",
        "ausência de afluentes",
        "drenagem exclusivamente endorreica"
      ],
      "correta": 1,
      "explicacao": "É a maior bacia hidrográfica do mundo em volume de água.",
      "nivel": "média"
    },
    {
      "materia": "Geografia",
      "assunto": "Energia",
      "enunciado": "A fonte renovável que historicamente possui grande participação na matriz elétrica brasileira é:",
      "alternativas": [
        "carvão mineral",
        "energia hidrelétrica",
        "xisto betuminoso",
        "turfa",
        "urânio exclusivamente"
      ],
      "correta": 1,
      "explicacao": "A geração hidrelétrica tem participação histórica relevante na eletricidade brasileira.",
      "nivel": "média"
    },
    {
      "materia": "Geografia",
      "assunto": "Globalização",
      "enunciado": "Uma característica da globalização econômica é:",
      "alternativas": [
        "isolamento completo dos mercados",
        "integração de fluxos de mercadorias, capitais e informações",
        "fim das redes de transporte",
        "eliminação das empresas transnacionais",
        "ausência de comércio internacional"
      ],
      "correta": 1,
      "explicacao": "A globalização intensifica conexões econômicas, financeiras, tecnológicas e culturais.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia",
      "assunto": "Geopolítica",
      "enunciado": "O Mercosul é um bloco de integração regional criado inicialmente pelo:",
      "alternativas": [
        "Tratado de Assunção",
        "Tratado de Versalhes",
        "Acordo de Bretton Woods",
        "Tratado de Tordesilhas",
        "Pacto de Varsóvia"
      ],
      "correta": 0,
      "explicacao": "O Tratado de Assunção, de 1991, instituiu o Mercosul.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia",
      "assunto": "Regiões brasileiras",
      "enunciado": "O estado de Santa Catarina pertence à região:",
      "alternativas": [
        "Norte",
        "Nordeste",
        "Centro-Oeste",
        "Sudeste",
        "Sul"
      ],
      "correta": 4,
      "explicacao": "Santa Catarina integra a Região Sul, junto com Paraná e Rio Grande do Sul.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia",
      "assunto": "Migrações",
      "enunciado": "Êxodo rural é o deslocamento:",
      "alternativas": [
        "da cidade para o exterior",
        "do campo para a cidade",
        "entre países vizinhos",
        "da cidade para o campo",
        "entre capitais"
      ],
      "correta": 1,
      "explicacao": "Êxodo rural é a migração da população do campo para áreas urbanas.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia",
      "assunto": "Problemas ambientais",
      "enunciado": "O desmatamento pode contribuir diretamente para:",
      "alternativas": [
        "aumento da biodiversidade local",
        "erosão do solo e perda de habitats",
        "redução da emissão de carbono",
        "estabilização de todas as nascentes",
        "fim das ilhas de calor"
      ],
      "correta": 1,
      "explicacao": "A retirada da cobertura vegetal expõe o solo e reduz habitats naturais.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia",
      "assunto": "Climatologia",
      "enunciado": "O fenômeno El Niño está associado ao aquecimento anormal das águas superficiais do:",
      "alternativas": [
        "Atlântico Norte",
        "Pacífico Equatorial",
        "Oceano Índico Sul",
        "Mar Mediterrâneo",
        "Ártico"
      ],
      "correta": 1,
      "explicacao": "El Niño envolve aquecimento anormal das águas do Pacífico Equatorial central e oriental.",
      "nivel": "difícil"
    },
    {
      "materia": "Geografia",
      "assunto": "Território brasileiro",
      "enunciado": "O Brasil é atravessado pelos paralelos:",
      "alternativas": [
        "Equador e Trópico de Capricórnio",
        "Greenwich e Círculo Polar Ártico",
        "Trópico de Câncer e Círculo Polar Antártico",
        "Equador e Trópico de Câncer",
        "Greenwich e Equador"
      ],
      "correta": 0,
      "explicacao": "A Linha do Equador atravessa o norte do país e o Trópico de Capricórnio atravessa a porção sul.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Verb to be",
      "enunciado": "Choose the correct option: “The soldiers ___ ready.”",
      "alternativas": [
        "am",
        "is",
        "are",
        "be",
        "was"
      ],
      "correta": 2,
      "explicacao": "The subject “soldiers” is plural, so the correct form is “are”.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Simple Present",
      "enunciado": "Choose the correct option: “She ___ English every day.”",
      "alternativas": [
        "study",
        "studies",
        "studying",
        "studied",
        "is study"
      ],
      "correta": 1,
      "explicacao": "With he/she/it, the simple present usually takes -s or -es.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Present Continuous",
      "enunciado": "Complete: “They ___ training now.”",
      "alternativas": [
        "is",
        "am",
        "are",
        "be",
        "was"
      ],
      "correta": 2,
      "explicacao": "Present continuous uses am/is/are + verb-ing; “they are training”.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Simple Past",
      "enunciado": "Complete: “We ___ the museum yesterday.”",
      "alternativas": [
        "visit",
        "visits",
        "visited",
        "visiting",
        "are visit"
      ],
      "correta": 2,
      "explicacao": "“Yesterday” indicates past time; the regular past form is “visited”.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Future",
      "enunciado": "Choose the correct form: “I think it ___ rain tomorrow.”",
      "alternativas": [
        "will",
        "was",
        "has",
        "did",
        "would have"
      ],
      "correta": 0,
      "explicacao": "“Will” is commonly used for predictions about the future.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Pronouns",
      "enunciado": "Complete: “This is Maria. ___ is my sister.”",
      "alternativas": [
        "He",
        "She",
        "It",
        "They",
        "We"
      ],
      "correta": 1,
      "explicacao": "“She” is the subject pronoun used for a female person.",
      "nivel": "fácil"
    },
    {
      "materia": "Inglês",
      "assunto": "Possessive adjectives",
      "enunciado": "Complete: “The cadet forgot ___ notebook.”",
      "alternativas": [
        "he",
        "him",
        "his",
        "hers",
        "they"
      ],
      "correta": 2,
      "explicacao": "“His” is the possessive adjective referring to a male owner.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Articles",
      "enunciado": "Choose the correct article: “He is ___ honest man.”",
      "alternativas": [
        "a",
        "an",
        "the",
        "no article",
        "some"
      ],
      "correta": 1,
      "explicacao": "“Honest” begins with a vowel sound, so “an” is used.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Prepositions",
      "enunciado": "Complete: “The class starts ___ 8 o’clock.”",
      "alternativas": [
        "in",
        "on",
        "at",
        "by",
        "from"
      ],
      "correta": 2,
      "explicacao": "Use “at” with specific clock times.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Comparatives",
      "enunciado": "Choose the correct form: “This exercise is ___ than the previous one.”",
      "alternativas": [
        "easy",
        "easier",
        "easiest",
        "more easy",
        "most easy"
      ],
      "correta": 1,
      "explicacao": "For a short adjective ending in consonant + y, change y to i and add -er.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Superlatives",
      "enunciado": "Complete: “Mount Everest is the ___ mountain above sea level.”",
      "alternativas": [
        "high",
        "higher",
        "highest",
        "most high",
        "more high"
      ],
      "correta": 2,
      "explicacao": "The superlative form of “high” is “highest”.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Modal verbs",
      "enunciado": "Choose the best option: “You ___ wear a helmet; it is mandatory.”",
      "alternativas": [
        "might",
        "must",
        "could",
        "would",
        "may"
      ],
      "correta": 1,
      "explicacao": "“Must” expresses obligation or necessity.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "There is / There are",
      "enunciado": "Complete: “___ many books on the table.”",
      "alternativas": [
        "There is",
        "There are",
        "It is",
        "They is",
        "There be"
      ],
      "correta": 1,
      "explicacao": "Use “there are” with the plural noun “books”.",
      "nivel": "média"
    },
    {
      "materia": "Inglês",
      "assunto": "Quantifiers",
      "enunciado": "Complete: “There isn’t ___ water left.”",
      "alternativas": [
        "many",
        "a few",
        "much",
        "several",
        "few"
      ],
      "correta": 2,
      "explicacao": "“Much” is used with uncountable nouns such as “water”.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Conditionals",
      "enunciado": "Complete: “If it rains, we ___ at home.”",
      "alternativas": [
        "stay",
        "stayed",
        "will stay",
        "would stayed",
        "staying"
      ],
      "correta": 2,
      "explicacao": "First conditional: if + present simple, will + base verb.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Passive voice",
      "enunciado": "Choose the correct passive form: “The orders ___ by the officer.”",
      "alternativas": [
        "gave",
        "was give",
        "were given",
        "are giving",
        "has gave"
      ],
      "correta": 2,
      "explicacao": "Past simple passive: was/were + past participle; “orders” is plural.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Relative pronouns",
      "enunciado": "Complete: “The man ___ teaches us is from Brazil.”",
      "alternativas": [
        "which",
        "where",
        "who",
        "when",
        "whose"
      ],
      "correta": 2,
      "explicacao": "“Who” refers to a person functioning as the subject of the relative clause.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Reading comprehension",
      "enunciado": "Read: “The library closes at 6 p.m.” What time does it close?",
      "alternativas": [
        "At 4 p.m.",
        "At 5 p.m.",
        "At 6 p.m.",
        "At 7 p.m.",
        "At 8 p.m."
      ],
      "correta": 2,
      "explicacao": "The sentence explicitly states that the library closes at 6 p.m.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Adverbs",
      "enunciado": "Choose the correct word: “She speaks English ___.”",
      "alternativas": [
        "fluent",
        "fluently",
        "fluency",
        "more fluent",
        "fluentest"
      ],
      "correta": 1,
      "explicacao": "An adverb of manner modifies “speaks”; “fluently” is the adverb.",
      "nivel": "difícil"
    },
    {
      "materia": "Inglês",
      "assunto": "Phrasal verbs",
      "enunciado": "In “Please turn off the lights”, “turn off” means:",
      "alternativas": [
        "increase",
        "switch off",
        "look for",
        "put on",
        "take after"
      ],
      "correta": 1,
      "explicacao": "“Turn off” means to switch a device or light off.",
      "nivel": "difícil"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) module.exports = BANCO;
