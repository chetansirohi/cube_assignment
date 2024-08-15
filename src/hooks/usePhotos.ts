import { useQuery } from '@tanstack/react-query'
import { fetchPhotos } from '../lib/utils'

export const usePhotos = () => {
    return useQuery({
        queryKey: ['photos'],
        queryFn: fetchPhotos,
        refetchInterval: 10000, // Refetch every 10 seconds
    })
}