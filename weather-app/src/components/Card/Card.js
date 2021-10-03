import React from "react";
import "../Card/Card.css";

function Card(props) {
  return (
    <div className="Card">
      <h3 className="day">{props.day}</h3>
      <img
        className="img"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="#"
      />
      <div className="temp">
        <p className="temp__max">{props.temp_max}&deg;</p>
        <p className="temp__min">{props.temp_min}&deg;</p>
      </div>
    </div>
  );
}

export default Card;
