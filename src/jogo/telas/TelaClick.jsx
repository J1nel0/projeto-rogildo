
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./Estilizacao/TelaClick.styles.js";

export default function TelaClick() {

	const [clicksAtuais, setClicksAtuais] = useState(0);
	const [clicksPSegundo, setClicksPSegundo] = useState(1);


	const mdfMelhoria = 1;

	function clickNovelo() {
		setClicksAtuais((totalAtual) => totalAtual + mdfMelhoria);
	}

	useEffect(()=>{
		const intervalo = setInterval(()=>{
			setClicksAtuais((clicksAtuais) => clicksAtuais + (clicksPSegundo));
		}, 1000);

		return () => clearInterval(intervalo);

	}, [clicksPSegundo])



	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Seu novelo</Text>
				<Text style={styles.descricao}>Toque no ícone para produzir mais lã.</Text>
			</View>

			<View style={styles.placar}>
				<Text style={styles.rotuloPlacar}>NOVELOS</Text>
				<Text style={styles.valorPlacar}>{clicksAtuais}</Text>
			</View>

			<Pressable
				accessibilityLabel="Produzir novelo"
				accessibilityRole="button"
				onPress={clickNovelo}
				style={({ pressed }) => [styles.botaoNovelo, pressed && styles.botaoNoveloPressionado]}
			>
				<Ionicons name="basketball-outline" size={112} color="#fff" />
			</Pressable>

			<View style={styles.estatisticas}>
				<View style={styles.cartaoEstatistica}>
					<Ionicons name="hand-left-outline" size={22} color="#6c3cb5" />
					<Text style={styles.valorEstatistica}>{mdfMelhoria}</Text>
					<Text style={styles.rotuloEstatistica}>por toque</Text>
				</View>

				<View style={styles.cartaoEstatistica}>
					<Ionicons name="time-outline" size={22} color="#6c3cb5" />
					<Text style={styles.valorEstatistica}>{clicksPSegundo}</Text>
					<Text style={styles.rotuloEstatistica}>por segundo</Text>
				</View>
			</View>
		</ScrollView>
	);
}
