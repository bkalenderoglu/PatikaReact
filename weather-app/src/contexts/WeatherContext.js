import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Istanbul");

  useEffect(() => {
    //https://api.openweathermap.org/data/2.5/forecast/daily?q=Istanbul&cnt=7&appid=e179acc6f540ef60a7ed57fc0fad33a2
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=91093bf524270bf80f0d96ce79250620`
      )
      .then((response) => {
        setWeather(response.data.list);
      });
  }, [city]);
  //console.log(weather);

  const values = {
    weather,
    setWeather,
    city,
    setCity,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
