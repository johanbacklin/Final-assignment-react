import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages/allPlates.scss";

function SingleNumberPlate(params) {
  const [numberPlate, setNumberPlate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getNumberPlate() {
      const res = await fetch(`http://localhost:3001/all-number-plates/${id}`);
      const json = await res.json();
      setNumberPlate(json);
      console.log(json);
    }

    getNumberPlate();
  }, [id]);

  if (!numberPlate) {
    return null;
  }

  async function deleteNumberplate() {
    await fetch(`http://localhost:3001/all-number-plates/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="single__numberplate__image">
      <div className="single__numberplate">
        <h1>{numberPlate.number}</h1>
        <p>Owner: {numberPlate.owner}</p>
        <p>Country: {numberPlate.country}</p>
        <p>Region: {numberPlate.region}</p>
        <p>Year: {numberPlate.year}</p>
        <p>Price: {numberPlate.price}</p>
        <p>Id: {numberPlate.id}</p>
        <button onClick={deleteNumberplate}>Delete</button>
      </div>
    </div>
  );
}

export default SingleNumberPlate;
