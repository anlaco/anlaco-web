import React from 'react';

function Contact() {
  return (
    <div className="py-lg"> {/* Added padding utility class */}
      <h1 className="mb-lg">Contacto</h1>
      <p className="mb-lg">Envíanos tus preguntas o comentarios. Nos pondremos en contacto contigo lo antes posible.</p>

      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Tu nombre completo" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" placeholder="tu@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input type="text" id="subject" placeholder="Asunto de tu mensaje" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="reason">Motivo de Contacto</label>
          <select id="reason">
            <option value="">Selecciona un motivo...</option>
            <option value="consulta">Consulta General</option>
            <option value="soporte">Soporte Técnico</option>
            <option value="ventas">Ventas</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contact;
