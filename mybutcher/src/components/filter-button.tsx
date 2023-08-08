import { styled } from "styled-components"
import { ReactNode, useState, useCallback, useEffect } from 'react';
import { IconAllOff } from "./icons/filter-buttons";
import { IconBoiOff } from './icons/boi_off';
import { IconPorcoOff } from './icons/porco_off';
import { IconFrangoOff } from './icons/frango_off';

interface FilterButtonProps {
    // icon: ReactNode
    category: string
}

const TagFilterButton = styled.button`
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`



export function FilterButton({category} : FilterButtonProps){

    return(
        <TagFilterButton>
            {/* <div>{icon}</div> */}
            <div>{category}</div>
        </TagFilterButton>
    )
}