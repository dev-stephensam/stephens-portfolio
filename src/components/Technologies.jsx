import React from 'react'
import { RiHtml5Line, RiCss3Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssLine, RiBootstrapLine, RiNodejsLine } from 'react-icons/ri'
import { TbBrandDjango } from "react-icons/tb";
import { SiFlask } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease:"linear",
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{y:0, opacity:1}}
        initial={{y:-100, opacity:0}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{x:0, opacity:1}}
        initial={{x:-100, opacity:0}}
        transition={{duration:1.5}}
        
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className="text-7xl text-orange-500" />
                <p className="text-center">HTML5</p>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial='initial'
            animate='animate'

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className="text-7xl text-blue-500" />
                <p className="text-center">CSS3</p>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl" color='gold' />
                <p className="text-center">JavaScript</p>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-blue-500" />
                <p className="text-center">React.js</p>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className="text-7xl text-sky-500" />
                <p className="text-center">Tailwind</p>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiBootstrapLine className="text-7xl text-purple-500" />
                <p className="text-center">Bootstrap</p>
            </motion.div>   
            
        </motion.div>
    </div>
  )
}

export default Technologies