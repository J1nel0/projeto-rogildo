export const construcoes = [
	{ titulo: "Patinha", icone: "paw-outline", custo: 50, producao: 1 },
	{ titulo: "Gato Pastoreiro", icone: "hammer-outline", custo: 1000, producao: 2 },
	{ titulo: "Gato Operário", icone: "business-outline", custo: 12000, producao: 10 },
	{ titulo: "Gato Nuclear", icone: "flash-outline", custo: 100000, producao: 40 },
	{ titulo: "Gato Astronauta", icone: "rocket-outline", custo: 800000, producao: 300 },
	{ titulo: "Gato Minerador", icone: "planet-outline", custo: 5000000, producao: 2000 },
	{ titulo: "Gato Artesão", icone: "construct-outline", custo: 30000000, producao: 9000 },
	{ titulo: "Gato Cientista", icone: "flask-outline", custo: 150000000, producao: 40000 },
	{ titulo: "Gato Robô", icone: "hardware-chip-outline", custo: 750000000, producao: 180000 },
	{ titulo: "Gato Galáctico", icone: "star-outline", custo: 3000000000, producao: 800000 },
	{ titulo: "Gato Cósmico", icone: "sparkles-outline", custo: 12000000000, producao: 3600000 },
	{ titulo: "Gato Alquimista", icone: "flask-outline", custo: 50000000000, producao: 12000000 },
	{ titulo: "Gato Inventor", icone: "bulb-outline", custo: 200000000000, producao: 40000000 },
	{ titulo: "Gato Viajante", icone: "compass-outline", custo: 750000000000, producao: 130000000 },
	{ titulo: "Gato Guardião", icone: "shield-outline", custo: 2500000000000, producao: 400000000 },
	{ titulo: "Gato Mago", icone: "sparkles-outline", custo: 8000000000000, producao: 1200000000 },
	{ titulo: "Gato Lendário", icone: "ribbon-outline", custo: 25000000000000, producao: 3500000000 },
	{ titulo: "Gato Temporal", icone: "hourglass-outline", custo: 75000000000000, producao: 10000000000 },
	{ titulo: "Gato Estelar", icone: "star-outline", custo: 200000000000000, producao: 28000000000 },
	{ titulo: "Gato Dimensional", icone: "planet-outline", custo: 500000000000000, producao: 75000000000 },
	{ titulo: "Gato Infinito", icone: "infinite-outline", custo: 1000000000000000, producao: 160000000000 },
].map((item) => ({ ...item, custo: item.custo * 2 }));

export const custoConstrucao = (item, quantidade) => Math.floor(item.custo * 1.3 ** quantidade);
export const custoMelhoria = (item, nivel) => item.custo * [16, 100, 600][nivel];
export const custosToque = [1000, 10000, 100000];
export function criarJogoInicial(perfil = {}) {
	return { versao: 2, nome: perfil.nome, vibracao: perfil.vibracao, novelos: 0, total: 0, quantidades: [1, ...Array(construcoes.length - 1).fill(0)], niveis: Array(construcoes.length).fill(0), conquistas: [] };
}
export function migrarJogo(jogo) {
	if (jogo.versao >= 2) {
		if (jogo.total === 0 && !jogo.quantidades.some((quantidade) => quantidade > 0) && !(jogo.nivelToque > 0) && !jogo.niveis.some((nivel) => nivel > 0)) {
			return { ...jogo, quantidades: [1, ...jogo.quantidades.slice(1)] };
		}
		return jogo;
	}
	return { ...jogo, versao: 2, quantidades: [1 + (jogo.nivelPata || 0), ...(jogo.quantidades || [])], niveis: [0, ...(jogo.niveis || [])], melhoriasPataAntigas: jogo.nivelPata || 0, nivelPata: 0 };
}
export const conquistasDisponiveis = [
	{ id: "primeiro", titulo: "Primeiro novelo!", descricao: "Produza seu primeiro novelo." },
	{ id: "cem", titulo: "100 novelos produzidos!", descricao: "Produza 100 novelos." },
	{ id: "mil", titulo: "1.000 novelos produzidos!", descricao: "Produza 1.000 novelos." },
	{ id: "construcao", titulo: "Primeira construção!", descricao: "Compre uma construção." },
	{ id: "melhoria", titulo: "Primeira melhoria!", descricao: "Compre uma melhoria." },
	{ id: "milhao", titulo: "1 milhão de novelos produzidos!", descricao: "Produza 1 milhão de novelos." },
];
export const producaoDasPatas = (jogo) => (jogo.quantidades[0] || 0) * 2 ** (jogo.niveis[0] || 0);
export const producaoPorSegundo = (jogo) => construcoes.reduce((total, item, i) => total + item.producao * (jogo.quantidades[i] || 0) * 2 ** (jogo.niveis[i] || 0), 0);
export const producaoPorToque = (jogo) => 2 ** (jogo.nivelToque || 0);
export function comprarItem(jogo, indice, tipo) {
	const nivelToque = jogo.nivelToque || 0;
	if (tipo === "toque") {
		if (indice !== nivelToque || nivelToque >= custosToque.length || jogo.novelos < custosToque[nivelToque]) return jogo;
		return { ...jogo, novelos: jogo.novelos - custosToque[nivelToque], nivelToque: nivelToque + 1 };
	}
	const item = construcoes[indice];
	if (!item) return jogo;
	const quantidade = jogo.quantidades[indice] || 0;
	const nivel = jogo.niveis[indice] || 0;
	if (tipo === "melhoria" && (!quantidade || nivel >= 3)) return jogo;
	const custo = tipo === "melhoria" ? custoMelhoria(item, nivel) : custoConstrucao(item, quantidade);
	if (jogo.novelos < custo) return jogo;
	const campo = tipo === "melhoria" ? "niveis" : "quantidades";
	const valores = [...jogo[campo]];
	valores[indice] = (valores[indice] || 0) + 1;
	return { ...jogo, novelos: jogo.novelos - custo, [campo]: valores };
}
export const formatar = (valor) => Math.floor(valor).toLocaleString("pt-BR");
