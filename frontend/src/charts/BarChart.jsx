import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

export const options = {
  title: "Price v/s Expenses",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Price (in $)",
    minValue: 0,
  },
  colors: ["rgb(53, 138, 148)", "rgb(40, 34, 70)"],
  vAxis: {
    title: "Product name",
  },
};

export default function BarChart() {
  const [chartData, setChartData] = useState(["Itemname", "Expenses", "Prices"]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items/price/50/90")
    .then(res => {
      // console.log(res.data);
      let data = res.data;
      data = data.map(item => [item.itemname.split(' ').slice(0,2).join(' '), item.quantity, item.price]);
      data = [chartData, ...data];
      setChartData(data);
    })
    .catch(err => console.log(err));
  },[]);

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="40vh" 
      data={chartData}
      options={options}
    />
  );
}
