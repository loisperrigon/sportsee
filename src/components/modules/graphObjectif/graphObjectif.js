import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

import "./graphObjectif.scss";

const GraphObjectif = ({ data }) => {
  data = data * 100; //Pour mettre le chiffre en %

  const dataGraphique = [
    { name: "Objectif", value: data },
    { name: "", value: 100 - data, fill: "rgba(130, 202, 157, 0)" }, // Couleur transparente pour quel n'apparaisse pas sur le graph
  ];

  return (
    <div className="graphObjectif">
      <div className="graphObjectif__titre">
        <p className="graphObjectif__titre__pourcentage">{data}%</p>
        <p className="graphObjectif__titre__objectif">de votre objectif</p>
      </div>
      <p className="graphObjectif__score">Score</p>
      <ResponsiveContainer width="100%" minWidth={300} height={280}>
        <PieChart>
          <Pie
            data={dataGraphique}
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
