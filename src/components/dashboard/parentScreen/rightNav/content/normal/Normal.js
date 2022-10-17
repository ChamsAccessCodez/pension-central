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
    name: "lodgementReferenceNo",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "lodgementId",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "lodgementReferenceNo",
    pv: 7008,
    amt: 2000,
  },
  {
    name: "employerName",
    pv: 6000,
    amt: 2181,
  },
  {
    name: "paymentMode",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "recordCount",
    dateResult: 3490,
    pv: 1100,
    amt: 2100,
  },
  {
    name: "amount",
    pv: 4000,
    amt: 2100,
  },
  {
    name: "scheduleStatus",
    pv: 2200,
    amt: 3000,
  },
  {
    name: "paymentStatus",
    pv: 1300,
    amt: 1819,
  },
  {
    name: "lodgementId",
    pv: 4900,
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
          width={600}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
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
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </WrapperOne>
      <WrapperTwo>
        <BarChart width={600} height={500} data={data}>
          {data.map((item) => (
            <XAxis dataKey="amt" />
          ))}
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
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
  gap: 40px;
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
