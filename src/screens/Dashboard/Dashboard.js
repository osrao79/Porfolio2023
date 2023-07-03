import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import "../../responsive.css";
import logo from "../../assets/logo.png";
import logodark from "../../assets/logodark.png";
import lightOn from "../../assets/lightOn.png";
import lightOff from "../../assets/lightOff.png";
import { GithubPicker } from "react-color";

const Dashboard = () => {
  const ColorPickerRef = useRef(null);
  const [theme, setTheme] = useState("theme-light");
  const [themeColor, setThemeColor] = useState({ hex: "#EB144C" });
  const [showColorPickerBool, setShowColorPickerBool] = useState(false);

  let colors = [
    "#9AC5F4",
    "#EEA47F",
    "#A0C49D",
    "#FFB84C",
    "#7BDCB5",
    "#00D084",
    "#0693E3",
    "#ABB8C3",
    "#EB144C",
    "#F78DA7",
    "#C56183",
    "#F0FF42",
    "#9681EB",
    "#B83B5E",
    "#16FF00",
    "#D62AD0",
    "#8430CF",
    "#FCE700",
    "#EC5858",

    //new colors
    // "#EF476F",
    // "#ffbe0b",
    // "#F6C90E",
    // "#f8961e",
    // "#f15bb5",
    // // pink to blue
    // "#ff499e",
    // "#fb5607",
    // "#3a86ff",
    // "#779be7",
    // "#00bbf9",
    // "#00f5d4",
    // "#8E05C2",
    // //new
    // "#9b5de5",
    // "#5a189a",
    // "#5f0f40",
    // "#7f4f24",
    // //greem -brown-black
    // "#82CD47",
    // "#a7c957",
    // "#0b132b",
    // "#C02739",
  ];

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      console.log(ColorPickerRef.current);
      if (
        showColorPickerBool &&
        ColorPickerRef.current &&
        !ColorPickerRef.current.contains(e.target)
      ) {
        setShowColorPickerBool(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showColorPickerBool]);

  const toggleTheme = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  };

  function setThemeFun(themeName) {
    var htmlElement = document.querySelector("html");
    htmlElement.className = themeName;
  }

  useEffect(() => {
    setThemeFun(theme);
  }, [theme]);

  useEffect(() => {
    var root = document.querySelector(".theme-light");
    var rootDark = document.querySelector(".theme-dark");
    let clr = window.localStorage.getItem("theme");
    if (clr && clr.length) {
      clr = JSON.parse(clr);
      if (clr && (clr.length || Object.keys(clr).length)) {
        root?.style.setProperty("--color-primary", clr.hex);
        rootDark?.style.setProperty("--color-primary", clr.hex);
      } else {
        rootDark?.style.setProperty("--color-primary", themeColor.hex);
        root?.style.setProperty("--color-primary", themeColor.hex);
      }
    }
  }, [themeColor]);

  const handleChangeComplete = (color) => {
    window.localStorage.setItem("theme", JSON.stringify(color));
    setThemeColor(color);
    setShowColorPickerBool(false);
  };
  const showColorPicker = () => {
    setShowColorPickerBool(!showColorPickerBool);
  };
  return (
    <div className='dashboard'>
      <div className='theme-picker' ref={ColorPickerRef}>
        <div className='color-block' onClick={showColorPicker}>
          <div className='inner'></div>
        </div>
        {showColorPickerBool && (
          <div className='pelette-box'>
            <GithubPicker
              className='pelette'
              colors={colors}
              width='205px'
              color={themeColor}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        )}
      </div>
      <div className='wire'></div>
      <button className={`mode-switch ${theme}mode`} onClick={toggleTheme}>
        {theme === "theme-light" ? (
          <img
            className='img'
            src={lightOn}
            width={"45px"}
            height={"45px"}
            alt='switch'
          ></img>
        ) : (
          <img
            className='img'
            src={lightOff}
            width={"45px"}
            height={"45px"}
            alt='switch'
          ></img>
        )}
      </button>
      {theme === "theme-dark" ? (
        <img
          src={logo}
          className='logo'
          width={"40px"}
          height={"40px"}
          alt='logo'
        />
      ) : (
        <img
          src={logodark}
          className='logo'
          width={"40px"}
          height={"40px"}
          alt='logo'
        />
      )}
      <p className='email'>osrao79@gmail.com</p>
      <div className='routes'>
        <NavLink className='route' to={"/"}>
          Home
        </NavLink>
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
