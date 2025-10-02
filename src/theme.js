import { createTheme } from "@mui/material/styles";

export const getAppTheme = mode =>
  createTheme({
    palette: {
      mode,
      primary: {
        // main: mode === 'light' ? '#08191fff' : '#FFC300',
        main: mode === 'light' ? '#c94ae9ff' : '#FFC300',
      },
      secondary: {
        main: mode === 'light' ? '#d99312ff' : '#2189a3ff',
      },

      ...(mode === 'dark' && {
        background: {
          default: '#0a0a0a', //  background
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#bdbdbd',
        },
      }),
      // Light Mode
      ...(mode === 'light' && {
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
        text: {
          primary: '#0a0a0a',
          secondary: '#4d535b',
        },
      }),
    },
    typography: {
      fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    },

    headerFooterBg: '#196072ff',
  });
