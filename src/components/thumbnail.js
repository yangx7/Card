import "../styles/thumbnail.css";
import React from "react";
import importImages from "../utils";

function Thumbnail(props) {
  const images = importImages();

  return (
    <div className="thumbnail">
      {props.img ? (
        <img src={images[props.img]} alt="" className="img" />
      ) : (
        <h4 className="title">{props.title}</h4>
      )}
    </div>
  );
}

export default Thumbnail;
