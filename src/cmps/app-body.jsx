// imgs
import heroImg from '../assets/img/me.jpeg'
import linkedinImg from '../assets/img/linkedin.png'
import gitHub from '../assets/img/github.png'
import shape from '../assets/img/noun-polka-dots-5067076.svg'
import arrSvg from '../assets/img/arrsvg.svg'
import cv from '../assets/cv.docx'
import { motion } from 'framer-motion'

export function AppBody() {
   return (
      <section className='hero-container' id='about'>
         <div className='hero-section'>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 2 } }}
            >
               <img src={shape} alt='shape' className='hero-shape' />
            </motion.div>
            <motion.h1
               className='animate__animated animate__fadeInDown'
               initial={{ opacity: 0, x: -80 }}
               animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            >
               Hey, i'm Dor.
            </motion.h1>

            <motion.h2
               initial={{ opacity: 0, x: -80 }}
               animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
            >
               Full-Stack Web Developer
            </motion.h2>

            <motion.p
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0, transition: { delay: 0.9 } }}
            >
               I specialize in website development with advanced technologies
               and programming languages, digital marketing, user experience and
               more...
            </motion.p>
            <br />
            <motion.p
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
            >
               Collaborative team player with excellent technical abilities,
               emphasis on the small details, focusing on problem solving.
               self-learner and adapt quickly to new environments.
            </motion.p>
            <motion.div
               className='hero-actions-container'
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
            >
               <button className='pointer'>
                  <a
                     className='download-link-body'
                     href={cv}
                     download='cv-dor-cohen'
                  >
                     Download CV
                  </a>
               </button>
               <a
                  target='_blank'
                  href='https://www.linkedin.com/in/dor-cohen-618745225/'
               >
                  <img
                     className='pointer'
                     title='Linkedin'
                     src={linkedinImg}
                     alt='linkedin-logo'
                  />
               </a>
               <a target='_blank' href='https://github.com/Dorcohen777'>
                  <img
                     className='pointer'
                     title='GitHub'
                     src={gitHub}
                     alt='gitHub-logo'
                  />
               </a>
            </motion.div>
         </div>

         <motion.div
            className='hero-image'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 2.5 } }}
         >
            <img src={heroImg} alt='hero-img' className='hero-img' />
         </motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 3 } }}
         >
            <img src={arrSvg} alt='arrSvg' className='arr-svg animate-arrow' />
         </motion.div>
      </section>
   )
}
