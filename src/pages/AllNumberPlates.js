import React from "react";
import "../pages/allPlates.scss";
import { useState, useEffect } from "react";

import NumberPlate from "../components/NumberPlate";

function AllNumberPlates() {
  const [value, setValue] = useState("");
  const sortOptions = ["Price", "number", "owner"];
  const [sortValue, setSortValue] = useState("Select Value");
  const [numberPlates, setNumberPlates] = useState([]);

  useEffect(function () {
    async function loadNumberPlates() {
      const res = await fetch("http://localhost:3001/all-number-plates");
      const numberPlates = await res.json();
      setNumberPlates(numberPlates);
    }

    loadNumberPlates();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `http://localhost:3001/all-number-plates?q=${value}`
    );
    const numberPlates = await res.json();
    setNumberPlates(numberPlates);
  };

  const handleReset = () => {
    setValue("");
    setNumberPlates(numberPlates);
  };

  function handleSort(event) {
    setSortValue(event.target.value);

    if (event.target.value === "number") {
      const sortedNumberPlates = [...numberPlates].sort(function (a, b) {
        return a.number.localeCompare(b.number);
      });
      setNumberPlates(sortedNumberPlates);
    }

    if (event.target.value === "Select Value") {
      const sortedNumberPlates = [...numberPlates].sort(function (a, b) {
        return a.id - b.id;
      });
      setNumberPlates(sortedNumberPlates);

      return;
    }
    if (event.target.value === "Price") {
      const sortedNumberPlates = [...numberPlates].sort(function (a, b) {
        return a.price - b.price;
      });
      setNumberPlates(sortedNumberPlates);
    }
    if (event.target.value === "owner") {
      const sortedNumberPlates = [...numberPlates].sort(function (a, b) {
        return a.price - b.price;
      });
      setNumberPlates(sortedNumberPlates);
    }
  }

  return (
    <>
      <div className="all__number">
        <div className="all__number__title">
          <div className="container">
            <h1>ALL NUMBERPLATES</h1>

            <select
              className="sort__dropdown"
              value={sortValue}
              onChange={handleSort}
            >
              <option value="Select Value">Select value</option>
              {sortOptions.map(function (option) {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>

            <form className="search__form" onSubmit={handleSearch}>
              <p>Search results for: {value}</p>
              <input
                className="search__input"
                type="text"
                placeholder="Search..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <button className="search__button" type="submit">
                Search
              </button>
              <button className="reset__button" onClick={() => handleReset()}>
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
      <ul className="all__numberplates">
        {numberPlates.map((numberPlate) => (
          <NumberPlate key={numberPlate.id} numberPlate={numberPlate} />
        ))}
      </ul>
    </>
  );
}

export default AllNumberPlates;
