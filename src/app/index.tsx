import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 },
      ]}
    >
      <View style={styles.imagem} />
      <Text style={styles.logo}>SENAIFLIX</Text>
      <Text style={styles.subtitulo}>
        Filmes e séries ilimitados. Assista onde quiser.
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/filmes')}
      >
        <Text style={styles.botaoTexto}>Entrar</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
  },
  imagem: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#9a9a9a',
    backgroundColor: '#e8e8e8',
    marginBottom: 20,
  },
  logo: {
    color: '#ee3a24',
    fontSize: 46,
    fontWeight: '900',
    marginBottom: 8,
  },
  subtitulo: {
    color: '#222',
    fontSize: 16,
    lineHeight: 22,
    width: '75%',
    marginBottom: 24,
  },
  botao: {
    backgroundColor: '#ee3a24',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
