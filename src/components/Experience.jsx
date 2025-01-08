import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
         whileInView={{y:0, opacity:1}}
         initial={{y:-100, opacity:0}}
         transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                     whileInView={{x:0, opacity:1}}
                     initial={{x:-100, opacity:0}}
                     transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-neutral-400 text-sm font-bold">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                      whileInView={{x:0, opacity:1}}
                      initial={{x:100, opacity:0}}
                      transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {experience.role} -{" "} <span className='text-sm text-purple-100'>{experience.company}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                    {experience.technologies.map((technology, index) => (
                        <span key={index} className=" bg-neutral-900 text-neutral-100 text-xs px-2 py-1 rounded-lg mr-1 mb-2">{technology}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience