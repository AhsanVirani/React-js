import React from "react";
import "./Newsfeed.css";
import LineGraph from "./Chart/LineGraph";

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed_chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,656.3</h1>
            <p>+$143 (+0.1%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
