import React, {useState, useEffect} from "react";

export const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    
  })

  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme}} {...props} />
  )
}

export default ThemeProvider;