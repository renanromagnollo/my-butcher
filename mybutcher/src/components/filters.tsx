import { styled } from "styled-components"

interface FilteresProps {

}

const TagFilters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: darkviolet; */
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
`

export function Filters(props : FilteresProps){
    return(
        <TagFilters>
            <ul>
                <li>Todos</li>
                <li>Boi</li>
                <li>Porco</li>
                <li>Frango</li>
            </ul>
        </TagFilters>
    )
}