import React from 'react'
import './experience.css'
import { FaHtml5, FaCss3, FaReact,FaNodeJs ,FaJs, FaJava} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {MdAnimation} from 'react-icons/md'
import {DiMongodb, DiMysql, DiSass} from 'react-icons/di'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>FrontEnd Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__dtails-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <FaCss3 className='experience__dtails-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <FaJs className='experience__dtails-icon'/>
              <div>
              <h4>Js</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__dtails-icon'/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <MdAnimation className='experience__dtails-icon'/>
              <div>
              <h4>Animations</h4>
              <small className='text-light'>Beginner</small></div>
            </article>

            <article className='experience__details'>
              <DiSass className='experience__dtails-icon'/>
              <div>
              <h4>Sass</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>BackEnd Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < FaJava className='experience__dtails-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <FaNodeJs className='experience__dtails-icon'/>
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <DiMongodb className='experience__dtails-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <DiMysql className='experience__dtails-icon'/>
              <div>
              <h4>My Sql</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__dtails-icon'/>
              <div>
              <h4>Express</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

          </div>
        </div>
      
      </div>
    </section>
  )
}

export default Experience