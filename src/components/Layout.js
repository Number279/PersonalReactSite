import React, { useEffect, useState } from "react";
import "./bootstrap-grid.css";
import "./bootstrap.css";
import { FaBars } from "react-icons/fa";
import Logo from "./favicon.png";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Expertise from "./Expertise";
import Hero from "./Hero";
import Footer from "./Footer";
import { IconContext } from "react-icons/lib";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("You enabled dark mode.");
  });

  const handleCheckboxChange = () => setDarkMode((prev) => !prev);

  return (
    <body className={darkMode ? "dark-background" : ""}>
      <header
        className={darkMode ? "dark-background dark-text header" : "header"}
      >
        <nav
          className={
            darkMode
              ? "dark-background dark-text navbar navbar-expand-lg fixed-top"
              : "navbar navbar-expand-lg fixed-top"
          }
        >
          <div
            className={
              darkMode ? "dark-background dark-text container" : "container"
            }
          >
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="logo" width={45} />
            </a>
            {darkMode ? 
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <FaBars /></button></IconContext.Provider>
            : 
            <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <FaBars /></button></IconContext.Provider>
            
            } 
            <div
              className={
                darkMode
                  ? "darkHover dark-text dark-background collapse navbar-collapse"
                  : "collapse navbar-collapse"
              }
              id="navbarSupportedContent"
            >
              <ul
                className={
                  darkMode
                    ? "navbar-nav ml-auto dark-background dark-text"
                    : "navbar-nav ml-auto"
                }
              >
                <a href="#">
                  <li
                    className={
                      darkMode
                        ? "nav-item nav-link dark-text dark-background"
                        : "nav-item nav-link"
                    }
                  >
                    <Link
                      activeClass="viewed"
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                </a>
                <a href="#about">
                  <li
                    className={
                      darkMode
                        ? "nav-item nav-link dark-text dark-background"
                        : "nav-item nav-link"
                    }
                  >
                    <Link
                      activeClass="viewed"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                </a>
                <a href="#expertise">
                  <li
                    className={
                      darkMode
                        ? "nav-item nav-link dark-text dark-background"
                        : "nav-item nav-link"
                    }
                  >
                    <Link
                      activeClass="viewed"
                      to="expertise"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Expertise
                    </Link>
                  </li>
                </a>
                <a href="#education">
                  <li
                    className={
                      darkMode
                        ? "nav-item nav-link dark-text dark-background"
                        : "nav-item nav-link"
                    }
                  >
                    <Link
                      activeClass="viewed"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Education
                    </Link>
                  </li>
                </a>
                <a href="#experience">
                  <li
                    className={
                      darkMode
                        ? "nav-item nav-link dark-text dark-background"
                        : "nav-item nav-link"
                    }
                  >
                    <Link
                      activeClass="viewed"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Experience
                    </Link>
                  </li>
                </a>
                <a href="#contact">
                  <li
                    className={
                      darkMode
                        ? "nav-item nav-link dark-text dark-background"
                        : "nav-item nav-link"
                    }
                  >
                    <Link
                      activeClass="viewed"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </a>
                <a href="https://drive.google.com/file/d/1gE3BHS6Uo5VSaXaVbGgEPX2peM1cb_bK/view?usp=sharing" target="_blank">
                <form
                  className={
                    darkMode
                      ? "nav-item nav-link dark-text"
                      : "nav-item nav-link"
                  }
                >Download Resume</form></a>
                <form
                  className={
                    darkMode
                      ? "nav-item nav-link dark-text"
                      : "nav-item nav-link"
                  }
                >
                  Dark Mode
                  <input
                    name="darkMode"
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleCheckboxChange}
                  />
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Hero title="Hero" dark="true" id="hero" darkMode={darkMode} />
      <About title="About" dark="true" id="about" darkMode={darkMode} />
      <Expertise
        title="Expertise"
        dark="true"
        id="expertise"
        darkMode={darkMode}
      />
      <Education
        title="Education"
        dark="true"
        id="education"
        darkMode={darkMode}
      />
      <Experience
        title="Experience"
        dark="true"
        id="experience"
        darkMode={darkMode}
      />
      <Contact title="Contact" dark="true" id="contact" darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </body>
  );
}
