import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [lovePercentage, setLovePercentage] = useState<number | null>(null);

  const calculateLove = () => {
    if (yourName && partnerName) {
      const percentage = Math.floor(Math.random() * 51) + 50; // Generates 50-100%
      setLovePercentage(percentage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-red-500 flex flex-col items-center justify-center text-white p-6">
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">❤️ Love Match Calculator ❤️</h1>
        <p className="text-lg">Find out your love compatibility this Valentine's Day!</p>
      </motion.div>

      {/* Form */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-lg mt-8 w-full max-w-md text-black"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4">
          <label className="block text-lg font-semibold">Your Name</label>
          <input
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Partner's Name</label>
          <input
            type="text"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter your partner's name"
          />
        </div>

        <button
          onClick={calculateLove}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition-all"
        >
          Calculate Love ❤️
        </button>

        {lovePercentage !== null && (
          <motion.div
            className="text-center text-2xl font-bold mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            💖 Love Match: {lovePercentage}% 💖
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
