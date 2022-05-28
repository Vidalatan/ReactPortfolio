import React, {useState, useEffect} from "react";

import DarkToggle from './assets/MoonIcoDark.png';
import LightToggle from './assets/SunIcoLight.png';
import EdgeDarkIcon from './assets/EdgeZhero_Logo-C.png';
import EdgeLightIcon from './assets/EdgeZhero_Logo_W-C.png';

export const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [themeToggleIcon, setThemeToggleIcon] = useState(DarkToggle);
  const [headerIcon, setHeaderIcon] = useState(EdgeDarkIcon);

  useEffect(() => {
    switch (currentTheme) {
      case 'light':
        setThemeToggleIcon(DarkToggle)
        setHeaderIcon(EdgeDarkIcon)
        break;
      case 'dark':
        setThemeToggleIcon(LightToggle)
        setHeaderIcon(EdgeLightIcon)
        break;
      default:
        setCurrentTheme('light')
        break
   }
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme, themeToggleIcon, headerIcon}} {...props} />
  )
}

export default ThemeProvider;