import React, { useContext } from 'react';
import classes from './ContactModal.module.css';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';

import classify from '../../../utils/classify';

export default function ContactModal({active, toggle}) {
  const {currentStyle} = useContext(ThemeContext)

  return (
    <>
    {(active && <div onClick={toggle} className={classify(classes.toggleOff, (active && classes.active))} />)}
    <div className={classify(classes.modalWrapper, currentStyle.altbg, currentStyle.themeText, (active && classes.active))}>
      <h3>Vidal Tan</h3>
      <h4>Contact Information</h4>
      <ul>
        <li className={classify(currentStyle.primarybg, currentStyle.hoverSecondarybg, currentStyle.themeText, currentStyle.hoverThemeText)}><a href='mailto:vidalatan@gmail.com'>Vidalatan@gmail.com</a></li>
        <li onClick={() => { window.open('https://github.com/Vidalatan') }} className={classify(currentStyle.primarybg, currentStyle.hoverSecondarybg, currentStyle.themeText, currentStyle.hoverThemeText)}><a href='https://github.com/Vidalatan'>Git Hub</a></li>
        <li onClick={() => { window.open('https://www.linkedin.com/in/vidal-tan-2848741b0/') }} className={classify(currentStyle.primarybg, currentStyle.hoverSecondarybg, currentStyle.themeText, currentStyle.hoverThemeText)}><a href='https://www.linkedin.com/in/vidal-tan-2848741b0/'>LinkedIn</a></li>
      </ul>
    </div>
    </>
  )
}
