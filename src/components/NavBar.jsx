import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget/index';

const Navbar = () => {

  const navigate = useNavigate(); 

  const handleCartClick = () => {
    navigate("/checkout");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Tienda-Destiny</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/categoria/DLC" className="nav-link">DLC</Link>
            </li>
            <li className="nav-item">
              <Link to="/categoria/Paquete" className="nav-link">Paquete</Link>
            </li>
            <li className="nav-item">
              <Link to="/categoria/Colección" className="nav-link">Colección</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <button className="nav-link" onClick={handleCartClick}>
              <CartWidget />
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;