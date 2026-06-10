import React, { useState, useEffect } from "react";
import "./MetroTrain.css";
import "font-awesome/css/font-awesome.min.css";
import { FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react"; // Use QRCodeCanvas instead

const MetroTrain = () => {
  const categorizedStations = {
    Line1: [
      "Ghatkopar",
      "Jagruti Nagar",
      "Asalpha",
      "Saki Naka",
      "Marol Naka",
      "Airport Road",
      "Chakala (J B Nagar)",
      "Western Express Highway",
      "Andheri",
      "Azad Nagar",
      "D N Nagar",
      "Versova",
    ],
    Line2A: [
      "Dahisar East",
      "Anand Nagar",
      "Kandarpada",
      "Shimpoli",
      "Kandivali West",
      "Malad West",
      "Goregaon West",
      "Oshiwara",
      "DN Nagar",
    ],
    Line7A: [
      "Dahisar East",
      "Anand Nagar",
      "Kandarpada",
      "Shimpoli",
      "Kandivali East",
      "Malad East",
      "Goregaon East",
      "Jogeshwari East",
      "Mogra",
      "Gundavali",
    ],
  };

  const Fares = {
    Ghatkopar: { second: { journey: 10, return: 20 } },
    "Jagruti Nagar": { second: { journey: 10, return: 20 } },
    Asalpha: { second: { journey: 10, return: 20 } },
    "Saki Naka": { second: { journey: 20, return: 40 } },
    "Marol Naka": { second: { journey: 20, return: 40 } },
    "Airport Road": { second: { journey: 20, return: 40 } },
    "Chakala (J B Nagar)": { second: { journey: 20, return: 40 } },
    "Western Express Highway": { second: { journey: 20, return: 40 } },
    Andheri: { second: { journey: 20, return: 40 } },
    "Azad Nagar": { second: { journey: 20, return: 40 } },
    "D N Nagar": { second: { journey: 20, return: 40 } },
    Versova: { second: { journey: 20, return: 40 } },
    "Dahisar East": { second: { journey: 20, return: 40 } },
    "Anand Nagar": { second: { journey: 20, return: 40 } },
    Kandarpada: { second: { journey: 20, return: 40 } },
    Shimpoli: { second: { journey: 20, return: 40 } },
    "Kandivali West": { second: { journey: 20, return: 40 } },
    "Malad West": { second: { journey: 20, return: 40 } },
    "Goregaon West": { second: { journey: 20, return: 40 } },
    Oshiwara: { second: { journey: 20, return: 40 } },
    "Kandivali East": { second: { journey: 20, return: 40 } },
    "Malad East": { second: { journey: 20, return: 40 } },
    "Goregaon East": { second: { journey: 20, return: 40 } },
    "Jogeshwari East": { second: { journey: 20, return: 40 } },
    Mogra: { second: { journey: 20, return: 40 } },
    Gundavali: { second: { journey: 20, return: 40 } },
  };

  const [fare, setFare] = useState(null);
  const [qrCodeData, setQrCodeData] = useState("");
  const [selectedFare, setSelectedFare] = useState(null);

  // Dynamically load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      // Razorpay script loaded
    };
    document.body.appendChild(script);
  }, []);

  const renderOptions = (stations) => {
    return Object.entries(stations).map(([line, stations]) => (
      <optgroup key={line} label={line}>
        {stations.map((station, i) => (
          <option key={i} value={station}>
            {station}
          </option>
        ))}
      </optgroup>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the Selected values from the form
    const source = e.target.source.value;
    const destination = e.target.destination.value;
    const ticketType = e.target.ticketType.value;

    // Check if fares are available for selected source and destination
    if (Fares[source] && Fares[destination]) {
      // Get the fare for selected Type
      const ticketFare = Fares[source].second[ticketType.toLowerCase()];
      setFare(`Fare from ${source} to ${destination}: ₹${ticketFare}`);
      setSelectedFare(ticketFare); // Set selected fare
      setQrCodeData(
        `Ticket Fare: ₹${ticketFare} | Source: ${source} | Destination: ${destination} | Type: ${ticketType}`
      );
    } else {
      setFare("Fare not Available for this route.");
      setQrCodeData("");
    }
  };

  const handlePayment = async () => {
    if (!selectedFare) {
      alert("Please select valid fare data.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedFare }), // Razorpay expects amount in paise
      });

      const order = await response.json();

      const options = {
        key: "rzp_test_2CLVKfQV6kM7rm", // Replace with your Razorpay test key
        amount: order.amount,
        currency: order.currency,
        name: "Metro Train Booking",
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
      };

      const razorPay = new window.Razorpay(options);
      razorPay.open();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="MetroTrainMainContainer">
      <div className="headerContent555">
        <img src="/images/TrainLogo.png" className="logo555" alt="Logo" />
        <h2 className="LocalHeader555">Metro Train Booking</h2>
      </div>

      <div className="Lines">
        <div className="Line1">
          <h2 className="MetroLineHeader">Line 1</h2>
          <div className="Source_Destination">
            <h5 className="MetroH5">Ghatkopar</h5>
            <i className="fa-solid fa-shuffle"></i>
            <h5 className="MetroH5">Versova</h5>
          </div>
        </div>

        <div className="Line2A">
          <h2 className="MetroLineHeader">Line 2A</h2>
          <div className="Source_Destination">
            <h5 className="MetroH5">Anand Nagar</h5>
            <i className="fa-solid fa-shuffle"></i>
            <h5 className="MetroH5">DN Nagar</h5>
          </div>
        </div>

        <div className="Line7">
          <h2 className="MetroLineHeader">Line7</h2>
          <div className="Source_Destination">
            <h5 className="MetroH5">Gundavali</h5>
            <i className="fa-solid fa-shuffle"></i>
            <h5 className="MetroH5">Dahisar East</h5>
          </div>
        </div>
      </div>

      <div className="form-container2">
        <form className="ticket-form2" onSubmit={handleSubmit}>
          {[
            { id: "source", label: "Source", icon: <FaMapMarkerAlt /> },
            {
              id: "destination",
              label: "Destination",
              icon: <FaMapMarkerAlt />,
            },
          ].map(({ id, label, icon }) => (
            <div className="form-field2" key={id}>
              <label>{label}</label>
              {icon}
              <select id={id} className="select-station" required>
                <option>Select {label}</option>
                {renderOptions(categorizedStations)}
              </select>
            </div>
          ))}

          <div className="form-field2">
            <label>Ticket Type</label>
            <select id="ticketType" required>
              <option>Select Ticket Type</option>
              <option value="Journey">Journey</option>
              <option value="Return">Return</option>
            </select>
          </div>

          <button className="bookButton" type="submit">
            Book Tickets
          </button>
        </form>
      </div>

      {fare && <div className="Fare">Fare: ₹{selectedFare}</div>}

      {qrCodeData && (
        <div className="QRCodeContainer">
          <QRCodeCanvas value={qrCodeData} />
        </div>
      )}

      <button onClick={handlePayment} className="payButton">
        Pay Now
      </button>
    </div>
  );
};

export default MetroTrain;
