import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', path: '/', icon: '🏠' },
    { name: 'Tienda', path: '/shop', icon: '🛒' },
    { name: 'Proyectos', path: '/designs', icon: '🎯' },
    { name: 'Sobre Mí', path: '/about', icon: '👨‍🔧' },
    { name: 'Contacto', path: '/contact', icon: '📧' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{ 
      backgroundColor: 'var(--anlaco-anthracite)', 
      color: 'white',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: 'var(--anlaco-yellow-industrial)',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '2rem' }}>🔧</span>
            <span>ANLACO</span>
          </Link>
          <span style={{ 
            marginLeft: '1rem',
            fontSize: '0.9rem',
            color: '#ccc',
            fontStyle: 'italic'
          }}>
            Maker Components
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '2rem',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            {navigation.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: isActive(item.path) ? 'var(--anlaco-yellow-industrial)' : 'white',
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive(item.path) ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          style={{
            display: 'block',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav style={{
          backgroundColor: 'var(--anlaco-anthracite)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1rem 0'
        }} className="mobile-nav">
          <ul style={{ 
            listStyle: 'none', 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            {navigation.map((item) => (
              <li key={item.path} style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: isActive(item.path) ? 'var(--anlaco-yellow-industrial)' : 'white',
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '4px',
                    backgroundColor: isActive(item.path) ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Responsive CSS */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
