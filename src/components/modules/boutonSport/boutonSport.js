// boutonSport.js
import React from "react";

import "./boutonSport.scss";

const BoutonSport = ({ name, src }) => {
  return (
    <div className="boutonSport">
      <img src={src} alt={name} />
    </div>
  );
};

export default BoutonSport;
