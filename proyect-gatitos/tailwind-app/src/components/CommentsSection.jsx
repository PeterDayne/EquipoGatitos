// src/components/CommentsSection.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fakeCommentsAPI = [
  {
    id: 1,
    user: "Ana",
    comment: "¡Me encantó este producto!",
    rating: 5,
  },
  {
    id: 2,
    user: "Luis",
    comment: "Muy útil y bonito.",
    rating: 4,
  },
  {
    id: 3,
    user: "Sofía",
    comment: "No era lo que esperaba :(",
    rating: 2,
  },
];

const Stars = ({ rating }) => {
  const filled = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return (
    <span className="text-yellow-400 text-lg">
      {filled}
      <span className="text-gray-300">{empty}</span>
    </span>
  );
};

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Simular fetch desde API
    setTimeout(() => {
      setComments(fakeCommentsAPI);
    }, 500);
  }, []);

  return (
    <section className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Comentarios ({comments.length})
      </h2>
      {comments.map((c) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: c.id * 0.1 }}
          className="bg-white shadow-md p-4 rounded-2xl mb-4 border"
        >
          <h3 className="font-semibold text-lg">{c.user}</h3>
          <Stars rating={c.rating} />
          <p className="text-gray-700 mt-2">{c.comment}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default CommentsSection;
