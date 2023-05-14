import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0971f1',
      dark: '#053e85',
      contrastText: '#fff',
    },
    neutral: {
      main: '#f5f5f5',
      contrastText: '#000',
    },
    background: {
      paper: '#f5f5f5',
      vieport: '#eeeeee',
    },
    icon: {
      menu: '#F00',
      darkMode: '#448aff',
    },
    text: {
      primary: '#111111',
    },
    formInput: {
      main: '#808080',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#0971f1',
      dark: '#053e88',
      contrastText: '#fff',
    },
    neutral: {
      main: '#9e9e9e',
      contrastText: '#fff',
      icon: '#0F0',
    },
    background: {
      paper: '#616161',
      vieport: '#9e9e9e',
    },

    formInput: {
      main: '#e0e0e0',
    },
    icon: {
      main: '#00F',
      menu: '#0F0',
      darkMode: '#ffff00',
    },
  },
});
