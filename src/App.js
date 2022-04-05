import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />

      <footer>
        This project was coded by Natalia Ortiz and is
        <a
          href="https://github.com/NatCode08/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>
      </footer>
    </div>
  );
}

export default App;
