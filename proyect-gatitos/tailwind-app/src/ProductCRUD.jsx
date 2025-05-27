import { useState } from 'react';

function ProductCrud() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [product, setProduct] = useState({ title: '', description: '', price: '', image: '' });
  const [productList, setProductList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setProduct({ title: '', description: '', price: '', image: '' });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedList = [...productList];
      updatedList[editIndex] = product;
      setProductList(updatedList);
      alert('Producto modificado');
    } else {
      setProductList((prev) => [...prev, product]);
      alert('Producto guardado temporalmente');
    }
    setProduct({ title: '', description: '', price: '', image: '' });
    setEditIndex(null);
    setSelectedOption(null);
  };

  const handleCancel = () => {
    setProduct({ title: '', description: '', price: '', image: '' });
    setEditIndex(null);
    setSelectedOption(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setProduct(productList[index]);
    setSelectedOption('crear');
  };

  const handleDelete = (index) => {
    const confirmDelete = confirm('¿Estás seguro de eliminar este producto?');
    if (confirmDelete) {
      const updatedList = productList.filter((_, i) => i !== index);
      setProductList(updatedList);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md dark:bg-gray-800">
      {!selectedOption && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Selecciona una opción</h2>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleOptionClick('crear')}
              className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Crear producto
            </button>
            <button
              onClick={() => handleOptionClick('modificar')}
              className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Modificar producto
            </button>
            <button
              onClick={() => handleOptionClick('eliminar')}
              className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Eliminar producto
            </button>
          </div>
        </div>
      )}

      {(selectedOption === 'crear' || editIndex !== null) && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            {editIndex !== null ? 'Modificar producto' : 'Crear nuevo producto'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="title" placeholder="Nombre" value={product.title} onChange={handleChange} required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" />
            <textarea name="description" placeholder="Descripción" value={product.description} onChange={handleChange} required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" />
            <input type="number" name="price" placeholder="Precio" value={product.price} onChange={handleChange} required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" />
            <input type="text" name="image" placeholder="URL de imagen" value={product.image} onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" />
            <div className="flex justify-end space-x-4">
              <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                Cancelar
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Guardar
              </button>
            </div>
          </form>
        </>
      )}

      {(selectedOption === 'modificar' || selectedOption === 'eliminar') && productList.length > 0 && (
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Lista de productos
          </h2>
          {productList.map((prod, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
              <p><strong>Nombre:</strong> {prod.title}</p>
              <p><strong>Descripción:</strong> {prod.description}</p>
              <p><strong>Precio:</strong> ${prod.price}</p>
              <div className="mt-2 space-x-2">
                {selectedOption === 'modificar' && (
                  <button onClick={() => handleEdit(index)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Editar
                  </button>
                )}
                {selectedOption === 'eliminar' && (
                  <button onClick={() => handleDelete(index)} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {(selectedOption === 'modificar' || selectedOption === 'eliminar') && productList.length === 0 && (
        <p className="text-gray-600 mt-4">No hay productos disponibles.</p>
      )}
    </div>
  );
}

export default ProductCrud;
