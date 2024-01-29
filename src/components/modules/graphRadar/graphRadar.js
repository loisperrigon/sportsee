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

const data = [
  {
    subject: "Intensité",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 65,
    fullMark: 150,
  },
];

// Fonction pour personnaliser le rendu de l'axe des angles polaires
function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 128}
      x={x + (x - cx) / 128}
    >
      {payload.value}
    </Text>
  );
}

const renderBarChart = (
  <div className="radar">
    <ResponsiveContainer width="100%" minWidth={300}>
      <RadarChart outerRadius={90} data={data} radius={150}>
        <PolarGrid radialLines={false} />
        {/* Utilisation de la fonction personnalisée pour le rendu de l'axe des angles polaires */}
        <PolarAngleAxis
          dataKey="subject"
          stroke="none"
          tickFormatter={(value) => `${value}    `}
          tickLine={false} // Désactiver les lignes de ticks
          axisLine={false} // Désactiver la ligne d'axe
          tick={renderPolarAngleAxis} // Utilisation de la fonction personnalisée
        />
        <PolarRadiusAxis angle={30} radialLines={false} stroke="none" />
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

const GraphActiviteQuotidienne = () => {
  return renderBarChart;
};

export default GraphActiviteQuotidienne;
