import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Designs from './pages/Designs';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage'; // Importar la nueva página de producto
import './assets/styles/main.css'; // Asegurarse de importar los estilos globales

function App() {
  return (
    <Router>
      <Header />
      <main> {/* Envolver Routes en un main para posible estilizado */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductPage />} /> {/* Nueva ruta dinámica */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
