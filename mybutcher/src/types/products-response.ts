import { Product } from "./produtcs"

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[]
    }
}