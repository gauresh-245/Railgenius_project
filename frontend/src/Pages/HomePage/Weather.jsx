import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const APIkey = "533715e8ea3aca90093ee1e8ad3b1bda";
  const APIurl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  const getWeather = async () => {
    try {
      const response = await axios.get(`${APIurl}${city}&appid=${APIkey}`);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
     <div className="Main_Weather_Container">
  <div className="weather-container">
    {/* Container for logo and header */}
    <div className="header-container">
      <img
        src="images/weather-news.png"  
        alt="Weather Forecast Logo"
        className="weather-logo"
      />
      <h1 className="Weather_Header">Weather Forecast</h1>
    </div>

    <div className="Combine">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        className="Weather_text"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="weather_btn" onClick={getWeather}>
        Get Weather
      </button>
    </div>

    {error && <p className="error">{error}</p>}

    {weatherData && (
      <div className="weather-info">
        <h2 className="weather_header2">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
        <p className="weather_para">{weatherData.weather[0].description}</p>
        <p className="weather_para">
          Temperature: {weatherData.main.temp}°C
        </p>
        <p className="weather_para">
          Humidity: {weatherData.main.humidity}%
        </p>
        <p className="weather_para">
          Wind Speed: {weatherData.wind.speed} m/s
        </p>
      </div>
    )}
  </div>
</div>
  );
};

export default Weather;
