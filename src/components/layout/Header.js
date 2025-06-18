import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>ANLACO</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/designs">Diseños DIY</Link></li>
          <li><Link to="/shop">Tienda</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
