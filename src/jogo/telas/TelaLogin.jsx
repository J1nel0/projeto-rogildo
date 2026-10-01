import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./TelaLogin.styles.js";

export default function TelaLogin({ onLogin }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [erro, setErro] = useState("");

	function entrar() {
		const emailNormalizado = email.trim();

		if (!emailNormalizado || !senha) {
			setErro("Preencha o e-mail e a senha.");
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado)) {
			setErro("Informe um e-mail válido.");
			return;
		}

		onLogin?.({ email: emailNormalizado, senha });
		setErro("");
	}

	return (
		<ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
			<View style={styles.formulario}>
				<Text style={styles.titulo}>Entrar no YarnClicker</Text>

				<View style={styles.campo}>
					<Text style={styles.rotulo}>E-mail</Text>
					<TextInput
						style={styles.input}
						accessibilityLabel="E-mail"
						autoComplete="email"
						autoCapitalize="none"
						keyboardType="email-address"
						returnKeyType="next"
						value={email}
						onChangeText={(valor) => {
							setEmail(valor);
							setErro("");
						}}
					/>
				</View>

				<View style={styles.campo}>
					<Text style={styles.rotulo}>Senha</Text>
					<TextInput
						style={styles.input}
						accessibilityLabel="Senha"
						autoComplete="current-password"
						secureTextEntry
						returnKeyType="done"
						value={senha}
						onChangeText={(valor) => {
							setSenha(valor);
							setErro("");
						}}
						onSubmitEditing={entrar}
					/>
				</View>

				{erro ? <Text accessibilityRole="alert" style={styles.erro}>{erro}</Text> : null}

				<Pressable
					accessibilityRole="button"
					onPress={entrar}
					style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
				>
					<Text style={styles.textoBotao}>Entrar</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
}