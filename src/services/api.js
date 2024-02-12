import axios from "axios";

const BASE_URL = "http://localhost:3000";

const Api = {
  getProfilData: async (endpoint) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};

export default Api;
