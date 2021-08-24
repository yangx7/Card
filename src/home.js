import "./styles/home.css";
import Thumbnail from "./components/thumbnail";

function Home() {
  const content = [
    { title: "Word" },
    { title: "figure", img: "/images/C.Ronaldo.jpg" },
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
