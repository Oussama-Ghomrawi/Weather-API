import React from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
// import cloudy from "./img/weather-icons/cloudy.svg";
// import clear from "./img/weather-icons/clear.svg";
// import drizzle from "./img/weather-icons/drizzle.svg";
// import fog from "./img/weather-icons/fog.svg";
// import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
// import partlycloudy from "./img/weather-icons/partlycloudy.svg";
// import rain from "./img/weather-icons/rain.svg";
// import snow from "./img/weather-icons/snow.svg";
// import storm from "./img/weather-icons/storm.svg";
// import unknown from "./img/weather-icons/unknown.svg";

import placeholder from "./img/weather-icons/shawerma.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="weather-header">
        <form className="weather-form" method="post">
          <input
            type="text"
            id="weather-search"
            placeholder="Enter City Name"
            name="weather-search"
          />
          <button className="find-weather" name="find-weather">
            find weather
          </button>
        </form>
      </header>
      <body className="weather-content">
        <div className="real-weather">
          <img className="live-weather" src={placeholder} />
          <p className="weather-status"> overcast clouds</p>
          <span className="temperature">
            {" "}
            <b>Temperature</b>10&deg; to 11&deg;c
          </span>
          <div>
            <span className="humidity">
              {" "}
              <b>Humidity </b>78%
            </span>
            <span className="pressure">
              {" "}
              <b>Pressure </b>1008.48
            </span>
          </div>
        </div>
        <div className="full-day-weather">
          <div className="weather-3">
            <span>03:00</span>
            <img className="image-3" src={placeholder} />
            <span>8°C</span>
          </div>
          <div className="weather-6">
            <span>06:00</span>
            <img className="image-6" src={placeholder} />
            <span>9°C</span>
          </div>
          <div className="weather-9">
            <span>09:00</span>
            <img className="image-9" src={placeholder} />
            <span>14°C</span>
          </div>
          <div className="weather-12">
            <span>12:00</span>
            <img className="image-12" src={placeholder} />
            <span>17°C</span>
          </div>
          <div className="weather-15">
            <span>15:00</span>
            <img className="image-15" src={placeholder} />
            <span>18°C</span>
          </div>
          <div className="weather-18">
            <span>18:00</span>
            <img className="image-18" src={placeholder} />
            <span>16°C</span>
          </div>
          <div className="weather-21">
            <span>21:00</span>
            <img className="image-21" src={placeholder} />
            <span>13°C</span>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
