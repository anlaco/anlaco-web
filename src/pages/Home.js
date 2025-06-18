import React from 'react';

function Home() {
  return (
    <div className="py-lg"> {/* Added padding utility class */}
      <h1 className="mb-lg">Bienvenido a ANLACO</h1>
      <p className="mb-lg">En ANLACO, creemos en el poder del 'Hazlo Tú Mismo' (DIY). Fomentamos la transparencia, compartimos conocimiento y ofrecemos componentes de calidad para que puedas construir tus propios proyectos.</p>

      <div className="mb-lg">
        <button className="btn btn-primary mr-md">Explore Designs</button>
        <button className="btn btn-secondary">Shop Components</button>
      </div>

      <h2 className="mt-xl mb-md">Destacados</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
        <div className="content-card accent-yellow">
          <div className="card-header">
            <h3 className="card-title">Proyectos DIY</h3>
          </div>
          <div className="card-body">
            <p>Descubre guías y proyectos para inspirarte. Desde simples gadgets hasta complejas máquinas.</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-primary">Ver Proyectos</button>
          </div>
        </div>
        <div className="content-card accent-anthracite">
          <div className="card-header">
            <h3 className="card-title">Componentes de Calidad</h3>
          </div>
          <div className="card-body">
            <p>Todo lo que necesitas para tus creaciones: sensores, actuadores, microcontroladores y más.</p>
          </div>
           <div className="card-footer">
            <button className="btn btn-outline-secondary">Ir a la Tienda</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
