import "./Card.css";
import "./Modal.css";
function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;
