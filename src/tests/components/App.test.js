import { render } from "@testing-library/react";
import React from "react";
import App from "../../components/App";
import forecast from "../../components/ForecastSummaries";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <App
        location={forecast.location}
        forecasts={forecast.forecasts}
        forecast={forecast[0]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
