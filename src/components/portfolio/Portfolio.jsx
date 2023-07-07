import React from 'react'
import'./Portfolio.css'
import IMG1 from '../../assets/todo.png'
import IMG2 from '../../assets/weather.png'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    Image:IMG1,
    title: ' Todo App',
    github:'https://github.com',
    demo: 'https://todo-app-by-pallavi.netlify.app/'
  },
  {
    id:2,
    Image:IMG2,
    title: 'Weather Forecast',
    github:'https://github.com',
    demo: 'https://todaysforecast.netlify.app/'
  },
  // {
  //   id:3,
  //   Image:IMG3,
  //   title: 'abcd',
  //   github:'https://github.com',
  //   demo: 'https://google.com'
  // },
  // {
  //   id:4,
  //   Image:IMG4,
  //   title: 'abcd',
  //   github:'https://github.com',
  //   demo: 'https://google.com'
  // },
  // {
  //   id:5,
  //   Image:IMG5,
  //   title: 'abcd',
  //   github:'https://github.com',
  //   demo: 'https://google.com'
  // },
  // {
  //   id:6,
  //   Image:IMG6,
  //   title: 'abcd',
  //   github:'https://github.com',
  //   demo: 'https://google.com'
  // },
  
]
const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Self-Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, Image, title, github, demo})=>{
        return(
      <article key={id} className='portfoliio__item'>
          <div className="portfolio__item-image">
            <img src={Image} alt=''/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>Github</a>
          <a href={demo}className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a></div>
        </article>
        )
        })
      }

        </div>
    </section>
  )
}

export default Portfolio