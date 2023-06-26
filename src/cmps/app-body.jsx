// imgs
import heroImg from '../assets/img/me.jpeg'
import linkedinImg from '../assets/img/linkedin.png'
import gitHub from '../assets/img/github.png'
import shape from '../assets/img/noun-polka-dots-5067076.svg'
import arrSvg from '../assets/img/arrsvg.svg'

export function AppBody() {
   return (
      <section className='hero-container'>
         <div className='hero-section'>
            <img src={shape} alt='shape' className='hero-shape' />
            <h1>Hey, i'm Dor.</h1>
            <h2>Full-Stack Web Developer & Digital Marketing Specialist</h2>
            <p>
               I specialize in website development with advanced technologies
               and programming languages, digital marketing, user experience and
               more...
            </p>
            <br/>
            <p>
               Collaborative team player with excellent technical abilities,
               emphasis on the small details, focusing on problem solving.
               self-learner and adapt quickly to new environments.
            </p>
            <div className='hero-actions-container'>
               <button className='pointer'>Download CV</button>
               <img className='pointer' title='Linkedin' src={linkedinImg} alt='linkedin-logo' />
               <img className='pointer' title='GitHub' src={gitHub} alt='gitHub-logo' />
            </div>
            
         </div>

         <div className='hero-image'>
            <img src={heroImg} alt='hero-img' className='hero-img' />
         </div>
         <img src={arrSvg} alt='arrSvg' className='arr-svg animate-arrow'/>
      </section>
   )
}
