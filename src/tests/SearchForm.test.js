import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("Search Form", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: "Stub description 1",
        icon: 800,
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: "Stub description 2",
        icon: 602,
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
    onSubmit: () => {},
  };
  const newValidProps = {
    forecasts: [
      {
        date: 3333333,
        description: "Stub description 3",
        icon: 800,
        temperature: {
          max: 21,
          min: 10,
        },
      },
      {
        date: 4444444,
        description: "Stub description 4",
        icon: 602,
        temperature: {
          max: 26,
          min: 18,
        },
      },
    ],
    onSubmit: () => {},
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct text when searching", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={newValidProps.searchText}
        setSearchText={newValidProps.setSearchText}
        onSubmit={newValidProps.handleCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
