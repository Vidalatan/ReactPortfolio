import React, { useContext } from 'react';
import classes from './ContactModal.module.css';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';

import classify from '../../../utils/classify';

export default function ContactModal() {
  const {currentStyle} = useContext(ThemeContext)
  return (
    <div className={classify(classes.modalWrapper, currentStyle.altbg)}>
      <h3>Vidal Tan</h3>
      <h4>Contact Information</h4>
      <ul>
        <li>Email: <a href='mailto:vidalatan@gmail.com'>Vidalatan@gmail.com</a></li>
        <li><a href='https://github.com/Vidalatan'>Git Hub</a></li>
        <li><a href='https://www.linkedin.com/in/vidal-tan-2848741b0/'>LinkedIn</a></li>
      </ul>
      <button>Open All Socials</button>
    </div>
  )
}
