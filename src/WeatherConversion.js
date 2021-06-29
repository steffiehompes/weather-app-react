import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ShowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherConversion">
        <span className="Temp-today">{Math.round(props.celsius)}</span>
        <span className="Temp-C">
          °C <span className="ConversionDivider">|</span>
          <a
            href="/"
            className="FahrenheitTemperature"
            onClick={ShowFahrenheit}
          >
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitTemp = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="WeatherConversion">
        <span className="Temp-today">{fahrenheitTemp}</span>
        <span className="Temp-C">
          <a href="/" className="CelsiusTemperature" onClick={ShowCelsius}>
            °C
          </a>
          <span className="ConversionDivider">|</span>
          °F
        </span>
      </span>
    );
  }
}
