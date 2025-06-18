import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} ANLACO. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
