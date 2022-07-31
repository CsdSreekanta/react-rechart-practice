import React from 'react';

import { Tooltip, Legend, PieChart,Pie } from 'recharts';


const Counseling = () => {
    
const data = [
  {
    name: 'Age Range(10-15) ',
    Male: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Age Range(10-15) ',
    Male: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Age Range(10-15) ',
    Male: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Age Range(10-15) ',
    Male: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Age Range(10-15) ',
    Male: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Age Range(10-15) ',
    Male: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Age Range(10-15) ',
    Male: 3490,
    pv: 4300,
    amt: 2100,
  },
];

    return (
        <div>
             <h1 className="text-2xl font-bold text-blue-600 text-left ml-60">Total Received Counseling</h1>
        <PieChart width={750} height={400}>
          <Pie
            data={data}
            dataKey="Male"
            cx="50%"
            cy="50%"
            fill="#8884d8"
          label/>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </PieChart>
        </div>
    );
};

export default Counseling;