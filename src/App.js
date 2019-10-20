//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [awayTimeout, setAwayTimeout] = useState(0);
    const [homeTimeout, setHomeTimeout] = useState(0);  


    
  return (
    <div className="container">
      <section className="scoreboard">
        <h1 className= "champion">National Championships</h1>
        <div className="innerBorder">
          <div className="topRow">
          <div className="homeTimeouts">
          <div className="timeoutsLeft">TOL</div>
            <div className="timeoutNumber">{homeTimeout}</div>
        </div>
            <div className="home">
              <h2 className="home__name">Wildcats</h2>
              {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

              <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
              
              <h2 className="away__name">Tigers</h2>
              <div className="away__score">{awayScore}</div>
            </div>
            <div className="awayTimeouts">
      <div className="timeoutsLeft">TOL</div>
        <div className="timeoutNumber">{awayTimeout}</div>
    </div>
        </div>
        <BottomRow />
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
          <button className="homeButtons__TOL" onClick={() => setHomeTimeout(homeTimeout + 1)}>Home Timeouts</button>
           
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
          <button className="awayButtons__TOL" onClick={() => setAwayTimeout(awayTimeout + 1)}>Away Timeouts</button>
        </div>
        
      </section>
    </div>
  );
}






export default App;
