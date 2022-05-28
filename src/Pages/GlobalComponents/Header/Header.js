import React, {useContext} from 'react';
import { ThemeContext } from '../../ContextProviders/Theme/ThemeContext';
import classify from '../../../utils/classify';

import classes from './Header.module.css';
import wf from '../../../wireframeTools.module.css';
const {wfbr, wfbb, wfbg, wffr, wffb, wffg} = wf // Wireframing tools

export default function Header() {
  const {themeToggleIcon, headerIcon, toggleCurrentTheme, currentStyle} = useContext(ThemeContext);

  
  return (
    <header className={currentStyle.secondarybg}>
      <div className={classes.headerIcon}><img src={headerIcon} /></div>

      <h1 className={classify(classes.headerName,currentStyle.themeAltText)}>Vidal</h1>
      <nav className={classes.navBar}>

        <ul className={classify(classes.navLinksContainer,currentStyle.themeText)}>
          <li>Projects</li>
          <li>About Me</li>
          <li>GET IN TOUCH</li>
        </ul>

        <div className={classes.navThemeToggle}>
          <img 
            src={themeToggleIcon} 
            style={{'cursor':'pointer'}} 
            onClick={toggleCurrentTheme} />
        </div>
      </nav>
    </header>
  )
}
