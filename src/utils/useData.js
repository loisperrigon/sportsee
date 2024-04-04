import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  formatedActivityData,
  formatedProfilData,
} from "../utils/dataFormatting.js";
//import Api from "../services/fakeApi.js";
import Api from "../services/api.js";

function useData() {
  const { id } = useParams();
  const [profilData, setProfilData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lancer toutes les requêtes en parallèle
        const responseProfilPromise = Api.getProfilData(`user/${id}`);
        const responseActivityPromise = Api.getProfilData(
          `user/${id}/activity`
        );
        const responsePerformancePromise = Api.getProfilData(
          `user/${id}/performance`
        );
        const responseAverageSessionsPromise = Api.getProfilData(
          `user/${id}/average-sessions`
        );

        // Attendre que toutes les promesses soient résolues
        const responseProfil = await responseProfilPromise;
        const responseActivity = await responseActivityPromise;
        const responsePerformance = await responsePerformancePromise;
        const responseAverageSessions = await responseAverageSessionsPromise;

        // Traiter les données une fois qu'elles sont toutes disponibles
        const profilData = formatedProfilData(responseProfil.data);
        const activityData = formatedActivityData(responseActivity.data);

        setProfilData(profilData);
        setActivityData(activityData);
        setPerformanceData(responsePerformance.data);
        setAverageSessionsData(responseAverageSessions.data);
      } catch (error) {
        setError(true);
        setMessageError(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Quand l'id change fetchData est rappele

  return [
    profilData,
    activityData,
    performanceData,
    averageSessionsData,
    error,
    messageError,
  ];
}

export default useData;
