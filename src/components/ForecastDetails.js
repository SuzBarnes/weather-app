import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ date, humidity, wind, temperature }) {
  const formattedDate = new Date(date).toDateString();
  //   console.log(temperature.min, "<== min temperature");
  //   console.log(formattedDate);
  return (
    <div className="forecast-details">
      <div className="forecast-details__date"> {formattedDate}</div>
      <div className="forecast-details__temperaturemax">
        Highs of {temperature.max}&deg;C
      </div>
      <div
        className="forecast-details__temperaturemin"
        data-testid="forecast-mintemperature"
      >
        Lows of {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__windspeed">
        Wind Speed: {wind.speed}mph
      </div>
      <div className="forecast-details__winddirection">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastDetails;
