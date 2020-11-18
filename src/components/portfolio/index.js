import React from "react";
import "./style.css";
let notedrop = require("./notedrop.png");
let rogueblitz = require("./rogueblitz.png");
let readme = require("./readme.png");

function Portfolio () {
      return (
  
        <main className="content">
          <div id="portfolio" className="portfolio">
            <h2>Project Portfolio</h2>
            <div className="row">
              <div className="col-md-6">
                <h3><a href="https://chrissy613.github.io/N0teDr0p/" target="_blank" id="deploy" style={{ color: '#FFF' }} rel="noreferrer">N0teDr0p</a></h3>  
                <a href="https://chrissy613.github.io/N0teDr0p/" target="_blank" rel="noreferrer">  
                  <img src={notedrop.default} alt="notedrop deployed site"/>
                </a>
              </div>
              <div className="col-md-6">
                <p><a href="https://github.com/chrissy613/N0teDr0p/" target="_blank" style={{ color: '#FFF' }} rel="noreferrer">This is a web application that allows a user to search for music artists and receive information on their top 10 hits and upcoming concerts. Check out the repo for my first group coding project by clicking here, or click the picture for a live demo! </a></p>
                <p>Tools Used: HTML, CSS, and JavaScript.</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <h3><a href="https://rogueblitzgaming.herokuapp.com/" target="_blank" id="deploy" style={{ color: '#FFF' }} rel="noreferrer">RogueBlitz</a></h3> 
                <a href="https://rogueblitzgaming.herokuapp.com/" target="_blank" rel="noreferrer">
                  <img src={rogueblitz.default} alt="rogueblitz deployed site"/>
                </a>
              </div>
              <div className="col-md-6">
                <p><a href="https://github.com/KilometersDodecahedron/RogueBlitz" target="_blank" style={{ color: '#FFF' }} rel="noreferrer">RogueBlitz is a dungeon-crawler style video game in which you fight off hordes of never-ending enemies! The first levels allow a player to get a feel for the game but as your score goes up, so does the difficulty! Can you reach level 6 and defeat the hardest enemies and secure your spot on the highscore leaderboard? Try our game by clicking the picture or check out the repo by clicking here! </a></p>
                <p>Tools Used: HTML, CSS, JavaScript, Handlebars, and Phaser 3.</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <h3><a href="https://github.com/chrissy613/README_Generator" target="_blank" id="deploy" style={{ color: '#FFF' }} rel="noreferrer">Readme.md Generator</a></h3> 
                <a href="https://github.com/chrissy613/README_Generator" target="_blank" rel="noreferrer">
                  <img src={readme.default} alt="readme end result"/>
                </a>
              </div>
              <div className="col-md-6">
                <p><a href="https://github.com/chrissy613/README_Generator" target="_blank" style={{ color: '#FFF' }} rel="noreferrer">This command line application generates a concise, user friendly readme.md file after prompting you with questions about your project. The readme.md files it creates have the same formatting as seen in the screenshot. To demo this application, please download it and follow the included instructions.</a></p>
                <p>Tools Used: Javascript</p>
              </div>
            </div>
          </div>   
        </main>
      );
};

export default Portfolio;