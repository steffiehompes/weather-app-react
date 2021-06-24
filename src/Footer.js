import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      {" "}
      <small>
        <a
          href="https://github.com/steffiehompes/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="Footer-link"
        >
          Open source code
        </a>
        by Steffie Hompes
      </small>{" "}
    </div>
  );
}
