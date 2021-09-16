import React from "react";
import importImages from "../utils";

function Figure() {
  const images = importImages();
  return (
    <div className="figure">
      <div className="card__face card__face__front">
        <img
          src={`${window.location.origin}/${images["C.Ronaldo.jpg"]}`}
          alt=""
          className="img"
        />
      </div>
      <div className="card__face card__face__back">
        <h2>C.Ronaldo</h2>
      </div>
    </div>
  );
}

export default Figure;
