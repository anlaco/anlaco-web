import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Designs from './pages/Designs';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import './assets/styles/main.css';

// Hook para obtener el tamaño de la ventana
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Llama al handler inmediatamente para establecer el tamaño inicial
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const PageSection = ({ id, children, className = "" }) => (
  <div id={id} className={`page-section-content ${className}`}> {/* Cambiado de <section> a <div> para SwiperSlide y se añade clase para contenido interno */}
    {children}
  </div>
);

// Contenido de las páginas como un array para facilitar el mapeo
const pages = [
  { id: "home", Component: Home },
  { id: "designs", Component: Designs },
  { id: "shop", Component: Shop },
  { id: "about", Component: About },
  { id: "contact", Component: Contact },
];

function AppContent() {
  const { width } = useWindowSize();
  const isSmallScreen = width !== undefined && width < 768; // Umbral para pantallas pequeñas (igual que en CSS media query)

  if (isSmallScreen) {
    return (
      <>
        <Header />
        <main className="page-container-swiper"> {/* Contenedor específico para Swiper */}
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0} // No espacio entre slides
            slidesPerView={1} // Mostrar 1 slide a la vez
            navigation
            pagination={{ clickable: true }}
            className="mySwiper" // Clase para posible estilizado adicional
          >
            {pages.map(page => (
              <SwiperSlide key={page.id} className="page-section swiper-full-height">
                <PageSection id={page.id}>
                  <page.Component />
                </PageSection>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
        <Footer />
      </>
    );
  }

  // Layout original para pantallas grandes
  return (
    <>
      <Header />
      <main className="page-container"> {/* El contenedor flex original */}
        {pages.map(page => (
          <section key={page.id} id={page.id} className="page-section"> {/* Volvemos a usar <section> aquí */}
            <PageSection id={`${page.id}-content`}> {/* El div interno para max-width y centrado */}
               <page.Component />
            </PageSection>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
