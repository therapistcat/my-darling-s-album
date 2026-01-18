import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.button
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm shadow-soft border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Music size={20} />
        </motion.div>
      ) : (
        <VolumeX size={20} />
      )}
    </motion.button>
  );
};

export default MusicToggle;
