import React from "react";

const myelement = <input type="text" />;

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light border-bottom">
        <a className="navbar-brand text-dark" href="NewComponent">
          React App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-dark" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-dark" href="Home.html">
                Start <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
