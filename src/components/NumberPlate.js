import { Link } from "react-router-dom";
import "../pages/allPlates.scss";

function NumberPlate({ numberPlate }) {
  const { number, price, owner } = numberPlate;

  return (
    <div className="singleproduct">
      <div className="singleproduct__image">
        <h1>Number: {number}</h1>
        <p>Owner: {owner}</p>
        <p>Price: {price}</p>
        <Link to={`/NumberPlate/${numberPlate.id}`}>Read more</Link>
      </div>
    </div>
  );
}

export default NumberPlate;
