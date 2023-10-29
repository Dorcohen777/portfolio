import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
export function Skills() {
   const myRef = useRef()
   return (
      <section className='skills-container'>
         <div>
            <motion.h2
               className='underline-style'
               initial={{ opacity: 0, y: -30 }}
               whileInView={{ opacity: 1, transition: { delay: 0.25 }, y: 0 }}
            >
               Skills.
            </motion.h2>
         </div>

         <motion.div
            className='skills-icons-container'
            initial={{ opacity: 0 }}
            whileInView={{opacity:1, transition: {delay: 0.45}}}
         >
            <div>
               <i
                  className={`devicon-html5-plain-wordmark colored `}
                  title='Html'
               ></i>
               <i
                  className='devicon-css3-plain-wordmark colored'
                  title='Css'
               ></i>
               <i
                  className='devicon-javascript-plain colored'
                  title='Javascript'
               ></i>
               <i className='devicon-php-plain colored' title='php'></i>
               <i
                  className='devicon-nodejs-plain-wordmark colored'
                  title='Node.js'
               ></i>
               <i
                  className='devicon-mongodb-plain-wordmark colored'
                  title='MongoDB'
               ></i>
            </div>
            <div>
               <i
                  className='devicon-jquery-plain-wordmark colored'
                  title='jQuery'
               ></i>
              
               <i
                  className='devicon-react-original-wordmark colored'
                  title='React'
               ></i>
               <i
                  className='devicon-typescript-plain colored'
                  title='Typescript'
               ></i>
               <i
                  className='devicon-angularjs-plain colored'
                  title='Angular'
               ></i>
               <i className='devicon-sass-original colored' title='Sass'></i>
               <i className='devicon-wordpress-plain-wordmark colored'></i>
            </div>
         </motion.div>
      </section>
   )
}
