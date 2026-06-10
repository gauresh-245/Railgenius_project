import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure the CSS is imported

import { handleError, handleSuccess } from "./toasify";

const Register = () => {
  //To Store User Input Data
  //RegisterInfo = Initial value as an empty string for each property
  //setRegisterInfo = Is used to update the RegisterInfo
  const [RegisterInfo, setRegisterInfo] = useState({
    userID: "",
    name: "",
    email:"",
    password: "",
    gender: "",
    mobileNumber: "",
  });


  const navigate = useNavigate();



  const handleChange = (e) => {
    //Now Our Target is Capture the name and value
    //This name is not a User Input Name, This name is HTML Form element name which you declare in every element
    const { name, value } = e.target;
    console.log(name, value);
    
    //Copy RegisterInfo into copyRegisterInfo (inside copyRegisterInfo we have data)
    const copyRegisterInfo = {...RegisterInfo}

    copyRegisterInfo[name] = value

    //Set the data into SetRegisterInfo
    setRegisterInfo(copyRegisterInfo)

  };

  




  const handleRegister = async (e) => {
    e.preventDefault(); //To Stop Refreshing the Page

    //Client Side Validation
    const { userID, name, email, password, gender, mobileNumber } =
      RegisterInfo;


    // Check if any field is empty 
    if (!userID || !name || !email || !password || !gender || !mobileNumber) {
      handleError("All Fields are Required");
      return;
    }
   


    //Now We Use API to call the data on Server . data which user entered inside the form.
    try{
      //Store Register URL which you create in backend
      const url = "http://localhost:8080/user/register";

      //POST : To Send or Store data on backend
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //You select body as your RegisterInfo state (just like you written on postman)
        body: JSON.stringify(RegisterInfo),
      });

      //Save the Result
      const result = await response.json();

      //Handle Client and Server Validation
      const { success, message, error } = result;

      //If form doesn't have any error then submit it and redirect to Login Page
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);


        //If form have any error then show the error
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    }catch(err){
        handleError(err.message)
    }
  }





  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form className="form-3d" onSubmit={handleRegister}>
        <div className="input-container">
          <label htmlFor="userID">User ID</label>
          <input
            type="text"
            name="userID"
            placeholder="Enter User ID..."
            onChange={handleChange}
           value={RegisterInfo.userID}
          />
        </div>

        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={RegisterInfo.name}
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email..."
            onChange={handleChange}
            value={RegisterInfo.email}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            onChange={handleChange}
            value={RegisterInfo.password}
          />
        </div>

        <div className="input-container">
          <label htmlFor="gender">Gender</label>

          <select
            name="gender"
            onChange={handleChange}
            value={RegisterInfo.gender}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter Mobile Number..."
            onChange={handleChange}
            value={RegisterInfo.mobileNumber}
          />
        </div>

        <button type="submit" className="button-3d">
          Submit
        </button>
        <span className="link-3d">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Register;
