import React from "react";
import "./about.css";
function About() {
  return (
    <div className='about-container'>
      <div className='inner'>
        <p className='paragraph'>
          Hello! My name is Onkar Singh Rao, and I enjoy creating things that
          live on the internet. My interest in web development started back in
          2019 when I decided to try editing an html page of a beautiful website
          — truns out, I was tailor-made for web development.
        </p>
        <p className='paragraph'>
          Fast-forward to today, and I’ve had the privilege of working at a
          leading web development company in India. My main focus these days is
          building accessible, inclusive products and digital experiences at
          &nbsp;
          <a
            href='https://www.classicinformatics.com/'
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            Classic Informatics
          </a>
          &nbsp;for a variety of clients.
        </p>
        <p className='paragraph'>
          Here are a few technologies I’ve been working with recently:
        </p>
        {/* <ul className='skills-list'>
          <li className='list-item'>JavaScript (ES6+)</li>
          <li className='list-item'>React</li>
          <li className='list-item'>Redux</li>
          <li className='list-item'>Node.js</li>
          <li className='list-item'>MongoDB</li>
          <li className='list-item'>Firebase</li>
        </ul> */}
        <div className="tech-stack">
          <span>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' height={"40px"}
              width={"40px"} alt="tech" />
          </span>
            <span>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
              height={"40px"}
              width={"40px"}
              alt="tech"
            />
          </span>
            <span>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
              {/* <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' height={"40px"}
              width={"40px"} alt="tech"/> */}
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg' height={"40px"}
              width={"40px"} alt="tech"/>
            </span>
            <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" height={"40px"}
              width={"40px"} alt="tech" />
            </span>
        </div>
      </div>
    </div>
  );
}

export default About;
