import React, {useContext} from 'react';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import { ThemeContext } from '../../ContextProviders/Theme/ThemeContext';
import classify from '../../utils/classify';

import classes from './Main.module.css';

export default function Main() {
  const {currentStyle} = useContext(ThemeContext);

  return (
    <main className={classify(currentStyle.primarybg, currentStyle.themeText)}>
      <Intro />
      <Projects />
    </main>
  )
}
