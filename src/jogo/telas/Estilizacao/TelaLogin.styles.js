import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		padding: 24,
		flexGrow: 1,
	},
	formulario: {
		alignSelf: "center",
		gap: 16,
		maxWidth: 420,
		width: "100%",
	},
	content:{
		flex: 1,
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
		alignSelf: "center"
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
		fontSize: 16,
		paddingHorizontal: 12,
		paddingVertical: 10,
	},
	erro: {
		color: "#b00020",
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
