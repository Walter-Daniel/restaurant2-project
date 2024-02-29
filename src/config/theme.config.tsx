import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

type Props = {
    children: JSX.Element
}

enum themePalette {
    BG = "#f9f6f4",
    BG_RED = "#831010",
    PINK = "#d90429",
    FONT_GLOBAL = "'Montserrat', sans-serif"

}

const theme = createTheme({
    palette: {
        mode: "light",
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
        },
        MuiAppBar:{
            defaultProps:{
                style:{
                    backgroundColor: themePalette.BG,
                    color: 'black'
                }
            },
        },
        MuiDrawer:{
            styleOverrides: {
                paper:{
                    backgroundColor: 'white',
                    color: 'black',
                },   
            },
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