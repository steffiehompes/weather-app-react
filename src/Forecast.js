import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
export default function Forecast(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let tempMax = 25;
  let tempMin = 11;

  return (
    <div className="Forecast">
      {" "}
      <div className="row">
        <div className="col Forecast-day">{days[0]} </div>
        <div className="col Forecast-icon">
          {" "}
          <WeatherIcon code="01d" size={36} />{" "}
        </div>
        <div className="col Forecast-temperature">
          {tempMax}°C <span className="Temperature-divider">| </span>
          {tempMin}°C{" "}
        </div>
      </div>
    </div>
  );
}
