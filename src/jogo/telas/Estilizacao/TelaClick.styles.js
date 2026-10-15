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
		gap: 22,
		justifyContent: "center",
		maxWidth: 620,
		padding: 24,
		width: "100%",
	},
	cabecalho: {
		alignItems: "center",
		gap: 6,
	},
	titulo: {
		color: "#271638",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	descricao: {
		color: "#755f86",
		fontSize: 15,
		textAlign: "center",
	},
	placar: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#e7dcf3",
		borderRadius: 18,
		borderWidth: 1,
		paddingHorizontal: 42,
		paddingVertical: 14,
	},
	rotuloPlacar: {
		color: "#8b729e",
		fontSize: 11,
		fontWeight: "bold",
		letterSpacing: 1.5,
	},
	valorPlacar: {
		color: "#6c3cb5",
		fontSize: 40,
		fontWeight: "bold",
	},
	botaoNovelo: {
		alignItems: "center",
		backgroundColor: "#6c3cb5",
		borderColor: "#8256c4",
		borderRadius: 96,
		borderWidth: 8,
		height: 192,
		justifyContent: "center",
		shadowColor: "#4d258a",
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.28,
		shadowRadius: 12,
		width: 192,
	},
	botaoNoveloPressionado: {
		opacity: 0.82,
		transform: [{ scale: 0.97 }],
	},
	estatisticas: {
		flexDirection: "row",
		gap: 12,
		maxWidth: 420,
		width: "100%",
	},
	cartaoEstatistica: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#e7dcf3",
		borderRadius: 14,
		borderWidth: 1,
		flex: 1,
		gap: 2,
		padding: 14,
	},
	valorEstatistica: {
		color: "#271638",
		fontSize: 21,
		fontWeight: "bold",
	},
	rotuloEstatistica: {
		color: "#755f86",
		fontSize: 12,
	},
});

export default styles;
