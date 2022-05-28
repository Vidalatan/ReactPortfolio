import React, {useContext} from 'react';
import classes from './Header.module.css';
import wf from '../../../wireframeTools.module.css';
const {wfbr, wfbb, wfbg, wffr, wffb, wffg} = wf // Wireframing tools

export default function Header() {


  return (
    <header>
      <div className={(classes.headerIcon+" "+wfbr)}><img src='' /></div>

      <h1 className={(classes.headerName+" "+wfbb)}>Vidal</h1>
      <nav className={(classes.navBar+" "+wfbg)}>

        <ul className={classes.navLinksContainer}>
          <li className={wffb}>Projects</li>
          <li className={wffb}>About Me</li>
          <li className={wffb}>GET IN TOUCH</li>
        </ul>

        <div className={classes.navThemeToggle+" "+wffr}><img src='' /></div>
      </nav>
    </header>
  )
}
