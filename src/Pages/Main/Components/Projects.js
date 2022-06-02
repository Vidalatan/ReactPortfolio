import React, { useEffect, useRef, useState } from 'react';
import ProjectsCube from '../../GlobalComponents/ProjectsCube/ProjectsCube';


export default function Projects() {
  const projectDisplay = useRef();

  return (
    <>
    <div ref={projectDisplay}>Projects displayed here...</div>
    <ProjectsCube />
    </>
  )
}