import React from "react";
import Navbar from "./navbar";
import Thumbnail from "./thumbnail";

function Home() {
  const catagories = [
    { img: "C.Ronaldo.jpg", caption: "Figure", category: "figure" },
    { caption: "Vocabulary", category: "vocabulary" },
  ];
  return (
    <div className="home">
      <Navbar />
      {catagories.map((c) => (
        <Thumbnail
          img={c.img}
          caption={c.caption}
          key={c.caption}
          category={c.category}
        />
      ))}
    </div>
  );
}

export default Home;
