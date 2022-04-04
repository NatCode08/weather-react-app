import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form className="searchCity">
        <input type="search" placeholder="type a city" />
        <input type="submit" value="search" />
      </form>
      <h1>Scattered Clouds in Madrid</h1>
      <h3>Monday, April 4th 2022</h3>
      <p> 10 ºC | ºF </p>
      <div className="weatherDescription">
        Humidity 53%
        <br />
        Wind 3 km/h
      </div>
      <br />
      <br />
      <a
        href="https://github.com/NatCode08/weather-react-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      <span> by Natalia Ortiz</span>
    </div>
  );
}
