import React, { useState } from "react";
import "./Form.css";
import { FaTrain, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

const TrainTicketForm = () => {
  const stations = [
    "CSMT",
    "Dadar",
    "Ghatkopar",
    "Thane",
    "Kalyan Junction",
    "Karjat",
  ];

  const fares = {
    CSMT: {
      second: { journey: 5, return: 10 },
      first: { journey: 25, return: 50 },
    },
    Dadar: {
      second: { journey: 5, return: 10 },
      first: { journey: 25, return: 50 },
    },
    Ghatkopar: {
      second: { journey: 10, return: 20 },
      first: { journey: 60, return: 120 },
    },
    Thane: {
      second: { journey: 15, return: 30 },
      first: { journey: 85, return: 170 },
    },
    "Kalyan Junction": {
      second: { journey: 15, return: 30 },
      first: { journey: 100, return: 200 },
    },
    Karjat: {
      second: { journey: 30, return: 60 },
      first: { journey: 135, return: 270 },
    },
  };

  const [fare, setFare] = useState(null);
  const [selectedFare, setSelectedFare] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      source,
      destination,
      class: travelClass,
      ticketType,
    } = event.target;

    if (
      !source.value ||
      !destination.value ||
      !travelClass.value ||
      !ticketType.value
    ) {
      setFare("Invalid input. Please fill all fields.");
      return;
    }

    const destinationKey = destination.value;
    const classKey = travelClass.value.toLowerCase().split(" ")[0];
    const fareValue =
      fares[destinationKey]?.[classKey]?.[ticketType.value.toLowerCase()];

    if (fareValue !== undefined) {
      setFare(`Fare: ₹${fareValue}`);
      setSelectedFare(fareValue);
    } else {
      setFare("Invalid data. Fare not available.");
    }
  };

  const handlePayment = async () => {
    if (!selectedFare) {
      alert("Please select valid fare data.");
      return;
    }

    //We use try and catch block for payment gateway's

    try {
      //Making an API Call to
      const response = await fetch("http://localhost:8080/create-order", {
        //Sends the amount to the backend.
        method: "POST",

        //format of the request body
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedFare }),
      });

      //Stroing the Order Object
      //Converts the API Request into JSOn Format
      const order = await response.json();

      const options = {
        key: "rzp_test_2CLVKfQV6kM7rm",
        amount: order.amount,
        currency: order.currency,
        name: "Train Booking",
        description: "Complete your ticket booking payment",
        order_id: order.id,

        //Handling Payment Success
        handler: async function (response) {
          const verificationResponse = await fetch(
            "http://localhost:5000/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            }
          );

          const result = await verificationResponse.text();

          if (verificationResponse.status === 200) {
            alert("Payment Successful! " + result);
          } else {
            alert("Payment Verification Failed! " + result);
          }
        },
        prefill: {
          name: "Passenger Name",
          email: "example@example.com",
          contact: "1234567890",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const renderOptions = (options) =>
    options.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    ));

  return (
    <div className="MainLocalTicketBooking">
      <div className="headerContent90">
        <img src="/images/TrainLogo.png" className="logo90" alt="Logo" />
        <h2 className="LocalHeader90">Local Train Booking</h2>
      </div>

      <div className="form-container">
        <form className="ticket-form" onSubmit={handleSubmit}>
          {[
            {
              id: "source",
              label: "Source",
              icon: <FaMapMarkerAlt />,
              options: stations,
            },
            {
              id: "destination",
              label: "Destination",
              icon: <FaMapMarkerAlt />,
              options: stations,
            },
            {
              id: "class",
              label: "Class",
              icon: <FaTrain />,
              options: ["Second Class", "First Class"],
            },
            {
              id: "ticketType",
              label: "Ticket Type",
              icon: <FaTicketAlt />,
              options: ["Journey", "Return"],
            },
          ].map(({ id, label, icon, options }) => (
            <div className="form-group" key={id}>
              <label htmlFor={id}>
                {icon} {label}
              </label>
              <select id={id} name={id} required>
                <option value="">Select {label}</option>
                {renderOptions(options)}
              </select>
            </div>
          ))}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {fare && (
          <div className="fare-display">
            <button className="btnLocalTrainBooking" onClick={handlePayment}>
              {fare}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainTicketForm;
