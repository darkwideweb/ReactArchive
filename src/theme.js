import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      main: '#64b5f6',
    },
  },
  typography: {
    fontFamily: "'Roboto Slab', serif",
  },
});

export default theme;
