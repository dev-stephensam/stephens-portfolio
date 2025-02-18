import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import { BsGithub } from 'react-icons/bs'
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
          whileInView={{y:0, opacity:1}}
          initial={{y:-100, opacity:0}}
          transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                      whileInView={{x:0, opacity:1}}
                      initial={{x:-100, opacity:0}}
                      transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                        <motion.img 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div 
                      whileInView={{x:0, opacity:1}}
                      initial={{x:100, opacity:0}}
                      transition={{duration:1}}
                     className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        <a href={project.github} className='bg-blue-900 text-neutral-100 text-s px-2 py-1 rounded-lg mr-1 mb-2' > View Code &gt;</a> <br />
                        {project.technologies.map((technology, index) => (
                            <span key={index} className='bg-neutral-900 text-neutral-100 text-xs px-2 py-1 rounded-lg mr-1 mb-2'>{technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Projects