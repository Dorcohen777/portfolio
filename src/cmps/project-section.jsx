import { useEffect, useState } from 'react'
import { mainService } from '../services/main-service'
import { motion } from 'framer-motion'
// cmp
import { ImgCarousel } from './img-carousel'

export function Projects() {
   const [projects, setProjects] = useState([]) // Initialize projects as an empty array

   useEffect(() => {
      setProjects(mainService.projectsData)
   }, [])

   function addSpace(desc) {
      const descriptionWithLineBreaks = desc.split('.').join('.<br/> <br/>')
      return (
         <span
            dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }}
         />
      )
   }

   if (projects.length === 0) return <div>loading...</div> // Check the length of projects array instead of the truthiness

   return (
      <section className='projects-section' id='projects'>
         <motion.h2
            className='projects-title underline-style'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, transition: { delay: 0.8 }, y: 0 }}
         >
            Projects.
         </motion.h2>

         <div className='projects-container'>
            {projects.map((project, idx) => {
               return (
                  <article key={idx} className='project-card'>
                     <div className='project-info'>
                        <p className='project-tag'>{project.tag}</p>
                        <h2>{project.title}</h2>
                        <p className='project-desc'>
                           {addSpace(project.description)}
                        </p>
                        <div className='project-btns-container'>
                           <a href={project.links[0]} target='_blank'>
                              <button className='try-live-btn pointer hover-effect'>
                                 Try Live
                              </button>
                           </a>
                           {project.links[1] && (
                              <a href={project.links[1]} target='_blank'>
                                 <button className='github-btn pointer hover-effect'>
                                    GitHub
                                 </button>
                              </a>
                           )}
                           {project.links[2] && (
                              <a href={project.links[2]} target='_blank'>
                                 <button className='youtube-btn pointer hover-effect'>
                                    Watch In Youtube
                                 </button>
                              </a>
                           )}
                        </div>
                        <div className='tech-container'>
                           {project.tech.map((skill, idx) => {
                              return (
                                 <div
                                    className='tech-inner-container'
                                    key={idx}
                                 >
                                    {skill === 'react' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' />
                                    )}
                                    {skill === 'html' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' />
                                    )}
                                    {skill === 'javascript' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' />
                                    )}
                                    {skill === 'mongodb' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg' />
                                    )}
                                    {skill === 'sass' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' />
                                    )}
                                    {skill === 'css' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' />
                                    )}
                                    {skill === 'wordpress' && (
                                       <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg' />
                                    )}
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                     <div className='project-images'>
                        <ImgCarousel img={project.imgs} />
                     </div>
                  </article>
               )
            })}
         </div>
      </section>
   )
}
