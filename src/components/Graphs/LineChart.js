import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Semester 1',
    subjectA: 4000,
    subjectB: 2400,
    subjectC: 2400,
  },
  {
    name: 'Semester 2',
    subjectA: 3000,
    subjectB: 1398,
    subjectC: 2210,
  },
  {
    name: 'Semester 3',
    subjectA: 2000,
    subjectB: 9800,
    subjectC: 2290,
  },
  {
    name: 'Semester 4',
    subjectA: 2780,
    subjectB: 3908,
    subjectC: 2000,
  },
];

const Home = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='subjectA'
        stroke='#8884d8'
        activeDot={{ r: 8 }}
      />
      <Line type='monotone' dataKey='subjectB' stroke='#82ca9d' />
      <Line type='monotone' dataKey='subjectC' stroke='#ffc658' />
    </LineChart>
  );
};

export default Home;
