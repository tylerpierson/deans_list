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
    const matchResult = gradeLevel.match(/\d+/);
    const numericGrade = matchResult ? parseInt(matchResult[0]) : null;
    if (!acc[gradeLevel]) {
      // Initialize the data object for the grade level if it doesn't exist
      acc[gradeLevel] = {
        name: gradeLevel,
        Goal: 0, // You can set the initial value for Goal here
        Current: 0, // You can set the initial value for Current here
      };
    }
    // Accumulate the data for Goal and Current for the grade level
    // You can update the Goal and Current values here based on your requirements
    acc[gradeLevel].Goal += 0; // Update Goal
    acc[gradeLevel].Current += 0; // Update Current
    return acc;
  }, {});

  // Convert the accumulated grade level data object into an array
  let data = Object.values(gradeLevelData);

  // Check if there are teachers associated with "Pre-K" and "Kindergarten", and add them if necessary
  const preKExist = user.teachers.some(teacher => teacher.gradeLevel === "Pre-K");
  const kindergartenExist = user.teachers.some(teacher => teacher.gradeLevel === "K");
  
  if (preKExist && !data.find(entry => entry.name === "Pre-K")) {
    data.push({
      name: "Pre-K",
      Goal: 0, // You can set the initial value for Goal here
      Current: 0, // You can set the initial value for Current here
    });
  }

  if (kindergartenExist && !data.find(entry => entry.name === "K")) {
    data.push({
      name: "K",
      Goal: 0, // You can set the initial value for Goal here
      Current: 0, // You can set the initial value for Current here
    });
  }

  // Sort the data array based on the specified order
  data.sort((a, b) => {
    if (a.name === "Pre-K") {
      return -1; // "Pre-K" should come first
    } else if (b.name === "Pre-K") {
      return 1; // "Pre-K" should come first
    } else if (a.name === "K") {
      return -1; // "Kindergarten" should come after "Pre-K"
    } else if (b.name === "K") {
      return 1; // "Kindergarten" should come after "Pre-K"
    } else {
      // Sort numerically for other grade levels
      return parseInt(a.name) - parseInt(b.name);
    }
  });

  // Calculate the width of the BarChart dynamically based on the number of grade levels
  const baseWidth = 100; // Base width for 4 grade levels
  const minWidth = 150;
  const maxWidth = 550; // Maximum width for the chart
  const chartWidth = data.length === 1 ? Math.min(maxWidth, data.length * baseWidth + minWidth) : Math.min(maxWidth, data.length * baseWidth);

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
