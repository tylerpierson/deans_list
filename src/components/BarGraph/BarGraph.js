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

export default function BarGraph({ user }) {
  // Check if user and user.teachers are properly initialized
  if (!user || !user.teachers) {
    return null; // or render a loading indicator, an error message, or handle this condition as needed
  }

  // Initialize an object to accumulate data for each grade level
  const gradeLevelData = user.teachers.reduce((acc, teacher) => {
    const { gradeLevel } = teacher;
    // Extract the numerical part of the grade level and convert it to a number
    const numericGrade = parseInt(gradeLevel.match(/\d+/)[0]);
    if (!acc[numericGrade]) {
      // Initialize the data object for the grade level if it doesn't exist
      acc[numericGrade] = {
        name: gradeLevel,
        Goal: 0, // You can set the initial value for Goal here
        Current: 0, // You can set the initial value for Current here
      };
    }
    // Accumulate the data for Goal and Current for the grade level
    // You can update the Goal and Current values here based on your requirements
    acc[numericGrade].Goal += 0; // Update Goal
    acc[numericGrade].Current += 0; // Update Current
    return acc;
  }, {});

  // Convert the accumulated grade level data object into an array
  const data = Object.values(gradeLevelData);

  // Sort the data array based on the numerical order of grade levels
  data.sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true}));

  // Calculate the width of the BarChart dynamically based on the number of grade levels
  const chartWidth = data.length * 100; // Adjust 50 to the desired width of each bar

  return (
    <BarChart
      width={chartWidth}
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
