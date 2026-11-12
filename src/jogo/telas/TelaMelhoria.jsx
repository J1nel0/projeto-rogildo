import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import { construcoes, custoMelhoria, custosToque, formatar } from "../dadosJogo.js";
import styles from "./Estilizacao/TelaMelhoria.styles.js";

export default function TelaMelhoria({ jogo, onComprar }) {
	const opcoes = [
		...custosToque.map((custo, etapa) => ({ id: `toque-${etapa}`, titulo: `Toque · Melhoria ${etapa + 1}`, descricao: "Dobra os novelos por toque.", icone: "hand-left-outline", custo, etapa, tipo: "toque", nivel: jogo.nivelToque || 0, possui: true })),
		...construcoes.flatMap((item, indice) => [0, 1, 2].map((etapa) => ({ id: `${indice}-${etapa}`, titulo: `${item.titulo} · Melhoria ${etapa + 1}`, descricao: `Dobra a produção de ${item.titulo}.`, icone: item.icone, custo: custoMelhoria(item, etapa), etapa, indice, tipo: "construcao", nivel: jogo.niveis[indice] || 0, possui: (jogo.quantidades[indice] || 0) > 0 }))),
	].filter((item) => item.etapa >= item.nivel).map((item) => ({ ...item, bloqueada: !item.possui || item.etapa !== item.nivel }));
	opcoes.sort((a, b) => {
		const prioridadeA = a.bloqueada ? 2 : a.custo <= jogo.novelos ? 0 : 1;
		const prioridadeB = b.bloqueada ? 2 : b.custo <= jogo.novelos ? 0 : 1;
		return prioridadeA - prioridadeB || a.custo - b.custo;
	});
	return <ScrollView style={styles.tela} contentContainerStyle={styles.container}>
		<View style={styles.cabecalho}><Text style={styles.titulo}>Melhorias</Text><Text style={styles.descricao}>Disponível: {formatar(jogo.novelos)} novelos</Text></View>
		<View style={styles.lista}>
			{opcoes.length === 0 && <Text style={styles.descricao}>Você comprou todas as melhorias!</Text>}
			{opcoes.map((item) => <View key={item.id} style={styles.cartao}>
				<View style={styles.topoCartao}>
					<View style={styles.iconeContainer}><Ionicons name={item.icone} size={26} color="#d94b00" /></View>
					<View style={styles.informacoes}><Text style={styles.nome}>{item.titulo}</Text><Text style={styles.texto}>{item.descricao}</Text></View>
				</View>
				<Pressable accessibilityRole="button" disabled={item.bloqueada || jogo.novelos < item.custo} onPress={() => item.tipo === "toque" ? onComprar(item.etapa, "toque") : onComprar(item.indice, true)} style={[styles.botao, (item.bloqueada || jogo.novelos < item.custo) && { opacity: 0.5 }]}>
					<Text style={styles.textoBotao}>{item.bloqueada ? "Bloqueada · " : "Melhorar · "}{formatar(item.custo)} novelos</Text>
				</Pressable>
			</View>)}
		</View>
	</ScrollView>;
}
