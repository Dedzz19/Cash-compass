import React from 'react'
import mockup from './../image/iPhone 13 Mockup.png'
import { AnimatePresence, motion } from 'framer-motion'
export default function Page1() {
  return (
    <section className='md:grid grid-flow-col grid-rows-1'>
      <div className='block lg:mx-auto md:mt-[5rem]'>
        <h3 className='font-light text-base'>Track your spendings</h3>
        <h1 className='font-bold text-lg md:text-5xl mb-6 mt-2'>Easy Tracking App <br className='hidden md:block' /> For Your Daily Life</h1>
        <motion.div 
        whileTap={{scale:0.9}}
        className='flex items-center rounded-md bg-secondary w-fit px-4 py-2 text-white'>
          <button>Download</button>

        </motion.div>
      </div>
      {/* Mockup */}
      <div className='place-content-center flex'>
        <AnimatePresence>

        </AnimatePresence>
        <img src={mockup} alt='mockup' className='w-[350px]' />
      </div>
    </section>
  )
}
