export type Filme = {
    id: number;
    nome: string;
    ano: number;
    duracao: string;
    genero: string;
    poster: string;
    capa: string;
};

export type FilmeDetalhes = Filme & {
    diretor: string;
    sinopse: string;
    classificacao: string;
};