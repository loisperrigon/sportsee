// graphActiviteQuotidienne.js
import React from "react";
import {
  Legend,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./graphDureesSessions.scss";

const CustomCursor = (props) => {
  const { points, width, height, stroke } = props;
  const { x, y } = points[0];
  const { x1, y1 } = points[1];

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

const renderTooltipContent = (data) => {
  if (data.payload.length > 0 && data.payload[0].payload.day !== "") {
    const value = data.payload[0].value;

    // Formater et afficher la valeur
    return (
      <div className="custom-tooltip">
        <p>{`${value} min`}</p>
      </div>
    );
  }

  return <></>;
};
const renderLegend = () => {
  return (
    <div className="custom-legend">
      <p>Duree moyenne des sessions</p>
    </div>
  );
};

const GraphActiviteQuotidienne = ({ data }) => {
  const formatedDataGraph = [
    {
      day: "",
      sessionLength: data.sessions[data.sessions.length - 1].sessionLength,
    },
    ...data.sessions,
    {
      day: "",
      sessionLength: data.sessions[data.sessions.length - 1].sessionLength,
    },
  ];

  const maxSession = data.sessions.reduce(
    (max, item) => Math.max(item.sessionLength, max),
    -Infinity
  );

  return (
    <div className="dureeSessions">
      <ResponsiveContainer width="100%" minWidth={300} height={280}>
        <LineChart
          data={formatedDataGraph}
          height="400"
          margin={{ top: 0, right: 0, left: 0, bottom: -40 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF" }}
            dy={-40}
          />
          <YAxis // Ajoutez le composant YAxis avec la propriété domain
            domain={[-25, maxSession + 25]}
            hide={true} // Remplacez 15000 par la valeur maximale souhaitée du graph
          />

          <Tooltip cursor={<CustomCursor />} content={renderTooltipContent} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={3}
            dot={false}
          />
          <Legend verticalAlign="top" align="left" content={renderLegend} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphActiviteQuotidienne;
