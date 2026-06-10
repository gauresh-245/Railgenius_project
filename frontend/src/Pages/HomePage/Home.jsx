import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import BackgroundPoster from "./BackgroundPoster";
import Hoilday from "./Hoilday";
import Footer from "./Footer";

const Home = () => {

 

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const [isListening, setIsListening] = useState(false); // To toggle voice recognition
  const [hasSpokenIntroduction, setHasSpokenIntroduction] = useState(false); // To check if introduction has been spoken

  const videos = [
    "/images/FinalExpress.mp4",
    "/images/FinalMumbaiLocal.mp4",
    "/images/FinalMetro.mp4",
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (token && loggedInUser) {
      setIsLoggedIn(true);
      setUserName(loggedInUser);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  // Function to provide voice feedback
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  // Voice Recognition
  useEffect(() => {
    if (!isListening) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true; // Keep listening continuously
      recognition.lang = "en-US";

      recognition.onstart = () => {
        console.log("Voice recognition started. Listening...");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript
          .trim()
          .toLowerCase();
        console.log("Transcript received:", transcript);

        if (transcript.includes("book express ticket")) {
          console.log("Navigating to: /book-tickets/express?activeIndex=0");
          navigate("/book-tickets/express?activeIndex=0");
          speak("Navigating to book express ticket page.");
          recognition.stop();
          setIsListening(false);
        } else if (transcript.includes("book local ticket")) {
          console.log("Navigating to: /book-tickets/local");
          navigate("/book-tickets/local");
          speak("Navigating to book local ticket page.");
          recognition.stop();
          setIsListening(false);
        } else if (transcript.includes("book metro ticket")) {
          console.log("Navigating to: /book-tickets/metro");
          navigate("/book-tickets/metro");
          speak("Navigating to book metro ticket page.");
          recognition.stop();
          setIsListening(false);
        } else if (transcript === "open login form") {
          navigate("/login");
          speak("Opening login form.");
          recognition.stop();
          setIsListening(false);
        } else if (
          transcript === "open signin form" || // Check for variations
          transcript === "open sign up form" ||
          transcript === "open registration form"
        ) {
          navigate("/register");
          speak("Opening registration form.");
          recognition.stop();
          setIsListening(false);
        } else if (transcript === "stop the video") {
          const videoElement = document.querySelectorAll("video")[0];
          if (videoElement) {
            videoElement.pause();
            console.log("Video paused.");
            speak("The video has been paused.");
          }
          recognition.stop();
          setIsListening(false);
        } else if (transcript === "play the video") {
          const videoElement = document.querySelectorAll("video")[0];
          if (videoElement) {
            videoElement.play();
            console.log("Video playing.");
            speak("The video is now playing.");
          }
          recognition.stop();
          setIsListening(false);
        } 
        else if (transcript.includes("rail please open food section")) {
        navigate("/E_Catering");
        speak("Opening E-Catering.");
        recognition.stop();
        setIsListening(false);
      } else if (transcript.includes("rail please open weather updates")) {
        navigate("/Weather");
        speak("Opening Weather Updates.");
        recognition.stop();
        setIsListening(false);
      } else if (transcript.includes("rail please open contact us")) {
        navigate("/Contact_Us");
        speak("Opening Contact Us page.");
        recognition.stop();
        setIsListening(false);
      }
        
        
        else {
          console.log("Unrecognized command:", transcript);
          speak("Unrecognized command.");
        }
      };

      recognition.onerror = (event) => {
        console.error("Recognition error:", event.error);
        if (event.error === "not-allowed") {
          alert(
            "Microphone access is blocked. Please allow microphone access."
          );
        }
      };

      recognition.onend = () => {
        console.log("Voice recognition ended.");
        setIsListening(false);
      };

      recognition.start();

      return () => {
        recognition.stop();
      };
    } else {
      console.warn("SpeechRecognition not supported in this browser.");
    }
  }, [isListening, navigate]);

  return (
    <>
      {/* Navigation Bar Code */}
      <div className="container">
        <div className="Main_Navbar">
          <div className="IMG-Container">
            <img src="/images/TrainLogo.png" className="logo" alt="Logo" />
            <h2 className="Change">RailGenius</h2>
          </div>

          <div className="Navbar">
            <ul>
              <li className="Nav_link">
                <a className="active Nav_ATag" href="#">
                  <i className="fas fa-home hey"></i> Home
                </a>
              </li>
              <li className="Nav_link">
                <Link className="Nav_ATag" to="/E_Catering">
                  <i className="fas fa-utensils hey"></i> E-Catering
                </Link>
              </li>
              <li className="Nav_link">
                <Link className="Nav_ATag" to="/Weather">
                  <i className="fas fa-cloud-sun hey"></i> Weather Updates
                </Link>
              </li>
              <li className="Nav_link">
                <Link className="Nav_ATag" to="/Contact_Us">
                  <i className="fas fa-phone-alt hey"></i> Contact Us
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="Nav_link LoggedInSection">
                  <FontAwesomeIcon className="icon" icon={faUserCircle} />
                  <span className="UserName">{username}</span>
                  <button className="btnLogout Nav_ATag" onClick={handleLogOut}>
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="Nav_link">
                    <Link className="Nav_ATag" to="/login">
                      <i className="fas fa-sign-in-alt hey"></i> Login
                    </Link>
                  </li>
                  <li className="Nav_link">
                    <Link className="Nav_ATag" to="/register">
                      <i className="fas fa-user-plus hey"></i> Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="Buttons">
            {/* Voice Assistant Buttons */}
            {/* Introduction Button */}
            <button
              className="btnVoiceAssistantIntro"
              onClick={() => {
                // Only speak the introduction once when reloaded
                if (!hasSpokenIntroduction) {
                  speak(
                    "Hiii, my name is RailGenius. I was created by Gauresh Padave. How can I help you today?"
                  );
                  setHasSpokenIntroduction(true); // Mark introduction as spoken
                }
              }}
              title="Start Voice Introduction"
            >
              <FontAwesomeIcon icon={faMicrophone} />
              Intro
            </button>

            {/* Command Recognition Button */}
            <button
              className="btnVoiceAssistantCommands"
              onClick={() => {
                setIsListening(!isListening);
              }}
              title="Start Voice Commands"
            >
              <FontAwesomeIcon icon={faMicrophone} />
              {isListening ? " Listening..." : "Speak"}
            </button>
          </div>
        </div>
      </div>

      <BackgroundPoster />
      <Hoilday />
      <Footer />
    </>
  );
};

export default Home;
