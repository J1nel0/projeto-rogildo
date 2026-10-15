import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		backgroundColor: "#f7f3fb",
		flex: 1,
	},
	container: {
		alignItems: "center",
		alignSelf: "center",
		flexGrow: 1,
		gap: 20,
		maxWidth: 620,
		padding: 22,
		width: "100%",
	},
	cabecalho: {
		alignSelf: "stretch",
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
	perfil: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#e7dcf3",
		borderRadius: 18,
		borderWidth: 1,
		gap: 4,
		padding: 22,
		width: "100%",
	},
	avatar: {
		alignItems: "center",
		backgroundColor: "#6c3cb5",
		borderRadius: 38,
		height: 76,
		justifyContent: "center",
		marginBottom: 6,
		width: 76,
	},
	nome: {
		color: "#271638",
		fontSize: 21,
		fontWeight: "bold",
	},
	email: {
		color: "#755f86",
		fontSize: 13,
	},
	estatisticas: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#e7dcf3",
		borderRadius: 16,
		borderWidth: 1,
		flexDirection: "row",
		paddingVertical: 16,
		width: "100%",
	},
	estatistica: {
		alignItems: "center",
		flex: 1,
		gap: 2,
	},
	valor: {
		color: "#6c3cb5",
		fontSize: 20,
		fontWeight: "bold",
	},
	rotulo: {
		color: "#755f86",
		fontSize: 11,
	},
	divisor: {
		backgroundColor: "#e7dcf3",
		height: 34,
		width: 1,
	},
	acoes: {
		gap: 10,
		width: "100%",
	},
	botaoPrimario: {
		alignItems: "center",
		backgroundColor: "#6c3cb5",
		borderRadius: 11,
		flexDirection: "row",
		gap: 8,
		justifyContent: "center",
		padding: 13,
	},
	textoBotaoPrimario: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
	},
	botaoSecundario: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#6c3cb5",
		borderRadius: 11,
		borderWidth: 1,
		flexDirection: "row",
		gap: 8,
		justifyContent: "center",
		padding: 13,
	},
	textoBotaoSecundario: {
		color: "#6c3cb5",
		fontSize: 14,
		fontWeight: "bold",
	},
});

export default styles;
