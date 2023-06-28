import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>FLASH GAME</h1>
      </header>
      <div className="two-links">
        <Link className="link" to="/add-card">
          ADD
        </Link>
        <Link className="link" to="/play">
          PLAY
        </Link>
      </div>
    </div>
  );
};

export default Home;
