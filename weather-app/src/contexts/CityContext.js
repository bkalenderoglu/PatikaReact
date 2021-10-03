import React, { createContext, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([
    {
      id: 1,
      name: "Istanbul",
    },
    {
      id: 2,
      name: "Ankara",
    },
    {
      id: 3,
      name: "Bursa",
    },
    {
      id: 4,
      name: "Izmir",
    },
  ]);

  const values = {
    cities,
    setCities,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};
