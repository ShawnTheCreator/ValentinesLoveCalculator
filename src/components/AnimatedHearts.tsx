import { motion } from "framer-motion";

const Hearts = () => {
  const hearts = Array.from({ length: 10 }); // Number of hearts

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((_, index) => {
        const randomX = Math.random() * 100 - 50; // Random horizontal movement
        const randomDelay = Math.random() * 5; // Random start delay
        const randomScale = Math.random() * 1.5 + 0.5; // Random size

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, x: randomX, scale: randomScale }}
            animate={{
              opacity: [0, 1, 0],
              y: [-50, -150, -300],
              x: [randomX, randomX + 10, randomX - 10],
            }}
            transition={{
              duration: 4,
              delay: randomDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-red-500"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "0px",
              fontSize: `${Math.random() * 2 + 1}rem`,
            }}
          >
            ❤️
          </motion.div>
        );
      })}
    </div>
  );
};

export default Hearts;
