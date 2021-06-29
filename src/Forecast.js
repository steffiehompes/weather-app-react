import React from "react";
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
  let icon = <i class="fas fa-cloud"></i>;
  let tempMax = 25;
  let tempMin = 11;

  return (
    <div className="Forecast">
      {" "}
      <div className="row">
        <div className="col Forecast-day">{days[0]} </div>
        <div className="col Forecast-icon"> {icon} </div>
        <div className="col Forecast-temperature">
          {tempMax}°C <span className="Temperature-divider">| </span>
          {tempMin}°C{" "}
        </div>
      </div>
    </div>
  );
}
