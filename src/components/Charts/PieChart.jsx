import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Fundamental", "Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Mazes",
        data: [10, 20, 30, 40],
        backgroundColor: ["#336c4794", "#2e4868a1", " #6c652c8c", "#62282875"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    let chartInstance = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: "pie", // Change chart type to "pie"
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
              position: "right",
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} className="pb-4" />;
};

export default PieChart;
