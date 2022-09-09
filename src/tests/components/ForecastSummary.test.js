import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: "1525046400000",
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 11,
      max: 22,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// expect(getByText("1525046400000")).toBeInstanceOf(className="forecast-summary__date")
// expect(getByText("Clear")).toBeInstanceOf(className="forecast-summary__description")
// expect(getByText("11")).toBeInstanceOf(className="forecast-summary__temperature")
// expect(getByTestid(className="forecast-summary__icon"))
