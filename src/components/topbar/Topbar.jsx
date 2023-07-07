import React from 'react'
import './Topbar.css'
// import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
// import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Topbar = () => {
    const[activeNav, setActiveNav] = useState('#')
    return (
      <topbar className='container topbar__container'>
        <ul className='list__container'>
      <li>  <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ?'active':''}>Home</a></li>
      <li> <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ?'active':''}>About</a></li>
      <li><a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ?'active':''}>Experience</a></li>
      {/* <li> <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ?'active':''}>Service</a></li> */}
      <li> <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ?'active':''}>Work</a></li>
      <li>  <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ?'active':''}>Contact</a></li>
      </ul>
      </topbar>
    )
  }
  
  export default Topbar