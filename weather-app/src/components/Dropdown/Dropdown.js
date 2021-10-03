import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../../contexts/CityContext";
import { WeatherContext } from "../../contexts/WeatherContext";
import "../Dropdown/Dropdown.css";

function Dropdown() {
  const { cities } = useContext(CityContext);
  const { setCity } = useContext(WeatherContext);
  const [option, setOption] = useState("Istanbul");

  useEffect(() => {
    setCity(option);
  }, [option]);

  return (
    <div className="Dropdown">
      <select
        className="Dropdown__menu"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        {cities.map((city) => (
          <option
            className="Dropdown__menu__option"
            value={city.name}
            key={city.id}
          >
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
