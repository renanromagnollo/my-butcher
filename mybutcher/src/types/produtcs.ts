export interface Product {
    name: string,
    price: number,
    id: string,
    image_url: string,
    description?: string,
    category?: string,
    quantity: number
}

export interface ProductFetchResponse {
    data: {
        Product: Product
    }
}