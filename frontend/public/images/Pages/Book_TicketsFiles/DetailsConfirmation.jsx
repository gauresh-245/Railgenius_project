import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetailsConfirmation.css";

const FillUpDetails = () => {
  const location = useLocation();
  const { train, selectedSeats, passengerDetails } = location.state || {};

  const [prn, setPrn] = useState("");

  useEffect(() => {
    const generatePRN = () => {
      // Generate a unique numeric PRN
      const timestampPart = Date.now().toString().slice(-6); // Last 6 digits of timestamp
      const randomPart = Math.floor(100000 + Math.random() * 900000).toString(); // Random 6-digit number
      return `${timestampPart}${randomPart}`; // Combine both
    };

    if (train && selectedSeats && passengerDetails) {
      setPrn(generatePRN());
    }
  }, [train, selectedSeats, passengerDetails]);

  if (!train || !selectedSeats.length || !passengerDetails) {
    return <p>Booking details are missing.</p>;
  }

  const handlePayment = async () => {
    const totalPrice = selectedSeats.reduce(
      (total, seat) => total + seat.price,
      0
    );

    const response = await fetch("http://localhost:8080/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice, prn }),
    });

    const order = await response.json();

    const options = {
      key: "rzp_test_2CLVKfQV6kM7rm",
      amount: order.amount,
      currency: order.currency,
      name: "Train Booking",
      description: "Complete your booking payment",
      order_id: order.id,
      handler: async function (response) {
        const verificationResponse = await fetch(
          "http://localhost:5000/verify-payment",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...response, prn }),
          }
        );

        const result = await verificationResponse.text();

        if (verificationResponse.status === 200) {
          alert(`Payment Successful! Your PRN: ${prn}`);
        } else {
          alert("Payment Verification Failed! " + result);
        }
      },
      prefill: {
        name: passengerDetails[0]?.fullName,
        email: passengerDetails[0]?.email,
        contact: passengerDetails[0]?.mobileNo,
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="MainDetail">
        <div className="DetailsConfirmation_Container">
          <div className="headerContent500">
            <img src="/images/TrainLogo.png" className="logo500" alt="Logo" />
            <h2 className="LocalHeader500">Booking Confirmation</h2>
          </div>

          {/* Train Details Section */}
          <div className="TrainDetails">
            <h2>Train Details</h2>
            <p>
              <strong className="opclass">Name:</strong> {train.trainName}
            </p>
            <p>
              <strong className="opclass">Date:</strong> {train.date}
            </p>
            <p>
              <strong className="opclass">Departure:</strong>{" "}
              {train.departureTime}
            </p>
            <p>
              <strong className="opclass">Arrival:</strong> {train.arrivalTime}
            </p>
            <p>
              <strong className="opclass">Source:</strong> {train.source}
            </p>
            <p>
              <strong className="opclass">Destination:</strong>{" "}
              {train.destination}
            </p>
            <p className="prn-display">
              <strong className="opclass">PRN Number:</strong> {prn}
            </p>
          </div>

          {/* Selected Seats Section */}
          <div className="SelectedSeats">
            <h2>Selected Seats</h2>
            {selectedSeats.map((seat, index) => (
              <div key={index} className="SeatDetails">
                <p>Seat No: {seat.seatNo}</p>
                <p>Seat Type: {seat.seatType}</p>
                <p>Price: ₹{seat.price}</p>
              </div>
            ))}
          </div>

          {/* Passenger Details Section */}
          <div className="PassengerInfo">
            <h2>Passenger Details</h2>
            {passengerDetails.map((passenger, index) => (
              <div key={index} className="PassengerDetails">
                <p>
                  <strong className="opclass">Passenger {index + 1}:</strong>
                </p>
                <p>Name: {passenger.fullName}</p>
                <p>Email: {passenger.email}</p>
                <p>Age: {passenger.age}</p>
                <p>Gender: {passenger.gender}</p>
                <p>Mobile No: {passenger.mobileNo}</p>
                <hr />
              </div>
            ))}
          </div>

          {/* Total Price Section */}
          <div className="Combo">
            <h3 className="TotalPrice">
              Total Price: ₹
              {selectedSeats.reduce((total, seat) => total + seat.price, 0)}
            </h3>

            <div className="btnClass">
              <button className="Payment-Button1" onClick={handlePayment}>
                Proceed to Payment
              </button>
              <button className="Print-Ticket-Button1" onClick={handlePrint}>
                Print Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FillUpDetails;
