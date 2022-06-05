import React, {useContext, useState} from 'react';
import AniCube from '../AniCube/AniCube';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import { RouterContext } from '../../../ContextProviders/Router/RouterContext';
import classes from './Header.module.css';

import classify from '../../../utils/classify';

export default function Header() {
  const {themeToggleIcon, mainIcon, toggleCurrentTheme, currentStyle} = useContext(ThemeContext);
  const router = useContext(RouterContext);

  const [menuActive, setMenuActive] = useState(false)
  const [scrollActivity, setScrollActivity] = useState({scrolledDown: false, prevPos: window.scrollY})

  function toggleMenu(e) {
    setMenuActive(!menuActive)
  }

  document.addEventListener('scroll', e => {
    if (window.scrollY > scrollActivity.prevPos) {
      setMenuActive(false)
      setScrollActivity({scrolledDown: true, prevPos: window.scrollY})
    } else if (window.scrollY < scrollActivity.prevPos) {
      setScrollActivity({scrolledDown: false, prevPos: window.scrollY})
    }
  })
  return (
    <>
    <header className={classify(currentStyle.secondarybg, (scrollActivity.scrolledDown && classes.up))}>
      <div className={classes.mainIcon}><a className={classes.mainIcon} onClick={() => router.setLocation('/#top')} href='#top'><img src={mainIcon} /></a></div>

      <h1 className={classify(classes.headerName,currentStyle.themeAltText)}>Vidal</h1>
      <nav>

        <ul className={classify(classes.navLinksContainer,currentStyle.themeText, currentStyle.secondarybg, (menuActive ? classes.active : ''))}>
          <li className={classes.navLink}>
            <AniCube optionalStyle={classes.cubeAdjuster}/>
            <a onClick={() => router.setLocation('/#projectsJump')} href='/#projectsJump'>Projects</a>
          </li>
          <li className={classes.navLink}> 
            <AniCube optionalStyle={classes.cubeAdjuster}/>
            <a onClick={() => router.setLocation('/about')}>About Me</a>
          </li>
          <li className={classes.navLink}> 
            <AniCube optionalStyle={classes.cubeAdjuster}/>
            <a>GET IN TOUCH</a>
          </li>
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
