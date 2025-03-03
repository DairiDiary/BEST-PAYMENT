import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f19db5',
    },
    secondary: {
      main: '#932993',
    },
    background: {
      default: '#FFF5F8',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5fb955',
    },
    secondary: {
      main: '#932993',
    },
    background: {
      default: '#1C1C1C',
      paper: '#2C2C2C',
    },
    text: {
      primary: '#F5F5F5',
    },
  },
});
