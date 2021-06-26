import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Place">
        {" "}
        {props.data.place}, {props.data.country}{" "}
      </div>
      <div className="row">
        <div className="col-4">
          <div className="Description text-capitalize">
            {" "}
            {props.data.description}{" "}
          </div>
          <div className="Icon-today">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
        </div>

        <div className="col-4 Show-temperature">
          <span className="Temp-today">
            {Math.round(props.data.temperature)}
          </span>
          <span className="Temp-C">°C</span>
        </div>
        <div className="col-4">
          <ul className="Weather-conditions">
            <li>
              <strong>Humidity</strong> <span> {props.data.humidity}</span>%
            </li>
            <li>
              <strong>Wind</strong> <span>{Math.round(props.data.wind)}</span>
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
