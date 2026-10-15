import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./Estilizacao/TelaMelhoria.styles.js";

const melhorias = [
	{
		icone: "finger-print-outline",
		titulo: "Toque habilidoso",
		descricao: "+1 novelo produzido por toque.",
		nivel: "Nível 1",
		custo: "25 novelos",
	},
	{
		icone: "speedometer-outline",
		titulo: "Fiação veloz",
		descricao: "+10% na produção automática.",
		nivel: "Nível 0",
		custo: "100 novelos",
	},
	{
		icone: "sparkles-outline",
		titulo: "Lã de qualidade",
		descricao: "Aumenta o valor de cada novelo.",
		nivel: "Nível 0",
		custo: "300 novelos",
	},
];

export default function TelaMelhoria() {
	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Melhorias</Text>
				<Text style={styles.descricao}>Fortaleça seus toques e suas construções.</Text>
			</View>

			<View style={styles.lista}>
				{melhorias.map((melhoria) => (
					<View key={melhoria.titulo} style={styles.cartao}>
						<View style={styles.topoCartao}>
							<View style={styles.iconeContainer}>
								<Ionicons name={melhoria.icone} size={26} color="#6c3cb5" />
							</View>
							<View style={styles.informacoes}>
								<Text style={styles.nome}>{melhoria.titulo}</Text>
								<Text style={styles.texto}>{melhoria.descricao}</Text>
							</View>
							<Text style={styles.nivel}>{melhoria.nivel}</Text>
						</View>

						<Pressable accessibilityRole="button" style={styles.botao}>
							<Text style={styles.textoBotao}>Melhorar · {melhoria.custo}</Text>
						</Pressable>
					</View>
				))}
			</View>
		</ScrollView>
	);
}
