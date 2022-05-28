import React from 'react';
import classify from '../../../../utils/classify';

import classes from '../Header.module.css';

import wf from '../../../../utils/wireframeTools.module.css';
const {wfbr, wfbb, wfbg, wffr, wffb, wffg} = wf // Wireframing tools

export default function NavDrop() {
  return (
    <div className={classify(classes.navLinksDrop, wfbr)}>

    </div>
  )
}
