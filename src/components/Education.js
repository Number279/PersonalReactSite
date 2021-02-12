import React from 'react'
import './style.default.css';
import './bootstrap-grid.css';

export default function Education(props) {
    return (
           <section className={props.darkMode ? "dark-background2" : "bg-light"} id="education">
      <div className="container">
        <header className="mb-5 pb-4">
          <p className="font-weight-bold text-primary text-uppercase letter-spacing-3">Lazy isn't in my vocabulary.</p>
          <h2 className={props.darkMode ?  "dark-text lined text-uppercase"  : "text-uppercase lined"}>Education</h2>
        </header>
        <ul className="timeline">

              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">2002-2006</p>
                    <h2 className={props.darkMode ?  "dark-text h5 mb-0 text-uppercase" : "h5 mb-0 text-uppercase"}>University of Mississippi</h2>
                    <p className={props.darkMode ?  "dark-text text-small mb-0" : "text-small mb-0"}>Liberal Arts</p><span className="small text-muted">Oxford, MS</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted"></p>
                  </div>
                </div>
              </li>
           
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">1999-2002 </p>
                    <h2 className={props.darkMode ?  "dark-text h5 mb-0 text-uppercase" : "h5 mb-0 text-uppercase"}>Bartlett High School</h2>
                    <p className="text-small mb-0"></p><span className="small text-muted">Bartlett, TN</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted"></p>
                  </div>
                </div>
              </li>
      
        </ul>
      </div>
    </section>
    )
}
