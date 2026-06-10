import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TicketSelection.css";

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { train } = location.state || {}; // Access the passed train details

  // Pre-Booked Seat Numbers
  const [bookedSeats, setBookedSeats] = useState([3, 7, 15, 22, 9, 18]);

  // State to store selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Prices for each seat type
  const seatPrices = {
    LOWER: 450,
    MIDDLE: 550,
    UPPER: 650,
    "SIDE LOWER": 750,
    "SIDE UPPER": 850,
  };

  // Maximum seat selection limit
  const Max_Seat_Selection = 3;

  // Handle seat selection
  const handleSeatSelection = (seatNo, seatType) => {
    // Show message if the seat is already booked
    if (bookedSeats.includes(seatNo)) {
      alert("This seat is already booked!");
      return;
    }

    setSelectedSeats((prevSeats) => {
      // Check if the seat is already selected
      const isAlreadySelected = prevSeats.some((s) => s.seatNo === seatNo);

      if (isAlreadySelected) {
        // Remove the seat if it is already selected
        return prevSeats.filter((s) => s.seatNo !== seatNo);
      }

      // Check if the maximum limit has been reached
     if(prevSeats.length >= Max_Seat_Selection){
      alert(`You can select a maximum of ${Max_Seat_Selection} seats.`);
      return prevSeats;
     }

      // Add the new seat
      return [...prevSeats, { seatNo, seatType, price: seatPrices[seatType] }];
    });
  };

  // Render individual seat
  const renderSeat = (seatNo, seatType) => {
    const isBooked = bookedSeats.includes(seatNo);
    const isSelected = selectedSeats.some((s) => s.seatNo === seatNo);

    return (
      <div
        className={`Seat ${seatType.replace(/\s/g, "-")} ${
          isBooked ? "Booked" : isSelected ? "Selected" : "Available"
        }`}
        onClick={() => handleSeatSelection(seatNo, seatType)}
        key={seatNo}
      >
        <span className="SeatNo">{seatNo}</span>
        <span className="SeatType">{seatType}</span>
      </div>
    );
  };

  if (!train) {
    return <p>No train data available.</p>;
  }

  return (
    <>
      <div className="MainTicketSelectionClass">
        <div className="headerContent1212">
          <img src="/images/TrainLogo.png" className="logo1212" alt="Logo" />
          <h2 className="LocalHeader1212">Seat Selection</h2>
        </div>

        <div className="TicketSelection_Conatiner">
          <div className="SelectionContainer">
            <div className="tickets">
              <div className="ticket-selector">
                <div className="title">
                  <p>
                    <strong>{train.trainName}</strong>
                  </p>
                </div>

                <div className="seats-Two">
                  <div className="status">
                    <div className="item">Available</div>
                    <div className="item">Booked</div>
                    <div className="item">Selected</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Seat Grid */}
            <div className="SeatGrid">
              <div className="MainSeats">
                {renderSeat(1, "LOWER")}
                {renderSeat(2, "MIDDLE")}
                {renderSeat(3, "UPPER")}
              </div>
              <div className="SideSeats">{renderSeat(7, "SIDE LOWER")}</div>

              <div className="MainSeats">
                {renderSeat(4, "LOWER")}
                {renderSeat(5, "MIDDLE")}
                {renderSeat(6, "UPPER")}
              </div>
              <div className="SideSeats">{renderSeat(8, "SIDE UPPER")}</div>
            </div>

            {/* More Sections */}
            <div className="SeatGrid Section3">
              <div className="MainSeats">
                {renderSeat(9, "LOWER")}
                {renderSeat(10, "MIDDLE")}
                {renderSeat(11, "UPPER")}
              </div>
              <div className="SideSeats">{renderSeat(15, "SIDE LOWER")}</div>

              <div className="MainSeats">
                {renderSeat(12, "LOWER")}
                {renderSeat(13, "MIDDLE")}
                {renderSeat(14, "UPPER")}
              </div>
              <div className="SideSeats">{renderSeat(16, "SIDE UPPER")}</div>
            </div>

            <div className="SeatGrid Section2">
              <div className="MainSeats">
                {renderSeat(17, "LOWER")}
                {renderSeat(18, "MIDDLE")}
                {renderSeat(19, "UPPER")}
              </div>
              <div className="SideSeats">{renderSeat(23, "SIDE LOWER")}</div>

              <div className="MainSeats">
                {renderSeat(20, "LOWER")}
                {renderSeat(21, "MIDDLE")}
                {renderSeat(22, "UPPER")}
              </div>
              <div className="SideSeats">{renderSeat(24, "SIDE UPPER")}</div>
            </div>
          </div>

          <div className="video-container">
            <video src="/images/TrainVideo.mp4" autoPlay loop muted />
          </div>
        </div>

        <button
          className="BookingDetails_Button"
          onClick={() => {
            if (selectedSeats.length === 0) {
              alert("Please select at least one seat to proceed!");
              return;
            }
            navigate("/passenger-details", {
              state: { train, selectedSeats },
            });
          }}
        >
          PROCESSED TO CHECKOUT
        </button>
      </div>
    </>
  );
};

export default BookingDetails;
