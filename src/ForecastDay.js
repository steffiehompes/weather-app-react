import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="row ForecastDay">
      <div className="col Forecast-day"> {day()} </div>
      <div className="col Forecast-icon">
        {" "}
        <WeatherIcon code={props.data.weather[0].icon} size={36} />{" "}
      </div>
      <div className="col Forecast-temperature">
        <span className="Forecast-temperature-max"> {maxTemperature()}</span>
        <span className="Temperature-divider">|</span>
        <span className="Forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
