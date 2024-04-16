// import React, { useState } from 'react';
// import { ThemeProvider } from '@mui/material';
// import { themeCreator } from './base';
// import { StylesProvider } from '@mui/styles';

// export const ThemeContext = React.createContext(
//   (themeName: string): void => {}
// );

// const ThemeProviderWrapper: React.FC = (props) => {
//   const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
//   const [themeName, _setThemeName] = useState(curThemeName);
//   const theme = themeCreator(themeName);
//   const setThemeName = (themeName: string): void => {
//     localStorage.setItem('appTheme', themeName);
//     _setThemeName(themeName);
//   };

//   return (
//     <StylesProvider injectFirst>
//       <ThemeContext.Provider value={setThemeName}>
//         <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
//       </ThemeContext.Provider>
//     </StylesProvider>
//   );
// };

// export default ThemeProviderWrapper;

import React, { useState, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';  // Correct import for ThemeProvider
import { themeCreator } from './base';  // Ensure this is compatible with MUI v5

export const ThemeContext = createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, setThemeName] = useState(curThemeName);
  
  // themeCreator function should return a theme object compatible with MUI v5
  const theme = themeCreator(themeName);  

  const changeThemeName = (newThemeName: string): void => {
    localStorage.setItem('appTheme', newThemeName);
    setThemeName(newThemeName);  // Directly update state without underscore prefix
  };

  return (
    <ThemeContext.Provider value={changeThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;

