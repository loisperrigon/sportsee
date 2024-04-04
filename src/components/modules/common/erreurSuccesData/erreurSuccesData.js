import React from "react";
import Loader from "../loader/loader";
import "./erreurSuccesData.scss";

export default function ErreurSuccesData({ loading, children }) {
  console.log(children);
  return loading ? (
    <div className="errorDataGraphique">
      <div>
        <Loader />
      </div>
    </div>
  ) : children.props.data ? (
    children
  ) : (
    <div className="errorDataGraphique">
      <div>
        <p>Erreur lors de la recuperation des donnes de {children.type.name}</p>
      </div>
    </div>
  );
}
