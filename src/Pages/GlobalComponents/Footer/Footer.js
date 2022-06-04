import React, {useContext} from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classes from './Footer.module.css';

import linkIcon from './LI-In-Bug.png';

export default function Footer() {
  const {gitHubIcon, mainIcon, currentStyle} = useContext(ThemeContext)

  const gitLink = 'https://github.com/Vidalatan',
        linkedInLink = 'https://www.linkedin.com/in/vidal-tan-2848741b0/'

  return (
    <footer className={currentStyle.secondarybg}>
      <ul className={classes.iconsContainer}>
        <li><a href={gitLink} target='_blank'><img className={classes.footerIcon} src={gitHubIcon} /></a></li>
        <li><a href='#top'><img className={classes.footerIcon} src={mainIcon} /></a></li>
        <li><a href={linkedInLink} target='_blank'><img className={classes.footerIcon} src={linkIcon} /></a></li>
      </ul>
    </footer>
  )
}
