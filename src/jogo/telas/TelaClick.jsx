import { Text, View } from "react-native";
import styles from "./Estilizacao/TelaClick.styles.js";
import { Pressable } from "react-native";
import { useState } from "react";

export default function TelaClick() {

	const [clicksAtuais, setClicksAtuais] = useState(0);
	const [mdfConstrucao, setMdfConstrucao] = useState(1);
	const [mdfMelhoria, setMdfMelhoria] = useState(1);

	function clickNovelo(clicksAtuais, mdfConstrucao, mdfMelhoria ){

		setClicksAtuais(clicksAtuais + (1 * mdfConstrucao * mdfMelhoria))
	}


	return (
		// <View style={styles.container}>
		// 	<Text style={styles.titulo}>Tela Click</Text>
		// </View>

		<Pressable
			accessibilityRole="button"
			onPress={() => clickNovelo(clicksAtuais, mdfConstrucao, mdfMelhoria)}
		>

		</Pressable>
	);
}
