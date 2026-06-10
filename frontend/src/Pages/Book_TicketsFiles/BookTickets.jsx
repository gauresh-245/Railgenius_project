// BookTickets.js
import React, { useState } from "react";
import axios from "axios";
import "./BookTickets.css";
import { useNavigate } from "react-router-dom";

const BookTickets = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [trains, setTrains] = useState([]);
  const navigate = useNavigate();


 const searchTrains = async (e) => {
   e.preventDefault();

   // Reformat date to "dd-mm-yyyy" format
   const formattedDate = date.split("-").reverse().join("-");

   try {
     const response = await axios.get(
       `http://localhost:8080/api/trains/search`,
       { params: { source, destination, date: formattedDate } }
     );

     console.log("Train data from backend:", response.data);
     setTrains(response.data);
   } catch (err) {
     console.log("Error Fetching Trains", err);
   }
 };

  return (
    <div className="BookingContainer">
      <div className="headerContent121">
        <img src="/images/TrainLogo.png" className="logo121" alt="Logo" />
        <h2 className="LocalHeader121">Express Train Booking</h2>

        
      </div>
      <div className="Form_Container">
        <form className="Ticket_form" onSubmit={searchTrains}>
          <div className="Input_Group_Container">
            <div className="Input_Group">
              <label className="Input_Label">
                <i className="fas fa-map-marker-alt"></i> From
              </label>
              <input
                className="Source_input"
                type="text"
                placeholder="Enter Source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </div>
            <div className="Input_Group">
              <label className="Input_Label">
                <i className="fas fa-map-marker-alt"></i> To
              </label>
              <input
                className="Destination_input"
                type="text"
                placeholder="Enter Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="Input_Group">
              <label className="Input_Label">
                <i className="fas fa-calendar-alt"></i> Date
              </label>
              <input
                className="Date_input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <button className="Search_Ticket" type="submit">
            <i className="fas fa-search"></i> Search
          </button>
        </form>
      </div>

      {trains.length > 0 ? (
        <ul className="Ticket_ul">
          <div className="Train_Container">
            {trains.map((train) => (
              <li className="Ticket_li" key={train._id}>
                <div className="Train_Image_Column">
                  <img
                    src={train.imageUrl}
                    alt={train.trainName}
                    className="Train_Image"
                  />
                </div>
                <div className="Train_Details_Column">
                  <span className="Train_Name">
                    <i className="fas fa-train same"></i> Name:{" "}
                    {train.trainName}
                  </span>
                  <span className="Train_Date">
                    <i className="fas fa-calendar-alt same"></i> Date:{" "}
                    {train.date}
                  </span>
                  <span className="Train_Departure">
                    <i className="fas fa-clock same"></i> Departure:{" "}
                    {train.departureTime}
                  </span>
                  <span className="Train_Arrival">
                    <i className="fas fa-clock same"></i> Arrival:{" "}
                    {train.arrivalTime}
                  </span>
                  <button
                    className="Book_Ticket_Button"
                    onClick={() =>
                      navigate("/TicektSelection", { state: { train } })
                    }
                  >
                    <i className="fas fa-ticket-alt"></i> Book Ticket
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      ) : (
        <p className="Ticket_Pi">No trains found for this route.</p>
      )}
    </div>
  );
};

export default BookTickets;
