import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	rodape: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		gap: 8,
		padding: 12,
	},
	botao: {
		alignItems: "center",
		backgroundColor: "#6c3cb5",
		borderRadius: 6,
		paddingHorizontal: 12,
		paddingVertical: 10,
	},
	botaoPressionado: {
		opacity: 0.8,
	},
	textoBotao: {
		color: "#fff",
		fontWeight: "bold",
	},
});

export default styles;
