import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		backgroundColor: "#f7f3fb",
		flex: 1,
	},
	container: {
		alignSelf: "center",
		flexGrow: 1,
		gap: 22,
		maxWidth: 760,
		padding: 22,
		width: "100%",
	},
	cabecalho: {
		gap: 5,
	},
	titulo: {
		color: "#271638",
		fontSize: 28,
		fontWeight: "bold",
	},
	descricao: {
		color: "#755f86",
		fontSize: 15,
	},
	lista: {
		gap: 14,
	},
	cartao: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#e7dcf3",
		borderRadius: 16,
		borderWidth: 1,
		flexDirection: "row",
		gap: 14,
		padding: 16,
	},
	iconeContainer: {
		alignItems: "center",
		backgroundColor: "#f0e8f8",
		borderRadius: 12,
		height: 52,
		justifyContent: "center",
		width: 52,
	},
	informacoes: {
		flex: 1,
		gap: 3,
	},
	nome: {
		color: "#271638",
		fontSize: 17,
		fontWeight: "bold",
	},
	texto: {
		color: "#755f86",
		fontSize: 13,
		lineHeight: 18,
	},
	custo: {
		color: "#6c3cb5",
		fontSize: 12,
		fontWeight: "bold",
		marginTop: 3,
	},
	botao: {
		alignItems: "center",
		backgroundColor: "#6c3cb5",
		borderRadius: 9,
		justifyContent: "center",
		minWidth: 92,
		paddingHorizontal: 14,
		paddingVertical: 10,
	},
	textoBotao: {
		color: "#fff",
		fontSize: 13,
		fontWeight: "bold",
	},
});

export default styles;
