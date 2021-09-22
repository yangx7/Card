import React from "react";
import Figure from "../catagories/figure";
import Vocabulary from "../catagories/vocabulary";

function CardList(props) {
  const { category } = props.match.params;
  const lists = {
    figure: [{ img: "C.Ronaldo.jpg", name: "C.Ronaldo" }],
    vocabulary: [
      { word: "Vocabulary", meaning: "单词" },
      { word: "cat", meaning: "猫" },
    ],
  };

  switch (category) {
    case "figure":
      return lists[category].map((item) => (
        <div className="card__list">
          <Figure {...item} />
        </div>
      ));
    case "vocabulary":
      return lists[category].map((item) => (
        <div className="card__list">
          <Vocabulary {...item} />
        </div>
      ));
    default:
      return null;
  }
}

export default CardList;
