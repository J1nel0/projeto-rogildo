import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	jogo: {
		flex: 1,
		height: Platform.OS === "web" ? "100vh" : undefined,
		backgroundColor: "#fff4eb",
	},
	titulo: {
		fontSize: 28,
		fontWeight: "bold",
		paddingHorizontal: 24,
		paddingTop: 24,
		textAlign: "center",
	},
	faixa: {
		backgroundColor: "#b95824",
		borderBottomColor: "#813b1c",
		borderBottomWidth: 3,
		paddingVertical: 9,
	},
	textoFaixa: {
		color: "#fff5e6",
		fontSize: 13,
		fontWeight: "bold",
		letterSpacing: 1,
		textAlign: "center",
	},
});

export default styles;
