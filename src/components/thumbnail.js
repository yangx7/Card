import React from "react";
import importImages from "../utils";
// import style from "../styles/_base.scss";

function Thumbnail(props) {
  const images = importImages();
  // console.log("style", style);

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
