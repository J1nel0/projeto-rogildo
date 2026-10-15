
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View, Image } from "react-native";
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
				<Image source={require('../assets/modeloNoveloT.png')}
				style={{ width: '100%', height: '200%' }} 	
				resizeMode="contain"                       
				/>
			</Pressable>

			<View style={styles.estatisticas}>
				<View style={styles.cartaoEstatistica}>
					<Image source={require('../assets/pataGato.png')}
						style={styles.iconeEstatistica}
						resizeMode="contain"                       
					/>
					<View style={styles.informacoesEstatistica}>
						<Text style={styles.valorEstatistica}>{mdfMelhoria}</Text>
						<Text style={styles.rotuloEstatistica}>por toque</Text>
					</View>
				</View>

				<View style={styles.cartaoEstatistica}>
					<View style={styles.iconeTempo}>
						<Ionicons name="time-outline" size={22} color="#6c3cb5" />
					</View>
					<View style={styles.informacoesEstatistica}>
						<Text style={styles.valorEstatistica}>{clicksPSegundo}</Text>
						<Text style={styles.rotuloEstatistica}>por segundo</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
