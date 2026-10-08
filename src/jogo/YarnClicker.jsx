
import { Settings, Text, View } from "react-native";
import TelaLogin from "./telas/TelaLogin.jsx";
import TelaClick from "./telas/TelaClick.jsx";
import TelaConstrucao from "./telas/TelaConstrucao.jsx";
import TelaMelhoria from "./telas/TelaMelhoria.jsx";
import TelaConfig from "./telas/TelaConfig.jsx";
import TelaUser from "./telas/TelaUser.jsx";
import styles from "./YarnClicker.styles.js";
import Rodape from "./componentes/Rodape.jsx"
import { useState } from "react";
    
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

 	function login(email, senha) {
		// Tratar login aqui!
		setIsLoggedIn(true); 
	}

	function renderScreen() {
		switch (selectedScreen) {
			case Screens.click:
				return <TelaClick/>;
				
			case Screens.construction:
				return <TelaConstrucao/>;

			case Screens.upgrades:
				return <TelaMelhoria/>;

			case Screens.user:
				return <TelaUser/>;

			case Screens.settings:
				return <TelaConfig/>;
		
			default:
				return <TelaClick/>;
		}
	}

	function selectScreen(screen) {
		setSelectedScreen(screen);
	}

	return (
		<View style={styles.jogo}>
			{isLoggedIn ? (
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
