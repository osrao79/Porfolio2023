import React, { useState } from 'react'
// import Profile from '../../assets/Profile.jpg'
import profile from '../../assets/profile.png'
import './Home.css'
import '../../responsive.css'



const Home = () => {
  
  const [disabled, setDisabled] = useState(false)

  const disableBtn = () => {
    setDisabled(true)
    console.log("dis",disabled)
      setTimeout(() => {
        setDisabled(false)
        console.log('called')
      }, 5000);
  console.log(disabled)
}
  return (
    <div className='home'>
      <div className='section-left'>
        <h3 className='heading-1'>
          <span className='letter'>Hii,</span>
          <span className=''>&nbsp;</span>
          <span className='hanging'>I</span>
          <span className=''>'</span>
          <span className=''>m</span>
        </h3>
        <h1 className='heading-2'>
        ONKAR RAO
        </h1>
        <p className='para-1 '>I build interactive websites that run across platforms & devices.</p>
      </div>
      <div className='section-right'>
        <img src={profile} className='profile-img' alt="profile" draggable="false"></img>
        <a id="download-btn"className='resume' href={require("../../assets/ResumeOnkar.pdf")} download="Onkar-Resume" onClick={disableBtn} style={{pointerEvents : disabled ? "none" : 'auto', opacity: disabled ? 0.6 : 1}}>Resume</a>
      </div>
    </div>
  )
}

export default Home