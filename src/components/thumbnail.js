import "../styles/thumbnail.css";

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      {props.img ? (
        <img src={props.img} alt="" className="img" />
      ) : (
        <h4 className="title">{props.title}</h4>
      )}
    </div>
  );
}

export default Thumbnail;