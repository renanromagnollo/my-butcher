import styled from "styled-components";
import { useProducts } from "./hooks/useProducts";
import { Item } from "./item";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`

export function ProductsList() {
    const {data} = useProducts()

    return (
        <ListContainer>
            {
                data?.map((product, i) => 
                    <Item key={i} category={product.category} pricePerKg={product.price_in_cents} title={product.name}/>
                )
            }
        </ListContainer>
    )
}