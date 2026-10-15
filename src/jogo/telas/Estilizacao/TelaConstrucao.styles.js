import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		backgroundColor: "#fff4eb",
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
		color: "#43200f",
		fontSize: 28,
		fontWeight: "bold",
	},
	descricao: {
		color: "#8b5a3c",
		fontSize: 15,
	},
	lista: {
		gap: 14,
	},
	cartao: {
		backgroundColor: "#fff",
		borderColor: "#f1c9a8",
		borderRadius: 16,
		borderWidth: 1,
		gap: 14,
		padding: 16,
	},
	topoCartao: {
		alignItems: "center",
		flexDirection: "row",
		gap: 14,
	},
	iconeContainer: {
		alignItems: "center",
		backgroundColor: "#ffe2ca",
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
		color: "#43200f",
		fontSize: 17,
		fontWeight: "bold",
	},
	texto: {
		color: "#8b5a3c",
		fontSize: 13,
		lineHeight: 18,
	},
	custo: {
		color: "#d94b00",
		fontSize: 12,
		fontWeight: "bold",
		marginTop: 3,
	},
	botao: {
		alignItems: "center",
		backgroundColor: "#d94b00",
		borderRadius: 9,
		justifyContent: "center",
		padding: 11,
	},
	textoBotao: {
		color: "#fff",
		fontSize: 13,
		fontWeight: "bold",
	},
});

export default styles;
