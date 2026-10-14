import { useQuery } from '@tanstack/react-query';
import { getFilmes, getFilme } from '../api/api';

export function useFilmes() {
    return useQuery({
        queryKey: ['filmes'],
        queryFn: getFilmes,
    });
}

export function useFilme(id: string) {
    return useQuery({
        queryKey: ['filme', id],
        queryFn: () => getFilme(id),
    });
}