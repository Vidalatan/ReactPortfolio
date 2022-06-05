import React, { useContext } from 'react';
import classes from './ContactModal.module.css';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';

import classify from '../../../utils/classify';

export default function ContactModal({active, toggle}) {
  const {currentStyle} = useContext(ThemeContext)

  return (
    <>
    {(active && <div onClick={toggle} className={classes.toggleOff} />)}
    <div className={classify(classes.modalWrapper, currentStyle.altbg, currentStyle.themeText, (active && classes.active))}>
      <h3>Vidal Tan</h3>
      <h4>Contact Information</h4>
      <ul>
        <li className={classify(currentStyle.primarybg, currentStyle.hoverSecondarybg, currentStyle.themeText, currentStyle.hoverThemeText)}><a href='mailto:vidalatan@gmail.com'>Vidalatan@gmail.com</a></li>
        <li className={classify(currentStyle.primarybg, currentStyle.hoverSecondarybg, currentStyle.themeText, currentStyle.hoverThemeText)}><a href='https://github.com/Vidalatan' target='_blank'>Git Hub</a></li>
        <li className={classify(currentStyle.primarybg, currentStyle.hoverSecondarybg, currentStyle.themeText, currentStyle.hoverThemeText)}><a href='https://www.linkedin.com/in/vidal-tan-2848741b0/' target='_blank'>LinkedIn</a></li>
      </ul>
    </div>
    </>
  )
}
