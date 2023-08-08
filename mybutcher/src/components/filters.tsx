import { styled } from "styled-components";
// import { FilterButton } from "./filter-button";
import { useCallback, useState } from "react";
import {
  IconTodosOff,
  IconTodosOn,
  IconBoiOff,
  IconBoiOn,
  IconFrangoOff,
  IconFrangoOn,
  IconPorcoOff,
  IconPorcoOn,
} from "@/components/icons/filter-buttons";
import { FilterType } from "@/types/filter-types";

interface FilterButtonProps {
  selected: boolean
  // category: string
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

    li {
      user-select: none;
    }
  }
`;

const FilterButton = styled.li<FilterButtonProps>`
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: ${props => props.selected ? '4px solid red'  : 'none'};
`


const categories = ["Todos", "Boi", "Porco", "Frango"];

export function Filters() {
  
  const [type, setType] = useState(FilterType.ALL)

  function handleChangeType(value: FilterType) {
    setType(value)
  }

  return (
    <TagFilters>
      <ul>
        <FilterButton 
          selected={type === FilterType.ALL}
          onClick={() => handleChangeType(FilterType.ALL)}
        >
          Todos
        </FilterButton>
        <FilterButton 
          selected={type === FilterType.BOI}
          onClick={() => handleChangeType(FilterType.BOI)}
        >
          Boi
        </FilterButton>
        <FilterButton 
          selected={type === FilterType.PORCO}
          onClick={() => handleChangeType(FilterType.PORCO)}
        >
          Porco
        </FilterButton>
        <FilterButton 
          selected={type === FilterType.FRANGO}
          onClick={() => handleChangeType(FilterType.FRANGO)}
        >
          Frango
        </FilterButton>
      </ul>
    </TagFilters>
  );
}
