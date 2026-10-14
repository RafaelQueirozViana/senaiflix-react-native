import { Filme, FilmeDetalhes } from '../types/filme';

const API_URL = 'http://10.92.201.130:3000';

export async function getFilmes(): Promise<Filme[]> {
    const response = await fetch(`${API_URL}/filmes`);
    if (!response.ok) throw new Error('Erro ao buscar filmes');
    return response.json();
}

export async function getFilme(id: string): Promise<FilmeDetalhes> {
    const response = await fetch(`${API_URL}/filmes/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar filme');
    return response.json();
}