import "../styles/figure.css";
import img from "../images/C.Ronaldo.jpg";

function Figure() {
  return (
    <div className="figure">
      <div className="card__face card__face__front">
        <h2>Figure</h2>
      </div>
      <div className="card__face card__face__back">
        <div className="card__content">
          <div className="card__header">
            <img src={img} alt="" className="img" />
          </div>
          {/* <div className="card__body">
            <h3>Content</h3>
            <p>This is description</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Figure;
