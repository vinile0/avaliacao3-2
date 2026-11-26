/* Gerador automático de questões (Matemática, Física e Química).
   Cada questão é montada com números sorteados, e o gabarito é calculado
   pelo código, então nunca se repete e a resposta sempre está certa.
   Níveis: 0 = fácil, 1 = média, 2 = difícil. */
const gerarLista = (() => {
  const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const pick = (a) => a[rnd(0, a.length - 1)];
  const shuffle = (list) => {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i--) { const j = rnd(0, i); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const num = (n, d = 2) => (Number(Number(n).toFixed(d)) || 0).toLocaleString("pt-BR", { maximumFractionDigits: d });
  const int = (n) => num(n, 0);
  const money = (n) => "R$ " + (Math.round(n * 100) / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = (n) => num(n) + "%";
  const un = (u) => (n) => num(n) + " " + u;
  const ident = (s) => s;
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const frac = (n, d) => { const g = gcd(n, d); n /= g; d /= g; return d === 1 ? String(n) : `${n}/${d}`; };
  const fat = (n) => (n <= 1 ? 1 : n * fat(n - 1));
  const comb = (n, k) => fat(n) / (fat(k) * fat(n - k));
  const sup = (n) => String(n).split("").map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[+c]).join("");
  const ex = (n) => "10⁻" + sup(n);
  const term = (n, v) => (n === 0 ? "" : ` ${n < 0 ? "−" : "+"} ${Math.abs(n) === 1 && v ? "" : Math.abs(n)}${v}`);
  const poly = (a, b, c) => `${a === 1 ? "" : a}x²${term(b, "x")}${term(c, "")}`;

  /* Monta a questão: a resposta certa + alternativas erradas plausíveis. */
  function make(materia, assunto, enunciado, correct, wrongs, f, explicacao) {
    const labels = [f(correct)];
    const isNum = typeof correct === "number";
    const add = (v) => {
      if (labels.length >= 5) return;
      if (typeof v === "number" && (!isFinite(v) || (isNum && correct > 0 && v <= 0))) return;
      const l = f(v);
      if (!labels.includes(l)) labels.push(l);
    };
    wrongs.forEach(add);
    for (let k = 1; labels.length < 5 && k < 60; k++) {
      if (isNum) { add(correct * (1 + 0.1 * k)); add(correct * (1 - 0.1 * k)); add(correct + k); add(correct - k); }
      else add(frac(rnd(1, 9), rnd(10, 40)));
    }
    const order = shuffle(labels.map((_, i) => i));
    return { materia, assunto, enunciado, alternativas: order.map((i) => labels[i]), correta: order.indexOf(0), explicacao };
  }

  const G = [];
  const add = (materia, assunto, chaves, tpls) => G.push({ materia, assunto, chaves, tpls });
  const eqRoots = () => { let a, b; do { a = rnd(-6, 8); b = rnd(-6, 8); } while (!a || !b || a === b); return [a, b]; };

  /* ===================== MATEMÁTICA ===================== */
  add("Matemática", "Porcentagem", ["porcent", "desconto", "acrescimo", "aumento", "lucro", "percentual"], [
    [0, () => { const p = pick([10, 15, 20, 25, 30, 35, 40, 45, 60, 75]), n = rnd(3, 40) * 20, a = p * n / 100;
      return [pick([`Uma companhia possui ${n} militares e ${p}% deles são soldados. Quantos soldados há na companhia?`, `Em uma prova, ${n} candidatos se inscreveram e ${p}% foram aprovados. Quantos candidatos foram aprovados?`, `Um quartel tinha ${n} litros de combustível e ${p}% foram consumidos. Quantos litros foram consumidos?`]), a, [n - a, a * 10, a / 2], int, `${p}% de ${n} = ${p}/100 × ${n} = ${int(a)}.`]; }],
    [1, () => { const P = rnd(2, 20) * 50, a = pick([10, 20, 25, 30, 40, 50]), d = pick([10, 20, 25, 30, 40, 50]), r = P * (1 + a / 100) * (1 - d / 100);
      return [`Um equipamento custa ${money(P)}. Ele recebe um aumento de ${a}% e, em seguida, um desconto de ${d}%. O preço final é:`, r, [P * (1 + (a - d) / 100), P * (1 + a / 100), P * (1 - d / 100), P], money, `${money(P)} × ${num(1 + a / 100)} × ${num(1 - d / 100)} = ${money(r)}.`]; }],
    [1, () => { const P = rnd(2, 20) * 50, d = pick([10, 20, 25, 40, 50]), V = P * (1 - d / 100);
      return [`Após um desconto de ${d}%, uma bota é vendida por ${money(V)}. Qual era o preço original?`, P, [V * (1 + d / 100), V + d, V * 2], money, `O preço atual é ${100 - d}% do original: ${money(V)} ÷ ${num(1 - d / 100)} = ${money(P)}.`]; }],
    [1, () => { const A = rnd(2, 15) * 100, k = pick([8, 12, 15, 20, 24, 25, 30, 40, 60, 80]), B = A + A * k / 100;
      return [`O efetivo de uma unidade passou de ${A} para ${B} militares. O aumento percentual foi de:`, k, [100 * (B - A) / B, k + 10, k / 2, k * 2], pct, `Aumento = ${B - A}; ${B - A} ÷ ${A} = ${num(k / 100)} = ${k}%.`]; }],
    [1, () => { const N = pick([200, 500, 800, 1000, 2000, 3000]), a = pick([10, 20, 30, 40, 50, 60, 70, 80]), b = pick([10, 20, 30, 40, 50, 60, 70, 80]), r = N * a * b / 10000;
      return [`Quanto vale ${a}% de ${b}% de ${N}?`, r, [N * (a + b) / 100, N * a / 100, N * b / 100, r * 10], num, `${a}% de ${b}% = ${a}/100 × ${b}/100 = ${num(a * b / 10000, 4)}; × ${N} = ${num(r)}.`]; }],
    [2, () => { const x = pick([20, 25, 50, 60, 100, 150, 300]), r = 100 * x / (100 + x);
      return [`O efetivo de um batalhão aumentou ${x}%. Para voltar ao valor original, ele deverá sofrer uma redução percentual de:`, r, [x, x / 2, r + 10, r - 10, 100 - r], pct, `Valor inicial 100 passa a ${100 + x}. Para voltar a 100, reduz-se ${x} sobre ${100 + x}: ${x}/${100 + x} = ${num(r)}%.`]; }],
    [2, () => { const v = [10, 20, 25, 50], a = pick(v), b = pick(v), c = pick(v), r = ((1 + a / 100) * (1 + b / 100) * (1 + c / 100) - 1) * 100;
      return [`O preço de um item sofreu três aumentos sucessivos, de ${a}%, ${b}% e ${c}%. O aumento acumulado foi de:`, r, [a + b + c, r - 5, r + 5, (a + b + c) / 3], pct, `Fator = ${num(1 + a / 100)} × ${num(1 + b / 100)} × ${num(1 + c / 100)} = ${num(1 + r / 100, 4)}, ou seja, aumento de ${num(r)}%.`]; }],
    [2, () => { const V1 = pick([20, 30, 40, 50, 60, 80]), V2 = pick([20, 30, 40, 50, 60, 80]), c1 = pick([10, 20, 30, 40]), c2 = pick([50, 60, 70, 80]), r = (V1 * c1 + V2 * c2) / (V1 + V2);
      return [`Misturam-se ${V1} litros de uma solução com ${c1}% de álcool e ${V2} litros de outra com ${c2}% de álcool. A concentração final de álcool é:`, r, [(c1 + c2) / 2, r + 5, r - 5, c2 - c1], pct, `(${V1}×${c1} + ${V2}×${c2}) ÷ ${V1 + V2} = ${num(r)}%.`]; }],
    [2, () => { const L = pick([20, 25, 40, 50, 60, 75]), r = 100 * L / (100 - L);
      return [`Um comerciante vende um artigo com lucro de ${L}% sobre o preço de venda. O lucro sobre o preço de custo é de:`, r, [L, 100 - L, r + 10, r - 10], pct, `Se a venda vale 100, o lucro é ${L} e o custo é ${100 - L}. Lucro sobre o custo: ${L}/${100 - L} = ${num(r)}%.`]; }],
    [2, () => { const P = rnd(1, 9) * 10000, i = pick([10, 20]), n = pick([2, 3]), r = P * Math.pow(1 + i / 100, n);
      return [`Uma cidade tem ${int(P)} habitantes e cresce ${i}% ao ano, sempre sobre o valor do ano anterior. Quantos habitantes terá após ${n} anos?`, r, [P * (1 + i * n / 100), P * Math.pow(1 + i / 100, n - 1), P * Math.pow(1 + i / 100, n + 1)], int, `${int(P)} × ${num(1 + i / 100)}^${n} = ${int(r)}.`]; }],
  ]);

  add("Matemática", "Regra de três", ["regra de tres", "proporc", "razao", "grandezas"], [
    [0, () => { const s = rnd(3, 8), h1 = rnd(2, 5), h2 = rnd(6, 12), d1 = s * h1;
      return [`Uma tropa em marcha percorre ${d1} km em ${h1} horas. Mantendo o ritmo, quantos quilômetros percorrerá em ${h2} horas?`, s * h2, [d1 + h2, s * h2 + s, d1 * h2 / (h1 + 1)], un("km"), `Velocidade = ${d1} ÷ ${h1} = ${s} km/h; em ${h2} h: ${s * h2} km.`]; }],
    [1, () => { let N, d, M; do { N = pick([12, 15, 20, 24, 30]); d = pick([6, 8, 10, 12, 15]); M = pick([10, 12, 16, 18, 20, 24, 36, 40, 45, 60]); } while ((N * d) % M || M === N);
      const r = N * d / M;
      return [`${N} soldados constroem uma trincheira em ${d} dias, no mesmo ritmo. Em quantos dias ${M} soldados fariam o mesmo serviço?`, r, [d * M / N, d + M - N, d * 2], un("dias"), `Grandezas inversamente proporcionais: ${N} × ${d} = ${M} × x, logo x = ${num(r)}.`]; }],
    [2, () => { const N1 = pick([4, 6, 8, 10]), h1 = pick([4, 6, 8]), d1 = pick([3, 5, 6, 10]), N2 = pick([6, 8, 12, 15, 16, 20]), h2 = pick([4, 6, 8, 10]), d2 = pick([4, 6, 8, 10]);
      const m1 = N1 * h1 * d1 / 2, m2 = N2 * h2 * d2 / 2;
      return [`${N1} soldados, trabalhando ${h1} horas por dia durante ${d1} dias, abrem ${m1} metros de vala. Quantos metros abrirão ${N2} soldados, trabalhando ${h2} horas por dia durante ${d2} dias, no mesmo ritmo?`, m2, [m1 * N2 / N1, m1 * N2 * h2 / (N1 * h1), m2 / 2, m2 + m1], un("m"), `Todas as grandezas são diretamente proporcionais: x = ${m1} × (${N2}/${N1}) × (${h2}/${h1}) × (${d2}/${d1}) = ${num(m2)}.`]; }],
  ]);

  add("Matemática", "Juros", ["juros", "financeira", "capital", "montante"], [
    [0, () => { const C = rnd(2, 20) * 500, i = pick([1, 2, 3, 4, 5]), t = pick([6, 8, 10, 12, 18, 24]), J = C * i * t / 100;
      return [`Um capital de ${money(C)} é aplicado a juros simples de ${i}% ao mês durante ${t} meses. Os juros obtidos são de:`, J, [C + J, J / 2, J * 2, C * i / 100], money, `J = C·i·t = ${money(C)} × ${i / 100} × ${t} = ${money(J)}.`]; }],
    [1, () => { const C = rnd(1, 20) * 1000, i = pick([10, 20]), M = C * Math.pow(1 + i / 100, 2);
      return [`Um capital de ${money(C)} é aplicado a juros compostos de ${i}% ao ano. O montante após 2 anos é:`, M, [C * (1 + 2 * i / 100), C * (1 + i / 100), M - C], money, `M = ${money(C)} × ${num(1 + i / 100)}² = ${money(M)}.`]; }],
    [1, () => { const i = pick([2, 4, 5, 10, 20, 25]), t = 100 / i;
      return [`Em quantos meses um capital dobra, a juros simples de ${i}% ao mês?`, t, [200 / i, 50 / i, 100 - i], un("meses"), `Os juros devem igualar o capital: ${i}% × t = 100%, logo t = ${num(t)} meses.`]; }],
    [2, () => { const i = pick([10, 20]), n = pick([2, 3]), tot = (Math.pow(1 + i / 100, n) - 1) * 100;
      return [`Uma aplicação a juros compostos rendeu ${num(tot)}% em ${n} meses. A taxa mensal, constante, foi de:`, i, [tot / n, tot, i + 5, tot / (n + 1)], pct, `(1 + i)^${n} = ${num(1 + tot / 100, 3)}, logo 1 + i = ${num(1 + i / 100)} e i = ${i}%.`]; }],
  ]);

  add("Matemática", "Progressão aritmética", ["pa", "progressao aritmetica", "aritmetica", "progressao"], [
    [0, () => { const a1 = rnd(2, 15), r = rnd(2, 9), n = rnd(8, 20), an = a1 + (n - 1) * r;
      return [`Em uma progressão aritmética de primeiro termo ${a1} e razão ${r}, o termo de ordem ${n} vale:`, an, [an + r, an - r, a1 * n, a1 + n * r + r], int, `aₙ = a₁ + (n − 1)·r = ${a1} + ${n - 1}·${r} = ${an}.`]; }],
    [1, () => { const a1 = rnd(2, 12), r = rnd(2, 8), n = rnd(10, 25), an = a1 + (n - 1) * r, S = n * (a1 + an) / 2;
      return [`Em uma PA, o primeiro termo é ${a1} e a razão é ${r}. A soma dos ${n} primeiros termos é:`, S, [2 * S, S + an, S - a1, n * an], int, `aₙ = ${an}; S = n(a₁ + aₙ)/2 = ${n}(${a1} + ${an})/2 = ${int(S)}.`]; }],
    [2, () => { const a1 = rnd(1, 12), r = rnd(2, 8), p = rnd(3, 5), q = rnd(8, 12), k = rnd(18, 30), ap = a1 + (p - 1) * r, aq = a1 + (q - 1) * r, ak = a1 + (k - 1) * r;
      return [`Em uma PA, o termo de ordem ${p} vale ${ap} e o de ordem ${q} vale ${aq}. O termo de ordem ${k} é:`, ak, [ak + r, ak - r, aq + (k - q), ak + 2 * r], int, `r = (${aq} − ${ap})/(${q} − ${p}) = ${r}; a${k} = ${aq} + ${k - q}·${r} = ${ak}.`]; }],
  ]);

  add("Matemática", "Progressão geométrica", ["pg", "progressao geometrica", "geometrica", "progressao"], [
    [0, () => { const a1 = pick([1, 2, 3, 5]), q = pick([2, 3]), n = rnd(4, 7), an = a1 * Math.pow(q, n - 1);
      return [`Em uma PG de primeiro termo ${a1} e razão ${q}, o termo de ordem ${n} vale:`, an, [a1 * Math.pow(q, n), a1 * q * n, a1 * Math.pow(q, n - 2)], int, `aₙ = a₁·q^(n−1) = ${a1}·${q}^${n - 1} = ${int(an)}.`]; }],
    [1, () => { const a1 = pick([1, 2, 3, 5]), q = pick([2, 3]), n = rnd(4, 7), S = a1 * (Math.pow(q, n) - 1) / (q - 1);
      return [`A soma dos ${n} primeiros termos da PG de primeiro termo ${a1} e razão ${q} é:`, S, [a1 * Math.pow(q, n - 1), S + a1, a1 * Math.pow(q, n)], int, `S = a₁(qⁿ − 1)/(q − 1) = ${a1}(${q}^${n} − 1)/${q - 1} = ${int(S)}.`]; }],
    [2, () => { const [qs, q] = pick([["1/2", 1 / 2], ["1/3", 1 / 3], ["1/4", 1 / 4], ["2/3", 2 / 3], ["3/4", 3 / 4]]), a1 = rnd(1, 8) * 12, S = a1 / (1 - q);
      return [`A soma dos infinitos termos da PG de primeiro termo ${a1} e razão ${qs} é:`, S, [a1 * (1 + q), a1 / q, a1 * q, a1], num, `S = a₁/(1 − q) = ${a1}/(1 − ${qs}) = ${num(S)}.`]; }],
  ]);

  add("Matemática", "Equação do 2º grau", ["2º grau", "2o grau", "segundo grau", "equacao", "bhaskara", "raizes"], [
    [0, () => { const [r1, r2] = eqRoots(), s = r1 + r2, p = r1 * r2;
      return [`A soma das raízes da equação ${poly(1, -s, p)} = 0 é:`, s, [p, -s, s + p, -p], int, `Soma = −b/a = ${s}. As raízes são ${r1} e ${r2}.`]; }],
    [1, () => { const [r1, r2] = eqRoots(), s = r1 + r2, p = r1 * r2, M = Math.max(r1, r2);
      return [`A maior raiz da equação ${poly(1, -s, p)} = 0 é:`, M, [Math.min(r1, r2), -M, s, p], int, `Soma ${s} e produto ${p}: as raízes são ${r1} e ${r2}.`]; }],
    [2, () => { const [r1, r2] = eqRoots(), a = pick([1, 2, 3]), s = r1 + r2, p = r1 * r2, r = s * s - 2 * p;
      return [`A soma dos quadrados das raízes da equação ${poly(a, -a * s, a * p)} = 0 é:`, r, [s * s, s * s + 2 * p, p * p, s * s - p], int, `Com S = ${s} e P = ${p}: r₁² + r₂² = S² − 2P = ${s * s} − ${2 * p} = ${r}.`]; }],
    [2, () => { const [r1, r2] = eqRoots(), s = r1 + r2, p = r1 * r2, r = s * s * s - 3 * s * p;
      return [`A soma dos cubos das raízes da equação ${poly(1, -s, p)} = 0 é:`, r, [s * s * s, s * s * s + 3 * s * p, (s * s - 2 * p) * s, s * p], int, `r₁³ + r₂³ = S³ − 3SP = ${s ** 3} − ${3 * s * p} = ${r}.`]; }],
  ]);

  add("Matemática", "Análise combinatória", ["combinat", "anagrama", "permuta", "arranjo", "contagem", "fatorial"], [
    [0, () => { const w = pick(["MARINHA", "SOLDADO", "TENENTE", "CABO", "PATRULHA", "SARGENTO", "ALMIRANTE", "COMANDO"]); const cnt = {};
      w.split("").forEach((c) => (cnt[c] = (cnt[c] || 0) + 1));
      const r = Object.values(cnt).reduce((acc, c) => acc / fat(c), fat(w.length));
      return [`O número de anagramas da palavra ${w} é:`, r, [fat(w.length), fat(w.length) / 2, fat(w.length - 1)], int, `${w.length}! dividido pelo fatorial de cada letra repetida = ${int(r)}.`]; }],
    [1, () => { const n = rnd(8, 14), k = rnd(2, 4), r = comb(n, k);
      return [`De um pelotão com ${n} soldados, deve-se escolher uma equipe de ${k} para uma missão. De quantas formas isso pode ser feito?`, r, [fat(n) / fat(n - k), n * k, r + n], int, `C(${n}, ${k}) = ${int(r)}.`]; }],
    [1, () => { const n = rnd(5, 8);
      return [`De quantas maneiras ${n} oficiais podem sentar-se em torno de uma mesa redonda, considerando equivalentes as rotações?`, fat(n - 1), [fat(n), fat(n - 2), 2 * fat(n - 1)], int, `Permutação circular: (${n} − 1)! = ${int(fat(n - 1))}.`]; }],
    [2, () => { const n = rnd(5, 7);
      return [`De quantas maneiras ${n} militares podem formar uma fila se dois deles, específicos, devem ficar sempre juntos?`, 2 * fat(n - 1), [fat(n), fat(n - 1), 2 * fat(n)], int, `Tratando a dupla como um bloco: (${n} − 1)! × 2 = ${int(2 * fat(n - 1))}.`]; }],
    [2, () => { const N = pick([8, 10, 12, 15]);
      return [`O número de soluções inteiras não negativas de x + y + z = ${N} é:`, comb(N + 2, 2), [comb(N, 2), comb(N + 1, 2), N * N], int, `C(${N} + 2, 2) = ${int(comb(N + 2, 2))}.`]; }],
  ]);

  add("Matemática", "Probabilidade", ["probab", "urna", "dados"], [
    [0, () => { const a = rnd(3, 9), b = rnd(3, 9), n = a + b;
      return [`Uma urna contém ${a} bolas vermelhas e ${b} azuis. Sorteando uma bola ao acaso, a probabilidade de ela ser vermelha é:`, frac(a, n), [frac(b, n), frac(a, b), frac(1, n), frac(a + 1, n)], ident, `Casos favoráveis ${a} em ${n} possíveis: ${frac(a, n)}.`]; }],
    [1, () => { const s = rnd(4, 10), c = 6 - Math.abs(7 - s);
      return [`Lançam-se dois dados honestos. A probabilidade de que a soma dos pontos seja ${s} é:`, frac(c, 36), [frac(c, 12), frac(c + 1, 36), frac(c - 1, 36), frac(1, s)], ident, `Há ${c} combinações de 36 possíveis.`]; }],
    [1, () => { const a = rnd(3, 8), b = rnd(3, 8), n = a + b;
      return [`Uma urna tem ${a} bolas vermelhas e ${b} azuis. Retiram-se duas bolas, sem reposição. A probabilidade de ambas serem vermelhas é:`, frac(a * (a - 1), n * (n - 1)), [frac(a * a, n * n), frac(a, n), frac(a * (a - 1), n * n), frac(2 * a, n * (n - 1))], ident, `(${a}/${n}) × (${a - 1}/${n - 1}) = ${frac(a * (a - 1), n * (n - 1))}.`]; }],
    [2, () => { const a = rnd(3, 8), b = rnd(3, 8), n = a + b;
      return [`Uma urna tem ${a} bolas vermelhas e ${b} azuis. Retiram-se duas bolas, sem reposição. A probabilidade de que pelo menos uma seja vermelha é:`, frac(n * (n - 1) - b * (b - 1), n * (n - 1)), [frac(a * (a - 1), n * (n - 1)), frac(a, n), frac(b * (b - 1), n * (n - 1)), frac(2 * a, n)], ident, `Complementar: 1 − (${b}/${n})(${b - 1}/${n - 1}) = ${frac(n * (n - 1) - b * (b - 1), n * (n - 1))}.`]; }],
    [2, () => { const s = pick([7, 8, 9, 10]), tot = 6 - Math.abs(7 - s);
      return [`Lançam-se dois dados honestos e a soma dos pontos é ${s}. A probabilidade de que pelo menos um dos dados mostre 6 é:`, frac(2, tot), [frac(1, tot), frac(11, 36), frac(3, tot), frac(2, 36)], ident, `Soma ${s} tem ${tot} casos; apenas 2 deles têm um 6. Probabilidade condicional: 2/${tot}.`]; }],
  ]);

  const afim = () => { const a = rnd(2, 7), b = rnd(-5, 9); return [a, b, `${a}x${term(b, "")}`]; };
  add("Matemática", "Funções", ["funcao", "funcoes", "afim", "quadratica", "vertice"], [
    [0, () => { const [a, b, s] = afim(), k = rnd(2, 9);
      return [`Sendo f(x) = ${s}, o valor de f(${k}) é:`, a * k + b, [a + k + b, a * k - b, (a + b) * k], int, `f(${k}) = ${a}·${k} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${a * k + b}.`]; }],
    [1, () => { const [a, b, s] = afim(), [c, d, t] = afim(), k = rnd(2, 6);
      return [`Sendo f(x) = ${s} e g(x) = ${t}, o valor de f(g(${k})) é:`, a * (c * k + d) + b, [c * (a * k + b) + d, a * k + b + c * k + d, a * c * k + b + d], int, `g(${k}) = ${c * k + d}; f(${c * k + d}) = ${a * (c * k + d) + b}.`]; }],
    [1, () => { const h = rnd(2, 7), m = rnd(-9, 5);
      return [`O valor mínimo da função f(x) = ${poly(1, -2 * h, h * h + m)} é:`, m, [h, h * h + m, -m, h + m], int, `Vértice em x = ${h}; f(${h}) = ${m}.`]; }],
    [2, () => { const A = pick([2, 3]), h = rnd(2, 6), m = rnd(-9, 5);
      return [`O valor mínimo da função f(x) = ${poly(A, -2 * A * h, A * h * h + m)} é:`, m, [h, A * h * h + m, -m, -A * m], int, `Escrevendo na forma ${A}(x − ${h})² + (${m}), o mínimo é ${m}, atingido em x = ${h}.`]; }],
  ]);

  /* ===================== FÍSICA ===================== */
  add("Física", "Cinemática", ["cinemat", "mru", "mruv", "velocidade", "movimento"], [
    [0, () => { const v = pick([36, 54, 72, 90, 108]), t = pick([5, 10, 15, 20, 30]), vm = v / 3.6;
      return [`Um veículo trafega a ${v} km/h em movimento uniforme. A distância percorrida em ${t} s é:`, vm * t, [v * t, vm + t, v * t / 3], un("m"), `${v} km/h = ${vm} m/s; d = ${vm} × ${t} = ${vm * t} m.`]; }],
    [1, () => { const va = pick([10, 15, 20]), vb = pick([5, 10, 15]), t = pick([4, 5, 6, 8, 10]), d = (va + vb) * t;
      return [`Dois veículos partem simultaneamente de pontos distantes ${d} m, um em direção ao outro, com velocidades constantes de ${va} m/s e ${vb} m/s. Eles se encontram após:`, t, [d / va, d / vb, d / Math.abs(va - vb), t * 2], un("s"), `Velocidade relativa ${va + vb} m/s; t = ${d} ÷ ${va + vb} = ${t} s.`]; }],
    [2, () => { let v0, a, t; do { v0 = pick([0, 2, 4, 5, 6, 10]); a = pick([2, 3, 4, 6]); t = pick([2, 4, 5, 6, 8, 10]); } while ((a * t * t) % 2);
      const d = v0 * t + a * t * t / 2;
      return [`Um móvel ${v0 ? `parte com velocidade de ${v0} m/s` : "parte do repouso"} e aceleração constante de ${a} m/s². A distância percorrida em ${t} s é:`, d, [v0 * t + a * t * t, v0 * t, (v0 + a * t) * t, a * t * t], un("m"), `ΔS = v₀t + at²/2 = ${v0}·${t} + ${a}·${t}²/2 = ${d} m.`]; }],
  ]);

  add("Física", "Dinâmica", ["dinamic", "newton", "forca", "atrito"], [
    [0, () => { const m = rnd(2, 12), a = rnd(2, 9), F = m * a;
      return [`Um corpo de ${m} kg sofre uma força resultante de ${F} N. Sua aceleração é:`, a, [F * m, F - m, m / F * 10], un("m/s²"), `a = F/m = ${F}/${m} = ${a} m/s².`]; }],
    [1, () => { const m = pick([2, 4, 10]), mu = pick([10, 20, 25, 50]), Fat = mu * m / 10, a = rnd(2, 6), F = Fat + m * a;
      return [`Um bloco de ${m} kg é puxado em uma superfície horizontal com coeficiente de atrito ${num(mu / 100)} por uma força horizontal de ${F} N (g = 10 m/s²). Sua aceleração é:`, a, [F / m, (F + Fat) / m, (F - Fat) / (m + 2), a + 1], un("m/s²"), `Fat = μ·m·g = ${Fat} N; a = (${F} − ${Fat})/${m} = ${a} m/s².`]; }],
    [2, () => { const m1 = rnd(2, 6), m2 = rnd(2, 8), a = rnd(2, 5), F = (m1 + m2) * a;
      return [`Dois blocos, de ${m1} kg e ${m2} kg, ligados por um fio ideal, são puxados por uma força horizontal de ${F} N aplicada no bloco de ${m1} kg, sobre superfície lisa. A tração no fio é:`, m2 * a, [F, m1 * a, F / 2, a], un("N"), `a = ${F}/${m1 + m2} = ${a} m/s²; a tração acelera o bloco de ${m2} kg: T = ${m2}·${a} = ${m2 * a} N.`]; }],
  ]);

  add("Física", "Energia e trabalho", ["energia", "trabalho", "potencia", "mecanica"], [
    [0, () => { const m = pick([2, 4, 6, 8, 10]), v = pick([2, 4, 6, 10]), E = m * v * v / 2;
      return [`A energia cinética de um corpo de ${m} kg a ${v} m/s é:`, E, [m * v * v, m * v / 2, m * v * v / 4, m * v], un("J"), `Ec = mv²/2 = ${m}·${v}²/2 = ${E} J.`]; }],
    [1, () => { const h = pick([5, 20, 45, 80, 125]), v = Math.sqrt(20 * h);
      return [`Um corpo é abandonado de ${h} m de altura (g = 10 m/s², sem resistência do ar). Sua velocidade ao chegar ao solo é:`, v, [Math.sqrt(10 * h), h, v * 2, v / 2], un("m/s"), `v = √(2gh) = √${20 * h} = ${v} m/s.`]; }],
    [2, () => { const m = pick([2, 4, 5]), h = pick([5, 10, 20]), v = rnd(2, Math.floor(Math.sqrt(20 * h)) - 2), W = m * 10 * h - m * v * v / 2;
      return [`Um bloco de ${m} kg desce uma rampa de ${h} m de altura e chega à base com ${v} m/s (g = 10 m/s²). A energia dissipada pelo atrito é:`, W, [m * 10 * h, m * v * v / 2, m * 10 * h + m * v * v / 2], un("J"), `Dissipada = mgh − mv²/2 = ${m * 10 * h} − ${m * v * v / 2} = ${W} J.`]; }],
  ]);

  add("Física", "Eletricidade", ["eletric", "resistor", "circuito", "corrente", "ohm", "consumo"], [
    [0, () => { const R = pick([2, 4, 5, 10, 20]), i = pick([2, 3, 4, 5]);
      return [`Um resistor de ${R} Ω é percorrido por uma corrente de ${i} A. A tensão entre seus terminais é:`, R * i, [R + i, R / i, R * i * 2], un("V"), `U = R·i = ${R}·${i} = ${R * i} V.`]; }],
    [1, () => { const [R1, R2] = pick([[6, 3], [12, 4], [20, 5], [30, 15], [12, 6], [60, 20], [10, 10]]), eq = R1 * R2 / (R1 + R2);
      return [`Dois resistores de ${R1} Ω e ${R2} Ω são associados em paralelo. A resistência equivalente é:`, eq, [R1 + R2, (R1 + R2) / 2, R1 * R2], un("Ω"), `Req = (${R1}·${R2})/(${R1} + ${R2}) = ${num(eq)} Ω.`]; }],
    [2, () => { const P = pick([100, 200, 500, 1000, 1500, 2000]), h = pick([2, 3, 4, 5]), k = P * h * 30 / 1000;
      return [`Um aparelho de ${int(P)} W funciona ${h} horas por dia durante 30 dias. O consumo de energia, em kWh, é:`, k, [P * h * 30, P * h / 1000, P * h * 30 / 100], un("kWh"), `E = ${int(P)}/1000 kW × ${h} h × 30 = ${num(k)} kWh.`]; }],
  ]);

  add("Física", "Termologia", ["termo", "calor", "calorimetria", "temperatura"], [
    [0, () => { const m = pick([100, 200, 250, 500]), Ti = pick([10, 20, 25]), Tf = pick([50, 60, 70, 80]), Q = m * (Tf - Ti);
      return [`Quantas calorias são necessárias para aquecer ${m} g de água de ${Ti} °C a ${Tf} °C? (c = 1 cal/g·°C)`, Q, [m * Tf, m * Ti, m + Tf - Ti], un("cal"), `Q = m·c·ΔT = ${m}·1·${Tf - Ti} = ${int(Q)} cal.`]; }],
    [1, () => { let m1, m2, T1, T2, Tf, g = 0; do { m1 = pick([100, 200, 300, 400]); m2 = pick([100, 200, 300, 400]); T1 = pick([10, 20, 30, 40]); T2 = pick([60, 70, 80, 90]); Tf = (m1 * T1 + m2 * T2) / (m1 + m2); } while (!Number.isInteger(Tf) && ++g < 60);
      return [`Misturam-se ${m1} g de água a ${T1} °C com ${m2} g de água a ${T2} °C, em um recipiente isolado. A temperatura de equilíbrio é:`, Tf, [(T1 + T2) / 2, T2 - T1, Tf + 5, Tf - 5], un("°C"), `Tf = (${m1}·${T1} + ${m2}·${T2})/${m1 + m2} = ${num(Tf)} °C.`]; }],
    [2, () => { const m = pick([100, 200, 300, 500]), T = pick([10, 20, 30]), Q = m * (80 + T);
      return [`Quantas calorias são necessárias para transformar ${m} g de gelo a 0 °C em água a ${T} °C? (calor latente de fusão = 80 cal/g; c da água = 1 cal/g·°C)`, Q, [m * 80, m * T, m * (80 - T)], un("cal"), `Fusão: ${m}·80 = ${int(m * 80)} cal; aquecimento: ${m}·${T} = ${int(m * T)} cal; total ${int(Q)} cal.`]; }],
  ]);

  /* ===================== QUÍMICA ===================== */
  add("Química", "Concentração de soluções", ["concentr", "molar", "mol/l", "solucao", "diluicao", "mistura de solucoes"], [
    [0, () => { const [nome, M] = pick([["NaOH", 40], ["KOH", 56], ["NaCl", 58.5], ["HCl", 36.5], ["H₂SO₄", 98], ["glicose", 180]]), n = pick([0.1, 0.2, 0.5, 1, 2]), V = pick([250, 500, 1000]), m = n * M, C = n / (V / 1000);
      return [`Dissolvem-se ${num(m)} g de ${nome} (M = ${num(M)} g/mol) em água até completar ${V} mL de solução. A concentração, em mol/L, é:`, C, [m / (V / 1000), n * V / 1000, C / 2, C * 2], un("mol/L"), `n = ${num(m)}/${num(M)} = ${num(n)} mol; C = ${num(n)}/${num(V / 1000)} L = ${num(C)} mol/L.`]; }],
    [1, () => { const C1 = pick([2, 3, 4, 5, 6]), V1 = pick([50, 100, 200, 250]), k = pick([2, 4, 5, 10]), V2 = V1 * k, C2 = C1 / k;
      return [`${V1} mL de uma solução ${C1} mol/L são diluídos com água até ${V2} mL. A nova concentração é:`, C2, [C1 * k, C1 - k, C1 * V1 / 1000, C2 * 2], un("mol/L"), `C₁V₁ = C₂V₂ ⇒ C₂ = ${C1}·${V1}/${V2} = ${num(C2)} mol/L.`]; }],
    [2, () => { const V1 = pick([100, 200, 300, 400, 500]), V2 = pick([100, 200, 300, 400, 500]), C1 = pick([0.5, 1, 1.5]), C2 = pick([2, 2.5, 3]), C = (C1 * V1 + C2 * V2) / (V1 + V2);
      return [`Misturam-se ${V1} mL de solução ${num(C1)} mol/L de NaCl com ${V2} mL de solução ${num(C2)} mol/L do mesmo sal. A concentração final é:`, C, [(C1 + C2) / 2, C1 + C2, C + 0.5, C - 0.25], un("mol/L"), `n total = ${num(C1 * V1 / 1000)} + ${num(C2 * V2 / 1000)} mol; volume ${(V1 + V2) / 1000} L; C = ${num(C)} mol/L.`]; }],
  ]);

  add("Química", "pH e pOH", ["ph", "acido", "base", "poh"], [
    [0, () => { const k = rnd(2, 6);
      return [`Uma solução aquosa tem [H⁺] = 1 × ${ex(k)} mol/L. O seu pH é:`, k, [14 - k, k + 1, k - 1, 7 - k], num, `pH = −log[H⁺] = ${k}.`]; }],
    [1, () => { const k = rnd(2, 5), [c, lg] = pick([[2, 0.3], [4, 0.6], [5, 0.7], [8, 0.9]]), r = k - lg;
      return [`Dado log ${c} = ${num(lg)}, o pH de uma solução de HCl ${c} × ${ex(k)} mol/L (ionização total, 25 °C) é:`, r, [k, k + lg, 14 - r, k - 1], num, `pH = −log(${c} × ${ex(k)}) = ${k} − ${num(lg)} = ${num(r)}.`]; }],
    [1, () => { const a = pick([1, 2, 3]), n = pick([1, 2, 3]);
      return [`Uma solução de ácido forte tem pH = ${a}. Diluindo-a ${int(Math.pow(10, n))} vezes com água pura, o novo pH é:`, a + n, [a - n, a * n, 7, a + n + 1], num, `Cada diluição de 10 vezes aumenta o pH em 1: ${a} + ${n} = ${a + n}.`]; }],
    [2, () => { const k = pick([3, 4, 5]);
      return [`O pH de uma solução de Ba(OH)₂ 5 × ${ex(k)} mol/L (base forte, dissociação total, 25 °C) é:`, 15 - k, [14 - k, k - 1, 16 - k, k], num, `[OH⁻] = 2 × 5 × ${ex(k)} = ${ex(k - 1)} mol/L; pOH = ${k - 1}; pH = 14 − ${k - 1} = ${15 - k}.`]; }],
  ]);

  add("Química", "Estequiometria", ["estequi", "mol", "massa", "reacao", "rendimento", "limitante"], [
    [0, () => { const n = rnd(1, 5);
      return [`Na reação N₂ + 3 H₂ → 2 NH₃ (N = 14; H = 1), a massa de NH₃ obtida a partir de ${n} mol de N₂, com H₂ em excesso, é:`, 2 * n * 17, [n * 17, 3 * n * 17, 4 * n], un("g"), `${n} mol de N₂ formam ${2 * n} mol de NH₃; ${2 * n} × 17 = ${2 * n * 17} g.`]; }],
    [1, () => { const m = pick([2, 4, 6, 8, 10, 12]);
      return [`Na reação 2 H₂ + O₂ → 2 H₂O (H = 1; O = 16), ${m} g de H₂ reagem totalmente com O₂ e formam de água:`, 9 * m, [8 * m, 18 * m, m + 16], un("g"), `${m} g de H₂ = ${m / 2} mol, que formam ${m / 2} mol de H₂O = ${9 * m} g.`]; }],
    [1, () => { const m = pick([22, 44, 88, 132]), V = 3 * (m / 44) * 22.4;
      return [`Na combustão C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O (C₃H₈ = 44 g/mol), ${m} g de propano produzem, nas CNTP (22,4 L/mol), de CO₂:`, V, [(m / 44) * 22.4, 5 * (m / 44) * 22.4, 4 * (m / 44) * 22.4], un("L"), `${m} g = ${m / 44} mol de C₃H₈; formam ${3 * m / 44} mol de CO₂; × 22,4 = ${num(V)} L.`]; }],
    [2, () => { const mH = pick([2, 4, 6, 8, 10]), mO = pick([16, 32, 48, 64, 96]), eta = pick([100, 80, 75, 50]), nH = mH / 2, nO = mO / 32, w = Math.min(nH, 2 * nO), r = 18 * w * eta / 100;
      return [`Reagem ${mH} g de H₂ com ${mO} g de O₂ (2 H₂ + O₂ → 2 H₂O; H = 1; O = 16), com rendimento de ${eta}%. A massa de água obtida é:`, r, [18 * nH * eta / 100, 18 * 2 * nO * eta / 100, mH + mO, r / 2], un("g"), `nH₂ = ${num(nH)} mol e nO₂ = ${num(nO)} mol; o reagente limitante forma ${num(w)} mol de H₂O (${num(18 * w)} g); com ${eta}% de rendimento: ${num(r)} g.`]; }],
  ]);

  /* ===================== SORTEIO ===================== */
  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const hit = (k, texto, tokens) => (k.length <= 3 ? tokens.includes(k) : texto.includes(k));

  function tierFor(level, exam) {
    if (level === "fácil") return 0;
    if (level === "média") return 1;
    if (level === "difícil") return 2;
    const mapa = { ESA: [1, 1, 2], EsPCEx: [1, 2, 2], "Escola Naval": [2, 2, 1], IME: [2, 2, 2], EFOMM: [1, 2, 2] };
    return pick(mapa[exam] || [1, 2]);
  }

  function ajustar(q, n) {
    if (n >= q.alternativas.length) return q;
    const erradas = shuffle(q.alternativas.map((_, i) => i).filter((i) => i !== q.correta)).slice(0, q.alternativas.length - n);
    const keep = q.alternativas.map((_, i) => i).filter((i) => !erradas.includes(i));
    return { ...q, alternativas: keep.map((i) => q.alternativas[i]), correta: keep.indexOf(q.correta) };
  }

  const usadas = new Set(); // enunciados já mostrados nesta sessão (evita repetir entre listas)

  /* Devolve a lista de questões, ou null se o assunto não tem gerador. */
  return function gerarLista(subject, topic, level, exam, quantity, options) {
    let pool = G.filter((g) => subject === "Todas" || g.materia === subject);
    if (topic) {
      const t = norm(topic), tk = t.split(/[^a-z0-9]+/);
      pool = pool.filter((g) => norm(g.assunto).split(/\s+/).some((w) => w.length > 4 && t.includes(w)) || g.chaves.some((k) => hit(k, t, tk)));
    }
    if (!pool.length) return null;

    const out = [], seen = new Set(), filas = {};
    let order = shuffle(pool);
    if (usadas.size > 4000) usadas.clear();
    for (let guard = 0; out.length < quantity && guard < quantity * 60; guard++) {
      if (guard && guard % order.length === 0) order = shuffle(pool);
      const g = order[out.length % order.length];
      const tier = tierFor(level, exam);
      let cand = g.tpls.filter((x) => x[0] === tier);
      if (!cand.length) { const best = Math.min(...g.tpls.map((x) => Math.abs(x[0] - tier))); cand = g.tpls.filter((x) => Math.abs(x[0] - tier) === best); }
      const chave = g.assunto + tier; // percorre todos os modelos antes de repetir um
      if (!filas[chave] || !filas[chave].length) filas[chave] = shuffle(cand);
      const modelo = filas[chave].pop()[1];
      let q, tentativas = 0;
      do { // tenta outros números do mesmo modelo antes de aceitar um enunciado já visto
        const [e, c, w, f, x] = modelo();
        q = make(g.materia, g.assunto, e, c, w, f, x);
      } while ((seen.has(q.enunciado) || usadas.has(q.enunciado)) && ++tentativas < 15);
      if (seen.has(q.enunciado)) continue;
      seen.add(q.enunciado);
      usadas.add(q.enunciado);
      out.push(ajustar(q, options || 5));
    }
    return out;
  };
})();
