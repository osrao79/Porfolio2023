import { useEffect, useRef, useState } from "react";
import "./App.css";
import ThemePicker from "./comopnents/themePicker/themePicker";
import Router from "./routes";
import Dashboard from "./screens/Dashboard/Dashboard.js";

function App() {
  const ColorPickerRef = useRef(null);
  const [theme, setTheme] = useState("theme-light");
  const [themeColor, setThemeColor] = useState({ hex: "#EB144C" });
  const [showColorPickerBool, setShowColorPickerBool] = useState(false);

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

  const handleChangeComplete = (color) => {
    window.localStorage.setItem("theme", JSON.stringify(color));
    setThemeColor(color);
    setShowColorPickerBool(false);
  };
  const showColorPicker = () => {
    setShowColorPickerBool(!showColorPickerBool);
  };

  const toggleTheme = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
      window.localStorage.setItem('theme-mode', "theme-light")
    } else {
      setTheme("theme-dark");
      window.localStorage.setItem('theme-mode', "theme-dark")
    }
  };

  function setThemeFun(themeName) {
    var htmlElement = document.querySelector("html");
    htmlElement.className = themeName;
  }

  useEffect(() => {
    let Savedtheme = window.localStorage.getItem('theme-mode');
    console.log(Savedtheme)
    if (Savedtheme && Savedtheme.length) {

      setThemeFun((Savedtheme));
    } else {
      setTheme(theme)
    }
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

  return (
    <div className='App'>
      <ThemePicker
        ColorPickerRef={ColorPickerRef}
        theme={theme}
        setItem={setTheme}
        themeColor={themeColor}
        showColorPickerBool={showColorPickerBool}
        setShowColorPickerBool={setShowColorPickerBool}
        handleChangeComplete={handleChangeComplete}
        showColorPicker={showColorPicker}
      />
      <Dashboard
        ColorPickerRef={ColorPickerRef}
        theme={theme}
        setItem={setTheme}
        themeColor={themeColor}
        showColorPickerBool={showColorPickerBool}
        setShowColorPickerBool={setShowColorPickerBool}
        toggleTheme={toggleTheme}
      />
      <Router />
      <div className='bg-scaler-right'></div>
      <div className='bg-scaler-left'></div>
    </div>
  );
}

export default App;
