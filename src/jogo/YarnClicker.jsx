
import { Text, View, Vibration } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { comprarItem, criarJogoInicial, migrarJogo, producaoDasPatas, producaoPorSegundo, producaoPorToque } from "./dadosJogo.js";
import TelaLogin from "./telas/TelaLogin.jsx";
import TelaClick from "./telas/TelaClick.jsx";
import TelaConstrucao from "./telas/TelaConstrucao.jsx";
import TelaMelhoria from "./telas/TelaMelhoria.jsx";
import TelaConfig from "./telas/TelaConfig.jsx";
import TelaUser from "./telas/TelaUser.jsx";
import styles from "./YarnClicker.styles.js";
import Rodape from "./componentes/Rodape.jsx"
import { useEffect, useRef, useState } from "react";
    
export const Screens = {
	click: "Novelo",
	construction: "Construção",
	upgrades: "Melhorias",
	user: "Usuário",
	settings: "Configuração",

}
export default function YarnClicker() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [selectedScreen, setSelectedScreen] = useState(Screens.click);
	const [jogo, setJogo] = useState(criarJogoInicial);
	const [carregado, setCarregado] = useState(false);
	const [aviso, setAviso] = useState("");
	const [emailLogin, setEmailLogin] = useState("");
	const fila = useRef([]);
	const exibindo = useRef(false);
	const salvamento = useRef(Promise.resolve());

	useEffect(() => {
		AsyncStorage.getItem("yarnclicker-progresso").then((valor) => {
			if (valor) setJogo(migrarJogo(JSON.parse(valor)));
		}).catch(() => {}).finally(() => setCarregado(true));
	}, []);

	useEffect(() => {
		if (carregado) {
			const dados = JSON.stringify(jogo);
			salvamento.current = salvamento.current.then(() => AsyncStorage.setItem("yarnclicker-progresso", dados)).catch((erro) => console.warn("Não foi possível salvar o progresso", erro));
		}
	}, [jogo, carregado]);

	const producao = producaoPorSegundo(jogo);
	useEffect(() => {
		if (!carregado || !producao) return;
		const intervalo = setInterval(() => setJogo((atual) => ({ ...atual, novelos: atual.novelos + producao, total: atual.total + producao })), 1000);
		return () => clearInterval(intervalo);
	}, [carregado, producao]);

	useEffect(() => {
		if (!carregado) return;
		const metas = [["primeiro", "Primeiro novelo!", jogo.total >= 1], ["cem", "100 novelos produzidos!", jogo.total >= 100], ["mil", "1.000 novelos produzidos!", jogo.total >= 1000], ["construcao", "Primeira construção!", jogo.quantidades[0] > 1 || jogo.quantidades.slice(1).some((q) => q > 0)], ["melhoria", "Primeira melhoria!", jogo.niveis.some((n) => n > 0) || jogo.nivelToque > 0 || jogo.nivelPata > 0], ["milhao", "1 milhão de novelos produzidos!", jogo.total >= 1000000]];
		const novas = metas.filter(([id, , atingida]) => atingida && !jogo.conquistas.includes(id));
		if (novas.length) {
			fila.current.push(...novas.map(([, texto]) => texto));
			setJogo((atual) => ({ ...atual, conquistas: [...atual.conquistas, ...novas.map(([id]) => id)] }));
		}
	}, [jogo, carregado]);

	useEffect(() => {
		if (exibindo.current || !fila.current.length) return;
		exibindo.current = true;
		setAviso(fila.current.shift());
		if (jogo.vibracao !== false) Vibration.vibrate();
	}, [jogo.conquistas, aviso]);
	useEffect(() => {
		if (!aviso) return;
		const timer = setTimeout(() => { exibindo.current = false; setAviso(""); }, 4000);
		return () => clearTimeout(timer);
	}, [aviso]);

	function tocar() { setJogo((atual) => ({ ...atual, novelos: atual.novelos + producaoPorToque(atual), total: atual.total + producaoPorToque(atual) })); }
	function comprar(i, melhoria = false) {
		setJogo((atual) => comprarItem(atual, i, melhoria === "toque" || melhoria === "pata" ? melhoria : melhoria ? "melhoria" : "construcao"));
	}
	function reiniciarProgresso() {
		fila.current = [];
		exibindo.current = false;
		setAviso("");
		setJogo((atual) => criarJogoInicial(atual));
	}

	function login({ email }) {
		// Tratar login aqui!
		setEmailLogin(email);
		setIsLoggedIn(true); 
	}

	function renderScreen() {
		switch (selectedScreen) {
			case Screens.click:
				return <TelaClick novelos={jogo.novelos} producao={producao} patas={jogo.quantidades[0] || 0} producaoPatas={producaoDasPatas(jogo)} porToque={producaoPorToque(jogo)} onClick={tocar}/>;
				
			case Screens.construction:
				return <TelaConstrucao jogo={jogo} onComprar={comprar}/>;

			case Screens.upgrades:
				return <TelaMelhoria jogo={jogo} onComprar={comprar}/>;

			case Screens.user:
				return <TelaUser jogo={jogo} email={emailLogin} onSalvarPerfil={(nome) => setJogo((atual) => ({ ...atual, nome }))} />;

			case Screens.settings:
				return <TelaConfig vibracao={jogo.vibracao !== false} onAlterarVibracao={(vibracao) => setJogo((atual) => ({ ...atual, vibracao }))} onReiniciar={reiniciarProgresso} />;
		
			default:
				return <TelaClick novelos={jogo.novelos} producao={producao} patas={jogo.quantidades[0] || 0} producaoPatas={producaoDasPatas(jogo)} porToque={producaoPorToque(jogo)} onClick={tocar}/>;
		}
	}

	function selectScreen(screen) {
		setSelectedScreen(screen);
	}

	return (
		<View style={styles.jogo}>
			{!!aviso && <View style={{ position: "absolute", top: 40, left: 20, right: 20, zIndex: 10, backgroundColor: "#6c3cb5", padding: 16, borderRadius: 12 }}><Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>🏆 {aviso}</Text></View>}
			{!carregado ? <Text style={styles.titulo}>Carregando progresso...</Text> : isLoggedIn ? (
				<>
					{renderScreen()}
					<Rodape selectedScreen={selectedScreen} onSelectScreen={selectScreen}/>
				</>
				
			) : (
				<>
					<Text style={styles.titulo}>YarnClicker</Text>
					<TelaLogin onLogin={login}/>
				</>
			)} 
		</View>
	);
}
