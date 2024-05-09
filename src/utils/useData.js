import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../services/fakeApi.js";
//import Api from "../services/api.js";
import {
  formatedActivityData,
  formatedProfilData,
} from "../utils/dataFormatting.js";

function useData() {
  const { id } = useParams();
  const [profilData, setProfilData] = useState({
    data: undefined,
    loading: true,
  });
  const [activityData, setActivityData] = useState({
    data: undefined,
    loading: true,
  });
  const [performanceData, setPerformanceData] = useState({
    data: undefined,
    loading: true,
  });
  const [averageSessionsData, setAverageSessionsData] = useState({
    data: undefined,
    loading: true,
  });

  const fetchDataAndUpdateState = async (endpoint, setData, formatDataFn) => {
    try {
      const response = await Api.getProfilData(endpoint);
      setData((prevData) => ({
        ...prevData,
        data: formatDataFn(response.data),
        loading: false,
      }));

      // setActivityData((prevData) => ({
      //   ...prevData,
      //   loading: true,
      // }));
    } catch (error) {
      console.error(`Failed to fetch data for ${endpoint}:`, error);
      setData((prevData) => ({
        ...prevData,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    fetchDataAndUpdateState(`user/${id}`, setProfilData, formatedProfilData);

    fetchDataAndUpdateState(
      `user/${id}/activity`,
      setActivityData,
      formatedActivityData
    );
    fetchDataAndUpdateState(
      `user/${id}/performance`,
      setPerformanceData,
      (data) => data
    );
    fetchDataAndUpdateState(
      `user/${id}/average-sessions`,
      setAverageSessionsData,
      (data) => data
    );
  }, [id]); // Quand l'id change fetchData est rappelé

  return [profilData, activityData, performanceData, averageSessionsData];
}

export default useData;
