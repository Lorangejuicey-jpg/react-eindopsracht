import "./App.css";
import React, { useEffect, useState } from "react";
const App = () => {
  const [results, setResults] = useState({});
  const [resultsSprites, setResultsSprites] = useState({});
  const [value, setValue] = useState({});

  const fetchData = (value) => {
    fetch(`https://pokeapi.co/api/v2/berry/` + value)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setResults(result);
      });
  };

  const fetchSprite = () => {
    fetch(results?.item?.url)
      .then((response) => {
        return response.json();
      })
      .then((resultSprite) => {
        console.log(resultSprite);
        setResultsSprites(resultSprite);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchSprite();
  }, [results]);

  return (
    <div>
      <div className="input-container">
      <input placeholder="Enter an berry id" type="text" onChange={(e) => {setValue(e.target.value)}}></input>
      <button type="submit" onClick={() => fetchData(value)}>Search</button>
      </div>
      <div className="berry-info">
      <h2>Name: {results?.item?.name}</h2>
      <span>Pokedollars: {resultsSprites?.cost}</span>
      <span>natural gift type: {results?.natural_gift_type?.name}</span>
      <div className="sprite-container">
      <img className="berry-sprite" src={resultsSprites?.sprites?.default}></img>
      </div>
      </div>
    </div>
  );
};

export default App;
