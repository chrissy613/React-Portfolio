import React from "react";
import Nav from "./components/nav/index.js";
import Footer from "./components/footer/index.js";
import Header from "./components/header/index.js";
import Bio from "./components/bio/index.js";
import Portfolio from "./components/portfolio/index.js";
import Contact from "./components/contact/index.js";

function App() {
    return (
      <div>
        <Header />
        <Nav />
        <Bio />
        <Footer />
      </div>
    );
  }
  
export default App;
  