import "./styles/card.css";
import Figure from "./catagories/figure";
import FlipCard from "./components/flipCard";

function Card() {
  return (
    <div className="card">
      <FlipCard>
        <Figure />
      </FlipCard>
    </div>
  );
}

export default Card;
