import React from 'react'
import './about.css'
import ME from'../../assets/graphics.png'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=' about '/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>worldwide 300+</small>
            </article> */}
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5</small>
            </article>
          </div>
          <p>I am <i>FrontEnd and Full Stack Developer</i> .
          </p>
          <p>
            I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.I am also experienced in building systems that implement business logic and interact with server-side technology via APIs and tools such as React and Redux.
            I use MERN Stack to build Web Applications.
</p>
<br></br>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About