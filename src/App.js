import React from "react";
import Nav from "./components/nav/index.js";
import Footer from "./components/footer/index.js";
import Header from "./components/header/index.js";
import Bio from "./components/bio/index.js";
import Portfolio from "./components/portfolio/index.js";
import Contact from "./components/contact/index.js";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Bio/>
          </Route>
          <Route exact path="/portfolio.html">
            <Portfolio/>
          </Route>
          <Route exact path="/contact.html">
            <Contact/>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
};
  
export default App;
  