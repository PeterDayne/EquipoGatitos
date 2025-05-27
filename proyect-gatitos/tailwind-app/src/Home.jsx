import React, { useState, useEffect } from 'react';
import Carousel from './components/Carousel';
import Card from './Card';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data.slice(0, 4)); // Solo los primeros 4 productos
      });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Carrusel */}
      <Carousel />

      {/* Bienvenida */}
      <div className="max-w-screen-xl mx-auto py-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ¡Bienvenido a Gatitos Shop!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Encuentra nuestros productos más destacados
        </p>
      </div>

      {/* Productos destacados */}
      <div className="max-w-screen-xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              paragraph={product.description}
              image={product.image}
              model={`$${product.price}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
