// fakeApi.js
import mockData from "../mocks/mockData.js";

const fakeApi = {
  getProfilData: async (endpoint) => {
    try {
      const [resource, userId, property] = endpoint.split("/");

      if (!userId) {
        return Promise.reject("User ID not provided");
      }
      // Ajoutez la logique pour traiter corectement les différentes propriétés (average-sessions, etc.)
      let data;
      switch (property) {
        case "average-sessions":
          data = mockData.USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === parseInt(userId)
          );
          break;
        case "performance":
          data = mockData.USER_PERFORMANCE.find(
            (user) => user.userId === parseInt(userId)
          );
          break;
        case "activity":
          data = mockData.USER_ACTIVITY.find(
            (user) => user.userId === parseInt(userId)
          );
          break;
        default:
          data = mockData.USER_MAIN_DATA.find(
            (user) => user.id === parseInt(userId)
          );
          break;
      }

      if (data) {
        return data;
      } else {
        return Promise.reject(`Data not found for user with ID ${userId}`);
      }
    } catch (error) {
      console.error("Error fetching graph data:", error);
      throw error;
    }
  },
};

export default fakeApi;
