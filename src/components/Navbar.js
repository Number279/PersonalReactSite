import React from 'react'
import './style.default.css';
import './bootstrap-grid.css';
import './bootstrap.css';
import './bootstrap-reboot.css';
import Logo from './favicon.png'
import { Link, animateScroll as scroll, scrollSpy} from "react-scroll";

export default function Navbar() {
    return (
        <body>
        <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container"><a className="navbar-brand" href="#"><img src={Logo} alt="logo" width={45} /></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item nav-link">
                <Link 
                activeClass="viewed"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >Home</Link></li>
                <li className="nav-item nav-link">
                <Link 
                activeClass="viewed"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >About</Link></li>
                <li className="nav-item nav-link">
                <Link 
                activeClass="viewed"
                to="expertise"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                >Expertise</Link></li>
                <li className="nav-item nav-link">
                <Link 
                activeClass="viewed"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >Education</Link></li>
                <li className="nav-item nav-link">
                <Link 
                activeClass="viewed"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >Experience</Link></li>
                <li className="nav-item nav-link">
                <a>
                <Link 
                activeClass="viewed"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >Contact</Link></a></li>
                <li className="nav-item"><a className="nav-link " href="https://github.com/Number279/">My Github</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
     </body>
    )
}
