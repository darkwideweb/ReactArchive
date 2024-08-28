import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#64b5f6', 
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#bbdefb', 
        contrastText: '#1d1d1d',
      },
      background: {
        default: '#0d0d0d', 
        paper: '#1c1c1c', 
      },
      text: {
        primary: '#e3f2fd', 
        secondary: '#bbdefb', 
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: `linear-gradient(145deg, rgba(33, 33, 33, 0.8), rgba(50, 50, 50, 0.8))`,
            borderRadius: '16px',
            boxShadow: `0px 10px 20px ${alpha('#64b5f6', 0.7)}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '30px',
            boxShadow: `0px 4px 20px ${alpha('#64b5f6', 0.5)}`,
            '&:hover': {
              boxShadow: `0px 6px 25px ${alpha('#64b5f6', 0.7)}`,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#e3f2fd',
          },
          h5: {
            background: `linear-gradient(45deg, #64b5f6, #bbdefb)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
      },
    },
  });
  
  export default darkTheme;