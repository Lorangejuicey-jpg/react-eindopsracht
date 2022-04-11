import "./App.css";
import React, { useEffect, useState } from "react";
const App = () => {
  const [results, setResults] = useState({});

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/berry/`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setResults(result.results);
      });
    // .catch(console.log("error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.item}>{result.name}</li>
          ))}
        </ul>
      )}
      <button onClick={fetchData}>Refresh</button>
    </div>
  );
};

export default App;
