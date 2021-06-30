import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        {" "}
        <div className="row">
          <div className="col">
            {" "}
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coords.latitude;
    let longitude = props.coords.longitude;
    let apiKey = "df07fbdcf2e20969c7249f7078cd1abc";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return " ";
  }
}
