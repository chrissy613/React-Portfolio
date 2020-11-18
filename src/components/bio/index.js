import React from "react";
import "./style.css";
let pfp = require("./pfp.png");

function Bio () {
      return (
  
        <main className="content">
          <div id="aboutme" className="aboutme">
            <h2>About Me</h2>
            <div className="row">
              <div className="col-md-4">  
              <img src={pfp.default} alt="profile pic"/>
              </div>
              <div className="col-md-8" id="aboutText">
                <p>
                  Hey! My name is Christopher Crook, welcome to my biography! I am a 26 year old Rutgers graduate currently enrolled in the Rutgers Coding Bootcamp. I bring extensive knowledge of database manipulation with MySQL and MongoDB. I am proficient in object-oriented JavaScript, jQuery, Bootstrap, and Node servers. My strengths are in communication, creativity, and collaboration.
                </p>
                <p>
                  Check out my first group coding project, an app called N0teDr0p! N0teDr0p allows a user to search for a musician and receive their top 10 hits, song lyrics, and information on upcoming live events.
                </p>
                <p>
                  For my second project my friends and I created RogueBlitz, a top-down video game! I handled implementing enemies into the game by creating their behaviors, stat values, and animating their art assets. You play as a valiant knight taking on a legion of fantasy enemies. Can you get to the hardest levels and claim the highest score on the leaderboard? Test your skills by going to my portfolio page!     
                </p>
              </div>
            </div>
          </div>
        </main>
      );
};

export default Bio;