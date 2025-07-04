import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products'; // Importar los productos desde el archivo de datos

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', maxWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '10px' }} />
          <h2>{product.name}</h2>
        </Link>
        <p>{product.shortDescription}</p> {/* Usar shortDescription */}
        <p><strong>Precio:</strong> {product.price}</p>
        <div>
          <strong>Dimensiones:</strong>
          <ul>
            <li>Ancho: {product.dimensions.width}</li>
            <li>Alto: {product.dimensions.height}</li>
            <li>Profundidad: {product.dimensions.depth}</li>
          </ul>
        </div>
      </div>
      <a href={product.wallapopUrl} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>
        <button style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Comprar en Wallapop
        </button>
      </a>
    </div>
  );
};

function Shop() {
  return (
    <div>
      <h1>Nuestra Tienda de Componentes</h1>
      <p>Explora nuestra selección de piezas para tus proyectos.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
