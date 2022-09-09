import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ location, forecast }) {
  const { city, country } = location;
  // const { date, temperature, description, icon } = forecast;
  return <LocationDetails city={city} country={country} />;
  // <ForecastSummary
  //   date={date}
  //   temperature={temperature}
  //   description={description}
  //   icon={icon} />;
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
export default App;
