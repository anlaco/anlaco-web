import React from 'react';

function About() {
  return (
    <div className="py-lg"> {/* Added padding utility class */}
      <h1 className="mb-lg">Sobre ANLACO</h1>
      <p className="mb-md">ANLACO nació de la pasión por la fabricación y la electrónica. Desde la idea inicial de fabricar impresoras 3D hasta convertirnos en tu fuente de componentes y guías DIY, nuestra misión es empoderarte.</p>
      <p className="mb-lg">Creemos en el crecimiento orgánico, la transparencia y en el potencial de cada individuo para crear, inspirado por la visión de un futuro donde la tecnología y la creatividad van de la mano, como un ángel robot que guía la innovación.</p>

      <button className="btn btn-outline-secondary mb-xl">Conoce Nuestra Filosofía</button>

      <div className="content-card mt-lg">
        <div className="card-header">
          <h3 className="card-title">Nuestros Valores</h3>
        </div>
        <div className="card-body">
          <ul>
            <li>Innovación Constante</li>
            <li>Comunidad Abierta</li>
            <li>Calidad y Transparencia</li>
            <li>Empoderamiento DIY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
