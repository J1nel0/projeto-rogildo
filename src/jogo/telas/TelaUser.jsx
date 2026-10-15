import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./Estilizacao/TelaUser.styles.js";

export default function TelaUser() {
	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Seu perfil</Text>
				<Text style={styles.descricao}>Acompanhe sua jornada no YarnClicker.</Text>
			</View>

			<View style={styles.perfil}>
				<View style={styles.avatar}>
					<Ionicons name="person" size={44} color="#fff" />
				</View>
				<Text style={styles.nome}>Jogador</Text>
				<Text style={styles.email}>jogador@yarnclicker.com</Text>
			</View>

			<View style={styles.estatisticas}>
				<View style={styles.estatistica}>
					<Text style={styles.valor}>0</Text>
					<Text style={styles.rotulo}>Novelos</Text>
				</View>
				<View style={styles.divisor} />
				<View style={styles.estatistica}>
					<Text style={styles.valor}>1</Text>
					<Text style={styles.rotulo}>Nível</Text>
				</View>
				<View style={styles.divisor} />
				<View style={styles.estatistica}>
					<Text style={styles.valor}>0</Text>
					<Text style={styles.rotulo}>Conquistas</Text>
				</View>
			</View>

			<View style={styles.acoes}>
				<Pressable accessibilityRole="button" style={styles.botaoPrimario}>
					<Ionicons name="create-outline" size={20} color="#fff" />
					<Text style={styles.textoBotaoPrimario}>Editar perfil</Text>
				</Pressable>

				<Pressable accessibilityRole="button" style={styles.botaoSecundario}>
					<Ionicons name="trophy-outline" size={20} color="#6c3cb5" />
					<Text style={styles.textoBotaoSecundario}>Ver conquistas</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
}
