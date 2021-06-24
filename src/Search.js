import React, { useState } from "react";
import axios from "axios";

import "./Search.css";
import "./LastUpdated";
import LastUpdated from "./LastUpdated";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      place: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f27803b22003bacb0df7459dd6dc6bd9";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form action="" className="mb-2" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-5 mt-1">
          <input
            type="search"
            placeholder="Enter your city here"
            className="City-input"
            onChange={updateCity}
          />
        </div>
        <div className="col-2 me-4 mt-1">
          <input type="submit" value="Search" className="Search-button" />
        </div>
        <div className="col-2 mt-1">
          <button type="button" className="Location-button">
            <i className="fas fa-map-pin"></i>
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      {searchForm}
      <LastUpdated />
      <div className="Place">
        {" "}
        {weather.place}, {weather.country}{" "}
      </div>

      <div className="row">
        <div className="col-4">
          <div className="Description"> {weather.description} </div>
          <div className="Icon-today">
            <img src={weather.icon} alt="description" />
          </div>
        </div>

        <div className="col-4 Show-temperature">
          <span className="Temp-today">{Math.round(weather.temperature)}</span>
          <span className="Temp-C">°C</span>
        </div>
        <div className="col-4">
          <ul className="Weather-conditions">
            <li>
              <strong>Humidity</strong> <span> {weather.humidity}</span>%
            </li>
            <li>
              <strong>Wind</strong> <span>{Math.round(weather.wind)}</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
