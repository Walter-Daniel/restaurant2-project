import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

type Props = {
    children: JSX.Element
}

enum themePalette {
    BG = "#000000",
    PINK = "#f72585",
    FONT_GLOBAL = "'Montserrat', sans-serif"

}

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: themePalette.BG,
        },
        primary:{
            main: themePalette.PINK
        },
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL
    },
    components: {
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: 'none',
                    borderRadius: '15rem'
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}