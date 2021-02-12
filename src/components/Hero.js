import React from 'react'
import './style.default.css';
import './bootstrap-grid.css';
import './bootstrap.css';
import './bootstrap-reboot.css';
import Sawyer from './sawyer.jpeg';

export default function Hero() {
    return (
        <section className="hero bg-cover bg-center mt-5" id="hero" style={{backgroundImage: `url(${Sawyer})`}}>
      <div className="container py-5 my-5 index-forward">
        <div className="row">
          <div className="col-md-8 text-white">
            <h2 className="h4 text-primary font-weight-normal mb-0">I am</h2>
            <h1 className="text-uppercase text-xl mb-0 fade-in5">Sawyer</h1><h1 className="text-uppercase text-xl mb-0 text-primary fade-in5">Carroll</h1>
            <h2 className="h4 font-weight-normal mb-5 fade-in8">Full Stack Developer</h2>
            <p className="text-shadow fade-in10">I am a highly motivated full stack
              <br/>developer and I would love to use my ,
              <br/>creativity and drive to help your business 
              <br/>bring its website and applications to life.</p>
          </div>
        </div>
      </div>
    </section>
    )
}
