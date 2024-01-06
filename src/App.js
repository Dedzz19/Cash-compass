import React, { useEffect, useState } from 'react'
import './styles.css'
import { AnimatePresence,motion} from "framer-motion"
import logo from './image/Frame 1.png'
import Page1 from './Components/Page1'
export default function App() {
  const[active,setActive]=useState(1)
  const[hover,setHover]=useState(1)
  const[hover1,setHover1]=useState(1)


  const handleHover = (value) => {
    setHover1(0)
    setHover(value)
  }

  const resetHover = () => {
    setHover1(active)
    setHover(active)
  }

  const handleHover1 = (value) => {
    setHover1(value)
    setActive(value)
  }

  return (
    <section className='bg-primary h-screen w-screen overflow-hidden pt-6 bg-name'>
      <nav className='nav-grid md:px-4 pb-8'>
        {/* Logo */}
        <div className=' place-content-center flex items-center'>
          <img src={logo} alt='logo' />
        </div>
        {/* Navigation Items */}
        <div className='grid grid-rows-1 grid-flow-col items-center Baguede relative'>
          <motion.h4
            whileHover={() => handleHover(1)} onClick={() => handleHover1(1)} onMouseLeave={resetHover}
           className='text-lg font-medium cursor-pointer'>Features</motion.h4>
          <motion.h4 
          whileHover={() => handleHover(10.5)} onClick={() => handleHover1(10.5)} onMouseLeave={resetHover}
          className='text-lg font-medium cursor-pointer'>Pricing</motion.h4>
          <motion.h4 
            whileHover={() => handleHover(19)} onClick={() => handleHover1(19)} onMouseLeave={resetHover}
            className='text-lg font-medium cursor-pointer'>Help</motion.h4>
          <motion.h4 
          whileHover={() => handleHover(26.2)}
          onClick={() => handleHover1(26.2)}
          onMouseLeave={resetHover}
          className='text-lg font-medium cursor-pointer'>Blog</motion.h4>
          <motion.h4 
          whileHover={() => handleHover(36.2)}
          onClick={() => handleHover1(36.2)}
          onMouseLeave={resetHover}
          className='text-lg font-medium cursor-pointer'>About Us</motion.h4>
          {/* lines */}
          <section className='absolute bottom-0'>
          <div className={`absolute transform duration-300 bottom-[10px] h-[2px] bg-black w-[5rem] ${
          hover >= 1 ?
            hover > 1 && hover < 11
              ? ` translate-x-[10.5rem] `:
              hover > 10.5 && hover < 20
              ? `translate-x-[19.2rem]`:
              hover > 19 && hover < 36
              ? `translate-x-[27.2rem]`:
              hover > 36 && hover < 40
              ? `translate-x-[36.2rem] `
              : ``
            :'hidden'
            }`}></div>

            {/* hover line */}
            <div className={`hidden xl:absolute bottom-[10px] h-[2px] bg-black w-[5rem] transform duration-300 ${
              hover1 >= 1 ?
                hover1 > 1 && hover1 < 11
                  ? `translate-x-[10.5rem]`:
                  hover1 > 10.5 && hover1 < 20
                  ? `translate-x-[19.2rem]`:
                  hover1 > 19 && hover1 < 36
                  ? `translate-x-[27.2rem]`:
                  hover1 > 36 && hover1 < 40
                  ? `translate-x-[36.2rem]`
                  :'' 
              :'hidden'
            }`}></div>
          </section>
        </div>


        {/* Buttons */}
        <div className='text-white font-semibold flex gap-6 Modelica place-content-end'>
          <motion.button whileTap={{scale:0.8}} className='bg-secondary py-2 px-4 rounded-lg border '>Log in</motion.button>
          <motion.button whileTap={{scale:0.8}} className='bg-secondary py-2 px-3 rounded-lg border '>Sign Up</motion.button>
        </div>
      </nav>
    <AnimatePresence>
      <Page1 />
    </AnimatePresence>
    </section>
  )
}
