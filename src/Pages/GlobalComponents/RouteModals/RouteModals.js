import React from 'react';
import classes from './RouteModals.module.css';

import classify from '../../../utils/classify';

export default function RouteModals(leftPane = {active:false, url:null}, rightPane = {active:false, url:null}) {

  return (
    <>
    <div className={classify(classes.leftToLive, ((leftPane.active && leftPane.url != null) && classes.active))} >
      <h3>Visit the Live Site</h3>
      <button onClick={() => window.open(leftPane.url, '_blank')}>Live Site</button>
    </div>

    <div className={classify(classes.rightToRepo, (rightPane.active && classes.active))} >
      <h3>Visit the Repository</h3>
      <button onClick={() => window.open(rightPane.url, '_blank')}>Repository</button>
    </div>
    </>
  )
}
