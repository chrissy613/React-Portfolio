import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function Nav() {
      return (
  
        <nav>
          <div className="row">
            <div className="col-md-2">
              <Link to="/mybio.html" style={{ color: '#FFF' }} className={window.location.pathname === "/mybio" ? "nav-link active" : "nav-link"}>
                About Me
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/myportfolio.html" style={{ color: '#FFF' }} className={window.location.pathname === "/myportfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="contactme.html" style={{ color: '#FFF' }} className={window.location.pathname === "/contactme" ? "nav-link active" : "nav-link"}>
                Contact Me
              </Link>
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