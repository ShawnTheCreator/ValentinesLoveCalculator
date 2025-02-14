import { motion } from "framer-motion";

const images = [
  "https://source.unsplash.com/random/300x300/?love",
  "https://source.unsplash.com/random/300x300/?romance",
  "https://source.unsplash.com/random/300x300/?couple",
  "https://source.unsplash.com/random/300x300/?heart",
  "https://source.unsplash.com/random/300x300/?valentine",
  "https://source.unsplash.com/random/300x300/?flowers",
];

const Gallery = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-center text-white mb-6">💖 Love Gallery 💖</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={src} alt="Romantic" className="w-full h-auto object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
