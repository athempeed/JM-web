import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand page-scroll" href="#page-top">
          <img src="img/KM_logo-blue-65.png" alt="JM Consultancy" />
          JM Consultancy
        </a>{" "}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a href="#features" className="nav-link page-scroll">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link page-scroll">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link page-scroll">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};
