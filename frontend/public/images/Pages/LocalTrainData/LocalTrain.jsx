import React from "react";
import "./LocalTrain.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

const LocalTrain = () => {
  const navigate = useNavigate();

  const videoData = [
    { upper: "CSMT", src: "/images/Mumbai.mp4", lower: "KASARA" },
    { upper: "CHURCHGATE", src: "/images/ChruchGate.mp4", lower: "VIRAR" },
    { upper: "BOMBAY", src: "/images/Panvel.mp4", lower: "PANVEL" },
    { upper: "THANE", src: "/images/Vashi.mp4", lower: "PANVEL" },
  ];

  const handleNavigate = (source, destination) => {
    navigate(`/trains`, { state: { source, destination } });
  };

  const handleNavLink = (page) => {
    navigate(`/${page}`)
  }
  return (
    <div className="MainLocalContainer">
      <div className="headerContent">
        <img src="/images/TrainLogo.png" className="logo1" alt="Logo" />
        <h2 className="LocalHeader">Local Train Booking</h2>
      </div>

      <div className="AllSections">
        <div className="SideNav">
          <div className="Boxes">
            <a href="#" className="active">
              Lines
            </a>
            <a onClick={() => handleNavLink("TrainTicketForm")} className="commonLink">Fare</a>
            <a href="#">Platform Ticket</a>
            <a onClick={() => handleNavLink("map")} className="commonLink">Map</a>
            <a href="#">QR Booking</a>
            <a href="#">Journey Ticket</a>
            <a onClick={() => handleNavLink("sessionTicket")} className="commonLink">Session Ticket</a>
            <a href="#">Cancel Ticket</a>
            <a href="#">History</a>
          </div>
        </div>
        <div className="mainContent">
          <div className="LineContent">
            {videoData.map((video, index) => (
              <div className="video_Container1" key={index}>
                <button
                  className="upper"
                  onClick={() => handleNavigate(video.upper, video.lower)}
                >
                  {video.upper}
                </button>
                <video src={video.src} className="videos" autoPlay loop muted />
                <button
                  className="Lower"
                  onClick={() => handleNavigate(video.lower, video.upper)} // Reverse source and destination
                >
                  {video.lower}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalTrain;
