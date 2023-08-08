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
        {categories.map((category: string, i: number) => {
          return (
            <FilterButton 
              key={i}
              selected={type === FilterType[category.toUpperCase()]}
              onClick={() => handleChangeType(FilterType[category.toUpperCase()])}
            >
              {category}
            </FilterButton>
          )
        })}
        
      </ul>
    </TagFilters>
  );
}
