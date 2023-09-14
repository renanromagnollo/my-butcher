import { styled } from "styled-components"

import { Lato } from 'next/font/google'
import { SearchIcon } from "./icons/search-icon"
import { InputSearch } from "./search"
import { useState } from 'react';

const lato = Lato({
    weight: ['400'], 
    subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
    grid-area: header;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    align-items: center;
    border-bottom: solid 2px ${props => props.theme.colors.lightDark};

    /* background-color: blue; */
`

const Logo = styled.a`
    color: ${props => props.theme.colors.darkDefault};
    font-weight: bolder;
    font-size: 25px;
    line-height: 150%;
    text-decoration: none;
    user-select: none;

    span {
        color: ${props => props.theme.colors.primaryDark}
    }
`
export function Header(props : HeaderProps){

    const [valueSearch, setValueSearch] = useState('')

    function alterarValorSearch(valor: string) {
        setValueSearch(valor)
    }

    return(
        <TagHeader>
            <Logo className={lato.className}>e-<span>butcher</span></Logo>
            <div>
                <InputSearch
                    placeholder="Digite o que deseja procurar..."
                    value={valueSearch}
                    handleChange={alterarValorSearch}
                />
            </div>
        </TagHeader>
    )
}