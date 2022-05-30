import React, {useContext, useState} from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classify from '../../../utils/classify';

import classes from './Header.module.css';

export default function Header() {
  const {themeToggleIcon, headerIcon, toggleCurrentTheme, currentStyle} = useContext(ThemeContext);

  const [menuActive, setMenuActive] = useState(false)

  function toggleMenu(e) {
    setMenuActive(!menuActive)
  }
  
  return (
    <>
    <header className={currentStyle.secondarybg}>
      <div className={classes.headerIcon}><img src={headerIcon} /></div>

      <h1 className={classify(classes.headerName,currentStyle.themeAltText)}>Vidal</h1>
      <nav>

        <ul className={classify(classes.navLinksContainer,currentStyle.themeText, currentStyle.secondarybg, (menuActive ? classes.active : ''))}>
          <li className={classes.navLink}>Projects</li>
          <li className={classes.navLink}>About Me</li>
          <li className={classes.navLink}>GET IN TOUCH</li>
        </ul>

        <div className={classify(classes.navLinksMenu, (menuActive ? classes.active : ''))} onClick={toggleMenu}>
          <div className={classify(classes.menuBar, currentStyle.themeFlat)} />
          <div className={classify(classes.menuBar, currentStyle.themeFlat)} />
          <div className={classify(classes.menuBar, currentStyle.themeFlat)} />
        </div>

        <div className={classes.navThemeToggle}>
          <img 
            src={themeToggleIcon} 
            style={{'cursor':'pointer'}} 
            onClick={toggleCurrentTheme} 
          />
        </div>
      </nav>
    </header>
    <div className={classes.headerSpacer}></div>
    </>
  )
}
