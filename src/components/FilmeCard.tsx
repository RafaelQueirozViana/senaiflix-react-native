import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Filme } from '../types/filme';

type Props = {
  filme: Filme;
  onPress: () => void;
};

export default function FilmeCard({ filme, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: filme.poster }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.nome}>{filme.nome}</Text>
        <Text style={styles.detalhe}>
          {filme.ano} · {filme.duracao}
        </Text>
        <View style={styles.tag}>
          <Text style={styles.tagTexto}>{filme.genero}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#111" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
  },
  poster: {
    width: 65,
    height: 93,
    borderWidth: 2,
    borderColor: '#9a9a9a',
    backgroundColor: '#e8e8e8',
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  nome: {
    color: '#111',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 6,
  },
  detalhe: {
    color: '#666',
    fontSize: 13,
    marginBottom: 10,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#ebe4e4',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagTexto: {
    color: '#333',
    fontSize: 12,
  },
});