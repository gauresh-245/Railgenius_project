import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PassengerDetails.css";

const PassengerDetails = () => {
  const location = useLocation();
  const { train, selectedSeats } = location.state || {};
  const navigate = useNavigate();

  const [passengerDetails, setPassengerDetails] = useState(
    selectedSeats.map(() => ({
      fullName: "",
      email: "",
      age: "",
      gender: "",
      mobileNo: "",
    }))
  );

  const handleInputChange = (index, field, value) => {
    const updateDetails = [...passengerDetails];
    updateDetails[index][field] = value;
    setPassengerDetails(updateDetails);
  };

  const [validationErrors, setValidateErrors] = useState([]);

  const validateForm = () => {
    const errors = [];

    passengerDetails.forEach((passenger) => {
      const error = {};

      if (!passenger.fullName?.trim())
        error.fullName = "Full Name is Required.";
      if (!/^\S+@\S+\.\S+$/.test(passenger.email))
        error.email = "Invalid email format.";
      if (!passenger.age || passenger.age <= 0)
        error.age = "Age must be greater than 0.";
      if (!passenger.gender) error.gender = "Please select a gender.";
      if (!/^\d{10}$/.test(passenger.mobileNo))
        error.mobileNo = "Mobile number must be 10 digits.";

      errors.push(error);
    });

    setValidateErrors(errors);
    return errors.every((error) => Object.keys(error).length === 0);
  };

  return (
    <>
      <div className="MainRoot">
        <div className="PassengerDetails_Container">
          <div className="headerContent1000">
            <img src="/images/TrainLogo.png" className="logo1000" alt="Logo" />
            <h2 className="LocalHeader1000">Passenger Details</h2>
          </div>

          {/* Flex Container */}
          <div className="PassengerDetails_FlexContainer">
            {/* Left Side: Form */}
            <div className="PassengerDetails_FormContainer">
              {selectedSeats.map((seat, index) => (
                <div key={index} className="PassengerDetails_Form">
                  <h3>
                    Seat No: {seat.seatNo} ({seat.seatType})
                  </h3>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={passengerDetails[index].fullName}
                    onChange={(e) =>
                      handleInputChange(index, "fullName", e.target.value)
                    }
                  />
                  {validationErrors[index]?.fullName && (
                    <p className="error">{validationErrors[index].fullName}</p>
                  )}

                  <input
                    type="email"
                    placeholder="Enter Email-ID"
                    value={passengerDetails[index].email}
                    onChange={(e) =>
                      handleInputChange(index, "email", e.target.value)
                    }
                  />
                  {validationErrors[index]?.email && (
                    <p className="error">{validationErrors[index].email}</p>
                  )}

                  <input
                    type="number"
                    placeholder="Enter Your Age"
                    value={passengerDetails[index].age}
                    onChange={(e) =>
                      handleInputChange(index, "age", e.target.value)
                    }
                  />
                  {validationErrors[index]?.age && (
                    <p className="error">{validationErrors[index].age}</p>
                  )}

                  <select
                    value={passengerDetails[index].gender}
                    onChange={(e) =>
                      handleInputChange(index, "gender", e.target.value)
                    }
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {validationErrors[index]?.gender && (
                    <p className="error">{validationErrors[index].gender}</p>
                  )}

                  <input
                    type="text"
                    placeholder="Enter Mobile No"
                    value={passengerDetails[index].mobileNo}
                    onChange={(e) =>
                      handleInputChange(index, "mobileNo", e.target.value)
                    }
                  />
                  {validationErrors[index]?.mobileNo && (
                    <p className="error">{validationErrors[index].mobileNo}</p>
                  )}
                </div>
              ))}

              <button
                className="btn222"
                onClick={() => {
                  if (validateForm()) {
                    navigate("/DetailsConfirmation", {
                      state: { train, selectedSeats, passengerDetails },
                    });
                  }
                }}
              >
                Confirm Booking
              </button>
            </div>

            {/* Right Side: Rules Section */}
            <div className="RulesSection">
              <h2> * Travel Rules and Regulations *</h2>
              <ul>
                <li>Carry a valid ticket at all times.</li>
                <li>Arrive 30 minutes before departure.</li>
                <li>Board and de-board safely at designated stops.</li>
                <li>Occupy only your assigned seat.</li>
                <li>Use dustbins and keep the train clean.</li>
                <li>Smoking and alcohol are prohibited.</li>
                <li>Secure your belongings at all times.</li>
                <li>Respect fellow passengers and maintain decorum.</li>
                <li>Do not carry hazardous items.</li>
                <li>Use emergency chains or alarms only in emergencies.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerDetails;
