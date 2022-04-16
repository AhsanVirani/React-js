import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";

const TOKEN = "c96mb6qad3icjtt5tthg";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setstockData] = useState([]);
  // c96mb6qad3icjtt5tthg
  useEffect(() => {
    let tempStocksData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "BABA",
      "UBER",
      "FB",
      "DIS",
      "SBUX",
    ];
    let promises = [];
    stocksList.map((stock) =>
      promises.push(
        getStockData(stock).then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      )
    );

    Promise.all(promises).then(() => {
      setstockData(tempStocksData);
    });
  }, []);

  const getStockData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows"></div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => {
              return (
                <StatsRow
                  key={stock.name}
                  name={stock.name}
                  openPrice={stock.o}
                  price={stock.c}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
