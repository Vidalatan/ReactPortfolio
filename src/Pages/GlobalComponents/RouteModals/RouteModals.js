import React from 'react';
import classes from './RouteModals.module.css';

import classify from '../../../utils/classify';

export default function RouteModals({leftPane = null, rightPane = null}) {

  console.log(leftPane, rightPane);

  return (
    <>
    <div className={classify(classes.leftToLive, (leftPane != null && classes.active))} >
      <h3>Visit the Live Site</h3>
      <button onClick={() => window.open(leftPane, '_blank')}>Live Site</button>
    </div>

    <div className={classify(classes.rightToRepo, (rightPane != null && classes.active))} >
      <h3>Visit the Repository</h3>
      <button onClick={() => window.open(rightPane, '_blank')}>Repository</button>
    </div>
    </>
  )
}
