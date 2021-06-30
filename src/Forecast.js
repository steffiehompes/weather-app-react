import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {}
  let latitude = props.coords.latitude;
  let longitude = props.coords.longitude;
  let apiKey = "df07fbdcf2e20969c7249f7078cd1abc";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      {" "}
      <div className="row">
        <div className="col Forecast-day">Sunday </div>
        <div className="col Forecast-icon">
          {" "}
          <WeatherIcon code="01d" size={36} />{" "}
        </div>
        <div className="col Forecast-temperature">
          12°C <span className="Temperature-divider">| </span>
          8°C{" "}
        </div>
      </div>
    </div>
  );
}
