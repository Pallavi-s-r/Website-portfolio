import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      < a href='#' className='footer__logo'>Pallavi</a>
      <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    {/* <li><a href='#services'>Services</a></li> */}
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#testimonials'>Testimonials</a></li>
    <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="www.linkedin.com/in/pallavisingh6040811b3" target='blank'><BsLinkedin/></a>
            <a href='https://github.com/Pallavi-s-r' target='blank'><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Pallavi_Singh.All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer