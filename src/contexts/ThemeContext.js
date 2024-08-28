import React, { createContext, useContext, useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('appTheme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('appTheme', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeMode === 'light' ? '#42a5f5' : '#90caf9',
      },
      background: {
        default: themeMode === 'light' ? '#f0f4f8' : '#121212',
        paper: themeMode === 'light' ? '#fff' : '#1e1e1e',
      },
      text: {
        primary: themeMode === 'light' ? '#000' : '#fff',
        secondary: themeMode === 'light' ? '#555' : '#ccc',
      },
    },
    typography: {
      fontFamily: "'Roboto Slab', serif",
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
