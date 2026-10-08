import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View, Image } from "react-native";
import styles from "./Estilizacao/TelaCadastro.styles.js";

export default function TelaCadastro({ onCadastrar, onVoltar }) {
	const [formulario, setFormulario] = useState({
		nome: "",
		email: "",
		senha: "",
		confirmarSenha: "",
	});
	const [erro, setErro] = useState("");
	const [sucesso, setSucesso] = useState(false);

	function atualizarCampo(campo, valor) {
		setFormulario((atual) => ({ ...atual, [campo]: valor }));
		setErro("");
		setSucesso(false);
	}

	function cadastrar() {
		if (
			!formulario.nome.trim() ||
			!formulario.email.trim() ||
			!formulario.senha ||
			!formulario.confirmarSenha
		) {
			setErro("Preencha todos os campos.");
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email.trim())) {
			setErro("Informe um e-mail válido.");
			return;
		}

		if (formulario.senha.length < 8) {
			setErro("A senha deve ter pelo menos 8 caracteres.");
			return;
		}

		if (formulario.senha !== formulario.confirmarSenha) {
			setErro("As senhas não coincidem.");
			return;
		}

		const dados = {
			nome: formulario.nome.trim(),
			email: formulario.email.trim(),
			senha: formulario.senha,
		};

		onCadastrar?.(dados);
		setSucesso(true);
		setFormulario({ nome: "", email: "", senha: "", confirmarSenha: "" });
	}

	return (
		<ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Image source={require("../assets/logoplaceholder.png")} style={styles.logo} />

			<View style={styles.formulario}>
				<Text style={styles.titulo}>Crie sua conta no YarnClicker</Text>

				<View style={styles.campo}>
					<Text style={styles.rotulo}>Nome de jogador</Text>
					<TextInput
						style={styles.input}
						accessibilityLabel="Nome de jogador"
						autoComplete="username"
						autoCapitalize="words"
						value={formulario.nome}
						onChangeText={(valor) => atualizarCampo("nome", valor)}
					/>
				</View>

				<View style={styles.campo}>
					<Text style={styles.rotulo}>E-mail</Text>
					<TextInput
						style={styles.input}
						accessibilityLabel="E-mail"
						autoComplete="email"
						autoCapitalize="none"
						keyboardType="email-address"
						value={formulario.email}
						onChangeText={(valor) => atualizarCampo("email", valor)}
					/>
				</View>

				<View style={styles.campo}>
					<Text style={styles.rotulo}>Senha</Text>
					<TextInput
						style={styles.input}
						accessibilityLabel="Senha"
						autoComplete="new-password"
						secureTextEntry
						value={formulario.senha}
						onChangeText={(valor) => atualizarCampo("senha", valor)}
					/>
				</View>

				<View style={styles.campo}>
					<Text style={styles.rotulo}>Confirme a senha</Text>
					<TextInput
						style={styles.input}
						accessibilityLabel="Confirme a senha"
						autoComplete="new-password"
						secureTextEntry
						value={formulario.confirmarSenha}
						onChangeText={(valor) => atualizarCampo("confirmarSenha", valor)}
					/>
				</View>

				{erro ? <Text accessibilityRole="alert" style={styles.erro}>{erro}</Text> : null}
				{sucesso ? (
					<Text accessibilityRole="alert" style={styles.sucesso}>
						Cadastro realizado com sucesso!
					</Text>
				) : null}

				<Pressable
					accessibilityRole="button"
					onPress={cadastrar}
					style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
				>
					<Text style={styles.textoBotao}>Cadastrar</Text>
				</Pressable>

				<Pressable
					accessibilityRole="button"
					onPress={onVoltar}
					style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
				>
					<Text style={styles.textoBotao}>Voltar para entrar</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
}
