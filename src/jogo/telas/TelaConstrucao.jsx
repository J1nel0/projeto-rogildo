import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./Estilizacao/TelaConstrucao.styles.js";

const construcoes = [
	{
		icone: "hammer-outline",
		titulo: "Gato Pastoreiro",
		descricao: "Produz novelos automaticamente a cada segundo.",
		custo: "50 novelos",
	},
	{
		icone: "business-outline",
		titulo: "Gato Operário",
		descricao: "Aumenta a capacidade total de produção.",
		custo: "250 novelos",
	},
	{
		icone: "storefront-outline",
		titulo: "Gato Nuclear",
		descricao: "Uma construção avançada para produção em escala.",
		custo: "1.000 novelos",
	},
	{
		icone: "rocket-outline",
		titulo: "Gato Astronauta",
		descricao: "Leva a produção de novelos para o espaço.",
		custo: "10.000 novelos",
	},
	{
		icone: "planet-outline",
		titulo: "Gato Minerador",
		descricao: "Explora novos planetas para produção de novelos.",
		custo: "100.000 novelos",
	}
];


export default function TelaConstrucao() {
	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Construções</Text>
				<Text style={styles.descricao}>Expanda sua produção de novelos.</Text>
			</View>

			<View style={styles.lista}>
				{construcoes.map((construcao) => (
					<View key={construcao.titulo} style={styles.cartao}>
						<View style={styles.topoCartao}>
							<View style={styles.iconeContainer}>
								<Ionicons name={construcao.icone} size={28} color="#6c3cb5" />
							</View>

							<View style={styles.informacoes}>
								<Text style={styles.nome}>{construcao.titulo}</Text>
								<Text style={styles.texto}>{construcao.descricao}</Text>
								<Text style={styles.custo}>{construcao.custo}</Text>
							</View>
						</View>

						<Pressable accessibilityRole="button" style={styles.botao}>
							<Text style={styles.textoBotao}>Construir</Text>
						</Pressable>
					</View>
				))}
			</View>
		</ScrollView>
	);
}
