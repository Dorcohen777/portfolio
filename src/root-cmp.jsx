import { Routes, Route } from 'react-router'

// cmp
import { AppBody } from './cmps/app-body'
import { Skills } from './cmps/skills-section'
import { AppHeader } from './cmps/app-header'
import { Projects } from './cmps/project-section'
import { Contact } from './cmps/contact'

export function RootCmp() {
   return (
      <div className='main-layout'>
         <section className='first-section-container full'>
            <AppHeader />
            <main className='main-layout'>
               <Routes>
                  <Route path='/portfolio' element={<AppBody />} />
               </Routes>
            </main>
         </section>
         <Skills />
         <Projects/>
         <Contact/>
         
      </div>
   )
}
