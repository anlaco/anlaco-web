import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductCard = ({ product }) => {
  return (
    <div className="content-card premium" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1 }}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} 
        />
        <h3 className="mb-md neon-glow-yellow">{product.name}</h3>
        <p className="mb-md" style={{ color: 'var(--neon-cyan)' }}>{product.shortDescription}</p>
        
        {/* Precio destacado */}
        <div className="mb-md">
          <span className="price-tag" style={{ 
            fontSize: '1.5rem', 
            color: 'var(--anlaco-yellow-industrial)', 
            fontWeight: 'bold',
            textShadow: '0 0 10px var(--neon-yellow)'
          }}>
            {product.price}
          </span>
          <span className="badge-premium" style={{ marginLeft: '0.5rem', color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>
            (Stock: {product.stock})
          </span>
        </div>

        {/* Dimensiones */}
        <div className="mb-md">
          <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>📏 Dimensiones:</strong>
          <div style={{ fontSize: '0.9rem', color: 'var(--neon-cyan)' }}>
            {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth}
          </div>
        </div>

        {/* Categoría */}
        <div className="mb-md">
          <span className="badge-premium" style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem' }}>
            {product.category}
          </span>
        </div>
      </div>

      {/* Botón de compra */}
      <div style={{ marginTop: 'auto' }}>
        <a 
          href={product.wallapopUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary premium-btn"
          style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}
        >
          🛒 Comprar en Wallapop
        </a>
      </div>
    </div>
  );
};

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Obtener categorías únicas
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Filtrar productos
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price':
        return parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="py-lg">
      <h1 className="mb-lg neon-glow-yellow">🛒 Tienda de Componentes</h1>
      <div className="mb-xxl">
        <div className="content-card premium accent-yellow">
          <div className="card-body">
            <h3 className="mb-md neon-glow-cyan">📦 Material de Maker para Makers</h3>
            <p className="mb-md" style={{ color: 'var(--neon-cyan)' }}>
              Todo el material que ves aquí lo he comprado al por mayor para mis proyectos. 
              Ahora está disponible para ti a <strong style={{ color: 'var(--anlaco-yellow-industrial)' }}>precio de coste + gastos de envío</strong>.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>✅ <strong>Calidad probada</strong><br/>Usados en mis builds</div>
              <div>✅ <strong>Precio justo</strong><br/>Sin márgenes abusivos</div>
              <div>✅ <strong>Stock real</strong><br/>Actualizado semanalmente</div>
              <div>✅ <strong>Envío rápido</strong><br/>Desde España</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y Ordenación */}
      <div className="mb-xxl">
        <div className="content-card premium">
          <h3 className="mb-md neon-glow-cyan">🔍 Filtros</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--anlaco-yellow-industrial)' }}>
                Categoría:
              </label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-control premium-input"
                style={{ minWidth: '200px' }}
              >
                <option value="all">Todas las categorías</option>
                {categories.slice(1).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--anlaco-yellow-industrial)' }}>
                Ordenar por:
              </label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="form-control premium-input"
                style={{ minWidth: '200px' }}
              >
                <option value="name">Nombre</option>
                <option value="price">Precio</option>
                <option value="category">Categoría</option>
              </select>
            </div>
          </div>
          
          <div style={{ fontSize: '0.9rem', color: 'var(--neon-cyan)' }}>
            Mostrando {sortedProducts.length} de {products.length} productos
          </div>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className="mb-xxl">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Info adicional */}
      <div className="content-card accent-anthracite">
        <div className="card-body">
          <h3 className="mb-md">❓ ¿No encuentras lo que necesitas?</h3>
          <p className="mb-lg">
            Estoy constantemente añadiendo nuevo material. Si necesitas algo específico, 
            contáctame y te ayudo a encontrar alternativas o proveedores de confianza.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              📧 Contactar
            </Link>
            <Link to="/designs" className="btn btn-outline-primary">
              🎯 Ver Proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
