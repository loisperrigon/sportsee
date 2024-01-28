// Profil.js
import React from "react";
import Header from "../components/header/header.js";
import GraphActiviteQuotidienne from "../components/modules/graphActiviteQuotidienne/graphActiviteQuotidienne.js";
import InfoNutritionelle from "../components/modules/infoNutritionnelle/infoNutritionelle.js";
import SideBar from "../components/sideBar/sideBar";

import GraphDureesSessions from "../components/modules/graphDureesSessions/graphDureesSessions.js";
import GraphObjectif from "../components/modules/graphObjectif/graphObjectif.js";
import GraphRadar from "../components/modules/graphRadar/graphRadar.js";

import "./profil.scss";

import srcCalories from "../assets/calories.png";
import srcGlucide from "../assets/glucides.png";
import srcLipide from "../assets/lipides.png";
import srcProteine from "../assets/proteine.png";

const name = "Thomas";
const messageEncouragement = true;

const messageTrue = "Félicitation ! Vous avez explosé vos objectifs hier 👏";
const messageFalse = "Ooooh non ! Vous n'avez pas réussi vos objectifs hier ";

const Profil = () => {
  return (
    <>
      <Header />
      <div className="sideBarProfil">
        <SideBar />
        <div className="profil">
          <div className="profil__welcome">
            <div className="profil__welcome__name">
              <h1>Bonjour,</h1>
              <h1 className="profil__welcome__name--color">{name}</h1>
            </div>
            <h2 className="profil__welcome__message">
              {messageEncouragement ? messageTrue : messageFalse}
            </h2>
          </div>
          <div className="profil__informations">
            <div className="profil__informations__graphiques">
              <div className="profil__informations__graphiques__activiteQuotidienne">
                <GraphActiviteQuotidienne />
              </div>
              <div className="profil__informations__graphiques__others">
                <GraphDureesSessions />

                <GraphRadar />

                <GraphObjectif />
              </div>
            </div>
            <div className="profil__informations__infoNutritionelles">
              <InfoNutritionelle
                nameNutritionelle={"Calories"}
                src={srcCalories}
                quantite={0}
              />
              <InfoNutritionelle
                nameNutritionelle={"Proteine"}
                src={srcProteine}
                quantite={0}
              />
              <InfoNutritionelle
                nameNutritionelle={"Glucide"}
                src={srcGlucide}
                quantite={0}
              />
              <InfoNutritionelle
                nameNutritionelle={"Lipide"}
                src={srcLipide}
                quantite={0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
