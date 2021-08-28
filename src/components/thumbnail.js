import React from "react";
import importImages from "../utils";
import style from "../styles/thumbnail.scss";

function Thumbnail(props) {
  const images = importImages();

  return (
    <div className={style.thumbnail}>
      {props.img ? (
        <img src={images[props.img]} alt="" className={style.img} />
      ) : (
        <h4 className="title">{props.title}</h4>
      )}
    </div>
  );
}

export default Thumbnail;
