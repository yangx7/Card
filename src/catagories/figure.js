import React from "react";
import Card from "../components/card";
import importImages from "../utils";

function Figure(props) {
  const images = importImages();

  return (
    <div className="figure">
      <Card>
        <div className="card__face card__face__front">
          <img src={images[props.img]} alt="" className="img" />
        </div>
        <div className="card__face card__face__back">
          <h2>{props.name}</h2>
        </div>
      </Card>
    </div>
  );
}

export default Figure;
