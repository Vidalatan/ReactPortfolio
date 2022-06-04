import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';
import classes from './RouteModals.module.css';

import classify from '../../../utils/classify';

export default function RouteModals({leftPane = null, rightPane = null, name=null, setModalsSettings}) {
  const [scrollActivity, setScrollActivity] = useState({scrolledDown: false, prevPos: window.scrollY})
  const { currentStyle } = useContext(ThemeContext);

  document.addEventListener('scroll', e => {
    if (window.scrollY > scrollActivity.prevPos) {
      setModalsSettings({active: false, leftUrl:null, rightUrl:null})
      setScrollActivity({scrolledDown: true, prevPos: window.scrollY})
    } else if (window.scrollY < scrollActivity.prevPos) {
      setScrollActivity({scrolledDown: false, prevPos: window.scrollY})
    }
  })

  function spanLooper(char, num) {
    let _ = []
    for(let i = 0; i <= num; i++) {
      _.push((<span className={currentStyle.themeAltText}>{char}</span>))
    }
    return _
  }

  return (
    <>
    {(rightPane != null && <div onClick={() => setModalsSettings({active: false, leftUrl:null, rightUrl:null})} className={classes.toggleOffDiv} ></div>)}
    <div className={classify(classes.leftToLive, (leftPane != null && classes.active), currentStyle.secondarybg)} >
      <div className={classes.contentRest}>
        <h3 className={classify(currentStyle.themeText)}>Visit {name} Live Site</h3>
        <button className={classify(classes.sendButton, currentStyle.altbg)} onClick={() => window.open(leftPane, '_blank')}>Live Site</button>
      </div>
      <button className={classify(currentStyle.terbg, currentStyle.hoverAltbg, currentStyle.hoverThemeText)} onClick={() => setModalsSettings({active: false, leftUrl:null, rightUrl:null})}>{spanLooper('<', 5)}</button>
    </div>

    <div className={classify(classes.rightToRepo, (rightPane != null && classes.active), currentStyle.secondarybg)} >
      <button className={classify(currentStyle.terbg, currentStyle.hoverAltbg, currentStyle.hoverThemeText)} onClick={() => setModalsSettings({active: false, leftUrl:null, rightUrl:null})}>{spanLooper('>', 5)}</button>
      <div className={classes.contentRest}>
        <h3 className={classify(currentStyle.themeText)}>Visit {name} Repository</h3>
        <button className={classify(classes.sendButton, currentStyle.altbg)} onClick={() => window.open(rightPane, '_blank')}>Repository</button>
      </div>
    </div>
    </>
  )
}
