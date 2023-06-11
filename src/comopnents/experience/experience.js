import React from "react";
import './experience.css'
function Experience() {
  return (
    <section id='experience' className='experience-conatiner'>
      <div className='experience-desc'>
        <div className='inner timeline'>
          <div className="container">
            <div className='header'>
              <h3 className='title'>Intern @</h3>
              <h3 className='title c'>Newton School</h3>
            </div>
            <div className='header-item'>August 2020 - April 2021</div>
            <ul className='ul-list'>
              <li className='ul-li'>
                Completed 6 month internship in full stack web development.
              </li>
            </ul>
          </div>
          <div className="container2">
            <div className='header'>
              <h3 className='title'>Software Engineer @</h3>
              <h3 className='title c'>Classic Informatics</h3>
            </div>
            <div className='header-item'>April 2021 - present</div>
            <ul className='ul-list'>
              <li className='ul-li'>
                Writing modern, performant, maintainable code for a diverse
                array of client and internal project
              </li>
              <li className='ul-li'>
                Working with a variety of different languages, platforms,
                frameworks, and content management systems such as JavaScript,
                React, NodeJS, MongoDB, SQL etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
