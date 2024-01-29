// graphActiviteQuotidienne.js
import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./graphActiviteQuotidienne.scss";

const data = [
  {
    name: "1",
    uv: 40,
    pv: 24,
  },
  {
    name: "2",
    uv: 30,
    pv: 13,
  },
  {
    name: "3",
    uv: 20,
    pv: 98,
  },
  {
    name: "4",
    uv: 27,
    pv: 39,
  },
  {
    name: "5",
    uv: 18,
    pv: 48,
  },
  {
    name: "6",
    uv: 23,
    pv: 38,
  },
  {
    name: "7",
    uv: 34,
    pv: 43,
  },
  {
    name: "8",
    uv: 34,
    pv: 43,
  },
  {
    name: "9",
    uv: 34,
    pv: 43,
  },
  {
    name: "10",
    uv: 34,
    pv: 43,
  },
  {
    name: "11",
    uv: 34,
    pv: 43,
  },
];

const maxUvValue = Math.max(...data.map((item) => item.pv));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-activiteQuotidienne">
        <p className="label">{`${payload[0].value}Kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
};

const renderLegend = () => {
  return (
    <div className="custom-legend-activiteQuotidienne">
      <p className="titleActiviteQuotidiennePoint">Activite quotidienne</p>
      <div className="donneesActiviteQuotidiennePoint">
        <div>
          <div className="poidsActiviteQuotidiennePoint"></div>
          <p className="poidsActiviteQuotidienne">Poids (kg)</p>
        </div>
        <div>
          <div className="caloriesActiviteQuotidiennePoint"></div>
          <p className="caloriesActiviteQuotidienne">Calories brûlées (kCal)</p>
        </div>
      </div>
    </div>
  );
};

const renderBarChart = (
  <div className="graphActiviteQuotidienne">
    <ResponsiveContainer width={"100%"}>
      <BarChart height="400" data={data} maxBarSize={10} barGap={"-25%"}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis // Ajoutez le composant YAxis avec la propriété domain
          domain={["dataMin - 1", "dataMax + 1"]}
          orientation="right"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => (value > 0.95 * maxUvValue ? "" : value)}
          tickCount={5}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" align="left" content={renderLegend} />
        <Bar dataKey="pv" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar dataKey="uv" fill="#E60000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const GraphActiviteQuotidienne = () => {
  return renderBarChart;
};

export default GraphActiviteQuotidienne;
