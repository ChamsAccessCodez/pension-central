import React, { PureComponent, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import decoded from "jwt-decode";
import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// sample data
const data = [
  {
    name: "paymentDate",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "lodgementReferenceNo",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "lodgementId",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "lodgementReferenceNo",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "employerName",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "paymentMode",
    uv: 1010,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "recordCount",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "amount",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "scheduleStatus",
    uv: 800,
    pv: 4300,
    amt: 3000,
  },
  {
    name: "paymentStatus",
    uv: 1110,
    pv: 4300,
    amt: 1819,
  },
  {
    name: "lodgementId",
    uv: 2090,
    pv: 4300,
    amt: 2829,
  },
];

const COLORS = ["#D0F2FE", "#FFF8CE", "#FFE8DA", "#d0e9fd"];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Normal = () => {
  return (
    <NormalWrapper>
      <WrapperOne>
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
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
          <Line
            type="monotone"
            dataKey="amt"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </WrapperOne>
      <WrapperTwo>
        <BarChart width={600} height={500} data={data}>
          {data.map((item) => (
            <XAxis dataKey="name" />
          ))}
          <YAxis />
          <Legend />
          <Bar
            dataKey="amt"
            fill={COLORS[Math.floor(Math.random() * COLORS.length)]}
          />
        </BarChart>
      </WrapperTwo>
    </NormalWrapper>
  );
};

export default Normal;

const NormalWrapper = styled.div`
  // background: brown;
  width: 90%;
  height: 60vh;
  display: flex;
`;

const WrapperOne = styled.div`
  // background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const WrapperTwo = styled.div`
  // background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
