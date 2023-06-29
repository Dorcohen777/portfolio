import { useEffect, useState } from 'react'
import { mainService } from '../services/main-service'

// cmp
import { ImgCarousel } from './img-carousel'

export function Projects() {
   const [projects, setProjects] = useState([]) // Initialize projects as an empty array

   useEffect(() => {
      console.log(mainService.projectsData)
      setProjects(mainService.projectsData)
   }, [])

   function addSpace(desc) {
      const descriptionWithLineBreaks = desc.split('.').join('.<br/> <br/>');
      return <span dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }} />;
    }
    

   if (projects.length === 0) return <div>loading...</div> // Check the length of projects array instead of the truthiness

   return (
      <section className='projects-section' id='projects'>
         <h2 className='projects-title underline-style'>Projects.</h2>

         <div className='projects-container' >
            {projects.map((project, idx) => {
               return (
                  <article key={idx} className='project-card'>
                     <div className='project-info'>
                        <p className='project-tag'>{project.tag}</p>
                        <h2>{project.title}</h2>
                        {/* <p>{project.description}</p> */}
                        <p>{addSpace(project.description)}</p>
                        <div className='project-btns-container'>
                           <a href={project.links[0]} target='_blank'>
                              <button className='try-live-btn pointer hover-effect'>Try Live</button>
                           </a>
                           {project.links[1] && (
                              <a href={project.links[1]} target='_blank'>
                                 <button className='github-btn pointer hover-effect'>GitHub</button>
                              </a>
                           )}
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
