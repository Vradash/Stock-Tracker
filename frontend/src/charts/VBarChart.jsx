import React, { useState,useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
};

export default function VBarChart() {
  const [chartData, setChartData] = useState(["Itemname", "Sales", "Price"]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items/price/110/160")
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
      chartType="Bar"
      width="100%"
      height="350px"
      data={chartData}
      options={options}
    />
  );
}
