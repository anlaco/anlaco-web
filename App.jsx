import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg sticky top-0 z-10 border-b border-yellow-400 border-opacity-30 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-wider">ANLACO</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#bom" className="hover:text-yellow-300 transition">Listas BOM</a>
            <a href="#guia" className="hover:text-yellow-300 transition">Guías</a>
            <a href="#como" className="hover:text-yellow-300 transition">¿Cómo?</a>
            <a href="#sobre" className="hover:text-yellow-300 transition">Sobre mí</a>
            <a href="#contacto" className="hover:text-yellow-300 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnciIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogIDxzdG9wIG9mZnNldD0iMjUlIiBzdG9wLWNvbG9yPSIjRjFDQTAxIiBzdG9wLW9wYWNpdHk9IjAuMDUiLz4KICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMC4wMiIvPgo8L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyKSIgLz48L3N2Zz4=')]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight neon-text-clean">
            Tú montas.<br />Yo te doy las piezas.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Listas personalizadas + guías paso a paso. Sin kits, sin riesgos, sin intermediarios.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#bom" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-bold transition transform hover:scale-105 neon-glow">
              Ver Listas Recomendadas
            </a>
            <a href="#guia" className="border border-yellow-400 text-yellow-300 hover:bg-yellow-500 hover:bg-opacity-20 px-6 py-3 rounded-full font-bold transition">
              Acceder a Guías
            </a>
          </div>
        </div>
      </section>

      {/* BOM Section */}
      <section id="bom" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Listas Personalizadas (BOM)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Lista Básica",
                desc: "Componentes esenciales para una impresora funcional.",
                price: "99€ + IVA"
              },
              {
                title: "Lista Mejorada",
                desc: "Mejor rendimiento con componentes optimizados.",
                price: "149€ + IVA"
              },
              {
                title: "Lista Premium",
                desc: "Calidad superior y mayor durabilidad.",
                price: "199€ + IVA"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-yellow-500/30 hover:border-yellow-400 border border-gray-700 transition">
                <h4 className="text-xl font-bold mb-2 text-yellow-400">{item.title}</h4>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <p className="font-semibold text-yellow-300 mb-4">{item.price}</p>
                <button className="mt-2 bg-yellow-400 bg-opacity-20 text-yellow-300 hover:bg-opacity-30 px-4 py-2 rounded text-sm transition">
                  Descargar Detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guías Section */}
      <section id="guia" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Guías y Tutoriales</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Tengo tutoriales completos para ayudarte a montar tu impresora desde cero. Puedes acceder a ellos como parte del paquete o por separado.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Videos paso a paso de montaje</li>
              <li>PDFs técnicos detallados</li>
              <li>Soporte vía WhatsApp o email</li>
            </ul>
            <div className="mt-6">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold transition">
                Ver Canal de YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? */}
      <section id="como" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">¿Cómo Funciona?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                step: "1. Elige tu lista",
                desc: "Selecciona la lista que mejor se adapta a tus necesidades."
              },
              {
                step: "2. Compra los componentes",
                desc: "Compra cada pieza por separado o hazme un pedido personalizado."
              },
              {
                step: "3. Monta tu impresora",
                desc: "Sigue mis guías paso a paso y arma tu impresora tú mismo/a."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg shadow border border-gray-700 hover:border-yellow-400 transition">
                <h4 className="text-xl font-bold mb-2 text-yellow-400">{item.step}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre ANLACO */}
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Sobre ANLACO</h3>
          <div className="max-w-4xl mx-auto text-center">
            <img src="https://picsum.photos/200/300" alt="Yo trabajando" className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg mb-6 border-2 border-yellow-400" />
            <p className="text-lg text-gray-300 mb-6">
              Soy el creador de ANLACO, diseñador y apasionado del mundo maker. Mi objetivo no es ganar dinero rápido, sino ofrecer soluciones DIY accesibles y transparentes.
            </p>
            <p className="text-gray-400">
              No soy una gran empresa. Soy una persona que quiere compartir conocimiento, cubrir costes y crecer de forma orgánica. Todo lo que vendemos está calculado al mínimo margen necesario para seguir adelante.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="https://tiktok.com/@anlaco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.939 14.495c-.28.279-.58.539-.901.779-.32.24-.65.451-1 .641-.35.19-.71.351-1.08.491-.37.14-1.01.21-1.93.21-.82 0-1.46-.07-1.93-.21-.37-.14-.71-.3-1.08-.491-.35-.19-.68-.401-1-.641-.32-.24-.62-.499-.901-.779-.28-.28-.521-.58-.721-.899-.2-.32-.37-.66-.511-1.02-.14-.36-.21-.74-.21-1.15 0-.41.07-.79.21-1.15.14-.36.31-.7.511-1.02.2-.32.441-.62.721-.9.28-.28.58-.53.901-.76.32-.23.65-.431 1-.611.35-.18 1.01-.27 1.93-.27.82 0 1.46.09 1.93.27.37.18.71.391 1.08.611.35.22.68.48.901.76.221.28.411.58.571.9.16.32.29.66.39.99.1.34.16.69.2.105.04.36.06.73.06 1.11 0 .38-.02.75-.06 1.11-.04.36-.1.71-.2.105-.1.33-.23.67-.39.99-.16.31-.35.61-.571.89zm-4.939-6.495v4h2.801c0-.96-.146-1.792-.437-2.495-.292-.703-.724-1.233-1.294-1.59v1.095z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Contacto</h3>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <input type="email" placeholder="Email" className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <textarea placeholder="Tu mensaje..." rows="5" className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded font-bold transition neon-glow">
                Enviar Mensaje
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                O escríbeme directamente por:
              </p>
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 text-green-400 hover:text-green-300">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.71c-.386-.194-.854-.377-1.24-.561-.385-.184-.65-.451-1-.641-.35-.19-.71-.351-1.08-.491-.37-.14-1.01-.21-1.93-.21-.82 0-1.46.07-1.93.21-.37.14-.71.3-1.08.491-.35.19-.68.401-1-.641-.32-.24-.62-.499-.901-.779-.28-.28-.521-.58-.721-.899-.2-.32-.37-.66-.511-1.02-.14-.36-.21-.74-.21-1.15 0-.41.07-.79.21-1.15.14-.36.31-.7.511-1.02.2-.32.441-.62.721-.9.28-.28.58-.53.901-.76.32-.23.65-.431 1-.611.35-.18 1.01-.27 1.93-.27.82 0 1.46.09 1.93.27.37.18.71.391 1.08.611.35.22.68.48.901.76.221.28.411.58.571.9.16.32.29.66.39.99.1.34.16.69.2.105.04.36.06.73.06 1.11 0 .38-.02.75-.06 1.11-.04.36-.1.71-.2.105-.1.33-.23.67-.39.99-.16.31-.35.61-.571.89zm-4.939-6.495v4h2.801c0-.96-.146-1.792-.437-2.495-.292-.703-.724-1.233-1.294-1.59v1.095z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 py-8 border-t border-yellow-400 border-opacity-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} ANLACO – Soluciones DIY para makers.</p>
        </div>
      </footer>

      {/* Neon Glow Effect - Limpio y Legible */}
      <style jsx>{`
        .neon-text-clean {
          color: #F1C40F;
          text-shadow: 0 0 2px #F1C40F, 0 0 5px #F1C40F, 0 0 10px #F1C40F;
        }
        .neon-glow {
          box-shadow: 0 0 6px #F1C40F, 0 0 12px #F1C40F;
        }
      `}</style>
    </div>
  );
}

export default App;
