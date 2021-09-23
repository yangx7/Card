import React from "react";
import Figure from "../catagories/figure";
import Vocabulary from "../catagories/vocabulary";

function CardList(props) {
  const { category } = props.match.params;
  const lists = {
    figure: [{ img: "C.Ronaldo.jpg", name: "C.Ronaldo" }],
    vocabulary: [
      { word: "vocabulary", meaning: "单词" },
      { word: "cat", meaning: "猫" },
    ],
  };

  return (
    <div className="card__list">
      {lists[category].map((item) => {
        switch (category) {
          case "figure":
            return <Figure {...item} />;
          case "vocabulary":
            return <Vocabulary {...item} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default CardList;
