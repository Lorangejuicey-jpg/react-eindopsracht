import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Berry = () => {
  const [results, setResults] = useState({});
  const [resultsSprites, setResultsSprites] = useState({});
  const [value, setValue] = useState({});

  const fetchData = (value = 1) => {
    fetch(`https://pokeapi.co/api/v2/berry/` + value)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        setResults(result);
      });
  };

  const fetchSprite = () => {
    fetch(results?.item?.url)
      .then((response) => {
        return response.json();
      })
      .then((resultSprite) => {
        // console.log(resultSprite);
        setResultsSprites(resultSprite);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchSprite();
  }, [results]);
  try {
    return (
      <div>
        <div className="menu-container">
          <div>
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/berryInfo" className="menu-item">Berry info</Link>
          </div>
        </div>
        <div className="berry-container">
        <div className="input-container">
          <input
            placeholder="Enter an berry id"
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            ></input>
          <button type="submit" onClick={() => fetchData(value)}>
            Search
          </button>
        </div>
        <div className="berry-info">
          <h2>Name: {results?.item?.name}</h2>
          <span>Firmness: {results?.firmness?.name}</span>
          <span>Pokedollars: {resultsSprites?.cost}</span>
          <span>natural gift type: {results?.natural_gift_type?.name}</span>
          <span>
            <strong>Effect:</strong>
          </span>
          <span>{resultsSprites?.effect_entries[0]?.effect}</span>
          <div className="sprite-container">
            <img
              className="berry-sprite"
              src={resultsSprites?.sprites?.default}
              ></img>
          </div>
        </div>
        </div>
      </div>
    );
  } catch {
    // console.log("JoE mAmA");
  }
};

export default Berry;
