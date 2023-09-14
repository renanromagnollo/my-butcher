export const mountQuery = () => {
    return `
        query {
            allProducts(sortField: "sales", sortOrder: "DSC") {
                id
                name
                price_in_cents
                image_url
            }
        }
    `
}