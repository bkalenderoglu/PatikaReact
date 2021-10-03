import React, { useState, useContext } from "react";
import Card from "../Card/Card.js";
import "../CardList/CardList.css";
import { WeatherContext } from "../../contexts/WeatherContext";

function CardList() {
  const { weather, setWeather } = useContext(WeatherContext);

  return (
    <div className="CardList">
      {weather.map((item) => (
        <Card
          day={item.dt_txt}
          temp_max={item.main.temp_max}
          temp_min={item.main.temp_min}
          icon={item.weather[0].icon}
          key={item.dt}
        />
      ))}
    </div>
  );
}

export default CardList;
