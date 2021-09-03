import React from "react";
import Thumbnail from "./thumbnail";

function Home() {
  const catagories = [
    { img: "C.Ronaldo.jpg", caption: "Figure" },
    { caption: "Vocabulary" },
  ];
  return (
    <div className="home">
      {catagories.map((c) => (
        <Thumbnail img={c.img} caption={c.caption} key={c.caption} />
      ))}
    </div>
  );
}

export default Home;
