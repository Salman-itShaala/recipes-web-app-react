function CardComponent(props) {
  return (
    <div className="recipe-card">
      <img src={props.image} alt="Recipe" />
      <p className="recipe-name">{props.name}</p>
      <p className="recipe-rating">Rating : {props.rating}</p>
      <p className="recipe-review-count">ReviewCount: {props.reviewCount}</p>
    </div>
  );
}

export default CardComponent;
