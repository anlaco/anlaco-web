import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Por ahora, solo mostramos los datos en consola
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Por ahora este formulario es solo demo. Contáctame directamente.');
  };

  return (
    <div className="py-lg">
      <h1 className="mb-lg neon-glow-yellow">📧 Contacto</h1>
      
      {/* Introducción */}
      <div className="mb-xxl">
        <div className="content-card premium accent-yellow">
          <div className="card-body">
            <h2 className="mb-md neon-glow-cyan">💬 Hablemos</h2>
            <p className="mb-md" style={{ color: 'var(--neon-cyan)' }}>
              ¿Tienes dudas sobre algún componente? ¿Necesitas ayuda con tu proyecto? 
              ¿Buscas algo específico que no tengo en stock?
            </p>
            <p className="mb-lg" style={{ color: 'var(--neon-cyan)' }}>
              <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>Escríbeme y te ayudo.</strong> Como maker, entiendo los desafíos 
              y siempre intento echar una mano a la comunidad.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        {/* Formulario */}
        <div className="content-card premium">
          <div className="card-header">
            <h3 className="card-title neon-glow-cyan">📝 Envíame un mensaje</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" style={{ color: 'var(--anlaco-yellow-industrial)' }}><strong>Nombre *</strong></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo" 
                  className="premium-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" style={{ color: 'var(--anlaco-yellow-industrial)' }}><strong>Email *</strong></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com" 
                  className="premium-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason" style={{ color: 'var(--anlaco-yellow-industrial)' }}><strong>Motivo de contacto</strong></label>
                <select 
                  id="reason" 
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="premium-input"
                >
                  <option value="">Selecciona un motivo...</option>
                  <option value="consulta-tecnica">🔧 Consulta técnica</option>
                  <option value="producto-especifico">🛒 Busco un producto específico</option>
                  <option value="ayuda-proyecto">🎯 Ayuda con mi proyecto</option>
                  <option value="colaboracion">🤝 Colaboración</option>
                  <option value="feedback">💡 Feedback/Sugerencia</option>
                  <option value="otro">❓ Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject" style={{ color: 'var(--anlaco-yellow-industrial)' }}><strong>Asunto *</strong></label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ej: Consulta sobre perfiles V-Slot" 
                  className="premium-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" style={{ color: 'var(--anlaco-yellow-industrial)' }}><strong>Mensaje *</strong></label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6" 
                  placeholder="Cuéntame en detalle lo que necesitas. Cuanta más información me des, mejor te podré ayudar..."
                  className="premium-input"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary premium-btn" style={{ width: '100%' }}>
                📧 Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Información de contacto */}
        <div>
          {/* Tiempos de respuesta */}
          <div className="content-card premium mb-lg">
            <div className="card-header">
              <h3 className="card-title neon-glow-cyan">⏱️ Tiempos de respuesta</h3>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>📧 Consultas generales:</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>24-48 horas</span>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>🔧 Consultas técnicas:</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>1-2 días (incluye investigación)</span>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>🛒 Consultas de stock:</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>Mismo día</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--neon-cyan)', fontStyle: 'italic' }}>
                * Trabajo en esto en mi tiempo libre, pero siempre contesto
              </div>
            </div>
          </div>

          {/* Preguntas frecuentes */}
          <div className="content-card premium">
            <div className="card-header">
              <h3 className="card-title neon-glow-cyan">❓ Preguntas frecuentes</h3>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>¿Haces envíos internacionales?</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>
                  Sí, a través de Wallapop. Los costes dependen del destino.
                </span>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>¿Tienes más stock del que aparece?</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>
                  A veces sí. Actualizo semanalmente, pero pregúntame.
                </span>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>¿Puedes conseguir algo específico?</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>
                  Depende. Si es para un pedido grande, podemos hablar.
                </span>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>¿Das soporte técnico?</strong><br/>
                <span style={{ color: 'var(--neon-cyan)' }}>
                  Sí, consejos gratuitos basados en mi experiencia.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enlaces alternativos */}
      <div className="mt-xxl">
        <div className="content-card premium accent-anthracite" style={{ textAlign: 'center' }}>
          <div className="card-body">
            <h3 className="mb-md neon-glow-cyan">🚀 Otras formas de conectar</h3>
            <p className="mb-lg" style={{ color: 'var(--neon-cyan)' }}>
              Mientras implemento un sistema de contacto más avanzado, 
              también puedes encontrarme en:
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn btn-primary premium-btn">
                🛒 Ver mi tienda en Wallapop
              </Link>
              <Link to="/designs" className="btn btn-outline-primary premium-btn">
                🎯 Revisar mis proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
