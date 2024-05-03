import React from "react";
import Loader from "../loader/loader";
import "./erreurSuccesData.scss";

export default function ErreurSuccesData({ loading, children }) {
  // Vérifier si children existe et si children.props.data est défini
  const dataExists = children && children.props && children.props.data;

  return loading ? (
    <div className="errorDataGraphique">
      <div>
        <Loader />
      </div>
    </div>
  ) : dataExists ? ( // Utiliser la variable dataExists pour vérifier si les données existent
    children
  ) : (
    <div className="errorDataGraphique">
      <div>
        <p>
          Erreur lors de la récupération des données de {children.type.name}
        </p>
      </div>
    </div>
  );
}
