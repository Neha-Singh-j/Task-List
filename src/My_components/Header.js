import React from "react";
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand font-kanit " href="#">
      Todo List
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active font-kanit" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active font-kanit" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active font-kanit" href="#">
            Search
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="fs-1 nav-link dropdown-toggle font-kanit active "
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
      {props.searchbar ? (
              
              <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            ) : (
              ""
            )}
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;
Header.defaultProps = {
  title: "it is your title",
  searchbar: true,
};
Header.propTypes={
    title: PropTypes.string,
    searchbar :PropTypes.bool
}















