import { useEffect, useRef, useState } from "react"

export function Skills() {
   const myRef = useRef()
   // const [isVisible, setIsVisible] = useState(null)
   // console.log(isVisible)

   // useEffect(() => {
   //    console.log('myref', myRef.current)
   //    const observer = new IntersectionObserver((entries) => {
   //       const entry = entries[0]
   //       setIsVisible(entry.isIntersecting)
   //    })
   //    observer.observe(myRef.current)
   // },[])

   return (
      <section className='skills-container'>
         <h2 className="underline-style">Skills.</h2>

      <div className="skills-icons-container">
         <div>
            
            <i className={`devicon-html5-plain-wordmark colored `} title="Html"></i>
            <i className='devicon-css3-plain-wordmark colored' title="Css"></i>
            <i className='devicon-javascript-plain colored' title="Javascript"></i>
            <i class="devicon-php-plain colored" title='php'></i>
            <i className='devicon-nodejs-plain-wordmark colored' title="Node.js"></i>
            <i className='devicon-mongodb-plain-wordmark colored' title="MongoDB"></i>
         </div>
         <div>
            <i className='devicon-jquery-plain-wordmark colored' title="jQuery"></i>
            <i className='devicon-vuejs-plain-wordmark colored' title="Vue"></i>
            <i className='devicon-react-original-wordmark colored' title="React"></i>
            <i class="devicon-typescript-plain colored" title='Typescript'></i>
            <i className='devicon-angularjs-plain colored' title="Angular"></i>
            <i className='devicon-sass-original colored' title="Sass"></i>
            <i className="devicon-wordpress-plain-wordmark colored"></i>
         </div>
      </div>

      </section>
   )
}
