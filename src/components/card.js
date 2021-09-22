import React, { useState } from "react";

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardClass = `card${isFlipped ? " is__flipped" : ""}`;
  return (
    <div className={cardClass} onClick={() => setIsFlipped(!isFlipped)}>
      {props.children}
    </div>
  );
}

export default Card;
