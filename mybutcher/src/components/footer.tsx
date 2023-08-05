import { styled } from "styled-components"
import { LogoRenan } from "./icons/renan-romagnollo"

interface FooterProps {

}

const TagFooter = styled.footer`
    grid-area: footer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.darkDefault};

    svg {
        width: 200px;
    }
`

export function Footer(props : FooterProps){
    return(
        <TagFooter>
            <LogoRenan/>
        </TagFooter>
    )
}