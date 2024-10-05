import React from "react";
import { render } from "@testing-library/react";
import MetricsChart from "../components/MetricsChart";

describe("MetricsChart", () => {
  const mockMetrics = [
    { name: "Test Metric", value: 10, timestamp: "2023-05-01T12:00:00Z" },
    { name: "Test Metric", value: 15, timestamp: "2023-05-02T12:00:00Z" },
  ];

  it("renders without crashing", () => {
    render(<MetricsChart metrics={mockMetrics} />);
  });

  it("displays the correct title", () => {
    const { getByText } = render(<MetricsChart metrics={mockMetrics} />);
    expect(getByText("Metrics Over Time")).toBeInTheDocument();
  });
});
