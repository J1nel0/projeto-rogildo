
import styles from "./Estilizacao/TelaClick.styles.js";
import { Pressable, Image, Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function TelaClick() {

	const [clicksAtuais, setClicksAtuais] = useState(0);
	const [clicksPSegundo, setClicksPSegundo] = useState(1);


	const Construcoes = 1;
	const mdfMelhoria = 1



	function clickNovelo(clicksAtuais, mdfMelhoria ){

		setClicksAtuais(clicksAtuais + (1 * mdfMelhoria))
	}

	useEffect(()=>{
		const intervalo = setInterval(()=>{
			setClicksAtuais((clicksAtuais) => clicksAtuais + (clicksPSegundo));
		}, 1000);

		return () => clearInterval(intervalo);

	}, [clicksPSegundo])



	return (
		<View style={styles.container}>

			<Text style={styles.titulo}>{clicksAtuais}</Text>

			<Pressable
				style={styles.container}
				accessibilityRole="button"
				onPress={() => clickNovelo(clicksAtuais, Construcoes, mdfMelhoria)}>

					<Image
		   				source={require('../assets/logoplaceholder.png')}
						style={styles.imagem}
						resizeMode="contain"
					/>
			</Pressable>

			<Text style={styles.subtitulo}>Novelos por Click: {1 * mdfMelhoria}</Text>
			<Text style={styles.subtitulo}>NPS: {clicksPSegundo}</Text>

		</View>
		

		



	);
}
