import { Link } from "react-router-dom";
import Test from "./Test";

function CardComponent(props) {
  return (
    <Link to={`recipe/${props.id}`} className="recipe-card">
      <img src={props.image} alt="Recipe" />
      <p className="recipe-name">{props.name}</p>
      <p className="recipe-rating">Rating : {props.rating}</p>
      <p className="recipe-review-count">ReviewCount: {props.reviewCount}</p>
      <Test />
    </Link>
  );
}

export default CardComponent;
