import React from "react";
import "./Forecast.css";
export default function Forecast(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let icon = "🌤";
  let tempMax = 25;
  let tempMin = 11;

  return (
    <div className="Forecast">
      {" "}
      <div className="Forecast-day">{days[0]} </div>
      <div className="Forecast-icon"> {icon} </div>
      <div className="Forecast-temperature">
        {tempMax}°C <span className="Temperature-divider">| </span>
        {tempMin}°C{" "}
      </div>
    </div>
  );
}
