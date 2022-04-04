import "./App.css";

const App = () => {
  fetch("https://pokeapi.co/api/v2/berry/1/")
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch(console.log("error"));

  return <div className="App"></div>;
};

export default App;
