import React, {useContext, useEffect, useState} from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import { RouterContext } from '../../../ContextProviders/Router/RouterContext';
import classify from '../../../utils/classify';

import classes from '../Main.module.css';

export default function Intro() {
  const { currentStyle } = useContext(ThemeContext);
  const router = useContext(RouterContext)

  // Timing Settings (for convenience)
    const highlightInterval = 50;
    const typingInterval = 75;
    const delayInterval = 1000;
  // ---------------------------------

  const greeterMsgE = 'Hello, it\'s nice to meet you...';
  const greeterMsgC = '你好, 很高兴认识你...';

  function makeSpanSequence(msg) {
    const _ = msg.split('');
    return _.map((char, i = 0) => (<span key={i}>{char}</span>))
  }

  const [currentGreetMsg, setCurrentGreetMsg] = useState(makeSpanSequence(greeterMsgC))
  const [typeInto, setTypeInto] =useState('E')
  const [typerEngaged, setTyperEngaged] = useState(false)

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
      setCurrentGreetMsg([(<br key={'br'} />)])
      setTimeout(typeNew, delayInterval)
    }

    function typeNew() {
      const newMessage = (typeInto === 'E') ? makeSpanSequence(greeterMsgE) : makeSpanSequence(greeterMsgC);
      let index = 0;
      const typeTime = setInterval(() => {
        const tmp = index;
        if (index >= newMessage.length){
          clearInterval(typeTime)
          switch (typeInto) {
            case 'C':
              setTypeInto('E')
              setTyperEngaged(false)
              break;
            case 'E':
              setTypeInto('C')
              setTyperEngaged(false)
              break;
          }
        } else {
          (index == 0 && setCurrentGreetMsg([]))
          setCurrentGreetMsg(prev => {
            const _ = [...prev, newMessage[tmp]]
            return _
          })
          index++;
        }
      }, typingInterval);
    }

    setTimeout(highlighter, 1500);
  }

  useEffect(() => {
    (typerEngaged ? greeterTyper() : setTyperEngaged(true))
  }, [typerEngaged])


  return (
    <>
    <h2 className={classes.typerGreeting}>{currentGreetMsg}</h2>

    <div className={classes.introStack}>
      <p>I am a full-stack web developer focusing on UI/UX design.</p>
      
      <p>
        Some call me a programming wizard, digital illustrator, technology nerd... but it's because I have been genuinely invested 
        in technology, more specifically programming, for many years and have recently decided to present
        my skills to the world!
      </p>

      <p>
        Outside of technology, I am a United States Airforce Veteran, music enthusiast, and father of two girls...
      </p>
      
      <button 
      onClick={() => { router.setLocation('/about') }} 
      className={classify(
        classes.moreButton,
        classes.button57, 
        currentStyle.altbg, 
        currentStyle.hoverSecondarybg,
        currentStyle.themeText,
        currentStyle.hoverAltText)}>
        
        More about me...
      </button>
    </div>

    </>
  )
}
