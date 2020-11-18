import React from "react";
import "./style.css";

function Contact () {
      return (
  
        <main className="content">
          <div id="contactMe" className="contactMe">
            <h2>Contact Me!</h2>
            <h6>crook.christoph@gmail.com</h6>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputName">Name</label>
                  <input type="name" className="form-control" id="inputName" placeholder="Your Name Here" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Message</label>
                <textarea type="text" className="form-control" id="inputMessage" defaultValue={""} />
              </div>
              <div className="btn">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </main>
      );
};

export default Contact;