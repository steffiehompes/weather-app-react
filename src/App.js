import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherApplication">
          <Search />
          <div className="row Forecast">
            <div className="col-2">
              <Forecast />
            </div>
            <div className="col-2">
              <Forecast />
            </div>
            <div className="col-2">
              <Forecast />
            </div>
            <div className="col-2">
              <Forecast />
            </div>
            <div className="col-2">
              <Forecast />
            </div>
            <div className="col-2">
              <Forecast />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
