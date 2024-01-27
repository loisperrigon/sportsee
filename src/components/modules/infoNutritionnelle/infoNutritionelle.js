// infoNutritionelle.js
import React from "react";

import "./infoNutritionelle.scss";

const infoNutritionelle = ({ nameNutritionelle, src, quantite }) => {
  return (
    <div className="infoNutritionelle">
      <img src={src} alt={nameNutritionelle} />
      <div>
        <h3 className="quantite">{quantite}</h3>
        <h4 className="nameNutritionelle">{nameNutritionelle}</h4>
      </div>
    </div>
  );
};

export default infoNutritionelle;
