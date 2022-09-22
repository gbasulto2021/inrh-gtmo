import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
    <h2>INRH</h2>
    <nav className="header__nav">
      
      <Link to="/">INICIO</Link>
      <Link to="/register">AGREGAR USUARIO</Link>
      <Link to="/form">AGREGAR REPORTE</Link>
      <Link to="/login">ENTRAR</Link>
      <Link to="/reports">REPORTES</Link>
    </nav>
    </header>
  );
};

export default Nav;
