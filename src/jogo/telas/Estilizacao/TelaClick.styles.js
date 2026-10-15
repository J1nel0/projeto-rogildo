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
		color: "#43200f",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	descricao: {
		color: "#8b5a3c",
		fontSize: 15,
		textAlign: "center",
	},
	placar: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#f1c9a8",
		borderRadius: 18,
		borderWidth: 1,
		paddingHorizontal: 42,
		paddingVertical: 14,
	},
	rotuloPlacar: {
		color: "#a86d46",
		fontSize: 11,
		fontWeight: "bold",
		letterSpacing: 1.5,
	},
	valorPlacar: {
		color: "#d94b00",
		fontSize: 40,
		fontWeight: "bold",
	},
	botaoNovelo: {
		alignItems: "center",
		borderRadius: 96,
		height: 192,
		justifyContent: "center",
		shadowColor: "#a83a00",
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
		borderColor: "#f1c9a8",
		borderRadius: 14,
		borderWidth: 1,
		flex: 1,
		gap: 0,
		minWidth: 0,
		padding: 10,
	},
	iconeEstatistica: {
		height: 100,
		width: 100,
		flexShrink: 0,
	},
	iconeTempo: {
		alignItems: "center",
		flexShrink: 0,
		height: 100,
		justifyContent: "center",
		width: 100,
	},
	informacoesEstatistica: {
		alignItems: "center",
		gap: 2,
	},
	valorEstatistica: {
		color: "#43200f",
		fontSize: 21,
		fontWeight: "bold",
	},
	rotuloEstatistica: {
		color: "#8b5a3c",
		fontSize: 12,
	},
});

export default styles;
