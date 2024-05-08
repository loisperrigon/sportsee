export const formatedProfilData = (profilData) => {
  console.log(profilData);
  const firstName = profilData?.userInfos?.firstName;
  const lastName = profilData?.userInfos?.lastName;
  const age = profilData?.userInfos?.age;
  const calorieCount = profilData?.keyData?.calorieCount;
  const proteinCount = profilData?.keyData?.proteinCount;
  const carbohydrateCount = profilData?.keyData?.carbohydrateCount;
  const lipidCount = profilData?.keyData?.lipidCount;

  const profil = {
    id: profilData.id,
    keyData: profilData.keyData,
    firstName: firstName || "",
    lastName: lastName || "",
    age: age || 0,
    todayScore:
      profilData.todayScore !== undefined
        ? profilData.todayScore
        : profilData.score || 0,
    calorieCount: calorieCount || 0,
    proteinCount: proteinCount || 0,
    carbohydrateCount: carbohydrateCount || 0,
    lipidCount: lipidCount || 0,
  };

  return profil;
};

export const formatedActivityData = (activityData) => {
  return activityData;
};

export const formatPerformanceData = (performanceData) => {
  return performanceData;
};

export const formatAverageSessionsData = (averageSessionsData) => {
  return averageSessionsData;
};
