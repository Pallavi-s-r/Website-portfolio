import React from 'react'
import CTA from './CTA'
import Cube from './Cube.jsx'
import './header.css'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      {/* <topbar > */}
        {/* <div className='container topbar__container'>
          <ul className='list__container'>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div> */}
      {/* </topbar> */}
      <div className="container header__container">
        <h5><pre>Hello ,  I'm </pre></h5>
        <h1><span>Pallavi</span></h1>
        <h5 className='text-light'>Web Designer + FullStack Developer</h5>
        <h5 className='text-light' >& I Build Websites.</h5>
        <CTA/>
        <HeaderSocials/>
        <Cube/>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header