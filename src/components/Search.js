import React from "react";

import "./Search.css";
class Search extends React.Component {
  render() {
    return (
      <header className="weather-header">
        <form className="weather-form" onSubmit={this.props.searchWeather}>
          <input
            type="text"
            id="weather-search"
            placeholder="Enter Country Name"
            name="country"
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
