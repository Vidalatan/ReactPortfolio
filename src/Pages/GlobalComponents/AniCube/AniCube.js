import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../../ContextProviders/Theme/ThemeContext';

import classes from './AniCube.module.css';


export default function Projects({canvasWidth, canvasHeight, optionalStyle}) {
  const { currentTheme } = useContext(ThemeContext)
  const aniCube = useRef()

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      const COLOR_BG = (currentTheme == 'light' ? '#325273': '#0A0A0A');
      const COLOR_CUBE = "yellow";
      const SPEED_X = 0.05;
      const SPEED_Y = 0.15;
      const SPEED_Z = 0.10;
      const POINT3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };
      

      var canvas = document.createElement("canvas");
      optionalStyle ? canvas.classList.add(optionalStyle) : canvas.style = `width: ${(canvasWidth ?? '2')}rem ; height: ${canvasHeight ?? '2'}rem`;
      aniCube.current.appendChild(canvas);
      var ctx = canvas.getContext("2d");
      
      var h = document.documentElement.clientHeight;
      var w = document.documentElement.clientWidth;
      canvas.height = h;
      canvas.width = w;

      ctx.fillStyle = COLOR_BG;
      ctx.strokeStyle = COLOR_CUBE;
      ctx.lineWidth = w / 100;
      ctx.lineCap = "round";
      

      var cx = w / 2;
      var cy = h / 2;
      var cz = 0;
      var size = h / 4;
      var vertices = [
          new POINT3D(cx - size, cy - size, cz - size),
          new POINT3D(cx + size, cy - size, cz - size),
          new POINT3D(cx + size, cy + size, cz - size),
          new POINT3D(cx - size, cy + size, cz - size),
          new POINT3D(cx - size, cy - size, cz + size),
          new POINT3D(cx + size, cy - size, cz + size),
          new POINT3D(cx + size, cy + size, cz + size),
          new POINT3D(cx - size, cy + size, cz + size)
      ];
      var edges = [
          [0, 1], [1, 2], [2, 3], [3, 0], // back face
          [4, 5], [5, 6], [6, 7], [7, 4], // front face
          [0, 4], [1, 5], [2, 6], [3, 7] // connecting sides
      ];
      

      var timeDelta, timeLast = 0;
      requestAnimationFrame(loop);
      
      function loop(timeNow) {
      

          timeDelta = timeNow - timeLast;
          timeLast = timeNow;
      

          ctx.fillRect(0, 0, w, h);
      
          // z axis
          let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
          for (let v of vertices) {
              let dx = v.x - cx;
              let dy = v.y - cy;
              let x = dx * Math.cos(angle) - dy * Math.sin(angle);
              let y = dx * Math.sin(angle) + dy * Math.cos(angle);
              v.x = x + cx;
              v.y = y + cy;
          }
      
          // x axis
          angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
          for (let v of vertices) {
              let dy = v.y - cy;
              let dz = v.z - cz;
              let y = dy * Math.cos(angle) - dz * Math.sin(angle);
              let z = dy * Math.sin(angle) + dz * Math.cos(angle);
              v.y = y + cy;
              v.z = z + cz;
          }
      
          // y axis
          angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
          for (let v of vertices) {
              let dx = v.x - cx;
              let dz = v.z - cz;
              let x = dz * Math.sin(angle) + dx * Math.cos(angle);
              let z = dz * Math.cos(angle) - dx * Math.sin(angle);
              v.x = x + cx;
              v.z = z + cz;
          }
      
          // draw each edge
          for (let edge of edges) {
              ctx.beginPath();
              ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
              ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
              ctx.stroke();
          }
      
          // call the next frame
          requestAnimationFrame(loop);
      }
    } else {
      setIsMounted(true)
    }
  }, [isMounted])
  


  return (
    <div ref={aniCube} className={classes.aniCube}></div>
  )
}