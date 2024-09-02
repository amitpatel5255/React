import React, { useState, useEffect } from 'react';
import LightButton from "../../assets/Website/light-mode-button.png"; // Check and correct the import path
import DarkButton from "../../assets/Website/dark-mode-button.png"; // Check and correct the import path

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("light"):"light");
    const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    // Initialize theme when component mounts
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Light Mode Button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer
         drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
          transition-all duration-300 absolute right-0 z-10 
          ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={DarkButton}
        alt="Dark Mode Button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
