import React from 'react'
import aboutImg from '../assets/StephenAbout.png'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"



const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className="my-20 text-center text-4xl">
            About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{x:0, opacity:1}}
            initial={{x:-100, opacity:1}}
            transition={{duration:1}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl' src={aboutImg} alt="Stephen with his laptop" />
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
                <motion.div
                whileInView={{x:0, opacity:1}}
                initial={{x:100, opacity:1}}
                transition={{duration:1}} 
                className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About