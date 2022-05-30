import React, {useState, useEffect} from "react";

import DARKSTYLE from './styles/darkStyle.module.css';
import LIGHTSTYLE from './styles/lightStyle.module.css';
import DarkToggle from './assets/MoonIcoDark.png';
import LightToggle from './assets/SunIcoLight.png';
import EdgeDarkIcon from './assets/EdgeZhero_Logo-C.png';
import EdgeLightIcon from './assets/EdgeZhero_Logo_W-C.png';

export const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentStyle, setCurrentStyle] = useState(LIGHTSTYLE);
  const [themeToggleIcon, setThemeToggleIcon] = useState(DarkToggle);
  const [headerIcon, setHeaderIcon] = useState(EdgeDarkIcon);

  useEffect(() => {
    switch (currentTheme) {
      case 'light':
        setCurrentStyle(LIGHTSTYLE)
        setThemeToggleIcon(DarkToggle)
        setHeaderIcon(EdgeDarkIcon)
        break;
      case 'dark':
        setCurrentStyle(DARKSTYLE)
        setThemeToggleIcon(LightToggle)
        setHeaderIcon(EdgeLightIcon)
        break;
      default:
        setCurrentTheme('light')
        break
   }
  }, [currentTheme])

  function toggleCurrentTheme() {
    switch (currentTheme) {
      case 'light':
        setCurrentTheme('dark')
        break;
      case 'dark':
        setCurrentTheme('light')
        break;
      default:
        setCurrentTheme('light')
        console.error('Invalid theme passed in. Defaulting to light');
        break;
    }
  }

  return (
    <ThemeContext.Provider value={{toggleCurrentTheme, themeToggleIcon, headerIcon, currentStyle}} {...props} />
  )
}

export default ThemeProvider;