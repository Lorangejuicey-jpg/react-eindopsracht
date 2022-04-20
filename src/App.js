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
        setResults(result.item);
      });
  };
  const fetchSprite = () => {
    fetch(results?.url)
      .then((response) => {
        return response.json();
      })
      .then((resultSprite) => {
        console.log(resultSprite);
        setResultsSprites(resultSprite.sprites);
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
      <input
        placeholder="Enter an berry id"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button onClick={ () = fetchData(value)}>Search</button>
      <h2>{results?.name}</h2>
      <img src={resultsSprites?.default}></img>
    </div>
  );
};

export default App;
