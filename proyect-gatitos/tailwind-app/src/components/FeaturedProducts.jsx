import React from 'react';

const products = [
  { id: 1, name: 'Cama para gato', price: '$499', image: '/images/product1.jpg' },
  { id: 2, name: 'Rascador', price: '$299', image: '/images/product2.jpg' },
  { id: 3, name: 'Comida premium', price: '$199', image: '/images/product3.jpg' },
];

function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
