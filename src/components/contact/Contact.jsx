import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
//import {FaWhatsapp} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_w2h0ujn','template_ujn4xoo', form.current,'ao6GV13KdMuQsdJ8Z')
    e.target.reset()
  }
  return (
    <section id='contact'><h5>Get in Touch  </h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
        <GoMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>pallavisingh.sgrl9@gmail.com</h5>
        <a href='mailto:pallavisingh.sgrl9@gmail.com' target="_blank"  rel="noreferrer">Send a message</a>
        </article>

        <article className="contact__option">
        <BsLinkedin contact__option-icon/>
        <h4>LinkedIn</h4>
        <h5>Pallavi Singh</h5>
        <a href='www.linkedin.com/in/pallavisingh6040811b3' target="_blank" rel="noreferrer">Send a message</a>
        </article>

         {/* <article className="contact__option">
        <FaWhatsapp contact__option-icon/>
        <h4>WhatsApp or Call</h4>
        <h5>+916393599838</h5>
        <a href='https://api.whatsapp.com/send?phone+916393599838' target="_blank"  rel="noreferrer">Send a message</a>
        </article> */}
      </div>
    </div>

    <form ref={form} onSubmit={sendEmail}>
      <input type="text"  name='name' placeholder='Your Full Name' required/>
      <input type="email"  name='email' placeholder='Your Email' required/>
      <textarea name="message" placeholder='your message' rows="7" required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
    </form>
    </section>
  )
}

export default Contact