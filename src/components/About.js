import React from 'react'
import './style.default.css';
import './bootstrap-grid.css';

export default function About(props) {
    return (
        
        <section className={props.darkMode ? "dark-background2 dark-text" : "bg-light"} id="about">
        <div className={props.darkMode ? "dark-background2 dark-text container" : "container"}>
          <header className="mb-5">
            <p className="font-weight-bold text-primary text-uppercase letter-spacing-3" id="yellowsize">Drive and Determination</p>
            <h2 className={props.darkMode ? "dark-background2 dark-text h3 lined" : "h3 lined"}>To make your website stand out</h2>
          </header>
          <p className={props.darkMode ? "dark-background2 dark-text lead" : "lead text-muted"}>As a father of four wonderful children I have had to develop <strong className={props.darkMode ? "dark-text" : "text-dark"}>the ability to adapt and find creative solutions</strong> to the many challenges that arise daily.
          As a web and app developer I can call on these abilities to design and implement a beautiful and dynamic website or application that is <strong className={props.darkMode ? "dark-text" : "text-dark"}>customized to your exact needs.</strong>  
         Using my knowledge of HTML, CSS, Bootstrap, Javascript, Java, and React I will use your input to make sure that your website is both beautiful and functional.</p>
        </div>
      </section>
    )
}

