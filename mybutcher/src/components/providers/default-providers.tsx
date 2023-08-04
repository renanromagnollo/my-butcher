"use client"

import light from '@/styles/themes/light'
import {ReactNode} from 'react'

import StyledComponentsRegistry from '@/styles/registry' 
import {ThemeProvider} from 'styled-components'


interface DefaultProvidersProps {
    children: ReactNode
}
export function DefaultProviders({children} : DefaultProvidersProps){
    return(
        <ThemeProvider theme={light}>
            {children}
        </ThemeProvider>
    )
}