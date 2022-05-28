import React, {useContext} from 'react';
import { ThemeContext } from '../../ContextProviders/ThemeContext';

import classes from './Header.module.css';
import wf from '../../../wireframeTools.module.css';
const {wfbr, wfbb, wfbg, wffr, wffb, wffg} = wf // Wireframing tools

export default function Header() {
  const {themeToggleIcon, headerIcon, setCurrentTheme, currentTheme} = useContext(ThemeContext);

  function toggleTheme() {
    switch (currentTheme) {
      case 'light':
        setCurrentTheme('dark')
        break;
      case 'dark':
        setCurrentTheme('light')
        break;
      default:
        setCurrentTheme('light')
        break;
    }
  }

  return (
    <header>
      <div className={(classes.headerIcon+" "+wfbr)}><img src={headerIcon} /></div>

      <h1 className={(classes.headerName+" "+wfbb)}>Vidal</h1>
      <nav className={(classes.navBar+" "+wfbg)}>

        <ul className={classes.navLinksContainer}>
          <li className={wffb}>Projects</li>
          <li className={wffb}>About Me</li>
          <li className={wffb}>GET IN TOUCH</li>
        </ul>

        <div className={classes.navThemeToggle+" "+wffr}>
          <img 
            src={themeToggleIcon} 
            style={{'cursor':'pointer'}} 
            onClick={toggleTheme} />
        </div>
      </nav>
    </header>
  )
}
