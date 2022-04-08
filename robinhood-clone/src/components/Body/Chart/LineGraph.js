import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { format } from "date-fns";
import "./LineGraph.css";
Chart.register(...registerables);

function LineGraph() {
  const [yData, setyData] = useState([]);
  const [xData, setxData] = useState([]);

  const createMockData = () => {
    let xAxes = [];
    let yAxes = [];
    let value = 50;
    for (var i = 0; i < 366; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round(Math.random() < 0.5 ? 1 : 0) * Math.random() * 10;
      var formattedDate = format(date, "MM/dd/yy");
      xAxes.push(formattedDate);
      yAxes.push(value);
    }
    setxData(xAxes);
    setyData(yAxes);
  };

  useEffect(() => {
    createMockData();
  }, []);

  return (
    <div className="linegraph">
      <Line
        data={{
          labels: xData,
          datasets: [
            {
              type: "line",
              data: yData,
              backgroundColor: "black",
              borderColor: "#5AC53B",
              borderWidth: 2,
              pointBorderColor: "rgba(0, 0, 0, 0)",
              pointBackgroundColor: "rgba(0, 0, 0, 0)",
              pointHoverBackgroundColor: "#5AC53B",
              pointHoverBorderColor: "#000000",
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
        }}
      />
    </div>
  );
}

export default LineGraph;
