import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
