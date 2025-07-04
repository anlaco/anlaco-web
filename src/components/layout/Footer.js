import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: 'var(--anlaco-anthracite)',
      color: 'white',
      padding: '3rem 0 1rem 0',
      marginTop: 'auto'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Sobre ANLACO */}
          <div>
            <h3 style={{ 
              color: 'var(--anlaco-yellow-industrial)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>🔧</span>
              <span>ANLACO</span>
            </h3>
            <p style={{ 
              lineHeight: '1.6',
              color: '#ccc',
              marginBottom: '1rem'
            }}>
              Componentes maker de calidad, directo de maker a maker. 
              Sin intermediarios, sin márgenes abusivos.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.9rem', color: '#ccc' }}>
                📍 Enviamos desde España
              </span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 style={{ 
              color: 'var(--anlaco-yellow-industrial)',
              marginBottom: '1rem'
            }}>
              Enlaces Rápidos
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/shop" 
                  style={{ 
                    color: '#ccc', 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  🛒 Tienda
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/designs" 
                  style={{ 
                    color: '#ccc', 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  🎯 Mis Proyectos
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/about" 
                  style={{ 
                    color: '#ccc', 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  👨‍🔧 Sobre Mí
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/contact" 
                  style={{ 
                    color: '#ccc', 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  📧 Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 style={{ 
              color: 'var(--anlaco-yellow-industrial)',
              marginBottom: '1rem'
            }}>
              Información
            </h4>
            <div style={{ color: '#ccc' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>🕒 Actualizaciones:</strong><br/>
                Stock actualizado semanalmente
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>📦 Envíos:</strong><br/>
                Gestión via Wallapop
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>💰 Precios:</strong><br/>
                Coste + gastos de envío
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>🔧 Soporte:</strong><br/>
                Consejos incluidos
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ color: '#ccc', fontSize: '0.9rem' }}>
            © {currentYear} ANLACO. Hecho con ❤️ por un maker para makers.
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: '#ccc'
          }}>
            <span>🚀 Desarrollado con React</span>
            <span>•</span>
            <span>🌐 Desplegado en Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
