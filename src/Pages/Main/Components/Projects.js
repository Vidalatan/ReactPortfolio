import React, { useEffect, useRef, useState } from 'react';
import ProjectsCube from '../../GlobalComponents/ProjectsCube/ProjectsCube';
import classes from '../Main.module.css';

import classify from '../../../utils/classify';


export default function Projects() {
  const [isTouched, setIsTouched] = useState(false)

  return (
    <>
    <div className={classify(classes.projectsInst, (isTouched && classes.hideInst))}><h2>Drag cube and click a project to explore!</h2></div>
    <ProjectsCube touch={{isTouched:isTouched, setIsTouched:setIsTouched}} />
    </>
  )
}