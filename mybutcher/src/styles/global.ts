"use client"

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1.6rem;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        font-size: 14px;
        color: ${props => props.theme.colors.darkDefault};
        background-color: ${props => props.theme.colors.lightDefault};
    }
`;
