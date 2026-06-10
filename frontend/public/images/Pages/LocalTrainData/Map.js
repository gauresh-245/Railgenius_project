import React from 'react'
import "./Map.css";
const Map = () => {
  return (
    <div className="MainMapContainer">
      <div className="headerContent">
        <img src="/images/TrainLogo.png" className="logo1" alt="Logo" />
        <h2 className="LocalHeader">MAP</h2>
      </div>

      <img className="LocalMap1 all" src="/images/LOCAL1.jpg" />
      <img className="LocalMap2 all" src="/images/LOCAL2.jpg" />
      <img className="LocalMap2 all" src="/images/LOCAL3.jpg" />
    </div>
  );
}

export default Map