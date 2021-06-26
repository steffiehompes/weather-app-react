import React, { useState } from "react";
import axios from "axios";
import LastUpdated from "./LastUpdated";
import WeatherInfo from "./WeatherInfo";

import "./Search.css";
import "./LastUpdated.css";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setReady(true);
    setWeather({
      place: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: response.data.dt * 1000,
    });
  }

  if (ready) {
    return (
      <div>
        <form action="" className="mb-2">
          <div className="row">
            <div className="col-md-5 mt-1">
              <input
                type="search"
                placeholder="Enter your city here"
                className="City-input"
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

        <LastUpdated date={weather.date} />
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    let apiKey = "f27803b22003bacb0df7459dd6dc6bd9";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
