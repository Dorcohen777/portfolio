import { useEffect, useState } from 'react'

export function AppHeader() {
   const [scrolled, setScrolled] = useState(false)
   const [navStyle, setNavStyle] = useState('#2965F1')
   useEffect(() => {
      const handleScroll = () => {
         const isScroll = window.scrollY > 0
         setScrolled(isScroll)
         setNavStyle(scrolled ? '#2965F1' : '#ffffff')
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])
   return (
      <nav className='main-nav' style={{ backgroundColor: navStyle }}>
         <ul className='nav-container flex align-center clear-style  '>
            <li className='pointer'>Projects</li>
            <li className='pointer'>About</li>
            <li className='pointer'>Download CV</li>
         </ul>
      </nav>
   )
}
