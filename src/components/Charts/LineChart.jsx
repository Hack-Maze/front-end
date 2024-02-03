import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const LinearChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "",
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointStyle: false,
        pointRadius: 10,
        pointHoverRadius: 15,
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
        type: "line",
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
          scales: {
            x: {
              border: {
                display: false,
              },
              grid: {
                beginAtZero: true,
                color: "white",
              },
              ticks: {
                color: "transparent",
              },
            },
            y: {
              grid: {
                display: false,
                beginAtZero: true,
              },
              ticks: {
                color: "white",
                font: {
                  size: 13,
                },
                min: 0,
                max: 100,
                stepSize: 20,
              },
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

  return <canvas ref={chartRef} style={{ height: "300px" }} />;
};

export default LinearChart;
