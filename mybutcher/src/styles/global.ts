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
        width: 100vw;
        /* max-width: 100vw; */
        height: 100vh;
        overflow-x: hidden;
        font-size: 14px;
        color: ${props => props.theme.colors.darkDefault};
        background-color: ${props => props.theme.colors.lightDefault};

        display: grid;
        grid-template-columns: 5fr 1fr;
        grid-template-rows: 70px 40px 1fr 50px;
        grid-template-areas: 
            "header cart"
            "filters cart"
            "main cart"
            "footer footer"
            ;
    }
`;
