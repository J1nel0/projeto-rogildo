import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import { construcoes, custoConstrucao, formatar } from "../dadosJogo.js";
import styles from "./Estilizacao/TelaConstrucao.styles.js";

export default function TelaConstrucao({ jogo, onComprar }) {
	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Construções</Text>
				<Text style={styles.descricao}>Disponível: {formatar(jogo.novelos)} novelos</Text>
			</View>
			<View style={styles.lista}>
				{construcoes.map((item, i) => {
					const quantidade = jogo.quantidades[i] || 0;
					const custo = custoConstrucao(item, quantidade);
					return <View key={item.titulo} style={styles.cartao}>
						<View style={styles.topoCartao}>
							<View style={styles.iconeContainer}><Ionicons name={item.icone} size={28} color="#d94b00" /></View>
							<View style={styles.informacoes}>
								<Text style={styles.nome}>{item.titulo} · {quantidade}</Text>
								<Text style={styles.texto}>Produção por unidade: {formatar(item.producao * 2 ** (jogo.niveis[i] || 0))}/s</Text>
								<Text style={styles.custo}>{formatar(custo)} novelos</Text>
							</View>
						</View>
						<Pressable accessibilityRole="button" disabled={jogo.novelos < custo} onPress={() => onComprar(i)} style={[styles.botao, jogo.novelos < custo && { opacity: 0.5 }]}><Text style={styles.textoBotao}>Construir</Text></Pressable>
					</View>;
				})}
			</View>
		</ScrollView>
	);
}
