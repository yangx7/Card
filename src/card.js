import React from "react";
import Figure from "./catagories/figure";
import Vocabulary from "./catagories/vocabulary";
import FlipCard from "./components/flipCard";

function Card() {
  return (
    <ul>
      <div className="card">
        <FlipCard>
          <Figure />
        </FlipCard>
      </div>
      <div className="card">
        <FlipCard>
          <Vocabulary />
        </FlipCard>
      </div>
    </ul>
  );
}

export default Card;
