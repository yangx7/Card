// import "../styles/home.scss";
import React from "react";
import Thumbnail from "./thumbnail";

function Home() {
  const content = [
    { title: "Word" },
    { title: "figure", img: "C.Ronaldo.jpg" },
  ];
  return (
    <div className="home">
      {content.map((c) => (
        <Thumbnail title={c.title} img={c.img} key={c.title} />
      ))}
    </div>
  );
}

export default Home;
