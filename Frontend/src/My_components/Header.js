import React from "react";
import PropTypes from 'prop-types';

const Header = ({ title = "Todo List", searchbar = true }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand font-kanit" href="#">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active font-kanit" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-kanit" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-kanit" href="#">
                  Search
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle font-kanit"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Help Centre
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {searchbar && (
              <form className="d-flex">
                <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool
};

export default Header;