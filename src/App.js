import React from "react";
import Nav from "./components/nav/index.js";
import Footer from "./components/footer/index.js";
import Header from "./components/header/index.js";
import Bio from "./components/bio/index.js";
import Portfolio from "./components/portfolio/index.js";
import Contact from "./components/contact/index.js";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
      <div>
        <Header />
        <Nav />
        {/* <Bio></Bio> */}
        <Switch>
          <Route exact path="/React-Portfolio" component={Bio} />
          <Route exact path="/mybio.html" component={Bio} />
          <Route exact path="/myportfolio.html" component={Portfolio} />
          <Route exact path="/contactme.html" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
};
  
export default App;
  