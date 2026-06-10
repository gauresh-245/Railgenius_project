import React, { useState, useRef, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./BackgroundPoster.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BackgroundPoster = () => {
  //Now uselocation is used to provide the current location of background Poster or Object which contains information about the URL includeing quary paraneter for ex. (activeIndex=1)
  const location = useLocation();

  const navigate = useNavigate();

  // Extract activeIndex from URL parameters or default to 0
  const urlParams = new URLSearchParams(location.search);
  const initialIndex = parseInt(urlParams.get("activeIndex")) || 0;

  // State to track the active video index
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Array of video sources
  const videos = [
    "/images/FinalExpress.mp4",
    "/images/FinalMumbaiLocal.mp4",
    "/images/FinalMetro.mp4",
  ];

  // Array of text content for each video
  const content = [
    {
           link: "/book-tickets/express",
    },
    {
      link: "/book-tickets/local",
    },
    {
      link: "/book-tickets/metro",
    },
  ];

  // Refs for video elements
  const videoRefs = useRef([]);

  // Function to change the active video [it updates the activeIndex to the given index]
  const sliderNav = (index) => {
    setActiveIndex(index);
    navigate(`?activeIndex=${index}`); // Update URL parameter
  };

  //Why we used useEffect Function ? => because used here to control video playback based on activeIndex.
  //Whenever activeIndex change it triggers useEffect hook
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play(); // Play the active video
        } else {
          video.pause(); // Pause other videos
        }
      }
    });
  }, [activeIndex]); // Run effect when activeIndex changes

  return (
    <div>
      <section className="home">
        {/*Each video element has a unique key based on its index*/}
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)} // Assign each video to the ref
            className={`video-slide ${activeIndex === index ? "active" : ""}`} //to add the "active" class only to the currently active video.
            src={video}
            muted
            loop
          />
        ))}
        <div className="content">
          
          <div className="description">
            {/* Dynamic description */}
            <Link
              to={`${content[activeIndex].link}?activeIndex=${activeIndex}`}
            >
              Book Tickets
            </Link>
          </div>
        </div>

        <div className="media-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="slider-navigation">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`nav-btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => sliderNav(index)} // Set active video on button click
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BackgroundPoster;
