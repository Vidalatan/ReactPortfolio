import React, { useEffect, useRef, useState } from 'react';


export default function Projects() {
  const projectDisplay = useRef();

  return (
    <>
    <div ref={projectDisplay}>Projects displayed here...</div>
    </>
  )
}