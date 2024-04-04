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
  const [
    profilData,
    activityData,
    performanceData,
    averageSessionsData,
    error,
    messageError,
  ] = useData();

  // État pour gérer le chargement initial
  const [loading, setLoading] = useState({
    page: true,
    profil: true,
    activity: true,
    performance: true,
    averageSessions: true,
  });

  const [erreur404, setErreur404] = useState(false);

  useEffect(() => {
    const changes = {
      ...(profilData && { profil: false }),
      ...(activityData && { activity: false }),
      ...(averageSessionsData && { averageSessions: false }),
      ...(performanceData && { performance: false }),
    };

    // Vérifier si des changements doivent être appliqués
    if (Object.keys(changes).length > 0) {
      changes.page = false; // Mettre à jour la clé `page` si nécessaire
      // Appliquer tous les changements d'état en une seule mise à jour
      setLoading((prevLoading) => ({ ...prevLoading, ...changes }));
    }

    const isLoading =
      loading.profil === false &&
      loading.activity === false &&
      loading.performance === false &&
      loading.averageSessions === false;
    const isVide =
      profilData && activityData && averageSessionsData && performanceData;
    if (isLoading && !isVide) {
      setErreur404((prevLoading) => true);
    }
  }, [profilData, activityData, performanceData, averageSessionsData]);

  return (
    <>
      <Header />
      <div className="sideBarProfil">
        <SideBar />
        {loading.page ? ( // Affiche le loader si les données sont en cours de chargement
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
                <ErreurSuccesData loading={loading.activity}>
                  <GraphActiviteQuotidienne data={activityData.sessions} />
                </ErreurSuccesData>

                <div className="profil__informations__graphiques__others">
                  <ErreurSuccesData loading={loading.averageSessions}>
                    <GraphDureesSessions data={averageSessionsData} />
                  </ErreurSuccesData>
                  <ErreurSuccesData loading={loading.performance}>
                    <GraphRadar data={performanceData} />
                  </ErreurSuccesData>
                  <ErreurSuccesData loading={loading.profil}>
                    <GraphObjectif data={profilData.todayScore} />
                  </ErreurSuccesData>
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
