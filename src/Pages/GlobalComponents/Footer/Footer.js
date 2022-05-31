import React, {useContext} from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classes from './Footer.module.css';

import linkIcon from './LI-In-Bug.png';

export default function Footer() {
  const {gitHubIcon, mainIcon} = useContext(ThemeContext)

  return (
    <footer>
      <ul className={classes.iconsContainer}>
        <li><img className={classes.footerIcon} src={gitHubIcon} /></li>
        <li><img className={classes.footerIcon} src={mainIcon} /></li>
        <li><img className={classes.footerIcon} src={linkIcon} /></li>
      </ul>
    </footer>
  )
}
