import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		backgroundColor: "#fff4eb",
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
		color: "#43200f",
		fontSize: 28,
		fontWeight: "bold",
	},
	descricao: {
		color: "#8b5a3c",
		fontSize: 15,
	},
	perfil: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#f1c9a8",
		borderRadius: 18,
		borderWidth: 1,
		gap: 4,
		padding: 22,
		width: "100%",
	},
	avatar: {
		alignItems: "center",
		backgroundColor: "#d94b00",
		borderRadius: 38,
		height: 76,
		justifyContent: "center",
		marginBottom: 6,
		width: 76,
	},
	nome: {
		color: "#43200f",
		fontSize: 21,
		fontWeight: "bold",
	},
	email: {
		color: "#8b5a3c",
		fontSize: 13,
	},
	estatisticas: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#f1c9a8",
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
		color: "#d94b00",
		fontSize: 20,
		fontWeight: "bold",
	},
	rotulo: {
		color: "#8b5a3c",
		fontSize: 11,
	},
	divisor: {
		backgroundColor: "#f1c9a8",
		height: 34,
		width: 1,
	},
	acoes: {
		gap: 10,
		width: "100%",
	},
	botaoPrimario: {
		alignItems: "center",
		backgroundColor: "#d94b00",
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
		borderColor: "#d94b00",
		borderRadius: 11,
		borderWidth: 1,
		flexDirection: "row",
		gap: 8,
		justifyContent: "center",
		padding: 13,
	},
	textoBotaoSecundario: {
		color: "#d94b00",
		fontSize: 14,
		fontWeight: "bold",
	},
});

export default styles;
