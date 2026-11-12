import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Alert, Image, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { conquistasDisponiveis, construcoes, formatar } from "../dadosJogo.js";
import styles from "./Estilizacao/TelaUser.styles.js";

export default function TelaUser({ jogo, email, onSalvarPerfil }) {
	const [editando, setEditando] = useState(false);
	const [nome, setNome] = useState(jogo.nome || "Jogador");
	const [secao, setSecao] = useState("");
	const [foto, setFoto] = useState(null);
	useEffect(() => {
		let ativo = true;
		AsyncStorage.getItem("yarnclicker-foto-perfil").then((valor) => { if (ativo) setFoto(valor); }).catch(() => { if (ativo) Alert.alert("Foto de perfil", "Não foi possível carregar a foto salva."); });
		return () => { ativo = false; };
	}, []);

	async function escolherFoto() {
		try {
			if (Platform.OS !== "web") {
				const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (!permissao.granted) {
					Alert.alert("Acesso às fotos", "Permita o acesso à biblioteca para escolher uma foto.");
					return;
				}
			}
			const resultado = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ["images"], allowsEditing: true, aspect: [1, 1], base64: true, quality: 0.3 });
			if (resultado.canceled) return;
			const imagem = resultado.assets[0];
			if (!imagem.base64) throw new Error("Imagem indisponível");
			if (imagem.base64.length > 2_000_000) {
				Alert.alert("Foto muito grande", "Escolha uma imagem menor para o perfil.");
				return;
			}
			const uri = `data:${imagem.mimeType === "image/png" ? "image/png" : "image/jpeg"};base64,${imagem.base64}`;
			await AsyncStorage.setItem("yarnclicker-foto-perfil", uri);
			setFoto(uri);
		} catch (erro) {
			Alert.alert("Foto de perfil", "Não foi possível escolher ou salvar a foto. Tente novamente.");
		}
	}
	const melhorias = [
		...Array.from({ length: jogo.melhoriasPataAntigas || 0 }, (_, i) => `Patinha · Melhoria anterior ${i + 1}`),
		...Array.from({ length: jogo.nivelToque || 0 }, (_, i) => `Toque · Melhoria ${i + 1}`),
		...construcoes.flatMap((item, i) => Array.from({ length: jogo.niveis[i] || 0 }, (_, nivel) => `${item.titulo} · Melhoria ${nivel + 1}`)),
	];

	return (
		<ScrollView style={styles.tela} contentContainerStyle={styles.container}>
			<View style={styles.cabecalho}>
				<Text style={styles.titulo}>Seu perfil</Text>
				<Text style={styles.descricao}>Acompanhe sua jornada no YarnClicker.</Text>
			</View>

			<View style={styles.perfil}>
				<Pressable accessibilityRole="button" accessibilityLabel="Escolher foto de perfil" onPress={escolherFoto} style={styles.avatar}>
					{foto ? <Image source={{ uri: foto }} style={styles.foto} /> : <Ionicons name="person" size={44} color="#fff" />}
				</Pressable>
				<Pressable accessibilityRole="button" onPress={escolherFoto}><Text style={styles.textoBotaoSecundario}>{foto ? "Alterar foto" : "Adicionar foto"}</Text></Pressable>
				{editando ? (
					<TextInput accessibilityLabel="Nome de jogador" style={styles.input} value={nome} onChangeText={setNome} maxLength={40} />
				) : <Text style={styles.nome}>{jogo.nome || "Jogador"}</Text>}
				<Text style={styles.email}>{email}</Text>
			</View>

			<View style={styles.estatisticas}>
				<View style={styles.estatistica}>
					<Text style={styles.valor}>{formatar(jogo.novelos)}</Text>
					<Text style={styles.rotulo}>Novelos</Text>
				</View>
				<View style={styles.divisor} />
				<View style={styles.estatistica}>
					<Text style={styles.valor}>{melhorias.length}</Text>
					<Text style={styles.rotulo}>Melhorias</Text>
				</View>
				<View style={styles.divisor} />
				<View style={styles.estatistica}>
					<Text style={styles.valor}>{jogo.conquistas.length}</Text>
					<Text style={styles.rotulo}>Conquistas</Text>
				</View>
			</View>

			<View style={styles.acoes}>
				<Pressable accessibilityRole="button" onPress={() => {
					if (editando) {
						if (!nome.trim()) return;
						onSalvarPerfil(nome.trim());
					}
					setEditando(!editando);
				}} style={styles.botaoPrimario}>
					<Ionicons name="create-outline" size={20} color="#fff" />
					<Text style={styles.textoBotaoPrimario}>{editando ? "Salvar nome" : "Editar perfil"}</Text>
				</Pressable>
				{editando && <Pressable accessibilityRole="button" onPress={() => { setNome(jogo.nome || "Jogador"); setEditando(false); }} style={styles.botaoSecundario}><Text style={styles.textoBotaoSecundario}>Cancelar</Text></Pressable>}

				<Pressable accessibilityRole="button" onPress={() => setSecao(secao === "conquistas" ? "" : "conquistas")} style={styles.botaoSecundario}>
					<Ionicons name="trophy-outline" size={20} color="#d94b00" />
					<Text style={styles.textoBotaoSecundario}>Ver conquistas</Text>
				</Pressable>
				<Pressable accessibilityRole="button" onPress={() => setSecao(secao === "melhorias" ? "" : "melhorias")} style={styles.botaoSecundario}>
					<Ionicons name="sparkles-outline" size={20} color="#d94b00" />
					<Text style={styles.textoBotaoSecundario}>Ver melhorias</Text>
				</Pressable>
			</View>

			{secao === "conquistas" && <View style={styles.lista}>
				<Text style={styles.nome}>Conquistas</Text>
				{conquistasDisponiveis.map((conquista) => {
					const obtida = jogo.conquistas.includes(conquista.id);
					return <View key={conquista.id} style={styles.item}>
						<Ionicons name={obtida ? "trophy" : "lock-closed-outline"} size={20} color={obtida ? "#d94b00" : "#a89b92"} />
						<View style={styles.itemConteudo}><Text style={styles.itemTitulo}>{conquista.titulo}</Text><Text style={styles.email}>{conquista.descricao} {obtida ? "Conquistada" : "Bloqueada"}</Text></View>
					</View>;
				})}
			</View>}
			{secao === "melhorias" && <View style={styles.lista}>
				<Text style={styles.nome}>Melhorias adquiridas</Text>
				{melhorias.length === 0 ? <Text style={styles.email}>Você ainda não comprou melhorias.</Text> : melhorias.map((melhoria) => <View key={melhoria} style={styles.item}><Ionicons name="checkmark-circle" size={20} color="#d94b00" /><Text style={styles.itemTitulo}>{melhoria}</Text></View>)}
			</View>}
		</ScrollView>
	);
}
