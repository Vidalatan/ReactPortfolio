import React, { useContext } from 'react';
import classes from './About.module.css';
import { ThemeContext } from '../../ContextProviders/Theme/ThemeContext';

export default function About() {
  const {currentStyle} = useContext(ThemeContext)

  return (
    <>
    <div className={classes.paras}>
      <p className={currentStyle.themeText}>It all started with an interest...</p>

      <p className={currentStyle.themeText}>
        I was a new father, a freshly hired optician, and an avid gamer. It was a weird pallet of interests and responsibilities. But because of these, I stumbled upon coding and programming languages; and I was HOOKED. The first time I looked at the power that programming languages had, the small and big life applications, was like learning how to drive for the first time. For me the joy was (and still is) more about the challenge of solving complex problems than what the end result is (although succeeding does also feel just as good). My very first (partially) working application was a tool that I wanted to utilize in helping me assist customers with finding the perfect eyewear. Eventually my passion for coding grew from a simple hobby to a bit of an obsession. And now I am here, able to build complete and complex sites full of design and logic. 
      </p>

      <p className={currentStyle.themeText}>
        I'm a versatile developer with an extensive history in programming and graphic design. My dedication to continuously learning about new web design trends and concepts has made me a valuable member of any team. I served in the United States Airforce as an Airborne Cryptologic Linguist where I studied Mandarin Chinese to the same fluency as a native speaker. I am dedicated to my work and passions and will never give up on creating my own success. I have several years of management experience where I have learned and developed the skill needed to be efficient and effective at leading a team.
      </p>
    </div>
    </>
  )
}
