import React from "react";
import { Link } from "react-router-dom";
import importImages from "../utils";
// import style from "../styles/_base.scss";

function Thumbnail(props) {
  const images = importImages();
  // console.log("style", style);

  return (
    <figure className="thumbnail">
      <Link to={`/card/${props.category}`}>
        <img src={images[props.img]} alt="" className="img" />
        <figcaption className="caption">
          <h4 className="caption__content">{props.caption}</h4>
        </figcaption>
      </Link>
    </figure>
  );
}

export default Thumbnail;
