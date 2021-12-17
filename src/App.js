import React from "react";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import Weather from "./components/CurrentWeather";
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
import FakeWeather from "./data/FakeWeather.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      minTemp: FakeWeather.list[0].main.temp_min,
      maxTemp: FakeWeather.list[0].main.temp_max,
      humidity: FakeWeather.list[0].main.humidity,
      pressure: FakeWeather.list[0].main.pressure,
      temp12: FakeWeather.list[0].main.temp,
      temp15: FakeWeather.list[1].main.temp,
      temp18: FakeWeather.list[2].main.temp,
      temp21: FakeWeather.list[3].main.temp,
      temp3: FakeWeather.list[4].main.temp,
      temp6: FakeWeather.list[5].main.temp,
      temp9: FakeWeather.list[6].main.temp
    };
    console.log(FakeWeather);
  }
  render() {
    return (
      <div className="App">
        <Search />
        <Weather
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
        <div className="full-day-weather">
          <WeatherItem temp={this.state.temp3}/>
          <WeatherItem temp={this.state.temp6}/>
          <WeatherItem temp={this.state.temp9}/>
          <WeatherItem temp={this.state.temp12}/>
          <WeatherItem temp={this.state.temp15}/>
          <WeatherItem temp={this.state.temp18}/>
          <WeatherItem temp={this.state.temp21}/>
        </div>
      </div>
    );
  }
}

export default App;
