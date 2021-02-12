import React from 'react'
import './style.default.css';
import './bootstrap-grid.css';

export default function Expertise(props) {
    return (
            <section id="expertise">
      <div className="container">
        <header className="mb-5 pb-4">
          <p className="font-weight-bold text-primary text-uppercase letter-spacing-3">Knowing is half the battle...</p>
          <h2 className={props.darkMode ?  "dark-text lined text-uppercase"  : "text-uppercase lined"}>Expertise</h2>
        </header>
        <div className="row">
          <div className="col-md-6 mb-5">
            <h3 className={props.darkMode ? "dark-text h4" : "h4"}><span className="text-primary mr-2">01</span>CSS</h3>
            <p className={props.darkMode ?  "dark-text text-small ml-4 pl-3" : "text-muted text-small ml-4 pl-3"}>CSS is what will transform your website from plain black and white HTML text into a beautiful space that your customers will love visiting. 
              Using your input and constant collaboration I can tailor the look and feel of your website to your exact specifications. 
            </p>
          </div>
          <div className="col-md-6 mb-5">
            <h3 className={props.darkMode ? "dark-text h4" : "h4"}><span className="text-primary mr-2">02</span>Javascript</h3>
            <p className={props.darkMode ?  "dark-text text-small ml-4 pl-3" : "text-muted text-small ml-4 pl-3"}>After using CSS to layout your website to your exact specifications, I can use javascript to make your website come alive.  Javascript is what allows your customers to interact with your website in an infinite amount of ways.</p>
          </div>
          <div className="col-md-6 mb-5 mb-md-0">
            <h3 className={props.darkMode ? "dark-text h4" : "h4"}><span className="text-primary mr-2">03</span>React</h3>
            <p className={props.darkMode ?  "dark-text text-small ml-4 pl-3" : "text-muted text-small ml-4 pl-3"}>My knowledge of React enables me to use a vast javascript library to create a user interface that is tailored to your business needs. 
              Your customers will get a customized experience that they can only get from your company.  
            </p>
          </div>
          <div className="col-md-6">
            <h3 className={props.darkMode ? "dark-text h4" : "h4"}><span className="text-primary mr-2">04</span>Java</h3>
            <p className={props.darkMode ?  "dark-text text-small ml-4 pl-3" : "text-muted text-small ml-4 pl-3"}>I can use the Java language to create an app for your business that will be accessible across any mobile platform allowing your customers to take your company with them anywhere they go.</p>
          </div>
        </div>
      </div>
    </section>
    )
}
