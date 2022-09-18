import { render } from "@testing-library/react";
import React from "react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <App
        location={forecast.location}
        forecasts={forecast.forecasts}
        forecast={forecast.forecasts[0]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
