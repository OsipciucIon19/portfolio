import React, { createContext, useState, useContext } from 'react';

const DarkThemeContext = createContext();

export const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};

export const DarkThemeProvider = ({ children }) => {
  const isColorSchemaDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(isColorSchemaDark);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = isDarkTheme ? 'dark' : 'light';

  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, toggleTheme, theme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};