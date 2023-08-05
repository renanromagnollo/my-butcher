import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

const InputContainer = styled.div`
    position: relative;
    width: 350px;
    /* padding: 10px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.lightDark};
    border-radius: 5px;

    svg {
      margin: 0 10px;
    }

`;
const TagInput = styled.input`
    width: 100%;
    border: none;
    padding: 10px 16px;
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    color: ${props => props.theme.colors.darkLight}
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string) =>  void
}

export function InputSearch(props: InputProps) {
  return (
        <InputContainer>
            <TagInput onChange={(event) => props.handleChange(event.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    );
}
