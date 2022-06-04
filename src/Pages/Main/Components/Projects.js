import React, { useEffect, useRef, useState } from 'react';
import ProjectsCube from '../../GlobalComponents/ProjectsCube/ProjectsCube';
import classes from '../Main.module.css';


export default function Projects() {

  return (
    <>
    <div className={classes.projectsInst}><h2>Drag cube and click a project to explore!</h2></div>
    <ProjectsCube />
    </>
  )
}