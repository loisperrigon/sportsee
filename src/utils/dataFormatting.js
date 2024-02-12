export const formatProfilData = (profilData) => {
  const lastName = profilData.userInfos.lastName;
  const firstName = profilData.userInfos.firstName;
  const age = profilData.userInfos.age;
  const calorieCount = profilData.keyData.calorieCount;
  const proteinCount = profilData.keyData.proteinCount;
  const carbohydrateCount = profilData.keyData.carbohydrateCount;
  const lipidCount = profilData.keyData.lipidCount;

  const profil = {
    id: profilData.id,
    keyData: profilData.keyData,
    firstName: firstName,
    lastName: lastName,
    age: age,
    todayScore:
      profilData.todayScore !== undefined
        ? profilData.todayScore
        : profilData.score || 0,
    calorieCount: calorieCount,
    proteinCount: proteinCount,
    carbohydrateCount: carbohydrateCount,
    lipidCount: lipidCount,
  };

  return profil;
};

export const formatActivityData = (activityData) => {
  //Permet de rajouter un index commencant a 1
  activityData.sessions.map((item, index) => ({
    ...item,
    index: index + 1,
  }));
  return activityData;
};

export const formatPerformanceData = (performanceData) => {
  return performanceData;
};

export const formatAverageSessionsData = (averageSessionsData) => {
  return averageSessionsData;
};
