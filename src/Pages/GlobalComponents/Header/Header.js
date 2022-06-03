import React, {useContext, useState} from 'react';
import AniCube from '../AniCube/AniCube';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classify from '../../../utils/classify';

import classes from './Header.module.css';

export default function Header() {
  const {themeToggleIcon, mainIcon, toggleCurrentTheme, currentStyle} = useContext(ThemeContext);

  const [menuActive, setMenuActive] = useState(false)
  const [scrollActivity, setScrollActivity] = useState({scrolledDown: false, prevPos: window.scrollY})

  function toggleMenu(e) {
    setMenuActive(!menuActive)
  }

  document.addEventListener('scroll', e => {
    if (window.scrollY > scrollActivity.prevPos) {
      setScrollActivity({scrolledDown: true, prevPos: window.scrollY})
    } else if (window.scrollY < scrollActivity.prevPos) {
      setScrollActivity({scrolledDown: false, prevPos: window.scrollY})
    }
  })
  
  return (
    <>
    <header className={classify(currentStyle.secondarybg, (scrollActivity.scrolledDown && classes.up))}>
      <div className={classes.mainIcon}><img src={mainIcon} /></div>

      <h1 className={classify(classes.headerName,currentStyle.themeAltText)}>Vidal</h1>
      <nav>

        <ul className={classify(classes.navLinksContainer,currentStyle.themeText, currentStyle.secondarybg, (menuActive ? classes.active : ''))}>
          <li className={classes.navLink}> <AniCube optionalStyle={classes.cubeAdjuster}/>Projects</li>
          <li className={classes.navLink}> <AniCube optionalStyle={classes.cubeAdjuster}/>About Me</li>
          <li className={classes.navLink}> <AniCube optionalStyle={classes.cubeAdjuster}/>GET IN TOUCH</li>
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
