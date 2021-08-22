import "../styles/flipCard.css";
import React, { useState } from "react";

function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCardClass = `flip__card${isFlipped ? " is__flipped" : ""}`;
  return (
    <div className={flipCardClass} onClick={() => setIsFlipped(!isFlipped)}>
      {props.children}
    </div>
  );
}

export default FlipCard;
