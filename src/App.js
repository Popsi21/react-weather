import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
