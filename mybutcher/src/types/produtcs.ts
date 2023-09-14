export interface Product {
    name: string,
    price_in_cents: number,
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