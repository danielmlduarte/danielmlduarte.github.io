import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

export default function NavBar() {
  return (
    <div className="navbar-content">
      <Link className="navbar-header" to="/">
        <img className="navbar-image" src="https://avatars2.githubusercontent.com/u/69773207?s=460&u=3c1497fe8cc953d0419c15955dcaf4b683fc4d70&v=4" alt="Daniel Profile Photo" />
        <p className="navbar-title">Daniel Duarte - Desenvolvedor Front-End Jr.</p>
      </Link>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">HOME</Link>
        <Link className="navbar-link" to="/about">SOBRE MIM</Link>
        <Link className="navbar-link" to="/projects">PROJETOS</Link>
        <Link className="navbar-link-button" to="/contact">ENTRE EM CONTATO COMIGO</Link>
      </div>
    </div>
  );
}
