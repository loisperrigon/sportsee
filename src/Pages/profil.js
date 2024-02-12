// Profil.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Api from "../services/fakeApi.js";
//import Api from "../services/api.js";
import {
  formatActivityData,
  formatAverageSessionsData,
  formatPerformanceData,
  formatProfilData,
} from "../utils/dataFormatting.js";

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

const messageEncouragement = true;

const messageTrue = "Félicitation ! Vous avez explosé vos objectifs hier 👏";
const messageFalse = "Ooooh non ! Vous n'avez pas réussi vos objectifs hier ";

const Profil = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponseProfil = await Api.getProfilData(`users/${id}`);
        const reponseActivity = await Api.getProfilData(`users/${id}/activity`);
        const reponsePerformance = await Api.getProfilData(
          `users/${id}/performance`
        );
        const reponseAverageSessions = await Api.getProfilData(
          `users/${id}/average-sessions`
        );

        setData({
          profil: formatProfilData(reponseProfil),
          activity: formatActivityData(reponseActivity),
          performance: formatPerformanceData(reponsePerformance),
          averageSessions: formatAverageSessionsData(reponseAverageSessions),
        });
      } catch (error) {
        // Gérer les erreurs
        console.error("Error fetching data:", error);
      }
    };

    // Appeler la fonction fetchData
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <div className="sideBarProfil">
        <SideBar />
        {data && (
          <div className="profil">
            <div className="profil__welcome">
              <div className="profil__welcome__name">
                <h1>Bonjour,</h1>
                <h1 className="profil__welcome__name--color">
                  {data.profil.firstName || ""}
                </h1>
              </div>
              <h2 className="profil__welcome__message">
                {messageEncouragement ? messageTrue : messageFalse}
              </h2>
            </div>
            <div className="profil__informations">
              <div className="profil__informations__graphiques">
                {data.activity.sessions && (
                  <GraphActiviteQuotidienne data={data.activity.sessions} />
                )}

                <div className="profil__informations__graphiques__others">
                  {data.averageSessions && (
                    <GraphDureesSessions data={data.averageSessions} />
                  )}
                  {data.performance && <GraphRadar data={data.performance} />}
                  {data.profil.todayScore && (
                    <GraphObjectif data={data.profil?.todayScore} />
                  )}
                </div>
              </div>
              <div className="profil__informations__infoNutritionelles">
                <InfoNutritionelle
                  nameNutritionelle={"Calories"}
                  src={srcCalories}
                  quantite={data.profil.calorieCount || "0"}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Proteine"}
                  src={srcProteine}
                  quantite={data.profil.proteinCount || "0"}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Glucide"}
                  src={srcGlucide}
                  quantite={data.profil.carbohydrateCount || "0"}
                />
                <InfoNutritionelle
                  nameNutritionelle={"Lipide"}
                  src={srcLipide}
                  quantite={data.profil.lipidCount || "0"}
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
