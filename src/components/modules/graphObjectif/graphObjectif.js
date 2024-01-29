import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

import "./graphObjectif.scss";

const GraphObjectif = ({ objectif = 80 }) => {
  const data = [
    { name: "Objectif", value: objectif },
    { name: "", value: 100 - objectif, fill: "rgba(130, 202, 157, 0)" }, // Couleur transparente pour quel n'apparaisse pas sur le graph
  ];

  return (
    <div className="graphObjectif">
      <div className="graphObjectif__titre">
        <p class="graphObjectif__titre__pourcentage">{objectif}%</p>
        <p class="graphObjectif__titre__objectif">de votre objectif</p>
      </div>
      <p className="graphObjectif__score">Score</p>
      <ResponsiveContainer width="100%" minWidth={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={70}
            fill="#FF0000"
            startAngle={90}
            endAngle={-270}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphObjectif;
