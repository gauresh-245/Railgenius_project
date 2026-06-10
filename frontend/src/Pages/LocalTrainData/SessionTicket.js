import React, { useState } from "react";
import "./SessionTicket.css";
import "font-awesome/css/font-awesome.min.css";

const SessionTicket = () => {

  const fareData = [
    { source: "CSMT", destination: "KASARA", fares: [5450, 1325, 500] },
    { source: "CSMT", destination: "AMBARNATH", fares: [3450, 865, 315] },
    { source: "CSMT", destination: "KALYAN", fares: [3450, 865, 315] },
    { source: "CHURCH GATE", destination: "VIRAR", fares: [3450, 865, 315] },
    { source: "CHURCH GATE", destination: "BANDRA", fares: [1453, 360, 135] },
    { source: "CHURCH GATE", destination: "BORIVALI", fares: [2350, 590, 215] },
    { source: "DADAR", destination: "THANE", fares: [4000, 1000, 375] },
    {
      source: "VILE PARLE",
      destination: "JOGESHWARI",
      fares: [2700, 675, 250],
    },
    { source: "VIRAR", destination: "BANDRA", fares: [2000, 500, 185] },
    { source: "BANDRA", destination: "BORIVALI", fares: [1500, 375, 140] },
    { source: "MAHIM", destination: "KANDIVALI", fares: [1800, 450, 165] },
    { source: "VIRAR", destination: "KALYAN", fares: [2200, 550, 200] },
  ];

  const handlePayment = async (amount) => {
    try {
    
      // Make a request to your backend to create an order
      const response = await fetch("http://localhost:8080/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount  }), // amount in paise
      });

      const order = await response.json();
      

      // Initialize Razorpay
      const options = {
        key: "rzp_test_2CLVKfQV6kM7rm", // Replace with your Razorpay key
        amount: order.amount, // amount in paise
        currency: order.currency,
        name: "Local Train Booking",
        description: "Ticket Payment",
        order_id: order.id,
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
          name: "Customer Name", // Optional
          email: "customer@example.com", // Optional
          contact: "9876543210", // Optional
        },
        notes: {
          address: "customer address",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    
    } catch (error) {
      console.error("Error during payment:", error);
      
    }
  };

  return (
    <div>
      <div className="headerContent">
        <img src="/images/TrainLogo.png" className="logo1" alt="Logo" />
        <h2 className="LocalHeader">Session Booking</h2>
      </div>

      <div className="FareRateContainer">
        {fareData.map((fare, index) => (
          <div key={index} className="FareRow">
            <div className="Farecard">
              <div className="Container11">
                <h5 className="LocalH5">{fare.source}</h5>
                <i className="fa-solid fa-shuffle"></i>
                <h5 className="LocalH5">{fare.destination}</h5>
              </div>
              <div className="pass">
                <span className="span1">Yearly</span>
                <span className="span2">Quarterly</span>
                <span className="span3">Monthly</span>
              </div>

              <div className="button-group">
                {fare.fares.map((amount, idx) => (
                  <button
                    key={idx}
                    className="btn33"
                    onClick={() => handlePayment(amount)}
                    
                  >
                    { `${amount}/-`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionTicket;
