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
        const responseProfil = await Api.getProfilData(`user/${id}`);
        const responseActivity = await Api.getProfilData(`user/${id}/activity`);
        const responsePerformance = await Api.getProfilData(
          `user/${id}/performance`
        );
        const responseAverageSessions = await Api.getProfilData(
          `user/${id}/average-sessions`
        );

        setProfilData(formatedProfilData(responseProfil.data));
        setActivityData(formatedActivityData(responseActivity.data));
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
