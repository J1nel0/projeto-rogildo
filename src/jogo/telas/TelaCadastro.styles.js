import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: "center",
		padding: 24,
	},
	formulario: {
		gap: 16,
		width: "100%",
		maxWidth: 420,
		alignSelf: "center",
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
	},
	campo: {
		gap: 6,
	},
	rotulo: {
		fontSize: 16,
	},
	input: {
		borderColor: "#888",
		borderRadius: 6,
		borderWidth: 1,
		paddingHorizontal: 12,
		paddingVertical: 10,
		fontSize: 16,
	},
	erro: {
		color: "#b00020",
	},
	sucesso: {
		color: "#176b2c",
	},
	botao: {
		alignItems: "center",
		backgroundColor: "#6c3cb5",
		borderRadius: 6,
		padding: 12,
	},
	botaoPressionado: {
		opacity: 0.8,
	},
	textoBotao: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default styles;
