import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="premium-footer" style={{
      backgroundColor: 'var(--anlaco-anthracite)',
      color: 'white',
      padding: '3rem 0 1rem 0',
      marginTop: 'auto',
      borderTop: '2px solid var(--neon-cyan)',
      position: 'relative'
    }}>
      <div className="urban-line" style={{ 
        position: 'absolute', 
        top: '0', 
        left: '0', 
        right: '0', 
        height: '2px', 
        background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-yellow), var(--neon-cyan))' 
      }}></div>
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
          <div className="footer-section">
            <h3 className="neon-glow-yellow" style={{ 
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
              color: 'var(--neon-cyan)',
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
              <span className="badge-premium" style={{ 
                fontSize: '0.9rem', 
                color: 'var(--neon-cyan)',
                textShadow: '0 0 5px var(--neon-cyan)'
              }}>
                📍 Enviamos desde España
              </span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="footer-section">
            <h4 className="neon-glow-yellow" style={{ 
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
                  className="footer-link"
                  style={{ 
                    color: 'var(--neon-cyan)', 
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--neon-cyan)'}
                >
                  🛒 Tienda
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/designs" 
                  className="footer-link"
                  style={{ 
                    color: 'var(--neon-cyan)', 
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--neon-cyan)'}
                >
                  🎯 Mis Proyectos
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/about" 
                  className="footer-link"
                  style={{ 
                    color: 'var(--neon-cyan)', 
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--neon-cyan)'}
                >
                  👨‍🔧 Sobre Mí
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/contact" 
                  className="footer-link"
                  style={{ 
                    color: 'var(--neon-cyan)', 
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--anlaco-yellow-industrial)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--neon-cyan)'}
                >
                  📧 Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div className="footer-section">
            <h4 className="neon-glow-yellow" style={{ 
              color: 'var(--anlaco-yellow-industrial)',
              marginBottom: '1rem'
            }}>
              Información
            </h4>
            <div style={{ color: 'var(--neon-cyan)' }}>
              <p className="info-item" style={{ marginBottom: '0.5rem' }}>
                <strong>🕒 Actualizaciones:</strong><br/>
                Stock actualizado semanalmente
              </p>
              <p className="info-item" style={{ marginBottom: '0.5rem' }}>
                <strong>📦 Envíos:</strong><br/>
                Gestión via Wallapop
              </p>
              <p className="info-item" style={{ marginBottom: '0.5rem' }}>
                <strong>💰 Precios:</strong><br/>
                Coste + gastos de envío
              </p>
              <p className="info-item" style={{ marginBottom: '0.5rem' }}>
                <strong>🔧 Soporte:</strong><br/>
                Consejos incluidos
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="urban-line" style={{
          borderTop: '1px solid var(--neon-cyan)',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>
            © {currentYear} ANLACO. Hecho con ❤️ por un maker para makers.
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: 'var(--neon-cyan)'
          }}>
            <span className="tech-badge">🚀 Desarrollado con React</span>
            <span>•</span>
            <span className="tech-badge">🌐 Desplegado en Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
