import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TrainList.css"; // Import the CSS file

const TrainList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, destination } = location.state;

  const [trains, setTrains] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        // Fetching data from the backend API
        const response = await fetch(
          `http://localhost:8080/api/trains?source=${source}&destination=${destination}`
        );

        if (!response.ok) {
          throw new Error("No trains available for this route.");
        }

        const data = await response.json();
        setTrains(data);
        setError(""); // Reset any previous error
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTrains();
  }, [source, destination]);

  const handleNavigationButton = () => {
    navigate('/BookLocalTicket')
  }

  return (
    <div className="trainListContainer">
      <div className="headerContentOnLocalPage">
        <img src="/images/TrainLogo.png" className="logo5" alt="Logo" />
        <div className="Combine">
          <h2 className="LocalHeader5">
            {" "}
            Trains from {source} to {destination}
          </h2>

        </div>
      </div>
   

      {/* style from Here */}

      {error ? (
        <p className="errorMessage">{error}</p> // Show error message if fetching fails
      ) : (
        <ul className="localUI">
          {trains.map((train, index) => (
            <li className="LocalLI" key={index}>
              {/* Left Section: Train Name and Details */}
              <div>
                <div className="trainName">{train.name}</div>
                <div className="trainInfo">
                  <span className="trainTime">{train.time}</span>
                  <span className="trainPlatform">{train.PF}</span>
                </div>
              </div>

              {/* Right Section: Additional Info */}
              <div className="rightSection">
                <span className="platformTag">Platform {train.PF}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrainList;
