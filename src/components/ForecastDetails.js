import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { date, humidity, wind, temperature } = props;

  return (
    <div className="forecast-details">
      <div className="forecast-details__date"> {date}</div>
      <div className="forecast-details__temperature-max">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-details__temperature-min">
        {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">{humidity}%</div>
      <div className="forecast-details__wind">{wind}mph</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastDetails;
