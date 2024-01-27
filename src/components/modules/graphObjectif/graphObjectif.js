import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 100, fill: "#8884d8" },
  { name: "B", value: 100, fill: "rgba(130, 202, 157, 0)" }, // Couleur transparente
];

const GraphObjectif = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
          startAngle={90}
          endAngle={0}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GraphObjectif;
