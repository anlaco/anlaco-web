import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Designs() {
  const [selectedProject, setSelectedProject] = useState('impresora3d');

  const projects = {
    impresora3d: {
      name: '🖨️ Impresora 3D Compacta',
      description: 'Mi primer proyecto serio. Diseño compacto y económico para makers.',
      status: 'Completado',
      cost: '~180€',
      time: '2 semanas',
      difficulty: 'Intermedio',
      bom: [
        { item: 'Perfiles aluminio 40x40 V-Slot', cantidad: '2m', precio: '28€', costPrice: '20€', wallapop: true },
        { item: 'Tornillos M5x10mm', cantidad: '50 uds', precio: '6.50€', costPrice: '4.80€', wallapop: true },
        { item: 'Guías lineales SBR16', cantidad: '4 uds', precio: '44€', costPrice: '32€', wallapop: true },
        { item: 'Motores NEMA 17', cantidad: '4 uds', precio: '48€', costPrice: '40€', wallapop: false },
        { item: 'Hotend E3D V6', cantidad: '1 ud', precio: '28€', costPrice: '25€', wallapop: false },
        { item: 'Cama caliente 220x220', cantidad: '1 ud', precio: '42€', costPrice: '35€', wallapop: false },
        { item: 'Placa controladora', cantidad: '1 ud', precio: '26€', costPrice: '22€', wallapop: false }
      ],
      images: [
        'https://via.placeholder.com/400x300/FFD700/232323?text=Impresora+3D+V1',
        'https://via.placeholder.com/400x300/232323/FFD700?text=Detalle+Extrusor'
      ]
    }
  };

  const currentProject = projects[selectedProject];

  return (
    <div className="py-lg">
      <h1 className="mb-lg neon-glow-yellow">🚀 Mis Proyectos Maker</h1>
      <p className="mb-xxl" style={{ color: 'var(--neon-cyan)' }}>
        Aquí documento todos mis builds, con BOMs completos, alternativas de materiales 
        y consejos basados en experiencia real. <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>Todo transparente, todo probado.</strong>
      </p>

      {/* Selector de Proyectos */}
      <div className="mb-xxl">
        <div className="content-card premium">
          <h3 className="mb-md neon-glow-cyan">📋 Selecciona un Proyecto</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className={`btn premium-btn ${selectedProject === 'impresora3d' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedProject('impresora3d')}
            >
              🖨️ Impresora 3D
            </button>
            <button className="btn btn-outline-secondary" disabled>
              🔜 CNC (Próximamente)
            </button>
            <button className="btn btn-outline-secondary" disabled>
              🔜 Plotter (Próximamente)
            </button>
          </div>
        </div>
      </div>

      {/* Detalle del Proyecto */}
      <div className="mb-xxl">
        <div className="content-card premium accent-yellow">
          <div className="card-header">
            <h2 className="card-title neon-glow-yellow">{currentProject.name}</h2>
          </div>
          <div className="card-body">
            <p className="mb-lg" style={{ color: 'var(--neon-cyan)' }}>{currentProject.description}</p>
            
            {/* Stats del Proyecto */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>🎯 Estado</strong><br/>
                <span className="badge-premium" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                  {currentProject.status}
                </span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>💰 Coste Total</strong><br/>
                <span className="price-tag" style={{ fontSize: '1.5rem', color: 'var(--anlaco-yellow-industrial)' }}>
                  {currentProject.cost}
                </span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>⏱️ Tiempo</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>{currentProject.time}</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>🔧 Dificultad</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>{currentProject.difficulty}</span>
              </div>
            </div>

            {/* Imágenes del Proyecto */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {currentProject.images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${currentProject.name} ${index + 1}`}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOM (Bill of Materials) */}
      <div className="mb-xxl">
        <div className="content-card premium">
          <div className="card-header">
            <h3 className="card-title neon-glow-cyan">📦 BOM - Lista de Materiales</h3>
            <p style={{ color: 'var(--neon-cyan)' }}>Todos los componentes necesarios para replicar este proyecto</p>
          </div>
          <div className="card-body">
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--anlaco-slate-gray)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--neon-cyan)', color: 'var(--anlaco-yellow-industrial)' }}>Componente</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid var(--neon-cyan)', color: 'var(--anlaco-yellow-industrial)' }}>Cantidad</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid var(--neon-cyan)', color: 'var(--anlaco-yellow-industrial)' }}>Precio</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid var(--neon-cyan)', color: 'var(--anlaco-yellow-industrial)' }}>Disponible</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProject.bom.map((item, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid var(--neon-cyan)' }}>
                      <td style={{ padding: '1rem' }}>
                        <strong style={{ color: 'var(--neon-cyan)' }}>{item.item}</strong>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--neon-cyan)' }}>
                        {item.cantidad}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <span className="price-tag" style={{ color: 'var(--anlaco-yellow-industrial)', fontWeight: 'bold' }}>
                          {item.precio}
                        </span>
                        <br/>
                        <small style={{ color: 'var(--neon-cyan)' }}>
                          (Coste: {item.costPrice})
                        </small>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        {item.wallapop ? (
                          <Link to="/shop" className="btn btn-primary premium-btn" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                            🛒 En Stock
                          </Link>
                        ) : (
                          <span className="badge-premium" style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>
                            🔍 Buscar alternativa
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Resumen de Costes */}
            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span><strong>Total BOM:</strong></span>
                <span style={{ fontSize: '1.5rem', color: 'var(--anlaco-yellow-industrial)', fontWeight: 'bold' }}>
                  {currentProject.cost}
                </span>
              </div>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                * Precios aproximados. Componentes marcados como "En Stock" disponibles en mi tienda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="content-card accent-anthracite" style={{ textAlign: 'center' }}>
        <div className="card-body">
          <h3 className="mb-md">🎯 ¿Quieres replicar este proyecto?</h3>
          <p className="mb-lg">
            Tengo varios de estos componentes en stock. El resto te ayudo a encontrar alternativas de calidad.
          </p>
          <Link to="/shop" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            🛒 Ver Componentes Disponibles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Designs;
