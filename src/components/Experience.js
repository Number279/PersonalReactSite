import React from 'react'
import './style.default.css';
import './bootstrap-grid.css';
import './bootstrap.css';
import './bootstrap-reboot.css';

export default function Experience(props) {
    return (
        <section id="experience">
      <div className="container">
        <header className="mb-5 pb-4">
          <p className="font-weight-bold text-primary text-uppercase letter-spacing-3">Yes. I've been around.</p>
          <h2 className={props.darkMode ? " dark-text text-uppercase lined" : "text-uppercase lined"}>Experience</h2>
        </header>
        <ul className="timeline">
              
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">2020-Present </p>
                    <h2 className={props.darkMode ?  " dark-text h5 mb-0 text-uppercase" : "h5 mb-0 text-uppercase"}>Tech Talent South</h2>
                    <p className={props.darkMode ? "dark-text text-small mb-0" : "text-small mb-0"}>Foundational Java</p><span className="small text-muted">Shreveport, LA</span>
                  </div>
                  <div className="col-lg-7">
                    <p className={props.darkMode ? "dark-text" : "text-muted"}>Went through the Tech Talent South Foundational Java course that covered html, css, javascript, typsecript, react, java, and springboot.  During my time there I created full stack applications that took advantage of all of these languages and technologies from the front end to the back end.  I have the technical skills necessary to contribute on day one.</p>
                  </div>
                </div>
              </li>
              
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">2016-2020 </p>
                    <h2 className={props.darkMode ?  " dark-text h5 mb-0 text-uppercase" : "h5 mb-0 text-uppercase"}>Eldorado Resort Casino</h2>
                    <p className={props.darkMode ? "dark-text text-small mb-0" : "text-small mb-0"}>Poker Tournament Director</p><span className="small text-muted">Shreveport, LA</span>
                  </div>
                  <div className="col-lg-7">
                    <p className={props.darkMode ? "dark-text" : "text-muted"}>I was in charge of creating, staffing, advertising, and running all of the poker tournaments at the Eldorado Casino Resort.  Time and resource management skills were critical.  I worked  with a large team of employees towards a common goal in creating a satisfying customer experience.  </p>
                  </div>
                </div>
              </li>
              
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">2014-2015 </p>
                    <h2 className={props.darkMode ?  " dark-text h5 mb-0 text-uppercase" : "h5 mb-0 text-uppercase"}>Horseshoe Casino</h2>
                    <p className={props.darkMode ? "dark-text text-small mb-0" : "text-small mb-0"}>Poker Room Manager</p><span className="small text-muted">Shreveport, LA </span>
                  </div>
                  <div className="col-lg-7">
                    <p className={props.darkMode ? "dark-text" : "text-muted"}>As the poker room manager I oversaw all decisions pertaining to the operation of the poker rooom, including staffing, payroll, marketing, training, and customer service.  As the manager learning how to allocate my time and developing good working relationships and team building was of critical importance.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">2006-2014</p>
                    <h2 className={props.darkMode ?  " dark-text h5 mb-0 text-uppercase" : "h5 mb-0 text-uppercase"}>Harrah's Casino</h2>
                    <p className={props.darkMode ? "dark-text text-small mb-0" : "text-small mb-0"}>Poker Dealer</p><span className="small text-muted">Tunica, MS</span>
                  </div>
                  <div className="col-lg-7">
                    <p className={props.darkMode ? "dark-text" : "text-muted"}>As a poker dealer I had to learn early that efficiency and communication were essential.  You had to be efficient to deal as many hands as possible per hour; but you also had to have good communication skills with the customer to create a fun atmosphere.  I feel that these two skills make me a valuable addition to any team I join.</p>
                  </div>
                </div>
              </li>
        </ul>
      </div>
    </section>
    )
}
