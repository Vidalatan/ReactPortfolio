import React, {useEffect, useState} from 'react';

import classes from '../Main.module.css';

export default function Intro() {
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
      const newMessage = makeSpanSequence(greeterMsgE);
      let index = 0;
      setCurrentGreetMsg([newMessage[0]])
      const typeTime = setInterval(() => {
        if (index >= newMessage.length){
          clearInterval(typeTime)
        } else {
          setCurrentGreetMsg(prev => {
            const _ = [...prev, newMessage[index]]
            return _
          })
          index++
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
        I recently graduated from a rigorous bootcamp hosted by SMU where I 
        learned how to make fun and appealing applications. I have been invested 
        in technology, more specifically programming, for many years and have decided 
        it's time to finally step up my game.
      </p>
      
      <button className={classes.moreButton}>More about me...</button>
    </div>

    </>
  )
}
