import React from 'react'
import './contact.css'
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
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
                style={{ color: "rgb(147 169 139)", textDecoration: "none" }}
                className='contact-medium'
              >
                <GrLinkedin size={40} />
              </a>
            </div>
            <div className="contact-icon ">
              <a
                href="https://www.instagram.com/ek.onkaar/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgb(147 169 139)", textDecoration: "none" }}
                className='contact-medium'
              >
                <GrInstagram size={40} />
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="https://github.com/osrao79"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgb(147 169 139)", textDecoration: "none" }}
                className='contact-medium'
              >
                <GrGithub size={40} />
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="https://www.upwork.com/freelancers/onkarsinghrao"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgb(147 169 139)", textDecoration: "none" }}
                className='contact-medium'
              >
                <TbBrandUpwork size={40} />
              </a>
            </div>
        </div>
      </div>
  )
}

export default Contact