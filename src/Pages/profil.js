import React, { useEffect, useState } from "react";
import Header from "../components/header/header.js";
import Loader from "../components/modules/common/loader/loader.js"; // Importez le composant de loader
import SideBar from "../components/sideBar/sideBar";
import useData from "../utils/useData.js";

import GraphActiviteQuotidienne from "../components/modules/graphActiviteQuotidienne/graphActiviteQuotidienne.js";
import InfoNutritionelle from "../components/modules/infoNutritionnelle/infoNutritionelle.js";

import GraphDureesSessions from "../components/modules/graphDureesSessions/graphDureesSessions.js";
import GraphObjectif from "../components/modules/graphObjectif/graphObjectif.js";
import GraphRadar from "../components/modules/graphRadar/graphRadar.js";

import srcCalories from "../assets/calories.png";
import srcGlucide from "../assets/glucides.png";
import srcLipide from "../assets/lipides.png";
import srcProteine from "../assets/proteine.png";
import "./profil.scss";

const messageEncouragement = true;

const messageTrue = "Félicitation ! Vous avez explosé vos objectifs hier 👏";
const messageFalse = "Ooooh non ! Vous n'avez pas réussi vos objectifs hier ";

const Profil = () => {
  const [
    profilData,
    activityData,
    performanceData,
    averageSessionsData,
    error,
    messageError,
  ] = useData();

  const [loading, setLoading] = useState(true); // État pour gérer le chargement initial

  useEffect(() => {
    if (profilData && activityData && performanceData && averageSessionsData) {
      console.log(profilData);
      setLoading(false); // Met à jour l'état de chargement une fois que TOUTE les données sont chargées
    }
  }, [profilData]); // Utilisez profilData comme dépendance pour l'effet

  return (
    <>
      <Header />
      <div className="sideBarProfil">
        <SideBar />
        {loading ? ( // Affiche le loader si les données sont en cours de chargement
          <Loader />
        ) : (
          <div className="profil">
            <div className="profil__welcome">
              <div className="profil__welcome__name">
                <h1>Bonjour,</h1>
                <h1 className="profil__welcome__name--color">
                  {profilData.firstName}
                </h1>
              </div>
              <h2 className="profil__welcome__message">
                {messageEncouragement ? messageTrue : messageFalse}
              </h2>
            </div>
            <div className="profil__informations">
              <div className="profil__informations__graphiques">
                {activityData.sessions && (
                  <GraphActiviteQuotidienne data={activityData.sessions} />
                )}

                <div className="profil__informations__graphiques__others">
                  {averageSessionsData && (
                    <GraphDureesSessions data={averageSessionsData} />
                  )}
                  {performanceData && <GraphRadar data={performanceData} />}
                  {profilData.todayScore && (
                    <GraphObjectif data={profilData.todayScore} />
                  )}
                </div>
              </div>
              <div className="profil__informations__infoNutritionelles">
                <InfoNutritionelle
                  nameNutritionelle={"Calories"}
                  src={srcCalories}
                  quantite={profilData.calorieCount}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Proteine"}
                  src={srcProteine}
                  quantite={profilData.proteinCount}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Glucide"}
                  src={srcGlucide}
                  quantite={profilData.carbohydrateCount}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Lipide"}
                  src={srcLipide}
                  quantite={profilData.lipidCount}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profil;
