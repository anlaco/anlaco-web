import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="py-lg">
      <h1 className="mb-lg">🔧 Sobre ANLACO</h1>
      
      {/* Mi Historia */}
      <div className="mb-xxl">
        <div className="content-card accent-yellow">
          <div className="card-body">
            <h2 className="mb-md">📖 Mi Historia</h2>
            <p className="mb-md">
              Hola, soy <strong>un maker apasionado</strong> que empezó diseñando una impresora 3D compacta. 
              Como muchos makers, me enfrenté al problema de siempre: <strong>los componentes individuales son carísimos</strong>.
            </p>
            <p className="mb-md">
              Mi solución fue simple: <strong>comprar al por mayor directamente de fabricantes chinos</strong>. 
              El problema es que para 1 metro de perfil, tenía que comprar 12 metros. 
              Para 10 tornillos, tenía que comprar 1000.
            </p>
            <p className="mb-lg">
              Así nació <strong>ANLACO</strong>: una forma de compartir ese material de calidad 
              con otros makers, <strong>a precio de coste + gastos de envío</strong>. Sin márgenes abusivos, 
              sin intermediarios, solo material de calidad para makers.
            </p>
          </div>
        </div>
      </div>

      {/* Filosofía */}
      <div className="mb-xxl">
        <h2 className="mb-lg">💡 Mi Filosofía</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="content-card">
            <h3 className="mb-md">🎯 Transparencia Total</h3>
            <p>
              Te digo exactamente lo que pago por cada componente. 
              Mi "margen" solo cubre gastos de envío y el tiempo de gestión.
            </p>
          </div>
          <div className="content-card">
            <h3 className="mb-md">🔧 Experiencia Real</h3>
            <p>
              Cada componente que vendo lo he usado en mis builds. 
              Te doy consejos basados en horas de trabajo real, no en datasheets.
            </p>
          </div>
          <div className="content-card">
            <h3 className="mb-md">📦 Calidad Probada</h3>
            <p>
              Compro directamente de fabricantes que uso en mis proyectos. 
              Si no es lo suficientemente bueno para mí, no lo vendo.
            </p>
          </div>
        </div>
      </div>

      {/* El Problema del Marcado CE */}
      <div className="mb-xxl">
        <div className="content-card accent-anthracite">
          <div className="card-body">
            <h3 className="mb-md">⚠️ ¿Por qué no vendo kits completos?</h3>
            <p className="mb-md">
              Me encantaría vender kits completos de mis diseños, pero hay un problema legal: 
              <strong>cualquier producto que se monte con el kit necesita marcado CE</strong>.
            </p>
            <p className="mb-md">
              Conseguir el marcado CE para una impresora 3D puede costar entre 5.000€ y 15.000€. 
              Como maker individual, no me lo puedo permitir.
            </p>
            <p className="mb-lg">
              <strong>Mi solución:</strong> Vendo componentes individuales y ofrezco BOMs completos 
              con alternativas. Tú decides qué comprar y cómo montarlo. 
              Es más flexible y mucho más económico.
            </p>
          </div>
        </div>
      </div>

      {/* Modelo de Negocio */}
      <div className="mb-xxl">
        <div className="content-card">
          <div className="card-header">
            <h3 className="card-title">🎯 ¿Cómo Funciona ANLACO?</h3>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <h4>1. 📦 Compra al por mayor</h4>
                <p>Compro directamente de fabricantes chinos en cantidades grandes.</p>
              </div>
              <div>
                <h4>2. 🔧 Pruebo en mis builds</h4>
                <p>Uso los componentes en mis proyectos reales.</p>
              </div>
              <div>
                <h4>3. 📋 Documento todo</h4>
                <p>Creo BOMs completos con alternativas y consejos.</p>
              </div>
              <div>
                <h4>4. 🛒 Vendo el sobrante</h4>
                <p>Precio justo: coste + gastos de envío.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Por qué Wallapop */}
      <div className="mb-xxl">
        <div className="content-card">
          <div className="card-body">
            <h3 className="mb-md">🤔 ¿Por qué uso Wallapop?</h3>
            <p className="mb-md">
              Montar una tienda online con procesamiento de pagos, gestión de envíos y 
              mantenimiento de servidores cuesta dinero que prefiero invertir en más material.
            </p>
            <p className="mb-md">
              <strong>Wallapop me da:</strong>
            </p>
            <ul className="mb-md">
              <li>✅ Procesamiento de pagos gratuito</li>
              <li>✅ Protección para comprador y vendedor</li>
              <li>✅ Gestión de envíos automatizada</li>
              <li>✅ Cero costes de mantenimiento</li>
            </ul>
            <p>
              Esta web es mi <strong>catálogo y portfolio</strong>. 
              Wallapop es mi <strong>plataforma de ventas</strong>. 
              Simple, eficaz y económico.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="content-card accent-yellow" style={{ textAlign: 'center' }}>
        <div className="card-body">
          <h3 className="mb-md">🚀 ¿Listo para tu próximo proyecto?</h3>
          <p className="mb-lg">
            Explora mis componentes, descarga BOMs completos y únete a la comunidad maker.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-primary">
              🛒 Ver Componentes
            </Link>
            <Link to="/designs" className="btn btn-outline-primary">
              🎯 Ver Proyectos
            </Link>
            <Link to="/contact" className="btn btn-outline-primary">
              📧 Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
