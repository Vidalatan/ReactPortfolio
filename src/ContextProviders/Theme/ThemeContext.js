import React, {useState, useEffect} from "react";

import DARKSTYLE from './styles/darkStyle.module.css';
import LIGHTSTYLE from './styles/lightStyle.module.css';
import DarkToggle from './assets/MoonIcoDark.png';
import LightToggle from './assets/SunIcoLight.png';
import EdgeDarkIcon from './assets/EdgeZhero_Logo-C.png';
import EdgeLightIcon from './assets/EdgeZhero_Logo_W-C.png';
import GitHubDark from './assets/GitHub-Mark.png';
import GitHubLight from './assets/GitHub-Mark-Light.png';

export const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentStyle, setCurrentStyle] = useState(LIGHTSTYLE);
  const [mainIcon, setMainIcon] = useState(EdgeDarkIcon);
  const [themeToggleIcon, setThemeToggleIcon] = useState(DarkToggle);
  const [gitHubIcon, setGitHubIcon] = useState(GitHubDark);

  useEffect(() => {
    switch (currentTheme) {
      case 'light':
        setCurrentStyle(LIGHTSTYLE)
        setThemeToggleIcon(DarkToggle)
        setMainIcon(EdgeDarkIcon)
        setGitHubIcon(GitHubDark)
        break;
      case 'dark':
        setCurrentStyle(DARKSTYLE)
        setThemeToggleIcon(LightToggle)
        setMainIcon(EdgeLightIcon)
        setGitHubIcon(GitHubLight)
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
    <ThemeContext.Provider value={{toggleCurrentTheme, themeToggleIcon, mainIcon, currentStyle, gitHubIcon, currentTheme}} {...props} />
  )
}

export default ThemeProvider;