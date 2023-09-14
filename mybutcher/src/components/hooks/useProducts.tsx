import { ProductsFetchResponse } from '@/types/products-response'
import { mountQuery } from '@/utils/graphql-filters'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, {query})
}

export function useProducts() {
    const query = mountQuery()
    const {data} = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products']
    })

    console.log('useProducts data:', data?.data.data.allProducts)
    const products = data?.data?.data?.allProducts

    return {
        data: products
    }
}