


import { Alert, Text, View } from "react-native";
import Rodape from "./componentes/Rodape.jsx";
import TelaLogin from "./telas/TelaLogin.jsx";
import styles from "./YarnClicker.styles.js";

export default function YarnClicker() {
	return (
		<View style={styles.jogo}>
			<Text style={styles.titulo}>YarnClicker</Text>
			<TelaLogin />
			<Rodape />
		</View>
	);
}