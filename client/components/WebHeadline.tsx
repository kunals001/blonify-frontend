"use client"
import React from 'react'
import { motion } from 'framer-motion'

const WebHeadline = () => {
  return (
    <div className="headline select-none overflow-hidden flex justify-between items-center">


        <div className="head-text">
        <h2 className="text-[2.6vh] md:text-[2.7vw] lg:text-[2.7vw] font-semibold text-zinc-700 leading-none">Your Next Tech Obsession </h2>
        <h2 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] font-semibold text-zinc-700 leading-none flex overflow-hidden">Starts Here – <motion.div 
        initial={{opacity:0,x:80}} animate={{opacity:1,x:0}} transition={{duration:.5,ease:'easeInOut'}} className="bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text"> Blonify.</motion.div></h2>

        <p className="text-sm md:text-[1vw] lg:text-[1vw] text-zinc-700 block mt-[1vh] md:mt-[1vw] lg:mt-[1vw]">Your daily dose of smart tech starts here.</p></div>

         <div className="h-[7vh] w-[7vh] md:w-[10vw] lg:w-[10vw] md:h-[10vw] lg:h-[10vw] flex items-center justify-center relative duration-700 overflow-hidden">
         <svg
            viewBox="0 0 200 200"
            width="full"
            height="full"
            className="text-4xl md:text-2xl lg:text-2xl tracking-widest animate-spin [animation-duration:3.5s]"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Blonify •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Blonify •
              </textPath>
            </text>
          </svg>

          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[4vh] h-[4vh] md:w-[4vw] md:h-[4vw] lg:w-[4vw] lg:h-[4vw] bg-prime rounded-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
      </div>

      </div>
  )
}

export default WebHeadline