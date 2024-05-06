import styles from "./BarGraph.module.scss";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "KG",
    Goal: 20,
    Current: 80,
    amt: 2400,
  },
  {
    name: "1st",
    Goal: 40,
    Current: 60,
    amt: 2210,
  },
  {
    name: "2nd",
    Goal: 25,
    Current: 75,
    amt: 2290,
  },
  {
    name: "3rd",
    Goal: 18,
    Current: 82,
    amt: 2000,
  },
  {
    name: "4th",
    Goal: 8,
    Current: 92,
    amt: 2181,
  },
  {
    name: "5th",
    Goal: 27,
    Current: 73,
    amt: 2500,
  },
  {
    name: "6th",
    Goal: 0,
    Current: 0,
    amt: 2100,
  },
  {
    name: "7th",
    Goal: 0,
    Current: 0,
    amt: 2100,
  },
  {
    name: "8th",
    Goal: 0,
    Current: 0,
    amt: 2100,
  },
  {
    name: "9th",
    Goal: 0,
    Current: 0,
    amt: 2100,
  },
  {
    name: "10th",
    Goal: 0,
    Current: 0,
    amt: 2100,
  },
  {
    name: "11th",
    Goal: 0,
    Current: 0,
    amt: 2100,
  },
  {
    name: "12th",
    Goal: 0,
    Current: 0,
    amt: 2100,
  },
];

export default function BarGraph({ user }) {
  return (
    <BarChart
      width={550}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Current" stackId="a" fill="var(--text-dark)" />
      <Bar dataKey="Goal" stackId="a" fill="var(--text-light)" />
    </BarChart>
  );
}
