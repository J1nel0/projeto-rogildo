import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, Switch, Text, View } from "react-native";
import styles from "./Estilizacao/TelaConfig.styles.js";

export default function TelaConfig({ vibracao, onAlterarVibracao, onReiniciar }) {
	const [confirmando, setConfirmando] = useState(false);
	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Configurações</Text>
				<Text style={styles.descricao}>Personalize sua experiência no jogo.</Text>
			</View>

			<View style={styles.secao}>
				<Text style={styles.tituloSecao}>PREFERÊNCIAS</Text>
				<View style={styles.cartao}>
					<View style={styles.linha}>
						<Ionicons name="phone-portrait-outline" size={22} color="#d94b00" />
						<View style={styles.informacoes}>
							<Text style={styles.nomePreferencia}>Vibração</Text>
							<Text style={styles.descricao}>Vibrar ao conquistar uma recompensa.</Text>
						</View>
						<Switch accessibilityLabel="Vibração nas conquistas" value={vibracao} onValueChange={onAlterarVibracao} trackColor={{ false: "#d7c4b8", true: "#eb9a65" }} thumbColor={vibracao ? "#d94b00" : "#f5f5f5"} />
					</View>
				</View>
				{confirmando ? <View style={styles.confirmacao}>
					<Text style={styles.descricao}>Reiniciar apaga novelos, construções, melhorias e conquistas. Você começará com uma patinha. Seu nome e sua foto serão mantidos.</Text>
					<Pressable accessibilityRole="button" onPress={() => { onReiniciar(); setConfirmando(false); }} style={styles.botaoPrimario}><Text style={styles.textoBotaoPrimario}>Confirmar reinício</Text></Pressable>
					<Pressable accessibilityRole="button" onPress={() => setConfirmando(false)} style={styles.botaoSecundario}><Text style={styles.textoBotaoSecundario}>Cancelar</Text></Pressable>
				</View> : <Pressable accessibilityRole="button" onPress={() => setConfirmando(true)} style={styles.botaoSecundario}><Text style={styles.textoBotaoSecundario}>Reiniciar progresso</Text></Pressable>}
			</View>

			<View style={styles.secao}>
				<Text style={styles.tituloSecao}>PROGRESSO</Text>
				<View style={styles.cartao}>
					<View style={styles.linha}>
						<Ionicons name="save-outline" size={22} color="#d94b00" />
						<View style={styles.informacoes}>
							<Text style={styles.nomePreferencia}>Salvamento automático</Text>
							<Text style={styles.descricao}>Seu progresso é salvo neste dispositivo.</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
