/* Banco de questões originais (escritas para treino, não copiadas de provas).
   Formato: Q(matéria, assunto, enunciado, [alternativas], índiceDaCorreta, explicação) */
const Q = (materia, assunto, enunciado, alternativas, correta, explicacao) =>
  ({ materia, assunto, enunciado, alternativas, correta, explicacao });

const BANCO = {
  "ESA": [
    Q("Matemática", "Regra de três", "Uma ração dura 20 dias para 120 soldados. Para 160 soldados, com a mesma ração, ela durará:", ["12 dias", "14 dias", "15 dias", "16 dias", "18 dias"], 2, "Grandezas inversamente proporcionais: 120 × 20 = 160 × x, logo x = 15 dias."),
    Q("Matemática", "Porcentagem", "Um equipamento custa R$ 250,00. Recebe um aumento de 20% e, em seguida, um desconto de 20%. O preço final é:", ["R$ 250,00", "R$ 245,00", "R$ 240,00", "R$ 235,00", "R$ 230,00"], 2, "250 × 1,2 = 300; 300 × 0,8 = 240."),
    Q("Matemática", "Progressão aritmética", "Em uma PA com primeiro termo 5 e razão 4, o décimo termo vale:", ["37", "39", "41", "43", "45"], 2, "a₁₀ = 5 + 9·4 = 41."),
    Q("Matemática", "Equação do 2º grau", "A soma dos quadrados das raízes da equação x² − 7x + 10 = 0 é:", ["21", "25", "29", "33", "39"], 2, "As raízes são 2 e 5: 4 + 25 = 29."),
    Q("Matemática", "Geometria plana", "A área de um triângulo equilátero de lado 6 cm é:", ["9√3 cm²", "6√3 cm²", "12√3 cm²", "18 cm²", "36√3 cm²"], 0, "A = l²√3/4 = 36√3/4 = 9√3."),
    Q("Matemática", "Funções", "Sendo f(x) = 3x − 2, o valor de f(f(2)) é:", ["8", "9", "10", "11", "12"], 2, "f(2) = 4 e f(4) = 10."),
    Q("Matemática", "Análise combinatória", "O número de anagramas da palavra ARMA é:", ["6", "8", "12", "16", "24"], 2, "4!/2! = 12, pois a letra A se repete duas vezes."),
    Q("Matemática", "Probabilidade", "Uma urna tem 4 bolas vermelhas e 6 azuis. Retiram-se duas bolas, sem reposição. A probabilidade de ambas serem vermelhas é:", ["1/5", "2/15", "4/25", "3/10", "2/5"], 1, "(4/10)·(3/9) = 12/90 = 2/15."),
    Q("Português", "Concordância verbal", "Assinale a alternativa correta quanto à concordância verbal.", ["Fazem dois anos que ele serve no quartel.", "Houveram vários problemas no exercício.", "Existem várias alternativas para o problema.", "Devem haver soldados suficientes.", "Haviam muitos candidatos na fila."], 2, "“Fazer” (tempo) e “haver” (existir) são impessoais. “Existir” concorda normalmente com o sujeito plural."),
    Q("Português", "Crase", "Assinale a alternativa em que o uso da crase está correto.", ["Fui à pé até o quartel.", "Entreguei o relatório à ele.", "Refiro-me à instrução recebida ontem.", "Começou a chover à partir das seis.", "Ficaram frente à frente."], 2, "Há preposição (referir-se a) + artigo a. Nos demais casos não há crase."),
    Q("Português", "Figuras de linguagem", "Em “O soldado é um leão em combate”, a figura de linguagem é:", ["metonímia", "metáfora", "ironia", "eufemismo", "antítese"], 1, "Há comparação implícita, sem conectivo, entre o soldado e o leão."),
    Q("Português", "Classes de palavras", "Em “Os recrutas chegaram cedo ao quartel”, a palavra “cedo” é:", ["adjetivo", "advérbio de tempo", "substantivo", "conjunção", "preposição"], 1, "“Cedo” modifica o verbo e indica circunstância de tempo."),
    Q("Português", "Regência verbal", "Assinale a alternativa correta quanto à regência verbal.", ["Chegamos no quartel às seis.", "Aspiro o cargo de sargento.", "O comandante obedeceu às ordens.", "Prefiro mais o treino do que o descanso.", "Namorei com ela."], 2, "Obedecer exige complemento com preposição a (objeto indireto)."),
    Q("Português", "Pontuação", "Em qual alternativa a vírgula está empregada corretamente?", ["O sargento, ordenou que a tropa avançasse.", "Os soldados cansados, mas firmes, concluíram a marcha.", "Terminada a missão os homens, descansaram.", "Ele disse, que voltaria cedo.", "Vieram ao quartel, os convidados."], 1, "A expressão adversativa “mas firmes” é isolada por vírgulas. Nos demais casos separa-se indevidamente termos que se ligam."),
    Q("História", "Brasil República", "Na Proclamação da República, em 1889, o militar de maior destaque foi:", ["Duque de Caxias", "Marechal Deodoro da Fonseca", "Almirante Tamandaré", "General Osório", "Barão do Rio Branco"], 1, "Deodoro da Fonseca liderou o movimento e tornou-se o primeiro presidente."),
    Q("História", "Segunda Guerra Mundial", "A Força Expedicionária Brasileira (FEB) combateu na Segunda Guerra Mundial no teatro de operações da:", ["França", "Itália", "Alemanha", "África do Norte", "Japão"], 1, "A FEB atuou na campanha da Itália, com batalhas como Monte Castelo e Montese."),
    Q("História", "Guerra do Paraguai", "A Tríplice Aliança, na Guerra do Paraguai, foi formada por:", ["Brasil, Chile e Peru", "Brasil, Argentina e Uruguai", "Brasil, Bolívia e Uruguai", "Argentina, Chile e Uruguai", "Brasil, Argentina e Chile"], 1, "O tratado de 1865 uniu Brasil, Argentina e Uruguai contra o Paraguai."),
    Q("Geografia", "Biomas", "O único bioma exclusivamente brasileiro é:", ["Cerrado", "Mata Atlântica", "Caatinga", "Pantanal", "Amazônia"], 2, "A Caatinga ocorre apenas no território brasileiro."),
    Q("Geografia", "Coordenadas", "Entre as capitais abaixo, a que é cortada pela Linha do Equador é:", ["Manaus", "Belém", "Macapá", "Boa Vista", "Porto Velho"], 2, "Macapá está praticamente sobre a latitude 0°."),
    Q("Geografia", "Fusos horários", "Quando são 10h em Brasília (UTC−3), em Greenwich (UTC+0) o horário é:", ["07h", "10h", "12h", "13h", "14h"], 3, "Greenwich está 3 horas à frente de Brasília: 10h + 3h = 13h."),
    Q("Inglês", "Verbo to be", "Choose the correct verb to complete the sentence: “The recruits ___ ready for inspection.”", ["am", "is", "are", "be", "being"], 2, "The subject “the recruits” is plural, so the correct form of the verb to be is “are”."),
    Q("Inglês", "Simple Present", "Choose the correct option: “My brother ___ English every evening.”", ["study", "studies", "studying", "studied", "is study"], 1, "In the Simple Present, the third person singular (he/she/it) normally takes -s or -es: “studies”."),
    Q("Inglês", "Pronouns", "Choose the correct pronoun: “The instructor spoke to Ana and ___.”", ["I", "me", "my", "mine", "myself"], 1, "After the preposition “to”, an object pronoun is required. The correct form is “me”."),
    Q("Inglês", "Articles", "Choose the correct article: “He is ___ honest soldier.”", ["a", "an", "the", "no article", "some"], 1, "“Honest” begins with a vowel sound because the h is silent, so the correct article is “an”.")
  ],

  "EsPCEx": [
    Q("Matemática", "Sistemas lineares", "Se x + y = 10 e x − y = 4, o valor de x·y é:", ["18", "20", "21", "24", "25"], 2, "x = 7 e y = 3, logo xy = 21."),
    Q("Matemática", "Logaritmos", "Se log₂(x − 1) = 4, então x vale:", ["15", "16", "17", "18", "19"], 2, "x − 1 = 2⁴ = 16, logo x = 17."),
    Q("Matemática", "Trigonometria", "Sendo θ do 1º quadrante e tg θ = 3/4, o valor de sen θ é:", ["3/5", "4/5", "3/4", "5/4", "1/2"], 0, "Triângulo 3-4-5: sen θ = cateto oposto/hipotenusa = 3/5."),
    Q("Matemática", "Geometria analítica", "A equação da reta que passa pelos pontos (1, 2) e (3, 6) é:", ["y = 2x", "y = x + 1", "y = 3x − 1", "y = 2x + 1", "y = x/2"], 0, "Coeficiente angular (6−2)/(3−1) = 2; y − 2 = 2(x − 1) ⇒ y = 2x."),
    Q("Matemática", "Determinantes", "O determinante da matriz [[2, 3], [1, 4]] é:", ["3", "4", "5", "6", "11"], 2, "2·4 − 3·1 = 5."),
    Q("Matemática", "Progressão geométrica", "A soma dos 5 primeiros termos de uma PG com a₁ = 3 e razão 2 é:", ["63", "81", "93", "96", "189"], 2, "S = 3(2⁵ − 1)/(2 − 1) = 93."),
    Q("Física", "MRU", "Um veículo a 72 km/h, em movimento uniforme, percorre em 15 s uma distância de:", ["108 m", "200 m", "300 m", "1 080 m", "3 000 m"], 2, "72 km/h = 20 m/s; d = 20 · 15 = 300 m."),
    Q("Física", "Dinâmica", "Um bloco de 4 kg, sobre superfície lisa, recebe uma força horizontal resultante de 24 N. Sua aceleração é:", ["4 m/s²", "5 m/s²", "6 m/s²", "8 m/s²", "12 m/s²"], 2, "a = F/m = 24/4 = 6 m/s²."),
    Q("Física", "Energia mecânica", "Um corpo é abandonado de 20 m de altura (g = 10 m/s², sem atrito com o ar). Sua velocidade ao chegar ao solo é:", ["10 m/s", "15 m/s", "20 m/s", "25 m/s", "40 m/s"], 2, "v = √(2gh) = √400 = 20 m/s."),
    Q("Física", "Eletrodinâmica", "Um resistor de 12 Ω é ligado a 36 V. A potência dissipada é:", ["3 W", "36 W", "72 W", "108 W", "432 W"], 3, "i = 3 A; P = U·i = 36 · 3 = 108 W."),
    Q("Física", "Ondulatória", "Uma onda de frequência 50 Hz e comprimento de onda 4 m se propaga com velocidade de:", ["12,5 m/s", "46 m/s", "54 m/s", "200 m/s", "400 m/s"], 3, "v = λ·f = 4 · 50 = 200 m/s."),
    Q("Química", "Número de oxidação", "O número de oxidação do manganês no KMnO₄ é:", ["+2", "+4", "+5", "+6", "+7"], 4, "+1 + x + 4(−2) = 0 ⇒ x = +7."),
    Q("Química", "pH", "Uma solução de HCl 0,001 mol/L (ácido forte, ionização total) tem pH igual a:", ["1", "2", "3", "4", "11"], 2, "[H⁺] = 10⁻³ ⇒ pH = 3."),
    Q("Química", "Estequiometria", "Na reação 2 H₂ + O₂ → 2 H₂O (H = 1; O = 16), 4 g de H₂ produzem de água:", ["18 g", "24 g", "36 g", "40 g", "72 g"], 2, "4 g = 2 mol de H₂, que formam 2 mol de H₂O = 36 g."),
    Q("Química", "Tabela periódica", "Um elemento com distribuição 1s² 2s² 2p⁶ 3s² 3p⁵ pertence à família dos:", ["metais alcalinos", "alcalino-terrosos", "calcogênios", "halogênios", "gases nobres"], 3, "Sete elétrons na camada de valência: família 17, os halogênios."),
    Q("Português", "Figuras de linguagem", "Em “Li Machado de Assis nas férias”, ocorre:", ["pleonasmo", "metonímia", "antítese", "eufemismo", "hipérbole"], 1, "O autor é usado no lugar da obra."),
    Q("Português", "Voz verbal", "A voz passiva analítica de “O comandante elogiou os soldados” é:", ["Os soldados elogiaram o comandante.", "Os soldados foram elogiados pelo comandante.", "O comandante foi elogiado pelos soldados.", "Os soldados elogiavam-se.", "Elogiou-se o comandante."], 1, "O objeto direto vira sujeito; o verbo vai para “ser + particípio”."),
    Q("História", "Revolução Industrial", "A Revolução Industrial teve início, no século XVIII, em qual país?", ["França", "Alemanha", "Inglaterra", "Estados Unidos", "Itália"], 2, "A Inglaterra reuniu capital, carvão, mão de obra e mercado consumidor."),
    Q("Geografia", "Economia brasileira", "A região brasileira que concentra o maior PIB é:", ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"], 3, "O Sudeste reúne os maiores centros industriais e financeiros do país."),
    Q("Inglês", "Present simple", "Choose the correct option: “She ___ to the base every morning.”", ["go", "goes", "going", "gone", "went"], 1, "Terceira pessoa do singular no presente simples leva -s/-es."),
    Q("Inglês", "Verbo to be", "Choose the correct option: “I ___ a candidate for the military academy.”", ["is", "are", "am", "be", "been"], 2, "With the subject “I”, the correct present form of the verb to be is “am”."),
    Q("Inglês", "Modal auxiliaries", "Choose the sentence that expresses obligation.", ["You can leave now.", "You must wear the uniform.", "You might be late.", "You would like coffee.", "You could swim."], 1, "“Must” expresses obligation or strong necessity."),
    Q("Inglês", "Active and passive voice", "Choose the correct passive form of: “The officer gives the order.”", ["The order is given by the officer.", "The order gives the officer.", "The officer is given the order.", "The order was give by the officer.", "The order has giving by the officer."], 0, "In the Simple Present passive, use am/is/are + past participle: “is given”."),
    Q("Inglês", "Wh-questions", "Choose the correct question word: “___ do you report for duty? — At 7 a.m.”", ["Who", "Where", "When", "Why", "Which"], 2, "“When” asks about time, and the answer gives a time: at 7 a.m.")
  ],

  "IME": [
    Q("Matemática", "Números complexos", "Se z = 1 + i, então z⁸ vale:", ["8", "16", "16i", "−16", "32"], 1, "z² = 2i; z⁸ = (2i)⁴ = 16."),
    Q("Matemática", "Polinômios", "A soma dos quadrados das raízes de x³ − 6x² + 11x − 6 = 0 é:", ["12", "13", "14", "15", "36"], 2, "Pelas relações de Girard: (Σr)² − 2Σrr' = 36 − 22 = 14."),
    Q("Matemática", "Probabilidade condicional", "Lançam-se dois dados honestos e a soma é 8. A probabilidade de que ao menos um dado seja 6 é:", ["1/5", "2/5", "1/3", "3/5", "1/2"], 1, "Soma 8: (2,6), (3,5), (4,4), (5,3), (6,2). Com algum 6: 2 casos em 5."),
    Q("Matemática", "Relações métricas", "Um triângulo retângulo tem catetos 6 e 8. A altura relativa à hipotenusa mede:", ["4,0", "4,8", "5,0", "5,2", "6,0"], 1, "Hipotenusa = 10; h = (6·8)/10 = 4,8."),
    Q("Matemática", "Somatórios", "O valor de Σ k·k! para k de 1 a 4 é:", ["24", "119", "120", "121", "719"], 1, "1 + 4 + 18 + 96 = 119 = 5! − 1."),
    Q("Matemática", "Combinatória", "O número de soluções inteiras não negativas de x + y + z = 10 é:", ["55", "66", "78", "120", "220"], 1, "C(10 + 2, 2) = C(12, 2) = 66."),
    Q("Matemática", "Equação exponencial", "A soma das soluções reais de 4ˣ − 5·2ˣ + 4 = 0 é:", ["0", "1", "2", "3", "4"], 2, "Com t = 2ˣ: t² − 5t + 4 = 0 ⇒ t = 1 ou 4 ⇒ x = 0 ou 2."),
    Q("Matemática", "Determinantes", "O determinante da matriz [[1, 1, 1], [1, 2, 4], [1, 3, 9]] é:", ["0", "1", "2", "3", "6"], 2, "É uma matriz de Vandermonde: (2−1)(3−1)(3−2) = 2."),
    Q("Física", "Lançamento oblíquo", "Um projétil é lançado do solo com v₀ = 20 m/s a 30° com a horizontal (g = 10 m/s²). Seu alcance horizontal é:", ["10√3 m", "20 m", "20√3 m", "40 m", "40√3 m"], 2, "R = v₀² sen 2θ / g = 400 · (√3/2) / 10 = 20√3 m."),
    Q("Física", "Colisões", "Um corpo de 2 kg a 6 m/s colide de forma perfeitamente inelástica com outro de 4 kg em repouso. A energia cinética dissipada é:", ["12 J", "18 J", "24 J", "30 J", "36 J"], 2, "v final = 12/6 = 2 m/s; Ec inicial = 36 J, final = 12 J; perda = 24 J."),
    Q("Física", "Calorimetria", "Para aquecer 200 g de água de 20 °C a 70 °C (c = 1 cal/g·°C), são necessárias:", ["1 000 cal", "4 000 cal", "8 000 cal", "10 000 cal", "14 000 cal"], 3, "Q = m·c·ΔT = 200 · 1 · 50 = 10 000 cal."),
    Q("Física", "Circuitos", "Uma fonte de 12 V alimenta, em série, um resistor de 2 Ω e a associação em paralelo de 6 Ω e 3 Ω. A corrente no resistor de 3 Ω é:", ["1 A", "1,5 A", "2 A", "3 A", "4 A"], 2, "Req = 2 + 2 = 4 Ω; i = 3 A; tensão no paralelo = 6 V; i(3 Ω) = 2 A."),
    Q("Física", "Gravitação", "Um satélite em órbita circular tem o raio da órbita quadruplicado. Pela 3ª lei de Kepler, o período fica multiplicado por:", ["2", "4", "8", "16", "64"], 2, "T² ∝ r³ ⇒ T ∝ r^(3/2) = 4^(3/2) = 8."),
    Q("Física", "Hidrostática", "Um bloco de madeira de densidade 600 kg/m³ flutua na água (1 000 kg/m³). A fração do seu volume submersa é:", ["40%", "50%", "60%", "70%", "80%"], 2, "No equilíbrio, fração submersa = ρ_bloco/ρ_água = 0,6."),
    Q("Química", "Equilíbrio químico", "No equilíbrio N₂ + 3 H₂ ⇌ 2 NH₃, as concentrações são [N₂] = 1, [H₂] = 2 e [NH₃] = 4 (mol/L). O valor de Kc é:", ["1", "2", "4", "8", "16"], 1, "Kc = [NH₃]² / ([N₂][H₂]³) = 16 / (1 · 8) = 2."),
    Q("Química", "Termoquímica", "Dados: C(grafite) + O₂ → CO₂, ΔH = −394 kJ; CO + ½ O₂ → CO₂, ΔH = −283 kJ. O ΔH de C + ½ O₂ → CO é:", ["−677 kJ", "−394 kJ", "−283 kJ", "−111 kJ", "+111 kJ"], 3, "Lei de Hess: −394 − (−283) = −111 kJ."),
    Q("Química", "Soluções tampão", "Um tampão contém um ácido fraco de pKa = 5, com [A⁻]/[HA] = 10. Seu pH é:", ["4", "5", "6", "7", "8"], 2, "pH = pKa + log([A⁻]/[HA]) = 5 + 1 = 6."),
    Q("Química", "Cinética", "Uma reação de 1ª ordem tem meia-vida de 10 min. Após 40 min, a fração da amostra que resta é:", ["1/2", "1/4", "1/8", "1/16", "1/32"], 3, "40 min = 4 meias-vidas: (1/2)⁴ = 1/16."),
    Q("Química", "Isomeria", "O número de isômeros constitucionais de fórmula C₅H₁₂ é:", ["2", "3", "4", "5", "6"], 1, "Pentano, 2-metilbutano e 2,2-dimetilpropano."),
    Q("Química", "Eletrólise", "Uma corrente de 2 A circula por 4 825 s em solução de Cu²⁺ (Cu = 63,5; F = 96 500 C/mol). A massa de cobre depositada é:", ["1,59 g", "3,175 g", "6,35 g", "31,75 g", "63,5 g"], 1, "Q = 9 650 C = 0,1 mol de e⁻; Cu²⁺ usa 2 e⁻ ⇒ 0,05 mol = 3,175 g.")
  ],

  "Escola Naval": [
    Q("Matemática", "Função quadrática", "O valor mínimo da função f(x) = x² − 4x + 3 é:", ["−2", "−1", "0", "1", "3"], 1, "Vértice em x = 2; f(2) = 4 − 8 + 3 = −1."),
    Q("Matemática", "Trigonometria", "Se sen x + cos x = 1/2, então sen x · cos x vale:", ["−3/8", "−1/8", "1/8", "3/8", "3/4"], 0, "Elevando ao quadrado: 1 + 2sc = 1/4 ⇒ sc = −3/8."),
    Q("Matemática", "Geometria espacial", "Um cone reto tem raio da base 3 e geratriz 5. Seu volume é:", ["9π", "12π", "15π", "36π", "45π"], 1, "Altura = 4; V = (1/3)·π·9·4 = 12π."),
    Q("Matemática", "Binômio de Newton", "O termo independente de x no desenvolvimento de (x + 1/x)⁶ é:", ["15", "20", "30", "40", "64"], 1, "É o termo central: C(6, 3) = 20."),
    Q("Matemática", "Circunferência", "O raio da circunferência x² + y² − 6x + 4y − 3 = 0 é:", ["2", "3", "4", "5", "16"], 2, "(x − 3)² + (y + 2)² = 16 ⇒ r = 4."),
    Q("Matemática", "Juros compostos", "Um capital de R$ 1 000,00 aplicado a 10% ao ano, a juros compostos, rende após 2 anos um montante de:", ["R$ 1 200,00", "R$ 1 210,00", "R$ 1 220,00", "R$ 1 100,00", "R$ 1 331,00"], 1, "M = 1 000 · 1,1² = 1 210."),
    Q("Matemática", "Inequação modular", "Quantos números inteiros satisfazem |2x − 3| < 5?", ["3", "4", "5", "6", "7"], 1, "−1 < x < 4: os inteiros são 0, 1, 2 e 3."),
    Q("Física", "Hidrostática", "A pressão a 10 m de profundidade na água (p_atm = 10⁵ Pa; ρ = 1 000 kg/m³; g = 10 m/s²) é:", ["1 × 10⁵ Pa", "2 × 10⁵ Pa", "3 × 10⁵ Pa", "1 × 10⁶ Pa", "2 × 10⁶ Pa"], 1, "p = p_atm + ρgh = 10⁵ + 10⁵ = 2 × 10⁵ Pa."),
    Q("Física", "Energia mecânica", "Um bloco de 2 kg desce uma rampa lisa de 5 m de altura (g = 10 m/s²). Sua velocidade na base é:", ["5 m/s", "10 m/s", "15 m/s", "20 m/s", "50 m/s"], 1, "mgh = ½mv² ⇒ v = √(2·10·5) = 10 m/s."),
    Q("Física", "Gases", "Um gás ideal, em volume constante, tem a temperatura elevada de 300 K para 600 K. A pressão:", ["cai à metade", "permanece igual", "dobra", "quadruplica", "triplica"], 2, "A pressão é proporcional à temperatura absoluta."),
    Q("Física", "Magnetismo", "Uma carga de 2 μC move-se a 100 m/s perpendicularmente a um campo de 0,5 T. A força magnética é:", ["10⁻⁶ N", "10⁻⁵ N", "10⁻⁴ N", "10⁻³ N", "10⁻² N"], 2, "F = qvB = 2·10⁻⁶ · 100 · 0,5 = 10⁻⁴ N."),
    Q("Física", "Oscilações", "Um oscilador massa-mola tem m = 0,4 kg e k = 40 N/m. Seu período é:", ["0,1π s", "0,2π s", "0,4π s", "2π s", "4π s"], 1, "T = 2π√(m/k) = 2π√0,01 = 0,2π s."),
    Q("Química", "Concentração", "Dissolvendo 4 g de NaOH (M = 40 g/mol) em água até 500 mL, a concentração é:", ["0,1 mol/L", "0,2 mol/L", "0,4 mol/L", "0,8 mol/L", "2 mol/L"], 1, "n = 0,1 mol; C = 0,1/0,5 = 0,2 mol/L."),
    Q("Química", "Geometria molecular", "A molécula de amônia (NH₃) tem geometria:", ["linear", "angular", "trigonal plana", "piramidal", "tetraédrica"], 3, "Três ligações e um par de elétrons livre no N: geometria piramidal."),
    Q("Química", "Volume molar", "A queima completa de 16 g de CH₄ (C = 12; H = 1) produz, nas CNTP, de CO₂:", ["11,2 L", "22,4 L", "44,8 L", "67,2 L", "89,6 L"], 1, "16 g = 1 mol de CH₄ ⇒ 1 mol de CO₂ = 22,4 L."),
    Q("Química", "Funções orgânicas", "O composto CH₃–O–CH₂–CH₃ pertence à função:", ["álcool", "éter", "éster", "cetona", "aldeído"], 1, "Oxigênio entre dois carbonos: éter."),
    Q("Português", "Colocação pronominal", "Assinale a alternativa com a colocação pronominal correta.", ["Me disseram a verdade.", "Disseram-me a verdade.", "Não disseram-me a verdade.", "Nunca disseram-me nada.", "Tudo disseram-me."], 1, "Não se inicia a frase com pronome oblíquo; palavras negativas e “tudo” atraem o pronome (próclise)."),
    Q("Português", "Sintaxe", "Em “Os alunos estudaram a lição”, o termo “a lição” exerce a função de:", ["sujeito", "objeto direto", "objeto indireto", "complemento nominal", "predicativo"], 1, "“Estudar” é transitivo direto: não há preposição."),
    Q("Inglês", "Conditionals", "Choose the correct option: “If I ___ more time, I would study harder.”", ["have", "had", "has", "having", "will have"], 1, "Segunda condicional: if + past simple, would + verbo."),
    Q("Inglês", "Prepositions", "Choose the correct option: “He has lived here ___ 2020.”", ["for", "since", "during", "ago", "at"], 1, "“Since” indica o ponto de partida no tempo; “for” indica duração.")
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = BANCO;
}
