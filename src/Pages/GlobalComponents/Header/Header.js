import React from 'react';
import classes from './Header.module.css';

export default function Header() {

  console.log(classes);

  return (
    <header>
      <div className={classes.headerIcon}>Img</div>

      <h1 className={classes.headerName}>Vidal</h1>
      <nav className={classes.navBar}>

        <ul className={classes.navLinksContainer}>
          <li>Projects</li>
          <li>About Me</li>
          <li>GET IN TOUCH</li>
        </ul>

        <div>Img</div>
      </nav>
    </header>
  )
}
