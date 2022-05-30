import React, {useContext, useEffect, useState} from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classify from '../../../utils/classify';

import classes from '../Main.module.css';

export default function Intro() {
  // Timing Settings (for convenience)
    const highlightInterval = 50;
    const typingInterval = 100;
    const delayInterval = 1000;
  // ---------------------------------

  const {currentStyle} = useContext(ThemeContext);

  const greeterMsgE = 'Hello, it\'s nice to meet you...';
  const greeterMsgC = '你好, 很高兴认识你...';

  function makeSpanSequence(msg) {
    const _ = msg.split('');
    return _.map((char, i = 0) => (<span key={i}>{char}</span>))
  }

  const [currentGreetMsg, setCurrentGreetMsg] = useState(makeSpanSequence(greeterMsgC))

  function greeterTyper() {
    function highlighter() {
      let index = currentGreetMsg.length
      const highTime = setInterval(() => {
        if (index <= 0) {
          clearInterval(highTime)
          setTimeout(clearGreeting, delayInterval);
        } else {
          setCurrentGreetMsg(prev => {
            prev.splice(index, 1, (<span key={index} className={classes.typerH}>{currentGreetMsg[index].props.children}</span>))
            return [...prev]
          })
          index--
        }
      }, highlightInterval);
    }

    function clearGreeting() {
      setCurrentGreetMsg([""])
      setTimeout(typeNew, delayInterval)
    }

    function typeNew() {
      const newMessage = makeSpanSequence(greeterMsgE);
      let index = -1;
      const typeTime = setInterval(() => {
        if (index >= newMessage.length){
          clearInterval(typeTime)
        } else {
          setCurrentGreetMsg(prev => {
            console.log(index);
            const _ = [...prev, newMessage[index]]
            return _
          })
          index++
        }
      }, typingInterval);
    }

    highlighter()
  }

  return (
    <>
    <h2 className={classes.typerGreeting} onClick={greeterTyper}>{currentGreetMsg}</h2>

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
