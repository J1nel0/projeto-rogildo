

import { Pressable, Text, View } from "react-native";
import styles from "./Rodape.styles.js";

const botoes = ["Novelo", "Construção", "Melhorias", "Usuário", "Configuração"];

export default function Rodape() {
	return (
		<View style={styles.rodape}>
			{botoes.map((rotulo) => (
				<Pressable
					key={rotulo}
					accessibilityRole="button"
					style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
				>
					<Text style={styles.textoBotao}>{rotulo}</Text>
				</Pressable>
			))}
		</View>
	);
}