import { useState, useRef } from "react";
import { motion } from "framer-motion";
import MatchForm from "../components/MatchForm";
import MatchResult from "../components/MatchResult";
import "../Assets/Carousel.css";

const loveQuotes = [
  "Love is not about how many days, months, or years you have been together. It’s all about how much you love each other every single day.",
  "The best thing to hold onto in life is each other.",
  "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
  "I love you not because of who you are, but because of who I am when I am with you.",
  "A successful marriage requires falling in love many times, always with the same person."
];

const songs = [
  "/BackgroundSong.mp3",
  "/IMissYou.mp3",
  "/Nafeesisboujee - Stephanie.mp3"
];

const Home = () => {
  const [name, setName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [lovePercentage, setLovePercentage] = useState<number | null>(null);
  const [userImages, setUserImages] = useState<File[]>([]);
  const [partnerImages, setPartnerImages] = useState<File[]>([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const [quote, setQuote] = useState("");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  
  const audioRef = useRef(new Audio(songs[currentSongIndex]));
  
  const playSong = () => {
    audioRef.current.src = songs[currentSongIndex];
    audioRef.current.play().then(() => setIsPlaying(true)).catch(() => skipSong());
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const skipSong = () => {
    let nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    audioRef.current.src = songs[nextIndex];
    audioRef.current.play().catch(() => setIsPlaying(false));
  };

  const previousSong = () => {
    let prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    audioRef.current.src = songs[prevIndex];
    audioRef.current.play().catch(() => setIsPlaying(false));
  };

  const calculateLove = () => {
    if (userImages.length !== 3 || partnerImages.length !== 3) {
      alert("Please upload exactly 3 pictures of yourself and 3 pictures of your loved one.");
      return;
    }

    const randomPercentage = Math.floor(Math.random() * 51) + 50;
    setLovePercentage(randomPercentage);
    setShowCarousel(true);
    setQuote(loveQuotes[Math.floor(Math.random() * loveQuotes.length)]);
    setShowControls(true);
    playSong();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-pink-400 to-red-600 text-white relative overflow-hidden">
     <motion.h1
  className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold mb-8 pt-5"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  ❤️ Valentine’s Love Calculator 💖
</motion.h1>



      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg">
        <MatchForm 
          name={name} 
          setName={setName} 
          partnerName={partnerName} 
          setPartnerName={setPartnerName} 
          calculateLove={calculateLove}
          setUserImages={setUserImages}
          setPartnerImages={setPartnerImages}
        />
      </div>

      {lovePercentage !== null && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MatchResult 
            name={name} 
            partnerName={partnerName} 
            matchPercentage={lovePercentage}
          />
        </motion.div>
      )}

      {quote && (
        <p className="mt-6 text-lg italic text-center max-w-lg">“{quote}”</p>
      )}

      {showControls && (
        <motion.div 
          className="mt-4 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={previousSong} className="bg-white text-pink-600 px-4 py-2 rounded-lg">Previous</button>
          <button onClick={playSong} className="bg-white text-pink-600 px-4 py-2 rounded-lg">Play</button>
          <button onClick={pauseSong} className="bg-white text-pink-600 px-4 py-2 rounded-lg">Pause</button>
          <button onClick={skipSong} className="bg-white text-pink-600 px-4 py-2 rounded-lg">Next</button>
        </motion.div>
      )}

      {showCarousel && (
        <div className="mt-8 w-full max-w-xl">
          <div className="carousel-container">
            <div className="carousel">
              {userImages.concat(partnerImages).map((img, index) => (
                <div key={index} className="carousel-item">
                  <img src={URL.createObjectURL(img)} alt={`Image ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="w-full bg-red-700 text-center text-white py-4 mt-8">
        <p>Made with ❤️ by <a href="https://github.com/ShawnTheCreator/">Shawn</a></p>
        <p>&copy; 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;