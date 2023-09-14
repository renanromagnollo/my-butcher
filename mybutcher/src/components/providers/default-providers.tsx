"use client"

import light from '@/styles/themes/light'
import {ReactNode} from 'react'

import StyledComponentsRegistry from '@/styles/registry' 
import {ThemeProvider} from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


interface DefaultProvidersProps {
    children: ReactNode
}
export function DefaultProviders({children} : DefaultProvidersProps){

    const client = new QueryClient()

    return(
        <QueryClientProvider client={client}>
            <ThemeProvider theme={light}>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}