import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./Estilizacao/TelaConfig.styles.js";

const preferencias = [
	{ icone: "volume-high-outline", titulo: "Efeitos sonoros", valor: "Ligado" },
	{ icone: "musical-notes-outline", titulo: "Música", valor: "Ligado" },
	{ icone: "notifications-outline", titulo: "Notificações", valor: "Ligado" },
];

export default function TelaConfig() {
	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Configurações</Text>
				<Text style={styles.descricao}>Personalize sua experiência no jogo.</Text>
			</View>

			<View style={styles.secao}>
				<Text style={styles.tituloSecao}>PREFERÊNCIAS</Text>
				<View style={styles.cartao}>
					{preferencias.map((preferencia, indice) => (
						<Pressable
							accessibilityRole="button"
							key={preferencia.titulo}
							style={[styles.linha, indice < preferencias.length - 1 && styles.linhaComBorda]}
						>
							<Ionicons name={preferencia.icone} size={22} color="#6c3cb5" />
							<Text style={styles.nomePreferencia}>{preferencia.titulo}</Text>
							<Text style={styles.valorPreferencia}>{preferencia.valor}</Text>
							<Ionicons name="chevron-forward" size={18} color="#9a89a8" />
						</Pressable>
					))}
				</View>
			</View>

			<View style={styles.secao}>
				<Text style={styles.tituloSecao}>PROGRESSO</Text>
				<Pressable accessibilityRole="button" style={styles.botaoPrimario}>
					<Ionicons name="save-outline" size={20} color="#fff" />
					<Text style={styles.textoBotaoPrimario}>Salvar progresso</Text>
				</Pressable>
				<Pressable accessibilityRole="button" style={styles.botaoSecundario}>
					<Ionicons name="refresh-outline" size={20} color="#6c3cb5" />
					<Text style={styles.textoBotaoSecundario}>Restaurar configurações</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
}
