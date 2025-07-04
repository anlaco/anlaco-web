import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products'; // Importar los productos desde el archivo de datos

function ProductPage() {
  const { productId } = useParams();
  const product = products.find(p => p.id.toString() === productId);

  if (!product) {
    return (
      <div>
        <h2>Producto no encontrado</h2>
        <Link to="/shop">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <nav aria-label="breadcrumb" style={{ marginBottom: '20px' }}>
        <ol style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
          <li><Link to="/shop">Tienda</Link></li>
          <li style={{ marginLeft: '5px', marginRight: '5px' }}>/</li>
          <li aria-current="page">{product.name}</li>
        </ol>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h1>{product.name}</h1>
          <p style={{ fontSize: '1.2em', color: '#333' }}>{product.description}</p>
          <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#007bff', margin: '20px 0' }}>{product.price}</p>

          <h3>Dimensiones:</h3>
          <ul>
            <li>Ancho: {product.dimensions.width}</li>
            <li>Alto: {product.dimensions.height}</li>
            <li>Profundidad: {product.dimensions.depth}</li>
          </ul>

          {product.specifications && product.specifications.length > 0 && (
            <>
              <h3>Especificaciones Técnicas:</h3>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </>
          )}

          <a href={product.wallapopUrl} target="_blank" rel="noopener noreferrer">
            <button style={{ marginTop: '20px', padding: '12px 24px', fontSize: '1.1em', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Comprar en Wallapop
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
