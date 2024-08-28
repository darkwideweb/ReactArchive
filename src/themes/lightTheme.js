import { createTheme, alpha } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2', 
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#64b5f6', 
        contrastText: '#ffffff',
      },
      background: {
        default: '#e3f2fd', 
        paper: '#ffffff',
      },
      text: {
        primary: '#0d47a1', 
        secondary: '#1976d2', 
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: `linear-gradient(145deg, rgba(240, 248, 255, 0.8), rgba(255, 255, 255, 0.8))`,
            borderRadius: '16px',
            boxShadow: `0px 10px 20px ${alpha('#1976d2', 0.1)}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '30px',
            boxShadow: `0px 4px 20px ${alpha('#1976d2', 0.4)}`,
            '&:hover': {
              boxShadow: `0px 6px 25px ${alpha('#1976d2', 0.6)}`,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#0d47a1',
          },
          h5: {
            background: `linear-gradient(45deg, #1976d2, #64b5f6)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
      },
    },
  });
  
  export default lightTheme;