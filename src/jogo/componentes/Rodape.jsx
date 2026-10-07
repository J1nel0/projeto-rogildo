

import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import styles from "./Rodape.styles.js";

const botoes = [
	{ rotulo: "Novelo", icone: "ellipse-outline", iconeAtivo: "ellipse" },
	{ rotulo: "Construção", icone: "construct-outline", iconeAtivo: "construct" },
	{ rotulo: "Melhorias", icone: "trending-up-outline", iconeAtivo: "trending-up" },
	{ rotulo: "Usuário", icone: "person-outline", iconeAtivo: "person" },
	{ rotulo: "Configuração", icone: "settings-outline", iconeAtivo: "settings" },
];

export default function Rodape({ onSelectScreen, selectedScreen }) {
	return (
		<View style={styles.rodape}>
			{botoes.map(({ rotulo, icone, iconeAtivo }) => {
				const selecionado = selectedScreen === rotulo;

				return (
					<Pressable
						onPress={() => onSelectScreen(rotulo)}
						key={rotulo}
						accessibilityRole="tab"
						accessibilityState={{ selected: selecionado }}
						style={({ pressed }) => [
							styles.botao,
							selecionado && styles.botaoAtivo,
							pressed && styles.botaoPressionado,
						]}
					>
						<Ionicons
							name={selecionado ? iconeAtivo : icone}
							size={24}
							color="#fff"
						/>
						<Text numberOfLines={1} style={styles.textoBotao}>{rotulo}</Text>
					</Pressable>
				);
			})}
		</View>
	);
}
