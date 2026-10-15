import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		backgroundColor: "#fff4eb",
		flex: 1,
	},
	container: {
		alignSelf: "center",
		flexGrow: 1,
		gap: 24,
		maxWidth: 680,
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
	secao: {
		gap: 10,
	},
	tituloSecao: {
		color: "#a86d46",
		fontSize: 11,
		fontWeight: "bold",
		letterSpacing: 1.2,
	},
	cartao: {
		backgroundColor: "#fff",
		borderColor: "#f1c9a8",
		borderRadius: 15,
		borderWidth: 1,
		overflow: "hidden",
	},
	linha: {
		alignItems: "center",
		flexDirection: "row",
		gap: 12,
		padding: 16,
	},
	linhaComBorda: {
		borderBottomColor: "#f5ddc9",
		borderBottomWidth: 1,
	},
	nomePreferencia: {
		color: "#43200f",
		flex: 1,
		fontSize: 15,
		fontWeight: "600",
	},
	valorPreferencia: {
		color: "#d94b00",
		fontSize: 12,
		fontWeight: "bold",
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
