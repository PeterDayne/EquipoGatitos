import { useEffect, useState } from 'react';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
  }, []);

  const handlePurchase = () => {
    // Aquí podrías agregar lógica para enviar la orden a un backend.
    setSuccess(true);
    setCart([]);
    localStorage.removeItem('cart');
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Checkout</h1>

      {success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          ¡Gracias por tu compra!
        </div>
      )}

      {cart.length === 0 && !success && (
        <p className="text-gray-700 dark:text-gray-200">No hay productos en el carrito.</p>
      )}

      <div className="space-y-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-cover rounded mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cantidad: {item.quantity}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Precio: ${item.price}</p>
            </div>
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-8">
          <div className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Total: ${total}
          </div>
          <button
            onClick={handlePurchase}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded shadow transition duration-300"
          >
            Comprar
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
