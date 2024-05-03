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
import ErreurSuccesData from "../components/modules/common/erreurSuccesData/erreurSuccesData.js";
import "./profil.scss";

const messageEncouragement = true;

const messageTrue = "Félicitation ! Vous avez explosé vos objectifs hier 👏";
const messageFalse = "Ooooh non ! Vous n'avez pas réussi vos objectifs hier ";

const Profil = () => {
  const [profilData, activityData, performanceData, averageSessionsData] =
    useData();

  const [erreur404, setErreur404] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(
      profilData.loading ||
        activityData.loading ||
        performanceData.loading ||
        averageSessionsData.loading
    );
  }, [
    profilData.loading,
    activityData.loading,
    performanceData.loading,
    averageSessionsData.loading,
  ]);

  useEffect(() => {
    const isDataPresent = [
      profilData,
      activityData,
      performanceData,
      averageSessionsData,
    ].some((data) => data.data && Object.keys(data.data).length > 0); //permet de de verifier si au moins un des objet a des donnees

    setErreur404(!isLoading && !isDataPresent);
  }, [
    isLoading,
    profilData,
    activityData,
    performanceData,
    averageSessionsData,
  ]);

  return (
    <>
      <Header />
      <div className="sideBarProfil">
        <SideBar />
        {isLoading ? ( // Affiche le loader si les données sont en cours de chargement
          <Loader />
        ) : erreur404 ? (
          <div className="erreur404">
            <p>ERREUR 404... </p>
          </div>
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
                <ErreurSuccesData loading={activityData.loading}>
                  <GraphActiviteQuotidienne
                    data={activityData.data?.sessions}
                  />
                </ErreurSuccesData>

                <div className="profil__informations__graphiques__others">
                  <ErreurSuccesData loading={averageSessionsData.loading}>
                    <GraphDureesSessions data={averageSessionsData.data} />
                  </ErreurSuccesData>
                  <ErreurSuccesData loading={performanceData.loading}>
                    <GraphRadar data={performanceData.data} />
                  </ErreurSuccesData>
                  <ErreurSuccesData loading={profilData.loading}>
                    <GraphObjectif data={profilData.data?.todayScore} />
                  </ErreurSuccesData>
                </div>
              </div>
              <div className="profil__informations__infoNutritionelles">
                <InfoNutritionelle
                  nameNutritionelle={"Calories"}
                  src={srcCalories}
                  quantite={profilData.data?.calorieCount}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Proteine"}
                  src={srcProteine}
                  quantite={profilData.data?.proteinCount}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Glucide"}
                  src={srcGlucide}
                  quantite={profilData.data?.carbohydrateCount}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Lipide"}
                  src={srcLipide}
                  quantite={profilData.data?.lipidCount}
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
