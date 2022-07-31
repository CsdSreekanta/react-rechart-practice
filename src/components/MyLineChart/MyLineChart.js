import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Supplier A",
      Price: 4000,
      Quantity: 2400,
      amt: 2400,
    },
    {
      name: "Supplier B",
      Price: 3000,
      Quantity: 1398,
      amt: 2210,
    },
    {
      name: "Supplier C",
      Price: 2000,
      Quantity: 9800,
      amt: 2290,
    },
    {
      name: "Supplier D",
      Price: 2780,
      Quantity: 3908,
      amt: 2000,
    },
    {
      name: "Supplier E",
      Price: 1890,
      Quantity: 4800,
      amt: 2181,
    },
    {
      name: "Supplier F",
      Price: 2390,
      Quantity: 3800,
      amt: 2500,
    },
    {
      name: "Supplier G",
      Price: 3490,
      Quantity: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="grid grid-cols-2">
      <div>
        <h1 className="text-2xl font-bold text-pink-500">This is the Line Chart</h1>
        <LineChart width={750} height={400} data={data}>
          <Line type="monotone" dataKey="Price" stroke="#8884d8" />
          <Line type="monotone" dataKey="Quantity" stroke="#FFC0CB" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </LineChart>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-blue-600">This is Pie Chart</h1>
        <PieChart width={750} height={400}>
          <Pie
            data={data}
            dataKey="Price"
            cx="50%"
            cy="50%"
            fill="#8884d8"
          label/>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </PieChart>
      </div>

      <h1>thsiiis</h1>
    </div>
  );
};

export default MyLineChart;
