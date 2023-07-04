import React, { useState } from "react";
import "./work.css";
import hive from '../../assets/hive.png'
import isomer from '../../assets/isomer.png'
import leadgen from '../../assets/leadgen.png'
import roamingduck from '../../assets/roamingduck.png'
import {IoMdArrowRoundBack} from 'react-icons/io'

const myProjects = [
  {
    name:'The HiVE',
    desc: "A location-centric SaaS application which enables users to identify via a geo location where cleaning services are being performed. From finding and viewing these Geo Locations, using Google maps, more information about the Client, the staff, the services associated with the location is made viewable in The HiVE.",
    view:hive,
    tech:'React, Redux, SASS, Material UI, Google Map API'
  },
  {
    name:'Isomer AI',
    desc: "An industrial AI platform for biopharma manufacturers, the platform enables customers to build and deploy AI pipelines* in a studio “drag and drop” environment and pushing model results to a 3rd party system.",
    view:isomer,
    tech:'React, Redux, SASS, Material UI, React-Flow'
  },
  {
    name:'LeadGen Automation',
    desc: "A SaaS application which enables users to genrate new project leads and edit or delete them. User can also creates campaigns and keep a track of all campaigns", 
    view:leadgen,
    tech:'React, Redux, SASS, Material UI, Firebase'
  },
  {
    name:'Roaming Duck',
    desc: "An Ininerary trip planner where you can search and book Flights, Hotel, Activites and all your trip planning needs in one place. You can keep trip notes and share the trips with frineds. Map your own itinerary and save time & money while planning your holiday", 
    view:roamingduck,
    tech:'React, Redux, Bootstrap, Google Palces API, Webpack, NodeJS, Express'
  }
]


const Work = () => {
  const [projects, setprojects] = useState(null);
  const showProject = (project) => {
    setprojects(project);
  };

  console.log(projects);
  return (
    <div className={`work-container ${projects===null ? "grid" : ""}`}>
      {projects === null ? (
        <>
          <div className='project' onClick={() => showProject(0)}>
            <div>The HiVE</div>
            {/* <div className="click-me">Click to know more</div> */}
          </div>
          <div className='project' onClick={() => showProject(1)}>
            <div>Isomer ai</div>
            {/* <div className="click-me">Click to know more</div> */}
          </div>
          <div className='project' onClick={() => showProject(2)}>
            <div>Lead-gen</div>
            {/* <div className="click-me">Click to know more</div> */}
          </div>
          <div className='project' onClick={() => showProject(3)}>
            <div>RoamingDuck</div>
            {/* <div className="click-me">Click to know more</div> */}
          </div>
        </>
      ) : (
        <div className='project-desc'>
          <span className="go-back" onClick={() => showProject(null)}>
              {/* <img src={back} className="back-btn" alt="back" /> */}
              <IoMdArrowRoundBack size={"1em"} className="back-btn" />
          </span>
          <div className='wrapper'>
              <div className='grid-item'>
                <div className='grid-display'>
                  <img
                    src={myProjects[projects].view}
                    alt={'project'}
                    className='grid-img'
                  />
                </div>
                <div className='grid-desc'>
                  <div className='project-title'>{myProjects[projects].name}</div>
                  <div className='project-description'>
                    {myProjects[projects].desc}
                  </div>
                  <div className='project-tech'>
                   {
                    myProjects[projects].tech
                   }
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
