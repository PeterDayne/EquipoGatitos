import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    const comment = {
      id: Date.now(),
      text: newComment.trim(),
    };
    setComments([...comments, comment]);
    setNewComment('');
  };

  if (!product) return <div className="p-8 text-white">Cargando producto...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto text-white dark:bg-gray-900 mt-5">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-64 object-contain mb-6 mx-auto" />
      <p className="mb-4 text-gray-300">{product.description}</p>
      <p className="text-lg font-semibold text-green-400 mb-6">Precio: ${product.price}</p>

      {/* Sección de Comentarios */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Comentarios</h2>

        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 rounded text-white"
            rows="3"
            placeholder="Escribe un comentario..."
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>

        <ul className="space-y-2">
          {comments.map(comment => (
            <li key={comment.id} className="bg-gray-800 p-3 rounded text-white">
              {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
