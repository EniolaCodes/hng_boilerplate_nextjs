import { render, screen } from "@testing-library/react";

import { Chart } from "~/components/adminDashboard/Chart";
import { chartConfig, chartData } from "~/components/adminDashboard/chartData";

describe("chart Component", () => {
  it("renders the chart with the correct data", () => {
    expect.assertions(1);
    const totalAssertions = chartData.length + 5 + 1;
    expect.assertions(totalAssertions);

    render(<Chart chartData={chartData} chartConfig={chartConfig} />);

    for (const data of chartData) {
      expect(screen.getByText(data.month.slice(0, 3))).toBeInTheDocument();
    }

    for (const value of [0, 1500, 3000, 4500, 6000]) {
      expect(screen.getByText(`$${value}`)).toBeInTheDocument();
    }

    const bars = screen.getAllByRole("img", { hidden: true });
    expect(bars).toHaveLength(chartData.length);
  });

  it("renders the tooltip on bar hover", () => {
    expect.assertions(1);

    render(<Chart chartData={chartData} chartConfig={chartConfig} />);

    const firstBar = screen.getAllByRole("img", { hidden: true })[0];
    firstBar.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });
});
