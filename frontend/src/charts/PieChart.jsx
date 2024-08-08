import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Customer Conversion",
  pieHole: 0.4,
  is3D: false,
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "rgb(40, 34, 70)", "#f39f2a", "#188310"],
};

export default function PieChart() {
  const [chartData, setChartData] = useState(["Itemname", "Sales", "Price"]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items/price/60/130")
    .then(res => {
      // console.log(res.data);
      let data = res.data;
      data = data.map(item => [item.itemname.split(' ').slice(0,1).join(' '), item.quantity, item.price+' $']);
      data = [chartData, ...data];
      setChartData(data);
    })
    .catch(err => console.log(err));
  },[]);

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="40vh" 
      data={chartData}
      options={options}
    />
  );
}
