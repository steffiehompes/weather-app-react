import React, { useState } from "react";
import axios from "axios";
import LastUpdated from "./LastUpdated";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Search.css";
import "./LastUpdated.css";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      place: response.data.name,
      country: response.data.sys.country,
      coords: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: response.data.dt * 1000,
    });
    setReady(true);
  }
  function search() {
    let apiKey = "f27803b22003bacb0df7459dd6dc6bd9";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Search">
        <form action="" className="mb-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8 mt-1">
              <input
                type="search"
                placeholder="Enter your city here"
                className="City-input"
                onChange={updateCity}
              />
            </div>
            <div className="col-2 mt-1">
              <input type="submit" value="Search" className="Search-button" />
            </div>
          </div>
        </form>

        <LastUpdated date={weather.date} />
        <WeatherInfo data={weather} />
        <Forecast coords={weather.coords} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
