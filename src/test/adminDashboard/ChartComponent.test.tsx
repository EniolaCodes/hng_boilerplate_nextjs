import { render, screen } from "@testing-library/react";

import { Chart } from "~/components/adminDashboard/Chart";
import { chartConfig, chartData } from "~/components/adminDashboard/chartData";

describe("chart Component", () => {
  it("renders the chart with the correct data", () => {
    expect.assertions(1);
    // Calculate total assertions: Adjust based on the number of actual assertions
    const totalAssertions = chartData.length + 5 + 1; // Length of chartData + Y axis labels + bars count
    expect.assertions(totalAssertions);

    render(<Chart chartData={chartData} chartConfig={chartConfig} />);

    // Check X axis labels
    for (const data of chartData) {
      expect(screen.getByText(data.month.slice(0, 3))).toBeInTheDocument();
    }

    // Check Y axis labels
    for (const value of [0, 1500, 3000, 4500, 6000]) {
      expect(screen.getByText(`$${value}`)).toBeInTheDocument();
    }

    // Check if the number of bars matches the data length
    const bars = screen.getAllByRole("img", { hidden: true });
    expect(bars).toHaveLength(chartData.length);
  });

  it("renders the tooltip on bar hover", () => {
    // Ensure expect.assertions is the first statement
    expect.assertions(1); // Expect one assertion for checking tooltip presence

    render(<Chart chartData={chartData} chartConfig={chartConfig} />);

    const firstBar = screen.getAllByRole("img", { hidden: true })[0];
    firstBar.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });
});
