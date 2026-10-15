import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		backgroundColor: "#f7f3fb",
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
		color: "#271638",
		fontSize: 28,
		fontWeight: "bold",
	},
	descricao: {
		color: "#755f86",
		fontSize: 15,
	},
	secao: {
		gap: 10,
	},
	tituloSecao: {
		color: "#8b729e",
		fontSize: 11,
		fontWeight: "bold",
		letterSpacing: 1.2,
	},
	cartao: {
		backgroundColor: "#fff",
		borderColor: "#e7dcf3",
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
		borderBottomColor: "#eee5f6",
		borderBottomWidth: 1,
	},
	nomePreferencia: {
		color: "#271638",
		flex: 1,
		fontSize: 15,
		fontWeight: "600",
	},
	valorPreferencia: {
		color: "#6c3cb5",
		fontSize: 12,
		fontWeight: "bold",
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
