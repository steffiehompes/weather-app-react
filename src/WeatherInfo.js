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
      <div className="row">
        <div className="col-4">
          <div className="Description text-capitalize">
            {" "}
            {props.data.description}{" "}
          </div>
          <div className="Icon-today">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>

        <div className="col-4 Show-temperature">
          <WeatherConversion celsius={props.data.temperature} />
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
