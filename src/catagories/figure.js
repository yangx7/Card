import "../styles/figure.css";

function Figure() {
  return (
    <div className="figure">
      <div className="card__face card__face__front">
        <img src="/images/C.Ronaldo.jpg" alt="" className="img" />
      </div>
      <div className="card__face card__face__back">
        <h2>C.Ronaldo</h2>
      </div>
    </div>
  );
}

export default Figure;
