import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
		padding: 24,
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},

	subtitulo: {
		fontSize: 18,
		fontWeight: "semi-bold",
		textAlign: "center",
	},

	imagem:{
		width: 200, 
		height: 200,
		borderRadius: 0.5
	}
});

export default styles;
