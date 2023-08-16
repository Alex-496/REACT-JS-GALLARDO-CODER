import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Tienda-Destiny</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./paginas/Destiny.js">Destiny</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./paginas/Historia.js">Historia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./paginas/Contacto.js">Contacto</a>
            </li>
          </ul>
          <span className="navbar-text">
            <a className="nav-link" href="/">
              <CartWidget />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
