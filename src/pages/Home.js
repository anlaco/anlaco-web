import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="py-lg">
      {/* Hero Section */}
      <section className="mb-xxl">
        <div className="content-card accent-yellow">
          <div className="card-body">
            <h1 className="mb-md">🔧 ANLACO - Componentes Maker de Calidad</h1>
            <p className="mb-lg" style={{ fontSize: '1.2rem' }}>
              <strong>Maker especializado en impresoras 3D.</strong> Vendo material de alta calidad 
              al por mayor que me sobra de mis proyectos. Perfiles, tornillería, guías lineales 
              y todo lo que necesitas para tus builds.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn btn-primary">
                🛒 Ver Componentes
              </Link>
              <Link to="/designs" className="btn btn-outline-primary">
                🎯 Mis Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Valor Añadido */}
      <section className="mb-xxl">
        <h2 className="mb-lg">💡 ¿Por qué ANLACO?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="content-card">
            <h3 className="mb-md">📦 Calidad Industrial</h3>
            <p>Material que compro al por mayor directamente de fabricantes chinos. 
            Misma calidad que las grandes empresas, precio de maker.</p>
          </div>
          <div className="content-card">
            <h3 className="mb-md">🎯 BOMs Completos</h3>
            <p>Listas de materiales completas para cada proyecto. 
            Alternativas de calidades y precios para tu presupuesto.</p>
          </div>
          <div className="content-card">
            <h3 className="mb-md">🔧 Experiencia Real</h3>
            <p>Cada componente lo he usado en mis builds. 
            Te doy consejos basados en experiencia real, no en marketing.</p>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="mb-xxl">
        <h2 className="mb-lg">🚀 Mis Proyectos Maker</h2>
        <div className="content-card">
          <div className="card-body">
            <h3 className="mb-md">🖨️ Impresora 3D Compacta</h3>
            <p className="mb-md">
              Mi primer proyecto serio. Diseñé una impresora 3D compacta y económica. 
              El problema: comprar componentes individuales salía carísimo.
            </p>
            <p className="mb-md">
              <strong>Solución:</strong> Compré al por mayor y me sobró material para 10 impresoras más. 
              Ahora ese material está disponible para ti.
            </p>
            <Link to="/designs" className="btn btn-secondary">
              Ver BOM Completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-xxl">
        <div className="content-card accent-anthracite" style={{ textAlign: 'center' }}>
          <div className="card-body">
            <h2 className="mb-md">🎯 ¿Listo para tu siguiente build?</h2>
            <p className="mb-lg">
              Explora mis componentes, descarga BOMs completos y lleva tus proyectos al siguiente nivel.
            </p>
            <Link to="/shop" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              🛒 Empezar Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
