import React, { createContext, useState, useContext } from 'react';

//a default theme
const defaultTheme = {
  bgcolor: 'black',
  font:'font-mono',
  size:'text-2xl',
  color:'white'
  

};

export const ThemeContext = createContext();



// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const updateTheme = (updatedTheme) => {
    setTheme({ ...theme, ...updatedTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//  a custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
