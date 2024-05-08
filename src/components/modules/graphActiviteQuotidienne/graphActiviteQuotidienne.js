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

const formatedX = (data) => {
  return data.map((item, index) => ({
    ...item,
    index: index + 1,
  }));
};

const GraphActiviteQuotidienne = ({ data }) => {
  // Permet de rajouter les ordoonne commencant a 1
  const formattedSessions = formatedX(data);

  return (
    <div className="graphActiviteQuotidienne">
      <ResponsiveContainer width={"100%"} height={400}>
        <BarChart
          height="400"
          data={formattedSessions}
          maxBarSize={15}
          barGap={"-25%"}
        >
          <XAxis dataKey="index" axisLine={false} tickLine={false} />
          <YAxis
            yAxisId="kilogram"
            domain={["dataMin - 1", "dataMax + 1"]}
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickCount={5}
          />
          <YAxis
            yAxisId="calories"
            domain={["dataMin - 10", "dataMax + 10"]}
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickFormatter={null}
            tickCount={6}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="left" content={renderLegend} />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            yAxisId="kilogram"
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            yAxisId="calories"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphActiviteQuotidienne;
