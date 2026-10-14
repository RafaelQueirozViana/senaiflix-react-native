import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFilmes } from '../hooks/useFilmes';
import FilmeCard from '../components/FilmeCard';

export default function FilmesScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { data, isLoading, isError, refetch, isRefetching } = useFilmes();

    return (
        <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
                <Text style={styles.logo}>SENAIFLIX</Text>
            </View>

            {isLoading && (
                <View style={styles.centro}>
                    <ActivityIndicator size="large" color="#ee3a24" />
                </View>
            )}

            {isError && (
                <View style={styles.centro}>
                    <Text style={styles.erro}>Não foi possível carregar os filmes</Text>
                    <TouchableOpacity style={styles.botao} onPress={() => refetch()}>
                        <Text style={styles.botaoTexto}>Tentar novamente</Text>
                    </TouchableOpacity>
                </View>
            )}

            {data && (
                <FlatList
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    refreshing={isRefetching}
                    onRefresh={() => refetch()}
                    contentContainerStyle={{ paddingBottom: insets.bottom }}
                    ListHeaderComponent={<Text style={styles.titulo}>Catálogo</Text>}
                    renderItem={({ item }) => (
                        <FilmeCard
                            filme={item}
                            onPress={() => router.push(`/filme/${item.id}`)}
                        />
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        paddingHorizontal: 16,
        paddingBottom: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#111',
    },
    logo: {
        color: '#ee3a24',
        fontSize: 24,
        fontWeight: '900',
    },
    titulo: {
        color: '#111',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#c8c8c8',
    },
    centro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    erro: {
        color: '#111',
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
    botao: {
        backgroundColor: '#ee3a24',
        paddingVertical: 14,
        paddingHorizontal: 24,
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
    },
});