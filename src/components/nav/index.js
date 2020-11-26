import React from "react";
import "./style.css";

function Nav() {
      return (
  
        <nav>
          <div className="row">
            <div className="col-md-2">
            <a href="mybio.html" style={{ color: '#FFF' }}>About Me</a>
            </div>
            <div className="col-md-2">
              <a href="myportfolio.html" style={{ color: '#FFF' }}>Portfolio</a>
            </div>
            <div className="col-md-2">
              <a href="contactme.html" style={{ color: '#FFF' }}>Contact Me</a>
            </div>
            <div className="col-md-2">
              <a href="https://github.com/chrissy613" target="_blank" style={{ color: '#FFF' }} rel="noreferrer">My GitHub</a>
            </div>
            <div className="col-md-2">
              <a href="https://docs.google.com/document/d/1A-dozDIL88gaDhbJIQkQJiAE8JeC9ZOUaz4GBmSBj5g/edit?usp=sharing" target="_blank" style={{ color: '#FFF' }} rel="noreferrer">My Resume</a>
            </div>
            <div className="col-md-2">
              <a href="https://www.linkedin.com/in/christopher-crook-b13563191/" target="_blank" style={{ color: '#FFF' }} rel="noreferrer">My LinkedIn</a>
            </div>
          </div>    
        </nav>
      );
    };

export default Nav;