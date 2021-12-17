import React from "react";


// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";



import Weather from './components/CurrentWeather';
// import cloudy from "../img/weather-icons/cloudy.svg";
// import clear from "../img/weather-icons/clear.svg";
// import drizzle from "../img/weather-icons/drizzle.svg";
// import fog from "../img/weather-icons/fog.svg";
// import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
// import partlycloudy from "../img/weather-icons/partlycloudy.svg";
// import rain from "../img/weather-icons/rain.svg";
// import snow from "../img/weather-icons/snow.svg";
// import storm from "../img/weather-icons/storm.svg";
// import unknown from "../img/weather-icons/unknown.svg";
// import placeholder from "./img/weather-icons/shawerma.jpg";
import "./App.css";
import Search from "./components/Search";
// import FullDayWeather from "./components/FullDayWeather";
import WeatherItem from "./components/WeatherItem";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Search/>
        <Weather/>
        <div className="full-day-weather">
          <WeatherItem/>
          <WeatherItem/>
          <WeatherItem/>
          <WeatherItem/>
          <WeatherItem/>
          <WeatherItem/>
          <WeatherItem/>
        </div>
      </div>
    );
  }
  }
  

export default App;
