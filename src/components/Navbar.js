import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function NavBar() {
  return (
    <div className="navbar-content">
      <Link className="navbar-header" to="/">
        <p className="navbar-title">Daniel Duarte - Desenvolvedor Front-End Jr.</p>
      </Link>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">HOME</Link>
        <Link className="navbar-link" to="/about">SOBRE MIM</Link>
        <Link className="navbar-link" to="/projects">PROJETOS</Link>
      </div>
    </div>
  );
}
