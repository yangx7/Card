import React from "react";
import importImages from "../utils";
// import style from "../styles/_base.scss";

function Thumbnail(props) {
  const images = importImages();
  // console.log("style", style);

  return (
    <figure className="thumbnail">
      <img src={images[props.img]} alt="" className="img" />
      <figcaption className="caption">{props.caption}</figcaption>
    </figure>
  );
}

export default Thumbnail;
