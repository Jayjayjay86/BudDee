import React, {createContext, useContext, useState} from 'react';
import {light, dark} from './themes';

import {lightIcons, darkIcons} from './Icons';
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({children, userTheme}) => {
  const [theme, setTheme] = useState(userTheme === 'dark' ? dark : light);
  const [icons, setIcons] = useState(
    userTheme === 'dark' ? darkIcons : lightIcons,
  );
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === light ? dark : light));
    setIcons(prevIcons => (prevIcons === lightIcons ? darkIcons : lightIcons));
  };

  return (
    <ThemeContext.Provider value={{theme, icons, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
