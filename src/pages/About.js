import React from 'react';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className="py-lg about-page-bg">
      <h1 className="mb-lg neon-glow-yellow about-title">
        <span className="badge badge-premium badge-cyberpunk">CYBER/STEAM/URBAN</span> 🔧 Sobre ANLACO
      </h1>

      {/* Mi Historia */}
      <section className="mb-xxl">
        <div className="content-card premium accent-yellow about-card-shadow">
          <div className="card-body">
            <h2 className="mb-md neon-glow-cyan about-section-title">
              <span className="badge badge-outline badge-steam">📖 Mi Historia</span>
            </h2>
            <p className="mb-md" style={{ color: 'var(--neon-cyan)' }}>
              Hola, soy <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>un maker apasionado</strong> que empezó diseñando una impresora 3D compacta.<br/>
              Como muchos makers, me enfrenté al problema de siempre: <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>los componentes individuales son carísimos</strong>.
            </p>
            <p className="mb-md" style={{ color: 'var(--neon-cyan)' }}>
              Mi solución fue simple: <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>comprar al por mayor directamente de fabricantes chinos</strong>.<br/>
              El problema es que para 1 metro de perfil, tenía que comprar 12 metros.<br/>
              Para 10 tornillos, tenía que comprar 1000.
            </p>
            <div className="about-divider neon-divider" aria-hidden="true"></div>
            <p className="mb-lg" style={{ color: 'var(--neon-cyan)' }}>
              Así nació <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>ANLACO</strong>: una forma de compartir ese material de calidad
              con otros makers, <span className="badge badge-margin">precio de coste + gastos de envío</span>.<br/>
              Sin márgenes abusivos, sin intermediarios, solo material de calidad para makers.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="mb-xxl">
        <h2 className="mb-lg neon-glow-yellow about-section-title">
          <span className="badge badge-outline badge-cyberpunk">💡 Mi Filosofía</span>
        </h2>
        <div className="about-philosophy-grid">
          <div className="content-card premium about-card-shadow">
            <h3 className="mb-md neon-glow-cyan">🎯 Transparencia Total</h3>
            <p style={{ color: 'var(--neon-cyan)' }}>
              Te digo exactamente lo que pago por cada componente.<br/>
              Mi <span className="badge badge-margin">margen</span> solo cubre gastos de envío y el tiempo de gestión.
            </p>
          </div>
          <div className="content-card premium about-card-shadow">
            <h3 className="mb-md neon-glow-cyan">🔧 Experiencia Real</h3>
            <p style={{ color: 'var(--neon-cyan)' }}>
              Cada componente que vendo lo he usado en mis builds.<br/>
              Te doy consejos basados en horas de trabajo real, no en datasheets.
            </p>
          </div>
          <div className="content-card premium about-card-shadow">
            <h3 className="mb-md neon-glow-cyan">📦 Calidad Probada</h3>
            <p style={{ color: 'var(--neon-cyan)' }}>
              Compro directamente de fabricantes que uso en mis proyectos.<br/>
              Si no es lo suficientemente bueno para mí, no lo vendo.
            </p>
          </div>
        </div>
      </section>

      {/* El Problema del Marcado CE */}
      <section className="mb-xxl">
        <div className="content-card premium accent-anthracite about-card-shadow">
          <div className="card-body">
            <h3 className="mb-md neon-glow-cyan">
              <span className="badge badge-outline badge-warning">⚠️ ¿Por qué no vendo kits completos?</span>
            </h3>
            <p className="mb-md" style={{ color: 'var(--neon-cyan)' }}>
              Me encantaría vender kits completos de mis diseños, pero hay un problema legal:<br/>
              <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>Cualquier producto que se monte con el kit necesita marcado CE</strong>.
            </p>
            <p className="mb-md" style={{ color: 'var(--neon-cyan)' }}>
              Conseguir el marcado CE para una impresora 3D puede costar entre 5.000€ y 15.000€.<br/>
              Como maker individual, no me lo puedo permitir.
            </p>
            <div className="about-divider neon-divider" aria-hidden="true"></div>
            <p className="mb-lg" style={{ color: 'var(--neon-cyan)' }}>
              <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>Mi solución:</strong> Vendo componentes individuales y ofrezco BOMs completos
              con alternativas. Tú decides qué comprar y cómo montarlo.<br/>
              Es más flexible y mucho más económico.
            </p>
          </div>
        </div>
      </section>

      {/* Modelo de Negocio */}
      <section className="mb-xxl">
        <div className="content-card premium about-card-shadow">
          <div className="card-header">
            <h3 className="card-title neon-glow-cyan">
              <span className="badge badge-outline badge-cyberpunk">🎯 ¿Cómo Funciona ANLACO?</span>
            </h3>
          </div>
          <div className="card-body">
            <div className="about-business-grid">
              <div>
                <h4 style={{ color: 'var(--anlaco-yellow-industrial)' }}>1. 📦 Compra al por mayor</h4>
                <p style={{ color: 'var(--neon-cyan)' }}>Compro directamente de fabricantes chinos en cantidades grandes.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--anlaco-yellow-industrial)' }}>2. 🔧 Pruebo en mis builds</h4>
                <p style={{ color: 'var(--neon-cyan)' }}>Uso los componentes en mis proyectos reales.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--anlaco-yellow-industrial)' }}>3. 📋 Documento todo</h4>
                <p style={{ color: 'var(--neon-cyan)' }}>Creo BOMs completos con alternativas y consejos.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--anlaco-yellow-industrial)' }}>4. 🛒 Vendo el sobrante</h4>
                <p style={{ color: 'var(--neon-cyan)' }}>Precio justo: coste + gastos de envío.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué Wallapop */}
      <section className="mb-xxl">
        <div className="content-card about-card-shadow">
          <div className="card-body">
            <h3 className="mb-md">
              <span className="badge badge-outline badge-steam">🤔 ¿Por qué uso Wallapop?</span>
            </h3>
            <p className="mb-md">
              Montar una tienda online con procesamiento de pagos, gestión de envíos y mantenimiento de servidores cuesta dinero que prefiero invertir en más material.
            </p>
            <p className="mb-md">
              <strong>Wallapop me da:</strong>
            </p>
            <ul className="mb-md about-wallapop-list">
              <li>✅ Procesamiento de pagos gratuito</li>
              <li>✅ Protección para comprador y vendedor</li>
              <li>✅ Gestión de envíos automatizada</li>
              <li>✅ Cero costes de mantenimiento</li>
            </ul>
            <div className="about-divider neon-divider" aria-hidden="true"></div>
            <p>
              Esta web es mi <strong>catálogo y portfolio</strong>.<br/>
              Wallapop es mi <strong>plataforma de ventas</strong>.<br/>
              <span className="badge badge-premium">Simple, eficaz y económico</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="content-card accent-yellow about-card-shadow" style={{ textAlign: 'center' }}>
          <div className="card-body">
            <h3 className="mb-md neon-glow-cyan">🚀 ¿Listo para tu próximo proyecto?</h3>
            <p className="mb-lg">
              Explora mis componentes, descarga BOMs completos y únete a la comunidad maker.
            </p>
            <div className="about-cta-btns">
              <Link to="/shop" className="btn btn-primary btn-cyberpunk">
                🛒 Ver Componentes
              </Link>
              <Link to="/designs" className="btn btn-outline-primary btn-steam">
                🎯 Ver Proyectos
              </Link>
              <Link to="/contact" className="btn btn-outline-primary btn-urban">
                📧 Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
