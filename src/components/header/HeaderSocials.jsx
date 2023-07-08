import React from 'react'
import'./header.css'
import {
    BsLinkedin,
    BsGithub,
  } from 'react-icons/bs'

const HeaderSocials= () =>{
    return (
        <div className='header__socials'>
            <a href="www.linkedin.com/in/pallavisingh6040811b3" target='blank' rel="noreferrer"><BsLinkedin/></a>
            <a href='https://github.com/Pallavi-s-r' target='blank'><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials