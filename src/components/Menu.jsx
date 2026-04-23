import React from "react";
import { Link } from 'react-router-dom'

export const Menu = () =>  {
  return (
    <nav style={{ border: '2px solid red'}}>
      <ul>
        <li><Link to="/">Panel Estructura</Link></li>
        <li><Link to="/app">App</Link></li>
        <li><Link to="/miForm">Mi formulario</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;