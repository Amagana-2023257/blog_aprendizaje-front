import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold text-dark">Blog de Aprendizaje</span>
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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeclassname="active-link">
                Publicaciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/posts/new" className="nav-link" activeclassname="active-link">
                Crear Publicación
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
