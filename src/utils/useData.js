import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import Api from "../services/fakeApi.js";
import Api from "../services/api.js"; // Importez votre module API ici

import {
  formatActivityData,
  formatAverageSessionsData,
  formatPerformanceData,
  formatProfilData,
} from "./dataFormatting.js";

function useData() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProfil = await Api.getProfilData(`user/${id}`);
        const responseActivity = await Api.getProfilData(`user/${id}/activity`);
        const responsePerformance = await Api.getProfilData(
          `user/${id}/performance`
        );
        const responseAverageSessions = await Api.getProfilData(
          `user/${id}/average-sessions`
        );

        setData({
          profil: formatProfilData(responseProfil.data),
          activity: formatActivityData(responseActivity.data),
          performance: formatPerformanceData(responsePerformance.data),
          averageSessions: formatAverageSessionsData(
            responseAverageSessions.data
          ),
        });
      } catch (error) {
        setError(true);
        setMessageError(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Quand l'id change fetchData est rappele

  return [data, error, messageError];
}

export default useData;
