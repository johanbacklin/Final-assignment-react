import { useState } from "react";

function AddNumberplate() {
  const [owner, setOwner] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [year, setYear] = useState(null);
  const [price, setPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNumberplate = {
      owner,
      number,
      country,
      region,
      year,
      price,
    };

    const res = await fetch("http://localhost:3001/all-number-plates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNumberplate),
    });

    if (res.ok) {
      setOwner("");
      setNumber("");
      setCountry("");
      setRegion("");
      setYear(0);
      setPrice(0);
    }
  };

  return (
    <div className="add__numberplate">
      <form onSubmit={handleSubmit}>
        <label>Owner</label>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <br />
        <label>Numberplates Number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />
        <label>Region</label>
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <br />
        <label>Year</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button>Add NumberPlate Information</button>
      </form>
    </div>
  );
}

export default AddNumberplate;
