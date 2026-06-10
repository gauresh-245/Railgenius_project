import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "./toasify";

const Login = () => {
  


  const [LoginInfo, setLoginInfo] = useState({
    userID: '',
    email:'',
    password:'',
  })

  const navigate = useNavigate();



  const handleChange = (e) => {
    
    const { name , value} = e.target;
    console.log(name,value);

    const copyLoginInfo = {...LoginInfo}

    copyLoginInfo[name] = value

    setLoginInfo(copyLoginInfo)

  };


  const handleLogin = async (e) => {
     
     e.preventDefault();

      const {userID, email, password} = LoginInfo;

      if(!userID || !email || !password) {
        handleError("All Fields are Required");
        return
      }

      //Now Call API
      try{

        const url = "http://localhost:8080/user/login";

        const response = await fetch(url,{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(LoginInfo)
        });

        const result = await response.json();

        const {success, message , jwtToken, name, error} = result;

        if(success){
            handleSuccess(message);
            localStorage.setItem("token", jwtToken); // Ensure token is stored correctly
            localStorage.setItem("loggedInUser", name);

            setTimeout(() => {
              navigate("/home"); // Redirect to home page
            }, 1000);
        }
        else if(error){
          const details = error?.details[0].message;
          handleError(details);
        }
        else if(!success){
          handleError(message);
        }
        console.log(result)

      }catch(err){
          handleError(err);
      }

  }



  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="form-3d" onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="User_ID">User ID</label>
          <input
            type="text"
            name="userID"
            autoFocus
            placeholder="Enter User ID..."
            onChange={handleChange}
            value={LoginInfo.userID}
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email..."
            onChange={handleChange}
            value={LoginInfo.email}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            onChange={handleChange}
            value={LoginInfo.password}
          />
        </div>

        <button type="submit" className="button-3d">
          Submit
        </button>
        <span className="link-3d">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
