import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top shadow-sm">
      <div className="container">
        <a href="/home" className="navbar-brand">
          <div className="d-flex justify-content-right align-items-center">
            <img
              src="/assets/logo.png" alt="Logo"
              style={{ width: '100px', height: 'auto', marginRight: '10px' }}
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-start"
          aria-controls="navbar-start"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-start">
          <div className="d-flex justify-content-center ms-3 w-100">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos..."
              aria-label="Search"
              style={{ maxWidth: '400px' }}
            />
            <button className="btn btn-outline-primary" type="button">
              Buscar
            </button>
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/AgregarProducto" className="nav-link active">
                Agregar producto
              </a>
            </li>
            <li className="nav-item">
              <a href="/HistorialCompra" className="nav-link active">
                Historial de compras
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
