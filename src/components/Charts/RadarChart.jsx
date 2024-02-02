import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const RadarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Thing1", "Thing2", "Thing3", "Thing4", "Thing5", "Thing6"],
    datasets: [
      {
        label: "",
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: "#6b0a03de",
        borderColor: "#E50E00",
        borderWidth: 2,
        pointStyle: false,
        spanGaps: null,
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
        type: "radar",
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            r: {
              ticks: {
                display: false,
              },
              pointLabels: {
                color: "white",
                padding: 9,
                font: {
                  size: "13px",
                },
              },
              grid: {
                width: 2,
                color: "#888",
              },
              angleLines: {
                color: "white",
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

  return <canvas ref={chartRef} />;
};

export default RadarChart;
