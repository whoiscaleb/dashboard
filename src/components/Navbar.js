import React from "react";

const Navbar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "280px", height: "100vh" }}>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Dashboard</span>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link text-white" aria-current="page">
            Widget
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Reviews
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Customers
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Online Analysis
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
