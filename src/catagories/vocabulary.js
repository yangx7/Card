import React from "react";
import Card from "../components/card";

function Vocabulary(props) {
  return (
    <div className="vocabulary">
      <Card>
        <div className="card__face card__face__front">
          <h2>{props.word}</h2>
        </div>
        <div className="card__face card__face__back">
          <h2>{props.meaning}</h2>
        </div>
      </Card>
    </div>
  );
}

export default Vocabulary;
