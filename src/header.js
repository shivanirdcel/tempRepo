// Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "./assets/image/header-logo.png"; // adjust as needed

const Header = () => {
  return (
    <header>
      <nav className="other-custom-nav navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src="/image/header-logo.png" alt="Logo" className="header-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/programs">
                  Programs Offered
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/centers">
                  Our Centers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/placements">
                  Placements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/franchise">
                  Franchise
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
