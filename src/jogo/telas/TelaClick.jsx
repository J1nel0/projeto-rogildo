
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Animated, AppState, Easing, Platform, Pressable, ScrollView, Text, View, Image, ImageBackground, useWindowDimensions } from "react-native";
import { formatar } from "../dadosJogo.js";
import styles from "./Estilizacao/TelaClick.styles.js";


const Orbita = memo(function Orbita({ centro, posicoes }) {
	const giro = useRef(new Animated.Value(0)).current;
	const rotacao = useMemo(() => giro.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] }), [giro]);
	useEffect(() => {
		let animacao;
		function iniciar() {
			if (animacao) animacao.stop();
			giro.setValue(0);
			animacao = Animated.loop(Animated.timing(giro, { toValue: 1, duration: 6000, easing: Easing.linear, useNativeDriver: Platform.OS !== "web", isInteraction: false }));
			animacao.start();
		}
		iniciar();
		const assinatura = AppState.addEventListener("change", (estado) => {
			if (estado === "active") iniciar();
		});
		return () => {
			assinatura.remove();
			animacao.stop();
		};
	}, [giro]);
	return <Animated.View pointerEvents="none" style={[styles.orbita, { top: centro, transform: [{ rotate: rotacao }] }]}>
		{posicoes.map(({ raio, angulo }, indice) => <View key={indice} style={[styles.posicaoPata, { transform: [{ rotate: `${angulo}deg` }, { translateY: -raio }] }]}>
			<Image source={require('../assets/pataGato.png')} style={[styles.pata, { transform: [{ rotate: "180deg" }] }]} resizeMode="contain" />
		</View>)}
	</Animated.View>;
});

export default function TelaClick({ novelos, producao, patas, producaoPatas, porToque, onClick }) {
	const animacaoGanho = useRef(new Animated.Value(0)).current;
	const [ganho, setGanho] = useState(0);
	const [centroOrbita, setCentroOrbita] = useState(null);
	const { width, height } = useWindowDimensions();
	const { posicoes, restantes } = useMemo(() => {
		const posicoesCalculadas = [];
		let faltam = patas;
		const raioMaximo = Math.max(115, Math.min(width / 2 - 18, height / 2 - 45));
		for (let raio = 115; raio <= raioMaximo && faltam > 0; raio += 32) {
			const capacidade = Math.floor(2 * Math.PI * raio / 34);
			const quantidade = Math.min(faltam, capacidade);
			for (let i = 0; i < quantidade; i++) posicoesCalculadas.push({ raio, angulo: 360 * i / capacidade });
			faltam -= quantidade;
		}
		return { posicoes: posicoesCalculadas, restantes: faltam };
	}, [patas, width, height]);
	useEffect(() => () => animacaoGanho.stopAnimation(), [animacaoGanho]);

	function tocarNovelo() {
		onClick();
		setGanho(porToque);
		animacaoGanho.stopAnimation();
		animacaoGanho.setValue(0);
		Animated.timing(animacaoGanho, { toValue: 1, duration: 900, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
	}

	return (
		<ImageBackground source={require('../assets/fundoNovelo.png')} style={styles.tela} resizeMode="cover">
		<ScrollView style={styles.rolagem} contentContainerStyle={styles.container}>
			{centroOrbita !== null && <Orbita centro={centroOrbita} posicoes={posicoes} />}
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Seu novelo</Text>
			</View>

			<View style={styles.placar}>
				<Text style={styles.rotuloPlacar}>NOVELOS</Text>
				<Text style={styles.valorPlacar}>{formatar(novelos)}</Text>
				<Text style={styles.rotuloEstatistica}>{formatar(producao)} por segundo</Text>
			</View>

			<View style={styles.areaNovelo} onLayout={(evento) => {
				const { y, height: altura } = evento.nativeEvent.layout;
				setCentroOrbita(y + altura / 2);
			}}>
			<Pressable
				accessibilityLabel="Produzir novelo"
				accessibilityRole="button"
				onPress={tocarNovelo}
				style={({ pressed }) => [styles.botaoNovelo, pressed && styles.botaoNoveloPressionado]}
			>
				<Image source={require('../assets/modeloNoveloT.png')}
				style={{ width: '100%', height: '200%' }} 	
				resizeMode="contain"                       
				/>
			</Pressable>
			{ganho > 0 && <Animated.Text pointerEvents="none" style={[styles.ganho, { opacity: animacaoGanho.interpolate({ inputRange: [0, 0.2, 1], outputRange: [0, 1, 0] }), transform: [{ translateY: animacaoGanho.interpolate({ inputRange: [0, 1], outputRange: [0, -55] }) }] }]}>+{formatar(ganho)}</Animated.Text>}
			</View>
			<Text style={styles.rotuloEstatistica}>Patinhas: {formatar(patas)} · {formatar(producaoPatas)} por segundo{restantes > 0 ? ` · +${formatar(restantes)} fora da tela` : ""}</Text>
		</ScrollView>
		</ImageBackground>
	);
}
