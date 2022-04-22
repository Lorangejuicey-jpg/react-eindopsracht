import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
        <div className="menu-container">
          <div>
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/berryInfo" className="menu-item">Berry info</Link>
          </div>
        </div>
            <div className="info-container">
                <h1>Berry info</h1>
                <p>Berries (Japanese: きのみ Tree Fruit) are small, juicy, fleshy fruit. As in the real world, a large variety exists in the Pokémon world, with a large range of flavors and effects. First found in the Generation II games, many Berries have since become critical held items in battle, where their various effects include HP and status condition restoration, stat enhancement, and even damage negation.</p>
            </div>
        </div>
    )
}
export default Home;