
"use client"

import { styled, ThemeProvider } from "styled-components";

const desktopBreakpoint = '968px'

export const DefaultPageLayout = styled.div`
    padding: 12px 10px;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.backgroundColor};

    @media(min-width: ${desktopBreakpoint}) {
        padding: 34px 160px;
    }

`