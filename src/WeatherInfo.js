import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Place">
        {" "}
        {props.data.place}, {props.data.country}{" "}
      </div>
      <div className="Description text-capitalize text-center">
        {" "}
        {props.data.description}{" "}
      </div>
      <div className="Icon-today">
        <WeatherIcon code={props.data.icon} />
      </div>

      <div className="row">
        <div className="col-7 Show-temperature">
          <i className="ThermoIcon fas fa-thermometer-half"></i>
          <WeatherConversion celsius={props.data.temperature} />
        </div>
        <div className="col-5">
          <ul className="Weather-conditions">
            <li>
              <i className="ConditionsIcon fas fa-tint"></i>{" "}
              <span> {props.data.humidity}</span>%
            </li>
            <li>
              <i className="ConditionsIcon fas fa-wind"></i>{" "}
              <span>{Math.round(props.data.wind)}</span>
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
