import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherApplication">
          <Search defaultCity="Amsterdam" />
        </div>
        <footer>
          <a
            href="https://github.com/steffiehompes/weather-app-react"
            target="_blank"
            rel="noreferrer"
            className="Footer-link"
          >
            Open source code
          </a>{" "}
          by Steffie Hompes
        </footer>
      </div>
    </div>
  );
}
