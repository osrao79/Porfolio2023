import React from 'react'
import './contact.css'
import { GrGithub, GrLinkedin } from "react-icons/gr";  
import { CgInstagram } from "react-icons/cg";
import {TbBrandUpwork} from 'react-icons/tb'

const Contact = () => {
  return (
  <div className='contact-container'>
     <div class="inner">
            <div className="contact-icon">
              <a
                href="https://www.linkedin.com/in/onkar-singh-rao-a597b0201/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", display:"flex" }}
                className='contact-medium'
              >
                <GrLinkedin size={50} className='contact-react-icon'/>
              </a>
            </div>
            <div className="contact-icon ">
              <a
                href="https://www.instagram.com/ek.onkaar/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", display:"flex" }}
                className='contact-medium'
              >
                <CgInstagram size={50} className='contact-react-icon'/>
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="https://github.com/osrao79"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", display:"flex" }}
                className='contact-medium'
              >
                <GrGithub size={50} className='contact-react-icon' />
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="https://www.upwork.com/freelancers/onkarsinghrao"
                target="_blank"
                rel="noreferrer"
                style={{textDecoration: "none", display:"flex" }}
                className='contact-medium'
              >
                <TbBrandUpwork size={50} className='contact-react-icon'/>
              </a>
            </div>
        </div>
      </div>
  )
}

export default Contact