import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Metric {
  name: string;
  value: number;
  timestamp: string;
}

interface MetricsChartProps {
  metrics: Metric[];
}

const MetricsChart: React.FC<MetricsChartProps> = ({ metrics }) => {
  const data = {
    labels: metrics.map((metric) =>
      new Date(metric.timestamp).toLocaleString()
    ),
    datasets: [
      {
        label: "Metric Value",
        data: metrics.map((metric) => metric.value),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Metrics Over Time",
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default MetricsChart;
