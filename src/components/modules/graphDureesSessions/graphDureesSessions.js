// graphActiviteQuotidienne.js
import React from "react";
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import "./graphDureesSessions.scss";

const data = [
  {
    name: "",
    uv: 3000,
    pv: 4300,
    amt: 2400,
  },
  {
    name: "L",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "M",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "M",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "J",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "V",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomCursor = (props) => {
  const { points, width, height, stroke } = props;
  const { x, y } = points[0];
  const { x1, y1 } = points[1];
  console.log(props);
  return (
    <Rectangle
      fill="black"
      stroke="black"
      opacity="0.2"
      x={x}
      y={y - 10}
      width={width}
      height={height}
    />
  );
};

// ...

const renderBarChart = (
  <div className="dureeSessions">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: -40 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF" }}
          dy={-40}
        />

        <Tooltip cursor={<CustomCursor />} />

        <Line
          type="monotone"
          dataKey="pv"
          stroke="#FFFFFF"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const GraphActiviteQuotidienne = () => {
  return renderBarChart;
};

export default GraphActiviteQuotidienne;
