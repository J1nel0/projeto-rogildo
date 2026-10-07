import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	rodape: {
		backgroundColor: "#6c3cb5",
		borderTopColor: "#5a2d9c",
		borderTopWidth: 1,
		flexDirection: "row",
		paddingBottom: 8,
		paddingHorizontal: 6,
		paddingTop: 6,
	},
	botao: {
		alignItems: "center",
		borderRadius: 10,
		flex: 1,
		gap: 3,
		justifyContent: "center",
		minHeight: 54,
		minWidth: 0,
		paddingHorizontal: 2,
		paddingVertical: 6,
	},
	botaoAtivo: {
		backgroundColor: "rgba(255, 255, 255, 0.16)",
	},
	botaoPressionado: {
		opacity: 0.7,
	},
	textoBotao: {
		color: "#fff",
		fontSize: 11,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default styles;
