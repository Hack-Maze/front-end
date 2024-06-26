import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const LinearChart = ({ data, days }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: days,
    datasets: [
      {
        label: "Solved questions",
        data: data.map((item) => item.data),
        borderColor: "#5de848",
        backgroundColor: "transparent",
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
        data: chartData,
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
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
                color: "white",
                font: {
                  size: 10,
                },
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "white",
                font: {
                  size: 13,
                },
                min: 0,
                max: 50,
                stepSize: 10,
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
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default LinearChart;
