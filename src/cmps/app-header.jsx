import { useEffect, useState } from 'react'
import cv from '../assets/cv.docx'

export function AppHeader() {
   const [scrolled, setScrolled] = useState(false)
   const [navStyle, setNavStyle] = useState('#2965F1')
   const [fontColor, setFontColor] = useState('')
   useEffect(() => {
      const handleScroll = () => {
         const isScroll = window.scrollY > 0
         setScrolled(isScroll)
         setNavStyle(scrolled ? '#2965F1' : '#ffffff')
         setFontColor('#000000')
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])
   return (
      <nav
         className='main-nav'
         style={{ backgroundColor: navStyle }}
      >
         <h2>Dor.c</h2>
         <ul className='nav-container flex align-center clear-style'>
            <li className='pointer'>
               {' '}
               <a href='#projects' style={{color: fontColor}}>Projects </a>
            </li>
            <li className='pointer'>
               <a href='#about' style={{color: fontColor}}>About </a>
            </li>
            <li className='pointer'>
               <a href={cv} download='cv-dor-cohen.docx' style={{color: fontColor}}>
                  Download CV
               </a>
            </li>
         </ul>
      </nav>
   )
}
