import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Stars({ rating }) {
  const filled = '★'.repeat(rating);
  const empty = '☆'.repeat(5 - rating);
  return (
    <span className="text-yellow-400 text-lg">
      {filled}
      <span className="text-gray-400">{empty}</span>
    </span>
  );
}

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);

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
      rating,
    };
    setComments([...comments, comment]);
    setNewComment('');
    setRating(5);
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
        <h2 className="text-2xl font-bold mb-4">
          Comentarios ({comments.length})
        </h2>

        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 rounded text-white bg-gray-800"
            rows="3"
            placeholder="Escribe un comentario..."
          />
          <div className="flex items-center mt-2 gap-2">
            <label className="text-sm">Calificación:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="bg-gray-700 text-white p-1 rounded"
            >
              {[5, 4, 3, 2, 1].map(r => (
                <option key={r} value={r}>{r} estrellas</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>

        <ul className="space-y-3">
          {comments.map((comment, i) => (
            <motion.li
              key={comment.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-gray-800 p-4 rounded shadow"
            >
              <Stars rating={comment.rating} />
              <p className="mt-2 text-gray-200">{comment.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
