import React, {useContext} from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classify from '../../../utils/classify';

import classes from './Header.module.css';

export default function Header() {
  const {themeToggleIcon, headerIcon, toggleCurrentTheme, currentStyle} = useContext(ThemeContext);

  function toggleMenu(e) {
    document.querySelector(`.${classes.navLinksContainer}`).classList.toggle(classes.active);
    document.querySelector(`.${classes.navLinksMenu}`).classList.toggle(classes.active);
  }
  
  function navThemeToggleF(e) {
    toggleCurrentTheme();
    document.querySelectorAll(`.${classes.active}`).forEach((item) => {
      item.classList.toggle(classes.active);
    })
  }
  
  return (
    <header className={currentStyle.secondarybg}>
      <div className={classes.headerIcon}><img src={headerIcon} /></div>

      <h1 className={classify(classes.headerName,currentStyle.themeAltText)}>Vidal</h1>
      <nav>

        <ul className={classify(classes.navLinksContainer,currentStyle.themeText, currentStyle.secondarybg)}>
          <li className={classes.navLink}>Projects</li>
          <li className={classes.navLink}>About Me</li>
          <li className={classes.navLink}>GET IN TOUCH</li>
        </ul>

        <div className={classes.navLinksMenu} onClick={toggleMenu}>
          <div className={classify(classes.menuBar, currentStyle.terbg)} />
          <div className={classify(classes.menuBar, currentStyle.terbg)} />
          <div className={classify(classes.menuBar, currentStyle.terbg)} />
        </div>

        <div className={classes.navThemeToggle}>
          <img 
            src={themeToggleIcon} 
            style={{'cursor':'pointer'}} 
            onClick={navThemeToggleF} 
          />
        </div>
      </nav>
    </header>
  )
}
