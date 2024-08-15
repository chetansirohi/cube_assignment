import { useQuery } from '@tanstack/react-query'
import { fetchCustomers } from '../lib/utils'

export const useCustomers = () => {
    return useQuery({
        queryKey: ['customers'],
        queryFn: fetchCustomers,
    })
}