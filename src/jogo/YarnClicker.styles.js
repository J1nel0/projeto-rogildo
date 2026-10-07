import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	jogo: {
		flex: 1,
		minHeight: Platform.OS === "web" ? "100vh" : undefined,
		backgroundColor: "#fff",
	},
	titulo: {
		fontSize: 28,
		fontWeight: "bold",
		paddingHorizontal: 24,
		paddingTop: 24,
		textAlign: "center",
	},
});

export default styles;
