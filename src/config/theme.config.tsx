import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

type Props = {
    children: JSX.Element
}

enum themePalette {
    BG = "#ebebeb",
    BG_RED = "#831010",
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
        },
        MuiAppBar:{
            defaultProps:{
                style:{
                    backgroundColor: themePalette.BG_RED
                }
            }
        },
        MuiDrawer:{
            defaultProps:{
                style:{
                    
                }
            },
            styleOverrides: {
                paper:{
                    backgroundColor: themePalette.BG,
                    color: "#000",
                },
                
                
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