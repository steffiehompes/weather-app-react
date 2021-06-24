import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

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
        <Footer />
      </div>
    </div>
  );
}

export default App;
