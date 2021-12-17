import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: "",
  };

  render() {
    return (
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
    );
  }
}
export default Search;
