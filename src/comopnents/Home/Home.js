import React from 'react'
import Profile from '../../assets/Profile.jpg'
import './Home.css'
import '../../responsive.css'
const Home = () => {
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
        <img src={Profile} className='profile-img' alt="profile"></img>
        <button className='resume'>Resume</button>
      </div>
    </div>
  )
}

export default Home