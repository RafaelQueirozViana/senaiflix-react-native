import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFilme } from '../../hooks/useFilmes';

export default function FilmeDetalhesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const { data: filme, isLoading, isError, refetch } = useFilme(id);

  if (isLoading) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#ee3a24" />
      </View>
    );
  }

  if (isError || !filme) {
    return (
      <View style={styles.centro}>
        <Text style={styles.erro}>Não foi possível carregar o filme</Text>
        <TouchableOpacity style={styles.botaoErro} onPress={() => refetch()}>
          <Text style={styles.botaoTexto}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
    >
      <Image source={{ uri: filme.capa }} style={styles.capa} />

      <View style={styles.conteudo}>
        <Text style={styles.nome}>{filme.nome}</Text>

        <View style={styles.meta}>
          <Text style={styles.metaTexto}>
            {filme.ano} · {filme.duracao}
          </Text>
          <View style={styles.classificacao}>
            <Text style={styles.classificacaoTexto}>{filme.classificacao}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.assistir}>
          <Ionicons name="play" size={18} color="#fff" />
          <Text style={styles.assistirTexto}>Assistir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lista}>
          <Ionicons name="add" size={22} color="#111" />
          <Text style={styles.listaTexto}>Minha lista</Text>
        </TouchableOpacity>

        <View style={styles.secao}>
          <Text style={styles.label}>SINOPSE</Text>
          <Text style={styles.sinopse}>{filme.sinopse}</Text>
        </View>

        <View style={styles.dados}>
          <View style={styles.linha}>
            <Text style={styles.dadoLabel}>Gênero</Text>
            <Text style={styles.dadoValor}>{filme.genero}</Text>
          </View>
          <View style={styles.linha}>
            <Text style={styles.dadoLabel}>Direção</Text>
            <Text style={styles.dadoValor}>{filme.diretor}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  centro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 24,
  },
  capa: {
    width: '100%',
    height: 260,
    backgroundColor: '#e8e8e8',
    borderBottomWidth: 2,
    borderBottomColor: '#111',
  },
  conteudo: {
    padding: 16,
  },
  nome: {
    color: '#111',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 14,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  metaTexto: {
    color: '#333',
    fontSize: 15,
    marginRight: 14,
  },
  classificacao: {
    borderWidth: 1,
    borderColor: '#ee3a24',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  classificacaoTexto: {
    color: '#ee3a24',
    fontSize: 13,
  },
  assistir: {
    backgroundColor: '#ee3a24',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 10,
  },
  assistirTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  lista: {
    borderWidth: 1,
    borderColor: '#9a9a9a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginBottom: 22,
  },
  listaTexto: {
    color: '#111',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  secao: {
    borderTopWidth: 2,
    borderTopColor: '#bdbdbd',
    paddingTop: 14,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#bdbdbd',
  },
  label: {
    color: '#111',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 8,
  },
  sinopse: {
    color: '#222',
    fontSize: 16,
    lineHeight: 24,
  },
  dados: {
    paddingTop: 14,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dadoLabel: {
    color: '#666',
    fontSize: 14,
    width: 104,
  },
  dadoValor: {
    color: '#111',
    fontSize: 14,
    flex: 1,
  },
  erro: {
    color: '#111',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  botaoErro: {
    backgroundColor: '#ee3a24',
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});