import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import "../../responsive.css";
import logo from "../../assets/logo.png";
import logodark from '../../assets/logodark.jpeg'
import lightOn from '../../assets/lightOn.png'
import lightOff from '../../assets/lightOff.png'

const Dashboard = () => {
  const [theme, setTheme] = useState("theme-light")

 const toggleTheme = ()=>{
  if(theme=== "theme-dark"){
    setTheme('theme-light')
  }else{
    setTheme('theme-dark')
  }
 }
  function setThemeFun(themeName) {
    var htmlElement = document.querySelector("html");
    console.log(htmlElement);
    htmlElement.className = themeName;
  }

  useEffect(() => {
    console.log('cld')
    setThemeFun(theme)
  }, [theme])
  

  return (
    <div className='dashboard'>
      <div className="wire"></div>
        <button className={`mode-switch ${theme}mode`}  onClick={toggleTheme}>
          {
           theme==="theme-light" ? 
          //  <BsFillMoonFill color="#2196f3" size={"2em"} />
          <img className="img" src={lightOn} width={"45px"} height={"45px"} alt="switch"></img>
          : 
          // <MdSunny color="orange" size={"2em"} />
          <img className="img" src={lightOff} width={"45px"} height={"45px"} alt="switch"></img>
          }
        </button>
        {
          theme === "theme-dark" ? 
          <img src={logodark} className='logo' width={"40px"} height={"40px"} alt="logo" />
          :
          <img src={logo} className='logo' width={"40px"} height={"40px"} alt="logo" />
        }
      <p className='email'>osrao79@gmail.com</p>
      <div className='routes'>
        <NavLink className='route' to={"/"}>
          Home
        </NavLink>
        {/* <hr style={"width": "1px", "height": "20px", "display": "inline-block"}></hr> */}
        <span className='vert-hr'></span>
        <NavLink className='route' to={"/work"}>
          Work
        </NavLink>
        <span className='vert-hr'></span>
        <NavLink className='route' to={"/experience"}>
          Experience
        </NavLink>
        <span className='vert-hr'></span>
        <NavLink className='route' to={"/about-me"}>
          About Me
        </NavLink>
        <span className='vert-hr'></span>
        <NavLink className='route' to={"/contact"}>
          Contact
        </NavLink>
      </div>
      <hr className='hr'></hr>
    </div>
  );
};

export default Dashboard;
