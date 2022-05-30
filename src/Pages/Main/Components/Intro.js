import React, {useContext, useEffect, useState} from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classify from '../../../utils/classify';

import classes from '../Main.module.css';

export default function Intro() {
  const {currentStyle} = useContext(ThemeContext);

  const greeterMsgE = 'Hello, it\'s nice to meet you...';
  const greeterMsgC = '你好, 很高兴认识你...';

  function makeSpanSequence(msg) {
    const _ = msg.split('');
    return _.map((char, i = 0) => (<span key={i} className={`typerChar_${i}`}>{char}</span>))
  }

  const [currentGreetMsg, setCurrentGreetMsg] = useState(makeSpanSequence(greeterMsgE))

  return (
    <>
    <h2 className={classes.typerGreeting}>{currentGreetMsg}</h2>

    <p>I am a full-stack web developer focusing on UI/UX design.</p>
    
    <p>
      I recently graduated from a rigorous bootcamp hosted by SMU where I 
      learned how to make fun and appealing applications. I have been invested 
      in technology, more specifically programming, for many years and have decided 
      it's time to finally step up my game.
    </p>

    <button>More about me...</button>
    </>
  )
}
