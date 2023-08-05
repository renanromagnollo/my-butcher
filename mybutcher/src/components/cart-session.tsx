import { styled } from "styled-components"

interface CartSessionProps {

}

const Cart = styled.div`
    grid-area: cart;
    background-color: ${props => props.theme.colors.lightDark};
    height: 100%;
`


export function CartSession(props : CartSessionProps){
    return(
        <Cart>Cart Session</Cart>
    )
}