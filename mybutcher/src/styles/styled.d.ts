import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primaryLight: string,
            primaryDefault: string,
            primaryDark: string,

            secondLight: string,
            secondDefault: string,
            secondDark: string,

            actionSucess: string,
            actionDanger: string,
            actionDisable: string,

            lightDefault: string,
            lightDark: string,

            darkDefault: string,
            darkLight: string,

            backgroundColor: string,
        },

        shadow: {
            default: string
        }
    }
}