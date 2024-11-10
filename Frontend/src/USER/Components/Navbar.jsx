import React from 'react';
import LOGO from '../images/LOGO.jpg';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent dark background with 70% opacity
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={LOGO}
            alt="logo"
            style={{ width: '250px', height: 'auto', maxHeight: '100px' }}
            className="img-fluid"
          />
        </a>
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
              <button
                className="btn me-2"
                style={{ fontWeight: '600', background: '#000000', color: '#ffffff' }} // Black button with white text
                data-bs-toggle="modal"
                data-bs-target="#loginModal" // Ensures this matches the modal ID
              >
                For Booking
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
