import React, { useState, createContext, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { themeCreator } from './base';

export const ThemeContext = createContext((themeName: string): void => {});

interface ThemeProviderProps {
  children: ReactNode; // Define the type for children
}

const ThemeProviderWrapper: React.FC<ThemeProviderProps> = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, setThemeName] = useState(curThemeName);

  const theme = themeCreator(themeName);

  const changeThemeName = (newThemeName: string): void => {
    localStorage.setItem('appTheme', newThemeName);
    setThemeName(newThemeName);
  };

  return (
    <ThemeContext.Provider value={changeThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
