import { BioRhyme } from "next/font/google"
import Image from "next/image"
import { styled } from "styled-components"

interface ItemProps {
    title: string
    category: string
    pricePerKg: number
}

const ItemContainer = styled.div`
    max-width: 250px;
    /* max-height: 295px; */
    border: 2px solid ${props => props.theme.colors.primaryDark};
    `

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    
    > div {
        width: 100%;
        padding: 10px 0;
        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        background-color: ${props => props.theme.colors.lightDark};
    }
`

const ImageArea = styled.div`
    width: 100%;
    max-height: 198px;
    position: relative;
    overflow: hidden;
    /* background-image: url('https://baconmockup.com/250/295/'); */

    /* img {
        object-fit: cover;
    } */
`

const ImageInfos = styled.div`
    position: absolute;
    z-index: 50;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    /* background-color: blue; */
    > div {
        align-self: flex-start;
        background-color: ${props => props.theme.colors.primaryDark};
        padding: 5px;
        color: ${props => props.theme.colors.lightDefault}
    }

    h2 {
        align-self: center;
        color: ${props => props.theme.colors.lightDefault};
    }

    img {
        justify-self: flex-end;
        align-self: flex-end;
        /* right: 0; */
    }
`

const ItemButton = styled.button`
    width: 100%;
    color: ${props => props.theme.colors.lightDefault};
    background-color: ${props => props.theme.colors.actionSucess};
    border: none;
    padding: 5px 0;
    cursor: pointer;
`

export function Item(props : ItemProps){
    return(
        <ItemContainer>
            <ItemContent>
                <ImageArea>
                    <ImageInfos>
                        <div>R$35,00/kg</div>
                        <h2>Title</h2>
                        <Image src={'/flag-boi.png'} width={45} height={33} alt="Icon boi"/>
                    </ImageInfos>
                    <Image src={'https://baconmockup.com/235/198/'} width={235} height={198} alt="Picture of item" style={{objectFit: 'cover'}}/>
                </ImageArea>
                <div>
                    <div>Counter</div>
                    <div>Total</div>
                </div>
                <div>
                    <ItemButton>Pedir</ItemButton>
                </div>
            </ItemContent>
        </ItemContainer>
    )
}