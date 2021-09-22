import React from "react";
import { Link } from "react-router-dom";
import importImages from "../utils";

function Thumbnail(props) {
  const images = importImages();

  return (
    <figure className="thumbnail">
      <Link to={`/cardList/${props.category}`}>
        <img src={images[props.img]} alt="" className="img" />
        <figcaption className="caption">
          <h4 className="caption__content">{props.caption}</h4>
        </figcaption>
      </Link>
    </figure>
  );
}

export default Thumbnail;
