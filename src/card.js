import React from "react";
import Figure from "./catagories/figure";
import Vocabulary from "./catagories/vocabulary";
import FlipCard from "./components/flipCard";

function Card(props) {
  const { category } = props.match.params;
  switch (category) {
    case "figure":
      return (
        <div className="card">
          <FlipCard>
            <Figure />
          </FlipCard>
        </div>
      );
    case "vocabulary":
      return (
        <div className="card">
          <FlipCard>
            <Vocabulary />
          </FlipCard>
        </div>
      );
    default:
      return null;
  }
}

export default Card;
