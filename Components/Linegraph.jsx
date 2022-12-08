import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function App() {
  const canvasEl = useRef(null);

  const colors = {
    green: {
      default: "rgba(109, 178, 37, 1)",
      half: "rgba(109,178,37, 100%)",
      quarter: "rgba(109,178,37, 0%)",
      zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
      default: "rgba(255,255,255, 0.9)",
      quarter: "rgba(255,255,255, 0.9)"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.green.half);
    gradient.addColorStop(0.65, colors.green.quarter);
    gradient.addColorStop(1, colors.green.zero);

    // const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
    const weight = [50000, 40000, 30000, 35000, 43000, 16000, 25000, 39000, 22000, 13000];

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.green.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.green.default,
          pointRadius: 3
        }
      ]
    };
    const config = {
      type: "line",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="App">
      {/* <span>Chart.js Demo</span> */}
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
