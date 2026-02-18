'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { createContext, useMemo, useState, useContext } from 'react';
import { Roboto } from 'next/font/google';

const paletteColors = {
  red: '#e94f37',        
  white: '#ffffff',      
  blackDeep: '#050505',  
  blackNuance: '#1a1a1a',
  gunmetal: '#272829',   
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light'); 

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
        palette: {
          mode,
          primary: {
            main: paletteColors.red,
            contrastText: '#ffffff',
          },
          ...(mode === 'light'
            ? {
                background: {
                  default: paletteColors.white,
                  paper: paletteColors.white,
                },
                text: {
                  primary: paletteColors.gunmetal, 
                  secondary: '#5C6266',
                },
              }
            : {
                background: {
                  default: paletteColors.gunmetal, 
                  paper: paletteColors.blackNuance,
                },
                text: {
                  primary: paletteColors.red, 
                  secondary: paletteColors.white  ,      
                },
              }),
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? paletteColors.red : paletteColors.blackDeep,
                color: mode === 'light' ? '#ffffff' : paletteColors.red, 
                boxShadow: mode === 'dark' ? '0px 1px 5px rgba(68, 65, 65, 0.2)' : undefined,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#fff' : paletteColors.blackNuance,
              }
            }
          }
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}