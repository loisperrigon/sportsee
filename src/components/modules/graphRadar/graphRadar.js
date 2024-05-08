import Lodash from "lodash";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Text, // Importez la composante Text depuis recharts
} from "recharts";
import "./graphRadar.scss";

// Fonction pour personnaliser le rendu de l'axe des angles polaires
function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 16}
      x={x + (x - cx) / 16}
    >
      {payload.value}
    </Text>
  );
}

const GraphRadar = ({ data }) => {
  const maxValue = data.data.reduce(
    (max, item) => Math.max(item.value, max),
    -Infinity
  );

  const transformedData = data.data.map((item, index) => ({
    subject: Lodash.capitalize(data.kind[index + 1]), // car les kind commence a 1 au lieu de 0
    A: item.value,
  }));

  return (
    <div className="radar">
      <ResponsiveContainer width="100%" minWidth={320}>
        <RadarChart outerRadius={90} data={transformedData} radius={150}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="none"
            tickFormatter={(value) => `${value}    `}
            tickLine={false} // Désactiver les lignes de ticks
            axisLine={false} // Désactiver la ligne d'axe
            tick={renderPolarAngleAxis}
          />
          <PolarRadiusAxis
            angle={30}
            radialLines={false}
            stroke="none"
            domain={[0, maxValue + 10]}
          />
          <Radar
            dataKey="A"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphRadar;
